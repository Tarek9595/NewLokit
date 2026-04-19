import CstBtn from "../../components/common/CstBtn";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PhoneValidation() {
  const navigate = useNavigate();

  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpValue) {
      navigate("/reset");
    } else {
      toast.error("Complete Otp");
    }
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <Otp
        length={6}
        onComplete={(code) => {
          console.log("OTP:", code);
          setOtpValue(code);
        }}
      />
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <div className="w-full sm:w-[48%]">
          <CstBtn type="submit" variant="darky" size="md" fullWidth={true}>
            Next
          </CstBtn>
        </div>
        <div className="w-full sm:w-[48%]">
          <CstBtn
            variant="outline"
            size="md"
            fullWidth={true}
            onClick={() => navigate(0)}
          >
            Resent
          </CstBtn>
        </div>
      </div>
    </form>
  );
}
