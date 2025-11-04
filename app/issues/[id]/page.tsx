'use client';

import { IssueHeader } from '@/components/dashboard/issue-header';
import { StatusCard } from '@/components/dashboard/status-card';
import { LocationCard } from '@/components/dashboard/location-card';
import { DueDateCard } from '@/components/dashboard/due-date-card';
import { ProgressCard } from '@/components/dashboard/progress-card';
import { Issue } from '@/types';

const mockIssue: Issue = {
  id: '17',
  title: '#17 Improper installation',
  description: 'System components might have been installed incorrectly',
  status: 'review',
  location: {
    floor: 5,
    position: 4,
  },
  dueDate: '2025-01-09',
  progress: {
    phases: [
      { name: 'Phase 1', progress: 100, completed: true },
      { name: 'Phase 2', progress: 100, completed: true },
      { name: 'Phase 3', progress: 28, completed: false },
      { name: 'Done', progress: 0, completed: false },
    ],
    currentPhase: 2,
  },
  metrics: [
    { type: 'pressure', value: 0.5, unit: 'bar' },
  ],
};

export default function IssuePage() {

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Issue Details */}
        <div className="lg:col-span-2 space-y-6">
          <IssueHeader issue={mockIssue} />

          <StatusCard
            status="Ready for Review"
            statusDescription="Waiting for Admin Review"
            relatedIssue={{
              title: 'Low water pressure',
              timestamp: '20th of July • 10:25 AM',
              severity: 'high',
            }}
          />
        </div>

        {/* Right Column - Info Cards */}
        <div className="space-y-6">
          <LocationCard
            floor={mockIssue.location.floor}
            position={mockIssue.location.position}
            highlights={[3, 8, 13, 18, 20, 22]}
          />

          <DueDateCard
            dueDate={mockIssue.dueDate}
            urgency="As soon as possible"
            timeline={[
              { date: '2025-01-05', value: 12 },
              { date: '2025-01-09', value: 20 },
              { date: '2025-01-13', value: 8 },
            ]}
          />

          <ProgressCard
            phases={mockIssue.progress.phases}
            currentPhase={mockIssue.progress.currentPhase}
            overallProgress={64}
          />
        </div>
      </div>
    </div>
  );
}