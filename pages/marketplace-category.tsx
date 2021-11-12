/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import MarketplaceLayout from "../layout/MarketplaceLayout";

export default function MarketplaceCategory() {
    return (
        <MarketplaceLayout title="Marketplace category">
            <>
                <div className="bg-accent pt-4 pb-5">
                    <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
                        <div className="d-lg-flex justify-content-between pb-3">
                            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                        <li className="breadcrumb-item">
                                            <Link href="/" passHref>
                                                <a className="text-nowrap">
                                                    <i className="ci-home"></i>
                                                    Home
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item text-nowrap">
                                            <Link
                                                href="/home-marketplace"
                                                passHref
                                            >
                                                <a>Market</a>
                                            </Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item text-nowrap active"
                                            aria-current="page"
                                        >
                                            Inside category
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                                <h1 className="h3 text-light mb-0">
                                    Marketplace category
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    {/*<!-- Toolbar-->*/}
                    <div className="bg-light shadow-lg rounded-3 mt-n5 mb-4">
                        <div className="d-flex align-items-center ps-2">
                            {/*<!-- Search-->*/}
                            <div className="input-group">
                                <i className="ci-search position-absolute top-50 start-0 translate-middle-y fs-md ms-3"></i>
                                <input
                                    className="form-control border-0 shadow-none"
                                    type="text"
                                    placeholder="Search in this category..."
                                />
                            </div>
                            {/*<!-- Sort-->*/}
                            <div className="d-flex align-items-center">
                                <div className="dropdown py-4 border-start">
                                    <a
                                        className="nav-link-style fs-md fw-medium dropdown-toggle p-4"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                    >
                                        <span className="d-inline-block py-1">
                                            <i className="ci-thumb-up align-middle opacity-60 mt-n1 me-2"></i>
                                            Popular
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i className="ci-flag me-2 opacity-60"></i>
                                                Newest
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i className="ci-rocket me-2 opacity-60"></i>
                                                Bestsellers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i className="ci-loading me-2 opacity-60"></i>
                                                Updated
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i className="ci-arrow-down me-2 opacity-60"></i>
                                                Low Price
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <i className="ci-arrow-up me-2 opacity-60"></i>
                                                High Price
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*<!-- Pagination-->*/}
                            <div className="d-none d-md-flex align-items-center border-start ps-4">
                                <span className="fs-md text-nowrap me-4">
                                    Pages&nbsp; 1 / 5
                                </span>
                                <a
                                    className="nav-link-style p-4 border-start"
                                    href="#"
                                >
                                    <span className="d-inline-block py-1">
                                        <i className="ci-arrow-left"></i>
                                    </span>
                                </a>
                                <a
                                    className="nav-link-style p-4 border-start"
                                    href="#"
                                >
                                    <span className="d-inline-block py-1">
                                        <i className="ci-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Products grid-->*/}
                    <div className="row pt-3 mx-n2">
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
                            <div className="card product-card-alt">
                                <div className="product-thumb">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/02.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Bandicoot Std.{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Floating Phone and Tablet Mockup
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            109
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
                                        </div>
                                        <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                                            $15.<small>00</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-grid-gutter">
                            <div className="card product-card-alt">
                                <div className="product-thumb">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                        <a className="product-thumb-overlay">
                                            <img
                                                src="/img/marketplace/products/03.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Bandicoot Std.{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Project Devices Showcase (PSD)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            95
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/08.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                pixels{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Graphics
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>Business Card Branding Mockup</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            316
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/07.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                pixels{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>Gravity Device Mockups (PSD)</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            234
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/01.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Bandicoot Std.{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                UI Design
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Square Style Mobile UI Kit
                                                (Sketch)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            153
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/04.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Bandicoot Std.{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Flat-line E-Commerce Icons (AI)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            26
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/09.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                pixels{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Isometric Device Mockups (PSD)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            36
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                    <img
                                        src="/img/marketplace/products/10.jpg"
                                        alt="Product"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                theDesigner{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Graphics
                                            </a>
                                        </div>
                                        <div className="star-rating">
                                            <i className="star-rating-icon ci-star-filled active"></i>
                                            <i className="star-rating-icon ci-star-filled active"></i>
                                            <i className="star-rating-icon ci-star-filled active"></i>
                                            <i className="star-rating-icon ci-star"></i>
                                            <i className="star-rating-icon ci-star"></i>
                                        </div>
                                    </div>
                                    <h3 className="product-title fs-sm mb-2">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>Coffe Paper Cup Mockup</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            57
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                        <a className="product-thumb-overlay">
                                            <img
                                                src="/img/marketplace/products/06.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Bandicoot Std.{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Travel &amp; Landmark Icon Pack
                                                (AI)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            21
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                        <a className="product-thumb-overlay">
                                            <img
                                                src="/img/marketplace/products/05.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Bandicoot Std.{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Minimal Mobile App UI Kit
                                                (Sketch)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            117
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                        <a className="product-thumb-overlay">
                                            <img
                                                src="/img/marketplace/products/11.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                pixels{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                Graphics
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>Printed T-Shirt Mockup (PSD)</a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            94
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
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
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <div className="product-card-actions">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
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
                                        <a className="product-thumb-overlay">
                                            <img
                                                src="/img/marketplace/products/12.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                                        <div className="text-muted fs-xs me-1">
                                            by{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
                                                pixels{" "}
                                            </a>
                                            in{" "}
                                            <a
                                                className="product-meta fw-medium"
                                                href="#"
                                            >
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
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a>
                                                Corporate Branding Mockup (PSD)
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="fs-sm me-2">
                                            <i className="ci-download text-muted me-1"></i>
                                            122
                                            <span className="fs-xs ms-1">
                                                Sales
                                            </span>
                                        </div>
                                        <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                                            $18.<small>00</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-3" />
                    {/*<!-- Pagination-->*/}
                    <nav
                        className="d-flex justify-content-between pt-2"
                        aria-label="Page navigation"
                    >
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    <i className="ci-arrow-left me-2"></i>Prev
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li className="page-item d-sm-none">
                                <span className="page-link page-link-static">
                                    1 / 5
                                </span>
                            </li>
                            <li
                                className="page-item active d-none d-sm-block"
                                aria-current="page"
                            >
                                <span className="page-link">
                                    1
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </span>
                            </li>
                            <li className="page-item d-none d-sm-block">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item d-none d-sm-block">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item d-none d-sm-block">
                                <a className="page-link" href="#">
                                    4
                                </a>
                            </li>
                            <li className="page-item d-none d-sm-block">
                                <a className="page-link" href="#">
                                    5
                                </a>
                            </li>
                        </ul>
                        <ul className="pagination">
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Next"
                                >
                                    Next<i className="ci-arrow-right ms-2"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        </MarketplaceLayout>
    );
}
