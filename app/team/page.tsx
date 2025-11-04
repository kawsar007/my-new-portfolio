'use client';

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <h1 className="text-4xl font-bold mb-6">Team Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
          <div
            key={member}
            className="bg-surface rounded-2xl p-6 shadow-sm border border-border"
          >
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-center mb-1">Team Member {member}</h3>
            <p className="text-muted text-sm text-center">Engineer</p>
          </div>
        ))}
      </div>
    </div>
  );
}