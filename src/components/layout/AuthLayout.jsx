import { Outlet } from "react-router";
import Lang from "../common/Lang";
import Logo from "../common/Logo";
import MyCarousel from "../common/MyCarousel";
import SocialLogins from "../common/SocialLogins";

export default function AuthLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center lg:px-16 px-4 bg-white">
      <div className="w-full max-w-350 py-6 flex">
        <Lang width="w-25" />
      </div>
      <div className="w-full max-w-350 rounded-[30px] flex flex-col lg:flex-row border border-[#9797973D] bg-white shadow-sm overflow-hidden mb-8">
        <div className="hidden lg:block lg:w-1/2 h-195">
          <MyCarousel high="[900px]" />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center py-12 px-6 lg:px-16">
          <div className="w-full max-w-md flex flex-col gap-6">
            <div className="flex flex-col gap-4 mb-2">
              <Logo />
              <h1 className="font-normal text-[26px] md:text-[30px] text-darky">
                Sign In To Lokit
              </h1>
            </div>

            <SocialLogins />

            <div className="w-full flex justify-center items-center relative my-2">
              <div className="w-full h-px bg-gray-200 absolute z-0"></div>
              <span className="font-light text-gray-400 text-[14px] bg-white px-4 z-10">
                or continue with
              </span>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
