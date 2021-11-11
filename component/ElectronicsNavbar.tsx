/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ElectronicsNavbar() {
    return (
        <header className="shadow-sm">
            <div className="topbar topbar-dark bg-dark">
                <div className="container">
                    <div>
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
                            <ul className="dropdown-menu my-1">
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
                        <div className="topbar-text text-nowrap d-none d-md-inline-block border-start border-light ps-3 ms-3">
                            <span className="text-muted me-1">
                                Available 24/7 at
                            </span>
                            <a className="topbar-link" href="/tel:00331697720">
                                (00) 33 169 7720
                            </a>
                        </div>
                    </div>
                    <div className="topbar-text dropdown d-md-none ms-auto">
                        <a
                            className="topbar-link dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            Wishlist / Compare / Track
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link href="/account-wishlist" passHref>
                                    <a className="dropdown-item">
                                        <i className="ci-heart text-muted me-2"></i>
                                        Wishlist (3)
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/comparison" passHref>
                                    <a className="dropdown-item">
                                        <i className="ci-compare text-muted me-2"></i>
                                        Compare (3)
                                    </a>
                                </Link>
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
                    <div className="d-none d-md-block ms-3 text-nowrap">
                        <Link href="/account-wishlist" passHref>
                            <a className="topbar-link d-none d-md-inline-block">
                                <i className="ci-heart mt-n1"></i>Wishlist (3)
                            </a>
                        </Link>
                        <Link href="/comparison" passHref>
                            <a className="topbar-link ms-3 ps-3 border-start border-light d-none d-md-inline-block">
                                <i className="ci-compare mt-n1"></i>Compare (3)
                            </a>
                        </Link>
                        <Link href="/order-tracking" passHref>
                            <a className="topbar-link ms-3 border-start border-light ps-3 d-none d-md-inline-block">
                                <i className="ci-location mt-n1"></i>Order
                                tracking
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            {/*<!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->*/}
            <div className="navbar-sticky bg-light">
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link href="/" passHref>
                            <a className="navbar-brand d-none d-sm-block me-3 flex-shrink-0">
                                <img
                                    src="/img/logo-dark.png"
                                    width="142"
                                    alt="Cartzilla"
                                />
                            </a>
                        </Link>
                        <Link href="/" passHref>
                            <a className="navbar-brand d-sm-none me-2">
                                <img
                                    src="/img/logo-icon.png"
                                    width="74"
                                    alt="Cartzilla"
                                />
                            </a>
                        </Link>
                        {/*<!-- Search-->*/}
                        <div className="input-group d-none d-lg-flex flex-nowrap mx-4">
                            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                            <input
                                className="form-control rounded-start w-100"
                                type="text"
                                placeholder="Search for products"
                            />
                            <select
                                className="form-select flex-shrink-0"
                                style={{ width: "10.5rem" }}
                            >
                                <option>All categories</option>
                                <option>Computers</option>
                                <option>Smartphones</option>
                                <option>TV, Video, Audio</option>
                                <option>Cameras</option>
                                <option>Headphones</option>
                                <option>Wearables</option>
                                <option>Printers</option>
                                <option>Video Games</option>
                                <option>Home Music</option>
                                <option>Data Storage</option>
                            </select>
                        </div>
                        {/*<!-- Toolbar-->*/}
                        <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a
                                className="navbar-tool navbar-stuck-toggler"
                                href="#"
                            >
                                <span className="navbar-tool-tooltip">
                                    Toggle menu
                                </span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-menu"></i>
                                </div>
                            </a>
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
                                        <span className="navbar-tool-label">
                                            4
                                        </span>
                                        <i className="navbar-tool-icon ci-cart"></i>
                                    </a>
                                </Link>
                                <Link href="/shop-cart" passHref>
                                    <a className="navbar-tool-text">
                                        <small>My Cart</small>$1,247.00
                                    </a>
                                </Link>
                                {/*<!-- Cart dropdown-->*/}
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
                                                    <span aria-hidden="true">
                                                        &times;
                                                    </span>
                                                </button>
                                                <div className="d-flex align-items-center">
                                                    <Link
                                                        href="/shop-single-v2"
                                                        passHref
                                                    >
                                                        <a className="d-block flex-shrink-0">
                                                            <img
                                                                src="/img/shop/cart/widget/05.jpg"
                                                                width="64"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <Link
                                                                href="/shop-single-v2"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Bluetooth
                                                                    Headphones
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $259.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                            <span className="text-muted">
                                                                x 1
                                                            </span>
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
                                                    <span aria-hidden="true">
                                                        &times;
                                                    </span>
                                                </button>
                                                <div className="d-flex align-items-center">
                                                    <Link
                                                        href="/shop-single-v2"
                                                        passHref
                                                    >
                                                        <a className="d-block flex-shrink-0">
                                                            <img
                                                                src="/img/shop/cart/widget/06.jpg"
                                                                width="64"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <Link
                                                                href="/shop-single-v2"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Cloud
                                                                    Security
                                                                    Camera
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $122.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                            <span className="text-muted">
                                                                x 1
                                                            </span>
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
                                                    <span aria-hidden="true">
                                                        &times;
                                                    </span>
                                                </button>
                                                <div className="d-flex align-items-center">
                                                    <Link
                                                        href="/shop-single-v2"
                                                        passHref
                                                    >
                                                        <a className="d-block flex-shrink-0">
                                                            <img
                                                                src="/img/shop/cart/widget/07.jpg"
                                                                width="64"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <Link
                                                                href="/shop-single-v2"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Android
                                                                    Smartphone
                                                                    S10
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $799.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                            <span className="text-muted">
                                                                x 1
                                                            </span>
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
                                                    <span aria-hidden="true">
                                                        &times;
                                                    </span>
                                                </button>
                                                <div className="d-flex align-items-center">
                                                    <Link
                                                        href="/shop-single-v2"
                                                        passHref
                                                    >
                                                        <a className="d-block flex-shrink-0">
                                                            <img
                                                                src="/img/shop/cart/widget/08.jpg"
                                                                width="64"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <Link
                                                                href="/shop-single-v2"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Android
                                                                    Smart TV Box
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $67.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                            <span className="text-muted">
                                                                x 1
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                            <div className="fs-sm me-2 py-2">
                                                <span className="text-muted">
                                                    Subtotal:
                                                </span>
                                                <span className="text-accent fs-base ms-1">
                                                    $1,247.<small>00</small>
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
                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse"
                        >
                            {/*<!-- Search-->*/}
                            <div className="input-group d-lg-none my-3">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
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
                                        data-bs-auto-close="outside"
                                    >
                                        <i className="ci-menu align-middle mt-n1 me-2"></i>
                                        Departments
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-laptop opacity-60 fs-lg mt-n1 me-2"></i>
                                                Computers &amp; Accessories
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Computers
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Laptops
                                                                        &amp;
                                                                        Tablets
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Desktop
                                                                        Computers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Computer
                                                                        External
                                                                        Components
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Computer
                                                                        Internal
                                                                        Components
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Networking
                                                                        Products
                                                                        (NAS)
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Single
                                                                        Board
                                                                        Computers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Desktop
                                                                        Barebones
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Accessories
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Monitors
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Bags,
                                                                        Cases
                                                                        &amp;
                                                                        Sleeves
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Batteries
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Charges
                                                                        &amp;
                                                                        Adapters
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cooling
                                                                        Pads
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Mounts
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Replacement
                                                                        Screens
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Security
                                                                        Locks
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Stands
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/07.jpg"
                                                                alt="Computers &amp; Accessories"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $149.
                                                                <small>
                                                                    80
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-mobile opacity-60 fs-lg mt-n1 me-2"></i>
                                                Smartphones &amp; Tablets
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links mb-3">
                                                            <h6 className="fs-base mb-3">
                                                                Smartphones
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Apple
                                                                        iPhone
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Android
                                                                        Smartphones
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Phablets
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base">
                                                                Tablets
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Apple
                                                                        iPad
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Android
                                                                        Tablets
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Tablets
                                                                        with
                                                                        Keyboard
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Accessories
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Accessory
                                                                        Kits
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Batteries
                                                                        &amp;
                                                                        Battery
                                                                        Packs
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cables
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Car
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Charges
                                                                        &amp;
                                                                        Power
                                                                        Adapters
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        FM
                                                                        Transmitters
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Lens
                                                                        Attachments
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Mounts
                                                                        &amp;
                                                                        Stands
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Repair
                                                                        Kits
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Replacement
                                                                        Parts
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Styluses
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/09.jpg"
                                                                alt="Smartphones &amp; Tablets"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $127.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-monitor opacity-60 fs-lg mt-n1 me-2"></i>
                                                TV, Video &amp; Audio
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Television &amp;
                                                                Video
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        TV Sets
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Home
                                                                        Theater
                                                                        Systems
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        DVD
                                                                        Players
                                                                        &amp;
                                                                        Recorders
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Blue-ray
                                                                        Players
                                                                        &amp;
                                                                        Recorders
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        HD DVD
                                                                        Players
                                                                        &amp;
                                                                        Recorders
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        DVD-VCR
                                                                        Combos
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        DTV
                                                                        Converters
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        AV
                                                                        Receivers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        AV
                                                                        Amplifiers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Projectors
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Projection
                                                                        Screens
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Satelite
                                                                        Television
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-0 pb-4 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        TV-DTD
                                                                        Combos
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Sound
                                                                        Systems
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Home
                                                                        Cinema
                                                                        Systems
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Streaming
                                                                        Media
                                                                        Players
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        VCRs
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Video
                                                                        Glasses
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Lens
                                                                        Attachments
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/08.jpg"
                                                                alt="TV, Video &amp; Audio"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $78.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-camera opacity-60 fs-lg mt-n1 me-2"></i>
                                                Cameras, Photo &amp; Video
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Cameras &amp;
                                                                Lenses
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Point
                                                                        &amp;
                                                                        Shoot
                                                                        Digital
                                                                        Cameras
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        DSLR
                                                                        Cameras
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Mirrorless
                                                                        Cameras
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Body
                                                                        Mounted
                                                                        Cameras
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Camcorders
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Camcorder
                                                                        Lenses
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Camera
                                                                        Lenses
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Macro
                                                                        &amp;
                                                                        Ringlight
                                                                        Flashes
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Shoe
                                                                        Mount
                                                                        Flashes
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Tripods
                                                                        &amp;
                                                                        Monopods
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Video
                                                                        Studio
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Accessories
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Bags
                                                                        &amp;
                                                                        Cases
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Binoculars
                                                                        &amp;
                                                                        Scopes
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Batteries
                                                                        &amp;
                                                                        Chargers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cables
                                                                        &amp;
                                                                        Cords
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Camcorder
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cleaning
                                                                        Equipment
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Protector
                                                                        Foils
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Filters
                                                                        &amp;
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Remote
                                                                        Controls
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Rain
                                                                        Covers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Viewfinders
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/10.jpg"
                                                                alt="Cameras, Photo &amp; Video"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $210.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-earphones opacity-60 fs-lg mt-n1 me-2"></i>
                                                Headphones
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Headphones
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Earbud
                                                                        Headphones
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Over-Ear
                                                                        Headphones
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        On-Ear
                                                                        Headphones
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Bluetooth
                                                                        Headphones
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Sports
                                                                        &amp;
                                                                        Fitness
                                                                        Headphones
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Noise-Cancelling
                                                                        Headphones
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Accessories
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cases
                                                                        &amp;
                                                                        Sleeves
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cables
                                                                        &amp;
                                                                        Cords
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Ear Pads
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Repair
                                                                        Kits
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Cleaning
                                                                        Equipment
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/11.jpg"
                                                                alt="Headphones"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $35.
                                                                <small>
                                                                    99
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-watch opacity-60 fs-lg mt-n1 me-2"></i>
                                                Wearable Electronics
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Gadgets
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Smartwatches
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Fitness
                                                                        Trackers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Smart
                                                                        Glasses
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Rings
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Virtual
                                                                        Reality
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Clips,
                                                                        Arm
                                                                        &amp;
                                                                        Wristbands
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/12.jpg"
                                                                alt="Wearable Electronics"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $79.
                                                                <small>
                                                                    50
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-printer opacity-60 fs-lg mt-n1 me-2"></i>
                                                Printers &amp; Ink
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links mb-3">
                                                            <h6 className="fs-base mb-3">
                                                                By type
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        All-in-One
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Copying
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Faxing
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Photo
                                                                        Printing
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Printing
                                                                        Only
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Scanning
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Scanners
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Business
                                                                        Card
                                                                        Scanners
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Document
                                                                        Scanners
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Flatbed
                                                                        &amp;
                                                                        Photo
                                                                        Scanners
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Slide
                                                                        &amp;
                                                                        Negative
                                                                        Scanners
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base">
                                                                Printers
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Dot
                                                                        Matrix
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Inkjet
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Label
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Laser
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Photo
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Wide
                                                                        Format
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Plotter
                                                                        Printers
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/13.jpg"
                                                                alt="Printers &amp; Ink"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $54.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-joystick opacity-60 fs-lg mt-n1 me-2"></i>
                                                Video Games
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Games &amp;
                                                                Hardware
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Video
                                                                        Games
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        PlayStation
                                                                        4
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        PlayStation
                                                                        3
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Xbox One
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Xbox 360
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Nintendo
                                                                        Switch
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Wii U
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Wii
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        PC
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Mac
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Nintendo
                                                                        3DS
                                                                        &amp;
                                                                        2DS
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Nintendo
                                                                        DS
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-0 pb-4 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        PlayStation
                                                                        Vita
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Sony PSP
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Retro
                                                                        Gaming
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Microconsoles
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Digital
                                                                        Games
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/14.jpg"
                                                                alt="Video Games"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $19.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-speaker opacity-60 fs-lg mt-n1 me-2"></i>
                                                Speakers &amp; Home Music
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Speakers
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Bluetooth
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Bookshelf
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Ceiling
                                                                        &amp;
                                                                        In-Wall
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Center-Channel
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Floorstanding
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Outdoor
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Satellite
                                                                        Speakers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Sound
                                                                        Bars
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Subwoofers
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Surround
                                                                        Sound
                                                                        Systems
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Home Audio
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Home
                                                                        Theater
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Wireless
                                                                        &amp;
                                                                        Streaming
                                                                        Audio
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Stereo
                                                                        System
                                                                        Components
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Compact
                                                                        Radios
                                                                        &amp;
                                                                        Stereos
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Home
                                                                        Audio
                                                                        Accessories
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/16.jpg"
                                                                alt="Speakers &amp; Home Music"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $43.
                                                                <small>
                                                                    00
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                <i className="ci-server opacity-60 fs-lg mt-n1 me-2"></i>
                                                HDD/SSD Data Storage
                                            </a>
                                            <div className="dropdown-menu p-0">
                                                <div className="d-flex flex-wrap flex-md-nowrap px-2">
                                                    <div className="mega-dropdown-column py-4 px-3">
                                                        <div className="widget widget-links">
                                                            <h6 className="fs-base mb-3">
                                                                Data Storage
                                                            </h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        External
                                                                        Hard
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        External
                                                                        Solid
                                                                        State
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        External
                                                                        Zip
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Floppy
                                                                        &amp;
                                                                        Tape
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Internal
                                                                        Hard
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Internal
                                                                        Solid
                                                                        State
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        Network
                                                                        Attached
                                                                        Storage
                                                                    </a>
                                                                </li>
                                                                <li className="widget-list-item pb-1">
                                                                    <a
                                                                        className="widget-list-link"
                                                                        href="#"
                                                                    >
                                                                        USB
                                                                        Flash
                                                                        Drives
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column d-none d-lg-block py-4 text-center">
                                                        <a
                                                            className="d-block mb-2"
                                                            href="#"
                                                        >
                                                            <img
                                                                src="/img/shop/departments/15.jpg"
                                                                alt="HDD/SSD Data Storage"
                                                            />
                                                        </a>
                                                        <div className="fs-sm mb-3">
                                                            Starting from{" "}
                                                            <span className="fw-medium">
                                                                $21.
                                                                <small>
                                                                    60
                                                                </small>
                                                            </span>
                                                        </div>
                                                        <a
                                                            className="btn btn-primary btn-shadow btn-sm"
                                                            href="#"
                                                        >
                                                            See offers
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/*<!-- Primary menu-->*/}
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
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
                                                <Link
                                                    href="/home-fashion-store-v1"
                                                    passHref
                                                >
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
                                            <Link
                                                href="/home-marketplace"
                                                passHref
                                            >
                                                <a className="dropdown-item py-2 border-bottom">
                                                    <span className="d-block text-heading">
                                                        Marketplace
                                                    </span>
                                                    <small className="d-block text-muted">
                                                        Multi-vendor, digital
                                                        goods
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
                                            <Link
                                                href="/home-fashion-store-v2"
                                                passHref
                                            >
                                                <a className="dropdown-item py-2 border-bottom">
                                                    <span className="d-block text-heading">
                                                        Fashion Store v.2
                                                    </span>
                                                    <small className="d-block text-muted">
                                                        Slider + Featured
                                                        categories
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
                                            <Link
                                                href="/home-single-store"
                                                passHref
                                            >
                                                <a className="dropdown-item py-2">
                                                    <span className="d-block text-heading">
                                                        Single Product Store
                                                    </span>
                                                    <small className="d-block text-muted">
                                                        Single product / mono
                                                        brand
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
                                <li className="nav-item dropdown active">
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
                                                            <Link
                                                                href="/shop-grid-ls"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Shop Grid -
                                                                    Left Sidebar
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
                                                                    Right
                                                                    Sidebar
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
                                                                    Filters on
                                                                    Top
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <Link
                                                                href="/shop-list-ls"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Shop List -
                                                                    Left Sidebar
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
                                                                    Right
                                                                    Sidebar
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
                                                                    Filters on
                                                                    Top
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
                                                                    Category
                                                                    Page
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <Link
                                                                href="/marketplace-single"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Single Item
                                                                    Page
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
                                                                    Shop
                                                                    Categories
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Product Page
                                                                    v.1
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <Link
                                                                href="/shop-single-v2"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Product Page
                                                                    v.2
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
                                                                    Order
                                                                    Tracking
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
                                                                    Product
                                                                    Catalog
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <Link
                                                                href="/grocery-single"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Single
                                                                    Product Pag
                                                                    e
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
                                                                    Category
                                                                    Page
                                                                </a>
                                                            </Link>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <Link
                                                                href="/food-delivery-single"
                                                                passHref
                                                            >
                                                                <a className="widget-list-link">
                                                                    Single Item
                                                                    (Restaurant)
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
                                                                    (Address
                                                                    &amp;
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
                                                href="#"
                                                data-bs-toggle="dropdown"
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
                                            <Link
                                                href="/account-signin"
                                                passHref
                                            >
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
                                                    <Link
                                                        href="/navbar-1-level-light"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            1 Level Light
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/navbar-1-level-dark"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            1 Level Dark
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/navbar-2-level-light"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            2 Level Light
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/navbar-2-level-dark"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            2 Level Dark
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/navbar-3-level-light"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            3 Level Light
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/navbar-3-level-dark"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            3 Level Dark
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/home-electronics-store"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Electronics Store
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/home-marketplace"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Marketplace
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/home-grocery-store"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Side Menu (Grocery)
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
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
                                                href="#"
                                                data-bs-toggle="dropdown"
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
                                                href="#"
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
                                        <li>
                                            <Link
                                                href="/sticky-footer"
                                                passHref
                                            >
                                                <a className="dropdown-item">
                                                    Sticky Footer Demo
                                                </a>
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
                                                href="/docs/dev-setup"
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
                                                            Kick-start
                                                            customization
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
                                                href="/docs/changelog"
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
