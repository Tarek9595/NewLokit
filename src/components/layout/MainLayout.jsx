import { Outlet } from "react-router";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import AddReview from "../../pages/ProductDetails/AddReview";

export default function MainLayout() {
  return (
    <div className="relative">
      <AddReview />
      <MainHeader />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
