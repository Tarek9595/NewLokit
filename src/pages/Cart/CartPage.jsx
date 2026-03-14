import TopSection from "../../components/common/TopSection";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import CstBtn from "../../components/common/CstBtn";
import { useCart } from "../../store";
import Swal from "sweetalert2";
import { useMemo } from "react";
import { Link } from "react-router";

export default function CartPage() {
  const { cart, removeCartProduct, increaseQty, decreaseQty } = useCart();

  const confirmRemove = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove "${product.name}" from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F172B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCartProduct(product.id);

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

  const { subtotal, tax, total } = useMemo(() => {
    const currentSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.qty,
      0,
    );
    const currentTax = currentSubtotal * 0.14;
    const currentTotal = currentSubtotal + currentTax;

    return {
      subtotal: currentSubtotal.toFixed(2),
      tax: currentTax.toFixed(2),
      total: currentTotal.toFixed(2),
    };
  }, [cart]);
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
              cart.map((product) => (
                <div
                  className={`flex flex-col md:flex-row gap-7 justify-between md:items-center p-1 pt-6 md:pt-7 text-darky font-medium`}
                >
                  <div className="flex flex-col gap-1.5 items-start  md:w-55">
                    <div className="w-20 h-20 md:w-25 md:h-25 shrink-0 ">
                      <img
                        src={product.img}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start  md:w-55">
                      <h1 className="text-[14px] md:text-[16px] line-clamp-2">
                        {product.name}
                      </h1>
                      <div className="flex justify-center items-center gap-2 text-[#5C5F6A] font-inter font-medium text-[12px] capitalize">
                        <span>color:</span>
                        <span className="w-3 h-3 rounded-full bg-[#98BE9E]"></span>
                        <span className="w-3 h-px bg-[#5C5F6A]"></span>
                        <span>size: m</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[14px] font-medium">
                      $ {product.price}
                    </span>
                    <div className="flex justify-center items-center gap-4">
                      <div className="flex justify-center items-center gap-5 p-3.5 rounded-sm border border-[#F6F6F6]">
                        <FaMinus
                          className="text-darky/70 text-[16px] cursor-pointer"
                          onClick={() => decreaseQty(product.id)}
                        />
                        <span className="text-darky/70 text-[16px]">
                          {product.qty}
                        </span>
                        <FaPlus
                          className="text-darky/70 text-[16px] cursor-pointer"
                          onClick={() => increaseQty(product.id)}
                        />
                      </div>
                      <div className="w-10 h-10 rounded-sm bg-[#F6F6F6] flex justify-center items-center text-[#5C5F6A] cursor-pointer">
                        <HiMiniXMark
                          className="text-[20px] font-bold"
                          onClick={() => confirmRemove(product)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="tracking-wide font-semibold text-[16px] text-center md:text-left">
                Go ! Add Some Products To Cart
              </h1>
            )}
          </div>
        </div>

        <div className="rounded-sm border-2 border-[#F6F6F6] pb-8 px-6 flex flex-col gap-9">
          <h1 className="w-full text-darky font-bold capitalize text-[16px] py-4.5">
            Order Summary
          </h1>
          <div className="flex flex-col gap-3 pb-6 border-b-2 border-darky/20">
            <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
              <span className="text-[#5C5F6A]">Subtotal</span>
              <span>$ {subtotal}</span>
            </div>
            <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
              <span className="text-[#5C5F6A]">Shipping: </span>
              <span>Free</span>
            </div>
            <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
              <span className="text-[#5C5F6A]">Tax: </span>
              <span>$ {tax}</span>
            </div>
          </div>
          <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
            <span>Total </span>
            <span>$ {total}</span>
          </div>
          <Link to="/checkout">
            <CstBtn className="font-medium" fullWidth="true">
              Checkout
            </CstBtn>
          </Link>
          <Link
            to="/"
            className="text-[14px] capitalize underline underline-offset-2  font-semibold text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    </div>
  );
}
