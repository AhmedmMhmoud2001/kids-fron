const MAX_VISIBLE_PAGES = 10;

const getVisiblePages = (currentPage, totalPages) => {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  let start = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
  let end = start + MAX_VISIBLE_PAGES - 1;

  if (end > totalPages) {
    end = totalPages;
    start = end - MAX_VISIBLE_PAGES + 1;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

/**
 * Pagination component
 */
const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange, className = '' }) => {
  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);

  const buttonClass = 'min-w-[36px] h-9 flex items-center justify-center border rounded transition-colors';
  const arrowClass = `${buttonClass} px-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <div className={`flex items-center justify-center gap-2 mt-12 ${className}`}>
      <button
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={arrowClass}
        aria-label="Previous page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange?.(page)}
          className={`${buttonClass} ${
            currentPage === page
              ? 'bg-blue-500 text-white border-blue-500'
              : 'hover:bg-gray-50'
          }`}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={arrowClass}
        aria-label="Next page"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;

