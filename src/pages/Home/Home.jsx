import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import { useAccountInfo } from "../../store";
import { useEffect } from "react";
import MyComponent from "./MyComponent";

export default function Home() {
  const { accountInfo, fetchProfile } = useAccountInfo();
  useEffect(() => {
    if (!accountInfo) {
      fetchProfile();
    }
  }, []);

  return (
    <>
      <MyComponent />
      <HeroSection />
      <Brands />
      <ShopSection />
      <About />
      <Customers />
    </>
  );
}
