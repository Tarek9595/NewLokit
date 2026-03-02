import MyForm from "../../components/common/MyForm";
import CstBtn from "../../components/common/CstBtn";
import MyInput from "../../components/common/MyInput";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function ForgetPassword() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const handleSubmit = (values) => {
    if (values.email) {
      navigate("/validate");
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Must be a valid email"),
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <MyInput name="email" type="email">
        <IoMdMail />
      </MyInput>

      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
        <div className="w-full sm:w-[48%]">
          <CstBtn type="submit" variant="darky" size="md" fullWidth={true}>
            Sent
          </CstBtn>
        </div>
        <Link to="/login" className="w-full sm:w-[48%]">
          <CstBtn variant="outline" size="md" fullWidth={true}>
            Sign In
          </CstBtn>
        </Link>
      </div>
    </MyForm>
  );
}
