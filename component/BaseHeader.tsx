/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function BaseHeader() {
    return (
        <header className="bg-light shadow-sm navbar-sticky">
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a
                        className="navbar-brand d-none d-sm-block me-4 order-lg-1"
                        href="#index"
                    >
                        <img
                            src="/img/logo-dark.png"
                            width="142"
                            alt="Cartzilla"
                        />
                    </a>
                    <a
                        className="navbar-brand d-sm-none me-2 order-lg-1"
                        href="#index"
                    >
                        <img
                            src="/img/logo-icon.png"
                            width="74"
                            alt="Cartzilla"
                        />
                    </a>
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
                            className="btn btn-primary btn-shadow"
                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="ci-cart me-2"></i>Buy now
                        </a>
                    </div>
                    <div
                        className="collapse navbar-collapse me-auto order-lg-2"
                        id="navbarCollapse"
                    >
                        <hr className="my-3" />
                        Primary menu
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
                                        <Link
                                            href="/home-fashion-store-v1"
                                            passHref
                                        >
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
                                            <a
                                                className="d-block"
                                                href="#home-fashion-store-v1"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th01.jpg"
                                                    alt="Fashion Store v.1"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdown position-static mb-0">
                                        <a
                                            className="dropdown-item py-2 border-bottom"
                                            href="#home-electronics-store"
                                        >
                                            <span className="d-block text-heading">
                                                Electronics Store
                                            </span>
                                            <small className="d-block text-muted">
                                                Slider + Promo banners
                                            </small>
                                        </a>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <a
                                                className="d-block"
                                                href="#home-electronics-store"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th03.jpg"
                                                    alt="Electronics Store"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdown position-static mb-0">
                                        <a
                                            className="dropdown-item py-2 border-bottom"
                                            href="#home-marketplace"
                                        >
                                            <span className="d-block text-heading">
                                                Marketplace
                                            </span>
                                            <small className="d-block text-muted">
                                                Multi-vendor, digital goods
                                            </small>
                                        </a>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <a
                                                className="d-block"
                                                href="#home-marketplace"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th04.jpg"
                                                    alt="Marketplace"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdown position-static mb-0">
                                        <a
                                            className="dropdown-item py-2 border-bottom"
                                            href="#home-grocery-store"
                                        >
                                            <span className="d-block text-heading">
                                                Grocery Store
                                            </span>
                                            <small className="d-block text-muted">
                                                Full width + Side menu
                                            </small>
                                        </a>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <a
                                                className="d-block"
                                                href="#home-grocery-store"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th06.jpg"
                                                    alt="Grocery Store"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdown position-static mb-0">
                                        <a
                                            className="dropdown-item py-2 border-bottom"
                                            href="#home-food-delivery"
                                        >
                                            <span className="d-block text-heading">
                                                Food Delivery Service
                                            </span>
                                            <small className="d-block text-muted">
                                                Food &amp; Beverages delivery
                                            </small>
                                        </a>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <a
                                                className="d-block"
                                                href="#home-food-delivery"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th07.jpg"
                                                    alt="Food Delivery Service"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdown position-static mb-0">
                                        <a
                                            className="dropdown-item py-2 border-bottom"
                                            href="#home-fashion-store-v2"
                                        >
                                            <span className="d-block text-heading">
                                                Fashion Store v.2
                                            </span>
                                            <small className="d-block text-muted">
                                                Slider + Featured categories
                                            </small>
                                        </a>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <a
                                                className="d-block"
                                                href="#home-fashion-store-v2"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th02.jpg"
                                                    alt="Fashion Store v.2"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="dropdown position-static mb-0">
                                        <a
                                            className="dropdown-item py-2"
                                            href="#home-single-store"
                                        >
                                            <span className="d-block text-heading">
                                                Single Product Store
                                            </span>
                                            <small className="d-block text-muted">
                                                Single product / mono brand
                                            </small>
                                        </a>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <a
                                                className="d-block"
                                                href="#home-single-store"
                                                style={{ width: "250px" }}
                                            >
                                                <img
                                                    src="/img/home/preview/th05.jpg"
                                                    alt="Single Product / Brand Store"
                                                />
                                            </a>
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
                                                <h6 className="fs-base mb-3">
                                                    Shop layouts
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-grid-ls"
                                                        >
                                                            Shop Grid - Left
                                                            Sidebar
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-grid-rs"
                                                        >
                                                            Shop Grid - Right
                                                            Sidebar
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-grid-ft"
                                                        >
                                                            Shop Grid - Filters
                                                            on Top
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-list-ls"
                                                        >
                                                            Shop List - Left
                                                            Sidebar
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-list-rs"
                                                        >
                                                            Shop List - Right
                                                            Sidebar
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-list-ft"
                                                        >
                                                            Shop List - Filters
                                                            on Top
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-links">
                                                <h6 className="fs-base mb-3">
                                                    Marketplace
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#marketplace-category"
                                                        >
                                                            Category Page
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#marketplace-single"
                                                        >
                                                            Single Item Page
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#marketplace-vendor"
                                                        >
                                                            Vendor Page
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#marketplace-cart"
                                                        >
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#marketplace-checkout"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                            <div className="widget widget-links">
                                                <h6 className="fs-base mb-3">
                                                    Shop pages
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-categories"
                                                        >
                                                            Shop Categories
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-single-v1"
                                                        >
                                                            Product Page v.1
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-single-v2"
                                                        >
                                                            Product Page v.2
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#shop-cart"
                                                        >
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#checkout-details"
                                                        >
                                                            Checkout - Details
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#checkout-shipping"
                                                        >
                                                            Checkout - Shipping
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#checkout-payment"
                                                        >
                                                            Checkout - Payment
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#checkout-review"
                                                        >
                                                            Checkout - Review
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#checkout-complete"
                                                        >
                                                            Checkout - Complete
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#order-tracking"
                                                        >
                                                            Order Tracking
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#comparison"
                                                        >
                                                            Product Comparison
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                            <div className="widget widget-links mb-4">
                                                <h6 className="fs-base mb-3">
                                                    Grocery store
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#grocery-catalog"
                                                        >
                                                            Product Catalog
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#grocery-single"
                                                        >
                                                            Single Product Page
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#grocery-checkout"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-links">
                                                <h6 className="fs-base mb-3">
                                                    Food Delivery
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#food-delivery-category"
                                                        >
                                                            Category Page
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#food-delivery-single"
                                                        >
                                                            Single Item
                                                            (Restaurant)
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#food-delivery-cart"
                                                        >
                                                            Cart (Your Order)
                                                        </a>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <a
                                                            className="widget-list-link"
                                                            href="#food-delivery-checkout"
                                                        >
                                                            Checkout (Address
                                                            &amp; Payment)
                                                        </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-orders"
                                                >
                                                    Orders History
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-profile"
                                                >
                                                    Profile Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-address"
                                                >
                                                    Account Addresses
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-payment"
                                                >
                                                    Payment Methods
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-wishlist"
                                                >
                                                    Wishlist
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-tickets"
                                                >
                                                    My Tickets
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#account-single-ticket"
                                                >
                                                    Single Ticket
                                                </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-settings"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-purchases"
                                                >
                                                    Purchases
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-favorites"
                                                >
                                                    Favorites
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-sales"
                                                >
                                                    Sales
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-products"
                                                >
                                                    Products
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-add-new-product"
                                                >
                                                    Add New Product
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#dashboard-payouts"
                                                >
                                                    Payouts
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#account-signin"
                                        >
                                            Sign In / Sign Up
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#account-password-recovery"
                                        >
                                            Password Recovery
                                        </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#navbar-1-level-light"
                                                >
                                                    1 Level Light
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#navbar-1-level-dark"
                                                >
                                                    1 Level Dark
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#navbar-2-level-light"
                                                >
                                                    2 Level Light
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#navbar-2-level-dark"
                                                >
                                                    2 Level Dark
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#navbar-3-level-light"
                                                >
                                                    3 Level Light
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#navbar-3-level-dark"
                                                >
                                                    3 Level Dark
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#home-electronics-store"
                                                >
                                                    Electronics Store
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#home-marketplace"
                                                >
                                                    Marketplace
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#home-grocery-store"
                                                >
                                                    Side Menu (Grocery)
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#about"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#contacts"
                                        >
                                            Contacts
                                        </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#help-topics"
                                                >
                                                    Help Topics
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#help-single-topic"
                                                >
                                                    Single Topic
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#help-submit-request"
                                                >
                                                    Submit a Request
                                                </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#404-simple"
                                                >
                                                    404 - Simple Text
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#404-illustration"
                                                >
                                                    404 - Illustration
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="#sticky-footer"
                                        >
                                            Sticky Footer Demo
                                        </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#blog-list-sidebar"
                                                >
                                                    List with Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#blog-list"
                                                >
                                                    List no Sidebar
                                                </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#blog-grid-sidebar"
                                                >
                                                    Grid with Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#blog-grid"
                                                >
                                                    Grid no Sidebar
                                                </a>
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
                                                <a
                                                    className="dropdown-item"
                                                    href="#blog-single-sidebar"
                                                >
                                                    Article with Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#blog-single"
                                                >
                                                    Article no Sidebar
                                                </a>
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
                                        <a
                                            className="dropdown-item"
                                            href="#docs/dev-setup"
                                        >
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
                                            href="#components/typography"
                                        >
                                            <div className="d-flex">
                                                <div className="lead text-muted pt-1">
                                                    <i className="ci-server"></i>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="d-block text-heading">
                                                        Components
                                                        <span className="badge bg-info ms-2">
                                                            40+
                                                        </span>
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
                                        <a
                                            className="dropdown-item"
                                            href="#docs/changelog"
                                        >
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
                                            href="#mailto:support@createx.studio"
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
        </header>
    );
}
