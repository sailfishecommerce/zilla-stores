import { useState } from "react";

import useShoppingCart from "@/hooks/useShoppingCart";
import { productType } from "@/types";

export default function useProduct(product: productType) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addItemToCart } = useShoppingCart();

  function updateProductQuantityHandler(e: any) {
    setSelectedQuantity(e.target.value);
  }

  function addToCartHandler() {
    addItemToCart.mutate({ product, quantity: selectedQuantity });
  }

  return { updateProductQuantityHandler, addToCartHandler };
}
