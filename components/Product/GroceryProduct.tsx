/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { productType } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  product: productType;
  algoliaEvent?: "search";
}

export default function GroceryProduct({ product, algoliaEvent }: Props) {
  const [inHover, setHover] = useState(false);
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const smallerMobileDevice = useMediaQuery("(max-width:330px)");

  const productDimension = smallerMobileDevice
    ? { height: 200, width: 250 }
    : mobileDevice
    ? { height: 80, width: 80 }
    : { height: 300, width: 300 };

  const productImage =
    typeof product.images === "object" && typeof product.images[0] === "string"
      ? product.images[0]
      : inHover && product.images.length > 1
      ? product.images[1]?.file?.url
      : product.images[0]?.file?.url;

  const linkURL =
    algoliaEvent === "search"
      ? `/products/grocery/${product.slug}?query-id=${product.__queryID}`
      : `/products/grocery/${product.slug}?id=${product.id}`;

  return (
    <div>
      <div className="card product-card card-static pb-3">
        <span className="badge bg-danger badge-shadow">Sale</span>
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Add to wishlist"
        >
          <i className="ci-heart"></i>
        </button>
        <Link href={linkURL} passHref>
          <a className="card-img-top d-block overflow-hidden">
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="productImage"
            >
              <Image
                height={productDimension.height}
                width={productDimension.width}
                src={productImage}
                alt={product?.image_alt_text[0]}
                placeholder="blur"
                blurDataURL={productImage}
                loading="lazy"
              />
            </div>
          </a>
        </Link>
        <div className="card-body py-2">
          <a className="product-meta d-block fs-xs pb-1" href="#">
            {product.vendor}
          </a>
          <h3 className="product-title fs-sm text-truncate">
            <Link href="/grocery-single" passHref>
              <a>{product.name}</a>
            </Link>
          </h3>
          <div className="product-price">
            <FormattedPrice
              className="text-accent"
              price={product.sale_price}
            />
            {product?.price && (
              <del className="ms-1 fs-sm">
                <FormattedPrice
                  className="text-accent"
                  price={product?.price}
                />
              </del>
            )}
          </div>
        </div>
        <div className="product-floating-btn">
          <button className="btn btn-primary btn-shadow btn-sm" type="button">
            +<i className="ci-cart fs-base ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
