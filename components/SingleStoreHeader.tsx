/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function SingleStoreHeader() {
  return (
    <header className="navbar navbar-sticky navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" passHref>
          <a className="navbar-brand d-none d-sm-block me-4 order-lg-1">
            <img src="/img/logo-dark.png" width="142" alt="Bandicoot" />
          </a>
        </Link>
        <Link href="/" passHref>
          <a className="navbar-brand d-sm-none me-2 order-lg-1">
            <img src="/img/logo-icon.png" width="74" alt="Bandicoot" />
          </a>
        </Link>
        <div className="navbar-toolbar d-flex align-items-center order-lg-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a
            className="navbar-tool ms-1 me-n1"
            href="#signin-modal"
            data-bs-toggle="modal"
          >
            <span className="navbar-tool-tooltip">Account</span>
            <div className="navbar-tool-icon-box">
              <i className="navbar-tool-icon ci-user"></i>
            </div>
          </a>
          <div className="navbar-tool dropdown ms-3">
            <a
              className="navbar-tool-icon-box bg-secondary dropdown-toggle"
              href="#"
            >
              <i className="navbar-tool-icon ci-cart"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end text-center py-4 px-3">
              <div style={{ width: "16rem" }}>
                <img
                  className="d-inline-block mb-2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACcCAIAAAB3FTesAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMxMDBDQzcwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMDBDQzgwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkIwRDVENDBFMEYxMUVBOUM3QkM1MDNFRTIzMjEwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzEwMENDNjBFMTIxMUVBOUM3QkM1MDNFRTIzMjEwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk3kXrQAABTwSURBVHja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"
                  width="40"
                  alt="Empty cart"
                />
                <p className="fs-sm text-muted mb-0">
                  Your cart is currently empty
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="collapse navbar-collapse me-auto order-lg-2"
          id="navbarCollapse"
        >
          {/*<!-- Models dropdown-->*/}
          <ul className="navbar-nav navbar-mega-nav ms-lg-4 pe-lg-2 me-lg-2 pt-3 pt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ps-lg-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <i className="ci-view-grid me-2"></i>Models
              </a>
              <div className="dropdown-menu px-2 ps-0 pb-4">
                <div className="d-flex flex-wrap flex-sm-nowrap">
                  <div className="mega-dropdown-column pt-4 px-3">
                    <div className="widget mb-2">
                      <a className="d-block mb-3" href="#">
                        <img
                          src="/img/home/mono-product/models/01.jpg"
                          alt="Model image"
                        />
                      </a>
                      <h6 className="fs-base text-center mb-2">
                        Solo Headphones
                      </h6>
                    </div>
                  </div>
                  <div className="mega-dropdown-column pt-4 px-3">
                    <div className="widget mb-2">
                      <a className="d-block mb-3" href="#">
                        <img
                          src="/img/home/mono-product/models/02.jpg"
                          alt="Model image"
                        />
                      </a>
                      <h6 className="fs-base text-center mb-2">
                        Air Earphones
                      </h6>
                    </div>
                  </div>
                  <div className="mega-dropdown-column pt-4 px-3">
                    <div className="widget mb-2">
                      <a className="d-block mb-3" href="#">
                        <img
                          src="/img/home/mono-product/models/03.jpg"
                          alt="Model image"
                        />
                      </a>
                      <h6 className="fs-base text-center mb-2">
                        Headphones Pro
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*<!-- Primary menu-->*/}
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
                      <a className="d-block" style={{ width: "250px" }}>
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
                      <a className="d-block" style={{ width: "250px" }}>
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
                      <span className="d-block text-heading">Marketplace</span>
                      <small className="d-block text-muted">
                        Multi-vendor, digital goods
                      </small>
                    </a>
                  </Link>
                  <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                    <Link href="/home-marketplace" passHref>
                      <a className="d-block" style={{ width: "250px" }}>
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
                      <a className="d-block" style={{ width: "250px" }}>
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
                      <a className="d-block" style={{ width: "250px" }}>
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
                      <a className="d-block" style={{ width: "250px" }}>
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
                      <a className="d-block" style={{ width: "250px" }}>
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
                            <a className="widget-list-link">Category Page</a>
                          </Link>
                        </li>
                        <li className="widget-list-item">
                          <Link href="/marketplace-single" passHref>
                            <a className="widget-list-link">Single Item Page</a>
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
                            <a className="widget-list-link">Shop Categories</a>
                          </Link>
                        </li>
                        <li className="widget-list-item">
                          <Link
                            href="products/fashion/etch-ethos-hydrating-botanical-bloom-body-wash-1kg-refill?id=62e185c2c9f37b4c07a462f8"
                            passHref
                          >
                            <a className="widget-list-link">Product Page v.1</a>
                          </Link>
                        </li>
                        <li className="widget-list-item">
                          <Link href="/shop-single-v2" passHref>
                            <a className="widget-list-link">Product Page v.2</a>
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
                            <a className="widget-list-link">Order Tracking</a>
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
                            <a className="widget-list-link">Product Catalog</a>
                          </Link>
                        </li>
                        <li className="widget-list-item">
                          <Link href="/grocery-single" passHref>
                            <a className="widget-list-link">
                              Single Product Page
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
                            <a className="widget-list-link">Category Page</a>
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
                              Checkout (Address &amp; Payment)
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
                        <a className="dropdown-item">Article with Sidebar</a>
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
                  <a className="dropdown-item" href="/components/typography">
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
                          <span className="badge bg-success ms-2">v2.3.0</span>
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
                        <span className="d-block text-heading">Support</span>
                        <small className="d-block text-muted"></small>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
