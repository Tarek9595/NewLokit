import { useState, useMemo, useEffect, useRef } from "react";
import { products, useWishlist } from "../../../store";
import ProductCard from "../../../components/common/ProductCard";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function ShopCaty() {
  const { wishlist, setWishListProduct, removeWishlistProduct } = useWishlist();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [],
  );
  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const [showCapsule, setShowCapsule] = useState(false);
  const startRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === startRef.current) {
            if (entry.isIntersecting) setShowCapsule(true);
            if (entry.boundingClientRect.top > 0 && !entry.isIntersecting)
              setShowCapsule(false);
          }
          if (entry.target === endRef.current) {
            if (entry.isIntersecting) setShowCapsule(false);
            if (
              entry.boundingClientRect.top > window.innerHeight &&
              !entry.isIntersecting
            )
              setShowCapsule(true);
          }
        });
      },
      { threshold: 0 },
    );
    if (startRef.current) observer.observe(startRef.current);
    if (endRef.current) observer.observe(endRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-12.5">
      <div ref={startRef} className="h-1 w-full" />

      <AnimatePresence>
        {showCapsule && (
          <motion.div
            initial={{ y: 100, x: isMobile ? "-50%" : "0%", opacity: 0 }}
            animate={{ y: 0, x: isMobile ? "-50%" : "0%", opacity: 1 }}
            exit={{ y: 100, x: isMobile ? "-50%" : "0%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 left-1/2 z-50 lg:relative lg:left-0 lg:bottom-0 lg:w-full lg:flex lg:justify-center lg:pointer-events-auto"
          >
            <div className="bg-darky/90 backdrop-blur-lg p-2 rounded-full shadow-2xl flex gap-2 overflow-x-auto no-scrollbar max-w-[95vw] lg:bg-transparent lg:shadow-none lg:p-0 lg:justify-center lg:max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    startRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full transition-all duration-300 font-main text-sm cursor-pointer
                    ${
                      activeCategory === cat
                        ? "bg-white text-darky lg:bg-darky lg:text-white shadow-md scale-105"
                        : "text-white/70 lg:bg-[#EEEFF0] lg:text-[#8A8A8A] hover:lg:text-darky"
                    }`}
                >
                  {cat === "All" ? "All Products" : cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="no-scrollbar w-[105%] h-[195dvh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 p-4 bg-zinc overflow-auto">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={wishlist.some((item) => item.id === product.id)}
            onToggle={() => {
              const isExist = wishlist.some((item) => item.id === product.id);
              isExist
                ? removeWishlistProduct(product.id)
                : setWishListProduct(product);
            }}
          />
        ))}
      </div>

      <div ref={endRef} className="h-20 w-full" />
    </div>
  );
}
