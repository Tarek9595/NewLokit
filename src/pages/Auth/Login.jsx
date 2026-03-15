import MyForm from "../../components/common/MyForm";
import CstBtn from "../../components/common/CstBtn";
import MyInput from "../../components/common/MyInput";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Must be a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
  });

  const handleLoginSuccess = (data) => {
    login(data); // بيانات اليوزر اتحفظت في الـ Store وفي الـ LocalStorage
    toast.success(`Welcome back`);
    navigate("/");
  };
  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={() => handleLoginSuccess(initialValues)}
    >
      <MyInput name="email" type="email">
        <IoMdMail />
      </MyInput>

      <MyInput name="password" type="password">
        <MdLock />
      </MyInput>

      <div className="w-full flex justify-end">
        <Link
          to="/forget"
          className="text-sm font-medium hover:underline text-gray-600"
        >
          Forget Password ?
        </Link>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <div className="w-full sm:w-[48%]">
          <CstBtn type="submit" variant="darky" size="md" fullWidth={true}>
            Sign In
          </CstBtn>
        </div>
        <Link to="/signup" className="w-full sm:w-[48%]">
          <CstBtn variant="outline" size="md" fullWidth={true}>
            Sign Up
          </CstBtn>
        </Link>
      </div>
    </MyForm>
  );
}
