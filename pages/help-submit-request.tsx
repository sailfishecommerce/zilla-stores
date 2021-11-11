import FashionLayout from "../layout/FashionLayout";

export default function HelpSubmitRequest() {
    return (
        <FashionLayout title="Help single top">
            <>
                <div className="bg-secondary py-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <a
                                            className="text-nowrap"
                                            href="index.html"
                                        >
                                            <i className="ci-home"></i>Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap">
                                        <a href="help-topics.html">
                                            Help center
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Submit request
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Submit a request</h1>
                        </div>
                    </div>
                </div>
                <div className="container py-5 mt-md-2 mb-md-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div
                                className="offcanvas offcanvas-collapse border-end"
                                id="help-sidebar"
                            >
                                <div className="offcanvas-header align-items-center shadow-sm">
                                    <h2 className="h5 mb-0">
                                        Related articles
                                    </h2>
                                    <button
                                        className="btn-close ms-auto"
                                        type="button"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div
                                    className="offcanvas-body py-grid-gutter py-lg-1"
                                    data-simplebar
                                    data-simplebar-auto-hide="true"
                                >
                                    <div className="widget widget-links">
                                        <h3 className="widget-title d-none d-lg-block">
                                            Related articles
                                        </h3>
                                        <ul className="widget-list">
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Managing account
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Working with dashboard
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Available payment methods
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Delivery information
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Order tracking instructions
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Refund policy
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Offers and discounts
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Reward points
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Affiliate program
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    After purchase support
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Service terms &amp;
                                                    conditions
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="#"
                                                >
                                                    <i className="ci-book opacity-60 align-middle mt-n1 me-1"></i>
                                                    Most popular questions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div
                                className="alert alert-info d-flex fs-sm mb-4"
                                role="alert"
                            >
                                <div className="alert-icon">
                                    <i className="ci-announcement"></i>
                                </div>
                                <div>
                                    Our friendly Support team is always here to
                                    help you. Begin by selecting a topic we can
                                    help you with.
                                </div>
                            </div>
                            <form className="needs-validation" noValidate>
                                <div className="row gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="help-topic"
                                        >
                                            Select a topic{" "}
                                            <strong className="text-danger">
                                                *
                                            </strong>
                                        </label>
                                        <select
                                            className="form-select"
                                            required
                                            id="help-topic"
                                        >
                                            <option>—</option>
                                            <option value="Managing Account">
                                                Managing Account
                                            </option>
                                            <option value="Working with Dashboard">
                                                Working with Dashboard
                                            </option>
                                            <option value="Payment Methods">
                                                Payment Methods
                                            </option>
                                            <option value="Delivery Information">
                                                Delivery Information
                                            </option>
                                            <option value="Refund Policy">
                                                Refund Policy
                                            </option>
                                            <option value="Affiliate Program">
                                                Affiliate Program
                                            </option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please choose a topic!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="help-subject"
                                        >
                                            Request Subject{" "}
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="help-subject"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            className="form-label"
                                            htmlFor="help-message"
                                        >
                                            Request Message{" "}
                                            <strong className="text-danger">
                                                *
                                            </strong>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={6}
                                            required
                                            id="help-message"
                                        ></textarea>
                                        <div className="invalid-feedback">
                                            Please provide a detailed
                                            description of your problem!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="help-name"
                                        >
                                            Your Name{" "}
                                            <strong className="text-danger">
                                                *
                                            </strong>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            id="help-name"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your name!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="help-email"
                                        >
                                            Your Email{" "}
                                            <strong className="text-danger">
                                                *
                                            </strong>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            required
                                            id="help-email"
                                        />
                                        <div className="invalid-feedback">
                                            Please enter valid email address!
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="help-url"
                                        >
                                            Include a relevant URL
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="help-url"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label
                                            className="form-label"
                                            htmlFor="help-file"
                                        >
                                            Attachments
                                        </label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="help-file"
                                        />
                                    </div>
                                    <div className="col-12 pt-2">
                                        <button
                                            className="btn btn-primary me-4"
                                            type="submit"
                                        >
                                            Submit a request
                                        </button>
                                        <a
                                            className="nav-link-style fw-medium d-inline-block align-middle fs-sm py-2"
                                            href="#"
                                        >
                                            <u>Privacy policy</u>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
