/* eslint-disable @next/next/no-img-element */
import React from "react";
import Electroniclayout from "../layout/Electroniclayout";

export default function HomeElectronicStore() {
    return (
        <Electroniclayout title="Home electronics store">
            <>
                <section className="bg-secondary py-4 pt-md-5">
                    <div className="container py-xl-2">
                        <div className="row">
                            {/*<!-- Slider     -->*/}
                            <div className="col-xl-9 pt-xl-4 order-xl-2">
                                <div className="tns-carousel">
                                    <div
                                        className="tns-carousel-inner"
                                        data-carousel-options='{"items": 1, "controls": false, "loop": false}'
                                    >
                                        <div>
                                            <div className="row align-items-center">
                                                <div className="col-md-6 order-md-2">
                                                    <img
                                                        className="d-block mx-auto"
                                                        src="/img/home/hero-slider/05.jpg"
                                                        alt="VR Collection"
                                                    />
                                                </div>
                                                <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
                                                    <h2 className="fw-light pb-1 from-bottom">
                                                        World of music with
                                                    </h2>
                                                    <h1 className="display-4 from-bottom delay-1">
                                                        Headphones
                                                    </h1>
                                                    <h5 className="fw-light pb-3 from-bottom delay-2">
                                                        Choose between top
                                                        brands
                                                    </h5>
                                                    <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                                                        <a
                                                            className="btn btn-primary btn-shadow"
                                                            href="shop-grid-ls.html"
                                                        >
                                                            Shop Now
                                                            <i className="ci-arrow-right ms-2 me-n1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="row align-items-center">
                                                <div className="col-md-6 order-md-2">
                                                    <img
                                                        className="d-block mx-auto"
                                                        src="/img/home/hero-slider/04.jpg"
                                                        alt="VR Collection"
                                                    />
                                                </div>
                                                <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
                                                    <h2 className="fw-light pb-1 from-start">
                                                        Explore the best
                                                    </h2>
                                                    <h1 className="display-4 from-start delay-1">
                                                        VR Collection
                                                    </h1>
                                                    <h5 className="fw-light pb-3 from-start delay-2">
                                                        on the market
                                                    </h5>
                                                    <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                                                        <a
                                                            className="btn btn-primary btn-shadow"
                                                            href="shop-grid-ls.html"
                                                        >
                                                            Shop Now
                                                            <i className="ci-arrow-right ms-2 me-n1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="row align-items-center">
                                                <div className="col-md-6 order-md-2">
                                                    <img
                                                        className="d-block mx-auto"
                                                        src="/img/home/hero-slider/06.jpg"
                                                        alt="VR Collection"
                                                    />
                                                </div>
                                                <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
                                                    <h2 className="fw-light pb-1 scale-up">
                                                        Check our huge
                                                    </h2>
                                                    <h1 className="display-4 scale-up delay-1">
                                                        Smartphones
                                                    </h1>
                                                    <h5 className="fw-light pb-3 scale-up delay-2">
                                                        &amp; Accessories
                                                        collection
                                                    </h5>
                                                    <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                                                        <a
                                                            className="btn btn-primary btn-shadow"
                                                            href="shop-grid-ls.html"
                                                        >
                                                            Shop Now
                                                            <i className="ci-arrow-right ms-2 me-n1"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Banner group-->*/}
                            <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0">
                                <div
                                    className="table-responsive"
                                    data-simplebar
                                >
                                    <div className="d-flex d-xl-block">
                                        <a
                                            className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0"
                                            href="#"
                                            style={{ minWidth: "16rem" }}
                                        >
                                            <img
                                                src="/img/home/banners/banner-sm01.png"
                                                width="125"
                                                alt="Banner"
                                            />
                                            <div className="py-4 px-2">
                                                <h5 className="mb-2">
                                                    <span className="fw-light">
                                                        Next Gen
                                                    </span>
                                                    <br />
                                                    Video{" "}
                                                    <span className="fw-light">
                                                        with
                                                    </span>
                                                    <br />
                                                    360 Cam
                                                </h5>
                                                <div className="text-info fs-sm">
                                                    Shop now
                                                    <i className="ci-arrow-right fs-xs ms-1"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            className="d-flex align-items-center bg-faded-warning rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0"
                                            href="#"
                                            style={{ minWidth: "16rem" }}
                                        >
                                            <img
                                                src="/img/home/banners/banner-sm02.png"
                                                width="125"
                                                alt="Banner"
                                            />
                                            <div className="py-4 px-2">
                                                <h5 className="mb-2">
                                                    <span className="fw-light">
                                                        Top Rated
                                                    </span>
                                                    <br />
                                                    Gadgets
                                                    <br />
                                                    <span className="fw-light">
                                                        are on{" "}
                                                    </span>
                                                    Sale
                                                </h5>
                                                <div className="text-warning fs-sm">
                                                    Shop now
                                                    <i className="ci-arrow-right fs-xs ms-1"></i>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            className="d-flex align-items-center bg-faded-success rounded-3 pt-2 ps-2 mb-4"
                                            href="#"
                                            style={{ minWidth: "16rem" }}
                                        >
                                            <img
                                                src="/img/home/banners/banner-sm03.png"
                                                width="125"
                                                alt="Banner"
                                            />
                                            <div className="py-4 px-2">
                                                <h5 className="mb-2">
                                                    <span className="fw-light">
                                                        Catch Big
                                                    </span>
                                                    <br />
                                                    Deals{" "}
                                                    <span className="fw-light">
                                                        on
                                                    </span>
                                                    <br />
                                                    Earbuds
                                                </h5>
                                                <div className="text-success fs-sm">
                                                    Shop now
                                                    <i className="ci-arrow-right fs-xs ms-1"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Products grid (Trending products)-->*/}
                <section className="container pt-5">
                    {/*<!-- Heading-->*/}
                    <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                        <h2 className="h3 mb-0 pt-3 me-2">Trending products</h2>
                        <div className="pt-3">
                            <a
                                className="btn btn-outline-accent btn-sm"
                                href="shop-grid-ls.html"
                            >
                                More products
                                <i className="ci-arrow-right ms-1 me-n1"></i>
                            </a>
                        </div>
                    </div>
                    {/*<!-- Grid-->*/}
                    <div className="row pt-2 mx-n2">
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/58.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Headphones
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Wireless Bluetooth Headphones
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $198.<small>00</small>
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
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <span className="badge bg-danger badge-shadow">
                                    Sale
                                </span>
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/59.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Computers
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            AirPort Extreme Base Station
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $98.<small>50</small>
                                            </span>
                                            <del className="fs-sm text-muted">
                                                $149.<small>99</small>
                                            </del>
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
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/60.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        TV, Video &amp; Audio
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Smart TV LED 49’’ Ultra HD
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-muted fs-sm">
                                                Out of stock
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body card-body-hidden">
                                    <a
                                        className="btn btn-secondary btn-sm d-block w-100 mb-2"
                                        href="shop-single-v2.html"
                                    >
                                        View details
                                    </a>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/61.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Smart Home
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Smart Speaker with Voice Control
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $49.<small>99</small>
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
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/62.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Wearable Electronics
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Fitness GPS Smart Watch
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $317.<small>40</small>
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
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/63.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Smartphones
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Popular Smartphone 128GB
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $965.<small>00</small>
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
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                            <div className="card product-card">
                                <span className="badge bg-info badge-shadow">
                                    New
                                </span>
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/64.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Wearable Electronics
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Smart Watch Series 5, Aluminium
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $349.<small>99</small>
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
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-sm-none" />
                        </div>
                        {/*<!-- Product-->*/}
                        <div className="col-lg-3 col-md-4 col-sm-6 px-2">
                            <div className="card product-card">
                                <div className="product-card-actions d-flex align-items-center">
                                    <a
                                        className="btn-action nav-link-style me-2"
                                        href="#"
                                    >
                                        <i className="ci-compare me-1"></i>
                                        Compare
                                    </a>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                </div>
                                <a
                                    className="card-img-top d-block overflow-hidden"
                                    href="shop-single-v2.html"
                                >
                                    <img
                                        src="/img/shop/catalog/65.jpg"
                                        alt="Product"
                                    />
                                </a>
                                <div className="card-body py-2">
                                    <a
                                        className="product-meta d-block fs-xs pb-1"
                                        href="#"
                                    >
                                        Computers
                                    </a>
                                    <h3 className="product-title fs-sm">
                                        <a href="shop-single-v2.html">
                                            Convertible 2-in-1 HD Laptop
                                        </a>
                                    </h3>
                                    <div className="d-flex justify-content-between">
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $412.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body card-body-hidden">
                                    <button
                                        className="btn btn-primary btn-sm d-block w-100 mb-2"
                                        type="button"
                                    >
                                        <i className="ci-cart fs-sm me-1"></i>
                                        Add to Cart
                                    </button>
                                    <div className="text-center">
                                        <a
                                            className="nav-link-style fs-ms"
                                            href="#quick-view-electro"
                                            data-bs-toggle="modal"
                                        >
                                            <i className="ci-eye align-middle me-1"></i>
                                            Quick view
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Promo banner-->*/}
                <section className="container mt-4 mb-grid-gutter">
                    <div className="bg-faded-info rounded-3 py-4">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="px-4 pe-sm-0 ps-sm-5">
                                    <span className="badge bg-danger">
                                        Limited Offer
                                    </span>
                                    <h3 className="mt-4 mb-1 text-body fw-light">
                                        All new
                                    </h3>
                                    <h2 className="mb-1">Last Gen iPad Pro</h2>
                                    <p className="h5 text-body fw-light">
                                        at discounted price. Hurry up!
                                    </p>
                                    <div
                                        className="countdown py-2 h4"
                                        data-countdown="07/01/2021 07:00:00 PM"
                                    >
                                        <div className="countdown-days">
                                            <span className="countdown-value"></span>
                                            <span className="countdown-label text-muted">
                                                d
                                            </span>
                                        </div>
                                        <div className="countdown-hours">
                                            <span className="countdown-value"></span>
                                            <span className="countdown-label text-muted">
                                                h
                                            </span>
                                        </div>
                                        <div className="countdown-minutes">
                                            <span className="countdown-value"></span>
                                            <span className="countdown-label text-muted">
                                                m
                                            </span>
                                        </div>
                                        <div className="countdown-seconds">
                                            <span className="countdown-value"></span>
                                            <span className="countdown-label text-muted">
                                                s
                                            </span>
                                        </div>
                                    </div>
                                    <a className="btn btn-accent" href="#">
                                        View offers
                                        <i className="ci-arrow-right fs-ms ms-1"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <img
                                    src="/img/home/banners/offer.jpg"
                                    alt="iPad Pro Offer"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Brands carousel-->*/}
                <section className="container mb-5">
                    <div className="tns-carousel border-end">
                        <div
                            className="tns-carousel-inner"
                            data-carousel-options='{ "nav": false, "controls": false, "autoplay": true, "autoplayTimeout": 4000, "loop": true, "responsive": {"0":{"items":1},"360":{"items":2},"600":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
                        >
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/13.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/14.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/17.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/16.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/15.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/18.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/19.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    className="d-block bg-white border py-4 py-sm-5 px-2"
                                    href="#"
                                    style={{ marginRight: "-.0625rem" }}
                                >
                                    <img
                                        className="d-block mx-auto"
                                        src="/img/shop/brands/20.png"
                                        style={{ width: "165px" }}
                                        alt="Brand"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<!-- Product widgets-->*/}
                <section className="container pb-4 pb-md-5">
                    <div className="row">
                        {/*<!-- Bestsellers-->*/}
                        <div className="col-md-4 col-sm-6 mb-2 py-3">
                            <div className="widget">
                                <h3 className="widget-title">Bestsellers</h3>
                                <div className="d-flex align-items-center pb-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/cart/widget/05.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Wireless Bluetooth Headphones
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $259.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/cart/widget/06.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Cloud Security Camera
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $122.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/cart/widget/07.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Android Smartphone S10
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $799.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/cart/widget/08.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Android Smart TV Box
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $67.<small>00</small>
                                            </span>
                                            <del className="text-muted fs-xs">
                                                $90.<small>43</small>
                                            </del>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0">...</p>
                                <a className="fs-sm" href="shop-grid-ls.html">
                                    View more
                                    <i className="ci-arrow-right fs-xs ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-2 py-3">
                            <div className="widget">
                                <h3 className="widget-title">New arrivals</h3>
                                <div className="d-flex align-items-center pb-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/06.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Monoblock Desktop PC
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $1,949.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/07.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Laserjet Printer All-in-One
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $428.<small>60</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/08.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Console Controller Charger
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $14.<small>97</small>
                                            </span>
                                            <del className="text-muted fs-xs">
                                                $16.<small>47</small>
                                            </del>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/09.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Smart Watch Series 5, Aluminium
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $349.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0">...</p>
                                <a className="fs-sm" href="shop-grid-ls.html">
                                    View more
                                    <i className="ci-arrow-right fs-xs ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-2 py-3">
                            <div className="widget">
                                <h3 className="widget-title">Top rated</h3>
                                <div className="d-flex align-items-center pb-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/10.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Android Smartphone S9
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $749.<small>99</small>
                                            </span>
                                            <del className="text-muted fs-xs">
                                                $859.<small>99</small>
                                            </del>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/11.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Wireless Bluetooth Headphones
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $428.<small>60</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/12.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                360 Degrees Camera
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $98.<small>75</small>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <a
                                        className="d-block flex-shrink-0"
                                        href="shop-single-v2.html"
                                    >
                                        <img
                                            src="/img/shop/widget/13.jpg"
                                            width="64"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="ps-2">
                                        <h6 className="widget-product-title">
                                            <a href="shop-single-v2.html">
                                                Digital Camera 40MP
                                            </a>
                                        </h6>
                                        <div className="widget-product-meta">
                                            <span className="text-accent">
                                                $210.<small>00</small>
                                            </span>
                                            <del className="text-muted fs-xs">
                                                $249.<small>00</small>
                                            </del>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0">...</p>
                                <a className="fs-sm" href="shop-grid-ls.html">
                                    View more
                                    <i className="ci-arrow-right fs-xs ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container pb-5 mb-md-3">
                    <div className="border rounded-3 p-3">
                        <div className="row">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="bg-secondary p-5 text-center">
                                    <img
                                        className="d-block mb-4 mx-auto"
                                        src="/img/home/yt-logo.png"
                                        width="120"
                                        alt="YouTube"
                                    />
                                    <div className="d-flex justify-content-center align-items-center mb-4">
                                        <img
                                            className="me-2"
                                            src="/img/home/yt-subscribers.png"
                                            width="126"
                                            alt="YouTube Subscribers"
                                        />
                                        <span className="fs-sm">250k+</span>
                                    </div>
                                    <a
                                        className="btn btn-primary border-0 btn-sm mb-3"
                                        href="#"
                                        style={{ backgroundColor: "#ff0000" }}
                                    >
                                        <i className="ci-add-user me-2"></i>
                                        Subscribe*
                                    </a>
                                    <p className="fs-sm mb-0">
                                        *View latest gadgets reviews available
                                        for purchase in our store.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-2">
                                    <h2 className="h4 mb-3">
                                        Latest videos from Bandicoot channel
                                    </h2>
                                    <a
                                        className="btn btn-outline-accent btn-sm mb-3"
                                        href="#"
                                    >
                                        More videos
                                        <i className="ci-arrow-right fs-xs ms-1 me-n1"></i>
                                    </a>
                                </div>
                                <div className="row g-0">
                                    <div className="col-lg-4 col-6 mb-3">
                                        <a
                                            className="d-block text-decoration-0 px-2"
                                            href="https://www.youtube.com/embed/vS93u75NnPo"
                                            data-bs-toggle="video"
                                        >
                                            <div className="position-relative mb-2">
                                                <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                                                    6:16
                                                </span>
                                                <img
                                                    className="w-100"
                                                    src="/img/home/video/cover01.jpg"
                                                    alt="Video cover"
                                                />
                                            </div>
                                            <h6 className="fs-sm pt-1">
                                                5 New Cool Gadgets You Must See
                                                on Bandicoot - Cheap Budget
                                            </h6>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-3">
                                        <a
                                            className="d-block text-decoration-0 px-2"
                                            href="https://www.youtube.com/embed/B6LaYgGogf0"
                                            data-bs-toggle="video"
                                        >
                                            <div className="position-relative mb-2">
                                                <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                                                    7:27
                                                </span>
                                                <img
                                                    className="w-100"
                                                    src="/img/home/video/cover02.jpg"
                                                    alt="Video cover"
                                                />
                                            </div>
                                            <h6 className="fs-sm pt-1">
                                                5 Super Useful Gadgets on
                                                Bandicoot You Must Have in 2020
                                            </h6>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-3">
                                        <a
                                            className="d-block text-decoration-0 px-2"
                                            href="https://www.youtube.com/embed/kB-ROfRS9V4"
                                            data-bs-toggle="video"
                                        >
                                            <div className="position-relative mb-2">
                                                <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                                                    6:20
                                                </span>
                                                <img
                                                    className="w-100"
                                                    src="/img/home/video/cover03.jpg"
                                                    alt="Video cover"
                                                />
                                            </div>
                                            <h6 className="fs-sm pt-1">
                                                Top 5 New Amazing Gadgets on
                                                Bandicoot You Must See
                                            </h6>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-3 d-lg-none">
                                        <a
                                            className="d-block text-decoration-0 px-2"
                                            href="https://www.youtube.com/embed/sJK67XXE_Rg"
                                            data-bs-toggle="video"
                                        >
                                            <div className="position-relative mb-2">
                                                <span className="badge bg-dark position-absolute bottom-0 end-0 mb-2 me-2">
                                                    6:11
                                                </span>
                                                <img
                                                    className="w-100"
                                                    src="/img/home/video/cover04.jpg"
                                                    alt="Video cover"
                                                />
                                            </div>
                                            <h6 className="fs-sm fw-bold pt-1">
                                                5 Amazing Construction
                                                Inventions and Working Tools
                                                Available...
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid px-0">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <a
                                className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary"
                                href="blog-list-sidebar.html"
                            >
                                <div className="card-body text-center">
                                    <i className="ci-edit h3 mt-2 mb-4 text-primary"></i>
                                    <h3 className="h5 mb-1">Read the blog</h3>
                                    <p className="text-muted fs-sm">
                                        Latest store, fashion news and trends
                                    </p>
                                </div>
                            </a>
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
        </Electroniclayout>
    );
}
