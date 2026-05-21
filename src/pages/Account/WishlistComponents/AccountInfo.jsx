import MyForm from "../../../components/common/MyForm";
import CstBtn from "../../../components/common/CstBtn";
import MyInput from "../../../components/common/MyInput";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useAccountInfo } from "../../../store";

export default function AccountInfo() {
  const [disabled, setDisabled] = useState(true);

  const { accountInfo, fetchProfile, updateProfile } = useAccountInfo();

  useEffect(() => {
    if (!accountInfo) {
      fetchProfile();
    }
  }, []);

  const initialValues = {
    firstName: accountInfo?.firstName,
    lastName: accountInfo?.lastName,
    email: accountInfo?.email,
    phone: accountInfo?.phone,
  };

  const handleSubmit = async (values) => {
    toast.loading("Saving changes...", { id: "profileUpdate" });

    const updatedFields = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    };

    const isSuccess = await updateProfile(updatedFields);

    if (isSuccess) {
      toast.success("Changes Saved Successfully!", { id: "profileUpdate" });
      setDisabled(true);
    } else {
      toast.error("Failed to save changes.", { id: "profileUpdate" });
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setDisabled(false);
  };

  return (
    <MyForm
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
        <div className="md:col-span-2 w-12 h-12 rounded-full flex justify-center items-center bg-darky/10 mb-12">
          <span className="text-darky uppercase">
            {accountInfo?.firstName?.[0]}
            {accountInfo?.lastName?.[0] || "U"}
          </span>
        </div>

        <MyInput
          name="firstName"
          accName="first name"
          type="text"
          cap="capitalize"
          disabled={disabled}
        />
        <MyInput
          name="lastName"
          accName="last name"
          type="text"
          cap="capitalize"
          disabled={disabled}
        />
        <MyInput name="email" type="email" disabled={disabled} />
        <MyInput name="phone" type="number" disabled={disabled} />
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
