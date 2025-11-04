'use client';

import Link from 'next/link';
import { Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-4 lg:px-8 py-2 mt-auto shrink-0">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 flex-wrap">
        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 rounded-full bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          aria-label="Visit LinkedIn profile"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Linkedin className="w-4 h-4 relative z-10 text-foreground/80 group-hover:text-[#0077B5] group-hover:scale-110 transition-all duration-300" />
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 rounded-full bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          aria-label="Visit GitHub profile"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-500/0 via-gray-500/10 to-gray-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Github className="w-4 h-4 relative z-10 text-foreground/80 group-hover:text-[#333] group-hover:scale-110 transition-all duration-300" />
        </Link>

        {/* Twitter */}
        <Link
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 rounded-full bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          aria-label="Visit Twitter profile"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Twitter className="w-4 h-4 relative z-10 text-foreground/80 group-hover:text-[#1DA1F2] group-hover:scale-110 transition-all duration-300" />
        </Link>
      </div>
    </footer>
  );
}

// 'use client';

// import Link from 'next/link';
// import { Linkedin, Github, Twitter } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="px-4 lg:px-8 py-6 mt-auto shrink-0">
//       <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-wrap">
//         {/* LinkedIn */}
//         <Link
//           href="https://www.linkedin.com/in/your-profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group relative p-3 rounded-full bg-background border-2 border-transparent hover:border-[#0077B5]/30 transition-all duration-300 hover:bg-[#0077B5]/5"
//           aria-label="Visit LinkedIn profile"
//         >
//           <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-[#0077B5] group-hover:scale-110 transition-all duration-300" />
//         </Link>

//         {/* GitHub */}
//         <Link
//           href="https://github.com/your-username"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group relative p-3 rounded-full bg-background border-2 border-transparent hover:border-[#333]/30 transition-all duration-300 hover:bg-[#333]/5"
//           aria-label="Visit GitHub profile"
//         >
//           <Github className="w-5 h-5 text-foreground/70 group-hover:text-[#333] group-hover:scale-110 transition-all duration-300" />
//         </Link>

//         {/* Twitter */}
//         <Link
//           href="https://twitter.com/your-handle"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group relative p-3 rounded-full bg-background border-2 border-transparent hover:border-[#1DA1F2]/30 transition-all duration-300 hover:bg-[#1DA1F2]/5"
//           aria-label="Visit Twitter profile"
//         >
//           <Twitter className="w-5 h-5 text-foreground/70 group-hover:text-[#1DA1F2] group-hover:scale-110 transition-all duration-300" />
//         </Link>
//       </div>
//     </footer>
//   );
// }
