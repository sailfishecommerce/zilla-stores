/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FashionLayout from "../layout/FashionLayout";

export default function AccountOrders() {
    return (
        <FashionLayout title="Account orders">
            <>
                <div className="page-title-overlap bg-dark pt-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <a className="text-nowrap" href="index">
                                            <i className="ci-home"></i>Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap">
                                        <a href="#">Account</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Orders history
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 text-light mb-0">My orders</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    <div className="row">
                        {/*<!-- Sidebar-->*/}
                        <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
                            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                                <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                                    <div className="d-md-flex align-items-center">
                                        <div
                                            className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0"
                                            style={{ width: "6.375rem" }}
                                        >
                                            <span
                                                className="badge bg-warning position-absolute end-0 mt-n2"
                                                data-bs-toggle="tooltip"
                                                title="Reward points"
                                            >
                                                384
                                            </span>
                                            <img
                                                className="rounded-circle"
                                                src="/img/shop/account/avatar.jpg"
                                                alt="Susan Gardner"
                                            />
                                        </div>
                                        <div className="ps-md-3">
                                            <h3 className="fs-base mb-0">
                                                Susan Gardner
                                            </h3>
                                            <span className="text-accent fs-sm">
                                                s.gardner@example.com
                                            </span>
                                        </div>
                                    </div>
                                    <a
                                        className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0"
                                        href="#account-menu"
                                        data-bs-toggle="collapse"
                                        aria-expanded="false"
                                    >
                                        <i className="ci-menu me-2"></i>Account
                                        menu
                                    </a>
                                </div>
                                <div
                                    className="d-lg-block collapse"
                                    id="account-menu"
                                >
                                    <div className="bg-secondary px-4 py-3">
                                        <h3 className="fs-sm mb-0 text-muted">
                                            Dashboard
                                        </h3>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        <li className="border-bottom mb-0">
                                            <Link
                                                href="/account-orders"
                                                passHref
                                            >
                                                <a className="nav-link-style d-flex align-items-center px-4 py-3 active">
                                                    <i className="ci-bag opacity-60 me-2"></i>
                                                    Orders
                                                    <span className="fs-sm text-muted ms-auto">
                                                        1
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="border-bottom mb-0">
                                            <Link
                                                href="/account-wishlist"
                                                passHref
                                            >
                                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                                    <i className="ci-heart opacity-60 me-2"></i>
                                                    Wishlist
                                                    <span className="fs-sm text-muted ms-auto">
                                                        3
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="mb-0">
                                            <Link
                                                href="/account-tickets"
                                                passHref
                                            >
                                                <a className="nav-link-style d-flex align-items-center px-4 py-3">
                                                    <i className="ci-help opacity-60 me-2"></i>
                                                    Support tickets
                                                    <span className="fs-sm text-muted ms-auto">
                                                        1
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="bg-secondary px-4 py-3">
                                        <h3 className="fs-sm mb-0 text-muted">
                                            Account settings
                                        </h3>
                                    </div>
                                    <ul className="list-unstyled mb-0">
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="account-profile"
                                            >
                                                <i className="ci-user opacity-60 me-2"></i>
                                                Profile info
                                            </a>
                                        </li>
                                        <li className="border-bottom mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="account-address"
                                            >
                                                <i className="ci-location opacity-60 me-2"></i>
                                                Addresses
                                            </a>
                                        </li>
                                        <li className="mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="account-payment"
                                            >
                                                <i className="ci-card opacity-60 me-2"></i>
                                                Payment methods
                                            </a>
                                        </li>
                                        <li className="d-lg-none border-top mb-0">
                                            <a
                                                className="nav-link-style d-flex align-items-center px-4 py-3"
                                                href="account-signin"
                                            >
                                                <i className="ci-sign-out opacity-60 me-2"></i>
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        {/*<!-- Content  -->*/}
                        <section className="col-lg-8">
                            {/*<!-- Toolbar-->*/}
                            <div className="d-flex justify-content-between align-items-center pt-lg-2 pb-4 pb-lg-5 mb-lg-3">
                                <div className="d-flex align-items-center">
                                    <label
                                        className="d-none d-lg-block fs-sm text-light text-nowrap opacity-75 me-2"
                                        htmlFor="order-sort"
                                    >
                                        Sort orders:
                                    </label>
                                    <label
                                        className="d-lg-none fs-sm text-nowrap opacity-75 me-2"
                                        htmlFor="order-sort"
                                    >
                                        Sort orders:
                                    </label>
                                    <select
                                        className="form-select"
                                        id="order-sort"
                                    >
                                        <option>All</option>
                                        <option>Delivered</option>
                                        <option>In Progress</option>
                                        <option>Delayed</option>
                                        <option>Canceled</option>
                                    </select>
                                </div>
                                <a
                                    className="btn btn-primary btn-sm d-none d-lg-inline-block"
                                    href="account-signin"
                                >
                                    <i className="ci-sign-out me-2"></i>Sign out
                                </a>
                            </div>
                            {/*<!-- Orders list-->*/}
                            <div className="table-responsive fs-md mb-4">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Order #</th>
                                            <th>Date Purchased</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-3">
                                                <a
                                                    className="nav-link-style fw-medium fs-sm"
                                                    href="#order-details"
                                                    data-bs-toggle="modal"
                                                >
                                                    34VB5540K83
                                                </a>
                                            </td>
                                            <td className="py-3">
                                                May 21, 2019
                                            </td>
                                            <td className="py-3">
                                                <span className="badge bg-info m-0">
                                                    In Progress
                                                </span>
                                            </td>
                                            <td className="py-3">$358.75</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">
                                                <a
                                                    className="nav-link-style fw-medium fs-sm"
                                                    href="#order-details"
                                                    data-bs-toggle="modal"
                                                >
                                                    78A643CD409
                                                </a>
                                            </td>
                                            <td className="py-3">
                                                December 09, 2018
                                            </td>
                                            <td className="py-3">
                                                <span className="badge bg-danger m-0">
                                                    Canceled
                                                </span>
                                            </td>
                                            <td className="py-3">
                                                <span>$760.50</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">
                                                <a
                                                    className="nav-link-style fw-medium fs-sm"
                                                    href="#order-details"
                                                    data-bs-toggle="modal"
                                                >
                                                    112P45A90V2
                                                </a>
                                            </td>
                                            <td className="py-3">
                                                October 15, 2018
                                            </td>
                                            <td className="py-3">
                                                <span className="badge bg-warning m-0">
                                                    Delayed
                                                </span>
                                            </td>
                                            <td className="py-3">$1,264.00</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">
                                                <a
                                                    className="nav-link-style fw-medium fs-sm"
                                                    href="#order-details"
                                                    data-bs-toggle="modal"
                                                >
                                                    28BA67U0981
                                                </a>
                                            </td>
                                            <td className="py-3">
                                                July 19, 2018
                                            </td>
                                            <td className="py-3">
                                                <span className="badge bg-success m-0">
                                                    Delivered
                                                </span>
                                            </td>
                                            <td className="py-3">$198.35</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">
                                                <a
                                                    className="nav-link-style fw-medium fs-sm"
                                                    href="#order-details"
                                                    data-bs-toggle="modal"
                                                >
                                                    502TR872W2
                                                </a>
                                            </td>
                                            <td className="py-3">
                                                April 04, 2018
                                            </td>
                                            <td className="py-3">
                                                <span className="badge bg-success m-0">
                                                    Delivered
                                                </span>
                                            </td>
                                            <td className="py-3">$2,133.90</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">
                                                <a
                                                    className="nav-link-style fw-medium fs-sm"
                                                    href="#order-details"
                                                    data-bs-toggle="modal"
                                                >
                                                    47H76G09F33
                                                </a>
                                            </td>
                                            <td className="py-3">
                                                March 30, 2018
                                            </td>
                                            <td className="py-3">
                                                <span className="badge bg-success m-0">
                                                    Delivered
                                                </span>
                                            </td>
                                            <td className="py-3">$86.40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/*<!-- Pagination-->*/}
                            <nav
                                className="d-flex justify-content-between pt-2"
                                aria-label="Page navigation"
                            >
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            <i className="ci-arrow-left me-2"></i>
                                            Prev
                                        </a>
                                    </li>
                                </ul>
                                <ul className="pagination">
                                    <li className="page-item d-sm-none">
                                        <span className="page-link page-link-static">
                                            1 / 5
                                        </span>
                                    </li>
                                    <li
                                        className="page-item active d-none d-sm-block"
                                        aria-current="page"
                                    >
                                        <span className="page-link">
                                            1
                                            <span className="visually-hidden">
                                                (current)
                                            </span>
                                        </span>
                                    </li>
                                    <li className="page-item d-none d-sm-block">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item d-none d-sm-block">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item d-none d-sm-block">
                                        <a className="page-link" href="#">
                                            4
                                        </a>
                                    </li>
                                    <li className="page-item d-none d-sm-block">
                                        <a className="page-link" href="#">
                                            5
                                        </a>
                                    </li>
                                </ul>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Next"
                                        >
                                            Next
                                            <i className="ci-arrow-right ms-2"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
