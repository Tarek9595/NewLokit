import { useState } from "react";
import {
  CgMathMinus as MinusIcon,
  CgMathPlus as PlusIcon,
} from "react-icons/cg";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function SearchFilter({ filterName, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-100 pb-4">
      <div
        className="flex justify-between items-center cursor-pointer mb-2 group select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-oswald text-sm lg:text-base tracking-widest uppercase text-darky group-hover:text-black transition-colors font-medium">
          {filterName}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-darky"
        >
          {isOpen ? (
            <MinusIcon className="text-base" />
          ) : (
            <PlusIcon className="text-base" />
          )}
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
