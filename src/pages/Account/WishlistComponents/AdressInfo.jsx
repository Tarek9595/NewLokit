import MyForm from "../../../components/common/MyForm";
import CstBtn from "../../../components/common/CstBtn";
import MyInput from "../../../components/common/MyInput";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { domain, useAddressInfo, userLoginInfo } from "../../../store";
import { useEffect, useState } from "react";

export default function AdressInfo() {
  const [disabled, setDisabled] = useState(true);
  const { address, setAddress, addAddress, fetchAddress } = useAddressInfo();
  const token = userLoginInfo((state) => state.loginInfo?.token);

  useEffect(() => {
    if (token && (!address || Object.keys(address).length === 0)) {
      fetchAddress(domain, token);
    }
  }, [token]);

  const initialValues = {
    street: address?.street || "",
    city: address?.city || "",
    governorate: address?.governorate || "",
    country: address?.country || "",
    zipCode: address?.zipCode || "",
  };
  const loginSchema = Yup.object().shape({
    zipCode: Yup.string()
      .required("ZipCode is required")
      .matches(/^[0-9]{6}$/, "Must be exactly 6 digits"),
  });

  const handleSubmit = (values) => {
    toast.loading("Saving changes...", { id: "profileUpdate" });

    const updatedFields = {
      street: values.street,
      city: values.city,
      governorate: values.governorate,
      country: values.country,
      zipCode: values.zipCode,
    };
    setAddress(updatedFields);
    if (token) {
      addAddress(domain, token, updatedFields);
    }

    toast.success("Changes Saved Successfully!", { id: "profileUpdate" });
    setDisabled(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setDisabled(false);
  };

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
        <div className="md:col-span-2">
          <MyInput
            name="street"
            accName="Street street"
            type="text"
            disabled={disabled}
          />
        </div>

        <MyInput
          name="country"
          accName="Country"
          type="text"
          disabled={disabled}
        />
        <MyInput
          name="governorate"
          accName="governorate"
          type="text"
          disabled={disabled}
        />
        <MyInput
          name="zipCode"
          accName="Zip Code"
          type="text"
          disabled={disabled}
        />
        <MyInput name="city" accName="City" type="text" disabled={disabled} />
      </div>

      <div className="w-full flex gap-3 mt-2">
        <div className="w-full sm:w-[25%]">
          <CstBtn
            type="submit"
            variant="darky"
            size="md"
            fullWidth={true}
            className="rounded-none py-7"
            disabled={disabled}
          >
            Save Changes
          </CstBtn>
        </div>
        <div className="w-full sm:w-[25%]">
          <CstBtn
            type="submit"
            variant="outline"
            size="md"
            fullWidth={true}
            className="rounded-none py-7"
            onClick={handleEdit}
          >
            Edit Details
          </CstBtn>
        </div>
      </div>
    </MyForm>
  );
}
