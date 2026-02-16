import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import cstOne from "../../assets/img/cst-review/cst-1.png";
import cstTwo from "../../assets/img/cst-review/cst-2.png";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Customers() {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Ali",
      img: cstOne,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 2,
      name: "Sally Zain",
      img: cstTwo,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 3,
      name: "Sayed Hassan",
      img: cstOne,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 4,
      name: "Mona Hassan",
      img: cstTwo,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
    {
      id: 5,
      name: "Omar Ali",
      img: cstOne,
      text: "Great quality and fast delivery loved my order Absolutely loved my purchase !",
      rating: 5,
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-darky font-cormorant text-center text-4xl lg:text-[56px] mb-16 tracking-wide">
          What our customers are saying Us?
        </h1>

        <div className="w-full relative">
          <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            className="mySwiper !py-14"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="w-[80vw]! lg:w-[50vw]!">
                {({ isActive }) => (
                  <div
                    className={`bg-white flex flex-col items-center gap-6 p-8 lg:p-12 rounded-[20px] shadow-2xl transition-all duration-500 border border-gray-100
                    ${isActive ? "opacity-100 scale-100" : "opacity-60 scale-75 blur-[0.5px]"}`}
                  >
                    <div className="relative w-32 h-32 lg:w-48 lg:h-48 shrink-0">
                      <div className="absolute -bottom-2 -left-2 w-full h-full bg-[#D9D9D9] z-0 rounded-lg"></div>
                      <img
                        src={rev.img}
                        alt={rev.name}
                        className="relative z-10 w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>

                    <div className="flex flex-col gap-4 text-center">
                      <div className="flex justify-center gap-1 text-[#FCA120] text-xl">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="font-montserrat text-sm lg:text-[18px] text-gray-600 leading-relaxed italic px-4">
                        "{rev.text}"
                      </p>
                      <div className="w-24 h-0.5 bg-[#FCA120] mx-auto my-2"></div>
                      <h2 className="text-2xl lg:text-[32px] text-darky font-medium font-Volkhov">
                        {rev.name}
                      </h2>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-8 mt-12">
            <button className="prev-btn w-14 h-14 rounded-full border border-gray-200 flex justify-center items-center cursor-pointer hover:bg-darky hover:text-white transition-all shadow-md bg-white">
              <IoIosArrowBack size={24} />
            </button>
            <button className="next-btn w-14 h-14 rounded-full border border-gray-200 flex justify-center items-center cursor-pointer hover:bg-darky hover:text-white transition-all shadow-md bg-white">
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
