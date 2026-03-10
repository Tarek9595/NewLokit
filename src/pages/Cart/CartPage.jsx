import CstBtn from "../../components/common/CstBtn";
import TopSection from "../../components/common/TopSection";

export default function CartPage() {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const today = new Intl.DateTimeFormat("en-GB", options).format(new Date());
  return (
    <div className="flex flex-col min-h-screen gap-15">
      <TopSection name="My Cart" crrName="Cart" path="mycart" />
      <main className="grow flex flex-col md:flex-row gap-22.5 px-25">
        <div className="flex flex-col md:flex-row gap-27.5 font-inter grow">
          <div className="flex flex-col gap-11.25 w-full">
            <h1 className="w-full text-darky font-bold capitalize text-[16px] py-4.5 border-b-2 border-darky/20">
              Your cart
            </h1>
            <div
              className={`flex flex-col md:flex-row justify-between md:items-center p-1 pt-6 md:pt-18.75 text-darky font-medium gap-6 md:gap-0 `}
            >
              <div className="flex gap-4 md:gap-8 w-full md:w-auto">
                <div className="w-20 h-20 md:w-25 md:h-25 shrink-0 bg-darky">
                  {/* <img
                    src={el.img}
                    className="w-full h-full object-contain"
                  /> */}
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[14px] md:text-[16px] line-clamp-2">
                    Raw Black T-Shirt Lineup
                  </h1>
                  <span className="text-[12px] md:text-[14px] text-[#5C5F6A]">
                    Added on: {today}
                  </span>
                  <button className="text-[14px] w-fit cursor-pointer text-left hover:underline hover:underline-offset-1 mt-1">
                    Remove item
                  </button>
                </div>
              </div>

              <div className="flex gap-4 md:gap-8 text-[14px] items-center justify-between md:justify-end w-full md:w-auto border-t md:border-none border-gray-100 pt-4 md:pt-0">
                <div className="font-semibold md:font-medium">$ 75.00</div>

                <CstBtn
                  variant="outlineDarky"
                  size="sm"
                  className="md:py-2.5 md:px-6 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Add to cart
                </CstBtn>
              </div>
            </div>
            ))
          </div>
        </div>
        <div className="border border-darky w-85 h-50"></div>
      </main>
    </div>
  );
}
