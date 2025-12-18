import type { CSSProperties } from "react";

export function Pagination({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const getPages = () => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [1];
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      end = Math.min(4, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(2, totalPages - 3);
    }

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
    return pages;
  };

  const pages = getPages();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton: CSSProperties = isFirstPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};
  const styleNextButton: CSSProperties = isLastPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};

  const handlePrevClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextclick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };
  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <nav className="flex items-center justify-center gap-6 mt-12 pb-12 w-full">
      <a
        href="#"
        className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-transparent hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        style={stylePrevButton}
        onClick={handlePrevClick}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>

      <div className="flex items-center gap-3">
        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={`dots-${index}`}
              className="flex items-center justify-center w-10 h-10 text-gray-400"
            >
              ...
            </span>
          ) : (
            <a
              onClick={() => handlePageClick(page as number)}
              key={page}
              data-page={currentPage}
              href="#"
              className={
                currentPage === page
                  ? "flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform duration-300 hover:scale-105"
                  : "flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-400 transition-transform duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-transparent hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              }
            >
              {page}
            </a>
          )
        )}
      </div>

      <a
        href="#"
        className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-transparent hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        style={styleNextButton}
        onClick={handleNextclick}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}
