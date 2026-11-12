terraform {
  required_version = ">= 1.6.0, < 2.0.0"
  required_providers {
    google = { source = "hashicorp/google", version = "~> 7.0" }
  }
}

variable "project_id" { type = string }
variable "environment_id" {
  type = string
  validation {
    condition     = startswith(var.environment_id, "gate-check-")
    error_message = "Dedicated synthetic environment required."
  }
}
variable "image_digest" {
  type = string
  validation {
    condition     = can(regex("@sha256:[0-9a-f]{64}$", var.image_digest))
    error_message = "Immutable image digest required."
  }
}
variable "frontend_certificate" { type = string }
variable "validated_network_design_reference" { type = string }

locals {
  regions = { T = "asia-northeast1", O = "asia-northeast2" }
  roles   = toset(["entry-return", "business", "writer", "safety-coordinator", "final-send", "test-sink"])
  services = merge(
    { for r in local.roles : "T-${r}" => { role = r, region = "T" } },
    { for r in ["entry-return", "safety-coordinator", "final-send", "test-sink"] : "O-${r}" => { role = r, region = "O" } }
  )
  # Deliberate hard blockers. A document reference alone cannot make these true.
  blockers = ["PG-01 final network handoff fence", "PG-02 complete old executor exclusion", "PG-03 egress and DB IAM boundaries", "PG-04 stopped cutover and Canary reconciliation"]
  calls = {
    "business-writer" = { from = "business", to = "writer" }
    "business-send" = { from = "business", to = "final-send" }
    "business-return" = { from = "business", to = "entry-return" }
    "entry-business" = { from = "entry-return", to = "business" }
    "entry-safety" = { from = "entry-return", to = "safety-coordinator" }
    "safety-writer" = { from = "safety-coordinator", to = "writer" }
    "send-sink" = { from = "final-send", to = "test-sink" }
  }
}

resource "terraform_data" "readiness" {
  input = local.blockers
  lifecycle {
    precondition {
      condition     = length(local.blockers) == 0 && length(var.validated_network_design_reference) > 0
      error_message = "PREPARATION ONLY. Resolve and review final fences, IAM, exact destinations and Canary before any apply."
    }
  }
}

resource "google_compute_network" "synthetic" {
  project = var.project_id
  name = "${var.environment_id}-vpc"
  auto_create_subnetworks = false
  depends_on = [terraform_data.readiness]
}
resource "google_compute_subnetwork" "regional" {
  for_each = local.regions
  project = var.project_id
  name = "${var.environment_id}-${lower(each.key)}"
  region = each.value
  ip_cidr_range = each.key == "T" ? "10.81.0.0/24" : "10.82.0.0/24"
  network = google_compute_network.synthetic.id
  private_ip_google_access = true
}
resource "google_compute_firewall" "deny_egress" {
  project = var.project_id
  name = "${var.environment_id}-deny-egress"
  network = google_compute_network.synthetic.name
  direction = "EGRESS"
  priority = 65534
  destination_ranges = ["0.0.0.0/0"]
  deny { protocol = "all" }
}

resource "google_firestore_database" "business" {
  project = var.project_id
  name = "${var.environment_id}-business"
  location_id = local.regions.T
  type = "FIRESTORE_NATIVE"
  delete_protection_state = "DELETE_PROTECTION_ENABLED"
  depends_on = [terraform_data.readiness]
}
resource "google_firestore_database" "safety" {
  for_each = local.regions
  project = var.project_id
  name = "${var.environment_id}-safety-${lower(each.key)}"
  location_id = each.value
  type = "FIRESTORE_NATIVE"
  delete_protection_state = "DELETE_PROTECTION_ENABLED"
  depends_on = [terraform_data.readiness]
}
resource "google_service_account" "service" {
  for_each = local.services
  project = var.project_id
  account_id = "gc-${substr(sha256("${var.environment_id}-${each.key}"), 0, 24)}"
  display_name = "${var.environment_id}-${each.key}"
  depends_on = [terraform_data.readiness]
}
resource "google_secret_manager_secret" "config" {
  for_each = local.services
  project = var.project_id
  secret_id = "${var.environment_id}-${lower(each.key)}-config"
  replication {
    user_managed {
      replicas { location = local.regions[each.value.region] }
    }
  }
  depends_on = [terraform_data.readiness]
}
resource "google_secret_manager_secret_iam_member" "config" {
  for_each = local.services
  project = var.project_id
  secret_id = google_secret_manager_secret.config[each.key].secret_id
  role = "roles/secretmanager.secretAccessor"
  member = "serviceAccount:${google_service_account.service[each.key].email}"
}
resource "google_cloud_run_v2_service" "service" {
  for_each = local.services
  project = var.project_id
  name = "${var.environment_id}-${lower(each.key)}"
  location = local.regions[each.value.region]
  ingress = each.value.role == "entry-return" ? "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER" : "INGRESS_TRAFFIC_INTERNAL_ONLY"
  deletion_protection = true
  template {
    service_account = google_service_account.service[each.key].email
    timeout = "10s"
    max_instance_request_concurrency = 4
    scaling {
      min_instance_count = 0
      max_instance_count = 2
    }
    vpc_access {
      egress = "ALL_TRAFFIC"
      network_interfaces {
        network = google_compute_network.synthetic.name
        subnetwork = google_compute_subnetwork.regional[each.value.region].name
      }
    }
    containers {
      image = var.image_digest
      resources { limits = { cpu = "1", memory = "512Mi" } }
      env {
        name = "GATE_CONFIG"
        value = "/config/config.json"
      }
      volume_mounts {
        name = "config"
        mount_path = "/config"
      }
    }
    volumes {
      name = "config"
      secret {
        secret = google_secret_manager_secret.config[each.key].secret_id
        items {
          version = "1"
          path = "config.json"
        }
      }
    }
  }
  depends_on = [terraform_data.readiness]
}
resource "google_cloud_run_v2_service_iam_member" "invoke" {
  for_each = local.calls
  project = var.project_id
  location = local.regions.T
  name = google_cloud_run_v2_service.service["T-${each.value.to}"].name
  role = "roles/run.invoker"
  member = "serviceAccount:${google_service_account.service["T-${each.value.from}"].email}"
}
resource "google_compute_region_network_endpoint_group" "entry" {
  project = var.project_id
  name = "${var.environment_id}-entry"
  region = local.regions.T
  network_endpoint_type = "SERVERLESS"
  cloud_run { service = google_cloud_run_v2_service.service["T-entry-return"].name }
}
resource "google_compute_backend_service" "entry" {
  project = var.project_id
  name = "${var.environment_id}-entry"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  protocol = "HTTP"
  backend { group = google_compute_region_network_endpoint_group.entry.id }
}
resource "google_compute_url_map" "entry" {
  project = var.project_id
  name = "${var.environment_id}-entry"
  default_service = google_compute_backend_service.entry.id
}
resource "google_compute_target_https_proxy" "entry" {
  project = var.project_id
  name = "${var.environment_id}-entry"
  url_map = google_compute_url_map.entry.id
  ssl_certificates = [var.frontend_certificate]
}
resource "google_compute_global_forwarding_rule" "entry" {
  project = var.project_id
  name = "${var.environment_id}-entry"
  load_balancing_scheme = "EXTERNAL_MANAGED"
  port_range = "443"
  target = google_compute_target_https_proxy.entry.id
}
output "unresolved" { value = local.blockers }
