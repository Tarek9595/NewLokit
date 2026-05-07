import { Outlet, useLocation } from "react-router-dom";
import { useActiveInfo, useOrderProgress, useCurrentOrder } from "../../store";
import { BsArrowLeft } from "react-icons/bs";
import OrderDetails from "./OrderDetails";
import { useEffect } from "react";

export default function SideInfo() {
  const { activeInfo } = useActiveInfo();
  const { orderProgress, resetOrderProgress } = useOrderProgress();
  const { clearSelectedOrder } = useCurrentOrder();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.endsWith("/orders")) {
      resetOrderProgress();
      clearSelectedOrder();
    }
  }, [location.pathname, resetOrderProgress, clearSelectedOrder]);

  const isViewingOrderDetails =
    orderProgress && location.pathname.endsWith("/orders");
  return (
    <div className="grow p-2 sm:p-3 flex flex-col gap-6 sm:gap-14 w-full">
      <h1 className="tracking-wide font-semibold text-[16px] flex items-center gap-3">
        {isViewingOrderDetails ? (
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
        {isViewingOrderDetails ? <OrderDetails /> : <Outlet />}
      </div>
    </div>
  );
}
