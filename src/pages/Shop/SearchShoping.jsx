import { IoSearchOutline, IoCloseCircleOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../../components/common/Pagination";
import {
  useProductStore,
  useCart,
  useWishlist,
  useFilterStore,
  userLoginInfo,
} from "../../store";
import { useEffect, useState } from "react";
import ProductCard from "../ProductDetails/ProductCard";
import toast from "react-hot-toast";

export default function SearchShoping() {
  const { allProducts, fetchAllProducts, isLoading } = useProductStore();
  const { wishlist, removeWishlistProduct, setWishListProduct } = useWishlist();
  const { cart, setCartProduct, removeCartProduct } = useCart();
  const { appliedFilters } = useFilterStore();
  const { isLoggedIn } = userLoginInfo();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchAllProducts();
    }
  }, [allProducts.length, fetchAllProducts]);

  const filteredProducts = allProducts.filter((product) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      product.productName?.toLowerCase().includes(term) ||
      product.brandName?.toLowerCase().includes(term);

    if (!matchesSearch) return false;

    if (appliedFilters?.brandName?.length > 0) {
      if (!appliedFilters.brandName.includes(product.brandName?.toLowerCase()))
        return false;
    }

    if (appliedFilters?.categoryName?.length > 0) {
      if (
        !appliedFilters.categoryName.includes(
          product.categoryName?.toLowerCase(),
        )
      )
        return false;
    }

    if (appliedFilters?.colors?.length > 0) {
      const hasColor = product.colors?.some((c) =>
        appliedFilters.colors.includes(c.toLowerCase()),
      );
      if (!hasColor) return false;
    }

    if (appliedFilters?.departmentName?.length > 0) {
      if (
        !appliedFilters.departmentName.includes(
          product.departmentName?.toLowerCase(),
        )
      )
        return false;
    }

    if (appliedFilters?.price && appliedFilters.price > 0) {
      if (product.price > appliedFilters.price) return false;
    }

    if (appliedFilters?.sizes?.length > 0) {
      const hasSize = product.sizes?.some((s) =>
        appliedFilters.sizes.includes(s.toLowerCase()),
      );
      if (!hasSize) return false;
    }

    return true;
  });

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="grow w-full flex justify-center items-center h-60">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-darky"></div>
      </div>
    );
  }

  return (
    <div className="grow w-full flex flex-col gap-8">
      <div className="w-full">
        <label className="flex items-center gap-3 w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-200 focus-within:border-darky focus-within:bg-white transition-all shadow-sm relative">
          <IoSearchOutline className="text-gray-400 text-xl" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="grow outline-none bg-transparent font-main text-darky placeholder:text-gray-400 pr-8"
            placeholder="Search for clothes, brands..."
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-5 text-gray-400 hover:text-darky transition-colors cursor-pointer"
            >
              <IoCloseCircleOutline className="text-xl" />
            </button>
          )}
        </label>
      </div>

      <motion.div
        layout
        className="p-4 bg-[#4444440A] rounded-2xl overflow-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 no-scrollbar min-h-100"
      >
        <AnimatePresence mode="wait">
          {currentProducts.length > 0 ? (
            currentProducts.map((productItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={productItem.id}
                className="group bg-white rounded-2xl p-3 border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col gap-4"
              >
                <ProductCard
                  product={productItem}
                  isLiked={wishlist.some((item) => item.id === productItem.id)}
                  cartAdd={cart.some((item) => item.id === productItem.id)}
                  cartToggle={() => {
                    if (!isLoggedIn) {
                      toast.error("Please login first", {
                        id: "auth-error",
                        style: {
                          borderRadius: "10px",
                          background: " #212a2f",
                          color: "#fff",
                        },
                      });
                      return;
                    }
                    const isExist = cart.some(
                      (item) => item.id === productItem.id,
                    );
                    isExist
                      ? removeCartProduct(productItem.id)
                      : setCartProduct(productItem);
                  }}
                  heartToggle={() => {
                    if (!isLoggedIn) {
                      toast.error("Please login first", {
                        id: "auth-error",
                        style: {
                          borderRadius: "10px",
                          background: " #212a2f",
                          color: "#fff",
                        },
                      });
                      return;
                    }

                    const isExist = wishlist.some(
                      (item) => item.id === productItem.id,
                    );
                    isExist
                      ? removeWishlistProduct(productItem.id)
                      : setWishListProduct(productItem);
                  }}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-200/50">
                <IoSearchOutline className="text-gray-400 text-4xl animate-pulse" />
              </div>
              <h3 className="font-main font-bold text-lg text-darky mb-1">
                No Results Found
              </h3>
              <p className="text-gray-400 text-sm max-w-xs font-main mb-6">
                We couldn't find anything matching your search or filters. Try
                adjusting them.
              </p>
              <button
                onClick={clearSearch}
                className="font-main text-sm bg-darky text-white font-semibold px-6 py-2.5 rounded-xl shadow-md hover:bg-darky/90 active:scale-95 transition-all uppercase tracking-wider cursor-pointer"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalProducts}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
