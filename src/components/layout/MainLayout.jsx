import { Outlet } from "react-router";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import AddReview from "../../pages/ProductDetails/AddReview";
import ShareLink from "../../pages/ProductDetails/ShareLink";

export default function MainLayout() {
  return (
    <div className="relative">
      <ShareLink />
      <AddReview />
      <MainHeader />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
