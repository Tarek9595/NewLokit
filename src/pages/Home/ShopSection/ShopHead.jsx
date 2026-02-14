export default function ShopHead() {
  return (
    <div className="w-full pb-8 text-center relative border-b-2 border-darky/10 font-cormorant text-darky">
      <h2 className="font-cormorant text-darky text-4xl md:text-5xl lg:text-6xl tracking-tight">
        Shop by Category
      </h2>
      <div className="absolute -bottom-2.25 left-0 flex gap-1.5 items-center pr-4">
        {[14, 12, 10, 8, 6].map((size, i) => (
          <div
            key={i}
            className="rounded-full bg-darky"
            style={{ width: size, height: size }}
          ></div>
        ))}
      </div>
    </div>
  );
}
