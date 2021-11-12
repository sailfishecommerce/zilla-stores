/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Electroniclayout from "../layout/Electroniclayout";

export default function ShopSingleV2() {
    return (
        <Electroniclayout title="Shop single v2">
            <>
                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <Link href="/" passHref>
                                            <a className="text-nowrap">
                                                <i className="ci-home"></i>Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap">
                                        <a href="#">Shop</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Product Page v.2
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-2">
                                Smartwatch Youth Edition
                            </h1>
                            <div>
                                <div className="star-rating">
                                    <i className="star-rating-icon ci-star-filled active"></i>
                                    <i className="star-rating-icon ci-star-filled active"></i>
                                    <i className="star-rating-icon ci-star-filled active"></i>
                                    <i className="star-rating-icon ci-star-filled active"></i>
                                    <i className="star-rating-icon ci-star"></i>
                                </div>
                                <span className="d-inline-block fs-sm text-white opacity-70 align-middle mt-1 ms-1">
                                    74 Reviews
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="bg-light shadow-lg rounded-3">
                        {/*<!-- Tabs-->*/}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a
                                    className="nav-link py-4 px-sm-4 active"
                                    href="#general"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    General{" "}
                                    <span className="d-none d-sm-inline">
                                        Info
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link py-4 px-sm-4"
                                    href="#specs"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    <span className="d-none d-sm-inline">
                                        Tech
                                    </span>{" "}
                                    Specs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link py-4 px-sm-4"
                                    href="#reviews"
                                    data-bs-toggle="tab"
                                    role="tab"
                                >
                                    Reviews{" "}
                                    <span className="fs-sm opacity-60">
                                        (74)
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="px-4 pt-lg-3 pb-3 mb-5">
                            <div className="tab-content px-lg-3">
                                {/*<!-- General info tab-->*/}
                                <div
                                    className="tab-pane fade show active"
                                    id="general"
                                    role="tabpanel"
                                >
                                    <div className="row">
                                        {/*<!-- Product gallery-->*/}
                                        <div className="col-lg-7 pe-lg-0">
                                            <div className="product-gallery">
                                                <div className="product-gallery-preview order-sm-2">
                                                    <div
                                                        className="product-gallery-preview-item active"
                                                        id="first"
                                                    >
                                                        <img
                                                            className="image-zoom"
                                                            src="/img/shop/single/gallery/05.jpg"
                                                            data-zoom="/img/shop/single/gallery/05.jpg"
                                                            alt="Product image"
                                                        />
                                                        <div className="image-zoom-pane"></div>
                                                    </div>
                                                    <div
                                                        className="product-gallery-preview-item"
                                                        id="second"
                                                    >
                                                        <img
                                                            className="image-zoom"
                                                            src="/img/shop/single/gallery/06.jpg"
                                                            data-zoom="/img/shop/single/gallery/06.jpg"
                                                            alt="Product image"
                                                        />
                                                        <div className="image-zoom-pane"></div>
                                                    </div>
                                                    <div
                                                        className="product-gallery-preview-item"
                                                        id="third"
                                                    >
                                                        <img
                                                            className="image-zoom"
                                                            src="/img/shop/single/gallery/07.jpg"
                                                            data-zoom="/img/shop/single/gallery/07.jpg"
                                                            alt="Product image"
                                                        />
                                                        <div className="image-zoom-pane"></div>
                                                    </div>
                                                    <div
                                                        className="product-gallery-preview-item"
                                                        id="fourth"
                                                    >
                                                        <img
                                                            className="image-zoom"
                                                            src="/img/shop/single/gallery/08.jpg"
                                                            data-zoom="/img/shop/single/gallery/08.jpg"
                                                            alt="Product image"
                                                        />
                                                        <div className="image-zoom-pane"></div>
                                                    </div>
                                                </div>
                                                <div className="product-gallery-thumblist order-sm-1">
                                                    <a
                                                        className="product-gallery-thumblist-item active"
                                                        href="#first"
                                                    >
                                                        <img
                                                            src="/img/shop/single/gallery/th05.jpg"
                                                            alt="Product thumb"
                                                        />
                                                    </a>
                                                    <a
                                                        className="product-gallery-thumblist-item"
                                                        href="#second"
                                                    >
                                                        <img
                                                            src="/img/shop/single/gallery/th06.jpg"
                                                            alt="Product thumb"
                                                        />
                                                    </a>
                                                    <a
                                                        className="product-gallery-thumblist-item"
                                                        href="#third"
                                                    >
                                                        <img
                                                            src="/img/shop/single/gallery/th07.jpg"
                                                            alt="Product thumb"
                                                        />
                                                    </a>
                                                    <a
                                                        className="product-gallery-thumblist-item"
                                                        href="#fourth"
                                                    >
                                                        <img
                                                            src="/img/shop/single/gallery/th08.jpg"
                                                            alt="Product thumb"
                                                        />
                                                    </a>
                                                    <a
                                                        className="product-gallery-thumblist-item video-item"
                                                        href="https://www.youtube.com/watch?v=nrQevwouWn0"
                                                    >
                                                        <div className="product-gallery-thumblist-item-text">
                                                            <i className="ci-video"></i>
                                                            Video
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Product details-->*/}
                                        <div className="col-lg-5 pt-4 pt-lg-0">
                                            <div className="product-details ms-auto pb-3">
                                                <div className="h3 fw-normal text-accent mb-3 me-1">
                                                    $124.<small>99</small>
                                                </div>
                                                <div className="fs-sm mb-4">
                                                    <span className="text-heading fw-medium me-1">
                                                        Color:
                                                    </span>
                                                    <span
                                                        className="text-muted"
                                                        id="colorOption"
                                                    >
                                                        Dark blue/Orange
                                                    </span>
                                                </div>
                                                <div className="position-relative me-n4 mb-3">
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="color"
                                                            id="color1"
                                                            data-bs-label="colorOption"
                                                            value="Dark blue/Orange"
                                                            checked
                                                        />
                                                        <label
                                                            className="form-option-label rounded-circle"
                                                            htmlFor="color1"
                                                        >
                                                            <span
                                                                className="form-option-color rounded-circle"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#f25540",
                                                                }}
                                                            ></span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="color"
                                                            id="color2"
                                                            data-bs-label="colorOption"
                                                            value="Dark blue/Green"
                                                        />
                                                        <label
                                                            className="form-option-label rounded-circle"
                                                            htmlFor="color2"
                                                        >
                                                            <span
                                                                className="form-option-color rounded-circle"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#65805b",
                                                                }}
                                                            ></span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="color"
                                                            id="color3"
                                                            data-bs-label="colorOption"
                                                            value="Dark blue/White"
                                                        />
                                                        <label
                                                            className="form-option-label rounded-circle"
                                                            htmlFor="color3"
                                                        >
                                                            <span
                                                                className="form-option-color rounded-circle"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#f5f5f5",
                                                                }}
                                                            ></span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-option form-check-inline mb-2">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="color"
                                                            id="color4"
                                                            data-bs-label="colorOption"
                                                            value="Dark blue/Black"
                                                        />
                                                        <label
                                                            className="form-option-label rounded-circle"
                                                            htmlFor="color4"
                                                        >
                                                            <span
                                                                className="form-option-color rounded-circle"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#333;",
                                                                }}
                                                            ></span>
                                                        </label>
                                                    </div>
                                                    <div className="product-badge product-available mt-n1">
                                                        <i className="ci-security-check"></i>
                                                        Product available
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center pt-2 pb-4">
                                                    <select
                                                        className="form-select me-3"
                                                        style={{
                                                            width: "5rem",
                                                        }}
                                                    >
                                                        <option value="1">
                                                            1
                                                        </option>
                                                        <option value="2">
                                                            2
                                                        </option>
                                                        <option value="3">
                                                            3
                                                        </option>
                                                        <option value="4">
                                                            4
                                                        </option>
                                                        <option value="5">
                                                            5
                                                        </option>
                                                    </select>
                                                    <button
                                                        className="btn btn-primary btn-shadow d-block w-100"
                                                        type="button"
                                                    >
                                                        <i className="ci-cart fs-lg me-2"></i>
                                                        Add to Cart
                                                    </button>
                                                </div>
                                                <div className="d-flex mb-4">
                                                    <div className="w-100 me-3">
                                                        <button
                                                            className="btn btn-secondary d-block w-100"
                                                            type="button"
                                                        >
                                                            <i className="ci-heart fs-lg me-2"></i>
                                                            <span className="d-none d-sm-inline">
                                                                Add to{" "}
                                                            </span>
                                                            Wishlist
                                                        </button>
                                                    </div>
                                                    <div className="w-100">
                                                        <button
                                                            className="btn btn-secondary d-block w-100"
                                                            type="button"
                                                        >
                                                            <i className="ci-compare fs-lg me-2"></i>
                                                            Compare
                                                        </button>
                                                    </div>
                                                </div>
                                                {/*<!-- Product panels-->*/}
                                                <div
                                                    className="accordion mb-4"
                                                    id="productPanels"
                                                >
                                                    <div className="accordion-item">
                                                        <h3 className="accordion-header">
                                                            <a
                                                                className="accordion-button"
                                                                href="#shippingOptions"
                                                                role="button"
                                                                data-bs-toggle="collapse"
                                                                aria-expanded="true"
                                                                aria-controls="shippingOptions"
                                                            >
                                                                <i className="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>
                                                                Shipping options
                                                            </a>
                                                        </h3>
                                                        <div
                                                            className="accordion-collapse collapse show"
                                                            id="shippingOptions"
                                                            data-bs-parent="#productPanels"
                                                        >
                                                            <div className="accordion-body fs-sm">
                                                                <div className="d-flex justify-content-between border-bottom pb-2">
                                                                    <div>
                                                                        <div className="fw-semibold text-dark">
                                                                            Local
                                                                            courier
                                                                            shipping
                                                                        </div>
                                                                        <div className="fs-sm text-muted">
                                                                            2 -
                                                                            4
                                                                            days
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        $16.50
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between border-bottom py-2">
                                                                    <div>
                                                                        <div className="fw-semibold text-dark">
                                                                            UPS
                                                                            ground
                                                                            shipping
                                                                        </div>
                                                                        <div className="fs-sm text-muted">
                                                                            4 -
                                                                            6
                                                                            days
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        $19.00
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between pt-2">
                                                                    <div>
                                                                        <div className="fw-semibold text-dark">
                                                                            Local
                                                                            pickup
                                                                            from
                                                                            store
                                                                        </div>
                                                                        <div className="fs-sm text-muted">
                                                                            &mdash;
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        $0.00
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h3 className="accordion-header">
                                                            <a
                                                                className="accordion-button collapsed"
                                                                href="#localStore"
                                                                role="button"
                                                                data-bs-toggle="collapse"
                                                                aria-expanded="true"
                                                                aria-controls="localStore"
                                                            >
                                                                <i className="ci-location text-muted fs-lg align-middle mt-n1 me-2"></i>
                                                                Find in local
                                                                store
                                                            </a>
                                                        </h3>
                                                        <div
                                                            className="accordion-collapse collapse"
                                                            id="localStore"
                                                            data-bs-parent="#productPanels"
                                                        >
                                                            <div className="accordion-body">
                                                                <select className="form-select">
                                                                    <option>
                                                                        Select
                                                                        your
                                                                        country
                                                                    </option>
                                                                    <option value="Argentina">
                                                                        Argentina
                                                                    </option>
                                                                    <option value="Belgium">
                                                                        Belgium
                                                                    </option>
                                                                    <option value="France">
                                                                        France
                                                                    </option>
                                                                    <option value="Germany">
                                                                        Germany
                                                                    </option>
                                                                    <option value="Spain">
                                                                        Spain
                                                                    </option>
                                                                    <option value="UK">
                                                                        United
                                                                        Kingdom
                                                                    </option>
                                                                    <option value="USA">
                                                                        USA
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<!-- Sharing-->*/}
                                                <label className="form-label d-inline-block align-middle my-2 me-3">
                                                    Share:
                                                </label>
                                                <a
                                                    className="btn-share btn-twitter me-2 my-2"
                                                    href="#"
                                                >
                                                    <i className="ci-twitter"></i>
                                                    Twitter
                                                </a>
                                                <a
                                                    className="btn-share btn-instagram me-2 my-2"
                                                    href="#"
                                                >
                                                    <i className="ci-instagram"></i>
                                                    Instagram
                                                </a>
                                                <a
                                                    className="btn-share btn-facebook my-2"
                                                    href="#"
                                                >
                                                    <i className="ci-facebook"></i>
                                                    Facebook
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Tech specs tab-->*/}
                                <div
                                    className="tab-pane fade"
                                    id="specs"
                                    role="tabpanel"
                                >
                                    <div className="d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                                        <div className="d-flex align-items-center me-md-3">
                                            <img
                                                src="/img/shop/single/gallery/th05.jpg"
                                                width="90"
                                                alt="Product thumb"
                                            />
                                            <div className="ps-3">
                                                <h6 className="fs-base mb-2">
                                                    Smartwatch Youth Edition
                                                </h6>
                                                <div className="h4 fw-normal text-accent">
                                                    $124.<small>99</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center pt-3">
                                            <select
                                                className="form-select me-2"
                                                style={{ width: "5rem" }}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button
                                                className="btn btn-primary btn-shadow me-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-lg me-sm-2"></i>
                                                <span className="d-none d-sm-inline">
                                                    Add to Cart
                                                </span>
                                            </button>
                                            <div className="me-2">
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                    data-bs-toggle="tooltip"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="ci-heart fs-lg"></i>
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                    data-bs-toggle="tooltip"
                                                    title="Compare"
                                                >
                                                    <i className="ci-compare fs-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Specs table-->*/}
                                    <div className="row pt-2">
                                        <div className="col-lg-5 col-sm-6">
                                            <h3 className="h6">
                                                General specs
                                            </h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Model:
                                                    </span>
                                                    <span>
                                                        Amazfit Smartwatch
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Gender:
                                                    </span>
                                                    <span>Unisex</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Smartphone app:
                                                    </span>
                                                    <span>Amazfit Watch</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        OS campitibility:
                                                    </span>
                                                    <span>Android / iOS</span>
                                                </li>
                                            </ul>
                                            <h3 className="h6">
                                                Physical specs
                                            </h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Shape:
                                                    </span>
                                                    <span>Rectangular</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Body material:
                                                    </span>
                                                    <span>
                                                        Plastics / Ceramics
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Band material:
                                                    </span>
                                                    <span>Silicone</span>
                                                </li>
                                            </ul>
                                            <h3 className="h6">Display</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Display type:
                                                    </span>
                                                    <span>Color</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Display size:
                                                    </span>
                                                    <span>1.28</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Screen resolution:
                                                    </span>
                                                    <span>176 x 176</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Touch screen:
                                                    </span>
                                                    <span>No</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-5 col-sm-6 offset-lg-1">
                                            <h3 className="h6">Functions</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Phone calls:
                                                    </span>
                                                    <span>
                                                        Incoming call
                                                        notification
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Monitoring:
                                                    </span>
                                                    <span>
                                                        Heart rate / Physical
                                                        activity
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        GPS support:
                                                    </span>
                                                    <span>Yes</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Sensors:
                                                    </span>
                                                    <span>
                                                        Heart rate, Gyroscope,
                                                        Geomagnetic, Light
                                                        sensor
                                                    </span>
                                                </li>
                                            </ul>
                                            <h3 className="h6">Battery</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Battery:
                                                    </span>
                                                    <span>Li-Pol</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Battery capacity:
                                                    </span>
                                                    <span>190 mAh</span>
                                                </li>
                                            </ul>
                                            <h3 className="h6">Dimensions</h3>
                                            <ul className="list-unstyled fs-sm pb-2">
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Dimensions:
                                                    </span>
                                                    <span>195 x 20 mm</span>
                                                </li>
                                                <li className="d-flex justify-content-between pb-2 border-bottom">
                                                    <span className="text-muted">
                                                        Weight:
                                                    </span>
                                                    <span>32 g</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- Reviews tab-->*/}
                                <div
                                    className="tab-pane fade"
                                    id="reviews"
                                    role="tabpanel"
                                >
                                    <div className="d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                                        <div className="d-flex align-items-center me-md-3">
                                            <img
                                                src="/img/shop/single/gallery/th05.jpg"
                                                width="90"
                                                alt="Product thumb"
                                            />
                                            <div className="ps-3">
                                                <h6 className="fs-base mb-2">
                                                    Smartwatch Youth Edition
                                                </h6>
                                                <div className="h4 fw-normal text-accent">
                                                    $124.<small>99</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center pt-3">
                                            <select
                                                className="form-select me-2"
                                                style={{ width: "5rem" }}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <button
                                                className="btn btn-primary btn-shadow me-2"
                                                type="button"
                                            >
                                                <i className="ci-cart fs-lg me-sm-2"></i>
                                                <span className="d-none d-sm-inline">
                                                    Add to Cart
                                                </span>
                                            </button>
                                            <div className="me-2">
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                    data-bs-toggle="tooltip"
                                                    title="Add to Wishlist"
                                                >
                                                    <i className="ci-heart fs-lg"></i>
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                    data-bs-toggle="tooltip"
                                                    title="Compare"
                                                >
                                                    <i className="ci-compare fs-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Reviews-->*/}
                                    <div className="row pt-2 pb-3">
                                        <div className="col-lg-4 col-md-5">
                                            <h2 className="h3 mb-4">
                                                74 Reviews
                                            </h2>
                                            <div className="star-rating me-2">
                                                <i className="ci-star-filled fs-sm text-accent me-1"></i>
                                                <i className="ci-star-filled fs-sm text-accent me-1"></i>
                                                <i className="ci-star-filled fs-sm text-accent me-1"></i>
                                                <i className="ci-star-filled fs-sm text-accent me-1"></i>
                                                <i className="ci-star fs-sm text-muted me-1"></i>
                                            </div>
                                            <span className="d-inline-block align-middle">
                                                4.1 Overall rating
                                            </span>
                                            <p className="pt-3 fs-sm text-muted">
                                                58 out of 74 (77%)
                                                <br />
                                                Customers recommended this
                                                product
                                            </p>
                                        </div>
                                        <div className="col-lg-8 col-md-7">
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3">
                                                    <span className="d-inline-block align-middle text-muted">
                                                        5
                                                    </span>
                                                    <i className="ci-star-filled fs-xs ms-1"></i>
                                                </div>
                                                <div className="w-100">
                                                    <div
                                                        className="progress"
                                                        style={{
                                                            height: "4px",
                                                        }}
                                                    >
                                                        <div
                                                            className="progress-bar bg-success"
                                                            role="progressbar"
                                                            style={{
                                                                width: "60%",
                                                            }}
                                                            aria-valuenow={60}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">
                                                    43
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3">
                                                    <span className="d-inline-block align-middle text-muted">
                                                        4
                                                    </span>
                                                    <i className="ci-star-filled fs-xs ms-1"></i>
                                                </div>
                                                <div className="w-100">
                                                    <div
                                                        className="progress"
                                                        style={{
                                                            height: "4px",
                                                        }}
                                                    >
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{
                                                                width: "27%",
                                                                backgroundColor:
                                                                    "#a7e453",
                                                            }}
                                                            aria-valuenow={2}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">
                                                    16
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3">
                                                    <span className="d-inline-block align-middle text-muted">
                                                        3
                                                    </span>
                                                    <i className="ci-star-filled fs-xs ms-1"></i>
                                                </div>
                                                <div className="w-100">
                                                    <div
                                                        className="progress"
                                                        style={{
                                                            height: "4px",
                                                        }}
                                                    >
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{
                                                                width: "17%",
                                                                backgroundColor:
                                                                    "#ffda75",
                                                            }}
                                                            aria-valuenow={1}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">
                                                    9
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3">
                                                    <span className="d-inline-block align-middle text-muted">
                                                        2
                                                    </span>
                                                    <i className="ci-star-filled fs-xs ms-1"></i>
                                                </div>
                                                <div className="w-100">
                                                    <div
                                                        className="progress"
                                                        style={{
                                                            height: "4px",
                                                        }}
                                                    >
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{
                                                                width: "9%",
                                                                backgroundColor:
                                                                    "#fea569",
                                                            }}
                                                            aria-valuenow={9}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">
                                                    4
                                                </span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="text-nowrap me-3">
                                                    <span className="d-inline-block align-middle text-muted">
                                                        1
                                                    </span>
                                                    <i className="ci-star-filled fs-xs ms-1"></i>
                                                </div>
                                                <div className="w-100">
                                                    <div
                                                        className="progress"
                                                        style={{
                                                            height: "4px",
                                                        }}
                                                    ></div>
                                                </div>
                                                <span className="text-muted ms-3">
                                                    2
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-4 mb-3" />
                                    <div className="row py-4">
                                        {/*<!-- Reviews list-->*/}
                                        <div className="col-md-7">
                                            <div className="d-flex justify-content-end pb-4">
                                                <div className="d-flex flex-nowrap align-items-center">
                                                    <label
                                                        className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block"
                                                        htmlFor="sort-reviews"
                                                    >
                                                        Sort by:
                                                    </label>
                                                    <select
                                                        className="form-select form-select-sm"
                                                        id="sort-reviews"
                                                    >
                                                        <option>Newest</option>
                                                        <option>Oldest</option>
                                                        <option>Popular</option>
                                                        <option>
                                                            High rating
                                                        </option>
                                                        <option>
                                                            Low rating
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/*<!-- Review-->*/}
                                            <div className="product-review pb-4 mb-4 border-bottom">
                                                <div className="d-flex mb-3">
                                                    <div className="d-flex align-items-center me-4 pe-2">
                                                        <img
                                                            className="rounded-circle"
                                                            src="/img/shop/reviews/01.jpg"
                                                            width="50"
                                                            alt="Rafael Marquez"
                                                        />
                                                        <div className="ps-3">
                                                            <h6 className="fs-sm mb-0">
                                                                Rafael Marquez
                                                            </h6>
                                                            <span className="fs-ms text-muted">
                                                                June 28, 2019
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="star-rating">
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                        <div className="fs-ms text-muted">
                                                            83% of users found
                                                            this review helpful
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="fs-md mb-2">
                                                    Nam libero tempore, cum
                                                    soluta nobis est eligendi
                                                    optio cumque nihil impedit
                                                    quo minus id quod maxime
                                                    placeat facere possimus,
                                                    omnis voluptas assumenda
                                                    est...
                                                </p>
                                                <ul className="list-unstyled fs-ms pt-1">
                                                    <li className="mb-1">
                                                        <span className="fw-medium">
                                                            Pros:&nbsp;
                                                        </span>
                                                        Consequuntur magni,
                                                        voluptatem sequi,
                                                        tempora
                                                    </li>
                                                    <li className="mb-1">
                                                        <span className="fw-medium">
                                                            Cons:&nbsp;
                                                        </span>
                                                        Architecto beatae, quis
                                                        autem
                                                    </li>
                                                </ul>
                                                <div className="text-nowrap">
                                                    <button
                                                        className="btn-like"
                                                        type="button"
                                                    >
                                                        15
                                                    </button>
                                                    <button
                                                        className="btn-dislike"
                                                        type="button"
                                                    >
                                                        3
                                                    </button>
                                                </div>
                                            </div>
                                            {/*<!-- Review-->*/}
                                            <div className="product-review pb-4 mb-4 border-bottom">
                                                <div className="d-flex mb-3">
                                                    <div className="d-flex align-items-center me-4 pe-2">
                                                        <img
                                                            className="rounded-circle"
                                                            src="/img/shop/reviews/02.jpg"
                                                            width="50"
                                                            alt="Barbara Palson"
                                                        />
                                                        <div className="ps-3">
                                                            <h6 className="fs-sm mb-0">
                                                                Barbara Palson
                                                            </h6>
                                                            <span className="fs-ms text-muted">
                                                                May 17, 2019
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="star-rating">
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                        </div>
                                                        <div className="fs-ms text-muted">
                                                            99% of users found
                                                            this review helpful
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="fs-md mb-2">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                                <ul className="list-unstyled fs-ms pt-1">
                                                    <li className="mb-1">
                                                        <span className="fw-medium">
                                                            Pros:&nbsp;
                                                        </span>
                                                        Consequuntur magni,
                                                        voluptatem sequi,
                                                        tempora
                                                    </li>
                                                    <li className="mb-1">
                                                        <span className="fw-medium">
                                                            Cons:&nbsp;
                                                        </span>
                                                        Architecto beatae, quis
                                                        autem
                                                    </li>
                                                </ul>
                                                <div className="text-nowrap">
                                                    <button
                                                        className="btn-like"
                                                        type="button"
                                                    >
                                                        34
                                                    </button>
                                                    <button
                                                        className="btn-dislike"
                                                        type="button"
                                                    >
                                                        1
                                                    </button>
                                                </div>
                                            </div>
                                            {/*<!-- Review-->*/}
                                            <div className="product-review pb-4 mb-4 border-bottom">
                                                <div className="d-flex mb-3">
                                                    <div className="d-flex align-items-center me-4 pe-2">
                                                        <img
                                                            className="rounded-circle"
                                                            src="/img/shop/reviews/03.jpg"
                                                            width="50"
                                                            alt="Daniel Adams"
                                                        />
                                                        <div className="ps-3">
                                                            <h6 className="fs-sm mb-0">
                                                                Daniel Adams
                                                            </h6>
                                                            <span className="fs-ms text-muted">
                                                                May 8, 2019
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="star-rating">
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star-filled active"></i>
                                                            <i className="star-rating-icon ci-star"></i>
                                                            <i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                        <div className="fs-ms text-muted">
                                                            75% of users found
                                                            this review helpful
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="fs-md mb-2">
                                                    Sed ut perspiciatis unde
                                                    omnis iste natus error sit
                                                    voluptatem accusantium
                                                    doloremque laudantium, totam
                                                    rem aperiam, eaque ipsa quae
                                                    ab illo inventore veritatis
                                                    et quasi architecto beatae
                                                    vitae dicta sunt explicabo.
                                                    Nemo enim ipsam voluptatem.
                                                </p>
                                                <ul className="list-unstyled fs-ms pt-1">
                                                    <li className="mb-1">
                                                        <span className="fw-medium">
                                                            Pros:&nbsp;
                                                        </span>
                                                        Consequuntur magni,
                                                        voluptatem sequi
                                                    </li>
                                                    <li className="mb-1">
                                                        <span className="fw-medium">
                                                            Cons:&nbsp;
                                                        </span>
                                                        Architecto beatae, quis
                                                        autem, voluptatem sequ
                                                    </li>
                                                </ul>
                                                <div className="text-nowrap">
                                                    <button
                                                        className="btn-like"
                                                        type="button"
                                                    >
                                                        26
                                                    </button>
                                                    <button
                                                        className="btn-dislike"
                                                        type="button"
                                                    >
                                                        9
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-outline-accent"
                                                    type="button"
                                                >
                                                    <i className="ci-reload me-2"></i>
                                                    Load more reviews
                                                </button>
                                            </div>
                                        </div>
                                        {/*<!-- Leave review form-->*/}
                                        <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
                                            <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
                                                <h3 className="h4 pb-2">
                                                    Write a review
                                                </h3>
                                                <form
                                                    className="needs-validation"
                                                    method="post"
                                                    noValidate
                                                >
                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="review-name"
                                                        >
                                                            Your name
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            required
                                                            id="review-name"
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please enter your
                                                            name!
                                                        </div>
                                                        <small className="form-text text-muted">
                                                            Will be displayed on
                                                            the comment.
                                                        </small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="review-email"
                                                        >
                                                            Your email
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            type="email"
                                                            required
                                                            id="review-email"
                                                        />
                                                        <div className="invalid-feedback">
                                                            Please provide valid
                                                            email address!
                                                        </div>
                                                        <small className="form-text text-muted">
                                                            Authentication only
                                                            - we won&#39;t spam
                                                            you.
                                                        </small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="review-rating"
                                                        >
                                                            Rating
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            required
                                                            id="review-rating"
                                                        >
                                                            <option value="">
                                                                Choose rating
                                                            </option>
                                                            <option value="5">
                                                                5 stars
                                                            </option>
                                                            <option value="4">
                                                                4 stars
                                                            </option>
                                                            <option value="3">
                                                                3 stars
                                                            </option>
                                                            <option value="2">
                                                                2 stars
                                                            </option>
                                                            <option value="1">
                                                                1 star
                                                            </option>
                                                        </select>
                                                        <div className="invalid-feedback">
                                                            Please choose
                                                            rating!
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="review-text"
                                                        >
                                                            Review
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={6}
                                                            required
                                                            id="review-text"
                                                        ></textarea>
                                                        <div className="invalid-feedback">
                                                            Please write a
                                                            review!
                                                        </div>
                                                        <small className="form-text text-muted">
                                                            Your review must be
                                                            at least 50
                                                            characters.
                                                        </small>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="review-pros"
                                                        >
                                                            Pros
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={2}
                                                            placeholder="Separated by commas"
                                                            id="review-pros"
                                                        ></textarea>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="review-cons"
                                                        >
                                                            Cons
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={2}
                                                            placeholder="Separated by commas"
                                                            id="review-cons"
                                                        ></textarea>
                                                    </div>
                                                    <button
                                                        className="btn btn-primary btn-shadow d-block w-100"
                                                        type="submit"
                                                    >
                                                        Submit a Review
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Product description-->*/}
                <div className="container pt-lg-3 pb-4 pb-sm-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="h3 pb-2">Choose your style</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident.
                            </p>
                            <img
                                src="/img/shop/single/prod-img2.jpg"
                                alt="Product description"
                            />
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo. Nemo enim
                                ipsam voluptatem quia voluptas sit aspernatur
                                aut odit aut fugit, sed quia consequuntur magni
                                dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem
                                ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="mb-5" />
                {/*<!-- Product carousel (You may also like)-->*/}
                <div className="container pt-lg-2 pb-5 mb-md-3">
                    <h2 className="h3 text-center pb-4">You may also like</h2>
                    <div className="tns-carousel tns-controls-static tns-controls-outside">
                        <div
                            className="tns-carousel-inner"
                            data-carousel-options='{"items": 2, "controls": true, "nav": false, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"768":{"items":3, "gutter": 20}, "1100":{"items":4, "gutter": 30}}}'
                        >
                            {/*<!-- Product-->*/}
                            <div>
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
                                    <a
                                        className="card-img-top d-block overflow-hidden"
                                        href="#"
                                    >
                                        <img
                                            src="/img/shop/catalog/66.jpg"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Smartwatches
                                        </a>
                                        <h3 className="product-title fs-sm">
                                            <a href="#">
                                                Health &amp; Fitness Smartwatch
                                            </a>
                                        </h3>
                                        <div className="d-flex justify-content-between">
                                            <div className="product-price">
                                                <span className="text-accent">
                                                    $250.<small>00</small>
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
                            {/*<!-- Product--> */}
                            <div>
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
                                    <a
                                        className="card-img-top d-block overflow-hidden"
                                        href="#"
                                    >
                                        <img
                                            src="/img/shop/catalog/67.jpg"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Smartwatches
                                        </a>
                                        <h3 className="product-title fs-sm">
                                            <a href="#">
                                                Heart Rate &amp; Activity
                                                Tracker
                                            </a>
                                        </h3>
                                        <div className="d-flex justify-content-between">
                                            <div className="product-price text-accent">
                                                $26.<small>99</small>
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
                            {/*<!-- Product-->*/}
                            <div>
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
                                    <a
                                        className="card-img-top d-block overflow-hidden"
                                        href="#"
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
                                            Smartwatches
                                        </a>
                                        <h3 className="product-title fs-sm">
                                            <a href="#">
                                                Smart Watch Series 5, Aluminium
                                            </a>
                                        </h3>
                                        <div className="d-flex justify-content-between">
                                            <div className="product-price text-accent">
                                                $349.<small>99</small>
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
                            {/*<!-- Product-->*/}
                            <div>
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
                                    <a
                                        className="card-img-top d-block overflow-hidden"
                                        href="#"
                                    >
                                        <img
                                            src="/img/shop/catalog/68.jpg"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Smartwatches
                                        </a>
                                        <h3 className="product-title fs-sm">
                                            <a href="#">
                                                Health &amp; Fitness Smartwatch
                                            </a>
                                        </h3>
                                        <div className="d-flex justify-content-between">
                                            <div className="product-price text-accent">
                                                $118.<small>00</small>
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
                            {/*<!-- Product-->*/}
                            <div>
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
                                    <a
                                        className="card-img-top d-block overflow-hidden"
                                        href="#"
                                    >
                                        <img
                                            src="/img/shop/catalog/69.jpg"
                                            alt="Product"
                                        />
                                    </a>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Smartwatches
                                        </a>
                                        <h3 className="product-title fs-sm">
                                            <a href="#">
                                                Heart Rate &amp; Activity
                                                Tracker
                                            </a>
                                        </h3>
                                        <div className="d-flex justify-content-between">
                                            <div className="product-price text-accent">
                                                $25.<small>00</small>
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
                        </div>
                    </div>
                </div>
                {/*<!-- Product bundles carousel (Cheaper together)-->*/}
                <div className="container pt-lg-1 pb-5 mb-md-3">
                    <div className="card card-body pt-5">
                        <h2 className="h3 text-center pb-4">
                            Cheaper together
                        </h2>
                        <div className="tns-carousel">
                            <div
                                className="tns-carousel-inner"
                                data-carousel-options='{"items": 1, "controls": false, "nav": true}'
                            >
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-md-3 col-sm-5">
                                            <div
                                                className="card product-card card-static text-center mx-auto"
                                                style={{
                                                    maxWidth: "20rem",
                                                }}
                                            >
                                                <a
                                                    className="card-img-top d-block overflow-hidden"
                                                    href="#"
                                                >
                                                    <img
                                                        src="/img/shop/catalog/70.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <div className="card-body py-2">
                                                    <span className="d-inline-block bg-secondary fs-ms rounded-1 py-1 px-2 mb-3">
                                                        Your product
                                                    </span>
                                                    <h3 className="product-title fs-sm">
                                                        <a href="#">
                                                            Smartwatch Youth
                                                            Edition
                                                        </a>
                                                    </h3>
                                                    <div className="product-price text-accent">
                                                        $124.
                                                        <small>99</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-sm-2 text-center">
                                            <div className="display-4 fw-light text-muted px-4">
                                                +
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-5">
                                            <div
                                                className="card product-card card-static text-center mx-auto"
                                                style={{
                                                    maxWidth: "20rem",
                                                }}
                                            >
                                                <a
                                                    className="card-img-top d-block overflow-hidden"
                                                    href="#"
                                                >
                                                    <img
                                                        src="/img/shop/catalog/72.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <div className="card-body py-2">
                                                    <span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">
                                                        -20%
                                                    </span>
                                                    <h3 className="product-title fs-sm">
                                                        <a href="#">
                                                            Smartwatch Wireless
                                                            Charger
                                                        </a>
                                                    </h3>
                                                    <div className="product-price">
                                                        <span className="text-accent">
                                                            $16.
                                                            <small>00</small>
                                                        </span>
                                                        <del className="fs-sm text-muted">
                                                            $20.
                                                            <small>00</small>
                                                        </del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-none d-md-block col-md-1 text-center">
                                            <div className="display-4 fw-light text-muted px-4">
                                                =
                                            </div>
                                        </div>
                                        <div className="col-md-4 pt-3 pt-md-0">
                                            <div
                                                className="bg-secondary p-4 rounded-3 text-center mx-auto"
                                                style={{
                                                    maxWidth: "20rem",
                                                }}
                                            >
                                                <div className="h3 fw-normal text-accent mb-3 me-1">
                                                    $140.<small>99</small>
                                                </div>
                                                <button
                                                    className="btn btn-primary"
                                                    type="button"
                                                >
                                                    Purchase together
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="row align-items-center">
                                        <div className="col-md-3 col-sm-5">
                                            <div
                                                className="card product-card card-static text-center mx-auto"
                                                style={{
                                                    maxWidth: "20rem",
                                                }}
                                            >
                                                <a
                                                    className="card-img-top d-block overflow-hidden"
                                                    href="#"
                                                >
                                                    <img
                                                        src="/img/shop/catalog/70.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <div className="card-body py-2">
                                                    <span className="d-inline-block bg-secondary fs-ms rounded-1 py-1 px-2 mb-3">
                                                        Your product
                                                    </span>
                                                    <h3 className="product-title fs-sm">
                                                        <a href="#">
                                                            Smartwatch Youth
                                                            Edition
                                                        </a>
                                                    </h3>
                                                    <div className="product-price text-accent">
                                                        $124.
                                                        <small>99</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1 col-sm-2 text-center">
                                            <div className="display-4 fw-light text-muted px-4">
                                                +
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-5">
                                            <div
                                                className="card product-card card-static text-center mx-auto"
                                                style={{
                                                    maxWidth: "20rem",
                                                }}
                                            >
                                                <a
                                                    className="card-img-top d-block overflow-hidden"
                                                    href="#"
                                                >
                                                    <img
                                                        src="/img/shop/catalog/71.jpg"
                                                        alt="Product"
                                                    />
                                                </a>
                                                <div className="card-body py-2">
                                                    <span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">
                                                        -15%
                                                    </span>
                                                    <h3 className="product-title fs-sm">
                                                        <a href="#">
                                                            Bluetooth Headset
                                                            Air (White)
                                                        </a>
                                                    </h3>
                                                    <div className="product-price">
                                                        <span className="text-accent">
                                                            $59.
                                                            <small>00</small>
                                                        </span>
                                                        <del className="fs-sm text-muted">
                                                            $69.
                                                            <small>00</small>
                                                        </del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-none d-md-block col-md-1 text-center">
                                            <div className="display-4 fw-light text-muted px-4">
                                                =
                                            </div>
                                        </div>
                                        <div className="col-md-4 pt-3 pt-md-0">
                                            <div
                                                className="bg-secondary p-4 rounded-3 text-center mx-auto"
                                                style={{
                                                    maxWidth: "20rem",
                                                }}
                                            >
                                                <div className="h3 fw-normal text-accent mb-3 me-1">
                                                    $183.<small>99</small>
                                                </div>
                                                <button
                                                    className="btn btn-primary"
                                                    type="button"
                                                >
                                                    Purchase together
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Electroniclayout>
    );
}
