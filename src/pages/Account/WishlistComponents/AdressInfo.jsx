import MyForm from "../../../components/common/MyForm";
import CstBtn from "../../../components/common/CstBtn";
import MyInput from "../../../components/common/MyInput";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";

export default function AdressInfo() {
  const navigate = useNavigate();
  const initialValues = {
    address: "",
    city: "",
    state: "",
    country: "",
  };

  const handleSubmit = (values) => {
    console.log("Login Success:", values);
    if (values) {
      navigate(0);
      toast.success("Changes Saved");
    }
  };

  const loginSchema = Yup.object().shape({
    address: Yup.string().required("Required Field"),
    city: Yup.string().required("Required Field"),
    state: Yup.string().required("Required Field"),
    country: Yup.string().required("Required Field"),
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
        <div className="md:col-span-2">
          <MyInput name="address" accName="Street Address" type="text" />
        </div>

        <MyInput name="city" accName="City" type="text" />
        <MyInput name="state" accName="State" type="text" />
        <MyInput name="code" accName="Zip Code" type="text" />
        <MyInput name="country" accName="Country" type="text" />
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
