import TopSection from "../../components/common/TopSection";
import box from "../../assets/failedbox.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function OrderFailed() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen gap-15 items-center">
      <TopSection
        name="failed"
        crrName="failed Order"
        path="failedorder"
        bGround="bg-[#FBD9D0]"
      />
      <div className="w-full h-dvh flex items-center  flex-col gap-8 p-5">
        <div className="w-45 h-45">
          <img src={box} alt="box" className="w-full h-full object-contain" />
        </div>

        <h1 className="w-fit text-darky font-bold text-[24px] text-center">
          Oops! There was an issue
        </h1>

        <p className="text-[14px] font-inter text-[#5C5F6A]/70 md:w-[40%] text-center">
          Oops! There was a problem processing your order. Please review the
          details and try again.
        </p>

        <button
          className="flex justify-center items-center gap-3 bg-darky text-white rounded-md w-fit py-2.5 px-6 transition-all duration-300 ease-in-out cursor-pointer group "
          onClick={() => navigate("/")}
        >
          <span className="text-[14px] font-medium">Reorder</span>
          <BiRightArrowAlt className="text-[16px] transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
}
