"use client";

import AboutMe from "@/components/home/about-me";
import OthersInfo from "@/components/home/others-info";
import ProjectsCard from "@/components/home/projects";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <AboutMe />

          <OthersInfo status="Ready for Review"
            statusDescription="Waiting for Admin Review"
            relatedIssue={{
              title: 'Low water pressure',
              timestamp: '20th of July • 10:25 AM',
              severity: 'high',
            }} />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
}