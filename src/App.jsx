import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Wishlist from "./pages/Account/Wishlist";
import AccountInfo from "./pages/Account/WishlistComponents/AccountInfo";
import AdressInfo from "./pages/Account/WishlistComponents/AdressInfo";
import OrdersInfo from "./pages/Account/WishlistComponents/OrdersInfo";
import PasswordInfo from "./pages/Account/WishlistComponents/PasswordInfo";
import WishlistInfo from "./pages/Account/WishlistComponents/WishlistInfo";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Login from "./pages/Auth/Login";
import PhoneValidation from "./pages/Auth/PhoneValidation";
import ResetPassword from "./pages/Auth/ResetPassword";
import Signup from "./pages/Auth/Signup";
import Successfully from "./pages/Auth/Successfully";
import CartPage from "./pages/Cart/CartPage";
import Home from "./pages/Home/Home";
import ProductDetails from "./components/common/ProductDetails";
import Search from "./pages/Shop/Search";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="mycart" element={<CartPage />} />

          <Route path="/account" element={<Wishlist />}>
            <Route index element={<WishlistInfo />} />
            <Route path="orders" element={<OrdersInfo />} />
            <Route path="address" element={<AdressInfo />} />
            <Route path="password" element={<PasswordInfo />} />
            <Route path="details" element={<AccountInfo />} />
          </Route>
        </Route>

        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/validate" element={<PhoneValidation />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Successfully />} />

        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center font-main">
              404 || Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
