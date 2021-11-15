/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import MarketplaceLayout from "../layout/MarketplaceLayout";

const MarketplaceFeaturedProducts = dynamic(
  () => import("../component/Carousel/MarketplaceFeaturedProducts"),
  {
    ssr: false,
  }
);

const MonthSellerCarousel = dynamic(
  () => import("../component/Carousel/MonthSellerCarousel"),
  {
    ssr: false,
  }
);

const MarketplaceBlogPost = dynamic(
  () => import("../component/Carousel/MarketplaceBlogPost"),
  {
    ssr: false,
  }
);

export default function HomeMarketplace() {
  return (
    <MarketplaceLayout title="Home marketplace">
      <>
        {/*<!-- Hero section-->*/}
        <section
          className="bg-accent bg-position-top-center bg-repeat-0 py-5"
          style={{
            backgroundImage: "url(img/home/marketplace-hero.jpg)",
          }}
        >
          <div className="pb-lg-5 mb-lg-3">
            <div className="container py-lg-5 my-lg-5">
              <div className="row mb-4 mb-sm-5">
                <div className="col-lg-7 col-md-9 text-center text-sm-start">
                  <h1 className="text-white lh-base">
                    <span className="fw-light">Over</span> 1,500{" "}
                    <span className="fw-light">curated</span> Design{" "}
                    <span className="fw-light">resources</span>, Images, Graphic{" "}
                    <span className="fw-light">&amp;</span> Website{" "}
                    <span className="fw-light">templates</span>
                  </h1>
                  <h2 className="h5 text-white fw-light">
                    High quality items created by our global community
                  </h2>
                </div>
              </div>
              <div className="row pb-lg-5 mb-4 mb-sm-5">
                <div className="col-lg-6 col-md-8">
                  <div className="input-group input-group-lg flex-nowrap">
                    <i className="ci-search position-absolute top-50 translate-middle-y ms-3"></i>
                    <input
                      className="form-control rounded-start"
                      type="text"
                      placeholder="Start your search"
                    />
                    <button
                      className="btn btn-primary btn-lg dropdown-toggle fs-base"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      All categories
                    </button>
                    <div className="dropdown-menu dropdown-menu-end my-1">
                      <a className="dropdown-item" href="#">
                        Photos
                      </a>
                      <a className="dropdown-item" href="#">
                        Graphics
                      </a>
                      <a className="dropdown-item" href="#">
                        UI Design
                      </a>
                      <a className="dropdown-item" href="#">
                        Web Themes
                      </a>
                      <a className="dropdown-item" href="#">
                        Add-Ons
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Featured products (Carousel)-->*/}
        <MarketplaceFeaturedProducts />
        {/*<!-- Recent products grid-->*/}
        <section className="container pb-5 mb-lg-3">
          {/*<!-- Heading-->*/}
          <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
            <h2 className="h3 mb-0 pt-3 me-2">The most recent releases</h2>
            <div className="pt-3">
              <select className="form-select me-2">
                <option>All categories</option>
                <option>Photos</option>
                <option>Graphics</option>
                <option>UI Design</option>
                <option>Web Themes</option>
                <option>Fonts</option>
                <option>Add-Ons</option>
              </select>
            </div>
          </div>
          {/*<!-- Grid-->*/}
          <div className="row pt-2 mx-n2">
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              {/*<!-- Product-->*/}
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/01.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        Bandicoot Std.{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        UI Design
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-half active"></i>
                      <i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Square Style Mobile UI Kit (Sketch)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      153
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $24.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/04.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        Bandicoot Std.{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        Graphics
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Flat-line E-Commerce Icons (AI)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      26
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $18.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/09.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        pixels{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        UI Design
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Isometric Device Mockups (PSD)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      36
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $16.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/10.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        theDesigner{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        Graphics
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Coffe Paper Cup Mockup</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      57
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $10.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/06.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        Bandicoot Std.{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        Graphics
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Travel &amp; Landmark Icon Pack (AI)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      21
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $17.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/05.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        Bandicoot Std.{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        UI Design
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Minimal Mobile App UI Kit (Sketch)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      117
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $23.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/11.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        pixels{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        Graphics
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-half active"></i>
                      <i className="star-rating-icon ci-star"></i>
                      <i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Printed T-Shirt Mockup (PSD)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      94
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $12.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<!-- Product-->*/}
            <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart"></i>
                  </button>
                  <div className="product-card-actions">
                    <Link href="/marketplace-single" passHref>
                      <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                        <i className="ci-eye"></i>
                      </a>
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      type="button"
                    >
                      <i className="ci-cart"></i>
                    </button>
                  </div>
                  <Link href="/marketplace-single" passHref>
                    <a className="product-thumb-overlay"></a>
                  </Link>
                  <img src="/img/marketplace/products/12.jpg" alt="Product" />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">
                      by{" "}
                      <a className="product-meta fw-medium" href="#">
                        pixels{" "}
                      </a>
                      in{" "}
                      <a className="product-meta fw-medium" href="#">
                        Graphics
                      </a>
                    </div>
                    <div className="star-rating">
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star-filled active"></i>
                      <i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link href="/marketplace-single" passHref>
                      <a>Corporate Branding Mockup (PSD)</a>
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2">
                      <i className="ci-download text-muted me-1"></i>
                      122
                      <span className="fs-xs ms-1">Sales</span>
                    </div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      $18.<small>00</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- More button-->*/}
          <div className="text-center">
            <Link href="/marketplace-category" passHref>
              <a className="btn btn-outline-accent">
                View more products
                <i className="ci-arrow-right fs-ms ms-1"></i>
              </a>
            </Link>
          </div>
        </section>
        {/*<!-- Seller of the month-->*/}
        <section className="border-top py-5">
          <div className="container py-lg-2">
            <h2 className="h3 mb-3 pb-3 pb-lg-4 text-center text-lg-start">
              Seller of the month
            </h2>
            <div className="row">
              <div className="col-lg-4 text-center text-lg-start pb-3 pt-lg-2">
                <div className="d-inline-block text-start">
                  <div className="d-flex align-items-center pb-3">
                    <div
                      className="img-thumbnail rounded-circle flex-shrink-0"
                      style={{ width: "6.375rem" }}
                    >
                      <img
                        className="rounded-circle"
                        src="/img/marketplace/account/avatar.png"
                        alt="Bandicoot Studio"
                      />
                    </div>
                    <div className="ps-3">
                      <h3 className="fs-lg mb-0">Bandicoot Studio</h3>
                      <span className="d-block text-muted fs-ms pt-1 pb-2">
                        Member since November 2019
                      </span>
                      <Link href="/marketplace-vendor" passHref>
                        <a className="btn btn-primary btn-sm">View products</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <MonthSellerCarousel />
            </div>
          </div>
        </section>
        {/*<!-- Marketplace features-->*/}
        <section
          className="bg-accent bg-size-cover bg-position-center pt-5 pb-4 pb-lg-5"
          style={{
            backgroundImage: "url(img/marketplace/features/features-bg.jpg)",
          }}
        >
          <div className="container pt-lg-3">
            <h2 className="h3 mb-3 pb-4 text-light text-center">
              Why our marketplace?
            </h2>
            <div className="row pt-lg-2 text-center">
              <div className="col-lg-3 col-sm-6 mb-grid-gutter">
                <div className="d-inline-flex align-items-center text-start">
                  <img
                    src="/img/marketplace/features/quality.png"
                    width="52"
                    alt="Quality Guarantee"
                  />
                  <div className="ps-3">
                    <h6 className="text-light fs-base mb-1">
                      Quality Guarantee
                    </h6>
                    <p className="text-light fs-ms opacity-70 mb-0">
                      Quality checked by our team
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-grid-gutter">
                <div className="d-inline-flex align-items-center text-start">
                  <img
                    src="/img/marketplace/features/support.png"
                    width="52"
                    alt="Customer Support"
                  />
                  <div className="ps-3">
                    <h6 className="text-light fs-base mb-1">
                      Customer Support
                    </h6>
                    <p className="text-light fs-ms opacity-70 mb-0">
                      Friendly 24/7 customer support
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-grid-gutter">
                <div className="d-inline-flex align-items-center text-start">
                  <img
                    src="/img/marketplace/features/updates.png"
                    width="52"
                    alt="Free Updates"
                  />
                  <div className="ps-3">
                    <h6 className="text-light fs-base mb-1">
                      Lifetime Free Updates
                    </h6>
                    <p className="text-light fs-ms opacity-70 mb-0">
                      Never pay for an update
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-grid-gutter">
                <div className="d-inline-flex align-items-center text-start">
                  <img
                    src="/img/marketplace/features/secure.png"
                    width="52"
                    alt="Secure Payments"
                  />
                  <div className="ps-3">
                    <h6 className="text-light fs-base mb-1">Secure Payments</h6>
                    <p className="text-light fs-ms opacity-70 mb-0">
                      We posess SSL / Secure сertificate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Blog posts carousel-->*/}
        <section className="py-5">
          <div className="container py-lg-3">
            <h2 className="h3 text-center">From the blog</h2>
            <p className="text-muted text-center mb-3 pb-4">
              Latest marketplace news, success stories and tutorials
            </p>
            <MarketplaceBlogPost />
            {/*<!-- More button-->*/}
            <div className="text-center pt-4 mt-md-2">
              <Link href="/blog-grid-sidebar" passHref>
                <a className="btn btn-outline-accent">
                  Ream more posts
                  <i className="ci-arrow-right fs-ms ms-1"></i>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </>
    </MarketplaceLayout>
  );
}
