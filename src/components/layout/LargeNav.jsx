import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CstBtn from "../common/CstBtn";
import Lang from "../common/Lang";
import { useEffect } from "react";
import { useAccountInfo, userLoginInfo } from "../../store";
import { FaUser } from "react-icons/fa";

export default function LargeNav() {
  const { accountInfo, fetchProfile, isLoadingAccount } = useAccountInfo();

  const { isLoggedIn } = userLoginInfo();

  useEffect(() => {
    if (isLoggedIn && !accountInfo) {
      fetchProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, accountInfo]);

  const navigate = useNavigate();

  const handleADetails = () => {
    navigate("/account/details");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Wishlist", path: "/account" },
    { name: "My Cart", path: "/mycart" },
  ];

  const activeClass =
    "text-darky border-b-2 border-darky font-semibold scale-105";
  const inactiveClass = "text-gray-500 hover:text-darky hover:scale-105";

  const renderAuthSection = () => {
    if (isLoggedIn && (isLoadingAccount || !accountInfo?.firstName)) {
      return (
        <div className="flex items-center gap-2 animate-pulse">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-4 bg-gray-300 rounded"></div>
        </div>
      );
    }

    // 2. لو مسجل دخول والبيانات وصلت بالسلامة
    if (isLoggedIn && accountInfo?.firstName) {
      return (
        <div className="flex justify-center items-center gap-1">
          <FaUser />
          <button
            className="text-darky hover:text-red-500 font-semibold hover:underline cursor-pointer capitalize"
            onClick={handleADetails}
          >
            {accountInfo?.firstName}
          </button>
        </div>
      );
    }

    // 3. لو مش مسجل دخول أصلاً
    return (
      <CstBtn variant="darky" size="md" onClick={() => navigate("/login")}>
        Sign In
      </CstBtn>
    );
  };

  return (
    <div className="hidden lg:flex items-center gap-10">
      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `text-[16px] font-main font-normal pb-1 transition-all duration-300 ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}

        <Lang />

        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <FaBell className="text-darky text-[22px]" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border border-white"></span>
        </div>
      </nav>

      {renderAuthSection()}
    </div>
  );
}
