import { Outlet } from "react-router";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
