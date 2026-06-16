// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import SearchShoping from "./SearchShoping";
import Filtered from "./Filtered";
import TopSection from "../../components/common/TopSection";

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen bg-white w-full"
    >
      <main className="grow flex flex-col w-full px-4 sm:px-6 md:px-8 lg:px-10 pb-16">
        <TopSection name="Search" />

        <div className="md:hidden w-full my-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-darky font-main font-bold py-3.5 px-5 rounded-xl shadow-sm hover:bg-gray-100 active:scale-[0.99] transition-all cursor-pointer"
          >
            <IoFilterOutline className="text-lg" />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 pt-2 md:pt-6 w-full">
          <aside className="w-full md:w-fit shrink-0">
            <Filtered
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />
          </aside>

          <section className="grow w-full overflow-hidden">
            <SearchShoping />
          </section>
        </div>
      </main>
    </motion.div>
  );
}
