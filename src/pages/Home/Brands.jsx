export default function Brands() {
  const brands = [
    { name: "Antikka", font: "font-montaga" },
    { name: "Niffty", font: "font-montserrat" },
    { name: "Crunk", font: "font-montaga" },
    { name: "Saada", font: "font-montserrat" },
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
                text-[40px] md:text-[50px] 
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
