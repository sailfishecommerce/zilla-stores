/* eslint-disable @next/next/no-img-element */
import CarouselWrapper from "./CarouselWrapper";

export default function SingleShopProductCarousel1() {
  const productSettings = {
    items: 2,
    controls: true,
    nav: false,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2, gutter: 18 },
      "768": { items: 3, gutter: 20 },
      "1100": { items: 4, gutter: 30 },
    },
  };
  const reviewSettings = {
    items: 2,
    controls: true,
    nav: false,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2, gutter: 18 },
      "768": { items: 3, gutter: 20 },
      "1100": { items: 4, gutter: 30 },
    },
  };
  return (
    <>
      <div className="container pt-5">
        <h2 className="h3 text-center pb-4">Style with</h2>
        <div className="tns-carousel tns-controls-static tns-controls-outside">
          <CarouselWrapper onClick={() => {}} settings={productSettings}>
            <div
              className="tns-carousel-inner"
              data-carousel-options='{"items": 2, "controls": true, "nav": false, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"768":{"items":3, "gutter": 20}, "1100":{"items":4, "gutter": 30}}}'
            >
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
                    <img src="/img/shop/catalog/14.jpg" alt="Product" />
                  </a>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Men’s Jeans
                    </a>
                    <h3 className="product-title fs-sm">
                      <a href="#">Slim Taper Fit Jeans</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $58.<small>99</small>
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
              {/*<!-- Product-->*/}
              <div>
                <div className="card product-card card-static">
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
                  <a className="card-img-top d-block overflow-hidden" href="#">
                    <img src="/img/shop/catalog/17.jpg" alt="Product" />
                  </a>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Men’s T-shirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <a href="#">Cotton T-shirt Regular Fit</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price">
                        <span className="text-accent">
                          $9.<small>50</small>
                        </span>
                        <del className="fs-sm text-muted">
                          $11.<small>50</small>
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
                    <img src="/img/shop/catalog/18.jpg" alt="Product" />
                  </a>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Men’s Shoes
                    </a>
                    <h3 className="product-title fs-sm">
                      <a href="#">Men’s Leather Keds</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $64.<small>99</small>
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
                    <img src="/img/shop/catalog/19.jpg" alt="Product" />
                  </a>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Men’s T-shirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <a href="#">3 Color Collection of T-shirts</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $27.<small>99</small>
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
                    <img src="/img/shop/catalog/13.jpg" alt="Product" />
                  </a>
                  <div className="card-body py-2">
                    <a className="product-meta d-block fs-xs pb-1" href="#">
                      Men’s T-shirts
                    </a>
                    <h3 className="product-title fs-sm">
                      <a href="#">Cotton Polo Regular Fit</a>
                    </h3>
                    <div className="d-flex justify-content-between">
                      <div className="product-price text-accent">
                        $13.<small>50</small>
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
          </CarouselWrapper>
        </div>
      </div>
      {/*<!-- Product carousel (You may also like)-->*/}
      <div className="container py-5 my-md-3">
        <h2 className="h3 text-center pb-4">You may also like</h2>
        <div className="tns-carousel tns-controls-static tns-controls-outside">
          <CarouselWrapper onClick={() => {}} settings={reviewSettings}>
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
                  <img src="/img/shop/catalog/20.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Block-colored Hooded Top</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price">
                      <span className="text-accent">
                        $24.<small>99</small>
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
                  <img src="/img/shop/catalog/21.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Block-colored Hooded Top</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $26.<small>99</small>
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
                  <img src="/img/shop/catalog/22.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Block-colored Hooded Top</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $24.<small>99</small>
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
                  <img src="/img/shop/catalog/23.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Block-colored Hooded Top</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $24.<small>99</small>
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
                  <img src="/img/shop/catalog/24.jpg" alt="Product" />
                </a>
                <div className="card-body py-2">
                  <a className="product-meta d-block fs-xs pb-1" href="#">
                    Men’s Hoodie
                  </a>
                  <h3 className="product-title fs-sm">
                    <a href="#">Block-colored Hooded Top</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">
                      $25.<small>00</small>
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
          </CarouselWrapper>
        </div>
      </div>
    </>
  );
}
