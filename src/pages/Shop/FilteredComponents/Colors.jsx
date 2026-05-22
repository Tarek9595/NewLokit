export default function Colors({
  availableColors = [],
  selectedColor = [],
  onChange,
}) {
  const handleColorChange = (color) => {
    const nextValue = selectedColor.includes(color)
      ? selectedColor.filter((c) => c !== color)
      : [...selectedColor, color];
    onChange(nextValue);
  };

  return (
    <div className="grid grid-cols-7 gap-y-3 gap-x-2 w-fit">
      {availableColors.map((color) => {
        const isChecked = selectedColor.includes(color);
        return (
          <label
            key={color}
            className="cursor-pointer flex justify-center items-center"
          >
            <input
              type="checkbox"
              name="colors"
              checked={isChecked}
              onChange={() => handleColorChange(color)}
              className="hidden peer"
            />
            <div
              className={`w-7 h-7 flex justify-center items-center border-2 rounded-full transition-all duration-200 ${
                isChecked ? "border-black scale-110" : "border-transparent"
              }`}
            >
              <div
                className="w-5 h-5 rounded-full shadow-sm border border-gray-100"
                style={{ backgroundColor: color }}
                title={color}
              ></div>
            </div>
          </label>
        );
      })}
    </div>
  );
}
