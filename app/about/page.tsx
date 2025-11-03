import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">About Page</h1>
          <ThemeToggle />
        </div>

        <div className="space-y-6">
          <p className="text-lg text-secondary">
            This is a scalable dark mode setup that works across all pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-background border border-secondary">
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p className="text-secondary">
                This theme system is built with scalability in mind and can easily handle large applications.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-xl font-semibold mb-2 text-primary">Easy to Extend</h3>
              <p className="text-secondary">
                Add more color tokens, create theme variants, or implement per-page themes.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-block px-6 py-3 bg-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}