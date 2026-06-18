import { useState, useEffect } from "react";
import axios from "axios";
import { domain } from "../../store";

export default function MyComponent() {
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
      };
    });
  };

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    let urlVariants = domain + "variants";
    let urlProducts = domain + "product";

    Promise.all([axios.get(urlVariants), axios.get(urlProducts)])
      .then(([variantsRes, productsRes]) => {
        const rawVariants = variantsRes.data;
        const rawProducts = productsRes.data;

        const cleanProducts = formatProductsVariants(rawVariants, rawProducts);

        const imageRequests = cleanProducts.map((product) =>
          axios
            .get(`${domain}product-images/product/${product.id}`)
            .then((res) => ({ productId: product.id, images: res.data }))
            .catch(() => ({ productId: product.id, images: [] })),
        );

        return Promise.all(imageRequests).then((imagesResults) => {
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

          setAllProducts(finalProductsWithImages);
        });
      })
      .catch((err) => {
        console.log("Error in Main Pipeline:", err);
      });
  }, []);

  return <></>;
}
