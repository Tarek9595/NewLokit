import { Outlet } from "react-router-dom";
import { useActiveInfo, useOrderProgress } from "../../store";
import { BsArrowLeft } from "react-icons/bs";

export default function SideInfo() {
  const { activeInfo } = useActiveInfo();
  const { orderProgress, resetOrderProgress } = useOrderProgress();

  return (
    <div className="grow p-2 sm:p-3 flex flex-col gap-6 sm:gap-14 w-full">
      <h1 className="tracking-wide font-semibold text-[16px] flex items-center gap-3">
        {orderProgress ? (
          <>
            <BsArrowLeft
              className="cursor-pointer text-[20px]"
              onClick={resetOrderProgress}
            />
            <span>Order Details</span>
          </>
        ) : (
          activeInfo?.name || "Wishlist"
        )}
      </h1>
      <div className="flex flex-col gap-8 sm:gap-16 h-auto sm:h-dvh sm:overflow-auto">
        {orderProgress ? (
          <div>هنا نضع مكون تفاصيل الأوردر الجديد</div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
