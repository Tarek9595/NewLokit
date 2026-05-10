import { useEffect } from "react";
import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const newUser = {
      firstName: "Usernameee",
      lastName: "Developer",
      email: `userr20262027@test.com`,
      password: "password123",
      phone: "01012345678",
    };

    console.log(`userr${Math.floor(Math.random() * 1000)}@test.com`);

    axios
      .post("https://lokit-production.up.railway.app/auth/register", newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err.response?.data || err.message);
      });

    axios
      .get("https://lokit-production.up.railway.app/product")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
