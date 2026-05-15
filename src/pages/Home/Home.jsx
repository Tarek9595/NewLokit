import { useEffect } from "react";
import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import axios from "axios";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  let token =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqaG9uX21hcms5NUBnbWFpbC5jb20iLCJpYXQiOjE3Nzg4NjU4NzQsImV4cCI6MTc3ODk1MjI3NH0.U27EJT8KE8c8Zr0XBQVWgo-g_OkzJVZNf_zxtYAImhMWOQkwroZucJK7TnffiM3g";

  // let newUser = {
  //   firstName: "mark",
  //   lastName: "john",
  //   email: "jhon_mark95@gmail.com",
  //   password: "Markjohn1995",
  //   phone: "01006826042",
  // };

  // useEffect(() => {
  //   let newUser = {
  //     firstName: "mark",
  //     lastName: "john",
  //     email: "jhon_mark95@gmail.com",
  //     password: "Markjohn1995",
  //     phone: "01006826042",
  //   };

  //   let domain = "https://lokit-production.up.railway.app";
  //   let endPoint = "/auth/register";
  //   let url = domain + endPoint;

  //   axios
  //     .post(url, newUser)
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       if (err.response && err.response.status === 409) {
  //         alert("الإيميل ده مسجل قبل كدة يا بطل!");
  //       }
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    let newUser = {
      email: "jhon_mark95@gmail.com",
    };

    let domain = "https://lokit-production.up.railway.app";
    let endPoint = "/auth/forgot-password";
    let url = domain + endPoint;

    axios
      .post(url, newUser)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
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
