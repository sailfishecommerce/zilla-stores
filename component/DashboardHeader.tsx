/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function DashboardHeader() {
    return (
        <>
            <header className="bg-light shadow-sm navbar-sticky">
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link href="/index" passHref>
                            <a className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1">
                                <img
                                    src="/img/logo-dark.png"
                                    width="142"
                                    alt="Cartzilla"
                                />
                            </a>
                        </Link>
                        <Link href="/index" passHref>
                            <a className="navbar-brand d-sm-none me-2 order-lg-1">
                                <img
                                    src="/img/logo-icon.png"
                                    width="74"
                                    alt="Cartzilla"
                                />
                            </a>
                        </Link>
                        {/*<!-- Toolbar-->*/}
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
                                href="javascript:void(0)"
                                data-bs-toggle="collapse"
                                data-bs-target="#searchBox"
                                role="button"
                                aria-expanded="false"
                                aria-controls="searchBox"
                            >
                                <span className="navbar-tool-tooltip">
                                    Search
                                </span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-search"></i>
                                </div>
                            </a>
                            <Link href="/dashboard-favorites" passHref>
                                <a className="navbar-tool d-none d-lg-flex">
                                    <span className="navbar-tool-tooltip">
                                        Favorites
                                    </span>
                                    <div className="navbar-tool-icon-box">
                                        <i className="navbar-tool-icon ci-heart"></i>
                                    </div>
                                </a>
                            </Link>
                            <div className="navbar-tool dropdown ms-2">
                                <Link href="/dashboard-sales" passHref>
                                    <a className="navbar-tool-icon-box border dropdown-toggle">
                                        <img
                                            src="/img/marketplace/account/avatar-sm.png"
                                            width="32"
                                            alt="Bandicoot Studio"
                                        />
                                    </a>
                                </Link>
                                <Link href="/dashboard-sales" passHref>
                                    <a className="navbar-tool-text ms-n1">
                                        <small>Bandicoot Std.</small>$1,375.00
                                    </a>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <div style={{ minWidth: "14rem" }}>
                                        <h6 className="dropdown-header">
                                            Account
                                        </h6>
                                        <Link
                                            href="/dashboard-settings"
                                            passHref
                                        >
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-settings opacity-60 me-2"></i>
                                                Settings
                                            </a>
                                        </Link>
                                        <Link
                                            href="/dashboard-purchases"
                                            passHref
                                        >
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-basket opacity-60 me-2"></i>
                                                Purchases
                                            </a>
                                        </Link>
                                        <Link
                                            href="/dashboard-favorites"
                                            passHref
                                        >
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-heart opacity-60 me-2"></i>
                                                Favorites
                                                <span className="fs-xs text-muted ms-auto">
                                                    4
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <h6 className="dropdown-header">
                                            Seller Dashboard
                                        </h6>
                                        <Link href="/dashboard-sales" passHref>
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-dollar opacity-60 me-2"></i>
                                                Sales
                                                <span className="fs-xs text-muted ms-auto">
                                                    $1,375.00
                                                </span>
                                            </a>
                                        </Link>
                                        <Link
                                            href="/dashboard-products"
                                            passHref
                                        >
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-package opacity-60 me-2"></i>
                                                Products
                                                <span className="fs-xs text-muted ms-auto">
                                                    5
                                                </span>
                                            </a>
                                        </Link>
                                        <Link
                                            href="/dashboard-add-new-product"
                                            passHref
                                        >
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-cloud-upload opacity-60 me-2"></i>
                                                Add New Product
                                            </a>
                                        </Link>
                                        <Link
                                            href="/dashboard-payouts"
                                            passHref
                                        >
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-currency-exchange opacity-60 me-2"></i>
                                                Payouts
                                            </a>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link href="/account-signin" passHref>
                                            <a className="dropdown-item d-flex align-items-center">
                                                <i className="ci-sign-out opacity-60 me-2"></i>
                                                Sign Out
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-tool ms-4">
                                <Link href="/marketplace-cart" passHref>
                                    <a className="navbar-tool-icon-box bg-secondary dropdown-toggle">
                                        <span className="navbar-tool-label">
                                            3
                                        </span>
                                        <i className="navbar-tool-icon ci-cart"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="collapse navbar-collapse me-auto order-lg-2"
                            id="navbarCollapse"
                        >
                            {/*<!-- Search-->*/}
                            <div className="input-group d-lg-none my-3">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                <input
                                    className="form-control rounded-start"
                                    type="text"
                                    placeholder="Search marketplace"
                                />
                            </div>
                            {/*<!-- Categories dropdown-->*/}
                            <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle ps-lg-0"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ci-menu align-middle mt-n1 me-2"></i>
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu py-1">
                                        <li className="dropdown">
                                            <a
                                                className="dropdown-item dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                            >
                                                Photos
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item product-title fw-medium">
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a>
                                                            All Photos
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Abstract
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Animals
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Architecture
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Beauty &amp; Fashion
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Business
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Education
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Food &amp; Drink
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Holidays
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Industrial
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            People
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Sports
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Technology
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
                                                Graphics
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item product-title fw-medium">
                                                    <a href="#">
                                                        All Graphics
                                                        <i className="ci-arrow-right fs-xs ms-1"></i>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Icons
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Illustartions
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Patterns
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Textures
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Web Elements
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
                                                UI Design
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item product-title fw-medium">
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a>
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                            All UI Design
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            PSD Templates
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Sketch Templates
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Adobe XD Templates
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Figma Templates
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
                                                Web Themes
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item product-title fw-medium">
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a>
                                                            All Web Themes
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            WordPress Themes
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Bootstrap Themes
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            eCommerce Templates
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Muse Templates
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Plugins
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
                                                Fonts
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item product-title fw-medium">
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a>
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                            All Fonts
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Blackletter
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Display
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Non Western
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Sans Serif
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Script
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Serif
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Slab Serif
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Symbols
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
                                                Add-Ons
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item product-title fw-medium">
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a>
                                                            All Add-Ons
                                                            <i className="ci-arrow-right fs-xs ms-1"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Photoshop Add-Ons
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Illustrator Add-Ons
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Sketch Plugins
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Procreate Brushes
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            InDesign Palettes
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Lightroom Presets
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/marketplace-category"
                                                        passHref
                                                    >
                                                        <a className="dropdown-item">
                                                            Other Software
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/*<!-- Primary menu-->*/}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href="/" passHref>
                                        <a className="nav-link">
                                            Back to main demo
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*<!-- Search collapse-->*/}
                <div className="search-box collapse" id="searchBox">
                    <div className="card pt-2 pb-4 border-0 rounded-0">
                        <div className="container">
                            <div className="input-group">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                <input
                                    className="form-control rounded-start"
                                    type="text"
                                    placeholder="Search marketplace"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/*<!-- Dashboard header-->*/}
            <div className="page-title-overlap bg-accent pt-4">
                <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                    <div className="d-flex align-items-center pb-3">
                        <div
                            className="img-thumbnail rounded-circle position-relative flex-shrink-0"
                            style={{ width: "6.375rem" }}
                        >
                            <img
                                className="rounded-circle"
                                src="/img/marketplace/account/avatar.png"
                                alt="Bandicoot Studio"
                            />
                        </div>
                        <div className="ps-3">
                            <h3 className="text-light fs-lg mb-0">
                                Bandicoot Studio
                            </h3>
                            <span className="d-block text-light fs-ms opacity-60 py-1">
                                Member since November 2019
                            </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="text-sm-end me-5">
                            <div className="text-light fs-base">
                                Total sales
                            </div>
                            <h3 className="text-light">426</h3>
                        </div>
                        <div className="text-sm-end">
                            <div className="text-light fs-base">
                                Seller rating
                            </div>
                            <div className="star-rating">
                                <i className="star-rating-icon ci-star-filled active"></i>
                                <i className="star-rating-icon ci-star-filled active"></i>
                                <i className="star-rating-icon ci-star-filled active"></i>
                                <i className="star-rating-icon ci-star-filled active"></i>
                                <i className="star-rating-icon ci-star"></i>
                            </div>
                            <div className="text-light opacity-60 fs-xs">
                                Based on 98 reviews
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
