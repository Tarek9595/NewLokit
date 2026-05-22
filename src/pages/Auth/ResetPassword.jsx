import MyForm from "../../components/common/MyForm";
import CstBtn from "../../components/common/CstBtn";
import MyInput from "../../components/common/MyInput";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { userLoginInfo } from "../../store";
import { useState } from "react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { resetPassword } = userLoginInfo();
  const [isPending, setIsPending] = useState(false);

  const initialValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsPending(true);
    const result = await resetPassword(values.newPassword);
    setIsPending(false);
    setSubmitting(false);

    if (result.success) {
      toast.success("Password changed successfully!");
      navigate("/login");
    } else {
      toast.error(result.message);
    }
  };

  const loginSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),

    confirmNewPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <MyInput name="newPassword" accName="New Password" type="password">
        <MdLock />
      </MyInput>

      <MyInput
        name="confirmNewPassword"
        accName="Confirm New Password"
        type="password"
      >
        <MdLock />
      </MyInput>

      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <div className="w-full">
          <CstBtn type="submit" variant="darky" size="md" fullWidth={true}>
            {isPending ? "Resetting..." : "Confirm"}
          </CstBtn>
        </div>
      </div>
    </MyForm>
  );
}
