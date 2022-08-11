/* eslint-disable @next/next/no-img-element */

import useProductPageImage from "@/hooks/useProductPageImage";
import ProductImageThumbnail from "@/components/Product/ProductImageThumbnail";
import type { productType } from "@/types";
import FormattedPrice from "../Price/FormattedPrice";

interface Props {
  product: productType;
}

export default function GroceryProductGallery({ product }: Props) {
  const { activeImage, updateMainImage } = useProductPageImage(product);
  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section className="row g-0 mx-n2 pb-5 mb-xl-3">
      <div className="col-xl-7 px-2 mb-3">
        <div className="h-100 bg-light rounded-3 p-4">
          <div className="product-gallery">
            <div className="product-gallery-preview order-sm-2">
              <div className="product-gallery-preview-item active" id="first">
                <img src={activeImage} alt={product.name} />
              </div>
            </div>
            <ProductImageThumbnail
              product={product}
              activeImage={activeImage}
              updateMainImage={updateMainImage}
            />
          </div>
        </div>
      </div>
      <div className="col-xl-5 h-100  mb-3 product-description">
        <div className="h-100 bg-light rounded-3 py-5 px-2 px-4">
          <a className="product-meta d-block fs-sm pb-2" href="#">
            {product.product_categories
              ? product.product_categories?.map((category, index) => {
                  const arrayLength: any = product?.product_categories?.length;
                  const showComma = index === arrayLength - 1 ? " " : " , ";
                  return `${category}${showComma}`;
                })
              : ""}
          </a>
          <h4 className="h4">{product.name}</h4>
          <FormattedPrice
            price={product.sale_price}
            className="h2 fw-normal text-accent"
          />
          {product.price ? (
            <del className="ms-2 fs-sm">
              <FormattedPrice
                price={product.price}
                className="h4 fw-normal text-accent "
              />
            </del>
          ) : (
            ""
          )}
          <div className="d-flex flex-column flex-wrap align-items-center pt-4 pb-2 mb-3">
            <div className="select-quantity d-flex align-items-center w-full">
              <select
                className="form-select me-3 mb-3"
                style={{ width: "5rem" }}
              >
                {quantity.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-primary btn-shadow me-3 mb-3 w-100"
                type="submit"
              >
                <i className="ci-cart fs-lg me-2"></i>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="description border rounded px-4 py-1">
            <p
              className="fs-sm text-muted pb-1"
              dangerouslySetInnerHTML={{
                __html: product["description"],
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-description {
            overflow-y: scroll;
            background-color: white;
            max-height: 500px;
          }
        `}
      </style>
    </section>
  );
}
