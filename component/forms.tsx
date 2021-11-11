<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Forms</title>
        <!-- SEO Meta Tags-->
        <meta
            name="description"
            content="Cartzilla - Bootstrap E-commerce Template"
        />
        <meta
            name="keywords"
            content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean"
        />
        <meta name="author" content="Bandicoot Studio" />
        <!-- Viewport-->
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- Favicon and Touch Icons-->
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../favicon-16x16.png"
        />
        <link rel="manifest" href="../site.webmanifest" />
        <link rel="mask-icon" color="#fe6a6a" href="../safari-pinned-tab.svg" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <!-- Vendor Styles including: Font Icons, Plugins, etc.-->
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/simplebar/dist/simplebar.min.css"
        />
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/tiny-slider/dist/tiny-slider.css"
        />
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/prismjs/themes/prism.css"
        />
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/prismjs/plugins/toolbar/prism-toolbar.css"
        />
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/prismjs/plugins/line-numbers/prism-line-numbers.css"
        />
        <!-- Main Theme Styles + Bootstrap-->
        <link rel="stylesheet" media="screen" href="../css/theme.min.css" />
    </head>
    <!-- Body-->
    <body>
        <main className="container-fluid">
            <!-- Main content-->
            <section className="offcanvas-enabled row pb-3 pb-md-4">
                <div className="col-xxl-9">
                    <!-- Navbar-->
                    <header
                        className="navbar navbar-expand navbar-light fixed-top bg-light shadow-sm px-3 px-lg-4"
                        data-scroll-header
                        data-fixed-element
                    >
                        <a
                            className="navbar-brand d-lg-none"
                            href="typography.html"
                            ><img
                                src="../img/logo-dark.png"
                                width="142"
                                alt="Cartzilla"
                        /></a>
                        <ul className="navbar-nav ms-auto d-none d-lg-flex">
                            <li className="nav-item">
                                <a className="nav-link" href="../index.html"
                                    ><i
                                        className="ci-eye align-middle mt-n1 me-2"
                                    ></i
                                    >Live preview</a
                                >
                            </li>
                            <li className="nav-item">
                                <div
                                    className="nav-link disabled text-border px-1"
                                >
                                    |
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="../docs/dev-setup.html"
                                    ><i
                                        className="ci-book align-middle mt-n1 me-2"
                                    ></i
                                    >Documentation</a
                                >
                            </li>
                            <li className="nav-item">
                                <div
                                    className="nav-link disabled text-border px-1"
                                >
                                    |
                                </div>
                            </li>
                        </ul>
                        <button
                            className="navbar-toggler d-block d-lg-none ms-auto"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#components-nav"
                        >
                            <span
                                className="navbar-toggler-icon"
                            ></span></button
                        ><a
                            className="btn btn-primary btn-shadow ms-2 ms-lg-4"
                            href="https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                            target="_blank"
                            rel="noopener"
                            ><i
                                className="ci-cart me-2 d-none d-sm-inline-block"
                            ></i
                            >Buy now</a
                        >
                    </header>
                    <!-- Side navigation-->
                    <aside
                        className="offcanvas offcanvas-expand bg-dark"
                        id="components-nav"
                    >
                        <div
                            className="offcanvas-header bg-darker d-none d-lg-block"
                        >
                            <a
                                className="navbar-brand py-1"
                                href="typography.html"
                                ><img
                                    src="../img/logo-light.png"
                                    width="142"
                                    alt="Cartzilla" /></a
                            ><span className="badge bg-info">Components</span>
                        </div>
                        <div
                            className="offcanvas-header bg-darker align-items-center d-flex d-lg-none"
                        >
                            <div className="d-flex align-items-center">
                                <h5 className="text-light mb-0 me-2">Menu</h5>
                                <span className="badge bg-info"
                                    >Components</span
                                >
                            </div>
                            <button
                                className="btn-close btn-close-white"
                                type="button"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div
                            className="offcanvas-body py-0"
                            data-simplebar
                            data-simplebar-auto-hide="true"
                        >
                            <div className="pt-4 pb-3 mt-lg-3">
                                <div
                                    className="d-flex d-lg-none pb-4 mb-4 border-bottom border-light"
                                >
                                    <a
                                        className="btn btn-outline-light btn-sm me-3"
                                        href="../index.html"
                                        ><i
                                            className="ci-eye align-middle mt-n1 me-2"
                                        ></i
                                        >Live demo</a
                                    ><a
                                        className="btn btn-light btn-sm ps-2"
                                        href="../docs/dev-setup.html"
                                        ><i
                                            className="ci-book align-middle mt-n1 me-2"
                                        ></i
                                        >Documentation</a
                                    >
                                </div>
                                <div
                                    className="widget widget-links widget-light border-bottom border-light mb-4 pb-4 me-n3"
                                >
                                    <h3 className="widget-title text-white">
                                        Content
                                    </h3>
                                    <ul className="widget-list">
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="typography.html"
                                                >Typography</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="icon-font.html"
                                                >Icon font</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="code.html"
                                                >Code</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="images.html"
                                                >Images &amp; figures</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="tables.html"
                                                >Tables</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="widget widget-links widget-light border-bottom border-light mb-4 pb-4 me-n3"
                                >
                                    <h3 className="widget-title text-white">
                                        Components
                                    </h3>
                                    <ul className="widget-list">
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="accordion.html"
                                                >Accordion</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="alerts.html"
                                                >Alerts</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="badge.html"
                                                >Badges</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="blog-components.html"
                                                >Blog components</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="breadcrumb.html"
                                                >Breadcrumb</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="buttons.html"
                                                >Buttons</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="button-group.html"
                                                >Button group</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="cards.html"
                                                >Cards</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="carousel.html"
                                                >Carousel</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="charts.html"
                                                >Charts</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="collapse.html"
                                                >Collapse</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="contacts-card.html"
                                                >Contacts card</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="countdown.html"
                                                >Countdown</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="dropdowns.html"
                                                >Dropdowns</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="footer.html"
                                                >Footer</a
                                            >
                                        </li>
                                        <li className="widget-list-item active">
                                            <a
                                                className="widget-list-link"
                                                href="forms.html"
                                                >Forms</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="gallery.html"
                                                >Gallery</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="input-group.html"
                                                >Input group</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="list-group.html"
                                                >List group</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="modal.html"
                                                >Modal</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="navbar.html"
                                                >Navbar</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="offcanvas.html"
                                                >Offcanvas</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="pagination.html"
                                                >Pagination</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="pills.html"
                                                >Pills</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="placeholders.html"
                                                >Placeholders</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="popovers.html"
                                                >Popovers</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="progress.html"
                                                >Progress</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="shop-components.html"
                                                >Shop components</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="social-buttons.html"
                                                >Social buttons</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="spinners.html"
                                                >Spinners</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="steps.html"
                                                >Steps</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="tabs.html"
                                                >Tabs</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="team.html"
                                                >Team</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="testimonials.html"
                                                >Testimonials / reviews</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="toasts.html"
                                                >Toasts</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="tooltips.html"
                                                >Tooltips</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="video-button.html"
                                                >Video button</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="widgets.html"
                                                >Widgets</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="widget widget-links widget-light mb-4 pb-2"
                                >
                                    <h3 className="widget-title text-white">
                                        Utilities
                                    </h3>
                                    <ul className="widget-list">
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="https://getbootstrap.com/docs/5.1/utilities/borders/"
                                                target="_blank"
                                                rel="noopener"
                                                >Bootstrap</a
                                            >
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                href="utilities.html"
                                                >Cartzilla</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <!-- Page title-->
                    <div className="border-bottom mt-lg-2 pt-5 pb-2 mb-5">
                        <h1 className="mt-3 mt-lg-4 pt-5">Forms</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Form control styles, layout options, and custom
                                components.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/forms/overview/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Supported input types-->
                    <section className="pb-5 mb-md-2" id="forms-types">
                        <h2 className="h5 mb-3">Supported input types</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result1"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result1"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html1"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html1"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug1"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug1"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result1"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="text-input"
                                                >Text</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="text-input"
                                                    value="Artisanal kale"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="search-input"
                                                >Search</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="search"
                                                    id="search-input"
                                                    value="How do I shoot web"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="email-input"
                                                >Email</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    id="email-input"
                                                    value="email@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="url-input"
                                                >URL</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="url"
                                                    id="url-input"
                                                    value="https://getbootstrap.com"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="tel-input"
                                                >Phone</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    id="tel-input"
                                                    value="1-(770)-334-2518"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="pass-input"
                                                >Password</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    id="pass-input"
                                                    value="mypasswordexample"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="textarea-input"
                                                >Textarea</label
                                            >
                                            <div className="col-md-10">
                                                <textarea
                                                    className="form-control"
                                                    id="textarea-input"
                                                    rows="5"
                                                >
Hello World!</textarea
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="select-input"
                                                >Select</label
                                            >
                                            <div className="col-md-10">
                                                <select
                                                    className="form-select"
                                                    id="select-input"
                                                >
                                                    <option>
                                                        Choose option...
                                                    </option>
                                                    <option>
                                                        Option item 1
                                                    </option>
                                                    <option>
                                                        Option item 2
                                                    </option>
                                                    <option>
                                                        Option item 3
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="multiselect-input"
                                                >Multiselect</label
                                            >
                                            <div className="col-md-10">
                                                <select
                                                    className="form-select"
                                                    id="multiselect-input"
                                                    size="3"
                                                    multiple
                                                >
                                                    <option>
                                                        Option item 1
                                                    </option>
                                                    <option>
                                                        Option item 2
                                                    </option>
                                                    <option>
                                                        Option item 3
                                                    </option>
                                                    <option>
                                                        Option item 4
                                                    </option>
                                                    <option>
                                                        Option item 5
                                                    </option>
                                                    <option>
                                                        Option item 6
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="file-input"
                                                >File</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    id="file-input"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="number-input"
                                                >Number</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    id="number-input"
                                                    value="37"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="datalist-input"
                                                >Datalist</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control"
                                                    list="datalist-options"
                                                    id="datalist-input"
                                                    placeholder="Type to search..."
                                                />
                                                <datalist id="datalist-options">
                                                    <option
                                                        value="San Francisco"
                                                    ></option>
                                                    <option
                                                        value="New York"
                                                    ></option>
                                                    <option
                                                        value="Seattle"
                                                    ></option>
                                                    <option
                                                        value="Los Angeles"
                                                    ></option>
                                                    <option
                                                        value="Chicago"
                                                    ></option>
                                                </datalist>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-3 row align-items-center"
                                        >
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="range-input"
                                                >Range</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-range"
                                                    type="range"
                                                    id="range-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <label
                                                className="col-md-2 col-form-label"
                                                htmlFor="color-input"
                                                >Color</label
                                            >
                                            <div className="col-md-10">
                                                <input
                                                    className="form-control form-control-color"
                                                    type="color"
                                                    id="color-input"
                                                    value="#35cfe3"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Text input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;text-input&quot; className=&quot;form-label&quot;&gt;Text&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;text-input&quot; value=&quot;Artisanal kale&quot;&gt;
&lt;/div&gt;

&lt;!-- Search input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;search-input&quot; className=&quot;form-label&quot;&gt;Search&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;search&quot; id=&quot;search-input&quot; value=&quot;How do I shoot web&quot;&gt;
&lt;/div&gt;

&lt;!-- Email input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;email-input&quot; className=&quot;form-label&quot;&gt;Email&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;email&quot; id=&quot;email-input&quot; value=&quot;email@example.com&quot;&gt;
&lt;/div&gt;

&lt;!-- URL Input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;url-input&quot; className=&quot;form-label&quot;&gt;URL&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;url&quot; id=&quot;url-input&quot; value=&quot;https://getbootstrap.com&quot;&gt;
&lt;/div&gt;

&lt;!-- Phone Input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;tel-input&quot; className=&quot;form-label&quot;&gt;Phone&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;tel&quot; id=&quot;tel-input&quot; value=&quot;1-(770)-334-2518&quot;&gt;
&lt;/div&gt;

&lt;!-- Password Input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;pass-input&quot; className=&quot;form-label&quot;&gt;Password&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;password&quot; id=&quot;pass-input&quot; value=&quot;mypasswordexample&quot;&gt;
&lt;/div&gt;

&lt;!-- Textarea --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;textarea-input&quot; className=&quot;form-label&quot;&gt;Textarea&lt;/label&gt;
  &lt;textarea className=&quot;form-control&quot; id=&quot;textarea-input&quot; rows=&quot;5&quot;&gt;Hello World!&lt;/textarea&gt;
&lt;/div&gt;

&lt;!-- Select --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;select-input&quot; className=&quot;form-label&quot;&gt;Select&lt;/label&gt;
  &lt;select className=&quot;form-select&quot; id=&quot;select-input&quot;&gt;
    &lt;option&gt;Choose option...&lt;/option&gt;
    &lt;option&gt;Option item 1&lt;/option&gt;
    &lt;option&gt;Option item 2&lt;/option&gt;
    &lt;option&gt;Option item 3&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;!-- Multiselect --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;multiselect-input&quot; className=&quot;form-label&quot;&gt;Multiselect&lt;/label&gt;
  &lt;select className=&quot;form-select&quot; id=&quot;multiselect-input&quot; size=&quot;3&quot; multiple&gt;
    &lt;option&gt;Option item 1&lt;/option&gt;
    &lt;option&gt;Option item 2&lt;/option&gt;
    &lt;option&gt;Option item 3&lt;/option&gt;
    &lt;option&gt;Option item 4&lt;/option&gt;
    &lt;option&gt;Option item 5&lt;/option&gt;
    &lt;option&gt;Option item 6&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;!-- File input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;file-input&quot; className=&quot;form-label&quot;&gt;File&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;file&quot; id=&quot;file-input&quot;&gt;
&lt;/div&gt;

&lt;!-- Number input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;number-input&quot; className=&quot;form-label&quot;&gt;Number&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;number&quot; id=&quot;number-input&quot; value=&quot;37&quot;&gt;
&lt;/div&gt;

&lt;!-- Datalist --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;datalist-input&quot; className=&quot;form-label&quot;&gt;Datalist&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; list=&quot;datalist-options&quot; id=&quot;datalist-input&quot; placeholder=&quot;Type to search...&quot;&gt;
  &lt;datalist id=&quot;datalist-options&quot;&gt;
    &lt;option value=&quot;San Francisco&quot;&gt;
    &lt;option value=&quot;New York&quot;&gt;
    &lt;option value=&quot;Seattle&quot;&gt;
    &lt;option value=&quot;Los Angeles&quot;&gt;
    &lt;option value=&quot;Chicago&quot;&gt;
  &lt;/datalist&gt;
&lt;/div&gt;

&lt;!-- Range input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;range-input&quot; className=&quot;form-label&quot;&gt;Range&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;range&quot; id=&quot;range-input&quot;&gt;
&lt;/div&gt;

&lt;!-- Color input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;color-input&quot; className=&quot;form-label&quot;&gt;Color&lt;/label&gt;
  &lt;input className=&quot;form-control form-control-color&quot; type=&quot;color&quot; id=&quot;color-input&quot; value=&quot;#35cfe3&quot;&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Text input
.mb-3
  label(for=&quot;text-input&quot;).form-label
    | Text
  input(type=&quot;text&quot;, id=&quot;text-input&quot;, value=&quot;Artisanal kale&quot;).form-control

// Search input
.mb-3
  label(for=&quot;search-input&quot;).form-label
    | Search
  input(type=&quot;search&quot;, id=&quot;search-input&quot;, value=&quot;How do I shoot web&quot;).form-control

// Email input
.mb-3
  label(for=&quot;email-input&quot;).form-label
    | Email
  input(type=&quot;email&quot;, id=&quot;email-input&quot;, value=&quot;email@example.com&quot;).form-control

// URL input
.mb-3
  label(for=&quot;url-input&quot;).form-label
    | URL
  input(type=&quot;url&quot;, id=&quot;url-input&quot;, value=&quot;https://getbootstrap.com&quot;).form-control

// Phone input
.mb-3
  label(for=&quot;tel-input&quot;).form-label
    | Phone
  input(type=&quot;tel&quot;, id=&quot;tel-input&quot;, value=&quot;1-(770)-334-2518&quot;).form-control

// Password input
.mb-3
  label(for=&quot;pass-input&quot;).form-label
    | Password
  input(type=&quot;password&quot;, id=&quot;pass-input&quot;, value=&quot;mypasswordexample&quot;).form-control

// Textarea
.mb-3
  label(for=&quot;textarea-input&quot;).form-label
    | Textarea
  textarea(id=&quot;textarea-input&quot;, rows=&quot;5&quot;).form-control Hello World!

// Select
.mb-3
  label(for=&quot;select-input&quot;).form-label
    | Select
  select(id=&quot;select-input&quot;).form-select
    option Choose option...
    option Option item 1
    option Option item 2
    option Option item 3

// Multiselect
.mb-3
  label(for=&quot;multiselect-input&quot;).form-label
    | Multiselect
  select(id=&quot;multiselect-input&quot;, size=&quot;3&quot;, multiple).form-select
    option Option item 1
    option Option item 2
    option Option item 3
    option Option item 4
    option Option item 5
    option Option item 6

// File input
.mb-3
  label(for=&quot;file-input&quot;).form-label
    | File
  input(type=&quot;file&quot;, id=&quot;file-input&quot;).form-control

// Number input
.mb-3
  label(for=&quot;number-input&quot;).form-label
    | Number
  input(type=&quot;number&quot;, id=&quot;number-input&quot;, value=&quot;37&quot;).form-control

// Datalist
.mb-3
  label(for=&quot;datalist-input&quot;).form-label
    | Datalist
  input(list=&quot;datalist-options&quot;, id=&quot;datalist-input&quot;, placeholder=&quot;Type to search...&quot;).form-control
  datalist#datalist-options
    option(value=&quot;San Francisco&quot;)
    option(value=&quot;New York&quot;)
    option(value=&quot;Seattle&quot;)
    option(value=&quot;Los Angeles&quot;)
    option(value=&quot;Chicago&quot;)

// Range input
.mb-3
  label(for=&quot;range-input&quot;).form-label
    | Range
  input(type=&quot;range&quot;, id=&quot;range-input&quot;).form-range

// Color input
.mb-3
  label(for=&quot;color-input&quot;).form-label
    | Color
  input(type=&quot;color&quot;, id=&quot;color-input&quot;, value=&quot;#35cfe3&quot;).form-control.form-control-color
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Floating labels-->
                    <section
                        className="pb-5 mb-md-2"
                        id="forms-floating-labels"
                    >
                        <h2 className="h5 mb-3">Floating labels</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result2"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result2"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html2"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html2"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug2"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug2"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result2"
                                        role="tabpanel"
                                    >
                                        <div className="form-floating mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="fl-text"
                                                placeholder="Your name"
                                            />
                                            <label htmlFor="fl-text"
                                                >Your name</label
                                            >
                                        </div>
                                        <div className="form-floating mb-3">
                                            <select
                                                className="form-select"
                                                id="fl-select"
                                            >
                                                <option selected>
                                                    Argentina
                                                </option>
                                                <option>Belgium</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                                <option>Japan</option>
                                                <option>Spain</option>
                                                <option>USA</option>
                                            </select>
                                            <label htmlFor="fl-select"
                                                >Your country</label
                                            >
                                        </div>
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="fl-textarea"
                                                style="height: 120px"
                                                placeholder="Your message"
                                            ></textarea>
                                            <label htmlFor="fl-textarea"
                                                >Your message</label
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Floating label: Text input --&gt;
&lt;div className=&quot;form-floating mb-3&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;fl-text&quot; placeholder=&quot;Your name&quot;&gt;
  &lt;label for=&quot;fl-text&quot;&gt;Your name&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Floating label: Select --&gt;
&lt;div className=&quot;form-floating mb-3&quot;&gt;
  &lt;select className=&quot;form-select&quot; id=&quot;fl-select&quot;&gt;
    &lt;option selected&gt;Argentina&lt;/option&gt;
    &lt;option&gt;Belgium&lt;/option&gt;
    &lt;option&gt;France&lt;/option&gt;
    &lt;option&gt;Germany&lt;/option&gt;
    &lt;option&gt;Japan&lt;/option&gt;
    &lt;option&gt;Spain&lt;/option&gt;
    &lt;option&gt;USA&lt;/option&gt;
  &lt;/select&gt;
  &lt;label for=&quot;fl-select&quot;&gt;Your country&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Floating label: Textarea --&gt;
&lt;div className=&quot;form-floating&quot;&gt;
  &lt;textarea className=&quot;form-control&quot; id=&quot;fl-textarea&quot; style=&quot;height: 120px;&quot; placeholder=&quot;Your message&quot;&gt;&lt;/textarea&gt;
  &lt;label for=&quot;fl-textarea&quot;&gt;Your message&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Floating label: Text input
.form-floating.mb-3
  input(type=&quot;text&quot;, id=&quot;fl-text&quot;, placeholder=&quot;Your name&quot;).form-control
  label(for=&quot;fl-text&quot;) Your name

// Floating label: Select
.form-floating.mb-3
  select(id=&quot;fl-select&quot;).form-select
    option(selected) Argentina
    option Belgium
    option France
    option Germany
    option Japan
    option Spain
    option USA
  label(for=&quot;fl-select&quot;) Your country

// Floating label: Textarea
.form-floating.mb-3
  textarea(id=&quot;fl-textarea&quot;, style=&quot;height: 120px;&quot;, placeholder=&quot;Your message&quot;).form-control
  label(for=&quot;fl-textarea&quot;) Your message
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Password visibility toggle-->
                    <section
                        className="pb-5 mb-md-2"
                        id="forms-password-visibility"
                    >
                        <h2 className="h5 mb-3">Password visibility toggle</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result3"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result3"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html3"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html3"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug3"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug3"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result3"
                                        role="tabpanel"
                                    >
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="pass-visibility"
                                                >Password</label
                                            >
                                            <div className="password-toggle">
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    id="pass-visibility"
                                                    value="hidden@password"
                                                />
                                                <label
                                                    className="password-toggle-btn"
                                                    aria-label="Show/hide password"
                                                >
                                                    <input
                                                        className="password-toggle-check"
                                                        type="checkbox"
                                                    /><span
                                                        className="password-toggle-indicator"
                                                    ></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Password visibility toggle --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label className=&quot;form-label&quot; for=&quot;pass-visibility&quot;&gt;Password&lt;/label&gt;
  &lt;div className=&quot;password-toggle&quot;&gt;
    &lt;input className=&quot;form-control&quot; type=&quot;password&quot; id=&quot;pass-visibility&quot; value=&quot;hidden@password&quot;&gt;
    &lt;label className=&quot;password-toggle-btn&quot; aria-label=&quot;Show/hide password&quot;&gt;
      &lt;input className=&quot;password-toggle-check&quot; type=&quot;checkbox&quot;&gt;
      &lt;span className=&quot;password-toggle-indicator&quot;&gt;&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Password visibility toggle
.mb-3
  label(for=&quot;pass-visibility&quot;).form-label
    | Password
  .password-toggle
    input(type=&quot;password&quot;, id=&quot;pass-visibility&quot;, value=&quot;hidden@password&quot;).form-control
    label(aria-label=&quot;Show/hide password&quot;).password-toggle-btn
      input(type=&quot;checkbox&quot;).password-toggle-check
      span.password-toggle-indicator
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Checkboxes-->
                    <section className="pb-5 mb-md-2" id="forms-checkboxes">
                        <h2 className="h5 mb-3">Checkboxes</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result4"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result4"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html4"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html4"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug4"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug4"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result4"
                                        role="tabpanel"
                                    >
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="ex-check-1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ex-check-1"
                                                >Check this checkbox</label
                                            >
                                        </div>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="ex-check-2"
                                                checked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ex-check-2"
                                                >Uncheck this checkbox</label
                                            >
                                        </div>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="ex-check-3"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ex-check-3"
                                                >Disabled checkbox</label
                                            >
                                        </div>
                                        <div className="pt-3">
                                            <div
                                                className="form-check form-check-inline"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="ex-check-4"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ex-check-4"
                                                    >Check this checkbox</label
                                                >
                                            </div>
                                            <div
                                                className="form-check form-check-inline"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="ex-check-5"
                                                    checked
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ex-check-5"
                                                    >Uncheck this
                                                    checkbox</label
                                                >
                                            </div>
                                            <div
                                                className="form-check form-check-inline"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="ex-check-6"
                                                    disabled
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ex-check-6"
                                                    >Disabled checkbox</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Stacked checkboxes --&gt;
&lt;div className=&quot;form-check&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-1&quot;&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-1&quot;&gt;Check this checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-2&quot; checked&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-2&quot;&gt;Uncheck this checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-3&quot; disabled&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-3&quot;&gt;Disabled checkbox&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Inline checkboxes --&gt;
&lt;div className=&quot;form-check form-check-inline&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-4&quot;&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-4&quot;&gt;Check this checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-check-inline&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-5&quot; checked&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-5&quot;&gt;Uncheck this checkbox&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-check-inline&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-6&quot; disabled&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-6&quot;&gt;Disabled checkbox&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Stacked checkboxes
.form-check
  input(type=&quot;checkbox&quot;, id=&quot;ex-check-1&quot;).form-check-input
  label.form-check-label(for=&quot;ex-check-1&quot;) Check this checkbox
.form-check
  input(type=&quot;checkbox&quot;, id=&quot;ex-check-2&quot;, checked).form-check-input
  label.form-check-label(for=&quot;ex-check-2&quot;) Uncheck this checkbox
.form-check
  input(type=&quot;checkbox&quot;, id=&quot;ex-check-3&quot;, disabled).form-check-input
  label.form-check-label(for=&quot;ex-check-3&quot;) Disabled checkbox

// Inline checkboxes
.form-check.form-check-inline
  input(type=&quot;checkbox&quot;, id=&quot;ex-check-4&quot;).form-check-input
  label.form-check-label(for=&quot;ex-check-4&quot;) Check this checkbox
.form-check.form-check-inline
  input(type=&quot;checkbox&quot; id=&quot;ex-check-5&quot;, checked).form-check-input
  label.form-check-label(for=&quot;ex-check-5&quot;) Uncheck this checkbox
.form-check.form-check-inline
  input(type=&quot;checkbox&quot;, id=&quot;ex-check-6&quot;, disabled).form-check-input
  label.form-check-label(for=&quot;ex-check-6&quot;) Disabled checkbox
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Radio buttons-->
                    <section className="pb-5 mb-md-2" id="forms-radio">
                        <h2 className="h5 mb-3">Radio buttons</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result5"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result5"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html5"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html5"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug5"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug5"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result5"
                                        role="tabpanel"
                                    >
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="ex-radio-1"
                                                name="radio"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ex-radio-1"
                                                >Toggle this radio</label
                                            >
                                        </div>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="ex-radio-2"
                                                name="radio"
                                                checked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ex-radio-2"
                                                >Toggle this radio</label
                                            >
                                        </div>
                                        <div className="form-check mb-1">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="ex-radio-3"
                                                name="radio"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="ex-radio-3"
                                                >Disabled radio</label
                                            >
                                        </div>
                                        <div className="pt-3">
                                            <div
                                                className="form-check form-check-inline"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="ex-radio-4"
                                                    name="radio2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ex-radio-4"
                                                    >Toggle this radio</label
                                                >
                                            </div>
                                            <div
                                                className="form-check form-check-inline"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="ex-radio-5"
                                                    name="radio2"
                                                    checked
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ex-radio-5"
                                                    >Toggle this radio</label
                                                >
                                            </div>
                                            <div
                                                className="form-check form-check-inline"
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="ex-radio-6"
                                                    name="radio2"
                                                    disabled
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ex-radio-6"
                                                    >Disabled radio</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Stacked radio buttons --&gt;
&lt;div className=&quot;form-check&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-1&quot; name=&quot;radio&quot;&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-1&quot;&gt;Toggle this radio&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-2&quot; name=&quot;radio&quot; checked&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-2&quot;&gt;Toggle this radio&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-3&quot; name=&quot;radio&quot; disabled&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-3&quot;&gt;Disabled radio&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Inline radio buttons --&gt;
&lt;div className=&quot;form-check form-check-inline&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-4&quot; name=&quot;radio2&quot;&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-4&quot;&gt;Toggle this radio&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-check-inline&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-5&quot; name=&quot;radio2&quot; checked&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-5&quot;&gt;Toggle this radio&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-check-inline&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-6&quot; name=&quot;radio2&quot; disabled&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-6&quot;&gt;Disabled radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Stacked radio buttons
.form-check
  input(type=&quot;radio&quot;, id=&quot;ex-radio-1&quot;, name=&quot;radio&quot;).form-check-input
  label.form-check-label(for=&quot;ex-radio-1&quot;) Toggle this radio
.form-check
  input(type=&quot;radio&quot;, id=&quot;ex-radio-2&quot;, name=&quot;radio&quot;, checked).form-check-input
  label.form-check-label(for=&quot;ex-radio-2&quot;) Toggle this radio
.form-check
  input(type=&quot;radio&quot;, id=&quot;ex-radio-3&quot;, name=&quot;radio&quot;, disabled).form-check-input
  label.form-check-label(for=&quot;ex-radio-3&quot;) Disabled radio

// Inline radio buttons
.form-check.form-check-inline
  input(type=&quot;radio&quot;, id=&quot;ex-radio-4&quot;, name=&quot;radio2&quot;).form-check-input
  label.form-check-label(for=&quot;ex-radio-4&quot;) Toggle this radio
.form-check.form-check-inline
  input(type=&quot;radio&quot;, id=&quot;ex-radio-5&quot;, name=&quot;radio2&quot;, checked).form-check-input
  label.form-check-label(for=&quot;ex-radio-5&quot;) Toggle this radio
.form-check.form-check-inline
  input(type=&quot;radio&quot;, id=&quot;ex-radio-6&quot;, name=&quot;radio2&quot;, disabled).form-check-input
  label.form-check-label(for=&quot;ex-radio-6&quot;) Disabled radio
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Switches-->
                    <section className="pb-5 mb-md-2" id="forms-switches">
                        <h2 className="h5 mb-3">Switches</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result6"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result6"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html6"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html6"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug6"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug6"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result6"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="form-check form-switch mb-3"
                                        >
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="customSwitch1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="customSwitch1"
                                                >Toggle this switch
                                                element</label
                                            >
                                        </div>
                                        <div
                                            className="form-check form-switch mb-3"
                                        >
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="customSwitch2"
                                                checked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="customSwitch2"
                                                >Toggle this switch
                                                element</label
                                            >
                                        </div>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="customSwitch3"
                                                disabled
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="customSwitch3"
                                                >Disabled switch element</label
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Switch --&gt;
&lt;div className=&quot;form-check form-switch&quot;&gt;
  &lt;input type=&quot;checkbox&quot; className=&quot;form-check-input&quot; id=&quot;customSwitch1&quot;&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;customSwitch1&quot;&gt;Toggle this switch element&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Checked switch --&gt;
&lt;div className=&quot;form-check form-switch&quot;&gt;
  &lt;input type=&quot;checkbox&quot; className=&quot;form-check-input&quot; id=&quot;customSwitch2&quot; checked&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;customSwitch2&quot;&gt;Toggle this switch element&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Disabled switch --&gt;
&lt;div className=&quot;form-check form-switch&quot;&gt;
  &lt;input type=&quot;checkbox&quot; className=&quot;form-check-input&quot; id=&quot;customSwitch3&quot; disabled&gt;
  &lt;label className=&quot;form-check-label&quot; for=&quot;customSwitch3&quot;&gt;Disabled switch element&lt;/label&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Switch
.form-check.form-switch
  input(type=&quot;checkbox&quot;, id=&quot;customSwitch1&quot;).form-check-input
  label.form-check-label(for=&quot;customSwitch1&quot;) Toggle this switch element

// Checked switch
.form-check.form-switch
  input(type=&quot;checkbox&quot;, id=&quot;customSwitch1&quot;, checked).form-check-input
  label.form-check-label(for=&quot;customSwitch2&quot;) Toggle this switch element

// Disabled switch
.form-check.form-switch
  input(type=&quot;checkbox&quot;, id=&quot;customSwitch1&quot;, disabled).form-check-input
  label.form-check-label(for=&quot;customSwitch3&quot;) Disabled switch element
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Drag & drop file upload-->
                    <section className="pb-5 mb-md-2" id="forms-file-upload">
                        <h2 className="h5 mb-3">Drag &amp; drop file upload</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result7"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result7"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html7"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html7"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug7"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug7"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content pt-1">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result7"
                                        role="tabpanel"
                                    >
                                        <div style="max-width: 32rem">
                                            <div className="file-drop-area">
                                                <div
                                                    className="file-drop-icon ci-cloud-upload"
                                                ></div>
                                                <span
                                                    className="file-drop-message"
                                                    >Drag and drop here to
                                                    upload</span
                                                >
                                                <input
                                                    className="file-drop-input"
                                                    type="file"
                                                />
                                                <button
                                                    className="file-drop-btn btn btn-primary btn-sm"
                                                    type="button"
                                                >
                                                    Or select file
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Drag and drop file upload --&gt;
&lt;div className=&quot;file-drop-area&quot;&gt;
  &lt;div className=&quot;file-drop-icon ci-cloud-upload&quot;&gt;&lt;/div&gt;
  &lt;span className=&quot;file-drop-message&quot;&gt;Drag and drop here to upload&lt;/span&gt;
  &lt;input type=&quot;file&quot; className=&quot;file-drop-input&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;file-drop-btn btn btn-primary btn-sm&quot;&gt;Or select file&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Drag and drop file upload
.file-drop-area
  .file-drop-icon.ci-cloud-upload
  span.file-drop-message Drag and drop here to upload
  input(type=&quot;file&quot;).file-drop-input
  button(type=&quot;button&quot;).file-drop-btn.btn.btn-primary.btn-sm
    | Or select file
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Size / color options-->
                    <section className="pb-5 mb-md-2" id="forms-options">
                        <h2 className="h5 mb-3">Size / color options</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result8"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result8"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html8"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html8"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug8"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug8"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content pt-1">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result8"
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id="xl"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xl"
                                                        >XL</label
                                                    >
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id="l"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="l"
                                                        >L</label
                                                    >
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id="m"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="m"
                                                        >M</label
                                                    >
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id="s"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="s"
                                                        >S</label
                                                    >
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="size"
                                                        id="xs"
                                                    />
                                                    <label
                                                        className="form-option-label"
                                                        htmlFor="xs"
                                                        >XS</label
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="col-sm-6 pt-2 pt-sm-0"
                                            >
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color"
                                                        id="blue"
                                                        checked
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="blue"
                                                        ><span
                                                            className="form-option-color rounded-circle"
                                                            style="
                                                                background-color: #d1dceb;
                                                            "
                                                        ></span
                                                    ></label>
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color"
                                                        id="yellow"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="yellow"
                                                        ><span
                                                            className="form-option-color rounded-circle"
                                                            style="
                                                                background-color: #f4e6a2;
                                                            "
                                                        ></span
                                                    ></label>
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color"
                                                        id="pink"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="pink"
                                                        ><span
                                                            className="form-option-color rounded-circle"
                                                            style="
                                                                background-color: #f3dcff;
                                                            "
                                                        ></span
                                                    ></label>
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color"
                                                        id="img1"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="img1"
                                                        ><span
                                                            className="form-option-color rounded-circle"
                                                            style="
                                                                background-image: url(../img/shop/single/color-opt-1.png);
                                                            "
                                                        ></span
                                                    ></label>
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color"
                                                        id="img2"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="img2"
                                                        ><span
                                                            className="form-option-color rounded-circle"
                                                            style="
                                                                background-image: url(../img/shop/single/color-opt-2.png);
                                                            "
                                                        ></span
                                                    ></label>
                                                </div>
                                                <div
                                                    className="form-check form-option form-check-inline mb-2"
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="color"
                                                        id="img3"
                                                    />
                                                    <label
                                                        className="form-option-label rounded-circle"
                                                        htmlFor="img3"
                                                        ><span
                                                            className="form-option-color rounded-circle"
                                                            style="
                                                                background-image: url(../img/shop/single/color-opt-3.png);
                                                            "
                                                        ></span
                                                    ></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Size options (radio buttons) --&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;xl&quot; name=&quot;size&quot; checked&gt;
  &lt;label for=&quot;xl&quot; className=&quot;form-option-label&quot;&gt;XL&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;l&quot; name=&quot;size&quot; checked&gt;
  &lt;label for=&quot;l&quot; className=&quot;form-option-label&quot;&gt;L&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;m&quot; name=&quot;size&quot; checked&gt;
  &lt;label for=&quot;m&quot; className=&quot;form-option-label&quot;&gt;M&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;s&quot; name=&quot;size&quot; checked&gt;
  &lt;label for=&quot;s&quot; className=&quot;form-option-label&quot;&gt;S&lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input type=&quot;radio&quot; className=&quot;form-check-input&quot; id=&quot;xs&quot; name=&quot;size&quot; checked&gt;
  &lt;label for=&quot;xs&quot; className=&quot;form-option-label&quot;&gt;XS&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Color options (radio buttons) --&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color&quot; id=&quot;blue&quot; checked&gt;
  &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;blue&quot;&gt;
    &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #d1dceb;&quot;&gt;&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color&quot; id=&quot;yellow&quot;&gt;
  &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;yellow&quot;&gt;
    &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #f4e6a2;&quot;&gt;&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color&quot; id=&quot;pink&quot;&gt;
  &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;pink&quot;&gt;
    &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #f3dcff;&quot;&gt;&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;
&lt;div className=&quot;form-check form-option form-check-inline mb-2v&gt;
  &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color&quot; id=&quot;img&quot;&gt;
  &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;img&quot;&gt;
    &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-image: pathe-to-image&quot;&gt;&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Size options (radio buttons)
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;size&quot;, id=&quot;xl&quot; checked).form-check-input
  label.form-option-label(for=&quot;xl&quot;) XL
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;size&quot;, id=&quot;l&quot;).form-check-input
  label.form-option-label(for=&quot;l&quot;) L
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;size&quot;, id=&quot;m&quot;).form-check-input
  label.form-option-label(for=&quot;m&quot;) M
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;size&quot;, id=&quot;s&quot;).form-check-input
  label.form-option-label(for=&quot;s&quot;) S
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;size&quot;, id=&quot;xs&quot;).form-check-input
  label.form-option-label(for=&quot;xs&quot;) XS

// Color options (radio buttons)
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;color&quot;, id=&quot;blue&quot;, checked).form-check-input
  label(for=&quot;blue&quot;).form-option-label.rounded-circle
    span(style=&quot;background-color: #d1dceb;&quot;).form-option-color.rounded-circle
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;color&quot;, id=&quot;yellow&quot;).form-check-input
  label(for=&quot;yellow&quot;).form-option-label.rounded-circle
    span(style=&quot;background-color: #f4e6a2;&quot;).form-option-color.rounded-circle
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;color&quot;, id=&quot;pink&quot;).form-check-input
  label(for=&quot;pink&quot;).form-option-label.rounded-circle
    span(style=&quot;background-color: #f3dcff;&quot;).form-option-color.rounded-circle
.form-check.form-option.form-check-inline.mb-2
  input(type=&quot;radio&quot;, name=&quot;color&quot;, id=&quot;img&quot;).form-check-input
  label(for=&quot;img&quot;).form-option-label.rounded-circle
    span(style=&quot;background-image: path-to-image&quot;).form-option-color.rounded-circle
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Sizing-->
                    <section className="pb-5 mb-md-2" id="forms-sizing">
                        <h2 className="h5 mb-3">Sizing</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result9"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result9"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html9"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html9"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug9"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug9"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result9"
                                        role="tabpanel"
                                    >
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="large-input"
                                                >Large input</label
                                            >
                                            <input
                                                className="form-control form-control-lg"
                                                type="text"
                                                id="large-input"
                                                placeholder="Large input placeholder"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="normal-input"
                                                >Normal input</label
                                            >
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="normal-input"
                                                placeholder="Normal input placeholder"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="small-input"
                                                >Small input</label
                                            >
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                id="small-input"
                                                placeholder="Small input placeholder"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Large input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;large-input&quot; className=&quot;form-label&quot;&gt;Large input&lt;/label&gt;
  &lt;input className=&quot;form-control form-control-lg&quot; type=&quot;text&quot; id=&quot;large-input&quot; placeholder=&quot;Large input placeholder&quot;&gt;
&lt;/div&gt;

&lt;!-- Normal input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;normal-input&quot; className=&quot;form-label&quot;&gt;Normal input&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;normal-input&quot; placeholder=&quot;Normal input placeholder&quot;&gt;
&lt;/div&gt;

&lt;!-- Small input --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;small-input&quot; className=&quot;form-label&quot;&gt;Small input&lt;/label&gt;
  &lt;input className=&quot;form-control form-control-sm&quot; type=&quot;text&quot; id=&quot;small-input&quot; placeholder=&quot;Small input placeholder&quot;&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Large input
.mb-3
  label(for=&quot;large-input&quot;).form-label
    | Large input
  input(type=&quot;text&quot;, id=&quot;large-input&quot;, placeholder=&quot;Large input placeholder&quot;).form-control.form-control-lg

//- Normal input
.mb-3
  label(for=&quot;normal-input&quot;).form-label
    | Normal input
  input(type=&quot;text&quot;, id=&quot;normal-input&quot;, placeholder=&quot;Normal input placeholder&quot;).form-control

// Small input
.mb-3
  label(for=&quot;small-input&quot;).form-label
    | Small input
  input(type=&quot;text&quot;, id=&quot;small-input&quot;, placeholder=&quot;Small input placeholder&quot;).form-control.form-control-sm
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Readonly & disabled-->
                    <section className="pb-5 mb-md-2" id="forms-disabled">
                        <h2 className="h5 mb-3">Readonly &amp; disabled</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result10"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result10"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html10"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html10"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug10"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug10"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result10"
                                        role="tabpanel"
                                    >
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Readonly input here..."
                                                readonly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="disabled-input"
                                                placeholder="Disabled input here..."
                                                disabled
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <select
                                                className="form-select"
                                                id="disabled-select-input"
                                                disabled
                                            >
                                                <option>
                                                    Disabled select here...
                                                </option>
                                                <option>Option item 1</option>
                                                <option>Option item 2</option>
                                                <option>Option item 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Readonly input --&gt;
&lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Readonly input here...&quot; readonly&gt;

&lt;!-- Disabled input --&gt;
&lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Disabled input here...&quot; disabled&gt;

&lt;!-- Disabled select --&gt;
&lt;select className=&quot;form-select&quot; disabled&gt;
  &lt;option&gt;Disabled select here...&lt;/option&gt;
  &lt;option&gt;Option item 1&lt;/option&gt;
  &lt;option&gt;Option item 2&lt;/option&gt;
  &lt;option&gt;Option item 3&lt;/option&gt;
&lt;/select&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Readonly input
input(type=&quot;text&quot;, placeholder=&quot;Readonly input here...&quot;, readonly).form-control

// Disabled input
input(type=&quot;text&quot;, placeholder=&quot;Disabled input here...&quot;, disabled).form-control

// Disabled select
select(disabled).form-select
  option Disabled select here...
  option Option item 1
  option Option item 2
  option Option item 3
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Help text-->
                    <section className="pb-5 mb-md-2" id="forms-help-text">
                        <h2 className="h5 mb-3">Help text</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result11"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result11"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html11"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html11"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug11"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug11"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result11"
                                        role="tabpanel"
                                    >
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="help-text-input"
                                                >Password</label
                                            >
                                            <input
                                                className="form-control"
                                                type="password"
                                                id="help-text-input"
                                                placeholder="Your password here"
                                            />
                                            <div className="form-text">
                                                Your password must be 8-20
                                                characters long, contain letters
                                                and numbers, and must not
                                                contain spaces, special
                                                characters, or emoji.
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html11"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Form help text --&gt;
&lt;div className=&quot;mb-3&quot;&gt;
  &lt;label for=&quot;help-text-input&quot; className=&quot;form-label&quot;&gt;Password&lt;/label&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;password&quot; id=&quot;help-text-input&quot; placeholder=&quot;Your password here&quot;&gt;
  &lt;div className=&quot;form-text&quot;&gt;Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug11"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Form help text
.mb-3
  label(for=&quot;help-text-input&quot;).form-label
    | Password
  input(type=&quot;password&quot;, id=&quot;help-text-input&quot;, placeholder=&quot;Your password here&quot;).form-control
  .form-text
    | Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Validation: status text-->
                    <section
                        className="pb-5 mb-md-2"
                        id="forms-validation-text"
                    >
                        <h2 className="h5 mb-3">Validation: status text</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result12"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result12"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html12"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html12"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug12"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug12"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result12"
                                        role="tabpanel"
                                    >
                                        <form
                                            className="needs-validation"
                                            novalidate
                                        >
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationCustom01"
                                                        >First name</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationCustom01"
                                                        placeholder="First name"
                                                        value="John"
                                                        required
                                                    />
                                                    <div
                                                        className="valid-feedback"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationCustom02"
                                                        >Last name</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationCustom02"
                                                        placeholder="Last name"
                                                        value="Doe"
                                                        required
                                                    />
                                                    <div
                                                        className="valid-feedback"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationCustomUsername"
                                                        >Username</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationCustomUsername"
                                                        placeholder="Username"
                                                        required
                                                    />
                                                    <div
                                                        className="invalid-feedback"
                                                    >
                                                        Please choose a
                                                        username.
                                                    </div>
                                                    <div
                                                        className="valid-feedback"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationCustom03"
                                                        >City</label
                                                    >
                                                    <select
                                                        className="form-select"
                                                        id="validationCustom03"
                                                        required
                                                    >
                                                        <option value="">
                                                            Choose city...
                                                        </option>
                                                        <option value="Dallas">
                                                            Dallas
                                                        </option>
                                                        <option value="Houston">
                                                            Houston
                                                        </option>
                                                        <option
                                                            value="Los Angeles"
                                                        >
                                                            Los Angeles
                                                        </option>
                                                        <option value="Miami">
                                                            Miami
                                                        </option>
                                                        <option
                                                            value="New York"
                                                        >
                                                            New York
                                                        </option>
                                                    </select>
                                                    <div
                                                        className="invalid-feedback"
                                                    >
                                                        Please provide a valid
                                                        city.
                                                    </div>
                                                    <div
                                                        className="valid-feedback"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationCustom04"
                                                        >State</label
                                                    >
                                                    <select
                                                        className="form-select"
                                                        id="validationCustom04"
                                                        required
                                                    >
                                                        <option value="">
                                                            Choose state...
                                                        </option>
                                                        <option value="Arizona">
                                                            Arizona
                                                        </option>
                                                        <option
                                                            value="Colorado"
                                                        >
                                                            Colorado
                                                        </option>
                                                        <option value="Florida">
                                                            Florida
                                                        </option>
                                                        <option value="Indiana">
                                                            Indiana
                                                        </option>
                                                        <option
                                                            value="Kentucky"
                                                        >
                                                            Kentucky
                                                        </option>
                                                        <option value="Texas">
                                                            Texas
                                                        </option>
                                                    </select>
                                                    <div
                                                        className="invalid-feedback"
                                                    >
                                                        Please provide a valid
                                                        state.
                                                    </div>
                                                    <div
                                                        className="valid-feedback"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationCustom05"
                                                        >Zip</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationCustom05"
                                                        placeholder="Zip"
                                                        required
                                                    />
                                                    <div
                                                        className="invalid-feedback"
                                                    >
                                                        Please provide a valid
                                                        zip.
                                                    </div>
                                                    <div
                                                        className="valid-feedback"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3 py-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="invalidCheck"
                                                        required
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="invalidCheck"
                                                        >Agree to terms and
                                                        conditions</label
                                                    >
                                                    <div
                                                        className="invalid-feedback"
                                                    >
                                                        You must agree before
                                                        submitting.
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Submit Form
                                            </button>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html12"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Forms validation: status text --&gt;
&lt;form className=&quot;needs-validation&quot; noValidate&gt;
  &lt;div className=&quot;row&quot;&gt;
    &lt;div className=&quot;col-md-4 mb-3&quot;&gt;
      &lt;label for=&quot;validationCustom01&quot; className=&quot;form-label&quot;&gt;First name&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationCustom01&quot; placeholder=&quot;First name&quot; value=&quot;John&quot; required&gt;
      &lt;div className=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4 mb-3&quot;&gt;
      &lt;label for=&quot;validationCustom02&quot; className=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationCustom02&quot; placeholder=&quot;Last name&quot; value=&quot;Doe&quot; required&gt;
      &lt;div className=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4 mb-3&quot;&gt;
      &lt;label for=&quot;validationCustomUsername&quot; className=&quot;form-label&quot;&gt;Username&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationCustomUsername&quot; placeholder=&quot;Username&quot; required&gt;
      &lt;div className=&quot;invalid-feedback&quot;&gt;Please choose a username.&lt;/div&gt;
      &lt;div className=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div className=&quot;row&quot;&gt;
    &lt;div className=&quot;col-md-6 mb-3&quot;&gt;
      &lt;label for=&quot;validationCustom03&quot; className=&quot;form-label&quot;&gt;City&lt;/label&gt;
      &lt;select className=&quot;form-select&quot; id=&quot;validationCustom03&quot; required&gt;
        &lt;option value=&quot;&quot;&gt;Choose city...&lt;/option&gt;
        &lt;option value=&quot;Dallas&quot;&gt;Dallas&lt;/option&gt;
        &lt;option value=&quot;Houston&quot;&gt;Houston&lt;/option&gt;
        &lt;option value=&quot;Los Angeles&quot;&gt;Los Angeles&lt;/option&gt;
        &lt;option value=&quot;Miami&quot;&gt;Miami&lt;/option&gt;
        &lt;option value=&quot;New York&quot;&gt;New York&lt;/option&gt;
      &lt;/select&gt;
      &lt;div className=&quot;invalid-feedback&quot;&gt;Please provide a valid city.&lt;/div&gt;
      &lt;div className=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3 mb-3&quot;&gt;
      &lt;label for=&quot;validationCustom04&quot; className=&quot;form-label&quot;&gt;State&lt;/label&gt;
      &lt;select className=&quot;form-select&quot; id=&quot;validationCustom04&quot; required&gt;
        &lt;option value=&quot;&quot;&gt;Choose state...&lt;/option&gt;
        &lt;option value=&quot;Arizona&quot;&gt;Arizona&lt;/option&gt;
        &lt;option value=&quot;Colorado&quot;&gt;Colorado&lt;/option&gt;
        &lt;option value=&quot;Florida&quot;&gt;Florida&lt;/option&gt;
        &lt;option value=&quot;Indiana&quot;&gt;Indiana&lt;/option&gt;
        &lt;option value=&quot;Kentucky&quot;&gt;Kentucky&lt;/option&gt;
        &lt;option value=&quot;Texas&quot;&gt;Texas&lt;/option&gt;
      &lt;/select&gt;
      &lt;div className=&quot;invalid-feedback&quot;&gt;Please provide a valid state.&lt;/div&gt;
      &lt;div className=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3 mb-3&quot;&gt;
      &lt;label for=&quot;validationCustom05&quot; className=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationCustom05&quot; placeholder=&quot;Zip&quot; required&gt;
      &lt;div className=&quot;invalid-feedback&quot;&gt;Please provide a valid zip.&lt;/div&gt;
      &lt;div className=&quot;valid-feedback&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div className=&quot;mb-3&quot;&gt;
    &lt;div className=&quot;form-check&quot;&gt;
      &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;invalidCheck&quot; required&gt;
      &lt;label className=&quot;form-check-label&quot; for=&quot;invalidCheck&quot;&gt;Agree to terms and conditions&lt;/label&gt;
      &lt;div className=&quot;invalid-feedback&quot;&gt;You must agree before submitting.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit Form&lt;/button&gt;
&lt;/form&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug12"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Forms validation: status text
form(noValidate).needs-validation
  .row
    .col-md-4.mb-3
      label(for=&quot;validationCustom01&quot;).form-label
        | First name
      input(type=&quot;text&quot;, id=&quot;validationCustom01&quot;, placeholder=&quot;First name&quot;, value=&quot;John&quot;, required).form-control
      .valid-feedback
        | Looks good!
    .col-md-4.mb-3
      label(for=&quot;validationCustom02&quot;).form-label
        | Last name
      input(type=&quot;text&quot;, id=&quot;validationCustom02&quot;, placeholder=&quot;Last name&quot;, value=&quot;Doe&quot;, required).form-control
      .valid-feedback
        | Looks good!
    .col-md-4.mb-3
      label(for=&quot;validationCustomUsername&quot;).form-label
        | Username
      input(type=&quot;text&quot;, id=&quot;validationCustomUsername&quot;, placeholder=&quot;Username&quot;, required).form-control
      .invalid-feedback
        | Please choose a username.
      .valid-feedback
        | Looks good!
  .row
    .col-md-6.mb-3
      label(for=&quot;validationCustom03&quot;).form-label
        | City
      select(id=&quot;validationCustom03&quot;, required).form-select
        option(value=&quot;&quot;) Choose city...
        option(value=&quot;Dallas&quot;) Dallas
        option(value=&quot;Houston&quot;) Houston
        option(value=&quot;Los Angeles&quot;) Los Angeles
        option(value=&quot;Miami&quot;) Miami
        option(value=&quot;New York&quot;) New York
      .invalid-feedback
        | Please provide a valid city.
      .valid-feedback
        | Looks good!
    .col-md-3.mb-3
      label(for=&quot;validationCustom04&quot;).form-label
        | State
      select(id=&quot;validationCustom04&quot;, required).form-select
        option(value=&quot;&quot;) Choose state...
        option(value=&quot;Arizona&quot;) Arizona
        option(value=&quot;Colorado&quot;) Colorado
        option(value=&quot;Florida&quot;) Florida
        option(value=&quot;Indiana&quot;) Indiana
        option(value=&quot;Kentucky&quot;) Kentucky
        option(value=&quot;Texas&quot;) Texas
      .invalid-feedback
        | Please provide a valid state.
      .valid-feedback
        | Looks good!
    .col-md-3.mb-3
      label(for=&quot;validationCustom05&quot;).form-label
        | Zip
      input(type=&quot;text&quot;, id=&quot;validationCustom05&quot;, placeholder=&quot;Zip&quot;, required).form-control
      .invalid-feedback
        | Please provide a valid zip.
      .valid-feedback
        | Looks good!
  .mb-3
    .form-check
      input(type=&quot;checkbox&quot;, id=&quot;invalidCheck&quot;, required).form-check-input
      label.form-check-label(for=&quot;invalidCheck&quot;) Agree to terms and conditions
      .invalid-feedback
        | You must agree before submitting.
  button.btn.btn-primary(type=&quot;submit&quot;) Submit Form
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Validation: status tooltips-->
                    <section
                        className="pb-5 mb-md-2"
                        id="forms-validation-tooltips"
                    >
                        <h2 className="h5 mb-3">Validation: status tooltips</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result13"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result13"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html13"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html13"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug13"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug13"
                                            aria-selected="false"
                                            >Pug</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result13"
                                        role="tabpanel"
                                    >
                                        <form
                                            className="needs-validation"
                                            novalidate
                                        >
                                            <div className="row">
                                                <div className="col-md-4 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationTooltip01"
                                                        >First name</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationTooltip01"
                                                        placeholder="First name"
                                                        value="John"
                                                        required
                                                    />
                                                    <div
                                                        className="valid-tooltip"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationTooltip02"
                                                        >Last name</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationTooltip02"
                                                        placeholder="Last name"
                                                        value="Doe"
                                                        required
                                                    />
                                                    <div
                                                        className="valid-tooltip"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationTooltipUsername"
                                                        >Username</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationTooltipUsername"
                                                        placeholder="Username"
                                                        required
                                                    />
                                                    <div
                                                        className="invalid-tooltip"
                                                    >
                                                        Please choose a
                                                        username.
                                                    </div>
                                                    <div
                                                        className="valid-tooltip"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationTooltip03"
                                                        >City</label
                                                    >
                                                    <select
                                                        className="form-select"
                                                        id="validationTooltip03"
                                                        required
                                                    >
                                                        <option value="">
                                                            Choose city...
                                                        </option>
                                                        <option value="Dallas">
                                                            Dallas
                                                        </option>
                                                        <option value="Houston">
                                                            Houston
                                                        </option>
                                                        <option
                                                            value="Los Angeles"
                                                        >
                                                            Los Angeles
                                                        </option>
                                                        <option value="Miami">
                                                            Miami
                                                        </option>
                                                        <option
                                                            value="New York"
                                                        >
                                                            New York
                                                        </option>
                                                    </select>
                                                    <div
                                                        className="invalid-tooltip"
                                                    >
                                                        Please provide a valid
                                                        city.
                                                    </div>
                                                    <div
                                                        className="valid-tooltip"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationTooltip04"
                                                        >State</label
                                                    >
                                                    <select
                                                        className="form-select"
                                                        id="validationTooltip04"
                                                        required
                                                    >
                                                        <option value="">
                                                            Choose state...
                                                        </option>
                                                        <option value="Arizona">
                                                            Arizona
                                                        </option>
                                                        <option
                                                            value="Colorado"
                                                        >
                                                            Colorado
                                                        </option>
                                                        <option value="Florida">
                                                            Florida
                                                        </option>
                                                        <option value="Indiana">
                                                            Indiana
                                                        </option>
                                                        <option
                                                            value="Kentucky"
                                                        >
                                                            Kentucky
                                                        </option>
                                                        <option value="Texas">
                                                            Texas
                                                        </option>
                                                    </select>
                                                    <div
                                                        className="invalid-tooltip"
                                                    >
                                                        Please provide a valid
                                                        state.
                                                    </div>
                                                    <div
                                                        className="valid-tooltip"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="validationTooltip05"
                                                        >Zip</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        id="validationTooltip05"
                                                        placeholder="Zip"
                                                        required
                                                    />
                                                    <div
                                                        className="invalid-tooltip"
                                                    >
                                                        Please provide a valid
                                                        zip.
                                                    </div>
                                                    <div
                                                        className="valid-tooltip"
                                                    >
                                                        Looks good!
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3 py-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="invalidCheck01"
                                                        required
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="invalidCheck01"
                                                        >Agree to terms and
                                                        conditions</label
                                                    >
                                                    <div
                                                        className="invalid-tooltip"
                                                    >
                                                        You must agree before
                                                        submitting.
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Submit Form
                                            </button>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html13"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Forms validation: status tooltips --&gt;
&lt;form className=&quot;needs-validation&quot; noValidate&gt;
  &lt;div className=&quot;row&quot;&gt;
    &lt;div className=&quot;col-md-4 mb-3&quot;&gt;
      &lt;label for=&quot;validationTooltip01&quot; className=&quot;form-label&quot;&gt;First name&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationTooltip01&quot; placeholder=&quot;First name&quot; value=&quot;John&quot; required&gt;
      &lt;div className=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4 mb-3&quot;&gt;
      &lt;label for=&quot;validationTooltip02&quot; className=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationTooltip02&quot; placeholder=&quot;Last name&quot; value=&quot;Doe&quot; required&gt;
      &lt;div className=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-4 mb-3&quot;&gt;
      &lt;label for=&quot;validationTooltipUsername&quot; className=&quot;form-label&quot;&gt;Username&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationTooltipUsername&quot; placeholder=&quot;Username&quot; required&gt;
      &lt;div className=&quot;invalid-tooltip&quot;&gt;Please choose a username.&lt;/div&gt;
      &lt;div className=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div className=&quot;row&quot;&gt;
    &lt;div className=&quot;col-md-6 mb-3&quot;&gt;
      &lt;label for=&quot;validationTooltip03&quot; className=&quot;form-label&quot;&gt;City&lt;/label&gt;
      &lt;select className=&quot;form-select&quot; id=&quot;validationTooltip03&quot; required&gt;
        &lt;option value=&quot;&quot;&gt;Choose city...&lt;/option&gt;
        &lt;option value=&quot;Dallas&quot;&gt;Dallas&lt;/option&gt;
        &lt;option value=&quot;Houston&quot;&gt;Houston&lt;/option&gt;
        &lt;option value=&quot;Los Angeles&quot;&gt;Los Angeles&lt;/option&gt;
        &lt;option value=&quot;Miami&quot;&gt;Miami&lt;/option&gt;
        &lt;option value=&quot;New York&quot;&gt;New York&lt;/option&gt;
      &lt;/select&gt;
      &lt;div className=&quot;invalid-tooltip&quot;&gt;Please provide a valid city.&lt;/div&gt;
      &lt;div className=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3 mb-3&quot;&gt;
      &lt;label for=&quot;validationTooltip04&quot; className=&quot;form-label&quot;&gt;State&lt;/label&gt;
      &lt;select className=&quot;form-select&quot; id=&quot;validationTooltip04&quot; required&gt;
        &lt;option value=&quot;&quot;&gt;Choose state...&lt;/option&gt;
        &lt;option value=&quot;Arizona&quot;&gt;Arizona&lt;/option&gt;
        &lt;option value=&quot;Colorado&quot;&gt;Colorado&lt;/option&gt;
        &lt;option value=&quot;Florida&quot;&gt;Florida&lt;/option&gt;
        &lt;option value=&quot;Indiana&quot;&gt;Indiana&lt;/option&gt;
        &lt;option value=&quot;Kentucky&quot;&gt;Kentucky&lt;/option&gt;
        &lt;option value=&quot;Texas&quot;&gt;Texas&lt;/option&gt;
      &lt;/select&gt;
      &lt;div className=&quot;invalid-tooltip&quot;&gt;Please provide a valid state.&lt;/div&gt;
      &lt;div className=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;col-md-3 mb-3&quot;&gt;
      &lt;label for=&quot;validationTooltip05&quot; className=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
      &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;validationTooltip05&quot; placeholder=&quot;Zip&quot; required&gt;
      &lt;div className=&quot;invalid-tooltip&quot;&gt;Please provide a valid zip.&lt;/div&gt;
      &lt;div className=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div className=&quot;mb-3&quot;&gt;
    &lt;div className=&quot;form-check&quot;&gt;
      &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;invalidCheck01&quot; required&gt;
      &lt;label className=&quot;form-check-label&quot; for=&quot;invalidCheck01&quot;&gt;Agree to terms and conditions&lt;/label&gt;
      &lt;div className=&quot;invalid-tooltip&quot;&gt;You must agree before submitting.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit Form&lt;/button&gt;
&lt;/form&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug13"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Forms validation: status tooltips
form(noValidate).needs-validation
  .row
    .col-md-4.mb-3
      label(for=&quot;validationTooltip01&quot;).form-label
        | First name
      input(type=&quot;text&quot;, id=&quot;validationTooltip01&quot;, placeholder=&quot;First name&quot;, value=&quot;John&quot;, required).form-control
      .valid-tooltip
        | Looks good!
    .col-md-4.mb-3
      label(for=&quot;validationTooltip02&quot;).form-label
        | Last name
      input(type=&quot;text&quot;, id=&quot;validationTooltip02&quot;, placeholder=&quot;Last name&quot;, value=&quot;Doe&quot;, required).form-control
      .valid-tooltip
        | Looks good!
    .col-md-4.mb-3
      label(for=&quot;validationTooltipUsername&quot;).form-label
        | Username
      input(type=&quot;text&quot;, id=&quot;validationTooltipUsername&quot;, placeholder=&quot;Username&quot;, required).form-control
      .invalid-tooltip
        | Please choose a username.
      .valid-tooltip
        | Looks good!
  .row
    .col-md-6.mb-3
      label(for=&quot;validationTooltip03&quot;).form-label
        | City
      select(id=&quot;validationTooltip03&quot;, required).form-control.custom-select
        option(value=&quot;&quot;) Choose city...
        option(value=&quot;Dallas&quot;) Dallas
        option(value=&quot;Houston&quot;) Houston
        option(value=&quot;Los Angeles&quot;) Los Angeles
        option(value=&quot;Miami&quot;) Miami
        option(value=&quot;New York&quot;) New York
      .invalid-tooltip
        | Please provide a valid city.
      .valid-tooltip
        | Looks good!
    .col-md-3.mb-3
      label(for=&quot;validationTooltip04&quot;).form-label
        | State
      select(id=&quot;validationTooltip04&quot;, required).form-control.custom-select
        option(value=&quot;&quot;) Choose state...
        option(value=&quot;Arizona&quot;) Arizona
        option(value=&quot;Colorado&quot;) Colorado
        option(value=&quot;Florida&quot;) Florida
        option(value=&quot;Indiana&quot;) Indiana
        option(value=&quot;Kentucky&quot;) Kentucky
        option(value=&quot;Texas&quot;) Texas
      .invalid-tooltip
        | Please provide a valid state.
      .valid-tooltip
        | Looks good!
    .col-md-3.mb-3
      label(for=&quot;validationTooltip05&quot;).form-label
        | Zip
      input(type=&quot;text&quot;, id=&quot;validationTooltip05&quot;, placeholder=&quot;Zip&quot;, required).form-control
      .invalid-tooltip
        | Please provide a valid zip.
      .valid-tooltip
        | Looks good!
  .mb-3
    .form-check
      input(type=&quot;checkbox&quot;, id=&quot;invalidCheck01&quot;, required).form-check-input
      label(for=&quot;invalidCheck01&quot;).form-check-label Agree to terms and conditions
      .invalid-tooltip
        | You must agree before submitting.
  button.btn.btn-primary(type=&quot;submit&quot;) Submit Form</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- Quick (anchor) navigation-->
                <div className="col-xxl-3 d-none d-xxl-block ps-5">
                    <aside className="sticky-top pt-5">
                        <div className="pt-5 mt-5">
                            <div
                                className="widget widget-links ps-4 border-start"
                            >
                                <h3 className="widget-title">Jump to</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-types"
                                            >Supported input types</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-floating-labels"
                                            >Floating labels</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-password-visibility"
                                            >Password visibility toggle</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-checkboxes"
                                            >Checkboxes</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-radio"
                                            >Radio buttons</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-switches"
                                            >Switches</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-options"
                                            >Size / color options</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-file-upload"
                                            >Drag &amp; drop file upload</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-sizing"
                                            >Sizing</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-disabled"
                                            >Readonly &amp; Disabled</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-help-text"
                                            >Help text</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-validation-text"
                                            >Validation: status text</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#forms-validation-tooltips"
                                            >Validation: status tooltips</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
        <!-- Back To Top Button--><a
            className="btn-scroll-top"
            href="#top"
            data-scroll
            data-fixed-element
            ><span className="btn-scroll-top-tooltip text-muted fs-sm me-2"
                >Top</span
            ><i className="btn-scroll-top-icon ci-arrow-up"> </i
        ></a>
        <!-- Vendor scrits: js libraries and plugins-->
        <script src="../vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../vendor/simplebar/dist/simplebar.min.js"></script>
        <script src="../vendor/tiny-slider/dist/min/tiny-slider.js"></script>
        <script src="../vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
        <script src="../vendor/prismjs/components/prism-core.min.js"></script>
        <script src="../vendor/prismjs/components/prism-markup.min.js"></script>
        <script src="../vendor/prismjs/components/prism-clike.min.js"></script>
        <script src="../vendor/prismjs/components/prism-javascript.min.js"></script>
        <script src="../vendor/prismjs/components/prism-pug.min.js"></script>
        <script src="../vendor/prismjs/plugins/toolbar/prism-toolbar.min.js"></script>
        <script src="../vendor/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"></script>
        <script src="../vendor/prismjs/plugins/line-numbers/prism-line-numbers.min.js"></script>
        <!-- Main theme script-->
        <script src="../js/theme.min.js"></script>
    </body>
</html>
