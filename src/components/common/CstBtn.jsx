export default function CstBtn({
  children,
  onClick,
  variant = "darky", // darky, light, outline
  size = "md", // sm, md, lg
  icon: Icon, // بنباصي الـ Icon كـ Component
  className = "",
  type = "button",
  fullWidth = false,
}) {
  // تعريف الاستايلات بناءً على الـ Variants اللي في الصور
  const variants = {
    darky: "bg-darky text-white hover:bg-opacity-90 border-none",
    inline:
      "bg-gray-200 text-darky hover:bg-darky hover:text-white border-none",
    outline:
      "bg-transparent border border-darky text-darky hover:bg-darky hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base", // الحجم اللي متكرر في الصور
    lg: "px-10 py-5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        btn rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-main
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
