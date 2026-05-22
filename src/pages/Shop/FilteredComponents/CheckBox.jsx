export default function CheckBox({ groupName, value, onChange, checked }) {
  const id = `cb-${groupName}-${value.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="flex items-center w-full py-0.5 gap-3 group cursor-pointer select-none">
      <input
        id={id}
        type="checkbox"
        name={groupName}
        value={value}
        onChange={onChange}
        checked={checked}
        className="w-4.5 h-4.5 rounded border-gray-300 text-darky focus:ring-darky accent-darky cursor-pointer transition-all"
      />
      <label
        htmlFor={id}
        className={`text-[13px] font-main text-gray-700 capitalize cursor-pointer transition-all group-hover:text-black ${
          checked ? "font-bold text-black" : "font-normal"
        }`}
      >
        {value}
      </label>
    </div>
  );
}
