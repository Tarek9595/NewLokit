import { NavLink } from "react-router-dom";
import { useLinks, useActiveInfo } from "../../store";
import {
  BsCart4,
  BsHeart,
  BsTruck,
  BsKey,
  BsPerson,
  BsBoxArrowRight,
} from "react-icons/bs";

export default function SideLinks() {
  let icons = [
    <BsCart4 />,
    <BsHeart />,
    <BsTruck />,
    <BsKey />,
    <BsPerson />,
    <BsBoxArrowRight />,
  ];

  let navStyle =
    "flex gap-2.5 items-center p-3 text-[14px] text-[#5C5F6A] hover:text-darky hover:bg-[#F6F6F6] hover:rounded-lg transition-all duration-300 ease-in-out";

  const { Links } = useLinks();

  const { setActiveInfo } = useActiveInfo();

  const getActiveInfo = (link) => {
    link.path !== "/" ? setActiveInfo(link) : localStorage.removeItem("user");
  };

  return (
    <div className="flex flex-row flex-wrap w-full lg:w-50 lg:flex-col gap-4 lg:mt-27.5">
      {Links.map((link, index) => (
        <NavLink
          key={link.id}
          to={link.path}
          end
          className={({ isActive }) =>
            `${navStyle} ${
              isActive && link.path !== "/"
                ? "text-darky bg-[#F6F6F6] rounded-lg font-semibold"
                : ""
            }`
          }
          onClick={() => getActiveInfo(link)}
        >
          <span className="text-[18px]">{icons[index]}</span>
          <span className="tracking-wider">{link.name}</span>
        </NavLink>
      ))}
    </div>
  );
}
