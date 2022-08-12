/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface FeaturedCategoryItemProps {
  content: {
    ProductImg: string;
    categoryName: string;
    productName: string;
    productPrice: string;
    productCent: string;
  }[];
}

export default function FeaturedCategoryItem({
  content,
}: FeaturedCategoryItemProps) {
  return (
    <>
      {content.map((item, index: number) => (
        <div key={index}>
          <div className="row mx-n2">
            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
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
                <Link
                  href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                  passHref
                >
                  <a className="card-img-top d-block overflow-hidden">
                    <img src={item.ProductImg} alt="Product" />
                  </a>
                </Link>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    {item.categoryName}
                  </a>
                  <h3 className="product-title fs-sm">
                    <Link
                      href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                      passHref
                    >
                      <a>{item.productName}</a>
                    </Link>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        ${item.productPrice}.<small>{item.productCent}</small>
                      </span>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-half active"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
