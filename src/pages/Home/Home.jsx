import About from "./About";
import Brands from "./Brands";
import HeroSection from "./HeroSection";
import ShopSection from "./ShopSection/ShopSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <ShopSection />
      <About />
    </>
  );
}
