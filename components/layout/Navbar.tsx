'use client';

import { useState } from 'react';
import { Menu, X, Search, User, Plus } from 'lucide-react';
import { Location } from '@/types';
import { ThemeToggle } from '../ThemeToggle';

interface NavbarProps {
  onMenuToggle: () => void;
  locations?: Location[];
}

export function Navbar({ onMenuToggle, locations = [] }: NavbarProps) {
  const [activeLocations, setActiveLocations] = useState<Location[]>(
    locations.slice(0, 2)
  );

  const removeLocation = (id: string) => {
    setActiveLocations(prev => prev.filter(loc => loc.id !== id));
  };

  return (
    <nav className="bg-surface border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-background rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="text-2xl font-bold">O1</div>

        <div className="hidden md:flex items-center gap-2">
          {activeLocations.map((location) => (
            <div
              key={location.id}
              className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg text-sm"
            >
              <span className="truncate max-w-[200px]">{location.name}</span>
              <button
                onClick={() => removeLocation(location.id)}
                className="hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button className="w-8 h-8 flex items-center justify-center hover:bg-background rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button className="p-2 hover:bg-background rounded-lg transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-background rounded-lg transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}