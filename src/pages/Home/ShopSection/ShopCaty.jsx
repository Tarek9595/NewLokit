import { useEffect } from "react";
import { useProductStore, useWishlist } from "../../../store";
import ProductCard from "../../ProductDetails/ProductCard";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ShopCaty() {
  const { wishlist, setWishListProduct, removeWishlistProduct } = useWishlist();
  const { allProducts, fetchAllProducts, isLoading } = useProductStore();

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchAllProducts();
    }
  }, [allProducts.length, fetchAllProducts]);

  const featuredProducts = allProducts.slice(0, 9);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40 w-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-darky"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12.5 items-center w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 p-4 bg-zinc">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={wishlist.some((item) => item.id === product.id)}
            heartToggle={() => {
              const isExist = wishlist.some((item) => item.id === product.id);
              isExist
                ? removeWishlistProduct(product.id)
                : setWishListProduct(product);
            }}
            showCartIcon={false}
          />
        ))}
      </div>

      <div className="mt-8 mb-4">
        <Link
          to="/search"
          className="group flex items-center gap-3 bg-darky text-white px-8 py-3.5 rounded-full font-main text-sm tracking-wider uppercase shadow-lg hover:bg-darky/90 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
        >
          View More Products
          <BsArrowRight className="text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
}
