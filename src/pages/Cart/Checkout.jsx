import { Link, useNavigate } from "react-router";
import CstBtn from "../../components/common/CstBtn";
import MyForm from "../../components/common/MyForm";
import MyInput from "../../components/common/MyInput";
import MyRadio from "../../components/common/MyRadio";
import TopSection from "../../components/common/TopSection";
import { useCart } from "../../store";
import * as Yup from "yup";
import toast from "react-hot-toast";
import CreditCardFields from "./CreditCardFields";

export default function Checkout() {
  const { getCartTotal } = useCart();
  const { subtotal, tax, total } = getCartTotal();
  const navigate = useNavigate();
  const { cart, clearCart, confirmOrder } = useCart();

  const initialValues = {
    streetAddress: "",
    city: "",
    governorate: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentMethod: "cash",
    cardNumber: "",
    expDate: "",
    CVV: "",
    orderNotes: "",
  };

  const checkoutSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    governorate: Yup.string().required("Governorate is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    orderNotes: Yup.string().required("Notes  required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Phone number is too short")
      .required("Phone number is required"),

    paymentMethod: Yup.string().required(),

    cardNumber: Yup.string().when("paymentMethod", {
      is: "credit",
      then: (schema) =>
        schema
          .required("Required")
          .matches(/^[0-9]{14}$/, "Must be exactly 14 digits"),
      otherwise: (schema) => schema.notRequired(),
    }),

    expDate: Yup.string().when("paymentMethod", {
      is: "credit",
      then: (schema) =>
        schema
          .required("Required")
          .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Format must be MM/YY"),
      otherwise: (schema) => schema.notRequired(),
    }),

    CVV: Yup.string().when("paymentMethod", {
      is: "credit",
      then: (schema) =>
        schema
          .required("Required")
          .matches(/^[0-9]{3}$/, "Must be exactly 3 digits"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const handleSubmit = (values) => {
    if (!cart || cart.length === 0) {
      toast.error(
        "Your cart is empty! Please add products before checking out.",
      );
      return;
    }

    toast.success(`Thank you ${values.firstName}! Your order has been placed.`);

    confirmOrder();
    clearCart();
    navigate("/ordersuccess");
  };
  return (
    <div className="flex flex-col min-h-screen gap-15 items-center">
      <TopSection name="checkout" path="checkout" />
      <main className="container grow flex flex-col lg:flex-row gap-15 xl:gap-22.5 xl:px-25 xl:pb-25 p-5">
        <MyForm
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleSubmit}
          className="flex flex-col xl:flex-row gap-27.5"
        >
          <div className="flex flex-col w-full gap-12">
            <div className="flex flex-wrap justify-between gap-7">
              <h1 className="w-full text-darky font-bold capitalize text-[18px]">
                Shipping Address
              </h1>
              <MyInput
                name="streetAddress"
                accName="Street Address"
                type="text"
                shap={true}
              />
              <MyInput
                name="city"
                width="w-full md:w-[47%]"
                type="text"
                shap={true}
              />
              <MyInput
                name="governorate"
                width="w-full md:w-[47%]"
                type="text"
                shap={true}
              />
            </div>

            <div className="flex flex-wrap justify-between gap-7">
              <h1 className="w-full text-darky font-bold capitalize text-[18px]">
                Personal Information
              </h1>

              <MyInput
                name="firstName"
                accName="first Name"
                width="w-full md:w-[47%]"
                type="text"
                shap={true}
              />
              <MyInput
                name="lastName"
                accName="last Name"
                width="w-full md:w-[47%]"
                type="text"
                shap={true}
              />
              <MyInput
                name="email"
                width="w-full md:w-[47%]"
                type="text"
                shap={true}
              />
              <MyInput
                name="phone"
                accName="Phone Number"
                width="w-full md:w-[47%]"
                type="number"
                shap={true}
              />
            </div>

            <div className="flex flex-wrap justify-between gap-7">
              <h1 className="w-full text-darky font-bold capitalize text-[18px]">
                Write Your Order Notes
              </h1>

              <MyInput
                name="orderNotes"
                accName="Order Notes"
                as="textarea"
                shap={true}
              />
            </div>

            <div className="flex flex-wrap md:flex-row flex-col w-full md:w-100 justify-between gap-7">
              <h1 className="w-full text-darky font-bold capitalize text-[18px]">
                Payment Method
              </h1>

              <MyRadio
                name="paymentMethod"
                value="cash"
                label="Cash on Delivery"
              />

              <MyRadio
                name="paymentMethod"
                value="credit"
                label="Credit Card"
              />
            </div>
            <CreditCardFields />
          </div>

          <div className="rounded-sm border-2 border-[#F6F6F6] pb-8 px-6 flex flex-col gap-14 h-fit w-full xl:w-150">
            <h1 className="w-full text-darky font-bold capitalize text-[16px] py-4.5">
              Your Order
            </h1>

            <div className="flex justify-between items-center">
              <div className="flex -space-x-4 overflow-hidden">
                {cart.slice(0, 3).map((item, index) => (
                  <div
                    key={item.id || index}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden border border-gray-100 bg-white"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                ))}

                {cart.length > 3 && (
                  <div className="flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-white bg-gray-100 text-[12px] font-bold text-darky">
                    +{cart.length - 3}
                  </div>
                )}
              </div>

              <Link to="/mycart">
                <CstBtn
                  variant="outlineDarky"
                  className="text-xs py-2 px-4 h-fit"
                >
                  Edit Cart
                </CstBtn>
              </Link>
            </div>

            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-3 pb-6 border-b-2 border-darky/20">
                <div className=" flex justify-between items-center text-[14px] font-medium capitalize">
                  <span className="text-[#5C5F6A]">Subtotal</span>
                  <span>$ {subtotal}</span>
                </div>
                <div className=" flex justify-between items-center text-[14px] font-medium capitalize">
                  <span className="text-[#5C5F6A]">Shipping: </span>
                  <span>Free</span>
                </div>
                <div className=" flex justify-between items-center text-[14px] font-medium capitalize">
                  <span className="text-[#5C5F6A]">Tax: </span>
                  <span>$ {tax}</span>
                </div>
              </div>
              <div className=" flex justify-between items-center text-[14px] font-medium capitalize">
                <span>Total </span>
                <span>$ {total}</span>
              </div>

              <CstBtn fullWidth="true" type="submit">
                Place Order
              </CstBtn>
            </div>
          </div>
        </MyForm>
      </main>
    </div>
  );
}
