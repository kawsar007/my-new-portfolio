'use client';

import { Copyright } from 'lucide-react';
import { SocialLinks } from '../common/SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 lg:px-8 py-2 mt-auto shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        {/* Social Links */}
        <SocialLinks />
        {/* <SocialLinks className="mt-6 justify-start" size={18} /> */}

        {/* Copyright */}
        <div className="flex items-center gap-1 text-center sm:text-right text-foreground/70">
          <Copyright className="w-4 h-4" />
          <span>{currentYear} Md Kawsar Mia. All Rights Reserved</span>
        </div>
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
