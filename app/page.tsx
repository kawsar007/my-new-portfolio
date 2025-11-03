import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Home Page</h1>
          <ThemeToggle />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-secondary">
            Welcome to Next.js 15 with Tailwind CSS v4 and dark mode!
          </p>

          <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
            <h2 className="text-2xl font-semibold mb-2 text-primary">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-secondary">
              <li>Next.js 15 with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS v4</li>
              <li>Global dark/light mode with system preference</li>
              <li>Persistent theme selection</li>
            </ul>
          </div>

          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Go to About Page
          </Link>
        </div>
      </div>
    </main>
  );
}