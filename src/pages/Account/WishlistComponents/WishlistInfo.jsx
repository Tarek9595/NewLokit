import { useCart, useWishlist } from "../../../store";
import CstBtn from "../../../components/common/CstBtn";

export default function WishlistInfo() {
  let borderBetween = "pt-6 md:pt-18.75 border-t border-[#E9E9EB]";

  const { wishlist, removeWishlistProduct } = useWishlist();

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const { cart, setCartProduct, removeCartProduct } = useCart();

  const handleCartToggle = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      removeCartProduct(product.id);
    } else {
      setCartProduct(product);
    }
  };

  const today = new Intl.DateTimeFormat("en-GB", options).format(new Date());

  return (
    <>
      {wishlist.length > 0 ? (
        wishlist.map((el, index) => {
          const isInCart = cart.some((item) => item.id === el.id);
          return (
            <div
              key={el.id}
              className={`flex flex-col md:flex-row justify-between md:items-center p-1 pt-6 md:pt-18.75 text-darky font-medium gap-6 md:gap-0 ${
                wishlist.length > 0 && index === 0 ? "" : borderBetween
              }`}
            >
              <div className="flex gap-4 md:gap-8 w-full md:w-auto">
                <div className="w-20 h-20 md:w-25 md:h-25 shrink-0">
                  <img
                    src={el.img}
                    className="w-full h-full object-contain"
                    alt={el.name}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[14px] md:text-[16px] line-clamp-2">
                    {el.name}
                  </h1>
                  <span className="text-[12px] md:text-[14px] text-[#5C5F6A]">
                    Added on: {today}
                  </span>
                  <button
                    onClick={() => removeWishlistProduct(el.id)}
                    className="text-[14px] w-fit cursor-pointer text-left hover:underline hover:underline-offset-1 mt-1"
                  >
                    Remove item
                  </button>
                </div>
              </div>

              <div className="flex gap-4 md:gap-8 text-[14px] items-center justify-between md:justify-end w-full md:w-auto border-t md:border-none border-gray-100 pt-4 md:pt-0">
                <div className="font-semibold md:font-medium">$ {el.price}</div>

                <CstBtn
                  variant={isInCart ? "darky" : "outlineDarky"}
                  size="sm"
                  className="md:py-2.5 md:px-6 active:scale-95 cursor-pointer whitespace-nowrap"
                  onClick={() => handleCartToggle(el)}
                >
                  {isInCart ? "In Cart" : "Add to cart"}
                </CstBtn>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Go ! Like Some Products</h1>
      )}
    </>
  );
}
