import { Link } from "react-router-dom";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function TopSection({ name }) {
  return (
    <section className="w-full bg-[#EDF1F3] py-12 md:py-20 lg:py-28 flex justify-center">
      <div className="container flex flex-col items-center justify-center gap-3 px-5 md:px-0">
        <h1 className="uppercase font-jost text-[40px] md:text-[60px] text-darky tracking-wider leading-none">
          {name}
        </h1>
        <div className="flex items-center gap-1.5 font-lato text-[#3A3A3A] text-[14px] md:text-[16px]">
          <Link to="/">
            <span className="hover:underline hover:underline-offset-2">
              Home
            </span>
          </Link>
          <LiaAngleRightSolid className="text-[12px]" />
          <Link to="/search">
            <span className="hover:underline font-semibold hover:underline-offset-2">
              {name}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
