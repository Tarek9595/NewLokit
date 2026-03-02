import React from "react";
import { useField } from "formik";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function MyInput({ children, width, ...props }) {
  const [field, meta] = useField(props);
  const childrenArray = React.Children.toArray(children);

  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = props.type === "password";
  const inputType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : props.type;

  const hasLeftIcon = childrenArray.length > 0;
  const hasRightIcon = childrenArray.length > 1;

  return (
    <div className={`flex flex-col gap-1.5`}>
      <label className="label-text capitalize font-medium text-darky text-[16px] md:text-[18px]">
        {props.accName ? props.accName : props.name}
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
          type={inputType}
          className={`input bg-transparent border transition-all duration-300 text-[16px] h-13.75 focus:outline-none
            ${width || "w-full"} 
            ${hasLeftIcon ? "pl-12" : "pl-4"} 
            ${hasRightIcon ? "pr-12" : "pr-4"}
            ${
              meta.touched && meta.error
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-[#212A2F29] focus:border-darky focus:ring-1 focus:ring-darky"
            }`}
        />

        {isPasswordType && (
          <div
            className="absolute right-4 cursor-pointer text-gray-500 text-[20px]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
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
