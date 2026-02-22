import React from "react";
import { useField } from "formik";

export default function MyInput({ children, label, paWidth, width, ...props }) {
  const [field, meta] = useField(props);
  const childrenArray = React.Children.toArray(children);

  const hasLeftIcon = childrenArray.length > 0;
  const hasRightIcon = childrenArray.length > 1;

  return (
    <div className={`flex flex-col gap-1.5 ${paWidth || "w-full"}`}>
      <label className="label-text capitalize font-medium text-darky text-[16px] md:text-[18px]">
        {label || props.name}
      </label>

      <div className="relative w-full flex items-center">
        {hasLeftIcon && (
          <div className="absolute left-4 flex items-center justify-center text-gray-500 text-[20px] pointer-events-none">
            {childrenArray[0]}
          </div>
        )}

        <input
          {...field}
          {...props}
          className={`input bg-transparent border transition-all duration-300 text-[16px] h-[55px] focus:outline-none
            ${width || "w-full"} 
            ${hasLeftIcon ? "pl-12" : "pl-4"} 
            ${hasRightIcon ? "pr-12" : "pr-4"}
            ${
              meta.touched && meta.error
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[#212A2F29] focus:border-darky focus:ring-1 focus:ring-darky"
            }`}
        />

        {hasRightIcon && (
          <div className="absolute right-4 flex items-center justify-center text-gray-500 text-[20px] cursor-pointer hover:text-darky transition-colors">
            {childrenArray[1]}
          </div>
        )}
      </div>

      <div className="min-h-5">
        {meta.touched && meta.error && (
          <span className="text-red-500 text-sm block">{meta.error}</span>
        )}
      </div>
    </div>
  );
}
