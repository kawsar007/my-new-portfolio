'use client';

import Link from 'next/link';
import { Linkedin, Github, Twitter } from 'lucide-react';
import React from 'react';

interface SocialLinksProps {
  size?: number; // icon size
  className?: string; // extra styles for parent container
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  size = 16,
  className = '',
}) => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/your-profile',
      label: 'Visit LinkedIn profile',
      icon: Linkedin,
      hoverColor: '#0077B5',
      gradient: 'from-blue-500/0 via-blue-500/10 to-blue-500/0',
    },
    {
      href: 'https://github.com/your-username',
      label: 'Visit GitHub profile',
      icon: Github,
      hoverColor: '#333',
      gradient: 'from-gray-500/0 via-gray-500/10 to-gray-500/0',
    },
    {
      href: 'https://twitter.com/your-handle',
      label: 'Visit Twitter profile',
      icon: Twitter,
      hoverColor: '#1DA1F2',
      gradient: 'from-sky-500/0 via-sky-500/10 to-sky-500/0',
    },
  ];

  return (
    <div
      className={`flex items-center justify-center gap-6 flex-wrap ${className}`}
    >
      {links.map(({ href, label, icon: Icon, hoverColor, gradient }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-2 rounded-full bg-[var(--color-background)]
                     border border-[var(--color-border)]
                     hover:border-[var(--color-primary)]/50
                     transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
        >
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <Icon
            size={size}
            className="relative z-10 text-[var(--color-foreground)]/80 
                       group-hover:scale-110 transition-all duration-300"
            style={{ color: hoverColor }}
          />
        </Link>
      ))}
    </div>
  );
};
