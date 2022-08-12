import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import RatingStar from "@/components/UI/Ratings";
import { productType } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";
import useMediaQuery from "@/hooks/useMediaQuery";
import useShoppingCart from "@/hooks/useShoppingCart";
import Button from "@/components/UI/Button";
import { quickViewModal } from "@/redux/ui-slice";
import { useAppDispatch } from "@/hooks/useRedux";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";

interface Props {
  product: productType;
  algoliaEvent?: "search";
}

export default function Product({ product, algoliaEvent }: Props) {
  const [inHover, setHover] = useState(false);
  const mobileDevice = useMediaQuery("(max-width:768px)");
  const smallerMobileDevice = useMediaQuery("(max-width:330px)");
  const { itemViewed, productAddedToCart } = useAlgoliaEvents();
  const dispatch = useAppDispatch();
  const { addItemToCart } = useShoppingCart();

  function addToCartHandler() {
    if (product.objectID) {
      productAddedToCart([product.objectID]);
    }
    addItemToCart.mutate({ product, quantity: 1 });
  }

  function quickViewHandler(product: any) {
    const itemId =
      product.objectID !== undefined ? product.objectID : [product.id];
    itemViewed("quick_view_of_product_by_modal", itemId);
    dispatch(quickViewModal(product));
  }

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
      ? `/products/fashion/${product.slug}?query-id=${product.__queryID}`
      : `/products/fashion/${product.slug}?id=${product.id}`;

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
          <h3 className="product-title fs-sm">
            <Link
              href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
              passHref
            >
              <a>{product.name}</a>
            </Link>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price">
              <FormattedPrice
                className="text-accent"
                price={product.sale_price}
              />
              {product?.price ? (
                <del className="ms-1 fs-sm">
                  <FormattedPrice
                    className="text-accent"
                    price={product?.price}
                  />
                </del>
              ) : (
                ""
              )}
            </div>
            {product.rating && <RatingStar rate={product?.rating} />}
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <Button
            className="btn btn-primary btn-sm d-block w-100 mb-2"
            type="button"
            text="Add to Cart"
            onClick={addToCartHandler}
          >
            <i className="ci-cart fs-sm me-1"></i>
          </Button>
          <div className="text-center">
            <a
              className="nav-link-style fs-ms"
              data-bs-toggle="modal"
              href="#quick-view"
              onClick={() => quickViewHandler(product)}
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
