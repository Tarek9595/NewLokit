export default function CheckBox({ groupName, value, onChange, checked }) {
  const id = `cb-${groupName}-${value.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="flex items-center w-full p-1 gap-3 group cursor-pointer">
      <input
        id={id}
        type="checkbox"
        name={groupName}
        value={value}
        onChange={onChange}
        checked={checked}
        className="checkbox rounded-none border-2 border-[#C4C4C4] checked:bg-darky checked:text-white checked:border-darky shadow-none w-5 h-5 peer cursor-pointer transition-all"
      />
      <label
        htmlFor={id}
        className="text-[13px] font-roboto text-darky uppercase peer-checked:font-bold cursor-pointer select-none group-hover:text-darky transition-all"
      >
        {value}
      </label>
    </div>
  );
}
