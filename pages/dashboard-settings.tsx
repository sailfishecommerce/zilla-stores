/* eslint-disable @next/next/no-img-element */
import DashboardSidebar from "../components/DashboardSidebar";
import React from "react";
import DashboardLayout from "../layout/DashboardLayout";

export default function DashboardSettings() {
    return (
        <DashboardLayout title="Dashboard Settings">
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        {/*<!-- Sidebar-->*/}
                        <DashboardSidebar />

                        <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                            <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                                <h2 className="h3 py-2 text-center text-sm-start">
                                    Settings
                                </h2>
                                {/*<!-- Tabs-->*/}
                                <ul
                                    className="nav nav-tabs nav-justified"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link px-0 active"
                                            href="#profile"
                                            data-bs-toggle="tab"
                                            role="tab"
                                        >
                                            <div className="d-none d-lg-block">
                                                <i className="ci-user opacity-60 me-2"></i>
                                                Profile
                                            </div>
                                            <div className="d-lg-none text-center">
                                                <i className="ci-user opacity-60 d-block fs-xl mb-2"></i>
                                                <span className="fs-ms">
                                                    Profile
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link px-0"
                                            href="#notifications"
                                            data-bs-toggle="tab"
                                            role="tab"
                                        >
                                            <div className="d-none d-lg-block">
                                                <i className="ci-bell opacity-60 me-2"></i>
                                                Notifications
                                            </div>
                                            <div className="d-lg-none text-center">
                                                <i className="ci-bell opacity-60 d-block fs-xl mb-2"></i>
                                                <span className="fs-ms">
                                                    Notifications
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link px-0"
                                            href="#payment"
                                            data-bs-toggle="tab"
                                            role="tab"
                                        >
                                            <div className="d-none d-lg-block">
                                                <i className="ci-card opacity-60 me-2"></i>
                                                Payment methods
                                            </div>
                                            <div className="d-lg-none text-center">
                                                <i className="ci-card opacity-60 d-block fs-xl mb-2"></i>
                                                <span className="fs-ms">
                                                    Payment
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                {/*<!-- Tab content-->*/}
                                <div className="tab-content">
                                    {/*<!-- Profile-->*/}
                                    <div
                                        className="tab-pane fade show active"
                                        id="profile"
                                        role="tabpanel"
                                    >
                                        <div className="bg-secondary rounded-3 p-4 mb-4">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    className="rounded"
                                                    src="/img/marketplace/account/avatar.png"
                                                    width="90"
                                                    alt="Bandicoot Studio"
                                                />
                                                <div className="ps-3">
                                                    <button
                                                        className="btn btn-light btn-shadow btn-sm mb-2"
                                                        type="button"
                                                    >
                                                        <i className="ci-loading me-2"></i>
                                                        Change{" "}
                                                        <span className="d-none d-sm-inline">
                                                            avatar
                                                        </span>
                                                    </button>
                                                    <div className="p mb-0 fs-ms text-muted">
                                                        Upload JPG, GIF or PNG
                                                        image. 300 x 300
                                                        required.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gx-4 gy-3">
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-fn"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-fn"
                                                    value="John"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-ln"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-ln"
                                                    value="Doe"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-email"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-email"
                                                    value="contact@example.com"
                                                    disabled
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-profile-name"
                                                >
                                                    Profile Name
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-profile-name"
                                                    value="Bandicoot Studio"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-country"
                                                >
                                                    Country
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="dashboard-country"
                                                >
                                                    <option>
                                                        Select country
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
                                                    <option
                                                        value="Madagascar"
                                                        selected
                                                    >
                                                        Madagascar
                                                    </option>
                                                    <option value="Spain">
                                                        Spain
                                                    </option>
                                                    <option value="UK">
                                                        United Kingdom
                                                    </option>
                                                    <option value="USA">
                                                        USA
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-city"
                                                >
                                                    City
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-city"
                                                    value="Antananarivo"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-address"
                                                >
                                                    Address Line
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-address"
                                                    value="Some Cool Street, 22/1"
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="dashboard-zip"
                                                >
                                                    ZIP Code
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="dashboard-zip"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <hr className="mt-2 mb-4" />
                                                <div className="d-sm-flex justify-content-between align-items-center">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="freelancer"
                                                            checked
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="freelancer"
                                                        >
                                                            I&#39;m available
                                                            for freelance
                                                        </label>
                                                    </div>
                                                    <button
                                                        className="btn btn-primary mt-3 mt-sm-0"
                                                        type="button"
                                                    >
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<!-- Notifications-->*/}
                                    <div
                                        className="tab-pane fade"
                                        id="notifications"
                                        role="tabpanel"
                                    >
                                        <div className="bg-secondary rounded-3 p-4">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="nf-disable-all"
                                                    data-master-checkbox-htmlFor="#notifocation-settings"
                                                />
                                                <label
                                                    className="form-check-label fw-medium"
                                                    htmlFor="nf-disable-all"
                                                >
                                                    Enable/disable all
                                                    notifications
                                                </label>
                                            </div>
                                        </div>
                                        <div id="notifocation-settings">
                                            <div className="border-bottom p-4">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="nf-product-sold"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="nf-product-sold"
                                                    >
                                                        Product sold
                                                        notifications
                                                    </label>
                                                </div>
                                                <div className="form-text">
                                                    Send an email when someone
                                                    purchased one of my products
                                                </div>
                                            </div>
                                            <div className="border-bottom p-4">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="nf-product-updated"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="nf-product-updated"
                                                    >
                                                        Product update
                                                        notifications
                                                    </label>
                                                </div>
                                                <div className="form-text">
                                                    Send an email when a product
                                                    I&#39;ve purchased is
                                                    updated
                                                </div>
                                            </div>
                                            <div className="border-bottom p-4">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="nf-product-comment"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="nf-product-comment"
                                                    >
                                                        Product comment
                                                        notifications
                                                    </label>
                                                </div>
                                                <div className="form-text">
                                                    Send an email when someone
                                                    comments on one of my
                                                    products
                                                </div>
                                            </div>
                                            <div className="border-bottom p-4">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="nf-product-review"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="nf-product-review"
                                                    >
                                                        Product review
                                                        notification
                                                    </label>
                                                </div>
                                                <div className="form-text">
                                                    Send an email when someone
                                                    leaves a review with their
                                                    rating
                                                </div>
                                            </div>
                                            <div className="border-bottom p-4">
                                                <div className="form-check form-switch">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="nf-daily-summary"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="nf-daily-summary"
                                                    >
                                                        Daily summary emails
                                                    </label>
                                                </div>
                                                <div className="form-text">
                                                    Send me a daily summary of
                                                    all products sold, commented
                                                    or reviewed
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm-end mt-4">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Save changes
                                            </button>
                                        </div>
                                    </div>
                                    {/*<!-- Payment methods-->*/}
                                    <div
                                        className="tab-pane fade"
                                        id="payment"
                                        role="tabpanel"
                                    >
                                        <div className="bg-secondary rounded-3 p-4 mb-4">
                                            <p className="fs-sm text-muted mb-0">
                                                Primary payment method is used
                                                by default
                                            </p>
                                        </div>
                                        <div className="table-responsive fs-md mb-4">
                                            <table className="table table-hover mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Your credit / debit
                                                            cards
                                                        </th>
                                                        <th>Name on card</th>
                                                        <th>Expires on</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="py-3 align-middle">
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="/img/card-visa.png"
                                                                    width="39"
                                                                    alt="Visa"
                                                                />
                                                                <div className="ps-2">
                                                                    <span className="fw-medium text-heading me-1">
                                                                        Visa
                                                                    </span>
                                                                    ending in
                                                                    4999
                                                                    <span className="align-middle badge badge-info ms-2">
                                                                        Primary
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            John doe
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            08 / 2019
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            <a
                                                                className="nav-link-style me-2"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Edit"
                                                            >
                                                                <i className="ci-edit"></i>
                                                            </a>
                                                            <a
                                                                className="nav-link-style text-danger"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Remove"
                                                            >
                                                                <div className="ci-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 align-middle">
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="/img/card-master.png"
                                                                    width="39"
                                                                    alt="MesterCard"
                                                                />
                                                                <div className="ps-2">
                                                                    <span className="fw-medium text-heading me-1">
                                                                        MasterCard
                                                                    </span>
                                                                    ending in
                                                                    0015
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            John doe
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            11 / 2021
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            <a
                                                                className="nav-link-style me-2"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Edit"
                                                            >
                                                                <i className="ci-edit"></i>
                                                            </a>
                                                            <a
                                                                className="nav-link-style text-danger"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Remove"
                                                            >
                                                                <div className="ci-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 align-middle">
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="/img/card-paypal.png"
                                                                    width="39"
                                                                    alt="PayPal"
                                                                />
                                                                <div className="ps-2">
                                                                    <span className="fw-medium text-heading me-1">
                                                                        PayPal
                                                                    </span>
                                                                    j.doe@example.com
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            &mdash;
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            &mdash;
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            <a
                                                                className="nav-link-style me-2"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Edit"
                                                            >
                                                                <i className="ci-edit"></i>
                                                            </a>
                                                            <a
                                                                className="nav-link-style text-danger"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Remove"
                                                            >
                                                                <div className="ci-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 align-middle">
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="/img/card-visa.png"
                                                                    width="39"
                                                                    alt="Visa"
                                                                />
                                                                <div className="ps-2">
                                                                    <span className="fw-medium text-heading me-1">
                                                                        Visa
                                                                    </span>
                                                                    ending in
                                                                    6073
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            John doe
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            09 / 2021
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            <a
                                                                className="nav-link-style me-2"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Edit"
                                                            >
                                                                <i className="ci-edit"></i>
                                                            </a>
                                                            <a
                                                                className="nav-link-style text-danger"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Remove"
                                                            >
                                                                <div className="ci-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 align-middle">
                                                            <div className="d-flex align-items-center">
                                                                <img
                                                                    src="/img/card-visa.png"
                                                                    width="39"
                                                                    alt="Visa"
                                                                />
                                                                <div className="ps-2">
                                                                    <span className="fw-medium text-heading me-1">
                                                                        Visa
                                                                    </span>
                                                                    ending in
                                                                    9791
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            John doe
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            05 / 2021
                                                        </td>
                                                        <td className="py-3 align-middle">
                                                            <a
                                                                className="nav-link-style me-2"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Edit"
                                                            >
                                                                <i className="ci-edit"></i>
                                                            </a>
                                                            <a
                                                                className="nav-link-style text-danger"
                                                                href="#"
                                                                data-bs-toggle="tooltip"
                                                                title="Remove"
                                                            >
                                                                <div className="ci-trash"></div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-sm-end">
                                            <a
                                                className="btn btn-primary"
                                                href="#add-payment"
                                                data-bs-toggle="modal"
                                            >
                                                Add payment method
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
