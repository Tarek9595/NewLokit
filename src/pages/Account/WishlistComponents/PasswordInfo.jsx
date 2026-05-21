import MyForm from "../../../components/common/MyForm";
import CstBtn from "../../../components/common/CstBtn";
import MyInput from "../../../components/common/MyInput";
import { MdLock } from "react-icons/md";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useAccountInfo } from "../../../store";
import { useState } from "react";

export default function PasswordInfo() {
  const { changePassword } = useAccountInfo();
  const [isPending, setIsPending] = useState(false);

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsPending(true);

    const result = await changePassword(values);

    setIsPending(false);
    setSubmitting(false);

    if (result.success) {
      toast.success("Password Changed Successfully!");
      resetForm();
    } else {
      toast.error(result.message);
    }
  };

  const loginSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required"),
    newPassword: Yup.string()
      .required("New Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),

    confirmNewPassword: Yup.string()
      .required("Please confirm your new password")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5 justify-between md:w-[60%] lg:w-[45%]">
        <MyInput name="oldPassword" accName="Old Password" type="password">
          <MdLock />
        </MyInput>

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
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <div className="w-full">
          <CstBtn
            type="submit"
            variant="darky"
            size="lg"
            className="p-20 font-medium"
            disabled={isPending}
          >
            {isPending ? "Changing..." : "Change Password"}
          </CstBtn>
        </div>
      </div>
    </MyForm>
  );
}
