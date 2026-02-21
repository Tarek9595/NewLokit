export default function Colors({ selectedColor, onChange }) {
  const colors = [
    "#292A2D",
    "#F3ECE2",
    "#24426A",
    "#18574A",
    "#666689",
    "#C2BEB6",
    "#AAABA7",
    "#971E34",
    "#CBA13E",
    "#73513C",
    "#DAB1B1",
    "#2B9FA7",
  ];

  return (
    <div className="grid grid-cols-7 gap-y-3 gap-x-2 w-fit">
      {colors.map((color) => (
        <label
          key={color}
          className="cursor-pointer flex justify-center items-center"
        >
          <input
            type="radio"
            name="color"
            checked={selectedColor === color}
            onChange={() => onChange(color)}
            className="hidden peer"
          />
          <div className="w-6.25 h-6.25 flex justify-center items-center border-2 border-transparent peer-checked:border-black transition-all duration-200">
            <div
              className="w-4.25 h-4.25"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </label>
      ))}
    </div>
  );
}
