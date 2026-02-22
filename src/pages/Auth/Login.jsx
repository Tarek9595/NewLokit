import Lang from "../../components/common/Lang";
import Logo from "../../components/common/Logo";
import MyForm from "../../components/common/MyForm";
import CstBtn from "../../components/common/CstBtn";
import MyInput from "../../components/common/MyInput";
import MyCarousel from "../../components/common/MyCarousel";
import { IoMdMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SocialLogins from "../../components/common/SocialLogins";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login Success:", values);
    navigate("/");
    setSubmitting(false);
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

  return (
    <div className="w-full min-h-screen flex flex-col items-center lg:px-16 px-4 bg-white">
      <div className="w-full max-w-350 py-6 flex justify-end">
        <Lang width="w-25" />
      </div>

      <div className="w-full max-w-350 rounded-[30px] flex flex-col lg:flex-row border border-[#9797973D] bg-white shadow-sm overflow-hidden mb-8">
        <div className="hidden lg:block lg:w-1/2 h-195">
          <MyCarousel high="[900px]" />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center py-12 px-6 lg:px-16">
          <div className="w-full max-w-md flex flex-col gap-6">
            <div className="flex flex-col gap-4 mb-2">
              <Logo />
              <h1 className="font-normal text-[26px] md:text-[30px] text-darky">
                Sign In To Lokit
              </h1>
            </div>

            <SocialLogins />

            <div className="w-full flex justify-center items-center relative my-2">
              <div className="w-full h-px bg-gray-200 absolute z-0"></div>
              <span className="font-light text-gray-400 text-[14px] bg-white px-4 z-10">
                or continue with
              </span>
            </div>

            <MyForm
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <>
                  <MyInput name="email" type="email" label="Email">
                    <IoMdMail />
                  </MyInput>

                  <MyInput name="password" type="password" label="Password">
                    <MdLock />
                  </MyInput>

                  <div className="w-full flex justify-end -mt-3">
                    <Link
                      to="/forget"
                      className="text-sm font-medium hover:underline text-gray-600"
                    >
                      Forget Password?
                    </Link>
                  </div>

                  <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-2">
                    <div className="w-full sm:w-[48%]">
                      <CstBtn
                        variant="darky"
                        size="md"
                        fullWidth={true}
                        isLoading={isSubmitting}
                        disabled={isSubmitting || !isValid || !dirty}
                      >
                        Sign In
                      </CstBtn>
                    </div>
                    <Link to="/signup" className="w-full sm:w-[48%]">
                      <CstBtn variant="outline" size="md" fullWidth={true}>
                        Sign Up
                      </CstBtn>
                    </Link>
                  </div>
                </>
              )}
            </MyForm>
          </div>
        </div>
      </div>
    </div>
  );
}
