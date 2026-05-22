export default function Price({ min = 0, max = 2500, value, onChange }) {
  const percent = max > 0 ? (value / max) * 100 : 100;

  return (
    <div className="price-wrapper w-full">
      <div className="price-values flex justify-between font-roboto text-[14px] font-medium mb-2">
        <span>{min} EGP</span>
        <span className="text-darky font-bold">{value ?? max} EGP</span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step="10"
        value={value ?? max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="price-slider w-full cursor-pointer accent-darky"
        style={{
          background: `linear-gradient(to right, #000 ${percent}%, #cfcfcf ${percent}%)`,
        }}
      />
    </div>
  );
}
