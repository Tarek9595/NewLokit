import TopSection from "../../components/common/TopSection";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import CstBtn from "../../components/common/CstBtn";
import { useCart, useCurrentProduct } from "../../store";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function CartPage() {
  const navigate = useNavigate();

  const { cart, removeCartProduct, increaseQty, decreaseQty, getCartTotal } =
    useCart();

  const confirmRemove = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove "${product.productName}" from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F172B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCartProduct(
          product.id,
          product.selectedSize,
          product.selectedColor,
        );

        Swal.fire({
          title: "Removed!",
          text: "Product has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const { subtotal, tax, total } = getCartTotal();

  const handleCheckout = () => {
    cart.length > 0
      ? navigate("/checkout")
      : toast.error("Please Fill Cart First");
  };

  return (
    <div className="flex flex-col min-h-screen gap-15 items-center">
      <TopSection name="My Cart" crrName="Cart" path="mycart" />
      <main className="container grow flex flex-col lg:flex-row gap-15 xl:gap-22.5 xl:px-25 xl:pb-25 p-5">
        <div className="flex flex-col md:flex-row gap-27.5 font-inter grow">
          <div className="flex flex-col gap-11.25 w-full ">
            <h1 className="w-full text-darky font-bold capitalize text-[16px] py-4.5 border-b-2 border-darky/20">
              Your cart
            </h1>
            {cart.length > 0 ? (
              cart.map((product, index) => (
                <div
                  key={`${product.id}-${product.selectedSize}-${product.selectedColor}-${index}`}
                  className="flex flex-col md:flex-row gap-7 justify-between md:items-center p-1 pt-6 md:pt-7 text-darky font-medium border-b border-gray-100 pb-6"
                >
                  <div className="flex gap-4 items-center">
                    <Link
                      to={`/product/${product.id}/detail`}
                      className="w-20 h-20 md:w-25 md:h-25 shrink-0 rounded-xl overflow-hidden border border-gray-100 block relative group cursor-pointer"
                      onClick={() => {
                        useCurrentProduct.getState().setCurrentProduct(product);
                      }}
                    >
                      <img
                        src={product.images?.[0] || product.img}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        alt={product.productName}
                      />
                      <div className="absolute inset-0 bg-darky/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center backdrop-blur-[1px]">
                        <span className="bg-white/90 text-darky font-bold text-[10px] md:text-[11px] px-2 py-1 rounded-md shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          Edit
                        </span>
                      </div>
                    </Link>

                    <div className="flex flex-col gap-1.5 items-start md:w-55">
                      <h1 className="text-[14px] line-clamp-2 font-bold">
                        {product.productName}
                      </h1>

                      <div className="flex justify-center items-center gap-2 text-[#5C5F6A] font-inter font-medium text-[12px] capitalize">
                        <span>color:</span>
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-gray-300"
                          style={{ backgroundColor: product.selectedColor }}
                        ></span>
                        <span className="w-3 h-px bg-[#5C5F6A]"></span>
                        <span>
                          size:{" "}
                          <strong className="uppercase">
                            {product.selectedSize || "M"}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                    <span className="text-[14px] font-bold">
                      {product.price} EGP
                    </span>
                    <div className="flex justify-center items-center gap-4">
                      <div className="flex justify-center items-center gap-5 p-2 rounded-lg border border-[#F6F6F6] bg-white shadow-sm">
                        <FaMinus
                          className="text-darky/70 text-[14px] cursor-pointer hover:text-red-500 transition-colors"
                          onClick={() =>
                            decreaseQty(
                              product.id,
                              product.selectedSize,
                              product.selectedColor,
                            )
                          }
                        />
                        <span className="text-darky font-bold text-[14px] min-w-3.75 text-center">
                          {product.qty}
                        </span>
                        <FaPlus
                          className="text-darky/70 text-[14px] cursor-pointer hover:text-green-500 transition-colors"
                          onClick={() =>
                            increaseQty(
                              product.id,
                              product.selectedSize,
                              product.selectedColor,
                            )
                          }
                        />
                      </div>
                      <div
                        onClick={() => confirmRemove(product)}
                        className="w-9 h-9 rounded-lg bg-[#F6F6F6] hover:bg-red-50 hover:text-red-500 flex justify-center items-center text-[#5C5F6A] cursor-pointer transition-colors"
                      >
                        <HiMiniXMark className="text-[18px] font-bold" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="tracking-wide font-semibold text-[16px] text-center md:text-left py-10 text-gray-400">
                Go! Add Some Products To Cart
              </h1>
            )}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-[#F6F6F6] p-6 flex flex-col gap-6 h-fit bg-gray-50/50 lg:w-80 shrink-0">
          <h1 className="w-full text-darky font-bold capitalize text-[16px] border-b border-gray-200 pb-3">
            Order Summary
          </h1>
          <div className="flex flex-col gap-3 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center text-[14px] font-medium">
              <span className="text-[#5C5F6A]">Subtotal</span>
              <span className="font-bold">{subtotal} EGP</span>
            </div>
            <div className="flex justify-between items-center text-[14px] font-medium">
              <span className="text-[#5C5F6A]">Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>
            <div className="flex justify-between items-center text-[14px] font-medium">
              <span className="text-[#5C5F6A]">Tax (14%)</span>
              <span>{tax} EGP</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[16px] font-bold text-darky">
            <span>Total</span>
            <span>{total} EGP</span>
          </div>

          <CstBtn
            className="font-medium py-3 rounded-xl shadow-md"
            fullWidth="true"
            onClick={handleCheckout}
          >
            Checkout
          </CstBtn>

          <Link
            to="/"
            className="text-[12px] capitalize underline underline-offset-4 font-semibold text-center text-gray-500 hover:text-darky"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}
