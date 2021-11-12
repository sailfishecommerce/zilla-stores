/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MarketplaceLayout from "../layout/MarketplaceLayout";

export default function MarketplaceVendor() {
    return (
        <MarketplaceLayout title="Marketplace vendor">
            <>
                <div className="page-title-overlap bg-accent pt-4">
                    <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
                        <div className="d-flex align-items-center pb-3">
                            <div
                                className="img-thumbnail rounded-circle flex-shrink-0"
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
                                    Member since November 2017
                                </span>
                                <span className="badge bg-success">
                                    <i className="ci-check me-1"></i>Available
                                    for freelance
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
                <div className="container mb-5 pb-3">
                    <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                        <div className="row">
                            {/*<!-- Sidebar-->*/}
                            <aside className="col-lg-4 pe-xl-5">
                                <div className="bg-white h-100 border-end p-4">
                                    <div className="p-2">
                                        <h6>About</h6>
                                        <p className="fs-ms text-muted">
                                            Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem
                                            accusantium viras doloremque
                                            laudantium, totam rem aperiam, eaque
                                            ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae
                                            vitae dicta sunt explicabo.
                                        </p>
                                        <hr className="my-4" />
                                        <h6>Contacts</h6>
                                        <ul className="list-unstyled fs-sm">
                                            <li>
                                                <a
                                                    className="nav-link-style d-flex align-items-center"
                                                    href="/mailto:contact@example.com"
                                                >
                                                    <i className="ci-mail opacity-60 me-2"></i>
                                                    contact@example.com
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="nav-link-style d-flex align-items-center"
                                                    href="#"
                                                >
                                                    <i className="ci-globe opacity-60 me-2"></i>
                                                    www.createx.studio
                                                </a>
                                            </li>
                                        </ul>
                                        <a
                                            className="btn-social bs-facebook bs-outline bs-sm me-2 mb-2"
                                            href="#"
                                        >
                                            <i className="ci-facebook"></i>
                                        </a>
                                        <a
                                            className="btn-social bs-twitter bs-outline bs-sm me-2 mb-2"
                                            href="#"
                                        >
                                            <i className="ci-twitter"></i>
                                        </a>
                                        <a
                                            className="btn-social bs-dribbble bs-outline bs-sm me-2 mb-2"
                                            href="#"
                                        >
                                            <i className="ci-dribbble"></i>
                                        </a>
                                        <a
                                            className="btn-social bs-behance bs-outline bs-sm me-2 mb-2"
                                            href="#"
                                        >
                                            <i className="ci-behance"></i>
                                        </a>
                                        <hr className="my-4" />
                                        <h6 className="pb-1">Send message</h6>
                                        <form
                                            className="needs-validation pb-2"
                                            method="post"
                                            noValidate
                                        >
                                            <div className="mb-3">
                                                <textarea
                                                    className="form-control"
                                                    rows={6}
                                                    placeholder="Your message"
                                                    required
                                                ></textarea>
                                                <div className="invalid-feedback">
                                                    Please wirte your message!
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-sm d-block w-100"
                                                type="submit"
                                            >
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                            {/*<!-- Content-->*/}
                            <section className="col-lg-8 pt-lg-4 pb-md-4">
                                <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                                    <h2 className="h3 pt-2 pb-4 mb-4 text-center text-sm-start border-bottom">
                                        Products
                                        <span className="badge bg-faded-accent fs-sm text-body align-middle ms-2">
                                            6
                                        </span>
                                    </h2>
                                    <div className="row pt-2">
                                        {/*<!-- Product-->*/}
                                        <div className="col-sm-6 mb-grid-gutter">
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
                                                    <Link
                                                        href="/marketplace-single"
                                                        passHref
                                                    >
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
                                                                Flat-line
                                                                E-Commerce Icons
                                                                (AI)
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
                                                            $18.
                                                            <small>00</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Product-->*/}
                                        <div className="col-sm-6 mb-grid-gutter">
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
                                                    <Link
                                                        href="/marketplace-single"
                                                        passHref
                                                    >
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
                                                                Square Style
                                                                Mobile UI Kit
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
                                                            $24.
                                                            <small>00</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Product-->*/}
                                        <div className="col-sm-6 mb-grid-gutter">
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
                                                    <Link
                                                        href="/marketplace-single"
                                                        passHref
                                                    >
                                                        <a className="product-thumb-overlay"></a>
                                                    </Link>
                                                    <img
                                                        src="/img/marketplace/products/05.jpg"
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
                                                                Minimal Mobile
                                                                App UI Kit
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
                                                            $23.
                                                            <small>00</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Product-->*/}
                                        <div className="col-sm-6 mb-grid-gutter">
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
                                                    <Link
                                                        href="/marketplace-single"
                                                        passHref
                                                    >
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
                                                                Floating Phone
                                                                and Tablet
                                                                Mockup (PSD)
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
                                                            $15.
                                                            <small>00</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Product-->*/}
                                        <div className="col-sm-6 mb-grid-gutter">
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
                                                    <Link
                                                        href="/marketplace-single"
                                                        passHref
                                                    >
                                                        <a className="product-thumb-overlay"></a>
                                                    </Link>
                                                    <img
                                                        src="/img/marketplace/products/06.jpg"
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
                                                                Travel &amp;
                                                                Landmark Icon
                                                                Pack (AI)
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
                                                            $17.
                                                            <small>00</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- Product-->*/}
                                        <div className="col-sm-6 mb-grid-gutter">
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
                                                    <Link
                                                        href="/marketplace-single"
                                                        passHref
                                                    >
                                                        <a className="product-thumb-overlay"></a>
                                                    </Link>
                                                    <img
                                                        src="/img/marketplace/products/03.jpg"
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
                                                            <i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                    <h3 className="product-title fs-sm mb-2">
                                                        <Link
                                                            href="/marketplace-single"
                                                            passHref
                                                        >
                                                            <a>
                                                                Project Devices
                                                                Showcase (PSD)
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
                                                            $18.
                                                            <small>00</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </>
        </MarketplaceLayout>
    );
}
