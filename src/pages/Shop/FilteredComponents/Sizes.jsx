export default function Sizes({
  availableSizes = [],
  selectedSizes = [],
  onChange,
}) {
  const handleChange = (size) => {
    const nextValue = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    onChange(nextValue);
  };

  const sortedSizes = [...availableSizes].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 w-full">
      {sortedSizes.map((size) => {
        const isChecked = selectedSizes.includes(size);
        return (
          <label key={size} className="group cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleChange(size)}
              className="hidden peer"
            />
            <div
              className={`flex justify-center items-center border py-2 px-1 text-center transition-all duration-150 ${
                isChecked
                  ? "border-black bg-black text-white font-bold shadow-sm"
                  : "border-gray-200 text-gray-600 bg-white hover:border-gray-400"
              }`}
            >
              <span className="text-[11px] tracking-tight uppercase">
                {size}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
}
