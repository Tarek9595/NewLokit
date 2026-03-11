import MyForm from "../../components/common/MyForm";
import MyInput from "../../components/common/MyInput";
import CstBtn from "../../components/common/CstBtn";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa6";

export default function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain one uppercase")
      .matches(/[0-9]/, "Must contain one number")
      .matches(/[!@#$%^&*]/, "Must contain one special character"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values) => {
    console.log("signup Success:", values);
    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };
  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      <MyInput name="email" type="email" width="w-full">
        <IoMdMail />
      </MyInput>

      <div className="flex lg:flex-row flex-col gap-5 justify-between">
        <MyInput name="firstName" type="text" width="w-full">
          <FaUser />
        </MyInput>

        <MyInput name="lastName" type="text" width="w-full">
          <FaUser />
        </MyInput>
      </div>

      <MyInput name="phone" type="number" width="w-full">
        <FaPhone />
      </MyInput>

      <MyInput name="password" type="password" width="w-full">
        <MdLock />
      </MyInput>

      <MyInput name="confirmPassword" type="password" width="w-full">
        <MdLock />
      </MyInput>

      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <Link to="/login" className="w-full sm:w-[48%]">
          <CstBtn variant="outline" size="md" fullWidth={true}>
            Sign In
          </CstBtn>
        </Link>
        <div className="w-full sm:w-[48%]">
          <CstBtn type="submit" variant="darky" size="md" fullWidth={true}>
            Sign Up
          </CstBtn>
        </div>
      </div>
    </MyForm>
  );
}
