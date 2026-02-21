import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../../components/common/Pagination";
import { products } from "../../store";
import { useState } from "react";

export default function SearchShoping() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // دالة تغيير الصفحة (وبتعمل Scroll لفوق بنعومة لما اليوزر يقلب الصفحة)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="grow w-full flex flex-col gap-10">
      <div className="w-full">
        <label className="flex items-center gap-3 w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-200 focus-within:border-darky focus-within:bg-white transition-all shadow-sm">
          <IoSearchOutline className="text-gray-400 text-xl" />
          <input
            type="text"
            className="grow outline-none bg-transparent font-main text-darky placeholder:text-gray-400"
            placeholder="Search for clothes, brands..."
          />
        </label>
      </div>

      <motion.div
        layout
        className="p-4 bg-[#4444440A] h-[202dvh] overflow-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence>
          {currentProducts.map((el) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={el.id}
              className="group bg-white rounded-2xl p-3 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col gap-4"
            >
              <div className="w-full aspect-3/4 relative bg-gray-50 rounded-xl overflow-hidden cursor-pointer">
                <img
                  src={el.img}
                  alt={el.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-2 px-2 pb-2">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex flex-col">
                    <h1 className="text-darky font-bold font-main text-sm uppercase tracking-tight truncate w-32 xl:w-40">
                      {el.name}
                    </h1>
                    <p className="text-gray-400 text-xs font-medium">
                      {el.brand}
                    </p>
                  </div>
                  <div className="flex text-darky text-[12px] pt-1 shrink-0">
                    {[...Array(5)].map((_, i) =>
                      i < el.rate ? (
                        <MdOutlineStar key={i} />
                      ) : (
                        <MdOutlineStarBorder
                          key={i}
                          className="text-gray-300"
                        />
                      ),
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <span className="text-darky font-bold text-lg font-main">
                    ${Number(el.price).toFixed(2)}
                  </span>
                  {el.soldOut && (
                    <span className="text-red-500 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-red-50">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalProducts}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
