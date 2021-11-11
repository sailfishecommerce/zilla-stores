/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import GroceryLayout from "../layout/GroceryLayout";

export default function GroceryCheckout() {
    return (
        <GroceryLayout title="Grocery checkout">
            <section className="ps-lg-4 pe-lg-3 pt-4">
                <div className="px-3 pt-2">
                    <nav className="mb-4" aria-label="breadcrumb">
                        <ol className="breadcrumb flex-lg-nowrap">
                            <li className="breadcrumb-item">
                                <Link href="/home-grocery-store" passHref>
                                    <a className="text-nowrap">
                                        <i className="ci-home"></i>Home
                                    </a>
                                </Link>
                            </li>
                            <li
                                className="breadcrumb-item text-nowrap active"
                                aria-current="page"
                            >
                                Checkout
                            </li>
                        </ol>
                    </nav>
                    <form className="needs-validation" noValidate>
                        <div className="row g-0 pb-5 mb-xl-3">
                            <div className="col-xl-6 mb-3">
                                <h1 className="h2 mb-4">Checkout</h1>
                                <h2 className="h5 mb-4">Delivery details</h2>
                                <div className="d-flex flex-wrap justify-content-between align-items-center rounded-3 border py-2 px-3 mb-4">
                                    <div className="d-flex align-items-center me-3 py-2">
                                        <img
                                            className="rounded-circle"
                                            src="/img/grocery/newyork.jpg"
                                            width="50"
                                            alt="New York"
                                        />
                                        <div className="ps-3">
                                            <div className="fs-ms text-muted">
                                                Your city is:
                                            </div>
                                            <div className="fs-md fw-medium text-heading">
                                                New York, USA
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2">
                                        <a
                                            className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0"
                                            href="#"
                                        >
                                            <i className="ci-edit me-2"></i>
                                            Change city
                                        </a>
                                    </div>
                                </div>
                                <div className="row gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="co-fn"
                                        >
                                            First name{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="co-fn"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your first name!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="co-ln"
                                        >
                                            Last name{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="co-ln"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your last name!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="co-ln"
                                        >
                                            Phone number{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="tel"
                                            id="co-phone"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your phone number!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="co-fn"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            className="form-control bg-image-none"
                                            type="email"
                                            id="co-email"
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <label
                                            className="form-label"
                                            htmlFor="co-address"
                                        >
                                            Address{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="co-address"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your address!
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <label
                                            className="form-label"
                                            htmlFor="co-note"
                                        >
                                            Order note
                                        </label>
                                        <textarea
                                            className="form-control bg-image-none"
                                            id="co-note"
                                            rows={6}
                                            placeholder="Please write here any additional information..."
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="rounded-3 border p-4 my-3">
                                    <h2 className="h6 pb-2">
                                        Do you have a coupon code?
                                    </h2>
                                    <div className="d-flex">
                                        <input
                                            className="form-control bg-image-none me-3"
                                            type="text"
                                            placeholder="Coupon code"
                                        />
                                        <button
                                            className="btn btn-outline-primary"
                                            type="button"
                                        >
                                            Apply code
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 offset-xl-1 mb-2">
                                <div className="bg-light rounded-3 py-5 px-4 px-xxl-5">
                                    <h2 className="h5 pb-3">Your order</h2>
                                    <div className="d-flex align-items-center pb-2 border-bottom">
                                        <Link href="/grocery-single" passHref>
                                            <a className="d-block flex-shrink-0">
                                                <img
                                                    src="/img/grocery/cart/th01.jpg"
                                                    width="64"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="ps-2">
                                            <h6 className="widget-product-title">
                                                <Link
                                                    href="/grocery-single"
                                                    passHref
                                                >
                                                    <a>
                                                        Frozen Oven-ready
                                                        Poultry
                                                    </a>
                                                </Link>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent me-2">
                                                    $15.<small>00</small>
                                                </span>
                                                <span className="text-muted">
                                                    x 1
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-2 border-bottom">
                                        <Link href="/grocery-single" passHref>
                                            <a className="d-block flex-shrink-0">
                                                <img
                                                    src="/img/grocery/cart/th02.jpg"
                                                    width="64"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="ps-2">
                                            <h6 className="widget-product-title">
                                                <Link
                                                    href="/grocery-single"
                                                    passHref
                                                >
                                                    <a>
                                                        TNut Chocolate Paste
                                                        (750g)
                                                    </a>
                                                </Link>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent me-2">
                                                    $6.<small>50</small>
                                                </span>
                                                <span className="text-muted">
                                                    x 1
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center py-2 border-bottom">
                                        <Link href="/grocery-single" passHref>
                                            <a className="d-block flex-shrink-0">
                                                <img
                                                    src="/img/grocery/cart/th03.jpg"
                                                    width="64"
                                                    alt="Product"
                                                />
                                            </a>
                                        </Link>
                                        <div className="ps-2">
                                            <h6 className="widget-product-title">
                                                <Link
                                                    href="/grocery-single"
                                                    passHref
                                                >
                                                    <a>
                                                        Mozzarella Mini Cheese
                                                    </a>
                                                </Link>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent me-2">
                                                    $3.<small>50</small>
                                                </span>
                                                <span className="text-muted">
                                                    x 1
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled fs-sm pt-4 pb-2 border-bottom">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">
                                                Subtotal:
                                            </span>
                                            <span className="text-end fw-medium">
                                                $25.<small>00</small>
                                            </span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">
                                                Delivery:
                                            </span>
                                            <span className="text-end fw-medium">
                                                $7.<small>00</small>
                                            </span>
                                        </li>
                                    </ul>
                                    <h3 className="fw-normal text-center my-4 py-2">
                                        $32.<small>00</small>
                                    </h3>
                                    <div
                                        className="accordion accordio-flush shadow-sm rounded-3 mb-4"
                                        id="payment-methods"
                                    >
                                        <div className="accordion-item border-bottom">
                                            <div className="accordion-header py-3 px-3">
                                                <div
                                                    className="form-check d-table"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#credit-card"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="license"
                                                        id="payment-card"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label fw-medium text-dark"
                                                        htmlFor="payment-card"
                                                    >
                                                        Credit card
                                                        <i className="ci-card text-muted fs-lg align-middle mt-n1 ms-2"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse show"
                                                id="credit-card"
                                                data-bs-parent="#payment-methods"
                                            >
                                                <div className="accordion-body py-2">
                                                    <input
                                                        className="form-control bg-image-none mb-3"
                                                        type="text"
                                                        placeholder="Card number"
                                                    />
                                                    <div className="row">
                                                        <div className="col-6 mb-3">
                                                            <input
                                                                className="form-control bg-image-none"
                                                                type="text"
                                                                placeholder="MM/YY"
                                                            />
                                                        </div>
                                                        <div className="col-6 mb-3">
                                                            <input
                                                                className="form-control bg-image-none"
                                                                type="text"
                                                                placeholder="CVC"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item border-bottom">
                                            <div className="accordion-header py-3 px-3">
                                                <div
                                                    className="form-check d-table"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#paypal"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="license"
                                                        id="payment-paypal"
                                                    />
                                                    <label
                                                        className="form-check-label fw-medium text-dark"
                                                        htmlFor="payment-paypal"
                                                    >
                                                        PayPal
                                                        <i className="ci-paypal text-muted fs-base align-middle mt-n1 ms-2"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="paypal"
                                                data-bs-parent="#payment-methods"
                                            >
                                                <div className="accordion-body pt-2">
                                                    <a
                                                        className="btn btn-primary btn-sm"
                                                        href="#"
                                                    >
                                                        Proceed with PayPal
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-header py-3 px-3">
                                                <div
                                                    className="form-check d-table"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#cash"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="license"
                                                        id="payment-cash"
                                                    />
                                                    <label
                                                        className="form-check-label fw-medium text-dark"
                                                        htmlFor="payment-cash"
                                                    >
                                                        Cash on delivery
                                                        <i className="ci-wallet text-muted fs-lg align-middle mt-n1 ms-2"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div
                                                className="collapse"
                                                id="cash"
                                                data-bs-parent="#payment-methods"
                                            >
                                                <div className="accordion-body pt-2">
                                                    <p className="fs-sm mb-0">
                                                        I will pay with cash to
                                                        the courier on delivery.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <button
                                            className="btn btn-primary d-block w-100"
                                            type="submit"
                                        >
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </GroceryLayout>
    );
}
