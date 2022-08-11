import { productType } from "@/types";
import { useEffect, useState } from "react";

export default function useProductPageImage(product: productType) {
  const mainProductImage =
    typeof product.images[0] === "string"
      ? product.images[0]
      : product.images[0].file.url;

  const [activeImage, setActiveImage] = useState(mainProductImage);

  useEffect(() => {
    setActiveImage(mainProductImage);
  }, []);

  function updateMainImage(image: string) {
    setActiveImage(image);
  }

  return { activeImage, updateMainImage };
}
