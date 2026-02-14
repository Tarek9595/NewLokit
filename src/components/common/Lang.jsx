import { useLangStore } from "../../store";
import { HiGlobeAlt } from "react-icons/hi";
export default function Lang() {
  const { lang, toggleLang } = useLangStore();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all font-main text-[16px] text-darky"
    >
      <HiGlobeAlt className="text-xl" />
      <span className="uppercase font-medium">
        {lang === "en" ? "Ar" : "En"}
      </span>
    </button>
  );
}
