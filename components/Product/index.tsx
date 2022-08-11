/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import RatingStar from "@/components/UI/Ratings";
import { ProductProps } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Product({ product }: ProductProps) {
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

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
      <div className="card product-card">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Add to wishlist"
        >
          <i className="ci-heart"></i>
        </button>
        <Link href="/shop-single-v1" passHref>
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
          <h3 className="product-title fs-sm">
            <Link href="/shop-single-v1" passHref>
              <a>{product.name}</a>
            </Link>
          </h3>
          <div className="d-flex justify-content-between">
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
            {product.rating && <RatingStar rate={product?.rating} />}
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <button
            className="btn btn-primary btn-sm d-block w-100 mb-2"
            type="button"
          >
            <i className="ci-cart fs-sm me-1"></i>Add to Cart
          </button>
          <div className="text-center">
            <a
              className="nav-link-style fs-ms"
              href="#quick-view"
              data-bs-toggle="modal"
            >
              <i className="ci-eye align-middle me-1"></i>
              Quick view
            </a>
          </div>
        </div>
      </div>
      <hr className="d-sm-none" />
    </div>
  );
}
