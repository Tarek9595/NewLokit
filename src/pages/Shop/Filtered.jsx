import { useState, useMemo } from "react";
import { useFormik } from "formik";
import { useFilterStore, useProductStore } from "../../store";
import {
  IoFilterOutline,
  IoRefreshOutline,
  IoCloseOutline,
} from "react-icons/io5";
import SearchFilter from "./FilteredComponents/SearchFilter";
import CheckBox from "./FilteredComponents/CheckBox";
import Sizes from "./FilteredComponents/Sizes";
import Colors from "./FilteredComponents/Colors";
import Price from "./FilteredComponents/Price";
import ActiveFilters from "./FilteredComponents/ActiveFilters";

export default function Filtered({ isOpen, onClose }) {
  const { setFilters, resetFilters, appliedFilters } = useFilterStore();
  const { allProducts } = useProductStore();
  const [resetTrigger, setResetTrigger] = useState(0);

  const dynamicFilterData = useMemo(() => {
    const brandsSet = new Set();
    const departmentsSet = new Set();
    const categoriesSet = new Set();
    const colorsSet = new Set();
    const sizesSet = new Set();

    allProducts.forEach((product) => {
      if (product.brandName) brandsSet.add(product.brandName.toLowerCase());
      if (product.departmentName)
        departmentsSet.add(product.departmentName.toLowerCase());
      if (product.categoryName)
        categoriesSet.add(product.categoryName.toLowerCase());

      if (product.colors && Array.isArray(product.colors)) {
        product.colors.forEach((c) => {
          if (c) colorsSet.add(c.trim());
        });
      }

      if (product.sizes && Array.isArray(product.sizes)) {
        product.sizes.forEach((s) => {
          if (s) sizesSet.add(s.trim().toUpperCase());
        });
      }
    });

    return {
      brandName: Array.from(brandsSet),
      departmentName: Array.from(departmentsSet),
      categoryName: Array.from(categoriesSet),
      colors: Array.from(colorsSet),
      sizes: Array.from(sizesSet),
    };
  }, [allProducts]);

  const maxProductPrice = useMemo(() => {
    if (allProducts.length === 0) return 2500;
    const prices = allProducts.map((p) => p.price || 0);
    return Math.max(...prices);
  }, [allProducts]);

  const formik = useFormik({
    initialValues: {
      brandName: appliedFilters.brandName || [],
      departmentName: appliedFilters.departmentName || [],
      categoryName: appliedFilters.categoryName || [],
      sizes: appliedFilters.sizes || [],
      colors: appliedFilters.colors || [],
      price:
        appliedFilters.price !== undefined
          ? appliedFilters.price
          : maxProductPrice,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      setFilters(values);
      if (onClose) onClose();
    },
  });

  const handleResetAll = () => {
    resetFilters();
    formik.resetForm({
      values: {
        brandName: [],
        departmentName: [],
        categoryName: [],
        sizes: [],
        colors: [],
        price: maxProductPrice,
      },
    });
    setResetTrigger((prev) => prev + 1);
  };

  const hasActiveFilters =
    formik.values.brandName?.length > 0 ||
    formik.values.departmentName?.length > 0 ||
    formik.values.categoryName?.length > 0 ||
    formik.values.sizes?.length > 0 ||
    formik.values.colors?.length > 0 ||
    (formik.values.price !== undefined &&
      formik.values.price !== maxProductPrice);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden block"
          onClick={onClose}
        />
      )}

      <form
        onSubmit={formik.handleSubmit}
        className={`
          flex flex-col bg-white p-5 font-main h-full md:h-fit
          /* الموبايل Drawer */
          fixed inset-y-0 left-0 w-75 max-w-[calc(100vw-40px)] z-50 shadow-2xl transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          /* الشاشات الكبيرة */
          md:sticky md:top-6 md:translate-x-0 md:w-70 lg:w-[320px] md:z-10 md:shadow-sm md:border md:border-gray-100 md:rounded-2xl md:transition-none
        `}
      >
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <IoFilterOutline className="text-darky text-xl" />
            <h2 className="font-bold text-base text-darky uppercase tracking-wide">
              Filters
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetAll}
                className="flex items-center gap-1 text-xs text-red-500 font-medium hover:underline cursor-pointer shrink-0"
              >
                <IoRefreshOutline className="text-sm" /> Clear All
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="md:hidden text-gray-400 hover:text-darky text-2xl p-0.5 cursor-pointer transition-colors shrink-0"
            >
              <IoCloseOutline />
            </button>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="mb-4">
            <ActiveFilters />
          </div>
        )}

        <div
          key={resetTrigger}
          className="flex flex-col divide-y divide-gray-100 overflow-y-auto grow pr-1 no-scrollbar md:overflow-visible"
        >
          {Object.entries(dynamicFilterData).map(([key, options]) => {
            if (["colors", "sizes"].includes(key) || options.length === 0)
              return null;
            const displayName = key.replace("Name", "S").toUpperCase();

            return (
              <div key={key} className="py-4 first:pt-0">
                <SearchFilter filterName={displayName}>
                  <div className="grid grid-cols-1 gap-2.5 pt-2 capitalize">
                    {options.map((item) => (
                      <CheckBox
                        key={item}
                        groupName={key}
                        value={item}
                        onChange={formik.handleChange}
                        checked={formik.values[key]?.includes(item)}
                      />
                    ))}
                  </div>
                </SearchFilter>
              </div>
            );
          })}

          {dynamicFilterData.sizes.length > 0 && (
            <div className="py-4">
              <SearchFilter filterName="SIZES">
                <div className="pt-2">
                  <Sizes
                    availableSizes={dynamicFilterData.sizes}
                    selectedSizes={formik.values.sizes}
                    onChange={(val) => formik.setFieldValue("sizes", val)}
                  />
                </div>
              </SearchFilter>
            </div>
          )}

          {dynamicFilterData.colors.length > 0 && (
            <div className="py-4">
              <SearchFilter filterName="COLORS">
                <div className="pt-2">
                  <Colors
                    availableColors={dynamicFilterData.colors}
                    selectedColor={formik.values.colors}
                    onChange={(val) => formik.setFieldValue("colors", val)}
                  />
                </div>
              </SearchFilter>
            </div>
          )}

          <div className="py-4 last:pb-0">
            <SearchFilter filterName="PRICE RANGE">
              <div className="pt-2">
                <Price
                  min={0}
                  max={maxProductPrice}
                  value={formik.values.price}
                  onChange={(val) => formik.setFieldValue("price", val)}
                />
              </div>
            </SearchFilter>
          </div>
        </div>

        <div className="flex gap-3 border-t border-gray-100 pt-4 mt-4 bg-white sticky bottom-0">
          <button
            type="submit"
            className="grow text-sm bg-darky text-white font-semibold py-3 rounded-xl shadow-md hover:bg-darky/90 active:scale-[0.98] transition-all uppercase tracking-wider cursor-pointer"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </>
  );
}
