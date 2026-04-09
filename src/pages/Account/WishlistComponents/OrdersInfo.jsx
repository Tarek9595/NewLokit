import EmptyOrders from "../EmptyOrders";
import { useCart, useOrderProgress, useCurrentOrder } from "../../../store";

export default function OrdersInfo() {
  const { ordersHistory } = useCart();
  const { setOrderProgress } = useOrderProgress();
  const { setSelectedOrder } = useCurrentOrder();

  return ordersHistory.length > 0 ? (
    <div className="flex flex-col gap-6">
      {ordersHistory.map((order) => (
        <div
          key={order.orderId}
          className="flex flex-col md:flex-row gap-7 md:gap-0 lg:w-150 xl:w-200 justify-between items-start md:items-center py-6 border-b border-gray-100 last:border-0 "
        >
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 md:w-25 md:h-25 shrink-0">
              <img
                src={order.items[0]?.img}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <h1 className="text-[15px] md:text-[16px] font-bold text-darky">
                {order.items[0]?.name}
              </h1>
              <p className="text-[13px] text-[#5C5F6A]">
                Ordered on: {order.date}
              </p>
              <p className="text-[14px] font-bold text-darky mt-1">
                ${order.totalPrice}
              </p>
            </div>
          </div>

          <div className="flex md:w-auto pr-10 md:pr-0 w-full justify-between items-center gap-6">
            <span className="text-[14px] md:text-[15px] text-[#E26F1D] border-b border-[#E26F1D] cursor-pointer">
              {order.status}
            </span>
            <button
              onClick={() => {
                setSelectedOrder(order);
                setOrderProgress(true);
              }}
              className="px-6 py-2 border border-darky rounded-md text-sm hover:bg-darky hover:text-white transition-all cursor-pointer"
            >
              View Item
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <EmptyOrders />
  );
}
