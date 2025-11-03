'use client';

import { ChevronRight } from 'lucide-react';
import { Phase } from '@/types';

interface ProgressCardProps {
  phases: Phase[];
  currentPhase: number;
  overallProgress: number;
}

export function ProgressCard({ phases, currentPhase, overallProgress }: ProgressCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Installation Progress</h3>
        <ChevronRight className="w-5 h-5 text-muted" />
      </div>
      <p className="text-sm text-muted mb-6">
        Completed: {overallProgress}%
      </p>

      <div className="space-y-4">
        {phases.map((phase, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{phase.name}</span>
            </div>
            <div className="h-2 bg-background rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${phase.completed
                  ? 'bg-primary'
                  : phase.progress > 0
                    ? 'bg-primary'
                    : 'bg-background'
                  }`}
                style={{ width: `${phase.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm">
          {phases[currentPhase]?.name}:
          <span className="font-medium ml-1">
            {phases[currentPhase]?.name.replace('Phase ' + (currentPhase + 1) + ': ', '')}
          </span>
        </p>
      </div>
    </div>
  );
}