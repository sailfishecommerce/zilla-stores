/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import MarketplaceLayout from "../layout/MarketplaceLayout";

const MarketplaceRelatedProductsCarousel = dynamic(
  () => import("../components/Carousel/MarketplaceRelatedProductsCarousel"),
  {
    ssr: false,
  }
);

export default function MarketplaceSingle() {
  return (
    <MarketplaceLayout title="Market place single">
      <>
        <div className="page-title-overlap bg-accent pt-4">
          <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                  <li className="breadcrumb-item">
                    <Link href="/" passHref>
                      <a className="text-nowrap">
                        <i className="ci-home"></i>Home
                      </a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-nowrap">
                    <Link href="/marketplace-category" passHref>
                      <a>Market</a>
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Single Item
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 text-light mb-0">
                Isometric Device Mockups Bundle
              </h1>
            </div>
          </div>
        </div>
        {/*<!-- Shadow box-->*/}
        <section className="container mb-3 pb-3">
          <div className="bg-light shadow-lg rounded-3 overflow-hidden">
            <div className="row">
              {/*<!-- Content-->*/}
              <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-lg-3">
                <div className="pt-3 px-4 pe-lg-0 ps-xl-5">
                  {/*<!-- Product gallery-->*/}
                  <div className="gallery">
                    <a
                      className="gallery-item rounded-3 mb-grid-gutter"
                      href="/img/marketplace/single/01.jpg"
                      data-sub-html='&lt;h6 class="fs-sm text-light"&gt;Simple iPhone X Mockups&lt;/h6&gt;'
                    >
                      <img
                        src="/img/marketplace/single/01.jpg"
                        alt="Gallery preview"
                      />
                      <span className="gallery-item-caption">
                        Simple iPhone X Mockups
                      </span>
                    </a>
                    <div className="row">
                      <div className="col-sm-6">
                        <a
                          className="gallery-item rounded-3 mb-grid-gutter"
                          href="/img/marketplace/single/02.jpg"
                          data-sub-html='&lt;h6 class="fs-sm text-light"&gt;UI Psd iPhone X Monochrome&lt;/h6&gt;'
                        >
                          <img
                            src="/img/marketplace/single/02.jpg"
                            alt="Gallery preview"
                          />
                          <span className="gallery-item-caption">
                            UI Psd iPhone X Monochrome
                          </span>
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a
                          className="gallery-item rounded-3 mb-grid-gutter"
                          href="/img/marketplace/single/03.jpg"
                          data-sub-html='&lt;h6 class="fs-sm text-light"&gt;iPhone 11 Clay Mockup&lt;/h6&gt;'
                        >
                          <img
                            src="/img/marketplace/single/03.jpg"
                            alt="Gallery preview"
                          />
                          <span className="gallery-item-caption">
                            iPhone 11 Clay Mockup
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Wishlist + Sharing-->*/}
                  <div className="d-flex flex-wrap justify-content-between align-items-center border-top pt-3">
                    <div className="py-2 me-2">
                      <button className="btn btn-outline-accent" type="button">
                        <i className="ci-heart fs-lg me-2"></i>
                        Add to Favorites
                      </button>
                    </div>
                    <div className="py-2">
                      <i className="ci-share-alt fs-lg align-middle text-muted me-2"></i>
                      <a
                        className="btn-social bs-outline bs-facebook bs-sm ms-2"
                        href="#"
                      >
                        <i className="ci-facebook"></i>
                      </a>
                      <a
                        className="btn-social bs-outline bs-twitter bs-sm ms-2"
                        href="#"
                      >
                        <i className="ci-twitter"></i>
                      </a>
                      <a
                        className="btn-social bs-outline bs-pinterest bs-sm ms-2"
                        href="#"
                      >
                        <i className="ci-pinterest"></i>
                      </a>
                      <a
                        className="btn-social bs-outline bs-instagram bs-sm ms-2"
                        href="#"
                      >
                        <i className="ci-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              {/*<!-- Sidebar-->*/}
              <aside className="col-lg-4 ps-xl-5">
                <hr className="d-lg-none" />
                <div className="bg-white h-100 p-4 ms-auto border-start">
                  <div className="px-lg-2">
                    <div className="accordion accordion-flush" id="licenses">
                      <div className="accordion-item border-bottom">
                        <div className="accordion-header d-flex justify-content-between align-items-center py-3">
                          <div
                            className="form-check"
                            data-bs-toggle="collapse"
                            data-bs-target="#standard-license"
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="license"
                              id="license-std"
                              checked
                            />
                            <label
                              className="form-check-label fw-medium text-dark"
                              htmlFor="license-std"
                            >
                              Standard license
                            </label>
                          </div>
                          <h5 className="mb-0 text-accent fw-normal">
                            $18.<small>00</small>
                          </h5>
                        </div>
                        <div
                          className="accordion-collapse collapse show"
                          id="standard-license"
                          data-bs-parent="#licenses"
                        >
                          <div className="accordion-body py-0 pb-2">
                            <ul className="list-unstyled fs-sm">
                              <li className="d-flex align-items-center">
                                <i className="ci-check-circle text-success me-1"></i>
                                <span className="fs-ms">Quality verified</span>
                              </li>
                              <li className="d-flex align-items-center">
                                <i className="ci-check-circle text-success me-1"></i>
                                <span className="fs-ms">
                                  Use for a single project
                                </span>
                              </li>
                              <li className="d-flex align-items-center">
                                <i className="ci-check-circle text-success me-1"></i>
                                <span className="fs-ms">
                                  Non-paying users only
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header d-flex justify-content-between align-items-center py-3">
                          <div
                            className="form-check"
                            data-bs-toggle="collapse"
                            data-bs-target="#extended-license"
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="license"
                              id="license-ext"
                            />
                            <label
                              className="form-check-label fw-medium text-dark"
                              htmlFor="license-ext"
                            >
                              Extended license
                            </label>
                          </div>
                          <h5 className="mb-0 text-accent fw-normal">
                            $299.<small>00</small>
                          </h5>
                        </div>
                        <div
                          className="accordion-collapse collapse border-0"
                          id="extended-license"
                          data-bs-parent="#licenses"
                        >
                          <div className="accordion-body py-0 pb-2">
                            <ul className="list-unstyled fs-sm">
                              <li className="d-flex align-items-center">
                                <i className="ci-check-circle text-success me-1"></i>
                                <span className="fs-ms">Quality verified</span>
                              </li>
                              <li className="d-flex align-items-center">
                                <i className="ci-check-circle text-success me-1"></i>
                                <span className="fs-ms">
                                  Use for a single project
                                </span>
                              </li>
                              <li className="d-flex align-items-center">
                                <i className="ci-check-circle text-success me-1"></i>
                                <span className="fs-ms">
                                  Paying users allowed
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <button
                      className="btn btn-primary btn-shadow d-block w-100 mt-4"
                      type="button"
                    >
                      <i className="ci-cart fs-lg me-2"></i>
                      Add to Cart
                    </button>
                    <div className="bg-secondary rounded p-3 mt-4 mb-2">
                      <a className="d-flex align-items-center" href="#">
                        <img
                          className="rounded-circle"
                          src="/img/testimonials/01.jpg"
                          width="50"
                          alt="Sara Palson"
                        />
                        <div className="ps-2">
                          <span className="fs-ms text-muted">Created by</span>
                          <h6 className="fs-sm mb-0">Sara Palson</h6>
                        </div>
                      </a>
                    </div>
                    <div className="bg-secondary rounded p-3 mb-2">
                      <i className="ci-download h5 text-muted align-middle mb-0 mt-n1 me-2"></i>
                      <span className="d-inline-block h6 mb-0 me-1">715</span>
                      <span className="fs-sm">Sales</span>
                    </div>
                    <div className="bg-secondary rounded p-3 mb-4">
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                      <span className="fs-ms ms-2">4.1/5</span>
                      <div className="fs-ms text-muted">
                        based on 74 reviews
                      </div>
                    </div>
                    <ul className="list-unstyled fs-sm">
                      <li className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                        <span className="text-dark fw-medium">Last update</span>
                        <span className="text-muted">April 27, 2019</span>
                      </li>
                      <li className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                        <span className="text-dark fw-medium">Released</span>
                        <span className="text-muted">February 13, 2019</span>
                      </li>
                      <li className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                        <span className="text-dark fw-medium">Category</span>
                        <a className="product-meta" href="#">
                          Graphics
                        </a>
                      </li>
                      <li className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                        <span className="text-dark fw-medium">
                          Compatible with
                        </span>
                        <span className="text-muted">Photoshop CS5</span>
                      </li>
                      <li className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                        <span className="text-dark fw-medium">File type</span>
                        <span className="text-muted">PSD, JPG</span>
                      </li>
                      <li className="d-flex justify-content-between pb-3 border-bottom">
                        <span className="text-dark fw-medium">File size</span>
                        <span className="text-muted">56 MB</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {/*<!-- Product description + Reviews + Comments-->*/}
        <section className="container mb-4 mb-lg-5">
          {/*<!-- Nav tabs-->*/}
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link p-4 active"
                href="#details"
                data-bs-toggle="tab"
                role="tab"
              >
                Product details
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4"
                href="#reviews"
                data-bs-toggle="tab"
                role="tab"
              >
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link p-4"
                href="#comments"
                data-bs-toggle="tab"
                role="tab"
              >
                Comments
              </a>
            </li>
          </ul>
          <div className="tab-content pt-2">
            {/*<!-- Product details tab-->*/}
            <div
              className="tab-pane fade show active"
              id="details"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-lg-8">
                  <p className="fs-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h3 className="h5 pt-2">Main features</h3>
                  <ul className="fs-md">
                    <li>Nemo enim ipsam voluptatem quia voluptas sit</li>
                    <li>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                    </li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Omnis voluptas assumenda est omnis dolor</li>
                    <li>
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*<!-- Reviews tab-->*/}
            <div className="tab-pane fade" id="reviews" role="tabpanel">
              {/*<!-- Reviews-->*/}
              <div className="row pt-2 pb-3">
                <div className="col-lg-4 col-md-5">
                  <h3 className="h4 mb-4">74 Reviews</h3>
                  <div className="star-rating me-2">
                    <i className="ci-star-filled fs-sm text-accent me-1"></i>
                    <i className="ci-star-filled fs-sm text-accent me-1"></i>
                    <i className="ci-star-filled fs-sm text-accent me-1"></i>
                    <i className="ci-star-filled fs-sm text-accent me-1"></i>
                    <i className="ci-star fs-sm text-muted me-1"></i>
                  </div>
                  <span className="d-inline-block align-middle">
                    4.1 Overall rating
                  </span>
                  <p className="pt-3 fs-sm text-muted">
                    58 out of 74 (77%)
                    <br />
                    Customers recommended this product
                  </p>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-nowrap me-3">
                      <span className="d-inline-block align-middle text-muted">
                        5
                      </span>
                      <i className="ci-star-filled fs-xs ms-1"></i>
                    </div>
                    <div className="w-100">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <span className="text-muted ms-3">43</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-nowrap me-3">
                      <span className="d-inline-block align-middle text-muted">
                        4
                      </span>
                      <i className="ci-star-filled fs-xs ms-1"></i>
                    </div>
                    <div className="w-100">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "27%",
                            backgroundColor: "#a7e453",
                          }}
                          aria-valuenow={27}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <span className="text-muted ms-3">16</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-nowrap me-3">
                      <span className="d-inline-block align-middle text-muted">
                        3
                      </span>
                      <i className="ci-star-filled fs-xs ms-1"></i>
                    </div>
                    <div className="w-100">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "17%",
                            backgroundColor: "#ffda75",
                          }}
                          aria-valuenow={17}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <span className="text-muted ms-3">9</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-nowrap me-3">
                      <span className="d-inline-block align-middle text-muted">
                        2
                      </span>
                      <i className="ci-star-filled fs-xs ms-1"></i>
                    </div>
                    <div className="w-100">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{
                            width: "9%",
                            backgroundColor: "#fea569",
                          }}
                          aria-valuenow={9}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <span className="text-muted ms-3">4</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-nowrap me-3">
                      <span className="d-inline-block align-middle text-muted">
                        1
                      </span>
                      <i className="ci-star-filled fs-xs ms-1"></i>
                    </div>
                    <div className="w-100">
                      <div className="progress" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "4%" }}
                          aria-valuenow={4}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <span className="text-muted ms-3">2</span>
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-3" />
              <div className="row py-4">
                {/*<!-- Reviews list-->*/}
                <div className="col-md-7">
                  <div className="d-flex justify-content-end pb-4">
                    <div className="d-flex align-items-center flex-nowrap">
                      <label
                        className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block"
                        htmlFor="sort-reviews"
                      >
                        Sort by:
                      </label>
                      <select
                        className="form-select form-select-sm"
                        id="sort-reviews"
                      >
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Popular</option>
                        <option>High rating</option>
                        <option>Low rating</option>
                      </select>
                    </div>
                  </div>
                  {/*<!-- Review-->*/}
                  <div className="product-review pb-4 mb-4 border-bottom">
                    <div className="d-flex mb-3">
                      <div className="d-flex align-items-center me-4 pe-2">
                        <img
                          className="rounded-circle"
                          src="/img/shop/reviews/01.jpg"
                          width="50"
                          alt="Rafael Marquez"
                        />
                        <div className="ps-3">
                          <h6 className="fs-sm mb-0">Rafael Marquez</h6>
                          <span className="fs-ms text-muted">
                            June 28, 2019
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star"></i>
                        </div>
                        <div className="fs-ms text-muted">
                          83% of users found this review helpful
                        </div>
                      </div>
                    </div>
                    <p className="fs-md mb-2">
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est...
                    </p>
                    <ul className="list-unstyled fs-ms pt-1">
                      <li className="mb-1">
                        <span className="fw-medium">Pros:&nbsp;</span>
                        Consequuntur magni, voluptatem sequi, tempora
                      </li>
                      <li className="mb-1">
                        <span className="fw-medium">Cons:&nbsp;</span>
                        Architecto beatae, quis autem
                      </li>
                    </ul>
                    <div className="text-nowrap">
                      <button className="btn-like" type="button">
                        15
                      </button>
                      <button className="btn-dislike" type="button">
                        3
                      </button>
                    </div>
                  </div>
                  {/*<!-- Review-->*/}
                  <div className="product-review pb-4 mb-4 border-bottom">
                    <div className="d-flex mb-3">
                      <div className="d-flex align-items-center me-4 pe-2">
                        <img
                          className="rounded-circle"
                          src="/img/shop/reviews/02.jpg"
                          width="50"
                          alt="Barbara Palson"
                        />
                        <div className="ps-3">
                          <h6 className="fs-sm mb-0">Barbara Palson</h6>
                          <span className="fs-ms text-muted">May 17, 2019</span>
                        </div>
                      </div>
                      <div>
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                        </div>
                        <div className="fs-ms text-muted">
                          99% of users found this review helpful
                        </div>
                      </div>
                    </div>
                    <p className="fs-md mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul className="list-unstyled fs-ms pt-1">
                      <li className="mb-1">
                        <span className="fw-medium">Pros:&nbsp;</span>
                        Consequuntur magni, voluptatem sequi, tempora
                      </li>
                      <li className="mb-1">
                        <span className="fw-medium">Cons:&nbsp;</span>
                        Architecto beatae, quis autem
                      </li>
                    </ul>
                    <div className="text-nowrap">
                      <button className="btn-like" type="button">
                        34
                      </button>
                      <button className="btn-dislike" type="button">
                        1
                      </button>
                    </div>
                  </div>
                  {/*<!-- Review-->*/}
                  <div className="product-review pb-4 mb-4 border-bottom">
                    <div className="d-flex mb-3">
                      <div className="d-flex align-items-center me-4 pe-2">
                        <img
                          className="rounded-circle"
                          src="/img/shop/reviews/03.jpg"
                          width="50"
                          alt="Daniel Adams"
                        />
                        <div className="ps-3">
                          <h6 className="fs-sm mb-0">Daniel Adams</h6>
                          <span className="fs-ms text-muted">May 8, 2019</span>
                        </div>
                      </div>
                      <div>
                        <div className="star-rating">
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-filled active"></i>
                          <i className="star-rating-icon ci-star-half active"></i>
                          <i className="star-rating-icon ci-star"></i>
                        </div>
                        <div className="fs-ms text-muted">
                          75% of users found this review helpful
                        </div>
                      </div>
                    </div>
                    <p className="fs-md mb-2">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem.
                    </p>
                    <ul className="list-unstyled fs-ms pt-1">
                      <li className="mb-1">
                        <span className="fw-medium">Pros:&nbsp;</span>
                        Consequuntur magni, voluptatem sequi
                      </li>
                      <li className="mb-1">
                        <span className="fw-medium">Cons:&nbsp;</span>
                        Architecto beatae, quis autem, voluptatem sequ
                      </li>
                    </ul>
                    <div className="text-nowrap">
                      <button className="btn-like" type="button">
                        26
                      </button>
                      <button className="btn-dislike" type="button">
                        9
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-accent" type="button">
                      <i className="ci-reload me-2"></i>
                      Load more reviews
                    </button>
                  </div>
                </div>
                {/*<!-- Leave review form-->*/}
                <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
                  <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
                    <h3 className="h4 pb-2">Write a review</h3>
                    <form className="needs-validation" method="post" noValidate>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="review-name">
                          Your name
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          required
                          id="review-name"
                        />
                        <div className="invalid-feedback">
                          Please enter your name!
                        </div>
                        <small className="form-text text-muted">
                          Will be displayed on the comment.
                        </small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="review-email">
                          Your email
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          required
                          id="review-email"
                        />
                        <div className="invalid-feedback">
                          Please provide valid email address!
                        </div>
                        <small className="form-text text-muted">
                          Authentication only - we won&#39;t spam you.
                        </small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="review-rating">
                          Rating
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-select"
                          required
                          id="review-rating"
                        >
                          <option value="">Choose rating</option>
                          <option value="5">5 stars</option>
                          <option value="4">4 stars</option>
                          <option value="3">3 stars</option>
                          <option value="2">2 stars</option>
                          <option value="1">1 star</option>
                        </select>
                        <div className="invalid-feedback">
                          Please choose rating!
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="review-text">
                          Review
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={6}
                          required
                          id="review-text"
                        ></textarea>
                        <div className="invalid-feedback">
                          Please write a review!
                        </div>
                        <small className="form-text text-muted">
                          Your review must be at least 50 characters.
                        </small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="review-pros">
                          Pros
                        </label>
                        <textarea
                          className="form-control"
                          rows={2}
                          placeholder="Separated by commas"
                          id="review-pros"
                        ></textarea>
                      </div>
                      <div className="mb-3 mb-4">
                        <label className="form-label" htmlFor="review-cons">
                          Cons
                        </label>
                        <textarea
                          className="form-control"
                          rows={2}
                          placeholder="Separated by commas"
                          id="review-cons"
                        ></textarea>
                      </div>
                      <button
                        className="btn btn-primary btn-shadow d-block w-100"
                        type="submit"
                      >
                        Submit a Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Comments tab-->*/}
            <div className="tab-pane fade" id="comments" role="tabpanel">
              <div className="row">
                <div className="col-lg-8">
                  {/*<!-- comment-->*/}
                  <div className="d-flex align-items-start py-4 border-bottom">
                    <img
                      className="rounded-circle"
                      src="/img/testimonials/04.jpg"
                      width="50"
                      alt="Laura Willson"
                    />
                    <div className="ps-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="fs-md mb-0">Laura Willson</h6>
                        <a className="nav-link-style fs-sm fw-medium" href="#">
                          <i className="ci-reply me-2"></i>
                          Reply
                        </a>
                      </div>
                      <p className="fs-md mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat cupidatat non proident, sunt in culpa
                        qui.
                      </p>
                      <span className="fs-ms text-muted">
                        <i className="ci-time align-middle me-2"></i>
                        Sep 7, 2019
                      </span>
                      {/*<!-- comment reply-->*/}
                      <div className="d-flex align-items-start border-top pt-4 mt-4">
                        <img
                          className="rounded-circle"
                          src="/img/testimonials/01.jpg"
                          width="50"
                          alt="Sara Palson"
                        />
                        <div className="ps-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="fs-md mb-0">Sara Palson</h6>
                          </div>
                          <p className="fs-md mb-1">
                            Egestas sed sed risus pretium quam vulputate
                            dignissim. A diam sollicitudin tempor id eu nisl. Ut
                            porttitor leo a diam. Bibendum at varius vel
                            pharetra vel turpis nunc.
                          </p>
                          <span className="fs-ms text-muted">
                            <i className="ci-time align-middle me-2"></i>
                            Sep 13, 2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- comment-->*/}
                  <div className="d-flex align-items-start py-4">
                    <img
                      className="rounded-circle"
                      src="/img/testimonials/02.jpg"
                      width="50"
                      alt="Benjamin Miller"
                    />
                    <div className="ps-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="fs-md mb-0">Benjamin Miller</h6>
                        <a className="nav-link-style fs-sm fw-medium" href="#">
                          <i className="ci-reply me-2"></i>
                          Reply
                        </a>
                      </div>
                      <p className="fs-md mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat cupidatat non proident, sunt in culpa
                        qui.
                      </p>
                      <span className="fs-ms text-muted">
                        <i className="ci-time align-middle me-2"></i>
                        Aug 15, 2019
                      </span>
                    </div>
                  </div>
                  {/*<!-- Post comment form-->*/}
                  <div className="card border-0 shadow my-2">
                    <div className="card-body">
                      <div className="d-flex align-items-start">
                        <img
                          className="rounded-circle border p-2"
                          src="/img/marketplace/account/avatar-sm.png"
                          width="50"
                          alt="Bandicoot Studio"
                        />
                        <form
                          className="needs-validation w-100 ms-3"
                          noValidate
                        >
                          <div className="mb-3">
                            <textarea
                              className="form-control"
                              rows={4}
                              placeholder="Write comment..."
                              required
                            ></textarea>
                            <div className="invalid-feedback">
                              Please write your comment.
                            </div>
                          </div>
                          <button
                            className="btn btn-primary btn-sm"
                            type="submit"
                          >
                            Post comment
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Related products carousel-->*/}
        <section className="container mb-5 pb-lg-3">
          <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-4 mb-4">
            <h2 className="h3 mb-0 pt-2">Related mockups</h2>
            <div className="pt-2">
              <Link href="/marketplace-category" passHref>
                <a className="btn btn-outline-accent btn-sm">
                  More mockups
                  <i className="ci-arrow-end ms-1 me-n1"></i>
                </a>
              </Link>
            </div>
          </div>
          {/*<!-- Carousel-->*/}
          <MarketplaceRelatedProductsCarousel />
        </section>
      </>
    </MarketplaceLayout>
  );
}
