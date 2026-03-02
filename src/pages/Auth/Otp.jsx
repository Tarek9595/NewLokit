import { useRef, useState } from "react";

export default function Otp({ length = 6, onComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-4 w-full max-w-90">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-full h-12 sm:h-14
            text-center text-xl sm:text-2xl
            border-b-2 border-[#212a2f4d]
            rounded-none
            focus:border-darky
            focus:outline-none
            transition-colors
            bg-transparent
          "
        />
      ))}
    </div>
  );
}
