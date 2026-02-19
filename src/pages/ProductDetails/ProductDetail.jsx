export default function ProductDetail() {
  return (
    <div className="flex flex-col gap-6 font-main text-darky">
      <h2 className="text-lg font-semibold mb-2">Details</h2>

      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
        Stay comfortable and stylish with this premium Nike women’s tracksuit.
        Designed with soft, breathable fabric, it offers a perfect fit for
        everyday wear, workouts, or casual outings. Features a modern sporty
        look, elastic waistband, and high-quality finishing for long-lasting
        comfort.
      </p>

      <ul className="list-disc pl-5 space-y-2.5 text-gray-500 text-sm md:text-base mt-4">
        <li>Premium quality Nike fabric</li>
        <li>Soft, breathable & lightweight</li>
        <li>Perfect for gym, home, or casual wear</li>
        <li>Modern athletic design</li>
        <li>Available in multiple sizes and colors</li>
      </ul>
    </div>
  );
}
