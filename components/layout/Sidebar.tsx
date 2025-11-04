'use client';

import { Plus, Upload, Users, Home, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: FileText, href: '/issues', label: 'Issues' },
    { icon: Plus, href: '/new', label: 'New' },
    { icon: Upload, href: '/upload', label: 'Upload' },
    { icon: Users, href: '/team', label: 'Team' },
  ];

  return (
    <>
      <aside
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-20 bg-sidebar border-r border-border transition-transform duration-300 flex flex-col items-center justify-center lg:justify-start lg:py-6 gap-4 shrink-0`}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`p-3 rounded-lg transition-colors ${isActive
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-background'
                }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}
      </aside>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}
    </>
  );
}