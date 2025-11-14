import React from "react";
import { ExperienceType } from "@/types";

interface ExperienceProps {
  data: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
      <h3 className="font-semibold text-xl sm:text-2xl mb-6">Experience</h3>

      <div className="flex flex-col gap-4">
        {data.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-surface rounded-xl border border-border hover:border-primary/50 transition cursor-pointer"
          >
            <div>
              <h4 className="font-semibold text-lg sm:text-xl">{item.role}</h4>
              <p className="text-sm sm:text-base text-muted">{item.company}</p>
              <p className="text-xs sm:text-sm text-muted mt-1">
                {item.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
