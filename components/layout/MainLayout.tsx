'use client';

import { useState } from 'react';
import { Location } from '@/types';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

const mockLocations: Location[] = [
  { id: '1', name: '002 — Foster avenue..', address: 'Foster Avenue' },
  { id: '2', name: '001 — Vortex Business Center', address: 'Business Center' },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{
      background: 'var(--color-background-gradient)',
    }}>
      {/* Fixed Header */}
      <Navbar
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        locations={mockLocations}
      />

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Fixed Footer - Outside scrollable area */}
      <Footer />
    </div>
  );
}