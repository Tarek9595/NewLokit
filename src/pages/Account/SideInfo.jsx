import { Outlet, useLocation } from "react-router-dom";
import { useActiveInfo, useLinks } from "../../store";
import { useEffect } from "react";

export default function SideInfo() {
  const { activeInfo } = useActiveInfo();

  const location = useLocation();
  const { Links } = useLinks();

  useEffect(() => {
    const currentTitle =
      Links.find(
        (l) =>
          (l.path === "/account" ? l.path : "/account/" + l.path) ===
          location.pathname,
      )?.name || "Wishlist";

    console.log(currentTitle);

    console.log(location.pathname);
  }, [location]);

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
