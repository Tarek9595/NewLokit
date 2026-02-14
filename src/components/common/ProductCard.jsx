import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

export default function ProductCard({ product, isLiked, onToggle }) {
  return (
    <div className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-darky/5">
      <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <button
          onClick={onToggle}
          className="cursor-pointer absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          {isLiked ? (
            <IoMdHeart className="text-darky text-lg" />
          ) : (
            <IoIosHeartEmpty className="text-darky text-lg" />
          )}
        </button>
      </div>

      <div className="mt-4 px-1 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-main font-semibold text-darky text-base lg:text-lg truncate max-w-[150px] uppercase tracking-tight">
              {product.name}
            </h3>
            <p className="text-textGray text-xs font-medium">{product.brand}</p>
          </div>
          <div className="flex text-darky text-sm">
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
