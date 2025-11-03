"use client";

import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { Location } from '@/types';
import { useState } from 'react';
import Link from 'next/link';

const mockLocations: Location[] = [
  { id: '1', name: '002 — Foster avenue..', address: 'Foster Avenue' },
  { id: '2', name: '001 — Vortex Business Center', address: 'Business Center' },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        locations={mockLocations}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 lg:p-8">
            <h1 className="text-4xl font-bold mb-6">Dashboard Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
                <Link href={`/issues/${item}`}
                  key={item}
                  className="bg-surface rounded-2xl p-6 shadow-sm border border-border"
                >
                  <h3 className="text-xl font-semibold mb-2">Issue #{item}</h3>
                  <p className="text-muted">Sample issue description</p>
                </Link>
              ))}
            </div>
          </div>
          <Footer
            currentPage={currentPage}
            totalPages={18}
            onPageChange={setCurrentPage}
          />
        </main>
      </div>
    </div>
  );
}