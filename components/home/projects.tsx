import { ChevronRight } from 'lucide-react';
import React from 'react';

const ProjectsCard = () => {

  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Project</h3>
        <ChevronRight className="w-5 h-5 text-muted" />
      </div>
      <p className="text-sm text-muted mb-4">
        Issue Detected on the 5th Floor
      </p>
    </div>
  );
};

export default ProjectsCard;