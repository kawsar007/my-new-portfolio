import React from 'react';
import { X, ExternalLink, Github, MapPin } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-background/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-2xl shadow-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-surface/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 border border-border"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-primary/90">
              {project.details.role}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Title and Links */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <div className="flex items-center gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-200 font-medium hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                {!project.githubPrivecy && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-border transition-all duration-200 font-medium hover:scale-105 border border-border"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.githubPrivecy && (
                  <span className="flex items-center gap-2 bg-muted text-muted px-4 py-2 rounded-lg font-medium cursor-not-allowed border border-border">
                    <Github className="w-4 h-4" />
                    Private
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
              <p className="text-muted leading-relaxed">{project.details.description}</p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.technology.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-background border border-border px-3 py-1 rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Role & Responsibilities
                </h4>
                <p className="text-muted">{project.details.role}</p>
              </div>

              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Project Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted">Completed & Deployed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4 bg-background/50 backdrop-blur-sm">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>Project ID: #{project.id}</span>
            <span>Click outside to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

// "use client"

// import React from 'react';
// import { X, ExternalLink, Github, MapPin } from 'lucide-react';
// import Image from 'next/image';
// import { Project } from '@/types';
// import Link from 'next/link';

// interface ProjectModalProps {
//   project: Project;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         className="bg-surface rounded-2xl shadow-2xl border border-border max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header with Image */}
//         <div className="relative">
//           <Image
//             height={256}
//             width={256}
//             src={project?.image}
//             alt={project?.title}
//             className="w-full h-64 object-cover"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 bg-surface rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//             aria-label="Close modal"
//           >
//             <X className="w-5 h-5" />
//           </button>
//           <div className="absolute bottom-4 left-4">
//             <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
//               {project.details.role}
//             </span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-6">
//             {/* Title and Links */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//               <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
//               <div className="flex items-center gap-3">
//                 <Link
//                   href={project?.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   Live Demo
//                 </Link>
//                 {!project.githubPrivecy && (
//                   <Link
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-lg hover:bg-border transition-colors duration-200 font-medium"
//                   >
//                     <Github className="w-4 h-4" />
//                     Code
//                   </Link>
//                 )}
//                 {project.githubPrivecy && (
//                   <span className="flex items-center gap-2 bg-muted text-muted px-4 py-2 rounded-lg font-medium cursor-not-allowed">
//                     <Github className="w-4 h-4" />
//                     Private
//                   </span>
//                 )}
//               </div>
//             </div>

//             {/* Description */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
//               <p className="text-muted leading-relaxed">{project?.details?.description}</p>
//             </div>

//             {/* Technologies */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
//               <div className="flex flex-wrap gap-2">
//                 {project?.details?.technology.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="bg-background border border-border px-3 py-1 rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Project Details Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-background rounded-lg p-4 border border-border">
//                 <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   Role & Responsibilities
//                 </h4>
//                 <p className="text-muted">{project?.details?.role}</p>
//               </div>

//               <div className="bg-background rounded-lg p-4 border border-border">
//                 <h4 className="font-semibold text-foreground mb-2">Project Status</h4>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-muted">Completed & Deployed</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-border px-6 py-4 bg-background">
//           <div className="flex items-center justify-between text-sm text-muted">
//             <span>Project ID: #{project?.id}</span>
//             <span>Click outside to close</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;