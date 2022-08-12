import { productType } from "@/types";
import Button from "@/components/UI/Button";
import useProduct from "@/hooks/useProduct";

interface Props {
  product: productType;
}

export default function FashionProductForm({ product }: Props) {
  const { updateProductQuantityHandler, addToCartHandler } =
    useProduct(product);

  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="mb-grid-gutter mt-4">
      <div className="mb-3 d-flex align-items-center">
        <select
          className="form-select me-3"
          style={{ width: "6rem" }}
          onChange={updateProductQuantityHandler}
        >
          {quantity.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Button
          className="btn btn-primary btn-shadow d-block w-100"
          type="button"
          onClick={addToCartHandler}
          text="Add to Cart"
        >
          <i className="ci-cart fs-lg me-2"></i>
        </Button>
      </div>
    </div>
  );
}
