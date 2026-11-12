# Patient support safety model

An isolated TypeScript experiment for the approved B-design boundaries. It uses only synthetic IDs, in-memory ledgers, fake time, and synchronous effect adapters. No Firebase, AI, email, credentials, or network calls occur in the test code. Installing dependencies uses the npm registry.

Run from this directory with Node.js 24:

```powershell
npm.cmd ci
npm.cmd run typecheck
npm.cmd test
npm.cmd run test:properties
npm.cmd run test:http
```

Dependencies are pinned in package.json and package-lock.json; do not install globally. Windows PowerShell may block npm.ps1; npm.cmd avoids changing execution policy. The root application's dependencies are independent.

## Replay

The six property tests each run 500 cases with default seed 20261112. Failure output includes the shrunken counterexample, seed, and replay path. Reproduce a specific failure by filtering the same test and setting its recorded seed and path:

```powershell
$env:FC_SEED = '20261112'
$env:FC_PATH = 'replace-with-recorded-path'
npm.cmd run test:properties -- -t 'replace-with-failing-test-name'
Remove-Item Env:FC_SEED
Remove-Item Env:FC_PATH
```

Do not apply one property's path to all properties. A different run seed can be chosen using FC_SEED; never hide a failure by changing the seed or retrying until it passes. CI stores JSON test output even on failure.

## Evidence boundaries

Fixed scenarios L-01 through L-10 live in tests/scenarios.test.ts. They distinguish reservation from actual adapter handoff, previously started effects from new effects, durable receipt from Applied/Accepted, and isolated partial reopening from global safety failure. The negative control detects a deliberately defective cached-permission design in test code only.

L-03 intentionally demonstrates that a direct business-store commit before the prohibition reaches that store can succeed. The controller stays Pending until application and other acceptance conditions are met. A passing test here confirms this limitation is exposed, not that cross-database atomicity has been solved.

The ledger's synchronous operations, effect adapter's atomic first-byte handoff, protected topology flag, and recovery evidence booleans are model assumptions. They are not production mechanisms. Snapshot roundtrips cover valid model-produced JSON, not hostile or corrupted import validation. Surviving partial Prepare/Decision records are retained but must not be promoted to confirmed permission.

Real sockets, process isolation, gate bypass prevention, IAM revocation, Firestore durability/transactions, Firebase REST bypasses, production concurrency, latency, and actual disaster recovery require separate integration validation. The auth model implements selected rules; it is not an authentication service.

Full Japanese results and installation instructions are under aidlc-docs/construction/patient-support-app/code/ at the workspace root.

## Real loopback HTTP experiment

`test:http` forks a gateway and receiver using Node.js built-in HTTP and IPC. Both listeners bind only to `127.0.0.1` on OS-assigned ports. No additional package or external service is required. The `.mjs` entry points run directly under Node.js; protocol and harness code are TypeScript. They are test fixtures, not production servers.

Checkpoints and IPC acknowledgments establish test order without guessed sleep intervals. The receiver separately records headers, first body chunk, complete body and response; the gateway records reservation, last check, write call, write callback and finish. Traces are written to `artifacts/http-traces.json`, including on assertion failure. CI's existing artifact upload includes this file.

Every scenario closes listeners and terminates/awaits child processes in `finally`. RPC and HTTP deadlines bound a hung test; a deadline is a test failure, never proof of cancellation. Windows OS-level suspension is not used: checkpoints and an actual child-process termination cover only the named interleavings.

The deliberately defective gateway branch is enabled only by the negative-control test to reproduce a cached-permission race. Do not reuse this fixture as an application gateway. The candidate's final check plus HTTP call is ordered within one JavaScript actor; it does not establish fencing against arbitrary OS suspension or multiple Cloud Run instances. A sender's finish event is not proof the receiver consumed the body. A successful child termination does not retract already received bytes. Unknown outcomes must remain unknown.
