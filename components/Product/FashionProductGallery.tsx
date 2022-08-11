import { productType } from "@/types";
import Image from "next/image";
import { useState } from "react";

import FashionProductForm from "@/components/Forms/FashionProductForm";
import SocialIcons from "@/components/Icons/SocialIcons";
import FormattedPrice from "@/components/Price/FormattedPrice";
import RatingStar from "@/components/UI/Ratings";
import FashionProductInfo from "@/components/Product/FashionProductInfo";

/* eslint-disable @next/next/no-img-element */
interface Props {
  product: productType;
}
export default function FashionProductGallery({ product }: Props) {
  const mainProductImage =
    typeof product.images[0] === "string"
      ? product.images[0]
      : product.images[0].file.url;

  const [activeImage, setActiveImage] = useState(mainProductImage);

  function updateMainImage(image: string) {
    setActiveImage(image);
  }
  return (
    <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
      <div className="px-lg-3">
        <div className="row">
          <div className="col-lg-7 pe-lg-0 pt-lg-4">
            <div className="product-gallery">
              <div className="product-gallery-preview order-sm-2">
                <div className="product-gallery-preview-item active">
                  <img
                    className="image-zoom"
                    src={activeImage}
                    data-zoom={activeImage}
                    alt={product.name}
                  />
                  <div className="image-zoom-pane"></div>
                </div>
              </div>
              <div className="product-gallery-thumblist order-sm-1">
                {product.images.map((image, index) => {
                  const productImage =
                    typeof image === "string" ? image : image.file.url;
                  const productIndex =
                    typeof image === "string" ? index : image.id;

                  const activethumb =
                    activeImage === productImage ? "active" : "";
                  return (
                    <a
                      key={productIndex}
                      className={`product-gallery-thumblist-item ${activethumb}`}
                      href="#first"
                      onClick={() => updateMainImage(productImage)}
                    >
                      <Image
                        src={productImage}
                        alt={product.name}
                        blurDataURL={productImage}
                        height={78}
                        width={78}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/*<!-- Product details-->*/}

          <div className="col-lg-5 pt-4 pt-lg-0">
            <div className="position-relative me-n4 mt-4">
              <div className="product-badge product-available mt-n1 mb-4">
                <i className="ci-security-check"></i>
                Product available
              </div>
            </div>
            <div className="product-details ms-auto pb-3 mt-2">
              <div className="d-flex justify-content-between align-items-center my-2">
                {product.rating > 0 ? <RatingStar rate={product.rating} /> : ""}
                {product?.review_rating ? (
                  <a href="#reviews" data-scroll>
                    <div className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
                      <span className="me-2">{product?.review_rating}</span>
                      Reviews
                    </div>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="w-full d-flex justify-content-between align-items-center">
                <div className="price-view">
                  <FormattedPrice
                    price={product.sale_price}
                    className="h3 fw-normal text-accent me-3"
                  />
                  {product.price ? (
                    <del className="text-muted fs-lg me-3">
                      <FormattedPrice
                        price={product.price}
                        className="text-muted fs-lg me-3"
                      />
                    </del>
                  ) : (
                    ""
                  )}
                </div>
                <span className="badge bg-danger badge-shadow align-middle mt-n2 h-25">
                  Sale
                </span>
              </div>
              <FashionProductForm />
              <FashionProductInfo product={product} />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
