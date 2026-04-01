import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../../components/common/Pagination";
import { products, useCart, useWishlist } from "../../store";
import { useState } from "react";
import ProductCard from "../ProductDetails/ProductCard";

export default function SearchShoping() {
  const { wishlist, removeWishlistProduct, setWishListProduct } = useWishlist();
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
  const { cart, setCartProduct, removeCartProduct } = useCart();

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
        className="p-4 bg-[#4444440A] h-[202dvh] overflow-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 no-scrollbar"
      >
        <AnimatePresence>
          {currentProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={product.id}
              className="group bg-white rounded-2xl p-3 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col gap-4"
            >
              <ProductCard
                key={product.id}
                product={product}
                isLiked={wishlist.some((item) => item.id === product.id)}
                heartToggle={() => {
                  const isExist = wishlist.some(
                    (item) => item.id === product.id,
                  );
                  isExist
                    ? removeWishlistProduct(product.id)
                    : setWishListProduct(product);
                }}
                cartAdd={cart.some((item) => item.id === product.id)}
                cartToggle={() => {
                  const isExist = cart.some((item) => item.id === product.id);
                  isExist
                    ? removeCartProduct(product.id)
                    : setCartProduct(product);
                  console.log(cart);
                }}
              />
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
