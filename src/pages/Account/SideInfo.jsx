import { Outlet } from "react-router-dom";
import { useActiveInfo, useOrderProgress, useCurrentOrder } from "../../store";
import { BsArrowLeft } from "react-icons/bs";
import OrderDetails from "./OrderDetails";

export default function SideInfo() {
  const { activeInfo } = useActiveInfo();
  const { orderProgress, resetOrderProgress } = useOrderProgress();
  const { clearSelectedOrder } = useCurrentOrder();
  return (
    <div className="grow p-2 sm:p-3 flex flex-col gap-6 sm:gap-14 w-full">
      <h1 className="tracking-wide font-semibold text-[16px] flex items-center gap-3">
        {orderProgress ? (
          <>
            <BsArrowLeft
              className="cursor-pointer text-[20px]"
              onClick={() => {
                resetOrderProgress();
                clearSelectedOrder();
              }}
            />
            <span>Order Details</span>
          </>
        ) : (
          activeInfo?.name || "Wishlist"
        )}
      </h1>
      <div className="flex flex-col gap-8 sm:gap-16 h-auto sm:h-dvh sm:overflow-auto">
        {orderProgress ? <OrderDetails /> : <Outlet />}
      </div>
    </div>
  );
}
