/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import CarouselWrapper from "@/components/Carousel/CarouselWrapper";
import Logo from "@/components/Logo";

export default function FashionHeader() {
  const settings = {
    mode: "gallery",
    nav: false,
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
    loop: true,
    autoplay: false,
    speed: 500,
    controls: false,
    mouseDrag: true,
  };
  return (
    <header className="shadow-sm">
      <div className="topbar topbar-dark bg-dark">
        <div className="container">
          <div className="topbar-text dropdown d-md-none">
            <a
              className="topbar-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              Useful links
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/tel:00331697720">
                  <i className="ci-support text-muted me-2"></i>
                  (00) 33 169 7720
                </a>
              </li>
              <li>
                <Link href="/order-tracking" passHref>
                  <a className="dropdown-item">
                    <i className="ci-location text-muted me-2"></i>
                    Order tracking
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="topbar-text text-nowrap d-none d-md-inline-block">
            <i className="ci-support"></i>
            <span className="text-muted me-1">Support</span>
            <a className="topbar-link" href="/tel:00331697720">
              (00) 33 169 7720
            </a>
          </div>
          <div className="tns-carousel tns-controls-static d-none d-md-block">
            <CarouselWrapper onClick={() => {}} settings={settings}>
              <div className="topbar-text">
                Free shipping for order over $200
              </div>
              <div className="topbar-text">We return money within 30 days</div>
              <div className="topbar-text">Friendly 24/7 customer support</div>
            </CarouselWrapper>
          </div>
          <div className="ms-3 text-nowrap">
            <Link href="/order-tracking" passHref>
              <a className="topbar-link me-4 d-none d-md-inline-block">
                <i className="ci-location"></i>Order tracking
              </a>
            </Link>
            <div className="topbar-text dropdown disable-autohide">
              <a
                className="topbar-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  className="me-2"
                  src="/img/flags/en.png"
                  width="20"
                  alt="English"
                />
                Eng / $
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item">
                  <select className="form-select form-select-sm">
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="ukp">£ UKP</option>
                    <option value="jpy">¥ JPY</option>
                  </select>
                </li>
                <li>
                  <a className="dropdown-item pb-1" href="#">
                    <img
                      className="me-2"
                      src="/img/flags/fr.png"
                      width="20"
                      alt="Français"
                    />
                    Français
                  </a>
                </li>
                <li>
                  <a className="dropdown-item pb-1" href="#">
                    <img
                      className="me-2"
                      src="/img/flags/de.png"
                      width="20"
                      alt="Deutsch"
                    />
                    Deutsch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      className="me-2"
                      src="/img/flags/it.png"
                      width="20"
                      alt="Italiano"
                    />
                    Italiano
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->*/}
      <div className="navbar-sticky bg-light">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Logo />
            <div className="input-group d-none d-lg-flex mx-4">
              <input
                className="form-control rounded-end pe-5"
                type="text"
                placeholder="Search for products"
              />
              <i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
            </div>
            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-tool navbar-stuck-toggler" href="#">
                <span className="navbar-tool-tooltip">Expand menu</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-menu"></i>
                </div>
              </a>
              <Link href="/account-wishlist" passHref>
                <a className="navbar-tool d-none d-lg-flex">
                  <span className="navbar-tool-tooltip">Wishlist</span>
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon ci-heart"></i>
                  </div>
                </a>
              </Link>
              <a
                className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                href="#signin-modal"
                data-bs-toggle="modal"
              >
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-user"></i>
                </div>
                <div className="navbar-tool-text ms-n3">
                  <small>Hello, Sign in</small>My Account
                </div>
              </a>
              <div className="navbar-tool dropdown ms-3">
                <Link href="/shop-cart" passHref>
                  <a className="navbar-tool-icon-box bg-secondary dropdown-toggle">
                    <span className="navbar-tool-label">4</span>
                    <i className="navbar-tool-icon ci-cart"></i>
                  </a>
                </Link>
                <Link href="/shop-cart" passHref>
                  <a className="navbar-tool-text">
                    <small>My Cart</small>$265.00
                  </a>
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <div
                    className="widget widget-cart px-3 pt-2 pb-3"
                    style={{ width: "20rem" }}
                  >
                    <div
                      style={{ height: "15rem" }}
                      data-simplebar
                      data-simplebar-auto-hide="false"
                    >
                      <div className="widget-cart-item pb-2 border-bottom">
                        <button
                          className="btn-close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="d-flex align-items-center">
                          <Link href="/shop-single-v1" passHref>
                            <a className="flex-shrink-0">
                              <img
                                src="/img/shop/cart/widget/01.jpg"
                                width="64"
                                alt="Product"
                              />
                            </a>
                          </Link>
                          <div className="ps-2">
                            <h6 className="widget-product-title">
                              <Link href="/shop-single-v1" passHref>
                                <a>Women Colorblock Sneakers</a>
                              </Link>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent me-2">
                                $150.
                                <small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button
                          className="btn-close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="d-flex align-items-center">
                          <Link href="/shop-single-v1" passHref>
                            <a className="flex-shrink-0">
                              <img
                                src="/img/shop/cart/widget/02.jpg"
                                width="64"
                                alt="Product"
                              />
                            </a>
                          </Link>
                          <div className="ps-2">
                            <h6 className="widget-product-title">
                              <Link href="/shop-single-v1" passHref>
                                <a>TH Jeans City Backpack</a>
                              </Link>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent me-2">
                                $79.
                                <small>50</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button
                          className="btn-close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="d-flex align-items-center">
                          <Link href="/shop-single-v1" passHref>
                            <a className="flex-shrink-0">
                              <img
                                src="/img/shop/cart/widget/03.jpg"
                                width="64"
                                alt="Product"
                              />
                            </a>
                          </Link>
                          <div className="ps-2">
                            <h6 className="widget-product-title">
                              <Link href="/shop-single-v1" passHref>
                                <a>3-Color Sun Stash Hat</a>
                              </Link>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent me-2">
                                $22.
                                <small>50</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button
                          className="btn-close text-danger"
                          type="button"
                          aria-label="Remove"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="d-flex align-items-center">
                          <Link href="/shop-single-v1" passHref>
                            <a className="flex-shrink-0">
                              <img
                                src="/img/shop/cart/widget/04.jpg"
                                width="64"
                                alt="Product"
                              />
                            </a>
                          </Link>
                          <div className="ps-2">
                            <h6 className="widget-product-title">
                              <Link href="/shop-single-v1" passHref>
                                <a>Cotton Polo Regular Fit</a>
                              </Link>
                            </h6>
                            <div className="widget-product-meta">
                              <span className="text-accent me-2">
                                $9.
                                <small>00</small>
                              </span>
                              <span className="text-muted">x 1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div className="fs-sm me-2 py-2">
                        <span className="text-muted">Subtotal:</span>
                        <span className="text-accent fs-base ms-1">
                          $265.<small>00</small>
                        </span>
                      </div>
                      <Link href="/shop-cart" passHref>
                        <a className="btn btn-outline-secondary btn-sm">
                          Expand cart
                          <i className="ci-arrow-right ms-1 me-n1"></i>
                        </a>
                      </Link>
                    </div>
                    <Link href="/checkout-details" passHref>
                      <a className="btn btn-primary btn-sm d-block w-100">
                        <i className="ci-card me-2 fs-base align-middle"></i>
                        Checkout
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/*<!-- Search-->*/}
              <div className="input-group d-lg-none my-3">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                <input
                  className="form-control rounded-start"
                  type="text"
                  placeholder="Search for products"
                />
              </div>
              {/*<!-- Departments menu-->*/}
              <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle ps-lg-0"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ci-view-grid me-2"></i>
                    Departments
                  </a>
                  <div className="dropdown-menu px-2 pb-4">
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-3 mb-3"
                            href="#"
                          >
                            <img
                              src="/img/shop/departments/01.jpg"
                              alt="Clothing"
                            />
                          </a>
                          <h6 className="fs-base mb-2">Clothing</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Women clothing
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Men clothing
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Kid clothing
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-3 mb-3"
                            href="#"
                          >
                            <img
                              src="/img/shop/departments/02.jpg"
                              alt="Shoes"
                            />
                          </a>
                          <h6 className="fs-base mb-2">Shoes</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Women shoes
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Men shoes
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Kid shoes
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-3 mb-3"
                            href="#"
                          >
                            <img
                              src="/img/shop/departments/03.jpg"
                              alt="Gadgets"
                            />
                          </a>
                          <h6 className="fs-base mb-2">Gadgets</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Smartphones &amp; Tablets
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Wearable gadgets
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                E-book readers
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-3 mb-3"
                            href="#"
                          >
                            <img
                              src="/img/shop/departments/04.jpg"
                              alt="Furniture"
                            />
                          </a>
                          <h6 className="fs-base mb-2">
                            Furniture &amp; Decor
                          </h6>
                          <ul className="widget-list">
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Home furniture
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Office furniture
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Lighting and decoration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-3 mb-3"
                            href="#"
                          >
                            <img
                              src="/img/shop/departments/05.jpg"
                              alt="Accessories"
                            />
                          </a>
                          <h6 className="fs-base mb-2">Accessories</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Hats
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Sunglasses
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Bags
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <a
                            className="d-block overflow-hidden rounded-3 mb-3"
                            href="#"
                          >
                            <img
                              src="/img/shop/departments/06.jpg"
                              alt="Entertainment"
                            />
                          </a>
                          <h6 className="fs-base mb-2">Entertainment</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Kid toys
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Video games
                              </a>
                            </li>
                            <li className="widget-list-item mb-1">
                              <a className="widget-list-link" href="#">
                                Outdoor / Camping
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown active">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-fashion-store-v1" passHref>
                        <a className="dropdown-item py-2 border-bottom">
                          <span className="d-block text-heading">
                            Fashion Store v.1
                          </span>
                          <small className="d-block text-muted">
                            Classic shop layout
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-fashion-store-v1" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th01.jpg"
                              alt="Fashion Store v.1"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-electronics-store" passHref>
                        <a className="dropdown-item py-2 border-bottom">
                          <span className="d-block text-heading">
                            Electronics Store
                          </span>
                          <small className="d-block text-muted">
                            Slider + Promo banners
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-electronics-store" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th03.jpg"
                              alt="Electronics Store"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-marketplace" passHref>
                        <a className="dropdown-item py-2 border-bottom">
                          <span className="d-block text-heading">
                            Marketplace
                          </span>
                          <small className="d-block text-muted">
                            Multi-vendor, digital goods
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-marketplace" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th04.jpg"
                              alt="Marketplace"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-grocery-store" passHref>
                        <a className="dropdown-item py-2 border-bottom">
                          <span className="d-block text-heading">
                            Grocery Store
                          </span>
                          <small className="d-block text-muted">
                            Full width + Side menu
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-grocery-store" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th06.jpg"
                              alt="Grocery Store"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-food-delivery" passHref>
                        <a className="dropdown-item py-2 border-bottom">
                          <span className="d-block text-heading">
                            Food Delivery Service
                          </span>
                          <small className="d-block text-muted">
                            Food &amp; Beverages delivery
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-food-delivery" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th07.jpg"
                              alt="Food Delivery Service"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-fashion-store-v2" passHref>
                        <a className="dropdown-item py-2 border-bottom">
                          <span className="d-block text-heading">
                            Fashion Store v.2
                          </span>
                          <small className="d-block text-muted">
                            Slider + Featured categories
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-fashion-store-v2" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th02.jpg"
                              alt="Fashion Store v.2"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown position-static mb-0">
                      <Link href="/home-single-store" passHref>
                        <a className="dropdown-item py-2">
                          <span className="d-block text-heading">
                            Single Product Store
                          </span>
                          <small className="d-block text-muted">
                            Single product / mono brand
                          </small>
                        </a>
                      </Link>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                        <Link href="/home-single-store" passHref>
                          <a
                            className="d-block"
                            style={{
                              width: "250px",
                            }}
                          >
                            <img
                              src="/img/home/preview/th05.jpg"
                              alt="Single Product / Brand Store"
                            />
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                      <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div className="widget widget-links mb-4">
                          <h6 className="fs-base mb-3">Shop layouts</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <Link href="/shop-grid-ls" passHref>
                                <a className="widget-list-link">
                                  Shop Grid - Left Sidebar
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-grid-rs" passHref>
                                <a className="widget-list-link">
                                  Shop Grid - Right Sidebar
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-grid-ft" passHref>
                                <a className="widget-list-link">
                                  Shop Grid - Filters on Top
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-list-ls" passHref>
                                <a className="widget-list-link">
                                  Shop List - Left Sidebar
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-list-rs" passHref>
                                <a className="widget-list-link">
                                  Shop List - Right Sidebar
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-list-ft" passHref>
                                <a className="widget-list-link">
                                  Shop List - Filters on Top
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Marketplace</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <Link href="/marketplace-category" passHref>
                                <a className="widget-list-link">
                                  Category Page
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/marketplace-single" passHref>
                                <a className="widget-list-link">
                                  Single Item Page
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/marketplace-vendor" passHref>
                                <a className="widget-list-link">Vendor Page</a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/marketplace-cart" passHref>
                                <a className="widget-list-link">Cart</a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/marketplace-checkout" passHref>
                                <a className="widget-list-link">Checkout</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Shop pages</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <Link href="/shop-categories" passHref>
                                <a className="widget-list-link">
                                  Shop Categories
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-single-v1" passHref>
                                <a className="widget-list-link">
                                  Product Page v.1
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-single-v2" passHref>
                                <a className="widget-list-link">
                                  Product Page v.2
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/shop-cart" passHref>
                                <a className="widget-list-link">Cart</a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/checkout-details" passHref>
                                <a className="widget-list-link">
                                  Checkout - Details
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/checkout-shipping" passHref>
                                <a className="widget-list-link">
                                  Checkout - Shipping
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/checkout-payment" passHref>
                                <a className="widget-list-link">
                                  Checkout - Payment
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/checkout-review" passHref>
                                <a className="widget-list-link">
                                  Checkout - Review
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/checkout-complete" passHref>
                                <a className="widget-list-link">
                                  Checkout - Complete
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/order-tracking" passHref>
                                <a className="widget-list-link">
                                  Order Tracking
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/comparison" passHref>
                                <a className="widget-list-link">
                                  Product Comparison
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div className="widget widget-links mb-4">
                          <h6 className="fs-base mb-3">Grocery store</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <Link href="/grocery-catalog" passHref>
                                <a className="widget-list-link">
                                  Product Catalog
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/grocery-single" passHref>
                                <a className="widget-list-link">
                                  Single Product P age
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/grocery-checkout" passHref>
                                <a className="widget-list-link">Checkout</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Food Delivery</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item">
                              <Link href="/food-delivery-category" passHref>
                                <a className="widget-list-link">
                                  Category Page
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/food-delivery-single" passHref>
                                <a className="widget-list-link">
                                  Single Item (Restaurant)
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/food-delivery-cart" passHref>
                                <a className="widget-list-link">
                                  Cart (Your Order)
                                </a>
                              </Link>
                            </li>
                            <li className="widget-list-item">
                              <Link href="/food-delivery-checkout" passHref>
                                <a className="widget-list-link">
                                  Checkout (Ad dress &amp; Payment)
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Shop User Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/account-orders" passHref>
                            <a className="dropdown-item">Orders History</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account-profile" passHref>
                            <a className="dropdown-item">Profile Settings</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account-address" passHref>
                            <a className="dropdown-item">Account Addresses</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account-payment" passHref>
                            <a className="dropdown-item">Payment Methods</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account-wishlist" passHref>
                            <a className="dropdown-item">Wishlist</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account-tickets" passHref>
                            <a className="dropdown-item">My Tickets</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/account-single-ticket" passHref>
                            <a className="dropdown-item">Single Ticket</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Vendor Dashboard
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/dashboard-settings" passHref>
                            <a className="dropdown-item">Settings</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard-purchases" passHref>
                            <a className="dropdown-item">Purchases</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard-favorites" passHref>
                            <a className="dropdown-item">Favorites</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard-sales" passHref>
                            <a className="dropdown-item">Sales</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard-products" passHref>
                            <a className="dropdown-item">Products</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard-add-new-product" passHref>
                            <a className="dropdown-item">Add New Product</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/dashboard-payouts" passHref>
                            <a className="dropdown-item">Payouts</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/account-signin" passHref>
                        <a className="dropdown-item">Sign In / Sign Up</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account-password-recovery" passHref>
                        <a className="dropdown-item">Password Recovery</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Navbar Variants
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/navbar-1-level-light" passHref>
                            <a className="dropdown-item">1 Level Light</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/navbar-1-level-dark" passHref>
                            <a className="dropdown-item">1 Level Dark</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/navbar-2-level-light" passHref>
                            <a className="dropdown-item">2 Level Light</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/navbar-2-level-dark" passHref>
                            <a className="dropdown-item">2 Level Dark</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/navbar-3-level-light" passHref>
                            <a className="dropdown-item">3 Level Light</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/navbar-3-level-dark" passHref>
                            <a className="dropdown-item">3 Level Dark</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-electronics-store" passHref>
                            <a className="dropdown-item">Electronics Store</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-marketplace" passHref>
                            <a className="dropdown-item">Marketplace</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/home-grocery-store" passHref>
                            <a className="dropdown-item">Side Menu (Grocery)</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <Link href="/about" passHref>
                        <a className="dropdown-item">About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacts" passHref>
                        <a className="dropdown-item">Contacts</a>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Help Center
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/help-topics" passHref>
                            <a className="dropdown-item">Help Topics</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/help-single-topic" passHref>
                            <a className="dropdown-item">Single Topic</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/help-submit-request" passHref>
                            <a className="dropdown-item">Submit a Request</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        404 Not Found
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/404-simple" passHref>
                            <a className="dropdown-item">404 - Simple Text</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/404-illustration" passHref>
                            <a className="dropdown-item">404 - Illustration</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <Link href="/sticky-footer" passHref>
                        <a className="dropdown-item">Sticky Footer Demo</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Blog List Layouts
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/blog-list-sidebar" passHref>
                            <a className="dropdown-item">List with Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-list" passHref>
                            <a className="dropdown-item">List no Sidebar</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Blog Grid Layouts
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/blog-grid-sidebar" passHref>
                            <a className="dropdown-item">Grid with Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-grid" passHref>
                            <a className="dropdown-item">Grid no Sidebar</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Single Post Layouts
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/blog-single-sidebar" passHref>
                            <a className="dropdown-item">
                              Article with Sidebar
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-single" passHref>
                            <a className="dropdown-item">Article no Sidebar</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Docs / Components
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/docs/dev-setup">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="ci-book"></i>
                          </div>
                          <div className="ms-2">
                            <span className="d-block text-heading">
                              Documentation
                            </span>
                            <small className="d-block text-muted">
                              Kick-start customization
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/components/typography"
                      >
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="ci-server"></i>
                          </div>
                          <div className="ms-2">
                            <span className="d-block text-heading">
                              Components
                              <span className="badge bg-info ms-2">40+</span>
                            </span>
                            <small className="d-block text-muted">
                              Faster page building
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a className="dropdown-item" href="/docs/changelog">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="ci-edit"></i>
                          </div>
                          <div className="ms-2">
                            <span className="d-block text-heading">
                              Changelog
                              <span className="badge bg-success ms-2">
                                v2.3.0
                              </span>
                            </span>
                            <small className="d-block text-muted">
                              Regular updates
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/mailto:support@createx.studio"
                      >
                        <div className="d-flex">
                          <div className="lead text-muted pt-1">
                            <i className="ci-help"></i>
                          </div>
                          <div className="ms-2">
                            <span className="d-block text-heading">
                              Support
                            </span>
                            <small className="d-block text-muted">
                              support@createx.studio
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
