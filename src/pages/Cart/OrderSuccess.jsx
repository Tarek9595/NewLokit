import TopSection from "../../components/common/TopSection";
import box from "../../assets/successbox.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen gap-15 items-center">
      <TopSection
        name="successful"
        crrName="Successful Order"
        path="checkout"
        bGround="bg-[#D5E5D7]"
      />
      <div className="w-full h-dvh flex items-center  flex-col gap-8 p-5">
        <div className="w-45 h-45">
          <img src={box} alt="box" className="w-full h-full object-contain" />
        </div>

        <h1 className="w-fit text-darky font-bold text-[24px] text-center">
          Thank you for shopping
        </h1>

        <p className="text-[14px] font-inter text-[#5C5F6A]/70 md:w-[40%] text-center">
          Your order has been successfully placed and is now being processed.
        </p>

        <button
          className="flex justify-center items-center gap-3 bg-darky text-white rounded-md w-fit py-2.5 px-6 transition-all duration-300 ease-in-out cursor-pointer group "
          onClick={() => navigate("/")}
        >
          <span className="text-[14px] font-medium">Go to Home page</span>
          <BiRightArrowAlt className="text-[16px] transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
}
