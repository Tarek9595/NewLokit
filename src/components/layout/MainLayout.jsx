import { Outlet } from "react-router";
import { HiArrowRight } from "react-icons/hi";
import CstBtn from "../common/CstBtn";

export default function MainLayout() {
  return (
    <div>
      <h1>MainLayout</h1>
      <div className="w-full h-50 flex gap-3">
        <CstBtn variant="darky">Add to cart</CstBtn>
        <CstBtn variant="outline">Sign Up</CstBtn>
        <CstBtn variant="inline">Unisex</CstBtn>
        <CstBtn variant="darky" icon={HiArrowRight}>
          Start Shopping
        </CstBtn>
      </div>
      <Outlet />
    </div>
  );
}
