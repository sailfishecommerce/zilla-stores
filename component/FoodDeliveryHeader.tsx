/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function FoodDeliveryHeader() {
    return (
        <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/" passHref>
                    <a className="navbar-brand d-none d-sm-block me-4 order-lg-1">
                        <img
                            src="/img/logo-dark.png"
                            width="142"
                            alt="Bandicoot"
                        />
                    </a>
                </Link>
                <Link href="/" passHref>
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
                        className="navbar-tool d-none d-lg-flex"
                        href="/javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#searchBox"
                        role="button"
                        aria-expanded="false"
                        aria-controls="searchBox"
                    >
                        <span className="navbar-tool-tooltip">Search</span>
                        <div className="navbar-tool-icon-box">
                            <i className="navbar-tool-icon ci-search"></i>
                        </div>
                    </a>
                    <a
                        className="navbar-tool ms-2"
                        href="#signin-modal"
                        data-bs-toggle="modal"
                    >
                        <span className="navbar-tool-tooltip">Account</span>
                        <div className="navbar-tool-icon-box">
                            <i className="navbar-tool-icon ci-user"></i>
                        </div>
                    </a>
                    <div className="navbar-tool dropdown ms-3">
                        <Link href="/food-delivery-cart" passHref>
                            <a className="navbar-tool-icon-box bg-secondary dropdown-toggle">
                                <span className="navbar-tool-label">3</span>
                                <i className="navbar-tool-icon ci-cart"></i>
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
                                            <a className="d-block" href="#">
                                                <img
                                                    src="/img/food-delivery/cart/th01.jpg"
                                                    width="64"
                                                    alt="Pizza"
                                                />
                                            </a>
                                            <div className="ps-2">
                                                <h6 className="widget-product-title">
                                                    <a href="#">
                                                        Pizza Pepperoni with
                                                        Tomatoes
                                                    </a>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $9.<small>00</small>
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
                                            <a className="d-block" href="#">
                                                <img
                                                    src="/img/food-delivery/cart/th02.jpg"
                                                    width="64"
                                                    alt="Burger"
                                                />
                                            </a>
                                            <div className="ps-2">
                                                <h6 className="widget-product-title">
                                                    <a href="#">
                                                        Beef Burger with Fries
                                                    </a>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $12.<small>00</small>
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
                                            <a className="d-block" href="#">
                                                <img
                                                    src="/img/food-delivery/cart/th03.jpg"
                                                    width="64"
                                                    alt="Drink"
                                                />
                                            </a>
                                            <div className="ps-2">
                                                <h6 className="widget-product-title">
                                                    <a href="#">
                                                        Coca Cola Can, 335ml
                                                    </a>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $1.<small>00</small>
                                                    </span>
                                                    <span className="text-muted">
                                                        x 3
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                    <div className="fs-sm me-2 py-2">
                                        <span className="text-muted">
                                            Total:
                                        </span>
                                        <span className="text-accent fs-base ms-1">
                                            $24.<small>00</small>
                                        </span>
                                    </div>
                                    <Link href="/food-delivery-cart" passHref>
                                        <a className="btn btn-outline-secondary btn-sm">
                                            Expand cart
                                            <i className="ci-arrow-right ms-1 me-n1"></i>
                                        </a>
                                    </Link>
                                </div>
                                <Link href="/food-delivery-checkout" passHref>
                                    <a className="btn btn-primary btn-sm d-block w-100">
                                        <i className="ci-card me-2 fs-base align-middle"></i>
                                        Checkout
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="collapse navbar-collapse me-auto order-lg-2"
                    id="navbarCollapse"
                >
                    {/*<!-- Search (mobile)-->*/}
                    <div className="d-lg-none py-3">
                        <div className="input-group">
                            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                            <input
                                className="form-control rounded-start"
                                type="text"
                                placeholder="What do you need?"
                            />
                        </div>
                    </div>
                    {/*<!-- Location dropdown-->*/}
                    <ul className="navbar-nav navbar-mega-nav ms-lg-4 pe-lg-2 me-lg-2">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle ps-lg-0"
                                href="#"
                                data-bs-toggle="dropdown"
                            >
                                <i className="ci-location me-2"></i>New York
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Los Angeles
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Chicago
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Houston
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Philadelphia
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        San Diego
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Miami
                                    </a>
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
                                Cuisine
                            </a>
                            <div className="dropdown-menu px-2 ps-0 pb-4">
                                <div className="d-flex">
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/burger.svg"
                                                        width="60"
                                                        alt="Burgers &amp; Fries"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Burgers &amp; Fries
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/noodles.svg"
                                                        width="60"
                                                        alt="Noodles"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Noodles
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/pizza.svg"
                                                        width="60"
                                                        alt="Pizza &amp; Pasta"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Pizza &amp; Pasta
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/steak.svg"
                                                        width="60"
                                                        alt="Grill &amp; Steaks"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Grill &amp; Steaks
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/fish.svg"
                                                        width="60"
                                                        alt="Fish &amp; Seafood"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Fish &amp; Seafood
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/healthy.svg"
                                                        width="60"
                                                        alt="Healthy Food"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Healthy Food
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/cuisine.svg"
                                                        width="60"
                                                        alt="Haute Cuisine"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Haute Cuisine
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/chicken.svg"
                                                        width="60"
                                                        alt="Chicken &amp; Snaks"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Chicken &amp; Snaks
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="mega-dropdown-column pt-4 px-3"
                                        style={{ width: "12rem" }}
                                    >
                                        <div className="widget mb-3">
                                            <Link
                                                href="/food-delivery-category"
                                                passHref
                                            >
                                                <a className="d-block">
                                                    <img
                                                        className="d-block mx-auto mb-3"
                                                        src="/img/food-delivery/icons/coffee.svg"
                                                        width="60"
                                                        alt="Coffee &amp; Desserts"
                                                    />
                                                    <h6 className="fs-base text-center">
                                                        Coffee &amp; Desserts
                                                    </h6>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link href="/" passHref>
                                <a className="nav-link">Back to main demo</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/*<!-- Search collapse-->*/}
            <div className="search-box collapse" id="searchBox">
                <div className="container py-2">
                    <div className="input-group">
                        <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                        <input
                            className="form-control rounded-start"
                            type="text"
                            placeholder="What do you need?"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
