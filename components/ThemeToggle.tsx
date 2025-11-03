'use client';

import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="px-2 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity">
        {resolvedTheme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      <select value={theme} onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')} className="px-3 py-2 rounded-lg border border-secondary bg-background">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  )
}