import MyForm from "../../components/common/MyForm";
import MyInput from "../../components/common/MyInput";
import CstBtn from "../../components/common/CstBtn";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa6";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function Signup() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

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
      <MyInput
        name="email"
        type="email"
        width="w-full"
        placeholder="Email Address"
      >
        <IoMdMail />
      </MyInput>

      <div className="flex lg:flex-row flex-col justify-between">
        <MyInput
          name="firstName"
          label="First Name"
          type="text"
          width="w-full"
          paWidth="lg:w-[48%]"
        >
          <FaUser />
        </MyInput>

        <MyInput
          name="lastName"
          label="Last Name"
          type="text"
          width="w-full"
          paWidth="lg:w-[48%]"
        >
          <FaUser />
        </MyInput>
      </div>

      <MyInput name="phone" label="Phone Number" type="text" width="w-full">
        <FaPhone />
      </MyInput>

      <MyInput
        name="password"
        type={show ? "text" : "password"}
        width="w-full"
        placeholder="Password"
      >
        <MdLock />
        <div className="cursor-pointer" onClick={() => setShow(!show)}>
          {show ? <IoIosEyeOff /> : <IoIosEye />}
        </div>
      </MyInput>

      <MyInput
        name="confirmPassword"
        label="Confirm Password"
        type={show ? "text" : "password"}
        width="w-full"
        placeholder="Confirm Password"
      >
        <MdLock />
        <div className="cursor-pointer" onClick={() => setShow(!show)}>
          {show ? <IoIosEyeOff /> : <IoIosEye />}
        </div>
      </MyInput>

      <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-2.5">
        <div className=" w-full">
          <CstBtn type="submit" variant="darky" size="md">
            Sign Up
          </CstBtn>
        </div>
        <Link to="/signin" className=" w-full">
          <CstBtn variant="outline" size="md">
            Sign In
          </CstBtn>
        </Link>
      </div>
    </MyForm>
  );
}
