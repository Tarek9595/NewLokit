import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import { useAccountInfo } from "../../store";
import { useEffect } from "react";

export default function Home() {
  const { accountInfo, fetchProfile } = useAccountInfo();

  useEffect(() => {
    if (!accountInfo) {
      fetchProfile();
    }
  }, []);

  console.log(accountInfo);
  console.log(accountInfo?.firstName);

  return (
    <>
      <HeroSection />
      <Brands />
      <ShopSection />
      <About />
      <Customers />
    </>
  );
}
