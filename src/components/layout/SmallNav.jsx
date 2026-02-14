import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CstBtn from "../common/CstBtn";

export default function SmallNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/search" },
    { name: "Wishlist", path: "/account" },
    { name: "My Cart", path: "/mycart" },
  ];

  return (
    <div className="lg:hidden">
      <AiOutlineBars
        className="text-4xl cursor-pointer text-darky"
        onClick={() => setIsOpen(true)}
      />

      <div
        className={`fixed inset-0 z-[6000] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl p-8 flex flex-col transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end mb-8">
            <AiOutlineClose
              className="text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <nav className="flex flex-col gap-6">
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

          <div className="mt-auto">
            <CstBtn
              fullWidth
              variant="darky"
              onClick={() => {
                navigate("/signin");
                setIsOpen(false);
              }}
            >
              Sign In
            </CstBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
