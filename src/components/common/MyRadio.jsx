import { useField } from "formik";

export default function MyRadio({ label, ...props }) {
  const [field] = useField({ ...props, type: "radio" });

  return (
    <label className="flex items-center gap-3 p-4 rounded-xl cursor-pointer hover:border-darky transition-all duration-300">
      <input
        {...field}
        {...props}
        type="radio"
        className="w-5 h-5 accent-darky cursor-pointer"
      />
      <span className="text-darky font-medium text-[14px] md:text-[16px] capitalize">
        {label}
      </span>
    </label>
  );
}
