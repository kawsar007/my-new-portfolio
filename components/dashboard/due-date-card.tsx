'use client';

import { Calendar, ChevronRight } from 'lucide-react';

interface DueDateCardProps {
  dueDate: string;
  urgency: string;
  timeline?: { date: string; value: number }[];
}

export function DueDateCard({ dueDate, urgency, timeline = [] }: DueDateCardProps) {
  const date = new Date(dueDate);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();

  const maxValue = Math.max(...timeline.map(t => t.value), 1);

  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Due Date</h3>
        <ChevronRight className="w-5 h-5 text-muted" />
      </div>
      <p className="text-sm text-muted mb-6">{urgency}</p>

      <div className="flex items-end justify-between mb-2">
        <Calendar className="w-5 h-5 text-muted" />
        <div className="text-right">
          <div className="text-sm text-muted">{month}</div>
          <div className="text-4xl font-bold">{day}</div>
        </div>
      </div>

      {timeline.length > 0 && (
        <div className="flex items-end justify-between h-24 gap-2 mt-4">
          {timeline.map((item, i) => {
            const height = (item.value / maxValue) * 100;
            const isActive = item.date === dueDate;

            return (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  className={`rounded-t transition-all ${isActive ? 'bg-primary' : 'bg-background'
                    }`}
                  style={{ height: `${height}%` }}
                />
                <div className={`text-xs text-center mt-1 ${isActive ? 'text-foreground font-medium' : 'text-muted'
                  }`}>
                  {new Date(item.date).toLocaleString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}