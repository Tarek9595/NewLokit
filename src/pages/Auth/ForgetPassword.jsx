import MyForm from "../../components/common/MyForm";
import CstBtn from "../../components/common/CstBtn";
import MyInput from "../../components/common/MyInput";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userLoginInfo } from "../../store";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const { sendResetCode } = userLoginInfo();
  const [isPending, setIsPending] = useState(false);

  const initialValues = {
    email: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsPending(true);
    const result = await sendResetCode(values.email);
    setIsPending(false);
    setSubmitting(false);

    if (result.success) {
      toast.success(result.message);
      navigate("/validate");
    } else {
      toast.error(result.message);
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
            {isPending ? "Sending..." : "Send"}
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
