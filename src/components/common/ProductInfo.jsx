import { useCurrentProduct, useWishlist } from "../../store";
import { useState } from "react";
import { HiOutlineShare, HiOutlineHeart } from "react-icons/hi2";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import CustomButton from "../../components/common/CstBtn";
import { Link } from "react-router";
import upload from "../../assets/upload.svg";
import aiMan from "../../assets/AiMan.svg";

export default function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState(0);
  const { currentProduct } = useCurrentProduct();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  const { wishlist, setWishListProduct, removeWishlistProduct } = useWishlist();

  // بنشيك إذا كان المنتج الحالي موجود في الـ wishlist ولا لا
  // ملاحظة: اتأكد إن الـ ID مكتوب صح (id أو Id) حسب ما بتخزنه
  const isLiked = wishlist.some((item) => item.id === useCurrentProduct.id);

  const toggleLike = () => {
    if (isLiked) {
      removeWishlistProduct(useCurrentProduct.id);
    } else {
      setWishListProduct(useCurrentProduct);
    }
  };

  console.log(currentProduct);
  console.log(currentProduct.size);

  if (!currentProduct)
    return <div className="py-20 text-center">Loading Product...</div>;
  return (
    <section className="min-h-screen bg-white px-20 py-10 font-inter">
      <div className="container">
        <nav className="flex text-sm text-gray-500 mb-8">
          <Link to="/">
            <span className="hover:text-darky hover:font-semibold ">Home</span>
            <span className="mx-2">{">"}</span>
          </Link>
          <span className="text-darky font-semibold">
            {currentProduct.name}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-120 ">
            <img
              src={currentProduct.img}
              alt={currentProduct.name}
              className="rounded-2xl w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-row lg:flex-col gap-5">
            <div className="h-13 w-13 flex justify-center items-center bg-btnGray rounded-lg cursor-pointer">
              <img src={upload} alt="upload" />
            </div>
            <div className="p-2 h-13 w-13 flex justify-center items-center  rounded-lg bg-btnGray cursor-pointer">
              <img
                src={aiMan}
                alt="aiMan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:pr-37.5 flex flex-col gap-6.5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h1 className="text-[24px] font-bold text-darky uppercase tracking-tight">
                  {currentProduct.name}
                </h1>
                <button className="text-lg text-darky hover:scale-110 transition-transform cursor-pointer">
                  <HiOutlineShare />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center justify-center gap-1 bg-btnGray px-3 py-1 rounded-full text-[12px] font-semibold">
                  <MdOutlineStar className="text-darky text-xl" />
                  <span>4.2 — 54 Reviews</span>
                </div>
                {currentProduct.soldOut ? (
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase">
                    Out of stock
                  </span>
                ) : (
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">
                    In Stock
                  </span>
                )}
              </div>

              <h2 className="text-[18px] font-semibold text-darky">
                ${currentProduct.price}
              </h2>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                Available Colors
              </h4>
              <div className="flex gap-2.5">
                {currentProduct.Color?.map((color, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`
            flex justify-center items-center w-8 h-8 rounded-full border-2 cursor-pointer p-0.5 transition-all duration-300
            ${selectedColor === idx ? "border-darky scale-110" : "border-transparent hover:border-gray-300"}
          `}
                  >
                    <div
                      className="w-full h-full rounded-full shadow-sm"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-medium uppercase tracking-widest text-gray-400">
                Select Size
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`cursor-pointer w-12 h-12 rounded-lg border-2 font-main font-bold text-sm transition-all
                      ${selectedSize === size ? "border-darky bg-darky text-white" : "border-gray-200 text-gray-400 hover:border-darky"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

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

              <div className="flex items-center gap-4">
                <CustomButton
                  variant="darky"
                  size="lg"
                  className="flex-1 py-5 rounded-sm shadow-xl w-20"
                >
                  Add to cart
                </CustomButton>
                <button
                  onClick={toggleLike}
                  className={`
        cursor-pointer w-12 h-12 border-2 rounded-xl flex items-center justify-center text-2xl transition-all duration-300
        ${
          isLiked
            ? "bg-darky text-white border-darky shadow-lg hover:none"
            : "bg-transparent text-darky border-gray-100 hover:bg-red-50 hover:text-red-500 hover:border-red-100"
        }
      `}
                >
                  {isLiked ? <IoMdHeart /> : <IoIosHeartEmpty />}
                </button>
              </div>

              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter text-center lg:text-left">
                — Free shipping on orders $100+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
