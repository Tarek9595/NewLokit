import { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function SearchFilter({ filterName, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-100 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer mb-2 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-oswald text-sm lg:text-base tracking-widest uppercase text-darky group-hover:text-black transition-colors">
          {filterName}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-darky"
        >
          {isOpen ? (
            <CgMathMinus className="text-lg" />
          ) : (
            <CgMathPlus className="text-lg" />
          )}
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
