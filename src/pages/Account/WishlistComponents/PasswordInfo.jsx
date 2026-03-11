import MyForm from "../../../components/common/MyForm";
import CstBtn from "../../../components/common/CstBtn";
import MyInput from "../../../components/common/MyInput";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function PasswordInfo() {
  const navigate = useNavigate();

  const initialValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleSubmit = (values) => {
    console.log("Login Success:", values);
    if (
      values.newPassword &&
      values.confirmNewPassword &&
      values.newPassword === values.confirmNewPassword
    ) {
      navigate(0);
      toast.success("Resest Success");
    } else {
      toast.error("Right Same Pass !");
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
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5 justify-between md:w-[60%] lg:w-[45%]">
        <MyInput
          name="newPassword"
          accName="New Password"
          type="password"
          className=""
        >
          <MdLock />
        </MyInput>

        <MyInput
          name="confirmNewPassword"
          accName="Confirm New Password"
          type="password"
          className=""
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
          >
            Change Password
          </CstBtn>
        </div>
      </div>
    </MyForm>
  );
}
