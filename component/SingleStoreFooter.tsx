/* eslint-disable @next/next/no-img-element */
export default function SingleStoreFooter() {
    return (
        <>
            <footer
                className="bg-darker"
                style={{ marginTop: "-300px", paddingTop: "300px" }}
            >
                <div className="container mt-2 pt-5">
                    <div className="row pt-4 pb-3">
                        <div className="col-lg-2 col-sm-4 pb-2 mb-4">
                            <div className="mt-n1">
                                <a
                                    className="d-inline-block align-middle"
                                    href="#"
                                >
                                    <img
                                        className="d-block mb-4"
                                        src="/img/footer-logo-light.png"
                                        width="117"
                                        alt="Cartzilla"
                                    />
                                </a>
                            </div>
                            <div className="btn-group dropdown disable-autohide">
                                <button
                                    className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                >
                                    <img
                                        className="me-2"
                                        src="/img/flags/en.png"
                                        width="20"
                                        alt="English"
                                    />
                                    Eng / $
                                </button>
                                <ul className="dropdown-menu my-1">
                                    <li className="dropdown-item">
                                        <select className="form-select form-select-sm">
                                            <option value="usd">$ USD</option>
                                            <option value="eur">€ EUR</option>
                                            <option value="ukp">£ UKP</option>
                                            <option value="jpy">¥ JPY</option>
                                        </select>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item pb-1"
                                            href="#"
                                        >
                                            <img
                                                className="me-2"
                                                src="/img/flags/fr.png"
                                                width="20"
                                                alt="Français"
                                            />
                                            Français
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item pb-1"
                                            href="#"
                                        >
                                            <img
                                                className="me-2"
                                                src="/img/flags/de.png"
                                                width="20"
                                                alt="Deutsch"
                                            />
                                            Deutsch
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img
                                                className="me-2"
                                                src="/img/flags/it.png"
                                                width="20"
                                                alt="Italiano"
                                            />
                                            Italiano
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">
                                    Products
                                </h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Headphones
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Earphones
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Speakers
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Accessories
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Special Offers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">
                                    For customers
                                </h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Your Account
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Shipping Rates &amp; Policy
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Refunds &amp; Replacements
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Delivery Info
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-4">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">
                                    Company
                                </h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Contacts
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Affiliates
                                        </a>
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            href="#"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-8">
                            <div className="widget pb-2 mb-4">
                                <h3 className="widget-title text-light pb-1">
                                    Stay informed
                                </h3>
                                <form
                                    className="subscription-form validate"
                                    action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                                    method="post"
                                    name="mc-embedded-subscribe-form"
                                    target="_blank"
                                    noValidate
                                >
                                    <div className="input-group flex-nowrap">
                                        <i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input
                                            className="form-control rounded-start"
                                            type="email"
                                            name="EMAIL"
                                            placeholder="Your email"
                                            required
                                        />
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            name="subscribe"
                                        >
                                            Subscribe*
                                        </button>
                                    </div>
                                    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "-5000px",
                                        }}
                                        aria-hidden="true"
                                    >
                                        <input
                                            className="subscription-form-antispam"
                                            type="text"
                                            name="b_c7103e2c981361a6639545bd5_29ca296126"
                                            tabIndex={-1}
                                        />
                                    </div>
                                    <div className="form-text text-light opacity-50">
                                        *Subscribe to our newsletter to receive
                                        early discount offers, updates and new
                                        products info.
                                    </div>
                                    <div className="subscription-status"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr className="hr-light" />
                    <div className="row align-items-center py-4">
                        <div className="col-sm-6 py-3">
                            <div className="fs-xs text-light opacity-50 text-center text-md-start">
                                © All rights reserved. Made by{" "}
                                <a
                                    className="text-light"
                                    href="#https://createx.studio/"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Bandicoot Studio
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 pt-3 pb-2 text-center text-sm-end">
                            <a
                                className="btn-social bs-light bs-twitter ms-2 mb-2"
                                href="#"
                            >
                                <i className="ci-twitter"></i>
                            </a>
                            <a
                                className="btn-social bs-light bs-facebook ms-2 mb-2"
                                href="#"
                            >
                                <i className="ci-facebook"></i>
                            </a>
                            <a
                                className="btn-social bs-light bs-instagram ms-2 mb-2"
                                href="#"
                            >
                                <i className="ci-instagram"></i>
                            </a>
                            <a
                                className="btn-social bs-light bs-pinterest ms-2 mb-2"
                                href="#"
                            >
                                <i className="ci-pinterest"></i>
                            </a>
                            <a
                                className="btn-social bs-light bs-youtube ms-2 mb-2"
                                href="#"
                            >
                                <i className="ci-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<!-- Toolbar for handheld devices (Single brand store)-->*/}
            <div className="handheld-toolbar">
                <div className="d-table table-layout-fixed w-100">
                    <a
                        className="d-table-cell handheld-toolbar-item"
                        href="#signin-modal"
                        data-bs-toggle="modal"
                    >
                        <span className="handheld-toolbar-icon">
                            <i className="ci-user"></i>
                        </span>
                        <span className="handheld-toolbar-label">Account</span>
                    </a>
                    <a
                        className="d-table-cell handheld-toolbar-item"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        // onclick="window.scrollTo(0, 0)"
                    >
                        <span className="handheld-toolbar-icon">
                            <i className="ci-menu"></i>
                        </span>
                        <span className="handheld-toolbar-label">Menu</span>
                    </a>
                    <a className="d-table-cell handheld-toolbar-item" href="#">
                        <span className="handheld-toolbar-icon">
                            <i className="ci-cart"></i>
                        </span>
                        <span className="handheld-toolbar-label">$0.00</span>
                    </a>
                </div>
            </div>
            {/*<!-- Back To Top Button-->*/}
            <a className="btn-scroll-top" href="#top" data-scroll>
                <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
                    Top
                </span>
                <i className="btn-scroll-top-icon ci-arrow-up"> </i>
            </a>
            <div className="handheld-toolbar">
                <div className="d-table table-layout-fixed w-100">
                    <a
                        className="d-table-cell handheld-toolbar-item"
                        href="#signin-modal"
                        data-bs-toggle="modal"
                    >
                        <span className="handheld-toolbar-icon">
                            <i className="ci-user"></i>
                        </span>
                        <span className="handheld-toolbar-label">Account</span>
                    </a>
                    <a
                        className="d-table-cell handheld-toolbar-item"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        //onclick="window.scrollTo(0, 0)"
                    >
                        <span className="handheld-toolbar-icon">
                            <i className="ci-menu"></i>
                        </span>
                        <span className="handheld-toolbar-label">Menu</span>
                    </a>
                    <a className="d-table-cell handheld-toolbar-item" href="#">
                        <span className="handheld-toolbar-icon">
                            <i className="ci-cart"></i>
                        </span>
                        <span className="handheld-toolbar-label">$0.00</span>
                    </a>
                </div>
            </div>
        </>
    );
}
