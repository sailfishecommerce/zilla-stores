/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import CarouselWrapper from "./CarouselWrapper";

export default function FeaturedCategoryCarousel() {
  var settings = {
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
    navPosition: "bottom",
    mouseDrag: true,
    rewind: true,
    controlsContainer: "#hoodie-day",
    nav: false,
    speed: 500,
    loop: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
  };
  return (
    <div className="col-md-7 pt-4 pt-md-0">
      <div className="tns-carousel">
        <CarouselWrapper onClick={() => {}} settings={settings}>
          {/*<!-- Carousel item-->*/}
          <div>
            <div className="row mx-n2">
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/20.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $24.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/21.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $26.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                <div className="card product-card card-static">
                  <span className="badge badge-danger badge-shadow">Sale</span>
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
                      <img src="/img/shop/catalog/23.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $17.
                          <small>99</small>
                        </span>
                        <del className="fs-sm text-muted">
                          24.<small>99</small>
                        </del>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-half active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/51.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Mono Color Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $21.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <img src="/img/shop/catalog/24.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $24.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-half active"></i>
                        <i className="star-rating-icon ci-star"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                      <img src="/img/shop/catalog/54.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>

                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Mono Color Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $21.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Carousel item-->*/}
          <div>
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
                      <img src="/img/shop/catalog/53.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Mono Color Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $21.
                          <small>99</small>
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
                      <img src="/img/shop/catalog/52.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Printed Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $25.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-half active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/22.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $24.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/56.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Printed Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $25.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/55.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $24.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-half active"></i>
                        <i className="star-rating-icon ci-star"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <img src="/img/shop/catalog/57.jpg" alt="Product" />
                    </a>
                  </Link>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Hoodies &amp; Sweatshirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <Link
                        href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                        passHref
                      >
                        <a>Block-colored Hooded Top</a>
                      </Link>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $23.
                          <small>99</small>
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CarouselWrapper>
      </div>
    </div>
  );
}
