import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
export const domain = "https://lokit-production.up.railway.app/";

const formatProductsVariants = (variantsList, rawProductsList) => {
  const grouped = variantsList.reduce((acc, current) => {
    const name = current.productName;
    if (!acc[name]) {
      acc[name] = {
        id: current.id,
        productName: name,
        price: current.price,
        colorsSet: new Set(),
        sizesSet: new Set(),
      };
    }
    if (current.colorName) acc[name].colorsSet.add(current.colorName);
    if (current.sizeName) acc[name].sizesSet.add(current.sizeName);
    return acc;
  }, {});

  return Object.values(grouped).map((product) => {
    const matchingProduct = rawProductsList.find(
      (p) => p.name === product.productName,
    );
    return {
      id: matchingProduct ? matchingProduct.id : product.id,
      productName: product.productName,
      price: product.price,
      colors: Array.from(product.colorsSet),
      sizes: Array.from(product.sizesSet),
      brandName: matchingProduct ? matchingProduct.brandName : "",
      categoryName: matchingProduct ? matchingProduct.categoryName : "",
      departmentName: matchingProduct ? matchingProduct.departmentName : "",
      images: [],
      rate: 5,
      soldOut: false,
    };
  });
};

export const useProductStore = create((set) => ({
  allProducts: [],
  isLoading: false,
  error: null,

  fetchAllProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const urlVariants = domain + "variants";
      const urlProducts = domain + "product";

      const [variantsRes, productsRes] = await Promise.all([
        axios.get(urlVariants),
        axios.get(urlProducts),
      ]);

      const cleanProducts = formatProductsVariants(
        variantsRes.data,
        productsRes.data,
      );

      const imageRequests = cleanProducts.map((product) =>
        axios
          .get(`${domain}product-images/product/${product.id}`)
          .then((res) => ({ productId: product.id, images: res.data }))
          .catch(() => ({ productId: product.id, images: [] })),
      );

      const imagesResults = await Promise.all(imageRequests);

      const finalProductsWithImages = cleanProducts.map((product) => {
        const productImagesData = imagesResults.find(
          (img) => img.productId === product.id,
        );
        return {
          ...product,
          images: productImagesData
            ? productImagesData.images.map((img) => img.imageUrl)
            : [],
        };
      });

      set({ allProducts: finalProductsWithImages, isLoading: false });
    } catch (err) {
      console.error("Error in Main Pipeline:", err);
      set({ error: err.message, isLoading: false });
    }
  },
}));

export const useLinks = create(() => ({
  Links: [
    {
      id: 1,
      name: "Orders",
      path: "orders",
    },
    {
      id: 2,
      name: "Wishlist",
      path: "/account",
    },
    {
      id: 3,
      name: "Address",
      path: "address",
    },
    {
      id: 4,
      name: "Password",
      path: "password",
    },
    {
      id: 5,
      name: "Account Detail",
      path: "details",
    },
    {
      id: 6,
      name: "Logout",
      path: "/",
    },
  ],
}));

export const useActiveInfo = create((set) => ({
  activeInfo: {
    id: 2,
    name: "Wishlist",
    path: "",
  },

  setActiveInfo: (newActivInfo) => set({ activeInfo: newActivInfo }),
}));

export const useFilterStore = create((set) => ({
  appliedFilters: {
    brandName: [],
    departmentName: [],
    categoryName: [],
    sizes: [],
    colors: [],
    price: 2500,
  },
  setFilters: (newFilters) => set({ appliedFilters: newFilters }),
  resetFilters: () =>
    set({
      appliedFilters: {
        brandName: [],
        departmentName: [],
        categoryName: [],
        sizes: [],
        colors: [],
        price: 2500,
      },
    }),
}));

export const useReviews = create((set) => ({
  reviews: [
    {
      id: 1,
      name: "Emily Davis",
      date: "1 WEEK AGO",
      comment:
        "This company always goes above and beyond to satisfy their customers.",
      rating: 4,
    },
    {
      id: 2,
      name: "Daniel Smith",
      date: "2 MONTH AGO",
      comment: "I can't believe how affordable and high-quality this item is!",
      rating: 4,
    },
  ],

  openReview: false,

  setOpenReview: (value) => set({ openReview: value }),

  setReview: (newReview) =>
    set((state) => ({ reviews: [...state.reviews, newReview] })),
}));

export const useShare = create((set) => ({
  openShare: false,
  setOpenShare: (value) => set({ openShare: value }),
}));

export const useCurrentProduct = create(
  persist(
    (set) => ({
      currentProduct: {},
      setProduct: (newProduct) => set({ currentProduct: newProduct }),
    }),
    {
      name: "currentProduct",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useOrderProgress = create((set) => ({
  orderProgress: false,

  setOrderProgress: (newValue) => set({ orderProgress: newValue }),

  resetOrderProgress: () => set({ orderProgress: false }),
}));

export const useCurrentOrder = create((set) => ({
  selectedOrder: null,

  setSelectedOrder: (order) => set({ selectedOrder: order }),

  clearSelectedOrder: () => set({ selectedOrder: null }),
}));

export const useStage = create((set) => ({
  stage: 0,
  setStage: (value) => set({ stage: value }),
}));

// After sync with back end

export const userLoginInfo = create(
  persist(
    (set, get) => ({
      loginInfo: null,
      isLoggedIn: false,
      forgetPasswordEmail: "",
      forgetPasswordCode: "",

      login: (userData) => set({ loginInfo: userData, isLoggedIn: true }),
      logout: () => {
        set({
          loginInfo: null,
          isLoggedIn: false,
          forgetPasswordEmail: "",
          forgetPasswordCode: "",
        });

        localStorage.removeItem("userLoginInfo");
        localStorage.removeItem("account-info-storage");

        localStorage.removeItem("address-storage");

        window.location.href = "/";
      },

      updateUser: (newDetails) =>
        set((state) => ({
          loginInfo: state.loginInfo
            ? { ...state.loginInfo, ...newDetails }
            : null,
        })),

      sendResetCode: async (email) => {
        try {
          let url = domain + "auth/forgot-password";
          const res = await axios.post(
            url,
            { email },
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          set({ forgetPasswordEmail: email });
          return {
            success: true,
            message: res.data?.message || "Code sent successfully!",
          };
        } catch (err) {
          console.error("Forgot password error:", err);

          const errorMsg =
            err.response?.data?.message ||
            "Server Error (500). Please try again later or contact support.";

          return { success: false, message: errorMsg };
        }
      },

      verifyResetCode: async (code) => {
        try {
          let url = domain + "auth/verify-password-code";
          const email = get().forgetPasswordEmail;

          const res = await axios.post(url, { email, code });
          set({ forgetPasswordCode: code });
          return {
            success: true,
            message: res.data?.message || "Code verified successfully!",
          };
        } catch (err) {
          const errorMsg =
            err.response?.data?.message || "Invalid or expired code.";
          return { success: false, message: errorMsg };
        }
      },

      resetPassword: async (newPassword) => {
        try {
          let url = domain + "auth/reset-password";
          const email = get().forgetPasswordEmail;
          const code = get().forgetPasswordCode;

          const res = await axios.post(url, { email, code, newPassword });

          set({ forgetPasswordEmail: "", forgetPasswordCode: "" });
          return {
            success: true,
            message: res.data?.message || "Password reset successfully!",
          };
        } catch (err) {
          const errorMsg =
            err.response?.data?.message || "Failed to reset password.";
          return { success: false, message: errorMsg };
        }
      },
    }),
    {
      name: "userLoginInfo",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useAccountInfo = create(
  persist(
    (set) => ({
      accountInfo: null,
      isLoadingAccount: false,

      fetchProfile: async () => {
        const token = userLoginInfo.getState().loginInfo?.token;
        if (!token) return;

        set({ isLoadingAccount: true });
        try {
          let url = domain + "account";
          const res = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set({ accountInfo: res.data, isLoadingAccount: false });
        } catch (err) {
          console.error("Error fetching account info:", err);
          set({ isLoadingAccount: false });
        }
      },

      updateProfile: async (updatedData) => {
        const token = userLoginInfo.getState().loginInfo?.token;
        if (!token) return false;

        try {
          let url = domain + "account";
          const res = await axios.put(url, updatedData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set({ accountInfo: res.data });
          return true;
        } catch (err) {
          console.error("Error updating profile:", err);
          return false;
        }
      },

      clearAccountInfo: () => set({ accountInfo: null }),

      changePassword: async (passwordData) => {
        const token = userLoginInfo.getState().loginInfo?.token;
        if (!token)
          return {
            success: false,
            message: "No token found, please login again",
          };

        try {
          let url = domain + "account/password";

          const res = await axios.put(url, passwordData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          return { success: true, data: res.data };
        } catch (err) {
          console.error("Error changing password:", err);
          const errorMsg =
            err.response?.data?.message ||
            "Server configuration error (CORS). Please contact support.";
          return { success: false, message: errorMsg };
        }
      },
    }),
    {
      name: "account-info-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useWishlist = create((set) => ({
  wishlist: [],

  setWishListProduct: (product) =>
    set((state) => {
      const isExist = state.wishlist.some((item) => item.id === product.id);
      if (isExist) return state;

      const formattedProduct = {
        id: product.id,
        name: product.productName,
        price: product.price,
        img:
          product.images && product.images.length > 0 ? product.images[0] : "",
      };

      return { wishlist: [...state.wishlist, formattedProduct] };
    }),

  removeWishlistProduct: (productID) =>
    set((state) => ({
      wishlist: state.wishlist.filter((el) => el.id !== productID),
    })),
}));

// eslint-disable-next-line no-unused-vars
export const useUpload = create((set, get) => ({
  openUpload: false,
  isLoadingTryOn: false,
  tryOnResult: null,
  uploadError: null,
  setOpenUpload: (value) =>
    set({ openUpload: value, tryOnResult: null, uploadError: null }),

  tryOnProduct: async (productId, file) => {
    if (!productId || !file) {
      set({ uploadError: "Missing product ID or user image" });
      return;
    }

    set({ isLoadingTryOn: true, uploadError: null });

    try {
      const token = userLoginInfo.getState().loginInfo?.token;

      const formData = new FormData();
      formData.append("userImage", file);

      const headers = {
        "Content-Type": "multipart/form-data",
      };

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await axios.post(
        `${domain}ai/try-on?productId=${productId}`,
        formData,
        { headers },
      );

      if (response.data && response.data.resultImageUrl) {
        set({
          tryOnResult: response.data.resultImageUrl,
          isLoadingTryOn: false,
        });
      } else {
        set({
          uploadError: "Failed to get response image",
          isLoadingTryOn: false,
        });
      }
    } catch (err) {
      console.error("AI Try-On Error:", err);
      const msg =
        err.response?.data?.message || "Something went wrong with AI Try-On";
      set({ uploadError: msg, isLoadingTryOn: false });
    }
  },
}));

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      ordersHistory: [],

      setCartProduct: (product) =>
        set((state) => {
          const isExist = state.cart.find(
            (item) =>
              item.id === product.id &&
              item.selectedSize === product.selectedSize &&
              item.selectedColor === product.selectedColor,
          );

          if (isExist) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id &&
                item.selectedSize === product.selectedSize &&
                item.selectedColor === product.selectedColor
                  ? { ...item, qty: item.qty + (product.quantity || 1) }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, qty: product.quantity || 1 }],
          };
        }),

      removeCartProduct: (productID, size, color) =>
        set((state) => ({
          cart: state.cart.filter(
            (el) =>
              !(
                el.id === productID &&
                el.selectedSize === size &&
                el.selectedColor === color
              ),
          ),
        })),

      increaseQty: (productID, size, color) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productID &&
            item.selectedSize === size &&
            item.selectedColor === color
              ? { ...item, qty: item.qty + 1 }
              : item,
          ),
        })),

      decreaseQty: (productID, size, color) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productID &&
              item.selectedSize === size &&
              item.selectedColor === color
                ? { ...item, qty: item.qty - 1 }
                : item,
            )
            .filter((item) => item.qty > 0),
        })),

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const { cart } = get();

        const subtotal = cart.reduce(
          (acc, item) => acc + item.price * item.qty,
          0,
        );

        const tax = subtotal * 0.14;
        const total = subtotal + tax;

        return {
          subtotal: subtotal.toFixed(2),
          tax: tax.toFixed(2),
          total: total.toFixed(2),
        };
      },

      confirmOrder: (customerValues) => {
        const { cart, getCartTotal } = get();
        const { total } = getCartTotal();

        const newOrder = {
          orderId: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
          date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          items: [...cart],
          totalPrice: total,
          customerDetails: customerValues,
        };

        set((state) => ({
          ordersHistory: [newOrder, ...state.ordersHistory],
        }));
      },

      clearOrderHistory: () => set({ ordersHistory: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cart: state.cart,
        ordersHistory: state.ordersHistory,
      }),
    },
  ),
);

export const useAddressInfo = create(
  persist(
    (set) => ({
      address: {},
      response: {},

      setAddress: (newValue) => set({ address: newValue }),

      fetchAddress: async (domain, token) => {
        try {
          const url = domain + "addresses";
          const res = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const resData = Array.isArray(res.data) ? res.data[0] : res.data;
          if (resData) set({ address: resData });
        } catch (err) {
          console.error("Error fetching address from server:", err);
        }
      },

      addAddress: (domain, token, addressData) => {
        let url = domain + "addresses";
        axios
          .post(url, addressData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data);
            set({ response: res.data, address: addressData });
          })
          .catch((err) => console.log(err));
      },
    }),
    {
      name: "address-storage",
    },
  ),
);

export const formatSize = (sizeName) => {
  if (!sizeName) return "M";
  const cleanSize = sizeName.trim().toLowerCase();

  switch (cleanSize) {
    case "xsmall":
    case "xs":
      return "XS";
    case "small":
    case "s":
      return "S";
    case "medium":
    case "m":
      return "M";
    case "large":
    case "l":
      return "L";
    case "xlarge":
    case "xl":
      return "XL";
    case "xxlarge":
    case "xxl":
      return "XXL";
    default:
      return sizeName.toUpperCase();
  }
};

export const useProductSelectionStore = create((set) => ({
  currentSelection: {
    color: null,
    size: "M",
  },

  setSelectedColor: (color) =>
    set((state) => ({
      currentSelection: { ...state.currentSelection, color },
    })),

  setSelectedSize: (size) =>
    set((state) => ({
      currentSelection: { ...state.currentSelection, size: formatSize(size) },
    })),

  initializeSelection: (productColors, productSizes) => {
    const defaultColor =
      productColors && productColors.length > 0 ? productColors[0] : null;
    const defaultSize =
      productSizes && productSizes.length > 0
        ? formatSize(productSizes[0])
        : "M";

    set({
      currentSelection: {
        color: defaultColor,
        size: defaultSize,
      },
    });
  },
}));
