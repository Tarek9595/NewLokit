import img from "../../assets/img/home-pics/home-top.png";
import CstBtn from "../../components/common/CstBtn";
export default function About() {
  const dots = [
    "w-1.5 h-1.5",
    "w-2 h-2",
    "w-2.5 h-2.5",
    "w-3 h-3",
    "w-3.5 h-3.5",
  ];

  return (
    <section className="bg-darky text-white py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12.5 flex flex-col gap-16 lg:gap-24">
        <div className="w-full pb-6 text-center border-b border-white/20 relative">
          <h2 className="font-cormorant lg:text-[64px] md:text-5xl text-4xl tracking-tight leading-tight italic">
            About Lokit
          </h2>
          <div className="absolute -bottom-2 end-0 flex gap-2 items-center">
            {dots.map((size, index) => (
              <div
                key={index}
                className={`${size} rounded-full bg-white transition-all`}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-10 lg:w-1/2">
            <p className="text-base lg:text-lg leading-9 text-white/70 text-justify lg:text-left">
              At Lokit, we believe fashion should be effortless, expressive, and
              accessible to everyone. Our mission is to bring you stylish,
              high-quality pieces that blend comfort, confidence, and modern
              design. Every collection is carefully curated to suit your
              lifestyle — whether you're refreshing your daily wardrobe,
              dressing up for a special moment, or exploring new trends. With a
              strong commitment to quality, fair prices, and a seamless shopping
              experience, Lokit is here to make looking good feel easy and
              enjoyable.
            </p>
            <CstBtn
              variant="outlineWhite"
              size="lg"
              className="text-[16px] font-poppins w-48 h-12 flex justify-center items-center border-2 border-white cursor-pointer hover:bg-white hover:text-darky transition-all duration-300 active:scale-95 uppercase tracking-wider"
            >
              Contact Us
            </CstBtn>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative group">
            <img
              src={img}
              alt="Lokit Fashion Story"
              className="w-full max-w-137.5 h-auto object-cover rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
