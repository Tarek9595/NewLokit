import { useFormikContext } from "formik";
import { useEffect } from "react";
import MyInput from "../../components/common/MyInput";

export default function CreditCardFields() {
  const { values, setFieldValue } = useFormikContext();

  const isCash = values.paymentMethod === "cash";

  useEffect(() => {
    if (isCash) {
      setFieldValue("cardNumber", "");
      setFieldValue("expDate", "");
      setFieldValue("CVV", "");
    }
  }, [isCash, setFieldValue]);

  return (
    <div
      className={`flex flex-wrap justify-between gap-7 transition-opacity duration-500 ${isCash ? "opacity-50" : "opacity-100"}`}
    >
      <h1 className="w-full text-darky font-bold capitalize text-[18px]">
        Card Details
      </h1>

      <MyInput
        name="cardNumber"
        accName="Card Number"
        width="w-full md:w-[47%]"
        type="text"
        shap={true}
        disabled={isCash}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "").slice(0, 14);
          setFieldValue("cardNumber", val);
        }}
      />

      <MyInput
        name="expDate"
        accName="Exp Date"
        width="w-full md:w-[47%]"
        type="text"
        placeholder="MM/YY"
        shap={true}
        disabled={isCash}
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, "");
          if (value.length > 2) {
            value = value.substring(0, 2) + "/" + value.substring(2, 4);
          }
          setFieldValue("expDate", value.slice(0, 5));
        }}
      />

      <MyInput
        name="CVV"
        accName="CVV"
        width="w-full md:w-[47%]"
        type="text"
        placeholder="678"
        shap={true}
        disabled={isCash}
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, "").slice(0, 3);
          setFieldValue("CVV", val);
        }}
      />
    </div>
  );
}
