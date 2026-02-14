import leftImg from "../../assets/img/home-pics/home-left.png";
import rightImg from "../../assets/img/home-pics/home-right.png";
import topImg from "../../assets/img/home-pics/home-top.png";
import bottomImg from "../../assets/img/home-pics/home-bottom.png";
import saleImg from "../../assets/img/home-pics/sale.png";

export default function HeroSection() {
  const heroData = {
    leftColumn: [
      {
        src: leftImg,
        alt: "Left Collection",
        className: "w-full max-w-87.5 aspect-2/3",
      },
    ],
    centerColumn: [
      {
        src: topImg,
        alt: "Top Collection",
        className: "w-full lg:max-w-75 aspect-video rounded-t-[10px]",
      },
      {
        src: saleImg,
        alt: "Sale Collection",
        className: "w-full lg:max-w-75 aspect-video rounded-t-[10px]",
      },
      {
        src: bottomImg,
        alt: "Bottom Collection",
        className: "w-full lg:max-w-75 aspect-video rounded-[10px]",
      },
    ],
    rightColumn: [
      {
        src: rightImg,
        alt: "Right Collection",
        className: "w-full max-w-[320px] aspect-2/4",
      },
    ],
  };
  const commonImgClasses =
    "object-cover transition-transform duration-300 hover:scale-105";

  return (
    <section className="relative w-full bg-white px-10 py-20 flex items-center justify-center">
      <div className="container flex justify-center gap-30">
        <div className="hidden lg:block self-center">
          {heroData.leftColumn.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`${item.className} ${commonImgClasses}`}
            />
          ))}
        </div>
        <div className="flex flex-col items-center gap-12">
          {heroData.centerColumn.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`${item.className} ${commonImgClasses}`}
            />
          ))}
        </div>
        <div className="hidden lg:block self-center">
          {heroData.rightColumn.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className={`${item.className} ${commonImgClasses}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
