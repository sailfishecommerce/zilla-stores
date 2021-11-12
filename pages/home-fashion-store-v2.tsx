/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FashionLayout from "../layout/FashionLayout";

export default function HomeFashionStorev2() {
    return (
        <FashionLayout title="Home fashion store v2">
            <>
                <section className="tns-carousel tns-controls-lg mb-4 mb-lg-5">
                    <div
                        className="tns-carousel-inner"
                        data-carousel-options='{"mode": "gallery", "responsive": {"0":{"nav":true, "controls": false},"992":{"nav":false, "controls": true}}}'
                    >
                        <div
                            className="px-lg-5"
                            style={{ backgroundColor: "#f5b1b0" }}
                        >
                            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                <img
                                    className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                                    src="/img/home/hero-slider/02.jpg"
                                    alt="Women Sportswear"
                                />
                                <div
                                    className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                    style={{ maxWidth: "42rem", zIndex: 10 }}
                                >
                                    <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                        <h3 className="h2 text-light fw-light pb-1 from-bottom">
                                            Hurry up! Limited time offer.
                                        </h3>
                                        <h2 className="text-light display-5 from-bottom delay-1">
                                            Women Sportswear Sale
                                        </h2>
                                        <p className="fs-lg text-light pb-3 from-bottom delay-2">
                                            Sneakers, Keds, Sweatshirts, Hoodies
                                            &amp; much more...
                                        </p>
                                        <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                            <Link href="/shop-grid-ls" passHref>
                                                <a className="btn btn-primary">
                                                    Shop Now
                                                    <i className="ci-arrow-right ms-2 me-n1"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="px-lg-5"
                            style={{ backgroundColor: "#3aafd2" }}
                        >
                            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                <img
                                    className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                                    src="/img/home/hero-slider/01.jpg"
                                    alt="Summer Collection"
                                />
                                <div
                                    className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                    style={{ maxWidth: "42rem", zIndex: 10 }}
                                >
                                    <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                        <h3 className="h2 text-light fw-light pb-1 from-start">
                                            Has just arrived!
                                        </h3>
                                        <h2 className="text-light display-5 from-start delay-1">
                                            Huge Summer Collection
                                        </h2>
                                        <p className="fs-lg text-light pb-3 from-start delay-2">
                                            Swimwear, Tops, Shorts, Sunglasses
                                            &amp; much more...
                                        </p>
                                        <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                            <Link href="/shop-grid-ls" passHref>
                                                <a className="btn btn-primary">
                                                    Shop Now
                                                    <i className="ci-arrow-right ms-2 me-n1"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="px-lg-5"
                            style={{ backgroundColor: "#eba170" }}
                        >
                            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
                                <img
                                    className="d-block order-lg-2 me-lg-n5 flex-shrink-0"
                                    src="/img/home/hero-slider/03.jpg"
                                    alt="Men Accessories"
                                />
                                <div
                                    className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                                    style={{ maxWidth: "42rem", zIndex: 10 }}
                                >
                                    <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                                        <h3 className="h2 text-light fw-light pb-1 from-top">
                                            Complete your look with
                                        </h3>
                                        <h2 className="text-light display-5 from-top delay-1">
                                            New Men&#39;s Accessories
                                        </h2>
                                        <p className="fs-lg text-light pb-3 from-top delay-2">
                                            Hats &amp; Caps, Sunglasses, Bags
                                            &amp; much more...
                                        </p>
                                        <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                                            <Link href="/shop-grid-ls" passHref>
                                                <a className="btn btn-primary">
                                                    Shop Now
                                                    <i className="ci-arrow-right ms-2 me-n1"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container pt-lg-3 mb-4 mb-sm-5">
                    <div className="row">
                        {/*<!-- Banner with controls-->*/}
                        <div className="col-md-5">
                            <div
                                className="d-flex flex-column h-100 overflow-hidden rounded-3"
                                style={{ backgroundColor: "#f6f8fb" }}
                            >
                                <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                    <div>
                                        <h3 className="mb-1">For Women</h3>
                                        <Link href="/shop-grid-ls" passHref>
                                            <a className="fs-md">
                                                Shop for women
                                                <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <div
                                        className="tns-carousel-controls"
                                        id="for-women"
                                    >
                                        <button type="button">
                                            <i className="ci-arrow-left"></i>
                                        </button>
                                        <button type="button">
                                            <i className="ci-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-none d-md-block mt-auto">
                                        <img
                                            className="d-block w-100"
                                            src="/img/home/categories/cat-lg02.jpg"
                                            alt="For Women"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/*<!-- Product grid (carousel)-->*/}
                        <div className="col-md-7 pt-4 pt-md-0">
                            <div className="tns-carousel">
                                <div
                                    className="tns-carousel-inner"
                                    data-carousel-options='{"nav": false, "controlsContainer": "#for-women"}'
                                >
                                    {/*<!-- Carousel item-->*/}
                                    <div>
                                        <div className="row mx-n2">
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/09.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Cosmetics
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Metallic
                                                                    Lipstick
                                                                    (Crimson)
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $12.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/26.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shoes
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Textile
                                                                    Platform
                                                                    Sneakers
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $59.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <span className="badge badge-danger badge-shadow">
                                                        Sale
                                                    </span>
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        passHref
                                                        href="/shop-single-v1"
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/27.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Accessories
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Polarized
                                                                    Sunglasses
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $17.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                                <del className="fs-sm text-muted">
                                                                    28.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </del>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/28.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shoes
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Leather
                                                                    Platform
                                                                    Sandals
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $79.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/29.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shorts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Short Chino
                                                                    Shorts
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $24.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/30.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            T-shirts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    T-shirt with
                                                                    Motif
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $13.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Carousel item-->*/}
                                    <div>
                                        <div className="row mx-n2">
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/01.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shoes
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Colorblock
                                                                    Sneakers
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $154.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/02.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Blouse
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Cotton Lace
                                                                    Blouse
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $37.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/03.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shorts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Mom High
                                                                    Waist Shorts
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $39.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/04.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Sportswear
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Sports
                                                                    Jacket
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $68.
                                                                    <small>
                                                                        40
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/31.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shorts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Leather
                                                                    Platform
                                                                    Sandals
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $67.
                                                                    <small>
                                                                        95
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/07.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            T-shirts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Two-Piece
                                                                    Bikini
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $18.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Category (Men)-->*/}
                <section className="container pt-lg-4 mb-4 mb-sm-5">
                    <div className="row">
                        {/*<!-- Banner with controls-->*/}
                        <div className="col-md-5 order-md-2">
                            <div
                                className="d-flex flex-column h-100 overflow-hidden rounded-3"
                                style={{ backgroundColor: "#f6f8fb" }}
                            >
                                <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                    <div className="order-md-2">
                                        <h3 className="mb-1">For Men</h3>
                                        <Link href="/shop-grid-ls" passHref>
                                            <a className="fs-md">
                                                Shop for men
                                                <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <div
                                        className="tns-carousel-controls order-md-1"
                                        id="for-men"
                                    >
                                        <button type="button">
                                            <i className="ci-arrow-left"></i>
                                        </button>
                                        <button type="button">
                                            <i className="ci-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-none d-md-block mt-auto">
                                        <img
                                            className="d-block w-100"
                                            src="/img/home/categories/cat-lg01.jpg"
                                            alt="For Men"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/*<!-- Product grid (carousel)-->*/}
                        <div className="col-md-7 pt-4 pt-md-0 order-md-1">
                            <div className="tns-carousel">
                                <div
                                    className="tns-carousel-inner"
                                    data-carousel-options='{"nav": false, "controlsContainer": "#for-men"}'
                                >
                                    {/*<!-- Carousel item-->*/}
                                    <div>
                                        <div className="row mx-n2">
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/32.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Hats &amp; Caps
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Cap with
                                                                    Appliqué
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $15.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/33.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            T-shirts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Regular Fit
                                                                    Cotton Shirt
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $19.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/34.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Accessories
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Polarized
                                                                    Sunglasses
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $37.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/35.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shoes
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Leather
                                                                    Men’s
                                                                    Sneakers
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $45.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <span className="badge badge-info badge-shadow">
                                                        Popular
                                                    </span>
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/36.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Bags
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Swedish
                                                                    Backpack
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $68.
                                                                    <small>
                                                                        95
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/37.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Accessories
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Stainless
                                                                    Steel
                                                                    Watches
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $542.
                                                                    <small>
                                                                        80
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Carousel item-->*/}
                                    <div>
                                        <div className="row mx-n2">
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/11.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Sandals
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Soft Footbed
                                                                    Sandals
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $99.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/38.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shorts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Silver Ringe
                                                                    Cargo Short
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $45.
                                                                    <small>
                                                                        00
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/10.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shorts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Multicolor
                                                                    Bracelets
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $7.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/39.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            T-shirts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    3-pack
                                                                    T-shirts
                                                                    Slim Fit
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $21.
                                                                    <small>
                                                                        70
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/12.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Hats &amp; Caps
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    3-Color Sun
                                                                    Stash Hat
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $25.
                                                                    <small>
                                                                        9
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/06.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Bags
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    TH Jeans
                                                                    City
                                                                    Backpack
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $79.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Category (Kids)-->*/}
                <section className="container pt-lg-4 mb-4 mb-md-5">
                    <div className="row">
                        {/*<!-- Banner with controls-->*/}
                        <div className="col-md-5">
                            <div
                                className="d-flex flex-column h-100 overflow-hidden rounded-3"
                                style={{ backgroundColor: "#f6f8fb" }}
                            >
                                <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                    <div>
                                        <h3 className="mb-1">For Kids</h3>
                                        <Link href="/shop-grid-ls" passHref>
                                            <a className="fs-md">
                                                Shop for kids
                                                <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <div
                                        className="tns-carousel-controls"
                                        id="for-kids"
                                    >
                                        <button type="button">
                                            <i className="ci-arrow-left"></i>
                                        </button>
                                        <button type="button">
                                            <i className="ci-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-none d-md-block mt-auto">
                                        <img
                                            className="d-block w-100"
                                            src="/img/home/categories/cat-lg03.jpg"
                                            alt="For Kids"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        {/*<!-- Product grid (carousel)-->*/}
                        <div className="col-md-7 pt-4 pt-md-0">
                            <div className="tns-carousel">
                                <div
                                    className="tns-carousel-inner"
                                    data-carousel-options='{"nav": false, "controlsContainer": "#for-kids"}'
                                >
                                    {/*<!-- Carousel item-->*/}
                                    <div>
                                        <div className="row mx-n2">
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/40.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Clothing
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Girl’s Denim
                                                                    Jacket
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $24.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <span className="badge badge-success badge-shadow">
                                                        Trending
                                                    </span>
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/41.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shoes
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Textile
                                                                    Ballet Flats
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $16.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/42.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            T-shirts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Boys T-shirt
                                                                    with Motif
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $17.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/43.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Accessories
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Dotted
                                                                    Shoulder Bag
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $23.
                                                                    <small>
                                                                        00
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/44.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Hats &amp; Caps
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    2-pack
                                                                    Cotton Sun
                                                                    Hats
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $18.
                                                                    <small>
                                                                        00
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/08.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Toys
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Soft Panda
                                                                    Teddy Bear
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $14.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Carousel item-->*/}
                                    <div>
                                        <div className="row mx-n2">
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/45.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            T-shirts
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Outlined
                                                                    Star Chevron
                                                                    Tee
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $10.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/46.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Hats &amp; Caps
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Banana
                                                                    Embroidery
                                                                    Cap
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $15.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/47.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Shoes
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Big Kid
                                                                    Sneakers
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $42.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/48.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Clothing
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Boy&#39;s
                                                                    Printed
                                                                    Shorts
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $18.
                                                                    <small>
                                                                        99
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-half active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/49.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Toys
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Unicorn Soft
                                                                    Toy
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $22.
                                                                    <small>
                                                                        50
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                                <div className="card product-card card-static">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                        data-bs-toggle="tooltip"
                                                        data-bs-placement="left"
                                                        title="Add to wishlist"
                                                    >
                                                        <i className="ci-heart"></i>
                                                    </button>
                                                    <Link
                                                        href="/shop-single-v1"
                                                        passHref
                                                    >
                                                        <a className="card-img-top d-block overflow-hidden">
                                                            <img
                                                                src="/img/shop/catalog/50.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <div className="card-body py-2">
                                                        <a
                                                            className="product-meta d-block fs-xs pb-1"
                                                            href="#"
                                                        >
                                                            Swimwear
                                                        </a>
                                                        <h3 className="product-title fs-sm">
                                                            <Link
                                                                href="/shop-single-v1"
                                                                passHref
                                                            >
                                                                <a>
                                                                    Pool
                                                                    Santorini
                                                                    Tankini
                                                                </a>
                                                            </Link>
                                                        </h3>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="product-price">
                                                                <span className="text-accent">
                                                                    $20.
                                                                    <small>
                                                                        00
                                                                    </small>
                                                                </span>
                                                            </div>
                                                            <div className="star-rating">
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star-filled active"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                                <i className="star-rating-icon ci-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Shop by brand-->*/}
                <section className="container py-lg-4">
                    <h2 className="h3 text-center pb-4">Shop by brand</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/01.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/02.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/03.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/04.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/05.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/06.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/07.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/08.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/09.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/10.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/11.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/12.png"
                                    style={{ width: "150px" }}
                                    alt="Brand"
                                />
                            </a>
                        </div>
                    </div>
                </section>
                {/*<!-- Product widgets-->*/}
                <section className="container pt-md-3 pb-4 pb-md-5 mb-lg-2">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-2 py-3">
                            <div className="widget">
                                <h3 className="widget-title">Bestsellers</h3>
                                <div className="d-flex align-items-center pb-2 border-bottom">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/cart/widget/01.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>Women Colorblock Sneakers</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $150.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/cart/widget/02.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>TH Jeans City Backpack</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $79.<small>50</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/cart/widget/03.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>3-Color Sun Stash Hat</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $22.<small>50</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/cart/widget/04.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>Cotton Polo Regular Fit</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $9.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0">...</p>
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="fs-sm">
                                        View more
                                        <i className="ci-arrow-right fs-xs ms-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2 py-3">
                            <div className="widget">
                                <h3 className="widget-title">New arrivals</h3>
                                <div className="d-flex align-items-center pb-2 border-bottom">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/widget/02.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>Cap with Appliqué</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $15.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/widget/01.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>
                                                    Girl&#39;s T-shirt with
                                                    Motif
                                                </a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $14.<small>50</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/widget/03.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>Leather Platform Sandals</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $78.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <Link href="/shop-single-v1" passHref>
                                        <a className="d-block">
                                            <img
                                                src="/img/shop/widget/04.jpg"
                                                width="64"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a>Regular Fit Cotton Shirt</a>
                                            </Link>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent me-2">
                                                $17.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0">...</p>
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="fs-sm">
                                        View more
                                        <i className="ci-arrow-right fs-xs ms-1"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-none d-lg-block">
                            <Link href="/shop-grid-ls" passHref>
                                <a className="d-block">
                                    <img
                                        className="d-block rounded-3"
                                        src="/img/home/banners/v-banner.jpg"
                                        alt="Promo banner"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <Link href="/blog-list-sidebar" passHref>
                                <a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary">
                                    <div className="card-body text-center">
                                        <i className="ci-edit h3 mt-2 mb-4 text-primary"></i>
                                        <h3 className="h5 mb-1">
                                            Read the blog
                                        </h3>
                                        <p className="text-muted fs-sm">
                                            Latest store, fashion news and
                                            trends
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <a
                                className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
                                href="#"
                            >
                                <div className="card-body text-center">
                                    <i className="ci-instagram h3 mt-2 mb-4 text-accent"></i>
                                    <h3 className="h5 mb-1">
                                        Follow on Instagram
                                    </h3>
                                    <p className="text-muted fs-sm">
                                        #ShopWithCartzilla
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </>
        </FashionLayout>
    );
}
