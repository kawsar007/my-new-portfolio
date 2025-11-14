import React from "react";
import { EducationType } from "@/types";

interface EducationProps {
  data: EducationType[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <div className="rounded-2xl p-2">
      <h3 className="font-semibold text-xl sm:text-2xl mb-2">Education</h3>

      <div className="flex flex-col gap-4">
        {data.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/50 transition cursor-pointer"
          >
            <div>
              <h4 className="font-semibold text-lg sm:text-xl">
                {item.degree}
              </h4>
              <p className="text-sm sm:text-base text-muted">{item.campus}</p>
              <p className="text-xs sm:text-sm text-muted mt-1">
                {item.duration}
              </p>
              <p className="text-sm text-muted">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
