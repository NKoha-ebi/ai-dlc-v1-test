export interface RecoveryEvidence {
  independentlyProtected: boolean;
  oldExecutorsExcluded: boolean;
  unknownTargets: boolean;
  arrivalsReconciled: boolean;
  isolatedTargets: boolean;
  reviewerConfirmed: boolean;
  pendingTargets: readonly string[];
}
export function canReopen(target: string, evidence: RecoveryEvidence): boolean {
  return evidence.independentlyProtected && evidence.oldExecutorsExcluded
    && !evidence.unknownTargets && evidence.arrivalsReconciled && evidence.isolatedTargets
    && evidence.reviewerConfirmed && !evidence.pendingTargets.includes(target);
}
export function recoveryReport(startedAt: number, now: number, evidence: RecoveryEvidence) {
  return { overdue: now - startedAt > 24 * 60 * 60 * 1000,
    protected: evidence.independentlyProtected,
    // Elapsed time is never evidence that it is safe to reopen.
    requiresContinuedStop: !evidence.independentlyProtected || !evidence.oldExecutorsExcluded };
}
