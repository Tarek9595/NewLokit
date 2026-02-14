export default function Brands() {
  const brands = [
    { name: "Zara", font: "font-montaga" },
    { name: "Nike", font: "font-montserrat" },
    { name: "Adidas", font: "font-montaga" },
    { name: "Gucci", font: "font-montserrat" },
  ];

  return (
    <section className="w-full bg-zinc py-10 md:py-16">
      <div className="container mx-auto px-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <li
              key={brand.name}
              className={`
                ${brand.font}
                text-[40px] md:text-[60px] 
                font-normal 
                text-darky 
                capitalize
              `}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
