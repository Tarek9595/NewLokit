import { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useReviews } from "../../store";

export default function ProductReview() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { reviews } = useReviews();
  const initialReviews = reviews.slice(0, 3);
  const hiddenReviews = reviews.slice(3);

  return (
    <div className="flex flex-col gap-10 text-darky">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-8">
        <h2 className="text-xl font-bold mb-3">Reviews</h2>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-extrabold tracking-tighter">4.2</span>
          <span className="text-gray-400 text-sm mb-1">
            — {reviews.length} Reviews
          </span>
        </div>
        <button className="w-fit border border-gray-200 px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-darky transition-colors cursor-pointer">
          Write a review
        </button>
      </div>

      <div className="flex flex-col gap-10">
        {initialReviews.map((rev) => (
          <ReviewCard key={rev.id} rev={rev} />
        ))}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-10"
            >
              {hiddenReviews.map((rev) => (
                <ReviewCard key={rev.id} rev={rev} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {hiddenReviews.length > 0 && (
        <div className="flex justify-center mt-4 border-t border-gray-100 pt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-2 border-gray-200 px-8 py-3 rounded-lg font-semibold text-sm hover:border-darky transition-colors cursor-pointer text-gray-600"
          >
            {isExpanded ? "Show less reviews" : "Load more reviews"}
          </button>
        </div>
      )}
    </div>
  );
}

function ReviewCard({ rev }) {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="w-12 h-12 rounded-full bg-[#EEEEEE] flex items-center justify-center font-bold text-gray-500 shrink-0">
        {rev.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>

      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h4 className="font-bold text-sm">{rev.name}</h4>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 block">
              {rev.date}
            </span>
          </div>
          <div className="flex text-darky text-lg">
            {[...Array(5)].map((_, i) =>
              i < rev.rating ? (
                <MdOutlineStar key={i} />
              ) : (
                <MdOutlineStarBorder key={i} />
              ),
            )}
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-1">{rev.comment}</p>
      </div>
    </div>
  );
}
