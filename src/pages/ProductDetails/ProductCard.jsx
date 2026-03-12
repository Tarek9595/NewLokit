import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router";
import { useCurrentProduct } from "../../store";
import { BsCart, BsCartCheckFill } from "react-icons/bs";

export default function ProductCard({
  product,
  isLiked,
  heartToggle,
  cartAdd,
  cartToggle,
}) {
  const { setProduct } = useCurrentProduct();

  return (
    <div className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-darky/5">
      <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-black/5 flex items-end justify-center p-4 translate-y-0 opacity-100 lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-500">
          <Link
            to={`/product/${product.id}`}
            className="w-full bg-white/90 backdrop-blur text-darky py-2.5 rounded-lg  text-sm font-semibold text-center shadow-lg active:scale-95 transition-all uppercase tracking-widest hover:bg-darky hover:text-white"
            onClick={() => setProduct(product)}
          >
            Show Details
          </Link>
        </div>

        <button
          onClick={heartToggle}
          className="cursor-pointer absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          {isLiked ? (
            <IoMdHeart className="text-darky text-lg" />
          ) : (
            <IoIosHeartEmpty className="text-darky text-lg" />
          )}
        </button>

        <button
          onClick={cartToggle}
          className="cursor-pointer absolute top-3 right-14 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          {cartAdd ? (
            <BsCartCheckFill className="text-darky text-lg" />
          ) : (
            <BsCart className="text-darky text-lg" />
          )}
        </button>
      </div>

      <div className="mt-4 px-1 space-y-2">
        <div className="flex justify-between">
          <div>
            <h3 className="font-main font-semibold text-darky text-base lg:text-lg truncate max-w-37.5 uppercase tracking-tight">
              {product.name}
            </h3>
            <p className="text-textGray text-xs font-medium">{product.brand}</p>
          </div>
          <div className="flex text-darky text-sm mt-1.5">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="font-main font-bold text-xl text-darky">
            ${product.price}
          </span>
          {product.soldOut && (
            <span className="text-[10px] font-bold text-red-500 uppercase bg-red-50 px-2 py-0.5 rounded">
              Out of stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
