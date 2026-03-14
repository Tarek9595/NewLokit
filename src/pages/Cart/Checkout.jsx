import CstBtn from "../../components/common/CstBtn";
import TopSection from "../../components/common/TopSection";

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen gap-15 items-center">
      <TopSection name="checkout" path="checkout" />
      <main className="container grow flex flex-col lg:flex-row gap-15 xl:gap-22.5 xl:px-25 xl:pb-25 p-5">
        <div className="flex flex-col md:flex-row gap-27.5 font-inter grow">
          <div className="flex flex-col gap-11.25 w-full ">
            <h1 className="w-full text-darky font-bold capitalize text-[16px] py-4.5 ">
              Shipping Address
            </h1>
          </div>

          <div className="rounded-sm border-2 border-[#F6F6F6] pb-8 px-6 flex flex-col gap-9">
            <h1 className="w-full text-darky font-bold capitalize text-[16px] py-4.5">
              Order Summary
            </h1>
            <div className="flex flex-col gap-3 pb-6 border-b-2 border-darky/20">
              <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
                <span className="text-[#5C5F6A]">Subtotal</span>
                <span>$ subtotal</span>
              </div>
              <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
                <span className="text-[#5C5F6A]">Shipping: </span>
                <span>Free</span>
              </div>
              <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
                <span className="text-[#5C5F6A]">Tax: </span>
                <span>$ tax</span>
              </div>
            </div>
            <div className="lg:w-3xs flex justify-between items-center text-[14px] font-medium capitalize">
              <span>Total </span>
              <span>$ total</span>
            </div>
            <CstBtn className="font-medium" fullWidth="true">
              Checkout
            </CstBtn>
            <div className="text-[14px] capitalize underline underline-offset-2  font-semibold text-center">
              Continue Shopping
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
