'use client';

interface FooterProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Footer({ currentPage, totalPages, onPageChange }: FooterProps) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <footer className="bg-primary/10 border-t border-primary/20 px-4 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${page === currentPage
              ? 'bg-surface shadow-sm'
              : page === '...'
                ? 'cursor-default'
                : 'hover:bg-surface/50'
              }`}
          >
            {page}
          </button>
        ))}
      </div>
    </footer>
  );
}