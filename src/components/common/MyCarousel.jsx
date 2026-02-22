import { useState, useEffect } from "react";
import signinImg from "../../assets/img/login-pics/sign-in.png";
import signupImg from "../../assets/img/login-pics/sign-up.png";
import forgetImg from "../../assets/img/login-pics/forget-password.png";
import boyImg from "../../assets/img/login-pics/boy-pic.png";

export default function MyCarousel({ high }) {
  const images = [signinImg, signupImg, forgetImg, boyImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      dir="ltr"
      className="w-full relative overflow-hidden h-full ltr:rounded-l-[30px] rtl:rounded-r-[30px]"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`w-full h-${high ? high : "full"} object-cover shrink-0`}
          />
        ))}
      </div>

      <div className="flex w-full justify-center gap-3 py-2 absolute bottom-8 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-gray-400 
              ${currentIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
