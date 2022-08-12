import Image from "next/image";
import Link from "next/link";

import { productType } from "@/types";
import FormattedPrice from "@/components/Price/FormattedPrice";
import RatingStar from "@/components/UI/Ratings";

interface Props {
  relatedProduct: productType;
}

export default function FashionRelatedProduct({ relatedProduct }: Props) {
  const mainProductImage =
    typeof relatedProduct.images[0] === "string"
      ? relatedProduct.images[0]
      : relatedProduct.images[0].file.url;
  return (
    <Link
      href={`/products/fashion/${relatedProduct.slug}?id=${relatedProduct.id}`}
      key={relatedProduct.id}
      passHref
    >
      <a>
        <div className="col-12">
          <div className="card product-card card-static">
            <button
              className="btn-wishlist btn-sm"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Add to wishlist"
            >
              <i className="ci-heart"></i>
            </button>
            <div className="card-img-top d-block overflow-hidden">
              <Image
                height={275}
                width={275}
                src={mainProductImage}
                alt={relatedProduct.name}
                blurDataURL={mainProductImage}
              />
            </div>
            <div className="card-body py-2">
              <div className="product-meta d-block fs-xs pb-1">
                {relatedProduct.vendor}
              </div>
              <h3 className="product-title fs-sm">{relatedProduct.name}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <div className="product-price">
                  <FormattedPrice
                    price={relatedProduct.sale_price}
                    className="text-accent"
                  />
                  {relatedProduct.price ? (
                    <del className="ms-2">
                      <FormattedPrice
                        price={relatedProduct.price}
                        className="text-accent fs-xs"
                      />
                    </del>
                  ) : (
                    ""
                  )}
                </div>
                {relatedProduct.rating > 0 ? (
                  <RatingStar rate={relatedProduct.rating} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
