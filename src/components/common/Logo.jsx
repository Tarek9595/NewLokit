import { useNavigate } from "react-router-dom";

export default function Logo({
  textColor = "text-darky",
  size = "text-[40px]",
  className = "",
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className={`
        font-volkhov font-normal cursor-pointer select-none
        ${textColor} 
        ${size} 
        ${className}
      `}
    >
      Lokit
    </div>
  );
}
