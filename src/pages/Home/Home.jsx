import { useEffect } from "react";
import About from "./About";
import Brands from "./Brands";
import Customers from "./Customers";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";
import axios from "axios";

export default function Home() {
  // let product = {
  //     name: "Nike Women’s Tracksuit", // done
  //     brand: "Nike",// done
  //     category: "Women's Fashion", // done
  //     price: "95.50",
  //     rate: 5,
  //     soldOut: false,
  //     img: womenImgOne,
  //     size: COMMON_SIZES,
  //     Color: COMMON_COLORS,
  //     department: "tops",
  //   },

  // eslint-disable-next-line no-unused-vars
  let token =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqaG9uX21hcms5NUBnbWFpbC5jb20iLCJpYXQiOjE3Nzg4NjU4NzQsImV4cCI6MTc3ODk1MjI3NH0.U27EJT8KE8c8Zr0XBQVWgo-g_OkzJVZNf_zxtYAImhMWOQkwroZucJK7TnffiM3g";

  useEffect(() => {
    let domain = "https://lokit-production.up.railway.app";

    let endPoint1 = "/product";
    let url1 = domain + endPoint1;

    axios
      .get(url1)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    let endPoint2 = "/products/search";
    let url2 = domain + endPoint2;

    axios
      .get(url2, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    let endPoint3 = "/category";
    let url3 = domain + endPoint3;

    axios
      .get(url3)
      .then((res) => console.log(res.data))
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
