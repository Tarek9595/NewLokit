import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CstBtn from "../common/CstBtn";
import Lang from "../common/Lang";

export default function LargeNav() {
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Wishlist", path: "/account" },
    { name: "My Cart", path: "/mycart" },
  ];

  const activeClass =
    "text-darky border-b-2 border-darky font-semibold scale-105";
  const inactiveClass = "text-gray-500 hover:text-darky hover:scale-105";

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

      <CstBtn variant="darky" size="md" onClick={() => navigate("/signin")}>
        Sign In
      </CstBtn>
    </div>
  );
}
