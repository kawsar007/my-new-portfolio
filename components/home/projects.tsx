"use client"

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Project } from '@/types';
import ProjectModal from './project-modal';

const ProjectsCard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/28123689/pexels-photo-28123689.jpeg",
      title: "Medical Service Application",
      liveLink: "https://www.medser.us/",
      github: "https://github.com/kawsar007/my-new-portfolio",
      githubPrivecy: true,
      details: {
        role: "Fullstack Development",
        description: "The Medical Service App is a comprehensive platform designed to enhance healthcare efficiency through its three main components: the Admin Dashboard, Scribe Portal, and the Physician Mobile App. Admin Dashboard Admins can create and manage physicians and scribes, assign them to one another, and send credentials via email upon creation. Scribe Portal The Scribe Portal offers two modes: RT(Real-Time): Scribes connect with physicians during live streaming, chat, and access recordings. NRT(Non-Real-Time): Scribes view pre-recorded audio and video. Mobile App: Only physicians can live stream.",
        technology: ["Next Js", "Typescript", "Tailwind CSS", "Agora.io", "Socket.io", "Nest Js", "MySql"]
      }
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/28123689/pexels-photo-28123689.jpeg",
      title: "Real Estate Platform",
      liveLink: "https://www.medser.us/",
      github: "https://github.com/kawsar007/my-new-portfolio",
      githubPrivecy: true,
      details: {
        role: "Fullstack Development",
        description: "A comprehensive real estate platform enabling property search, virtual tours, and agent connections. Features include advanced filtering, mortgage calculators, and seamless booking system for property viewings.",
        technology: ["Next Js", "Typescript", "Tailwind CSS", "Agora.io", "Socket.io", "Nest Js", "MySql"]
      }
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/28123689/pexels-photo-28123689.jpeg",
      title: "VTS Tracking Application",
      liveLink: "https://www.medser.us/",
      github: "https://github.com/kawsar007/my-new-portfolio",
      githubPrivecy: true,
      details: {
        role: "Fullstack Development",
        description: "Vehicle Tracking System providing real-time GPS monitoring, route optimization, and fleet management. Includes features like geofencing, maintenance scheduling, and comprehensive reporting dashboard.",
        technology: ["Next Js", "Typescript", "Tailwind CSS", "Agora.io", "Socket.io", "Nest Js", "MySql"]
      }
    },
  ];

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="relative h-96 overflow-hidden">
        {/* Main scrolling container */}
        <div className="animate-circular-scroll space-y-4">
          {/* Original projects */}
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onChevronClick={handleCardClick}
            />
          ))}
          {/* Duplicate projects for seamless loop */}
          {projects.map(project => (
            <ProjectCard
              key={`duplicate-${project.id}`}
              project={project}
              onChevronClick={handleCardClick}
            />
          ))}
        </div>

        {/* Gradient fade effects */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

interface ProjectCardProps {
  project: Project;
  onChevronClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onChevronClick }) => (
  <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="font-semibold text-foreground">{project.title}</h3>
        <p className="text-xs text-muted mt-1">{project.details.role}</p>
      </div>
      <button
        onClick={() => onChevronClick(project)}
        className="p-2 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors duration-200 group"
        aria-label={`View details for ${project.title}`}
      >
        <ChevronRight className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
      </button>
    </div>

    <div className="space-y-2">
      <p className="text-sm text-muted line-clamp-2">{project.details.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.details.technology.slice(0, 3).map((tech, index) => (
          <span key={index} className="text-xs bg-background text-foreground px-2 py-1 rounded">
            {tech}
          </span>
        ))}
        {project.details.technology.length > 3 && (
          <span className="text-xs bg-background text-muted px-2 py-1 rounded">
            +{project.details.technology.length - 3} more
          </span>
        )}
      </div>
    </div>
  </div>
);

export default ProjectsCard;