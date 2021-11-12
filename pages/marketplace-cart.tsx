/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import MarketplaceLayout from "../layout/MarketplaceLayout";

export default function MarketplaceCart() {
    return (
        <MarketplaceLayout title="Market place cart">
            <>
                <div className="page-title-overlap bg-accent pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <Link href="/index" passHref>
                                            <a className="text-nowrap">
                                                <i className="ci-home"></i>Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap">
                                        <Link
                                            href="/marketplace-category"
                                            passHref
                                        >
                                            <a>Market</a>
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Cart
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">Your cart</h1>
                        </div>
                    </div>
                </div>
                <div className="container mb-5 pb-3">
                    <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                        <div className="row">
                            {/*<!-- Content-->*/}
                            <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-3">
                                <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                                    {/*<!-- Header-->*/}
                                    <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3">
                                        <div className="py-1">
                                            <Link
                                                href="/marketplace-category"
                                                passHref
                                            >
                                                <a className="btn btn-outline-accent btn-sm">
                                                    <i className="ci-arrow-left me-1 ms-n1"></i>
                                                    Back to shopping
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="d-none d-sm-block py-1 fs-sm">
                                            You have 3 products in your cart
                                        </div>
                                        <div className="py-1">
                                            <Link
                                                href="/marketplace-category"
                                                passHref
                                            >
                                                <a className="btn btn-outline-danger btn-sm">
                                                    <i className="ci-close fs-xs me-1 ms-n1"></i>
                                                    Clear cart
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    {/*<!-- Product-->*/}
                                    <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a
                                                className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                                                style={{ width: "12.5rem" }}
                                            >
                                                <img
                                                    className="rounded-3"
                                                    src="/img/marketplace/products/th02.jpg"
                                                    alt="Product"
                                                />
                                                <span
                                                    className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
                                                    data-bs-toggle="tooltip"
                                                    title="Remove from Favorites"
                                                >
                                                    <i className="ci-trash"></i>
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="text-center text-sm-start">
                                            <h3 className="h6 product-title mb-2">
                                                <Link
                                                    href="/marketplace-single"
                                                    passHref
                                                >
                                                    <a>
                                                        UI Isometric Devices
                                                        Pack (PSD)
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-inline-block text-accent">
                                                $23.<small>00</small>
                                            </div>
                                            <a
                                                className="d-inline-block text-accent fs-ms border-start ms-2 ps-2"
                                                href="#"
                                            >
                                                by uidesigner
                                            </a>
                                            <div className="form-inline pt-2">
                                                <select className="form-select form-select-sm my-1 me-2">
                                                    <option>
                                                        Standard license
                                                    </option>
                                                    <option>
                                                        Extended license
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Product-->*/}
                                    <div className="d-block d-sm-flex align-items-center py-4 border-bottom">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a
                                                className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                                                style={{ width: "12.5rem" }}
                                            >
                                                <img
                                                    className="rounded-3"
                                                    src="/img/marketplace/products/th06.jpg"
                                                    alt="Product"
                                                />
                                                <span
                                                    className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
                                                    data-bs-toggle="tooltip"
                                                    title="Remove from Favorites"
                                                >
                                                    <i className="ci-trash"></i>
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="text-center text-sm-start">
                                            <h3 className="h6 product-title mb-2">
                                                <Link
                                                    href="/marketplace-single"
                                                    passHref
                                                >
                                                    <a>
                                                        Project Devices Showcase
                                                        (PSD)
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-inline-block text-accent">
                                                $18.<small>00</small>
                                            </div>
                                            <a
                                                className="d-inline-block text-accent fs-ms border-start ms-2 ps-2"
                                                href="#"
                                            >
                                                by pixels
                                            </a>
                                            <div className="form-inline pt-2">
                                                <select className="form-select form-select-sm my-1 me-2">
                                                    <option>
                                                        Standard license
                                                    </option>
                                                    <option>
                                                        Extended license
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Product-->*/}
                                    <div className="d-block d-sm-flex align-items-center pt-4 pb-2">
                                        <Link
                                            href="/marketplace-single"
                                            passHref
                                        >
                                            <a
                                                className="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
                                                style={{ width: "12.5rem" }}
                                            >
                                                <img
                                                    className="rounded-3"
                                                    src="/img/marketplace/products/th07.jpg"
                                                    alt="Product"
                                                />
                                                <span
                                                    className="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
                                                    data-bs-toggle="tooltip"
                                                    title="Remove from Favorites"
                                                >
                                                    <i className="ci-trash"></i>
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="text-center text-sm-start">
                                            <h3 className="h6 product-title mb-2">
                                                <Link
                                                    href="/marketplace-single"
                                                    passHref
                                                >
                                                    <a>
                                                        Gravity Devices UI
                                                        Mockup (PSD)
                                                    </a>
                                                </Link>
                                            </h3>
                                            <div className="d-inline-block text-accent">
                                                $15.<small>00</small>
                                            </div>
                                            <a
                                                className="d-inline-block text-accent fs-ms border-start ms-2 ps-2"
                                                href="#"
                                            >
                                                by pixels
                                            </a>
                                            <div className="form-inline pt-2">
                                                <select className="form-select form-select-sm my-1 me-2">
                                                    <option>
                                                        Standard license
                                                    </option>
                                                    <option>
                                                        Extended license
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*<!-- Sidebar-->*/}
                            <aside className="col-lg-4 ps-xl-5">
                                <hr className="d-lg-none" />
                                <div className="p-4 h-100 ms-auto border-start">
                                    <div className="px-lg-2">
                                        <div className="text-center mb-4 py-3 border-bottom">
                                            <h2 className="h6 mb-3 pb-1">
                                                Cart total
                                            </h2>
                                            <h3 className="fw-normal">
                                                $56.<small>00</small>
                                            </h3>
                                        </div>
                                        <div className="text-center mb-4 pb-3 border-bottom">
                                            <h2 className="h6 mb-3 pb-1">
                                                Promo code
                                            </h2>
                                            <form
                                                className="needs-validation pb-2"
                                                method="post"
                                                noValidate
                                            >
                                                <div className="mb-3">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Promo code"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please provide promo
                                                        code.
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-secondary d-block w-100"
                                                    type="submit"
                                                >
                                                    Apply promo code
                                                </button>
                                            </form>
                                        </div>
                                        <Link
                                            href="/marketplace-checkout"
                                            passHref
                                        >
                                            <a className="btn btn-primary btn-shadow d-block w-100 mt-4">
                                                <i className="ci-locked fs-lg me-2"></i>
                                                Secure Checkout
                                            </a>
                                        </Link>
                                        <div className="text-center pt-2 pb-3">
                                            <small className="text-form text-muted">
                                                100% money back guarantee
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </>
        </MarketplaceLayout>
    );
}
