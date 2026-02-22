import { BiRightArrowAlt } from "react-icons/bi";
import { FiInbox } from "react-icons/fi";
import { useNavigate } from "react-router";
export default function EmptyOrders() {
  const navigator = useNavigate();
  const handleShop = () => {
    navigator("/");
  };
  return (
    <div className="w-full flex flex-col items-center lg:p-25 gap-8.75">
      <FiInbox className="text-[64px] text-[#5C5F6A] stroke-[1px]" />
      <h1 className="text-[14px] font-inter text-[#5C5F6A]/70 font-normal ">
        Your order history is waiting to be filled.
      </h1>
      <button
        className="flex justify-center items-center gap-3 bg-darky text-white rounded-md w-fit py-2.5 px-6 transition-all duration-300 ease-in-out cursor-pointer group "
        onClick={handleShop}
      >
        <span className="text-[14px] font-medium">Start Shopping</span>
        <BiRightArrowAlt className="text-[16px] transition-transform duration-300 group-hover:translate-x-2" />
      </button>
    </div>
  );
}
