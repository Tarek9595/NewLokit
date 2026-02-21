import { useState } from "react"; // ضفنا useState عشان حركة قفل الـ Heads
import { useFormik } from "formik";
import { useFilterStore } from "../../store";
import SearchFilter from "./FilteredComponents/SearchFilter";
import CheckBox from "./FilteredComponents/CheckBox";
import Sizes from "./FilteredComponents/Sizes";
import Colors from "./FilteredComponents/Colors";
import Price from "./FilteredComponents/Price";
import ActiveFilters from "./FilteredComponents/ActiveFilters";

export default function Filtered() {
  const { setFilters, appliedFilters } = useFilterStore();

  const [resetTrigger, setResetTrigger] = useState(0);

  const filterData = {
    brands: ["adidas", "nike", "zara", "gucci"],
    departments: ["men", "women", "unisex", "kids", "sports wear"],
    categories: ["tops", "bottoms", "dresses", "active wear", "sets"],
    sizes: ["large", "medium", "small", "x large", "x small"],
  };

  const formik = useFormik({
    initialValues: {
      brands: [],
      departments: [],
      categories: [],
      sizes: [],
      color: "",
      priceRange: 2500,
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Filters Applied:", values);
      setFilters(values);
      resetForm();
      setResetTrigger((prev) => prev + 1);
    },
  });

  const hasActiveFilters =
    appliedFilters?.brands?.length > 0 ||
    appliedFilters?.departments?.length > 0 ||
    appliedFilters?.categories?.length > 0 ||
    appliedFilters?.sizes?.length > 0 ||
    (appliedFilters?.color && appliedFilters?.color !== "") ||
    (appliedFilters?.priceRange !== undefined &&
      appliedFilters?.priceRange !== 0);

  console.log(hasActiveFilters);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col gap-10 p-6 rounded-xl h-fit md:w-[35%] md:px-5 lg:w-[30%] lg:max-w-95 lg:p-10 xl:max-w-105"
    >
      {hasActiveFilters ? (
        <ActiveFilters />
      ) : (
        <h1 className="font-oswald font-medium text-[28px] lg:text-[32px] w-fit pb-1 text-darky">
          Filter
        </h1>
      )}

      <div key={resetTrigger} className="flex flex-col gap-8">
        {Object.entries(filterData).map(([key, options]) => (
          <SearchFilter key={key} filterName={key}>
            {options.map((item) => (
              <CheckBox
                key={item}
                groupName={key}
                value={item}
                onChange={formik.handleChange}
                checked={formik.values[key]?.includes(item)}
              />
            ))}
          </SearchFilter>
        ))}

        <SearchFilter filterName="size (Inches)">
          <Sizes
            selectedSizes={formik.values.sizes}
            onChange={(val) => formik.setFieldValue("sizes", val)}
          />
        </SearchFilter>

        <SearchFilter filterName="Color">
          <Colors
            selectedColor={formik.values.color}
            onChange={(val) => formik.setFieldValue("color", val)}
          />
        </SearchFilter>

        <SearchFilter filterName="price range">
          <Price
            value={formik.values.priceRange}
            onChange={(val) => formik.setFieldValue("priceRange", val)}
          />
        </SearchFilter>
      </div>

      <button
        type="submit"
        className="btn py-2.5 p-7 w-fit bg-[#F0F2F2] border-2 border-[#C4C4C4] font-oswald font-semibold text-[#615e5e] self-end-safe mr-6 md:mr-15 lg:mr-0 hover:bg-darky hover:text-white transition-colors cursor-pointer"
      >
        Apply
      </button>
    </form>
  );
}
