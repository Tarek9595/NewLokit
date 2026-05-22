import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router";
import { useCurrentProduct } from "../../store";
import { BsCart, BsCartCheckFill } from "react-icons/bs";
import noImg from "../../assets/No_Image_Available.jpg";

export default function ProductCard({
  product,
  isLiked,
  heartToggle,
  cartAdd,
  cartToggle,
  showCartIcon = true,
}) {
  const { setProduct } = useCurrentProduct();

  const fallbackImage = noImg;
  const productImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : fallbackImage;

  return (
    // أضفنا max-w-md mx-auto فقط على الشاشات الصغيرة عشان الكارد ميمطش بشكل مبالغ فيه لو الموبايل عريض
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-darky/5 relative flex flex-col h-full w-full mx-auto max-w-md md:max-w-none">
      {/* قسم الصورة وتأثير الـ Hover للأزرار وتفاصيل العرض */}
      <div className="relative aspect-4/5 sm:aspect-3/4 rounded-xl overflow-hidden bg-gray-100 shrink-0">
        <img
          src={productImage}
          alt={product.productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* زر التفاصيل يظهر دائمًا بالأسفل على الموبايل، ومع الهوفر فقط على الشاشات الكبيرة md */}
        <div className="absolute inset-0 bg-black/5 flex items-end justify-center p-4 translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 z-10">
          <Link
            to={`/product/${product.id}`}
            className="w-full bg-white/95 backdrop-blur text-darky py-2.5 rounded-lg text-sm font-semibold text-center shadow-md active:scale-95 transition-all uppercase tracking-widest hover:bg-darky hover:text-white"
            onClick={() => setProduct(product)}
          >
            Show Details
          </Link>
        </div>

        {/* أزرار المفضلة والسلة */}
        <button
          onClick={heartToggle}
          className="cursor-pointer absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-white transition-colors z-20"
        >
          {isLiked ? (
            <IoMdHeart className="text-darky text-lg" />
          ) : (
            <IoIosHeartEmpty className="text-darky text-lg" />
          )}
        </button>

        {showCartIcon && (
          <button
            onClick={cartToggle}
            className="cursor-pointer absolute top-3 right-14 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-white transition-colors z-20"
          >
            {cartAdd ? (
              <BsCartCheckFill className="text-darky text-lg" />
            ) : (
              <BsCart className="text-darky text-lg" />
            )}
          </button>
        )}
      </div>

      {/* تفاصيل المنتج */}
      <div className="mt-4 px-1 flex flex-col grow justify-between gap-3">
        <div className="space-y-1">
          <div className="flex flex-col">
            {/* شيلنا الـ max-w-37.5 عشان الاسم ياخد راحته بالكامل طالما الكارد واخد مساحة طولية مريحة */}
            <h3 className="font-main font-semibold text-darky text-base md:text-lg truncate w-full uppercase tracking-tight">
              {product.productName}
            </h3>
            <p className="text-textGray text-xs font-medium">
              {product.brandName || "Generic"}
            </p>
          </div>

          <div className="flex text-darky text-sm pt-0.5">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarBorder />
          </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-50">
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
