import { Outlet } from "react-router";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import AddReview from "../../pages/ProductDetails/AddReview";
import ShareLink from "../../pages/ProductDetails/ShareLink";
import AiModel from "../../pages/ProductDetails/AiModel";
import UploadImage from "../../pages/ProductDetails/UploadImage";

export default function MainLayout() {
  return (
    <div className="relative">
      <ShareLink />
      <UploadImage />
      <AiModel />
      <AddReview />
      <MainHeader />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
