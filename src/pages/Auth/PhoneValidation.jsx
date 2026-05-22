import CstBtn from "../../components/common/CstBtn";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";
import { useState } from "react";
import toast from "react-hot-toast";
import { userLoginInfo } from "../../store";

export default function PhoneValidation() {
  const navigate = useNavigate();

  const { verifyResetCode, forgetPasswordEmail, sendResetCode } =
    userLoginInfo();
  const [otpValue, setOtpValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpValue.length === 6) {
      setIsPending(true);
      const result = await verifyResetCode(otpValue);
      setIsPending(false);

      if (result.success) {
        toast.success(result.message);
        navigate("/reset");
      } else {
        toast.error(result.message);
      }
    } else {
      toast.error("Please enter complete 6-digit OTP");
    }
  };

  const handleResend = async () => {
    if (!forgetPasswordEmail)
      return toast.error("No email found, please restart process.");
    setIsResending(true);
    const result = await sendResetCode(forgetPasswordEmail);
    setIsResending(false);
    if (result.success) toast.success("A new code has been sent!");
    else toast.error(result.message);
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <Otp
        length={6}
        onComplete={(code) => {
          setOtpValue(code);
        }}
      />
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <div className="w-full sm:w-[48%]">
          <CstBtn type="submit" variant="darky" size="md" fullWidth={true}>
            {isPending ? "Verifying..." : "Next"}
          </CstBtn>
        </div>
        <div className="w-full sm:w-[48%]">
          <CstBtn
            variant="outline"
            size="md"
            fullWidth={true}
            onClick={handleResend}
            disabled={isPending || isResending}
          >
            Resent
          </CstBtn>
        </div>
      </div>
    </form>
  );
}
