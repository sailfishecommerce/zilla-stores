/* eslint-disable @next/next/no-img-element */

export default function TrendingProducts() {
    return (
        <section className="container pt-md-3 pb-5 mb-md-3">
            <h2 className="h3 text-center">Trending products</h2>
            <div className="row pt-4 mx-n2">
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/01.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Sneakers &amp; Keds
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Women Colorblock Sneakers
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $154.<small>00</small>
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
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size1"
                                        id="s-75"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s-75"
                                    >
                                        7.5
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size1"
                                        id="s-80"
                                        checked
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s-80"
                                    >
                                        8
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size1"
                                        id="s-85"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s-85"
                                    >
                                        8.5
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size1"
                                        id="s-90"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s-90"
                                    >
                                        9
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                type="button"
                            >
                                <i className="ci-cart fs-sm me-1"></i>Add to
                                Cart
                            </button>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
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
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/02.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Women’s T-shirt
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Cotton Lace Blouse
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $28.<small>50</small>
                                    </span>
                                    <del className="fs-sm text-muted">
                                        $38.<small>50</small>
                                    </del>
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
                        <div className="card-body card-body-hidden">
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color1"
                                        id="white"
                                        checked
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="white"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#eaeaeb",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color1"
                                        id="blue"
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="blue"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#d1dceb",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color1"
                                        id="yellow"
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="yellow"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#f4e6a2",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color1"
                                        id="pink"
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="pink"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#f3dcff",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <select className="form-select form-select-sm me-2">
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <button
                                    className="btn btn-primary btn-sm"
                                    type="button"
                                >
                                    <i className="ci-cart fs-sm me-1"></i>
                                    Add to Cart
                                </button>
                            </div>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/03.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Women’s Shorts
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Mom High Waist Shorts
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $39.<small>50</small>
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
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size2"
                                        id="xs"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="xs"
                                    >
                                        XS
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size2"
                                        id="s"
                                        checked
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s"
                                    >
                                        S
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size2"
                                        id="m"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="m"
                                    >
                                        M
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size2"
                                        id="l"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="l"
                                    >
                                        L
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                type="button"
                            >
                                <i className="ci-cart fs-sm me-1"></i>Add to
                                Cart
                            </button>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/07.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Womens Swimwear
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Two-Piece Bikini in Print
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $18.<small>99</small>
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
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size4"
                                        id="xs3"
                                        checked
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="xs3"
                                    >
                                        XS
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size4"
                                        id="s3"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s3"
                                    >
                                        S
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size4"
                                        id="m3"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="m3"
                                    >
                                        M
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                type="button"
                            >
                                <i className="ci-cart fs-sm me-1"></i>Add to
                                Cart
                            </button>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/04.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Sportswear
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Women Sports Jacket
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $68.<small>40</small>
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
                        <div className="card-body card-body-hidden">
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size3"
                                        id="xs2"
                                        checked
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="xs2"
                                    >
                                        XS
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size3"
                                        id="s2"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s2"
                                    >
                                        S
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size3"
                                        id="m2"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="m2"
                                    >
                                        M
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size3"
                                        id="l2"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="l2"
                                    >
                                        L
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                type="button"
                            >
                                <i className="ci-cart fs-sm me-1"></i>Add to
                                Cart
                            </button>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/05.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Men’s Sunglasses
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Polarized Sunglasses
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-muted fs-sm">
                                        Out of stock
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
                            <a
                                className="btn btn-secondary btn-sm d-block w-100 mb-2"
                                href="shop-single-v1.html"
                            >
                                View details
                            </a>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/06.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Backpacks
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    TH Jeans City Backpack
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $79.<small>50</small>
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
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color2"
                                        id="khaki"
                                        checked
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="khaki"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#97947c",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color2"
                                        id="jeans"
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="jeans"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#99a8be",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="color2"
                                        id="white2"
                                    />
                                    <label
                                        className="form-option-label rounded-circle"
                                        htmlFor="white2"
                                    >
                                        <span
                                            className="form-option-color rounded-circle"
                                            style={{
                                                backgroundColor: "#eaeaeb",
                                            }}
                                        ></span>
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                type="button"
                            >
                                <i className="ci-cart fs-sm me-1"></i>Add to
                                Cart
                            </button>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
                <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                    <div className="card product-card">
                        <button
                            className="btn-wishlist btn-sm"
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Add to wishlist"
                        >
                            <i className="ci-heart"></i>
                        </button>
                        <a
                            className="card-img-top d-block overflow-hidden"
                            href="shop-single-v1.html"
                        >
                            <img src="/img/shop/catalog/25.jpg" alt="Product" />
                        </a>
                        <div className="card-body py-2">
                            <a
                                className="product-meta d-block fs-xs pb-1"
                                href="#"
                            >
                                Womens Sneakers
                            </a>
                            <h3 className="product-title fs-sm">
                                <a href="shop-single-v1.html">
                                    Leather High-Top Sneakers
                                </a>
                            </h3>
                            <div className="d-flex justify-content-between">
                                <div className="product-price">
                                    <span className="text-accent">
                                        $215.<small>00</small>
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
                            <div className="text-center pb-2">
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size5"
                                        id="s4-80"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s4-80"
                                    >
                                        8
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size5"
                                        id="s4-85"
                                        checked
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s4-85"
                                    >
                                        8.5
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size5"
                                        id="s4-90"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s4-90"
                                    >
                                        9
                                    </label>
                                </div>
                                <div className="form-check form-option form-check-inline mb-2">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="size5"
                                        id="s4-95"
                                    />
                                    <label
                                        className="form-option-label"
                                        htmlFor="s4-95"
                                    >
                                        9.5
                                    </label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-sm d-block w-100 mb-2"
                                type="button"
                            >
                                <i className="ci-cart fs-sm me-1"></i>Add to
                                Cart
                            </button>
                            <div className="text-center">
                                <a
                                    className="nav-link-style fs-ms"
                                    href="#quick-view"
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
            </div>
            <div className="text-center pt-3">
                <a className="btn btn-outline-accent" href="shop-grid-ls.html">
                    More products<i className="ci-arrow-right ms-1"></i>
                </a>
            </div>
        </section>
    );
}
