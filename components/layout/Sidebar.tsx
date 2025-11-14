'use client';

// import { Plus, Upload, Users, Home, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import house from "../../public/nav-img/house.png";
import project from "../../public/nav-img/project.png";
import education from "../../public/nav-img/education.png";
import skill from "../../public/nav-img/skill.png";
import contact from "../../public/nav-img/contact-information.png";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { icon: house, href: '/', label: 'Home' },
    { icon: project, href: '/projects', label: 'Projects' },
    { icon: education, href: '/education', label: 'Education' },
    { icon: skill, href: '/skills', label: 'Skills' },
    { icon: contact, href: '/team', label: 'Contact' },
  ];

  return (
    <>
      <aside
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-20 border-r border-border backdrop-blur-sm transition-transform duration-300 flex flex-col items-center justify-center lg:justify-start lg:py-6 gap-4 shrink-0`}
      >
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`group relative p-2 rounded-full transition-all duration-500 ease-out overflow-hidden ${isActive
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-2 ring-primary/30'
                : 'bg-background text-foreground/80 ring-1 ring-border/50'
                }`}
              title={item.label}
            >
              {/* Animated Gradient Border */}
              {/* <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isActive ? 'hidden' : ''}`}>
                <div className="absolute inset-[2px] rounded-xl bg-background transition-all duration-300" />
              </div> */}

              {/* Moving Gradient Background */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-all duration-700 ${isActive ? 'hidden' : ''}`}
              />

              {/* Pulse Effect */}
              {/* <div className={`absolute inset-0 rounded-xl bg-primary/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out ${isActive ? 'hidden' : ''}`} /> */}

              {/* Icon with Enhanced Animation */}
              <Image
                src={item?.icon}
                alt={item.label}
                width={20}
                height={20}
                className={`relative z-10 transition-all duration-500 ${isActive
                  ? 'scale-110 animate-pulse-slow'
                  : 'group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-90'
                  }`}
              />

              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </aside>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30 transition-all duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
}


// 'use client';

// import { Plus, Upload, Users, Home, FileText } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function Sidebar({ isOpen, onClose }: SidebarProps) {
//   const pathname = usePathname();

//   const menuItems = [
//     { icon: Home, href: '/', label: 'Home' },
//     { icon: FileText, href: '/issues', label: 'Issues' },
//     { icon: Plus, href: '/new', label: 'New' },
//     { icon: Upload, href: '/upload', label: 'Upload' },
//     { icon: Users, href: '/team', label: 'Team' },
//   ];

//   return (
//     <>
//       <aside
//         className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
//           } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-20 border-r border-border bg-background/95 backdrop-blur-sm transition-transform duration-300 flex flex-col items-center justify-center lg:justify-start lg:py-6 gap-4 shrink-0`}
//       >
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = pathname === item.href;

//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={onClose}
//               className={`group relative p-2 rounded-full transition-all duration-500 ease-out overflow-hidden ${isActive
//                 ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-2 ring-primary/30'
//                 : 'bg-background text-foreground/80 ring-1 ring-border/50'
//                 }`}
//               title={item.label}
//             >
//               {/* Animated Gradient Border */}
//               {/* <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isActive ? 'hidden' : ''}`}>
//                 <div className="absolute inset-[2px] rounded-xl bg-background transition-all duration-300" />
//               </div> */}

//               {/* Moving Gradient Background */}
//               <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-all duration-700 ${isActive ? 'hidden' : ''}`} />

//               {/* Pulse Effect */}
//               {/* <div className={`absolute inset-0 rounded-xl bg-primary/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out ${isActive ? 'hidden' : ''}`} /> */}

//               {/* Icon with Enhanced Animation */}
//               <Icon className={`w-5 h-5 relative z-10 transition-all duration-500 ${isActive
//                 ? 'scale-110 animate-pulse-slow'
//                 : 'group-hover:scale-125 group-hover:rotate-12 group-hover:text-primary'
//                 }`} />

//               <span className="sr-only">{item.label}</span>
//             </Link>
//           );
//         })}
//       </aside>

//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30 transition-all duration-300"
//           onClick={onClose}
//         />
//       )}
//     </>
//   );
// }
