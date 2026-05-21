import MyForm from "../../components/common/MyForm";
import MyInput from "../../components/common/MyInput";
import CstBtn from "../../components/common/CstBtn";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { domain } from "../../store/index.jsx";

export default function Signup() {
  const navigate = useNavigate();

  const [signInfo, setSignInfo] = useState({});

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
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
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...dataToSubmit } = values;

    console.log("البيانات اللي رايحة للباك إند:", dataToSubmit);

    setSignInfo(dataToSubmit);
    setTimeout(() => {
      navigate("/success");
    }, 1000);
  };

  useEffect(() => {
    let url = domain + "auth/register";

    if (Object.keys(signInfo).length === 0) return;
    axios
      .post(url, signInfo)
      .then((res) => console.log(res.data.token))
      .catch((err) => console.log(err));
  }, [signInfo]);

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

      <MyInput name="phone" type="text" width="w-full">
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
