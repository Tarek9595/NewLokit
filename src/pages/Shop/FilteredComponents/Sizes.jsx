export default function Sizes({ selectedSizes, onChange }) {
  const sizes = ["OSFA"];
  const skipNumbers = [37, 39, 41, 43, 45, 47, 49, 51];

  for (let i = 26; i <= 52; i++) {
    if (skipNumbers.includes(i)) continue;
    sizes.push(`W${i}`);
  }

  const handleChange = (size) => {
    const nextValue = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    onChange(nextValue); // بنبعت المصفوفة الجديدة لـ Formik
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      {sizes.map((size) => (
        <label key={size} className="group cursor-pointer">
          <input
            type="checkbox"
            checked={selectedSizes.includes(size)}
            onChange={() => handleChange(size)}
            className="hidden peer"
          />
          <div className="btn btn-outline btn-sm w-full opacity-60 peer-checked:opacity-100 peer-checked:border-black peer-checked:bg-transparent rounded-none transition-all">
            <span
              className={`text-[10px] ${selectedSizes.includes(size) ? "font-bold text-black" : ""}`}
            >
              {size}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
}
