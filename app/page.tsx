"use client";

import AboutMe from "@/components/home/about-me";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import ProjectsCard from "@/components/home/projects";
import { education, experience } from "@/constants";

export default function Home() {
  return (
    <div className="max-full mx-auto p-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-2">
          <AboutMe />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Experience data={experience} />
            <Education data={education} />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h5 className="font-medium text-base sm:text-sm">
            My Recent Projects
          </h5>
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
}