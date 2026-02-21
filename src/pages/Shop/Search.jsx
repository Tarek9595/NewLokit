// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SearchShoping from "./SearchShoping";
import Filtered from "./Filtered";
import TopSection from "./TopSection";

export default function Search() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen"
    >
      <main className="grow flex flex-col items-center">
        <TopSection name="Search" />
        <div className="flex flex-col md:flex-row justify-between container gap-8 py-10 px-5 md:px-0">
          <Filtered />
          <SearchShoping />
        </div>
      </main>
    </motion.div>
  );
}
