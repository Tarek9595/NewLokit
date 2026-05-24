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
        images: [], // بنجهز مكان مصفوفة الصور هنا
      };
    });
  };

  const [allProducts, setAllProducts] = useState([]);

  console.log(allProducts);

  useEffect(() => {
    // السحر كله هنا: دمج المنتجات ثم جلب صورهم بالتبعية
    let urlVariants = domain + "variants";
    let urlProducts = domain + "product";

    Promise.all([axios.get(urlVariants), axios.get(urlProducts)])
      .then(([variantsRes, productsRes]) => {
        const rawVariants = variantsRes.data;
        const rawProducts = productsRes.data;

        // 1. دمج المنتجات والـ variants
        const cleanProducts = formatProductsVariants(rawVariants, rawProducts);

        // 2. عمل لستة من طلبات الـ API للصور بناءً على الـ id الحقيقي لكل منتج نتج معانا
        const imageRequests = cleanProducts.map(
          (product) =>
            axios
              .get(`${domain}product-images/product/${product.id}`)
              .then((res) => ({ productId: product.id, images: res.data }))
              .catch(() => ({ productId: product.id, images: [] })), // لو منتج معندوش صور ميكرشش الكود
        );

        // 3. تشغيل جميع طلبات الصور بالتوازي
        return Promise.all(imageRequests).then((imagesResults) => {
          // دمج الصور جوة المنتجات المتطابقة
          const finalProductsWithImages = cleanProducts.map((product) => {
            const productImagesData = imagesResults.find(
              (img) => img.productId === product.id,
            );
            return {
              ...product,
              // استخراج الـ imageUrl فقط وضخها في مصفوفة عادية زي الـ sizes
              images: productImagesData
                ? productImagesData.images.map((img) => img.imageUrl)
                : [],
            };
          });

          // 4. حفظ النتيجة النهائية الكاملة بالصور
          setAllProducts(finalProductsWithImages);
        });
      })
      .catch((err) => {
        console.log("Error in Main Pipeline:", err);
      });

    axios.get(domain + "variants").then((res) => console.log(res.data));
  }, []);

  let cart = {
    variantId: 1319,
    quantity: 1,
  };

  axios
    .post(domain + "cart/items", cart)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <></>;
}
