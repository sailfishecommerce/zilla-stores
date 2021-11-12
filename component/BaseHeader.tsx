/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function BaseHeader() {
    return (
        <header className="bg-light shadow-sm navbar-sticky">
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link href="/index" passHref>
                        <a className="navbar-brand d-none d-sm-block me-4 order-lg-1">
                            <img
                                src="/img/logo-dark.png"
                                width="142"
                                alt="Bandicoot"
                            />
                        </a>
                    </Link>
                    <Link href="/index" passHref>
                        <a className="navbar-brand d-sm-none me-2 order-lg-1">
                            <img
                                src="/img/logo-icon.png"
                                width="74"
                                alt="Bandicoot"
                            />
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
                            className="btn btn-primary btn-shadow"
                            href="/https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
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
                                <Link href="/" passHref>
                                    <a
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Home
                                    </a>
                                </Link>
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
                                            <Link
                                                href="/home-fashion-store-v1"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                        <Link
                                            href="/home-electronics-store"
                                            passHref
                                        >
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
                                            <Link
                                                href="/home-electronics-store"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                            <Link
                                                href="/home-marketplace"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                        <Link
                                            href="/home-grocery-store"
                                            passHref
                                        >
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
                                            <Link
                                                href="/home-grocery-store"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                        <Link
                                            href="/home-food-delivery"
                                            passHref
                                        >
                                            <a className="dropdown-item py-2 border-bottom">
                                                <span className="d-block text-heading">
                                                    Food Delivery Service
                                                </span>
                                                <small className="d-block text-muted">
                                                    Food &amp; Beverages
                                                    delivery
                                                </small>
                                            </a>
                                        </Link>
                                        <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                            <Link
                                                href="/home-food-delivery"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                        <Link
                                            href="/home-fashion-store-v2"
                                            passHref
                                        >
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
                                            <Link
                                                href="/home-fashion-store-v2"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                        <Link
                                            href="/home-single-store"
                                            passHref
                                        >
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
                                            <Link
                                                href="/home-single-store"
                                                passHref
                                            >
                                                <a
                                                    className="d-block"
                                                    style={{ width: "250px" }}
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
                                <Link href="#" passHref>
                                    <a
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Shop
                                    </a>
                                </Link>
                                <div className="dropdown-menu p-0">
                                    <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                        <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                                            <div className="widget widget-links mb-4">
                                                <h6 className="fs-base mb-3">
                                                    Shop layouts
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-grid-ls"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop Grid - Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-grid-rs"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop Grid -
                                                                Right Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-grid-ft"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop Grid -
                                                                Filters on Top
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-list-ls"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop List - Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-list-rs"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop List -
                                                                Right Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-list-ft"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop List -
                                                                Filters on Top
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-links">
                                                <h6 className="fs-base mb-3">
                                                    Marketplace
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/marketplace-category"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Category Page
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/marketplace-single"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Single Item Page
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/marketplace-vendor"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Vendor Page
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/marketplace-cart"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Cart
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/marketplace-checkout"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout
                                                            </a>
                                                        </Link>
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
                                                        <Link
                                                            href="/shop-categories"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Shop Categories
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-single-v1"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Product Page v.1
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-single-v2"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Product Page v.2
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/shop-cart"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Cart
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/checkout-details"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout -
                                                                Details
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/checkout-shipping"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout -
                                                                Shipping
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/checkout-payment"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout -
                                                                Payment
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/checkout-review"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout -
                                                                Review
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/checkout-complete"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout -
                                                                Complete
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/order-tracking"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Order Tracking
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/comparison"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Product
                                                                Comparison
                                                            </a>
                                                        </Link>
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
                                                        <Link
                                                            href="/grocery-catalog"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Product Catalog
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/grocery-single"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Single Product
                                                                Page
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/grocery-checkout"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="widget widget-links">
                                                <h6 className="fs-base mb-3">
                                                    Food Delivery
                                                </h6>
                                                <ul className="widget-list">
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/food-delivery-category"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Category Page
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/food-delivery-single"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Single Item (
                                                                Restaurant)
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/food-delivery-cart"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Cart (Your
                                                                Order)
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li className="widget-list-item">
                                                        <Link
                                                            href="/food-delivery-checkout"
                                                            passHref
                                                        >
                                                            <a className="widget-list-link">
                                                                Checkout
                                                                (Address &amp;
                                                                Payment)
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
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    data-bs-auto-close="outside"
                                >
                                    Account
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            href="#"
                                        >
                                            Shop User Account
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    href="/account-orders"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Orders History
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/account-profile"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Profile Settings
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/account-address"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Account Addresses
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/account-payment"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Payment Methods
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/account-wishlist"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Wishlist
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/account-tickets"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        My Tickets
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/account-single-ticket"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Single Ticket
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            href="#"
                                        >
                                            Vendor Dashboard
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    href="/dashboard-settings"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Settings
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard-purchases"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Purchases
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard-favorites"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Favorites
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard-sales"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Sales
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard-products"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Products
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard-add-new-product"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Add New Product
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/dashboard-payouts"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Payouts
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/account-signin" passHref>
                                            <a className="dropdown-item">
                                                Sign In / Sign Up
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/account-password-recovery"
                                            passHref
                                        >
                                            <a className="dropdown-item">
                                                Password Recovery
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    data-bs-auto-close="outside"
                                >
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-divider"></li>
                                    <li>
                                        <Link href="/about" passHref>
                                            <a className="dropdown-item">
                                                About Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contacts" passHref>
                                            <a className="dropdown-item">
                                                Contacts
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            href="#"
                                        >
                                            Help Center
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    href="/help-topics"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Help Topics
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/help-single-topic"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Single Topic
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/help-submit-request"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Submit a Request
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                        >
                                            404 Not Found
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link
                                                    href="/404-simple"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        404 - Simple Text
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/404-illustration"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        404 - Illustration
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-divider"></li>
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
                                                <Link
                                                    href="/blog-list-sidebar"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        List with Sidebar
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/blog-list"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        List no Sidebar
                                                    </a>
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
                                                <Link
                                                    href="/blog-grid-sidebar"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Grid with Sidebar
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/blog-grid"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Grid no Sidebar
                                                    </a>
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
                                                <Link
                                                    href="/blog-single-sidebar"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Article with Sidebar
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/blog-single"
                                                    passHref
                                                >
                                                    <a className="dropdown-item">
                                                        Article no Sidebar
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
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
