export default function CstBtn({
  children,
  onClick,
  variant = "darky",
  size = "md",
  icon: Icon,
  className = "",
  type = "button",
  fullWidth = false,
}) {
  const variants = {
    darky: "bg-darky text-white hover:bg-opacity-90 border-none",
    inline:
      "bg-gray-200 text-darky hover:bg-darky hover:text-white border-none",
    outline:
      "bg-transparent border border-darky text-darky hover:bg-darky hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        btn rounded-[10px] transition-all duration-300 flex items-center justify-center gap-2 font-main
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? "w-full" : "w-fit"}
        ${className}
      `}
    >
      {children}
      {Icon && <Icon className="text-xl" />}
    </button>
  );
}
