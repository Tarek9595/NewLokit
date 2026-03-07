import MyForm from "../../../components/common/MyForm";
import CstBtn from "../../../components/common/CstBtn";
import MyInput from "../../../components/common/MyInput";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function AccountInfo() {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values) => {
    console.log("Login Success:", values);
    if (values) {
      navigate(0);
      toast.success("Changes Saved");
    }
  };

  return (
    <MyForm initialValues={initialValues} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
        <div className="md:col-span-2 w-12 h-12 rounded-full flex justify-center items-center bg-darky/10 mb-12">
          <span className="text-darky">ED</span>
        </div>

        <MyInput name="firstName" accName="first name" type="text" />
        <MyInput name="lastName" accName="last name" type="text" />
        <MyInput name="email" type="email" />
        <MyInput name="phone" type="number" />
      </div>

      <div className="w-full sm:w-[25%]">
        <CstBtn
          type="submit"
          variant="darky"
          size="md"
          fullWidth={true}
          className="rounded-none py-7"
        >
          Save Changes
        </CstBtn>
      </div>
    </MyForm>
  );
}
