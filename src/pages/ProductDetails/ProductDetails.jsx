import { Outlet, NavLink } from "react-router"; // غيرنا Link بـ NavLink عشان حالة الـ Active
import ProductInfo from "./ProductInfo";
import { HiOutlineDotsHorizontal, HiOutlineStar } from "react-icons/hi"; // الأيقونات
import Familiar from "./Familiar";

export default function ProductDetails() {
  return (
    <div className="pb-15 px-10 lg:px-20 flex flex-col gap-16 lg:gap-20">
      <ProductInfo />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-start font-inter">
          <div className="w-full md:w-1/4 flex flex-col gap-2 top-24">
            <NavLink
              to="detail"
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#F5F5F5] text-darky"
                    : "text-gray-500 hover:bg-gray-50 hover:text-darky"
                }`
              }
            >
              <HiOutlineDotsHorizontal className="text-xl" />
              Details
            </NavLink>

            <NavLink
              to="review"
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#F5F5F5] text-darky"
                    : "text-gray-500 hover:bg-gray-50 hover:text-darky"
                }`
              }
            >
              <HiOutlineStar className="text-xl" />
              Reviews
            </NavLink>
          </div>

          <div className="w-full md:w-3/4">
            <Outlet />
          </div>
        </div>
      </div>
      <Familiar />
    </div>
  );
}
