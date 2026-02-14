import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "Wishlist", path: "/account" },
    { name: "My cart", path: "/mycart" },
    { name: "Sign In", path: "/signin" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <footer className="bg-darky text-white font-main">
      <div className="container mx-auto px-6 py-12 lg:px-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-white/10 pb-10 gap-8">
          <Logo textColor="text-white" size="text-[32px]" />

          <nav className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {footerLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-montserrat transition-all duration-300 ${
                    isActive
                      ? "opacity-100 border-b border-white font-medium"
                      : "opacity-60 hover:opacity-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] opacity-60 font-light">
          <p>Copyright © Lokit 2026. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
