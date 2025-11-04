"use client";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <h1 className="text-4xl font-bold mb-6">Dashboard Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((item) => (
          <div
            key={item}
            className="bg-surface rounded-2xl p-6 shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold mb-2">Issue #{item}</h3>
            <p className="text-muted">Sample issue description</p>
          </div>
        ))}
      </div>
    </div>
  );
}