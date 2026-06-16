import { useFilterStore } from "../../../store";
import { IoCloseOutline } from "react-icons/io5";

export default function ActiveFilters() {
  const { appliedFilters, setFilters } = useFilterStore();

  const hasFilters =
    appliedFilters.brandName?.length > 0 ||
    appliedFilters.departmentName?.length > 0 ||
    appliedFilters.categoryName?.length > 0 ||
    appliedFilters.sizes?.length > 0 ||
    appliedFilters.colors?.length > 0;

  if (!hasFilters) return null;

  const removeArrayItem = (filterKey, itemToRemove) => {
    setFilters({
      ...appliedFilters,
      [filterKey]: appliedFilters[filterKey].filter(
        (item) => item !== itemToRemove,
      ),
    });
  };

  return (
    <div className="w-full flex flex-wrap gap-2 p-1 font-main">
      {appliedFilters.brandName?.map((brand) => (
        <button
          key={brand}
          type="button"
          onClick={() => removeArrayItem("brandName", brand)}
          className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-darky px-2.5 py-1 rounded-full transition-colors font-medium capitalize cursor-pointer"
        >
          {brand} <IoCloseOutline className="text-sm text-gray-500" />
        </button>
      ))}

      {appliedFilters.departmentName?.map((dept) => (
        <button
          key={dept}
          type="button"
          onClick={() => removeArrayItem("departmentName", dept)}
          className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-darky px-2.5 py-1 rounded-full transition-colors font-medium capitalize cursor-pointer"
        >
          {dept} <IoCloseOutline className="text-sm text-gray-500" />
        </button>
      ))}

      {appliedFilters.categoryName?.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => removeArrayItem("categoryName", cat)}
          className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-darky px-2.5 py-1 rounded-full transition-colors font-medium capitalize cursor-pointer"
        >
          {cat} <IoCloseOutline className="text-sm text-gray-500" />
        </button>
      ))}

      {appliedFilters.sizes?.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => removeArrayItem("sizes", size)}
          className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-darky px-2.5 py-1 rounded-full transition-colors font-medium uppercase cursor-pointer"
        >
          Size: {size} <IoCloseOutline className="text-sm text-gray-500" />
        </button>
      ))}

      {appliedFilters.colors?.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => removeArrayItem("colors", color)}
          className="flex items-center gap-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-darky px-2.5 py-1 rounded-full transition-colors font-medium capitalize cursor-pointer"
        >
          <span
            className="w-3 h-3 rounded-full border border-gray-300 inline-block"
            style={{ backgroundColor: color }}
          />
          {color}
          <IoCloseOutline className="text-sm text-gray-500" />
        </button>
      ))}
    </div>
  );
}
