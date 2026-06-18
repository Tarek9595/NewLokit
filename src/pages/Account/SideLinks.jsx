import { NavLink, useNavigate } from "react-router-dom";
import {
  useLinks,
  useActiveInfo,
  userLoginInfo,
  useAccountInfo,
} from "../../store";

import {
  BsCart4,
  BsHeart,
  BsTruck,
  BsKey,
  BsPerson,
  BsBoxArrowRight,
} from "react-icons/bs";
import { RiChatVoiceAiLine } from "react-icons/ri";

import toast from "react-hot-toast";

export default function SideLinks() {
  const navigate = useNavigate();

  let icons = [
    <BsCart4 />,
    <BsHeart />,
    <BsTruck />,
    <BsKey />,
    <BsPerson />,
    <RiChatVoiceAiLine />,
    <BsBoxArrowRight />,
  ];

  let navStyle =
    "flex gap-2.5 items-center p-3 text-[14px] text-[#5C5F6A] hover:text-darky hover:bg-[#F6F6F6] hover:rounded-lg transition-all duration-300 ease-in-out";

  const { Links } = useLinks();
  const { setActiveInfo } = useActiveInfo();

  const isLoggedIn = userLoginInfo((state) => state.isLoggedIn);
  const logout = userLoginInfo((state) => state.logout);
  const clearAccountInfo = useAccountInfo((state) => state.clearAccountInfo);

  const getActiveInfo = (link, e) => {
    if (link.name === "Logout") {
      e.preventDefault();
      logout();
      clearAccountInfo();
      navigate("/", { replace: true });
      return;
    }

    if (!isLoggedIn && link.path !== "/account" && link.path !== "") {
      e.preventDefault();

      toast.error("Please login First", {
        id: "auth-tab-error",
        style: {
          borderRadius: "10px",
          background: "#212a2f",
          color: "#fff",
        },
      });
      return;
    }

    setActiveInfo(link);
  };

  return (
    <div className="flex flex-row flex-wrap w-full lg:w-50 lg:flex-col gap-4 lg:mt-27.5">
      {Links.map((link, index) => {
        if (link.name === "Logout" && !isLoggedIn) {
          return null;
        }
        return (
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
            onClick={(e) => getActiveInfo(link, e)}
          >
            <span className="text-[18px]">{icons[index]}</span>
            <span className="tracking-wider">{link.name}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
