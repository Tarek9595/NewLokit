import { Outlet } from "react-router-dom";
import { useActiveInfo } from "../../store";

export default function SideInfo() {
  const { activeInfo } = useActiveInfo();

  return (
    <div className="grow p-2 sm:p-3 flex flex-col gap-6 sm:gap-14 w-full">
      <h1 className="tracking-wide font-semibold text-[16px]">
        {activeInfo?.name || "Wishlist"}
      </h1>
      <div className="flex flex-col gap-8 sm:gap-16 h-auto sm:h-dvh sm:overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
