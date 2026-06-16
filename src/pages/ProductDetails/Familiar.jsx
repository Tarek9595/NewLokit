import { useProductStore, useCurrentProduct } from "../../store";

export default function Familiar() {
  const { allProducts } = useProductStore();
  const { currentProduct, setProduct } = useCurrentProduct();

  const relatedProducts = allProducts
    .filter(
      (product) =>
        product.brandName === currentProduct?.brandName &&
        product.id !== currentProduct?.id,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="container mt-10 font-inter">
      <h3 className="text-xl font-bold text-darky mb-6 uppercase tracking-tight">
        You Might Also Like (From {currentProduct?.brandName})
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.map((product) => {
          const mainImage =
            product.images && product.images.length > 0
              ? product.images[0]
              : "https://via.placeholder.com/300";

          return (
            <div
              key={product.id}
              className="flex flex-col gap-3 group cursor-pointer"
              onClick={() => {
                setProduct(product);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-full h-80 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
                <img
                  src={mainImage}
                  alt={product.productName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 uppercase font-semibold">
                  {product.brandName}
                </span>
                <h4 className="text-sm font-bold text-darky truncate uppercase">
                  {product.productName}
                </h4>
                <span className="text-sm font-semibold text-gray-700">
                  ${product.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
