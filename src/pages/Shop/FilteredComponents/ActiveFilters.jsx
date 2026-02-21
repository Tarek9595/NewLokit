import { useFilterStore } from "../../../store";
import { IoCloseOutline } from "react-icons/io5";

export default function ActiveFilters() {
  const { appliedFilters, setFilters, resetFilters } = useFilterStore();

  const hasFilters =
    appliedFilters.brands?.length > 0 ||
    appliedFilters.departments?.length > 0 ||
    appliedFilters.sizes?.length > 0 ||
    appliedFilters.color ||
    (appliedFilters.priceRange && appliedFilters.priceRange < 5000);

  if (!hasFilters) return null;

  const removeArrayItem = (filterKey, itemToRemove) => {
    setFilters({
      ...appliedFilters,
      [filterKey]: appliedFilters[filterKey].filter(
        (item) => item !== itemToRemove,
      ),
    });
  };

  const removeSingleItem = (filterKey, defaultValue) => {
    setFilters({
      ...appliedFilters,
      [filterKey]: defaultValue,
    });
  };

  return (
    <div className="w-full bg-white border border-gray-200 p-6 flex flex-col gap-6 shadow-sm font-main">
      <div className="flex justify-between items-center pb-2">
        <h2 className="font-oswald font-medium text-[32px] text-darky tracking-tight">
          Filter
        </h2>
        <button
          onClick={resetFilters}
          className="flex items-center gap-1 text-[11px] font-bold text-gray-500 hover:text-red-500 transition-colors uppercase tracking-widest cursor-pointer"
        >
          <IoCloseOutline className="text-lg" /> Reset All
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {appliedFilters.brands?.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-oswald text-xl text-darky">Brand:</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {appliedFilters.brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => removeArrayItem("brands", brand)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors uppercase cursor-pointer"
                >
                  <IoCloseOutline className="text-lg" /> {brand}
                </button>
              ))}
            </div>
          </div>
        )}

        {appliedFilters.sizes?.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-oswald text-xl text-darky">Size (Inches):</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {appliedFilters.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => removeArrayItem("sizes", size)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors uppercase cursor-pointer"
                >
                  <IoCloseOutline className="text-lg" /> {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {appliedFilters.departments?.length > 0 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-oswald text-xl text-darky">Department:</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {appliedFilters.departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => removeArrayItem("departments", dept)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors uppercase cursor-pointer"
                >
                  <IoCloseOutline className="text-lg" /> {dept}
                </button>
              ))}
            </div>
          </div>
        )}

        {appliedFilters.color && (
          <div className="flex flex-col gap-3">
            <h3 className="font-oswald text-xl text-darky">Color:</h3>
            <button
              onClick={() => removeSingleItem("color", "")}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors cursor-pointer w-fit"
            >
              <IoCloseOutline className="text-lg" />
              <div
                className="w-5 h-5 border border-gray-300"
                style={{ backgroundColor: appliedFilters.color }}
              ></div>
            </button>
          </div>
        )}

        {appliedFilters.priceRange && appliedFilters.priceRange < 5000 && (
          <div className="flex flex-col gap-3">
            <h3 className="font-oswald text-xl text-darky">Price Range:</h3>
            <button
              onClick={() => removeSingleItem("priceRange", 5000)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors uppercase cursor-pointer"
            >
              <IoCloseOutline className="text-lg" /> 0.00 EGP –{" "}
              {appliedFilters.priceRange} EGP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
