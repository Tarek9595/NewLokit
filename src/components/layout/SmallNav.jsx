import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CstBtn from "../common/CstBtn";
import { useAccountInfo, userLoginInfo } from "../../store";
import { FaUser } from "react-icons/fa6";

export default function SmallNav() {
  const { accountInfo, fetchProfile, isLoadingAccount } = useAccountInfo();
  const { isLoggedIn } = userLoginInfo();

  useEffect(() => {
    if (isLoggedIn && !accountInfo) {
      fetchProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, accountInfo]);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Wishlist", path: "/account" },
    { name: "My Cart", path: "/mycart" },
  ];
  const handleADetails = () => {
    navigate("/account/details");
    setIsOpen(false);
  };

  const renderMobileAuthSection = () => {
    if (isLoggedIn && (isLoadingAccount || !accountInfo?.firstName)) {
      return (
        <div className="flex justify-center items-center gap-2 animate-pulse py-2">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-20 h-5 bg-gray-200 rounded"></div>
        </div>
      );
    }

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

    return (
      <CstBtn
        variant="darky"
        size="md"
        onClick={() => {
          navigate("/login");
          setIsOpen(false);
        }}
      >
        Sign In
      </CstBtn>
    );
  };

  return (
    <div className="lg:hidden">
      <AiOutlineBars
        className="text-4xl cursor-pointer text-darky"
        onClick={() => setIsOpen(true)}
      />

      <div
        className={`fixed inset-0 z-6000 transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-70 bg-white shadow-2xl p-8 flex flex-col transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end mb-8 h-10">
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <nav className="grow flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-main border-b border-gray-100 pb-2 ${isActive ? "text-darky font-bold" : "text-gray-600"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {renderMobileAuthSection()}
        </div>
      </div>
    </div>
  );
}
