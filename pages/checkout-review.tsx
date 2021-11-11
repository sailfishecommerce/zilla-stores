/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import CheckoutStep from "../component/CheckoutStep";
import Orderdetails from "../component/Orderdetails";
import FashionLayout from "../layout/FashionLayout";

export default function CheckoutReview() {
    return (
        <FashionLayout title="Checkout Review">
            <>
                <div className="page-title-overlap bg-dark pt-4">
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
                                        <Link href="/shop-grid-ls" passHref>
                                            <a>Shop</a>
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
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">Checkout</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        <section className="col-lg-8">
                            <CheckoutStep />
                            <Orderdetails />

                            {/*<!-- Client details-->*/}
                            <div className="bg-secondary rounded-3 px-4 pt-4 pb-2">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4 className="h6">Shipping to:</h4>
                                        <ul className="list-unstyled fs-sm">
                                            <li>
                                                <span className="text-muted">
                                                    Client:&nbsp;
                                                </span>
                                                Susan Gardner
                                            </li>
                                            <li>
                                                <span className="text-muted">
                                                    Address:&nbsp;
                                                </span>
                                                44 Shirley Ave. West Chicago, IL
                                                60185, USA
                                            </li>
                                            <li>
                                                <span className="text-muted">
                                                    Phone:&nbsp;
                                                </span>
                                                +1 (808) 764 554 330
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4 className="h6">Payment method:</h4>
                                        <ul className="list-unstyled fs-sm">
                                            <li>
                                                <span className="text-muted">
                                                    Credit Card:&nbsp;
                                                </span>
                                                **** **** **** 5300
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Navigation (desktop)-->*/}
                            <div className="d-none d-lg-flex pt-4">
                                <div className="w-50 pe-3">
                                    <Link href="/checkout-payment" passHref>
                                        <a className="btn btn-secondary d-block w-100">
                                            <i className="ci-arrow-left mt-sm-0 me-1"></i>
                                            <span className="d-none d-sm-inline">
                                                Back to Payment
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Back
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-50 ps-2">
                                    <Link href="/checkout-complete" passHref>
                                        <a className="btn btn-primary d-block w-100">
                                            <span className="d-none d-sm-inline">
                                                Complete order
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Complete
                                            </span>
                                            <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </section>
                        {/*<!-- Sidebar-->*/}
                        <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
                            <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
                                <div className="py-2 px-xl-2">
                                    <h2 className="h6 text-center mb-4">
                                        Order summary
                                    </h2>
                                    <ul className="list-unstyled fs-sm pb-2 border-bottom">
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">
                                                Subtotal:
                                            </span>
                                            <span className="text-end">
                                                $265.<small>00</small>
                                            </span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">
                                                Shipping:
                                            </span>
                                            <span className="text-end">—</span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">Taxes:</span>
                                            <span className="text-end">
                                                $9.<small>50</small>
                                            </span>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span className="me-2">
                                                Discount:
                                            </span>
                                            <span className="text-end">—</span>
                                        </li>
                                    </ul>
                                    <h3 className="fw-normal text-center my-4">
                                        $274.<small>50</small>
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
                                </div>
                            </div>
                        </aside>
                    </div>
                    {/*<!-- Navigation (mobile)-->*/}
                    <div className="row d-lg-none">
                        <div className="col-lg-8">
                            <div className="d-flex pt-4 mt-3">
                                <div className="w-50 pe-3">
                                    <Link href="/checkout-payment" passHref>
                                        <a className="btn btn-secondary d-block w-100">
                                            <i className="ci-arrow-left mt-sm-0 me-1"></i>
                                            <span className="d-none d-sm-inline">
                                                Back to Payment
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Back
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-50 ps-2">
                                    <Link href="/checkout-complete" passHref>
                                        <a className="btn btn-primary d-block w-100">
                                            <span className="d-none d-sm-inline">
                                                Complete order
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Complete
                                            </span>
                                            <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
