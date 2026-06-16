import * as MarqueeModule from "react-fast-marquee";
import { useProductStore } from "../../store";

const Marquee =
  MarqueeModule?.default?.default ||
  MarqueeModule?.default ||
  MarqueeModule?.Marquee ||
  MarqueeModule;

export default function Brands() {
  const { allProducts } = useProductStore();

  const staticBrands = [
    { name: "Antikka", font: "font-montaga" },
    { name: "Niffty", font: "font-montserrat" },
    { name: "Crunk", font: "font-montaga" },
    { name: "Saada", font: "font-montserrat" },
  ];

  const uniqueBrandNames = [
    ...new Set(
      allProducts?.map((product) => product.brandName).filter((name) => name),
    ),
  ];

  const availableFonts = ["font-montaga", "font-montserrat"];

  const finalBrands =
    uniqueBrandNames.length > 0
      ? uniqueBrandNames.map((name, index) => ({
          name,
          font: availableFonts[index % availableFonts.length],
        }))
      : staticBrands;

  if (typeof Marquee !== "function" && typeof Marquee !== "object") {
    return (
      <section className="w-full bg-zinc py-8 md:py-14 border-y border-darky/5">
        <div className="flex flex-wrap justify-center items-center gap-10">
          {finalBrands.map((brand, index) => (
            <span
              key={index}
              className={`${brand.font} text-[36px] text-darky capitalize`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-zinc py-8 md:py-14 overflow-hidden border-y border-darky/5">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-16 md:gap-28 pr-16 md:pr-28">
          {finalBrands.map((brand, index) => (
            <span
              key={`${brand.name}-${index}`}
              className={`
                ${brand.font}
                text-[36px] sm:text-[45px] md:text-[55px] 
                font-normal 
                text-darky 
                capitalize
                tracking-wide
                select-none
              `}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
