import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ImAppleinc } from "react-icons/im";

export default function SocialLogins() {
  return (
    <div className="w-full flex justify-between gap-4">
      <div className="flex-1 p-4 text-[24px] rounded-[10px] border border-[#212A2F29] flex justify-center hover:bg-gray-50 transition-colors cursor-pointer">
        <FcGoogle />
      </div>
      <div className="flex-1 p-4 text-[24px] rounded-[10px] border border-[#212A2F29] flex justify-center hover:bg-gray-50 transition-colors cursor-pointer">
        <BsFacebook className="text-[#1976D2]" />
      </div>
      <div className="flex-1 p-4 text-[24px] rounded-[10px] border border-[#212A2F29] flex justify-center hover:bg-gray-50 transition-colors cursor-pointer">
        <ImAppleinc />
      </div>
    </div>
  );
}
