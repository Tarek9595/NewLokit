import { BrowserRouter, Route, Routes, Navigate } from "react-router";
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
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import ProductReview from "./pages/ProductDetails/ProductReview";
import Search from "./pages/Shop/Search";
import AuthLayout from "./components/layout/AuthLayout";
import { Toaster } from "react-hot-toast";
import OrderSuccess from "./pages/Cart/OrderSuccess";
import OrderFailed from "./pages/Cart/OrderFailed";
import ScrollToTop from "./components/common/ScrollToTop";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Checkout from "./pages/Cart/Checkout";

export default function App() {
  return (
    <div className="select-none">
      <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="search" element={<Search />} />
              <Route path="product/:id" element={<ProductDetails />}>
                <Route index element={<Navigate to="detail" replace />} />
                <Route path="detail" element={<ProductDetail />} />
                <Route path="review" element={<ProductReview />} />
              </Route>

              <Route path="mycart" element={<CartPage />} />

              <Route path="checkout" element={<Checkout />} />

              <Route path="ordersuccess" element={<OrderSuccess />} />

              <Route path="failedorder" element={<OrderFailed />} />

              <Route path="/account" element={<Wishlist />}>
                <Route index element={<WishlistInfo />} />
                <Route path="orders" element={<OrdersInfo />} />
                <Route path="address" element={<AdressInfo />} />
                <Route path="password" element={<PasswordInfo />} />
                <Route path="details" element={<AccountInfo />} />
              </Route>
            </Route>
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/validate" element={<PhoneValidation />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Route>
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
    </div>
  );
}
