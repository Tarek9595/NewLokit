export default function Pagination({
  currentPage,
  totalPages,
  totalResults,
  itemsPerPage,
  onPageChange,
}) {
  const startResult = (currentPage - 1) * itemsPerPage + 1;
  const endResult = Math.min(currentPage * itemsPerPage, totalResults);

  const generatePagination = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  const pageNumbers = generatePagination();

  return (
    <div className="w-full flex flex-col md:flex-row gap-5 justify-between items-center mt-6 border-t border-gray-100 pt-8">
      <div className="flex justify-center items-center gap-1 text-gray-500 font-medium font-main text-sm">
        <span>
          Showing {startResult}-{endResult} of
        </span>
        <span className="font-bold text-darky">{totalResults} results</span>
      </div>

      <div className="flex gap-2 font-main">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:border-darky hover:text-darky transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &laquo;
        </button>

        {pageNumbers.map((number, index) =>
          number === "..." ? (
            <span
              key={index}
              className="w-11 h-11 flex items-center justify-center text-gray-400 font-bold tracking-widest select-none"
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(number)}
              className={`cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 font-semibold text-[15px]
                ${
                  currentPage === number
                    ? "bg-darky text-white shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
                    : "border border-gray-200 text-gray-600 hover:border-darky hover:text-darky bg-white"
                }
              `}
            >
              {number}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:border-darky hover:text-darky transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}
