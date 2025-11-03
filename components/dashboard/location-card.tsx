'use client';

import { ChevronRight } from 'lucide-react';

interface LocationCardProps {
  floor: number;
  position: number;
  totalSpaces?: number;
  highlights?: number[];
}

export function LocationCard({
  floor,
  position,
  totalSpaces = 25,
  highlights = []
}: LocationCardProps) {
  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Location</h3>
        <ChevronRight className="w-5 h-5 text-muted" />
      </div>
      <p className="text-sm text-muted mb-4">
        Issue Detected on the {floor}th Floor
      </p>

      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalSpaces }).map((_, i) => {
          const isActive = i === position;
          const isHighlight = highlights.includes(i);

          return (
            <div
              key={i}
              className={`aspect-square rounded-lg flex items-center justify-center transition-colors ${isActive
                ? 'bg-primary'
                : isHighlight
                  ? 'bg-primary/20'
                  : 'bg-background'
                }`}
            >
              {(isActive || isHighlight) && (
                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary-foreground' : 'bg-primary'
                  }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}