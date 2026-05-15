import { useEffect } from "react";
import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    let domain = "http://lokit-production.up.railway.app";
    let endPoint = "/product";
    let url = domain + endPoint;

    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

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
