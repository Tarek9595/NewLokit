import { Outlet, useLocation } from "react-router";
import Lang from "../common/Lang";
import Logo from "../common/Logo";
import MyCarousel from "../common/MyCarousel";
import SocialLogins from "../common/SocialLogins";

export default function AuthLayout() {
  const location = useLocation();
  const path = location.pathname;

  const getPageTitle = () => {
    if (path.includes("login")) return "Sign In To Lokit";
    if (path.includes("signup")) return "Sign Up To Lokit";
    if (path.includes("forget")) return "Forget Password";
    if (path.includes("validate")) return "Phone Validation";
    if (path.includes("reset")) return "Reset Password";
    return "Welcome To Lokit";
  };

  const showGoogle = () => {
    if (path.includes("login") || path.includes("signup"))
      return (
        <>
          <SocialLogins />
          <div className="w-full flex justify-center items-center relative my-2">
            <div className="w-full h-px bg-gray-200 absolute z-0"></div>
            <span className="font-light text-gray-400 text-[14px] bg-white px-4 z-10">
              or continue with
            </span>
          </div>
        </>
      );
    return "";
  };
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 bg-white ">
      <div className="w-full lg:w-[90%] py-6 flex">
        <Lang width="w-25" />
      </div>
      <div className="w-full lg:w-[90%] rounded-xl flex flex-col lg:flex-row border border-[#9797973D] overflow-hidden items-stretch">
        <div className="hidden lg:block lg:w-1/2 self-stretch">
          <MyCarousel />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center p-10">
          <div className="w-full flex flex-col gap-2 ">
            <div className="flex flex-col gap-4 mb-2">
              <Logo />
              <h1 className="font-normal text-[26px] md:text-[30px] text-darky">
                {getPageTitle()}
              </h1>

              {path.includes("validate") && (
                <div className="text-sm md:text-[16px] flex-col flex md:flex-row gap-3 md:gap-1">
                  <h1 className="opacity-50">We sent you a SMS code on</h1>
                  <h1 className="font-bold text-darky">ES****@gmail.com</h1>
                </div>
              )}
            </div>

            {showGoogle()}

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
