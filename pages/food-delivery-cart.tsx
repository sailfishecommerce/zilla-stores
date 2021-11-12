/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FoodDeliveryLayout from "../layout/FoodDeliveryLayout";

export default function FoodDeliveryCart() {
    return (
        <FoodDeliveryLayout title="Food delivery cart">
            <div className="container pt-4 pb-3 py-sm-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                        <li className="breadcrumb-item">
                            <Link href="//" passHref>
                                <a className="text-nowrap">
                                    <i className="ci-home"></i>Home
                                </a>
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
                <div className="rounded-3 shadow-lg mt-4 mb-5">
                    <ul className="nav nav-tabs nav-justified mb-4">
                        <li className="nav-item">
                            <Link href="/food-delivery-cart" passHref>
                                <a className="nav-link fs-lg fw-medium py-4 active">
                                    1. Your order
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/food-delivery-checkout" passHref>
                                <a className="nav-link fs-lg fw-medium py-4">
                                    2. Checkout
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className="px-3 px-sm-4 px-xl-5 pt-1 pb-4 pb-sm-5">
                        <div className="row">
                            {/*<!-- Items in cart-->*/}
                            <div className="col-lg-8 col-md-7 pt-sm-2">
                                {/*<!-- Item-->*/}
                                <div className="d-sm-flex justify-content-between align-items-center mt-3 mb-4 pb-3 border-bottom">
                                    <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                                        <a
                                            className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                                            href="#"
                                        >
                                            <img
                                                src="/img/food-delivery/cart/01.jpg"
                                                width="120"
                                                alt="Pizza"
                                            />
                                        </a>
                                        <div className="pt-2">
                                            <h3 className="product-title fs-base mb-2">
                                                <a href="#">
                                                    Pizza Pepperoni with
                                                    Tomatoes
                                                </a>
                                            </h3>
                                            <div className="fs-sm">
                                                <span className="text-muted me-2">
                                                    Size:
                                                </span>
                                                Medium
                                            </div>
                                            <div className="fs-sm">
                                                <span className="text-muted me-2">
                                                    Base:
                                                </span>
                                                Standard
                                            </div>
                                            <div className="fs-lg text-accent pt-2">
                                                $9.<small>00</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                                        style={{ maxWidth: "9rem" }}
                                    >
                                        <label
                                            className="form-label"
                                            htmlFor="quantity1"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="quantity1"
                                            value="1"
                                            min="1"
                                        />
                                        <button
                                            className="btn btn-link px-0 text-danger"
                                            type="button"
                                        >
                                            <i className="ci-close-circle me-2"></i>
                                            <span className="fs-sm">
                                                Remove
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                {/*<!-- Item-->*/}
                                <div className="d-sm-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                                    <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                                        <a
                                            className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                                            href="#"
                                        >
                                            <img
                                                src="/img/food-delivery/cart/02.jpg"
                                                width="120"
                                                alt="Burger"
                                            />
                                        </a>
                                        <div className="pt-2">
                                            <h3 className="product-title fs-base mb-2">
                                                <a href="#">
                                                    Beef Burger with Fries
                                                </a>
                                            </h3>
                                            <div className="fs-sm">
                                                <span className="text-muted me-2">
                                                    Size:
                                                </span>
                                                XL
                                            </div>
                                            <div className="fs-sm">
                                                <span className="text-muted me-2">
                                                    Sauce:
                                                </span>
                                                Barbeque
                                            </div>
                                            <div className="fs-lg text-accent pt-2">
                                                $12.<small>00</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                                        style={{ maxWidth: "9rem" }}
                                    >
                                        <label
                                            className="form-label"
                                            htmlFor="quantity2"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="quantity2"
                                            value="1"
                                            min="1"
                                        />
                                        <button
                                            className="btn btn-link px-0 text-danger"
                                            type="button"
                                        >
                                            <i className="ci-close-circle me-2"></i>
                                            <span className="fs-sm">
                                                Remove
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                {/*<!-- Item-->*/}
                                <div className="d-sm-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                                    <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
                                        <a
                                            className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
                                            href="#"
                                        >
                                            <img
                                                src="/img/food-delivery/cart/03.jpg"
                                                width="120"
                                                alt="Drink"
                                            />
                                        </a>
                                        <div className="pt-2">
                                            <h3 className="product-title fs-base mb-2">
                                                <a href="#">
                                                    Coca Cola Can, 335ml
                                                </a>
                                            </h3>
                                            <div className="fs-sm">
                                                <span className="text-muted me-2">
                                                    Size:
                                                </span>
                                                335ml
                                            </div>
                                            <div className="fs-lg text-accent pt-2">
                                                $1.<small>00</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
                                        style={{ maxWidth: "9rem" }}
                                    >
                                        <label
                                            className="form-label"
                                            htmlFor="quantity3"
                                        >
                                            Quantity
                                        </label>
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="quantity3"
                                            value="3"
                                            min="1"
                                        />
                                        <button
                                            className="btn btn-link px-0 text-danger"
                                            type="button"
                                        >
                                            <i className="ci-close-circle me-2"></i>
                                            <span className="fs-sm">
                                                Remove
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Sidebar-->*/}
                            <div className="col-lg-4 col-md-5 pt-3 pt-sm-4">
                                <div className="rounded-3 bg-secondary px-3 px-sm-4 py-4">
                                    <div className="text-center mb-4 pb-3 border-bottom">
                                        <h3 className="h5 mb-3 pb-1">Total</h3>
                                        <h4 className="fw-normal">
                                            $24.<small>00</small>
                                        </h4>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="form-label mb-3"
                                            htmlFor="order-comments"
                                        >
                                            <span className="badge bg-info fs-xs me-2">
                                                Note
                                            </span>
                                            Additional comments
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            id="order-comments"
                                        ></textarea>
                                    </div>
                                    <h3 className="h6 mb-4">
                                        Apply promo code
                                    </h3>
                                    <form
                                        className="needs-validation"
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
                                                Please provide promo code.
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-outline-primary d-block w-100"
                                            type="submit"
                                        >
                                            Apply promo code
                                        </button>
                                    </form>
                                    <Link
                                        href="/food-delivery-checkout"
                                        passHref
                                    >
                                        <a className="btn btn-primary btn-shadow d-block w-100 mt-4 mb-3">
                                            <i className="ci-card fs-lg me-2"></i>
                                            Proceed to Checkout
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FoodDeliveryLayout>
    );
}
