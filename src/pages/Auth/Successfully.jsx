import { Link } from "react-router";
import Checked from "../../assets/CheckPadge.svg";
import Lang from "../../components/common/Lang";
import Logo from "../../components/common/Logo";
import CstBtn from "../../components/common/CstBtn";

export default function Successfully() {
  return (
    <div className="w-full h-dvh flex items-center px-6 md:px-16 flex-col ">
      <div className="w-full py-8 container">
        <Lang width="w-25" />
      </div>
      <div className="container rounded-r-[30px] flex flex-col justify-center items-center border border-[#9797973D] gap-15 p-5">
        <Logo width="text-[67px]" />
        <div className="w-full flex flex-col justify-center items-center gap-7">
          <div>
            <img src={Checked} />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3 text-darky">
            <h1 className="text-[32px] ">successfully!</h1>
            <p className="text-lg text-center md:text-left md:text-[24px] opacity-50">
              You have successfully registered in our Lokit and start working in
              it .
            </p>
          </div>
          <Link to="/login" className="w-[80%] lg:w-[20%]">
            <CstBtn variant="darky" size="md" fullWidth={true}>
              Let's Start
            </CstBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
