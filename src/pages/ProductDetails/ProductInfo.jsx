import {
  useCart,
  useCurrentProduct,
  useShare,
  useWishlist,
  useUpload,
} from "../../store";
import { useState, useEffect } from "react";
import { HiOutlineShare } from "react-icons/hi2";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import CustomButton from "../../components/common/CstBtn";
import { Link } from "react-router";
import aiMan from "../../assets/AiMan.svg";
import toast from "react-hot-toast";

export default function ProductInfo() {
  const { openShare, setOpenShare } = useShare();
  const { openUpload, setOpenUpload } = useUpload();
  const { currentProduct } = useCurrentProduct();

  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(() => {
    return currentProduct?.sizes?.[0] || null;
  });
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const { wishlist, setWishListProduct, removeWishlistProduct } = useWishlist();
  const { cart, setCartProduct } = useCart();

  const isLiked = wishlist.some((item) => item.id === currentProduct?.id);

  // مصفوفة الصور الآتية من الباك إند
  const productImages =
    currentProduct?.images && currentProduct.images.length > 0
      ? currentProduct.images
      : [currentProduct?.img]; // Fallback لو مفيش صور

  // تشغيل الـ Carousel التلقائي لو الصور أكتر من واحدة
  useEffect(() => {
    if (productImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImgIndex((prev) =>
        prev === productImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [productImages.length]);

  // تعيين أول مقاس متاح كقيمة افتراضية عند تحميل المنتج
  useEffect(() => {
    if (currentProduct?.sizes && currentProduct.sizes.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedSize(currentProduct.sizes[0]);
    }
  }, [currentProduct]);

  const toggleLike = () => {
    if (isLiked) {
      removeWishlistProduct(currentProduct.id);
    } else {
      setWishListProduct(currentProduct);
    }
  };

  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);
    setCartProduct(product);

    if (isAlreadyInCart) {
      toast.success("Quantity Increased", {
        style: {
          border: "1px solid #212a2f",
          padding: "16px",
          color: "#212a2f",
        },
        iconTheme: { primary: "#212a2f", secondary: "#FFFAEE" },
      });
    } else {
      toast.success("Product Added Successfully To Cart");
    }
  };

  if (!currentProduct || !currentProduct.productName)
    return <div className="py-20 text-center">Loading Product...</div>;

  return (
    <section className="bg-white pt-10 font-inter">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/">
            <span className="hover:text-darky hover:font-semibold">Home</span>
            <span className="mx-2">{">"}</span>
          </Link>
          <span className="text-darky font-semibold">
            {currentProduct.productName}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* قسم صور المنتج (Carousel) */}
          <div className="w-full lg:w-120 flex flex-col gap-4">
            <div className="w-full h-120 relative overflow-hidden rounded-2xl group border border-gray-100">
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
              >
                {productImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${currentProduct.productName} Slide ${index + 1}`}
                    className="w-full h-full object-cover shrink-0"
                  />
                ))}
              </div>

              {/* الـ Bullets بتظهر فقط لو الصور أكتر من 1 */}
              {productImages.length > 1 && (
                <div className="flex w-full justify-center gap-2 py-2 absolute bottom-4 z-10">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImgIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-gray-400 
                        ${currentImgIndex === index ? "bg-darky scale-125" : "bg-white/60 hover:bg-white"}`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* زر الـ AI Tool المرفق بجانب التنسيق */}
          <div className="flex flex-row lg:flex-col gap-5">
            <div
              className="p-2 h-13 w-13 flex justify-center items-center rounded-lg bg-btnGray cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setOpenUpload(!openUpload)}
            >
              <img
                src={aiMan}
                alt="aiMan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div className="w-full lg:w-1/2 xl:pr-37.5 flex flex-col gap-6.5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h1 className="text-[24px] font-bold text-darky uppercase tracking-tight">
                  {currentProduct.productName}
                </h1>
                <button
                  className="text-lg text-darky hover:scale-110 transition-transform cursor-pointer"
                  onClick={() => setOpenShare(!openShare)}
                >
                  <HiOutlineShare />
                </button>
              </div>

              {/* التقييم فقط */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center justify-center gap-1 bg-btnGray px-3 py-1 rounded-full text-[12px] font-semibold">
                  <MdOutlineStar className="text-darky text-xl" />
                  <span>{currentProduct.rate || 4.2} — 54 Reviews</span>
                </div>
              </div>

              <h2 className="text-[18px] font-semibold text-darky">
                ${currentProduct.price}
              </h2>
            </div>

            {/* الألوان الديناميكية من الباك إند */}
            {currentProduct.colors && currentProduct.colors.length > 0 && (
              <div className="flex flex-col gap-2.5">
                <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                  Available Colors
                </h4>
                <div className="flex gap-2.5">
                  {currentProduct.colors.map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedColor(idx)}
                      className={`flex justify-center items-center w-8 h-8 rounded-full border-2 cursor-pointer p-0.5 transition-all duration-300
                        ${selectedColor === idx ? "border-darky scale-110" : "border-transparent hover:border-gray-300"}`}
                    >
                      <div
                        className="w-full h-full rounded-full shadow-sm border border-gray-200"
                        style={{ backgroundColor: color }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* المقاسات الديناميكية من الباك إند */}
            {currentProduct.sizes && currentProduct.sizes.length > 0 && (
              <div className="flex flex-col gap-2.5">
                <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                  Select Size
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {currentProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`cursor-pointer p-2 rounded-lg border-2 font-inter font-bold text-sm transition-all
                        ${selectedSize === size ? "border-darky bg-darky text-white" : "border-gray-200 text-gray-400 hover:border-darky"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* الكمية وأزرار الشراء */}
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                Quantity
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-xl font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <CustomButton
                  variant="darky"
                  size="lg"
                  className="flex-1 py-5 rounded-sm shadow-xl"
                  onClick={() =>
                    addToCart({
                      ...currentProduct,
                      selectedSize,
                      selectedColor: currentProduct.colors?.[selectedColor],
                      quantity,
                    })
                  }
                >
                  Add to cart
                </CustomButton>
                <button
                  onClick={toggleLike}
                  className={`cursor-pointer w-12 h-12 border-2 rounded-xl flex items-center justify-center text-2xl transition-all duration-300
                    ${
                      isLiked
                        ? "bg-darky text-white border-darky shadow-lg"
                        : "bg-transparent text-darky border-gray-100 hover:bg-red-50 hover:text-red-500 hover:border-red-100"
                    }`}
                >
                  {isLiked ? <IoMdHeart /> : <IoIosHeartEmpty />}
                </button>
              </div>

              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter text-center lg:text-left mt-2">
                — Free shipping on orders $100+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
