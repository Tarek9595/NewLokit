export default function Price({ value, onChange }) {
  const max = 5000;
  const percent = (value / max) * 100;

  return (
    <div className="price-wrapper">
      <div className="price-values flex justify-between font-roboto text-[14px] font-medium mb-2">
        <span>0 EGP</span>
        <span className="text-darky font-bold">{value} EGP</span>
      </div>

      <input
        type="range"
        min="0"
        max={max}
        step="50"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="price-slider w-full cursor-pointer"
        style={{
          background: `linear-gradient(to right, #000 ${percent}%, #cfcfcf ${percent}%)`,
        }}
      />
    </div>
  );
}
