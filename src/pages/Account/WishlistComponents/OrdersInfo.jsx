import CstBtn from "../../../components/common/CstBtn";
import { useCart, useOrderProgress } from "../../../store";
import EmptyOrders from "../EmptyOrders";

export default function OrdersInfo() {
  const { cartOfOrdered } = useCart();
  const { setOrderProgress } = useOrderProgress();

  return cartOfOrdered.length > 0 ? (
    <div className="flex flex-col">
      {cartOfOrdered.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row w-225 justify-between items-start md:items-center py-8 border-b border-gray-100 last:border-0"
        >
          <div className="flex gap-6 items-center">
            <div className="w-20 h-20 md:w-25 md:h-25 shrink-0 ">
              <img src={product.img} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <h1 className="text-[15px] md:text-[16px] font-bold text-darky">
                {product.name}
              </h1>
              <h2 className="text-[13px] text-[#5C5F6A]">
                Ordered on: 27 July 2023
              </h2>
              <span className="text-[14px] font-bold text-darky mt-1">
                $ {product.price}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-8 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
            <span
              onClick={() => setOrderProgress(true)}
              className="text-[14px] md:text-[15px] text-[#E26F1D] border-b border-[#E26F1D] cursor-pointer"
            >
              Processing
            </span>

            <CstBtn
              variant="outlineDarky"
              className="py-2! px-8! border border-darky/20 text-darky hover:bg-darky hover:text-white transition-all duration-300 text-[14px] rounded-md"
            >
              View item
            </CstBtn>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <EmptyOrders />
  );
}
