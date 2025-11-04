'use client';

import { ChevronRight } from 'lucide-react';
import { Issue } from '@/types';

interface IssueHeaderProps {
  issue: Issue;
}

export function IssueHeader({ issue }: IssueHeaderProps) {
  return (
    <div className="bg-surface rounded-2xl p-6 lg:p-8 shadow-sm border border-border">
      <div className="flex items-start gap-4 mb-6">
        <button className="p-2 hover:bg-background rounded-lg transition-colors">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </button>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            {issue.title}
          </h1>
          <p className="text-muted">{issue.description}</p>
        </div>
      </div>

      {/* 3D Model Placeholder */}
      <div className="relative bg-gradient-to-br from-background to-surface rounded-xl aspect-video flex items-center justify-center border border-border">
        <div className="text-center">
          <div className="w-32 h-32 lg:w-48 lg:h-48 mx-auto bg-muted/20 rounded-full flex items-center justify-center mb-4">
            <div className="text-muted text-sm">3D Model View</div>
          </div>

          {/* Metric Display */}
          {issue.metrics.length > 0 && (
            <div className="absolute bottom-4 left-4 bg-primary rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-surface rounded-full" />
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    {issue.metrics[0].value}
                  </div>
                  <div className="text-xs text-primary-foreground">
                    {issue.metrics[0].unit}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}