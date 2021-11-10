/* eslint-disable @next/next/no-img-element */
//<!-- Topbar-->
export default function FashionHeader() {
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
                                <a
                                    className="dropdown-item"
                                    href="tel:00331697720"
                                >
                                    <i className="ci-support text-muted me-2"></i>
                                    (00) 33 169 7720
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="order-tracking.html"
                                >
                                    <i className="ci-location text-muted me-2"></i>
                                    Order tracking
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="topbar-text text-nowrap d-none d-md-inline-block">
                        <i className="ci-support"></i>
                        <span className="text-muted me-1">Support</span>
                        <a className="topbar-link" href="tel:00331697720">
                            (00) 33 169 7720
                        </a>
                    </div>
                    <div className="tns-carousel tns-controls-static d-none d-md-block">
                        <div
                            className="tns-carousel-inner"
                            data-carousel-options='{"mode": "gallery", "nav": false}'
                        >
                            <div className="topbar-text">
                                Free shipping for order over $200
                            </div>
                            <div className="topbar-text">
                                We return money within 30 days
                            </div>
                            <div className="topbar-text">
                                Friendly 24/7 customer support
                            </div>
                        </div>
                    </div>
                    <div className="ms-3 text-nowrap">
                        <a
                            className="topbar-link me-4 d-none d-md-inline-block"
                            href="order-tracking.html"
                        >
                            <i className="ci-location"></i>Order tracking
                        </a>
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
                        <a
                            className="navbar-brand d-none d-sm-block flex-shrink-0"
                            href="index.html"
                        >
                            <img
                                src="/img/logo-dark.png"
                                width="142"
                                alt="Cartzilla"
                            />
                        </a>
                        <a
                            className="navbar-brand d-sm-none flex-shrink-0 me-2"
                            href="index.html"
                        >
                            <img
                                src="/img/logo-icon.png"
                                width="74"
                                alt="Cartzilla"
                            />
                        </a>
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
                            <a
                                className="navbar-tool navbar-stuck-toggler"
                                href="#"
                            >
                                <span className="navbar-tool-tooltip">
                                    Expand menu
                                </span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-menu"></i>
                                </div>
                            </a>
                            <a
                                className="navbar-tool d-none d-lg-flex"
                                href="account-wishlist.html"
                            >
                                <span className="navbar-tool-tooltip">
                                    Wishlist
                                </span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-heart"></i>
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
                                <a
                                    className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                                    href="shop-cart.html"
                                >
                                    <span className="navbar-tool-label">4</span>
                                    <i className="navbar-tool-icon ci-cart"></i>
                                </a>
                                <a
                                    className="navbar-tool-text"
                                    href="shop-cart.html"
                                >
                                    <small>My Cart</small>$265.00
                                </a>
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
                                                    <a
                                                        className="flex-shrink-0"
                                                        href="shop-single-v1.html"
                                                    >
                                                        <img
                                                            src="/img/shop/cart/widget/01.jpg"
                                                            width="64"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <a href="shop-single-v1.html">
                                                                Women Colorblock
                                                                Sneakers
                                                            </a>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $150.
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
                                                    <a
                                                        className="flex-shrink-0"
                                                        href="shop-single-v1.html"
                                                    >
                                                        <img
                                                            src="/img/shop/cart/widget/02.jpg"
                                                            width="64"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <a href="shop-single-v1.html">
                                                                TH Jeans City
                                                                Backpack
                                                            </a>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $79.
                                                                <small>
                                                                    50
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
                                                    <a
                                                        className="flex-shrink-0"
                                                        href="shop-single-v1.html"
                                                    >
                                                        <img
                                                            src="/img/shop/cart/widget/03.jpg"
                                                            width="64"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <a href="shop-single-v1.html">
                                                                3-Color Sun
                                                                Stash Hat
                                                            </a>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $22.
                                                                <small>
                                                                    50
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
                                                    <a
                                                        className="flex-shrink-0"
                                                        href="shop-single-v1.html"
                                                    >
                                                        <img
                                                            src="/img/shop/cart/widget/04.jpg"
                                                            width="64"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <div className="ps-2">
                                                        <h6 className="widget-product-title">
                                                            <a href="shop-single-v1.html">
                                                                Cotton Polo
                                                                Regular Fit
                                                            </a>
                                                        </h6>
                                                        <div className="widget-product-meta">
                                                            <span className="text-accent me-2">
                                                                $9.
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
                                                    $265.<small>00</small>
                                                </span>
                                            </div>
                                            <a
                                                className="btn btn-outline-secondary btn-sm"
                                                href="shop-cart.html"
                                            >
                                                Expand cart
                                                <i className="ci-arrow-right ms-1 me-n1"></i>
                                            </a>
                                        </div>
                                        <a
                                            className="btn btn-primary btn-sm d-block w-100"
                                            href="checkout-details.html"
                                        >
                                            <i className="ci-card me-2 fs-base align-middle"></i>
                                            Checkout
                                        </a>
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
                                                    <h6 className="fs-base mb-2">
                                                        Clothing
                                                    </h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Women clothing
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Men clothing
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
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
                                                    <h6 className="fs-base mb-2">
                                                        Shoes
                                                    </h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Women shoes
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Men shoes
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
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
                                                    <h6 className="fs-base mb-2">
                                                        Gadgets
                                                    </h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Smartphones
                                                                &amp; Tablets
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Wearable gadgets
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
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
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Home furniture
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Office furniture
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Lighting and
                                                                decoration
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
                                                    <h6 className="fs-base mb-2">
                                                        Accessories
                                                    </h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Hats
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Sunglasses
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
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
                                                    <h6 className="fs-base mb-2">
                                                        Entertainment
                                                    </h6>
                                                    <ul className="widget-list">
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Kid toys
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Video games
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item mb-1">
                                                            <a
                                                                className="widget-list-link"
                                                                href="#"
                                                            >
                                                                Outdoor /
                                                                Camping
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
                                            <a
                                                className="dropdown-item py-2 border-bottom"
                                                href="home-fashion-store-v1.html"
                                            >
                                                <span className="d-block text-heading">
                                                    Fashion Store v.1
                                                </span>
                                                <small className="d-block text-muted">
                                                    Classic shop layout
                                                </small>
                                            </a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                                <a
                                                    className="d-block"
                                                    href="home-fashion-store-v1.html"
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
                                                href="home-electronics-store.html"
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
                                                    href="home-electronics-store.html"
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
                                                href="home-marketplace.html"
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
                                                    href="home-marketplace.html"
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
                                                href="home-grocery-store.html"
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
                                                    href="home-grocery-store.html"
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
                                                href="home-food-delivery.html"
                                            >
                                                <span className="d-block text-heading">
                                                    Food Delivery Service
                                                </span>
                                                <small className="d-block text-muted">
                                                    Food &amp; Beverages
                                                    delivery
                                                </small>
                                            </a>
                                            <div className="dropdown-menu h-100 animation-none mt-0 p-3">
                                                <a
                                                    className="d-block"
                                                    href="home-food-delivery.html"
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
                                                href="home-fashion-store-v2.html"
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
                                                    href="home-fashion-store-v2.html"
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
                                                href="home-single-store.html"
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
                                                    href="home-single-store.html"
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
                                                                href="shop-grid-ls.html"
                                                            >
                                                                Shop Grid - Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-grid-rs.html"
                                                            >
                                                                Shop Grid -
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-grid-ft.html"
                                                            >
                                                                Shop Grid -
                                                                Filters on Top
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-list-ls.html"
                                                            >
                                                                Shop List - Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-list-rs.html"
                                                            >
                                                                Shop List -
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-list-ft.html"
                                                            >
                                                                Shop List -
                                                                Filters on Top
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
                                                                href="marketplace-category.html"
                                                            >
                                                                Category Page
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="marketplace-single.html"
                                                            >
                                                                Single Item Page
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="marketplace-vendor.html"
                                                            >
                                                                Vendor Page
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="marketplace-cart.html"
                                                            >
                                                                Cart
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="marketplace-checkout.html"
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
                                                                href="shop-categories.html"
                                                            >
                                                                Shop Categories
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-single-v1.html"
                                                            >
                                                                Product Page v.1
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-single-v2.html"
                                                            >
                                                                Product Page v.2
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="shop-cart.html"
                                                            >
                                                                Cart
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="checkout-details.html"
                                                            >
                                                                Checkout -
                                                                Details
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="checkout-shipping.html"
                                                            >
                                                                Checkout -
                                                                Shipping
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="checkout-payment.html"
                                                            >
                                                                Checkout -
                                                                Payment
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="checkout-review.html"
                                                            >
                                                                Checkout -
                                                                Review
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="checkout-complete.html"
                                                            >
                                                                Checkout -
                                                                Complete
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="order-tracking.html"
                                                            >
                                                                Order Tracking
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="comparison.html"
                                                            >
                                                                Product
                                                                Comparison
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
                                                                href="grocery-catalog.html"
                                                            >
                                                                Product Catalog
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="grocery-single.html"
                                                            >
                                                                Single Product
                                                                Page
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="grocery-checkout.html"
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
                                                                href="food-delivery-category.html"
                                                            >
                                                                Category Page
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="food-delivery-single.html"
                                                            >
                                                                Single Item
                                                                (Restaurant)
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="food-delivery-cart.html"
                                                            >
                                                                Cart (Your
                                                                Order)
                                                            </a>
                                                        </li>
                                                        <li className="widget-list-item">
                                                            <a
                                                                className="widget-list-link"
                                                                href="food-delivery-checkout.html"
                                                            >
                                                                Checkout
                                                                (Address &amp;
                                                                Payment)
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
                                                        href="account-orders.html"
                                                    >
                                                        Orders History
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="account-profile.html"
                                                    >
                                                        Profile Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="account-address.html"
                                                    >
                                                        Account Addresses
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="account-payment.html"
                                                    >
                                                        Payment Methods
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="account-wishlist.html"
                                                    >
                                                        Wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="account-tickets.html"
                                                    >
                                                        My Tickets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="account-single-ticket.html"
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
                                                        href="dashboard-settings.html"
                                                    >
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="dashboard-purchases.html"
                                                    >
                                                        Purchases
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="dashboard-favorites.html"
                                                    >
                                                        Favorites
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="dashboard-sales.html"
                                                    >
                                                        Sales
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="dashboard-products.html"
                                                    >
                                                        Products
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="dashboard-add-new-product.html"
                                                    >
                                                        Add New Product
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="dashboard-payouts.html"
                                                    >
                                                        Payouts
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="account-signin.html"
                                            >
                                                Sign In / Sign Up
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="account-password-recovery.html"
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
                                                        href="navbar-1-level-light.html"
                                                    >
                                                        1 Level Light
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="navbar-1-level-dark.html"
                                                    >
                                                        1 Level Dark
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="navbar-2-level-light.html"
                                                    >
                                                        2 Level Light
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="navbar-2-level-dark.html"
                                                    >
                                                        2 Level Dark
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="navbar-3-level-light.html"
                                                    >
                                                        3 Level Light
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="navbar-3-level-dark.html"
                                                    >
                                                        3 Level Dark
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="home-electronics-store.html"
                                                    >
                                                        Electronics Store
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="home-marketplace.html"
                                                    >
                                                        Marketplace
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="home-grocery-store.html"
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
                                                href="about.html"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="contacts.html"
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
                                                        href="help-topics.html"
                                                    >
                                                        Help Topics
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="help-single-topic.html"
                                                    >
                                                        Single Topic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="help-submit-request.html"
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
                                                        href="404-simple.html"
                                                    >
                                                        404 - Simple Text
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="404-illustration.html"
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
                                                href="sticky-footer.html"
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
                                                        href="blog-list-sidebar.html"
                                                    >
                                                        List with Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="blog-list.html"
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
                                                        href="blog-grid-sidebar.html"
                                                    >
                                                        Grid with Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="blog-grid.html"
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
                                                        href="blog-single-sidebar.html"
                                                    >
                                                        Article with Sidebar
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="blog-single.html"
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
                                                href="docs/dev-setup.html"
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
                                                href="components/typography.html"
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
                                                href="docs/changelog.html"
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
                                                href="mailto:support@createx.studio"
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
