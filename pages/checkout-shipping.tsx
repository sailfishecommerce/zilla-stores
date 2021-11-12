/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CheckoutStep from "../component/CheckoutStep";

import FashionLayout from "../layout/FashionLayout";

export default function CheckoutShipping() {
    return (
        <FashionLayout title="Checkout Review">
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
                            {/*<!-- Shipping methods table-->*/}
                            <h2 className="h6 pb-3 mb-2">
                                Choose shipping method
                            </h2>
                            <div className="table-responsive">
                                <table className="table table-hover fs-sm border-top">
                                    <thead>
                                        <tr>
                                            <th className="align-middle"></th>
                                            <th className="align-middle">
                                                Shipping method
                                            </th>
                                            <th className="align-middle">
                                                Delivery time
                                            </th>
                                            <th className="align-middle">
                                                Handling fee
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="courier"
                                                        name="shipping-method"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="courier"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Courier
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default
                                                    zone), United States &amp;
                                                    Canada
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                2 - 4 days
                                            </td>
                                            <td className="align-middle">
                                                $26.50
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="local"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="local"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Local Shipping
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default
                                                    zone), United States &amp;
                                                    Canada
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                up to one week
                                            </td>
                                            <td className="align-middle">
                                                $10.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="flat"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="flat"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Flat Rate
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default zone)
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                5 - 7 days
                                            </td>
                                            <td className="align-middle">
                                                $33.85
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="ups"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="ups"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    UPS Ground Shipping
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default zone)
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                4 - 6 days
                                            </td>
                                            <td className="align-middle">
                                                $18.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="pickup"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="pickup"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Local Pickup from store
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default zone)
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                &mdash;
                                            </td>
                                            <td className="align-middle">
                                                $0.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="locker"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="locker"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Pick Up at Bandicoot Locker
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default
                                                    zone), United States &amp;
                                                    Canada
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                &mdash;
                                            </td>
                                            <td className="align-middle">
                                                $9.99
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="global-export"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="global-export"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Bandicoot Global Export
                                                </span>
                                                <br />
                                                <span className="text-muted fs-sm">
                                                    All addresses (default
                                                    zone), outside United States
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                3 - 4 days
                                            </td>
                                            <td className="align-middle">
                                                $25.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="same-day"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="same-day"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    Same-Day Delivery
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    Only United States
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                &mdash;
                                            </td>
                                            <td className="align-middle">
                                                $34.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check mb-4">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="international"
                                                        name="shipping-method"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="international"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <span className="text-dark fw-medium">
                                                    International Shipping
                                                </span>
                                                <br />
                                                <span className="text-muted">
                                                    All addresses (default zone)
                                                </span>
                                            </td>
                                            <td className="align-middle">
                                                up to 15 days
                                            </td>
                                            <td className="align-middle">
                                                $27.00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*<!-- Navigation (desktop)-->*/}
                            <div className="d-none d-lg-flex pt-4">
                                <div className="w-50 pe-3">
                                    <Link href="/checkout-details" passHref>
                                        <a className="btn btn-secondary d-block w-100">
                                            <i className="ci-arrow-left mt-sm-0 me-1"></i>
                                            <span className="d-none d-sm-inline">
                                                Back to Adresses
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Back
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-50 ps-2">
                                    <Link href="/checkout-payment" passHref>
                                        <a className="btn btn-primary d-block w-100">
                                            <span className="d-none d-sm-inline">
                                                Proceed to Payment
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Next
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
                                    <div className="widget mb-3">
                                        <h2 className="widget-title text-center">
                                            Order summary
                                        </h2>
                                        <div className="d-flex align-items-center pb-2 border-bottom">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a className="d-block flex-shrink-0">
                                                    <img
                                                        src="/img/shop
										/cart/widget/01.jpg"
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
                                                            Women Colorblock
                                                            Sneakers
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $150.<small>00</small>
                                                    </span>
                                                    <span className="text-muted">
                                                        x 1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center py-2 border-bottom">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a className="d-block flex-shrink-0">
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
                                                        <a>
                                                            TH Jeans City
                                                            Backpack
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $79.<small>50</small>
                                                    </span>
                                                    <span className="text-muted">
                                                        x 1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center py-2 border-bottom">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a className="d-block flex-shrink-0">
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
                                                        <a>
                                                            3-Color Sun Stash
                                                            Hat
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $22.<small>50</small>
                                                    </span>
                                                    <span className="text-muted">
                                                        x 1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center py-2 border-bottom">
                                            <Link
                                                href="/shop-single-v1"
                                                passHref
                                            >
                                                <a className="d-block flex-shrink-0">
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
                                                        <a>
                                                            Cotton Polo Regular
                                                            Fit
                                                        </a>
                                                    </Link>
                                                </h6>
                                                <div className="widget-product-meta">
                                                    <span className="text-accent me-2">
                                                        $9.<small>00</small>
                                                    </span>
                                                    <span className="text-muted">
                                                        x 1
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <Link href="/checkout-details" passHref>
                                        <a className="btn btn-secondary d-block w-100">
                                            <i className="ci-arrow-left mt-sm-0 me-1"></i>
                                            <span className="d-none d-sm-inline">
                                                Back to Adresses
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Back
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                                <div className="w-50 ps-2">
                                    <Link href="/checkout-payment" passHref>
                                        <a className="btn btn-primary d-block w-100">
                                            <span className="d-none d-sm-inline">
                                                Proceed to Payment
                                            </span>
                                            <span className="d-inline d-sm-none">
                                                Next
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
