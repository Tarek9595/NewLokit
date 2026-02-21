import pic1 from "../../assets/img/search-pics/pic-1.png";
import pic2 from "../../assets/img/search-pics/pic-2.png";
import pic3 from "../../assets/img/search-pics/pic-3.png";
import pic4 from "../../assets/img/search-pics/pic-4.png";
import pic5 from "../../assets/img/search-pics/pic-5.png";

export default function Familiar() {
  const familiarProducts = [
    { head: "Classic Monochrome Tees", price: 35.0, img: pic1 },
    { head: "Monochromatic Wardrobe", price: 27.0, img: pic2 },
    { head: "Essential Neutrals", price: 22.0, img: pic3 },
    { head: "UTRAANET Black", price: 34.0, img: pic4 },
    { head: "Essential Neutrals", price: 22.0, img: pic5 },
  ];
  return (
    <div className="flex flex-col gap-8 font-inter">
      <div className="flex flex-col gap-2">
        <h1 className="text-[24px] font-bold">You might also like</h1>
        <span className="text-[12px] font-medium uppercase">
          SIMILAR PRODUCTS
        </span>
      </div>
      <div className="container grid md:grid-cols-2 lg:grid-cols-5 p-4 gap-4">
        {familiarProducts.map((el, index) => (
          <div key={index} className="flex flex-col gap-6 ">
            <div className="overflow-hidden rounded-xl bg-gray-100 aspect-3/4">
              <img
                src={el.img}
                alt={el.head}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[14px] font-semibold">{el.head}</h1>
              <span className="text-[#474B57] text-[14px]">${el.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
