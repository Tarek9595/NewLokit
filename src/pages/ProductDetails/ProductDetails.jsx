import { useCurrentProduct } from "../../store";

export default function ProductDetails() {
  const { currentProduct } = useCurrentProduct();
  console.log(currentProduct);
  return (
    <div>
      <h1>{currentProduct.id}</h1>
    </div>
  );
}
