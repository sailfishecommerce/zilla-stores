/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import GroceryLayout from "../layout/GroceryLayout";

export default function HomeGroceryStore() {
  return (
    <GroceryLayout title="Home grocery stores">
      <>
        <section className="ps-lg-4 pe-lg-3 pt-4">
          <div className="px-3 pt-2">
            <section className="tns-carousel mb-3 mb-md-5">
              <div
                className="tns-carousel-inner"
                data-carousel-options='{"items": 1, "mode": "gallery", "nav": false, "responsive": {"0": {"nav": true, "controls": false}, "576": {"nav": false, "controls": true}}}'
              >
                {/*<!-- Slide 1-->*/}
                <div>
                  <div
                    className="rounded-3 px-md-5 text-center text-xl-start"
                    style={{ backgroundColor: "#59c879" }}
                  >
                    <div
                      className="d-xl-flex justify-content-between align-items-center px-4 px-sm-5 mx-auto"
                      style={{ maxWidth: "1226px" }}
                    >
                      <div
                        className="py-5 me-xl-4 mx-auto mx-xl-0"
                        style={{ maxWidth: "490px" }}
                      >
                        <h2 className="h1 text-light">
                          Fresh Foods a Click Away
                        </h2>
                        <p className="text-light pb-4">
                          Order any goods from our store online and we deliver
                          them to your door at a time convenient for you.
                        </p>
                        <h5 className="text-light pb-3">
                          On the go? Try our mobile app
                        </h5>
                        <div className="d-flex flex-wrap justify-content-center justify-content-xl-start">
                          <a
                            className="btn-market btn-apple me-2 mb-2"
                            href="#"
                            role="button"
                          >
                            <span className="btn-market-subtitle">
                              Download on the
                            </span>
                            <span className="btn-market-title">App Store</span>
                          </a>
                          <a
                            className="btn-market btn-google mb-2"
                            href="#"
                            role="button"
                          >
                            <span className="btn-market-subtitle">
                              Download on the
                            </span>
                            <span className="btn-market-title">
                              Google Play
                            </span>
                          </a>
                        </div>
                      </div>
                      <div>
                        <img
                          src="/img/grocery/slider/slide01.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- Slide 2-->*/}
                <div>
                  <div
                    className="rounded-3 px-md-5 text-center text-xl-start"
                    style={{ backgroundColor: "#1a6fb0" }}
                  >
                    <div
                      className="d-xl-flex justify-content-between align-items-center px-4 px-sm-5 mx-auto"
                      style={{ maxWidth: "1226px" }}
                    >
                      <div
                        className="py-5 me-xl-4 mx-auto mx-xl-0"
                        style={{ maxWidth: "490px" }}
                      >
                        <h2 className="h1 text-light">24/7 Delivery Service</h2>
                        <p className="text-light pb-4">
                          Order any goods from our store online and we deliver
                          them to your door at a time convenient for you.
                        </p>
                        <h5 className="text-light pb-3">
                          On the go? Try our mobile app
                        </h5>
                        <div className="d-flex flex-wrap justify-content-center justify-content-xl-start">
                          <a
                            className="btn-market btn-apple me-2 mb-2"
                            href="#"
                            role="button"
                          >
                            <span className="btn-market-subtitle">
                              Download on the
                            </span>
                            <span className="btn-market-title">App Store</span>
                          </a>
                          <a
                            className="btn-market btn-google mb-2"
                            href="#"
                            role="button"
                          >
                            <span className="btn-market-subtitle">
                              Download on the
                            </span>
                            <span className="btn-market-title">
                              Google Play
                            </span>
                          </a>
                        </div>
                      </div>
                      <div>
                        <img
                          src="/img/grocery/slider/slide02.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- How it works-->*/}
            <section className="pt-4 mb-4 mb-md-5">
              <h2 className="h3 text-center mb-grid-gutter pt-2">
                How it works?
              </h2>
              <div className="row g-0 bg-light rounded-3">
                <div className="col-xl-4 col-lg-12 col-md-4 border-end">
                  <div className="py-3">
                    <div
                      className="d-flex align-items-center mx-auto py-3 px-3"
                      style={{ maxWidth: "362px" }}
                    >
                      <div className="display-3 fw-normal opacity-15 me-4">
                        01
                      </div>
                      <div className="ps-2">
                        <img
                          className="d-block my-2"
                          src="/img/grocery/steps/01.png"
                          width="72"
                          alt="Order online"
                        />
                        <p className="mb-3 pt-1">
                          You order your favorite products online
                        </p>
                      </div>
                    </div>
                    <hr className="d-md-none d-lg-block d-xl-none" />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-4 border-end">
                  <div className="py-3">
                    <div
                      className="d-flex align-items-center mx-auto py-3 px-3"
                      style={{ maxWidth: "362px" }}
                    >
                      <div className="display-3 fw-normal opacity-15 me-4">
                        02
                      </div>
                      <div className="ps-2">
                        <img
                          className="d-block my-2"
                          src="/img/grocery/steps/02.png"
                          width="72"
                          alt="Grocery collected"
                        />
                        <p className="mb-3 pt-1">
                          A personal assistant collects the products from your
                          list
                        </p>
                      </div>
                    </div>
                    <hr className="d-md-none d-lg-block d-xl-none" />
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-4">
                  <div className="py-3">
                    <div
                      className="d-flex align-items-center mx-auto py-3 px-3"
                      style={{ maxWidth: "362px" }}
                    >
                      <div className="display-3 fw-normal opacity-15 me-4">
                        03
                      </div>
                      <div className="ps-2">
                        <img
                          className="d-block my-2"
                          src="/img/grocery/steps/03.png"
                          width="72"
                          alt="Delivery"
                        />
                        <p className="mb-3 pt-1">
                          We deliver to the door at a time convenient for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- Discounted products (Carousel)-->*/}
            <section className="pt-3 pt-md-4">
              {/*<!-- Heading-->*/}
              <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-3">Discounted products</h2>
                <div className="pt-3">
                  <Link href="/grocery-catalog" passHref>
                    <a className="btn btn-outline-accent btn-sm">
                      More products
                      <i className="ci-arrow-right ms-1 me-n1"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="tns-carousel tns-controls-static tns-controls-outside tns-nav-enabled pt-2">
                <div
                  className="tns-carousel-inner"
                  data-carousel-options='{"items": 2, "gutter": 16, "controls": true, "autoHeight": true, "responsive": {"0":{"items":1}, "480":{"items":2}, "720":{"items":3}, "991":{"items":2}, "1140":{"items":3}, "1300":{"items":4}, "1500":{"items":5}}}'
                >
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/01.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Fruits and Vegetables
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Coconut, Indonesia (piece)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $1.<small>99</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $2.<small>99</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/02.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Dairy and Eggs
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Soft Creme Cheese (200g)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $2.<small>99</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $3.<small>99</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/03.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Soft Drinks and Juice
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Pepsi Soda Can (.33ml)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $1.<small>00</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $1.<small>25</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/04.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Fruits and Vegetables
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Fresh Orange, Spain (1kg)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $1.<small>15</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $1.<small>75</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/05.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Personal hygiene
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Moisture Body Lotion (250ml)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $4.<small>20</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $5.<small>99</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/06.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Snacks, Sweets and Chips
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Nut Chocolate Paste (750g)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $6.<small>50</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $7.<small>99</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
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
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/07.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Dairy and Eggs
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Mozzarella Mini Cheese</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $3.<small>50</small>
                          </span>
                          <del className="fs-sm text-muted">
                            $4.<small>99</small>
                          </del>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- Bestsellers (Carousel)-->*/}
            <section className="pt-5 pb-4">
              {/*<!-- Heading-->*/}
              <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 me-3">Bestsellers</h2>
                <div className="pt-3">
                  <Link href="/grocery-catalog" passHref>
                    <a className="btn btn-outline-accent btn-sm">
                      More products
                      <i className="ci-arrow-right ms-1 me-n1"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="tns-carousel tns-controls-static tns-controls-outside tns-dots-enabled pt-2">
                <div
                  className="tns-carousel-inner"
                  data-carousel-options='{"items": 2, "gutter": 16, "controls": true, "autoHeight": true, "responsive": {"0":{"items":1}, "480":{"items":2}, "720":{"items":3}, "991":{"items":2}, "1140":{"items":3}, "1300":{"items":4}, "1500":{"items":5}}}'
                >
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/08.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Dairy and Eggs
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Mozzarella Cheese (125g)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $4.<small>30</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/09.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Personal hygiene
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Men’s Shampoo (400ml)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $5.<small>99</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/10.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Meat and Poultry
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Frozen Oven-ready Poultry</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $12.<small>00</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/11.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Snacks, Sweets and Chips
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Dark Chocolate with Nuts</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $2.<small>50</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/12.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Canned Food and Oil
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Corn Oil Bottle (500ml)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $3.<small>10</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/13.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Fish and Seafood
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Steak Salmon Fillet (1kg)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $17.<small>99</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Product-->*/}
                  <div>
                    <div className="card product-card card-static pb-3">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/grocery-single" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img
                            src="/img/grocery/catalog/14.jpg"
                            alt="Product"
                          />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Canned Food and Oil
                        </a>
                        <h3 className="product-title fs-sm text-truncate">
                          <Link href="/grocery-single" passHref>
                            <a>Sardine in Tomato Sauce (105g)</a>
                          </Link>
                        </h3>
                        <div className="product-price">
                          <span className="text-accent">
                            $3.<small>25</small>
                          </span>
                        </div>
                      </div>
                      <div className="product-floating-btn">
                        <button
                          className="btn btn-primary btn-shadow btn-sm"
                          type="button"
                        >
                          +<i className="ci-cart fs-base ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- Reviews-->*/}
            <section className="py-5 bg-light rounded-3 my-4 my-md-5 px-3 px-sm-4">
              <h2 className="h3 py-4 text-center">Customer reviews</h2>
              <div className="tns-carousel mb-3">
                <div
                  className="tns-carousel-inner"
                  data-carousel-options='{"items": 2, "gutter": 20, "controls": false, "autoplay": true, "autoplayTimeout": 5000, "responsive": {"0":{"items":1}, "576":{"items":2},"1200":{"items":3},"1560":{"items":4}}}'
                >
                  <blockquote className="mb-2">
                    <div className="card border-0">
                      <div className="card-body px-3 fs-md text-muted">
                        <div className="mb-2">
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star"></i>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, quia non consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua porro quisquam est.
                      </div>
                    </div>
                    <footer className="d-flex justify-content-center align-items-center pt-4">
                      <img
                        className="rounded-circle"
                        src="/img/testimonials/03.jpg"
                        width="50"
                        alt="Richard Davis"
                      />
                      <div className="ps-3">
                        <h6 className="fs-sm mb-n1">Richard Davis</h6>
                        <span className="fs-ms text-muted opacity-75">
                          Feb 14, 2020
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                  <blockquote className="mb-2">
                    <div className="card border-0">
                      <div className="card-body px-3 fs-md text-muted">
                        <div className="mb-2">
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, quia non consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua porro quisquam est.
                      </div>
                    </div>
                    <footer className="d-flex justify-content-center align-items-center pt-4">
                      <img
                        className="rounded-circle"
                        src="/img/testimonials/04.jpg"
                        width="50"
                        alt="Laura Willson"
                      />
                      <div className="ps-3">
                        <h6 className="fs-sm mb-n1">Laura Willson</h6>
                        <span className="fs-ms text-muted opacity-75">
                          Feb 05, 2020
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                  <blockquote className="mb-2">
                    <div className="card border-0">
                      <div className="card-body px-3 fs-md text-muted">
                        <div className="mb-2">
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star"></i>
                            <i className="star-rating-icon ci-star"></i>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, quia non consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua porro quisquam est.
                      </div>
                    </div>
                    <footer className="d-flex justify-content-center align-items-center pt-4">
                      <img
                        className="rounded-circle"
                        src="/img/testimonials/01.jpg"
                        width="50"
                        alt="Mary Grant"
                      />
                      <div className="ps-3">
                        <h6 className="fs-sm mb-n1">Mary Alice Grant</h6>
                        <span className="fs-ms text-muted opacity-75">
                          Jan 27, 2020
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                  <blockquote className="mb-2">
                    <div className="card border-0">
                      <div className="card-body px-3 fs-md text-muted">
                        <div className="mb-2">
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star"></i>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, quia non consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua porro quisquam est.
                      </div>
                    </div>
                    <footer className="d-flex justify-content-center align-items-center pt-4">
                      <img
                        className="rounded-circle"
                        src="/img/shop/reviews/01.jpg"
                        width="50"
                        alt="Rafael Marquez"
                      />
                      <div className="ps-3">
                        <h6 className="fs-sm mb-n1">Rafael Marquez</h6>
                        <span className="fs-ms text-muted opacity-75">
                          Dec 19, 2020
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                  <blockquote className="mb-2">
                    <div className="card border-0">
                      <div className="card-body px-3 fs-md text-muted">
                        <div className="mb-2">
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, quia non consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua porro quisquam est.
                      </div>
                    </div>
                    <footer className="d-flex justify-content-center align-items-center pt-4">
                      <img
                        className="rounded-circle"
                        src="/img/testimonials/02.jpg"
                        width="50"
                        alt="Adrian Lewis"
                      />
                      <div className="ps-3">
                        <h6 className="fs-sm mb-n1">Adrian Lewis</h6>
                        <span className="fs-ms text-muted opacity-75">
                          Dec 13, 2020
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                  <blockquote className="mb-2">
                    <div className="card border-0">
                      <div className="card-body px-3 fs-md text-muted">
                        <div className="mb-2">
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star"></i>
                            <i className="star-rating-icon ci-star"></i>
                          </div>
                        </div>
                        Lorem ipsum dolor sit amet, quia non consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua porro quisquam est.
                      </div>
                    </div>
                    <footer className="d-flex justify-content-center align-items-center pt-4">
                      <img
                        className="rounded-circle"
                        src="/img/shop/reviews/03.jpg"
                        width="50"
                        alt="Daniel Adams"
                      />
                      <div className="ps-3">
                        <h6 className="fs-sm mb-n1">Daniel Adams</h6>
                        <span className="fs-ms text-muted opacity-75">
                          Dec 04, 2020
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>
            <div className="pb-3"></div>
          </div>
        </section>
      </>
    </GroceryLayout>
  );
}
