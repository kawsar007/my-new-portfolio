import { ChevronRight } from 'lucide-react';
import React from 'react';

interface StatusCardProps {
  status: string;
  statusDescription: string;
  relatedIssue?: {
    title: string;
    timestamp: string;
    severity: 'high' | 'medium' | 'low';
  };
}

const OthersInfo = ({ status, statusDescription, relatedIssue }: StatusCardProps) => {

  const severityColors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };

  return (
    <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{status}</h3>
          <p className="text-sm text-muted">{statusDescription}</p>
        </div>
        <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium transition-colors">
          Actions •
        </button>
      </div>

      {relatedIssue && (
        <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer">
          <div>
            <div className="font-semibold mb-1 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${severityColors[relatedIssue.severity]}`} />
              {relatedIssue.title}
            </div>
            <p className="text-sm text-muted">{relatedIssue.timestamp}</p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted" />
        </div>
      )}
    </div>
  );
};

export default OthersInfo;