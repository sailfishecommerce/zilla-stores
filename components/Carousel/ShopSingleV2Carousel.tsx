/* eslint-disable @next/next/no-img-element */
import CarouselWrapper from "./CarouselWrapper";

export default function ShopSingleV2Carousel() {
  const otherProductSettings = {
    items: 2,
    controls: true,
    nav: false,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2, gutter: 18 },
      "768": { items: 3, gutter: 20 },
      "1100": { items: 4, gutter: 30 },
    },
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
  };

  const productSettings = {
    items: 1,
    controls: false,
    nav: true,
  };
  return (
    <>
      <div className="container pt-lg-2 pb-5 mb-md-3">
        <h2 className="h3 text-center pb-4">You may also like</h2>
        <div className="tns-carousegle l tns-controls-static tns-controls-outside">
          <CarouselWrapper onClick={() => {}} settings={otherProductSettings}>
            {/*<!-- Product-->*/}
            <div>
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
                <a className="card-img-top d-block overflow-hidden" href="#">
                  <img src="/img/shop/catalog/66.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Smartwatches
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Health &amp; Fitness Smartwatch</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $250.<small>00</small>
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
            {/*<!-- Product--> */}
            <div>
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
                <a className="card-img-top d-block overflow-hidden" href="#">
                  <img src="/img/shop/catalog/67.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Smartwatches
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Heart Rate &amp; Activity Tracker</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $26.<small>99</small>
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
            {/*<!-- Product-->*/}
            <div>
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
                <a className="card-img-top d-block overflow-hidden" href="#">
                  <img src="/img/shop/catalog/64.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Smartwatches
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Smart Watch Series 5, Aluminium</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $349.<small>99</small>
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
            {/*<!-- Product-->*/}
            <div>
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
                <a className="card-img-top d-block overflow-hidden" href="#">
                  <img src="/img/shop/catalog/68.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Smartwatches
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Health &amp; Fitness Smartwatch</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $118.<small>00</small>
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
            {/*<!-- Product-->*/}
            <div>
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
                <a className="card-img-top d-block overflow-hidden" href="#">
                  <img src="/img/shop/catalog/69.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Smartwatches
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Heart Rate &amp; Activity Tracker</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $25.<small>00</small>
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
          </CarouselWrapper>
        </div>
      </div>
      {/*<!-- Product bundles carousel (Cheaper together)-->*/}
      <div className="container pt-lg-1 pb-5 mb-md-3">
        <div className="card card-body pt-5">
          <h2 className="h3 text-center pb-4">Cheaper together</h2>
          <div className="tns-carousel">
            <CarouselWrapper onClick={() => {}} settings={productSettings}>
              <div>
                <div className="row align-items-center">
                  <div className="col-md-3 col-sm-5">
                    <div
                      className="card product-card card-static text-center mx-auto"
                      style={{
                        maxWidth: "20rem",
                      }}
                    >
                      <a
                        className="card-img-top d-block overflow-hidden"
                        href="#"
                      >
                        <img src="/img/shop/catalog/70.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <span className="d-inline-block bg-secondary fs-ms rounded-1 py-1 px-2 mb-3">
                          Your product
                        </span>
                        <h3 className="product-title fs-sm">
                          <a href="#">Smartwatch Youth Edition</a>
                        </h3>
                        <div className="product-price text-accent">
                          $124.
                          <small>99</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-2 text-center">
                    <div className="display-4 fw-light text-muted px-4">+</div>
                  </div>
                  <div className="col-md-3 col-sm-5">
                    <div
                      className="card product-card card-static text-center mx-auto"
                      style={{
                        maxWidth: "20rem",
                      }}
                    >
                      <a
                        className="card-img-top d-block overflow-hidden"
                        href="#"
                      >
                        <img src="/img/shop/catalog/72.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">
                          -20%
                        </span>
                        <h3 className="product-title fs-sm">
                          <a href="#">Smartwatch Wireless Charger</a>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $16.
                            <small>00</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $20.
                            <small>00</small>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block col-md-1 text-center">
                    <div className="display-4 fw-light text-muted px-4">=</div>
                  </div>
                  <div className="col-md-4 pt-3 pt-md-0">
                    <div
                      className="bg-secondary p-4 rounded-3 text-center mx-auto"
                      style={{
                        maxWidth: "20rem",
                      }}
                    >
                      <div className="h3 fw-normal text-accent mb-3 me-1">
                        $140.<small>99</small>
                      </div>
                      <button className="btn btn-primary" type="button">
                        Purchase together
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row align-items-center">
                  <div className="col-md-3 col-sm-5">
                    <div
                      className="card product-card card-static text-center mx-auto"
                      style={{
                        maxWidth: "20rem",
                      }}
                    >
                      <a
                        className="card-img-top d-block overflow-hidden"
                        href="#"
                      >
                        <img src="/img/shop/catalog/70.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <span className="d-inline-block bg-secondary fs-ms rounded-1 py-1 px-2 mb-3">
                          Your product
                        </span>
                        <h3 className="product-title fs-sm">
                          <a href="#">Smartwatch Youth Edition</a>
                        </h3>
                        <div className="product-price text-accent">
                          $124.
                          <small>99</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-2 text-center">
                    <div className="display-4 fw-light text-muted px-4">+</div>
                  </div>
                  <div className="col-md-3 col-sm-5">
                    <div
                      className="card product-card card-static text-center mx-auto"
                      style={{
                        maxWidth: "20rem",
                      }}
                    >
                      <a
                        className="card-img-top d-block overflow-hidden"
                        href="#"
                      >
                        <img src="/img/shop/catalog/71.jpg" alt="Product" />
                      </a>
                      <div className="card-body py-2">
                        <span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">
                          -15%
                        </span>
                        <h3 className="product-title fs-sm">
                          <a href="#">Bluetooth Headset Air (White)</a>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $59.
                            <small>00</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $69.
                            <small>00</small>
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block col-md-1 text-center">
                    <div className="display-4 fw-light text-muted px-4">=</div>
                  </div>
                  <div className="col-md-4 pt-3 pt-md-0">
                    <div
                      className="bg-secondary p-4 rounded-3 text-center mx-auto"
                      style={{
                        maxWidth: "20rem",
                      }}
                    >
                      <div className="h3 fw-normal text-accent mb-3 me-1">
                        $183.<small>99</small>
                      </div>
                      <button className="btn btn-primary" type="button">
                        Purchase together
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
