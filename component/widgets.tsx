<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Widgets</title>
        <!-- SEO Meta Tags-->
        <meta
            name="description"
            content="Cartzilla - Bootstrap E-commerce Template"
        />
        <meta
            name="keywords"
            content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean"
        />
        <meta name="author" content="Createx Studio" />
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
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/nouislider/dist/nouislider.min.css"
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
                                        <li className="widget-list-item">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Widgets</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Collection of tiny components to use inside
                                sidebar area or footer.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        className="alert alert-info d-flex mt-n3 mb-5"
                        role="alert"
                    >
                        <div className="alert-icon">
                            <i className="ci-announcement"></i>
                        </div>
                        <p className="fs-md text-break mb-0">
                            <strong>Range slider</strong> widget depends on
                            <strong>noUISlider plugin</strong>. Make sure to
                            link to <strong>noUISlider css and js</strong> files
                            in your document:
                            <strong
                                >vendor/nouislider/distribute/nouislider.min.css</strong
                            >
                            and
                            <strong
                                >vendor/nouislider/distribute/nouislider.min.js</strong
                            >. Use this page as a reference.
                        </p>
                    </div>
                    <!-- Categories-->
                    <section className="pb-5 mb-md-2" id="widget-categories">
                        <h2 className="h5 mb-3">Categories</h2>
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
                                            className="widget widget-categories"
                                            style="max-width: 22rem"
                                        >
                                            <h3 className="widget-title">
                                                Shop categories
                                            </h3>
                                            <div
                                                className="accordion"
                                                id="shop-categories"
                                            >
                                                <!-- Clothing-->
                                                <div className="accordion-item">
                                                    <h3
                                                        className="accordion-header"
                                                    >
                                                        <a
                                                            className="accordion-button"
                                                            href="#clothing"
                                                            role="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="true"
                                                            aria-controls="clothing"
                                                            >Clothing</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="accordion-collapse collapse show"
                                                        id="clothing"
                                                        data-bs-parent="#shop-categories"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                        >
                                                            <div
                                                                className="widget widget-links widget-filter"
                                                            >
                                                                <div
                                                                    className="input-group input-group-sm mb-2"
                                                                >
                                                                    <input
                                                                        className="widget-filter-search form-control rounded-end"
                                                                        type="text"
                                                                        placeholder="Search"
                                                                    /><i
                                                                        className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"
                                                                    ></i>
                                                                </div>
                                                                <ul
                                                                    className="widget-list widget-filter-list pt-1"
                                                                    style="
                                                                        height: 12rem;
                                                                    "
                                                                    data-simplebar
                                                                    data-simplebar-auto-hide="false"
                                                                >
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >View
                                                                                all</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >2,548</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Blazers
                                                                                &amp;
                                                                                Suits</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >235</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Blouses</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >410</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Cardigans
                                                                                &amp;
                                                                                Jumpers</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >107</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Dresses</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >93</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Hoodie
                                                                                &amp;
                                                                                Sweatshirts</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >122</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Jackets
                                                                                &amp;
                                                                                Coats</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >116</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Jeans</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >215</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Lingerie</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >150</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Maternity
                                                                                Wear</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >8</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Nightwear</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >26</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Shirts</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >164</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Shorts</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >147</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Socks
                                                                                &amp;
                                                                                Tights</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >139</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Sportswear</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >65</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Swimwear</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >18</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >T-shirts
                                                                                &amp;
                                                                                Vests</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >209</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Tops</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >132</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Trousers</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >105</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Underwear</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >87</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Shoes-->
                                                <div className="accordion-item">
                                                    <h3
                                                        className="accordion-header"
                                                    >
                                                        <a
                                                            className="accordion-button collapsed"
                                                            href="#shoes"
                                                            role="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="shoes"
                                                            >Shoes</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="accordion-collapse collapse"
                                                        id="shoes"
                                                        data-bs-parent="#shop-categories"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                        >
                                                            <div
                                                                className="widget widget-links widget-filter"
                                                            >
                                                                <div
                                                                    className="input-group input-group-sm mb-2"
                                                                >
                                                                    <input
                                                                        className="widget-filter-search form-control rounded-end"
                                                                        type="text"
                                                                        placeholder="Search"
                                                                    /><i
                                                                        className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"
                                                                    ></i>
                                                                </div>
                                                                <ul
                                                                    className="widget-list widget-filter-list pt-1"
                                                                    style="
                                                                        height: 12rem;
                                                                    "
                                                                    data-simplebar
                                                                    data-simplebar-auto-hide="false"
                                                                >
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >View
                                                                                all</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >1,953</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Pumps
                                                                                &amp;
                                                                                High
                                                                                Heels</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >247</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Ballerinas
                                                                                &amp;
                                                                                Flats</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >156</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Sandals</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >310</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Sneakers</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >402</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Boots</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >393</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Ankle
                                                                                Boots</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >50</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Loafers</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >93</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Slip-on</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >122</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Flip
                                                                                Flops</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >116</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Clogs
                                                                                &amp;
                                                                                Mules</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >24</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Athletic
                                                                                Shoes</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >31</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Oxfords</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >9</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Smart
                                                                                Shoes</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >18</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Bags-->
                                                <div className="accordion-item">
                                                    <h3
                                                        className="accordion-header"
                                                    >
                                                        <a
                                                            className="accordion-button collapsed"
                                                            href="#bags"
                                                            role="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="bags"
                                                            >Bags</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="accordion-collapse collapse"
                                                        id="bags"
                                                        data-bs-parent="#shop-categories"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                        >
                                                            <div
                                                                className="widget widget-links widget-filter"
                                                            >
                                                                <div
                                                                    className="input-group input-group-sm mb-2"
                                                                >
                                                                    <input
                                                                        className="widget-filter-search form-control rounded-end"
                                                                        type="text"
                                                                        placeholder="Search"
                                                                    /><i
                                                                        className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"
                                                                    ></i>
                                                                </div>
                                                                <ul
                                                                    className="widget-list widget-filter-list pt-1"
                                                                    style="
                                                                        height: 12rem;
                                                                    "
                                                                    data-simplebar
                                                                    data-simplebar-auto-hide="false"
                                                                >
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >View
                                                                                all</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >801</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Handbags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >238</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Backpacks</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >116</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Wallets</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >104</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Luggage</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >115</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Lumbar
                                                                                Packs</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >17</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Duffle
                                                                                Bags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >9</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Bag
                                                                                /
                                                                                Travel
                                                                                Accessories</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >93</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Diaper
                                                                                Bags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >5</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Lunch
                                                                                Bags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >8</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Messenger
                                                                                Bags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >2</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Laptop
                                                                                Bags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >31</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Briefcases</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >45</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item widget-filter-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                className="widget-filter-item-text"
                                                                                >Sport
                                                                                Bags</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >18</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Sunglasses-->
                                                <div className="accordion-item">
                                                    <h3
                                                        className="accordion-header"
                                                    >
                                                        <a
                                                            className="accordion-button collapsed"
                                                            href="#sunglasses"
                                                            role="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="sunglasses"
                                                            >Sunglasses</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="accordion-collapse collapse"
                                                        id="sunglasses"
                                                        data-bs-parent="#shop-categories"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                        >
                                                            <div
                                                                className="widget widget-links"
                                                            >
                                                                <ul
                                                                    className="widget-list"
                                                                >
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >View
                                                                                all</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >1,842</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Fashion
                                                                                Sunglasses</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >953</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Sport
                                                                                Sunglasses</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >589</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Classic
                                                                                Sunglasses</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >300</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Watches-->
                                                <div className="accordion-item">
                                                    <h3
                                                        className="accordion-header"
                                                    >
                                                        <a
                                                            className="accordion-button collapsed"
                                                            href="#watches"
                                                            role="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="watches"
                                                            >Watches</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="accordion-collapse collapse"
                                                        id="watches"
                                                        data-bs-parent="#shop-categories"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                        >
                                                            <div
                                                                className="widget widget-links"
                                                            >
                                                                <ul
                                                                    className="widget-list"
                                                                >
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >View
                                                                                all</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >734</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Fashion
                                                                                Watches</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >572</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Casual
                                                                                Watches</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >110</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Luxury
                                                                                Watches</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >34</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Sport
                                                                                Watches</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >18</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Accessories-->
                                                <div className="accordion-item">
                                                    <div
                                                        className="accordion-header"
                                                    >
                                                        <a
                                                            className="accordion-button collapsed"
                                                            href="#accessories"
                                                            role="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="accessories"
                                                            >Accessories</a
                                                        >
                                                    </div>
                                                    <div
                                                        className="accordion-collapse collapse"
                                                        id="accessories"
                                                        data-bs-parent="#shop-categories"
                                                    >
                                                        <div
                                                            className="accordion-body"
                                                        >
                                                            <div
                                                                className="widget widget-links"
                                                            >
                                                                <ul
                                                                    className="widget-list"
                                                                >
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >View
                                                                                all</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >920</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Belts</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >364</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Hats</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >405</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Jewelry</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >131</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="widget-list-item"
                                                                    >
                                                                        <a
                                                                            className="widget-list-link d-flex justify-content-between align-items-center"
                                                                            href="#"
                                                                            ><span
                                                                                >Cosmetics</span
                                                                            ><span
                                                                                className="fs-xs text-muted ms-3"
                                                                                >20</span
                                                                            ></a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                        ><code className="lang-html">&lt;!-- Widget: Categories --&gt;
&lt;div className=&quot;widget widget-categories&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Shop categories&lt;/h3&gt;
  &lt;div id=&quot;shop-categories&quot; className=&quot;accordion&quot;&gt;

    &lt;!-- Category with search bar and scrollbar (more items) --&gt;
    &lt;div className=&quot;accordion-item&quot;&gt;
      &lt;h3 className=&quot;accordion-header&quot;&gt;
        &lt;a href=&quot;#clothing&quot; className=&quot;accordion-button&quot; role=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;clothing&quot;&gt;
          Clothing
        &lt;/a&gt;
      &lt;/h3&gt;
      &lt;div id=&quot;clothing&quot; className=&quot;accordion-collapse collapse show&quot; data-bs-parent=&quot;#shop-categories&quot;&gt;
        &lt;div className=&quot;accordion-body&quot;&gt;
          &lt;div className=&quot;widget widget-links widget-filter&quot;&gt;

            &lt;!-- Search --&gt;
            &lt;div className=&quot;input-group input-group-sm mb-2&quot;&gt;
              &lt;input type=&quot;text&quot; className=&quot;widget-filter-search form-control rounded-end&quot; placeholder=&quot;Search&quot;&gt;
              &lt;i className=&quot;ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;

            &lt;!-- Sub-categories --&gt;
            &lt;ul className=&quot;widget-list widget-filter-list pt-1&quot; style=&quot;height: 12rem;&quot; data-simplebar data-simplebar-auto-hide=&quot;false&quot;&gt;
              &lt;li className=&quot;widget-list-item widget-filter-item&quot;&gt;
                &lt;a href=&quot;#&quot; className=&quot;widget-list-link d-flex justify-content-between align-items-center&quot;&gt;
                  &lt;span className=&quot;widget-filter-item-text&quot;&gt;View all&lt;/span&gt;
                  &lt;span className=&quot;fs-xs text-muted ms-3&quot;&gt;2,548&lt;/span&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li className=&quot;widget-list-item widget-filter-item&quot;&gt;
                &lt;a href=&quot;#&quot; className=&quot;widget-list-link d-flex justify-content-between align-items-center&quot;&gt;
                  &lt;span className=&quot;widget-filter-item-text&quot;&gt;Blazers &amp;amp; Suits&lt;/span&gt;
                  &lt;span className=&quot;fs-xs text-muted ms-3&quot;&gt;235&lt;/span&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li className=&quot;widget-list-item widget-filter-item&quot;&gt;
                &lt;a href=&quot;#&quot; className=&quot;widget-list-link d-flex justify-content-between align-items-center&quot;&gt;
                  &lt;span className=&quot;widget-filter-item-text&quot;&gt;Blouses&lt;/span&gt;
                  &lt;span className=&quot;fs-xs text-muted ms-3&quot;&gt;410&lt;/span&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              ...
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Category without search bar and scrollbar (less items) --&gt;
    &lt;div className=&quot;accordion-item&quot;&gt;
      &lt;h3 className=&quot;accordion-header&quot;&gt;
        &lt;a href=&quot;#sunglasses&quot; className=&quot;accordion-button collapsed&quot; role=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;sunglasses&quot;&gt;
          Sunglasses
        &lt;/a&gt;
      &lt;/h3&gt;
      &lt;div id=&quot;sunglasses&quot; className=&quot;accordion-collapse collapse&quot; data-bs-parent=&quot;#shop-categories&quot;&gt;
        &lt;div className=&quot;accordion-body&quot;&gt;

          &lt;!-- Sub-categories --&gt;
          &lt;div className=&quot;widget widget-links&quot;&gt;
            &lt;ul className=&quot;widget-list&quot;&gt;
              &lt;li className=&quot;widget-list-item&quot;&gt;
                &lt;a href=&quot;#&quot; className=&quot;widget-list-link d-flex justify-content-between align-items-center&quot;&gt;
                  &lt;span&gt;View all&lt;/span&gt;
                  &lt;span className=&quot;fs-xs text-muted ms-3&quot;&gt;1,842&lt;/span&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li className=&quot;widget-list-item&quot;&gt;
                &lt;a href=&quot;#&quot; className=&quot;widget-list-link d-flex justify-content-between align-items-center&quot;&gt;
                  &lt;span&gt;Fashion Sunglasses&lt;/span&gt;
                  &lt;span className=&quot;fs-xs text-muted ms-3&quot;&gt;953&lt;/span&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              &lt;li className=&quot;widget-list-item&quot;&gt;
                &lt;a href=&quot;#&quot; className=&quot;widget-list-link d-flex justify-content-between align-items-center&quot;&gt;
                  &lt;span&gt;Sport Sunglasses&lt;/span&gt;
                  &lt;span className=&quot;fs-xs text-muted ms-3&quot;&gt;589&lt;/span&gt;
                &lt;/a&gt;
              &lt;/li&gt;
              ...
            &lt;/ul&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Add as many categories and sub-categories as you need --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Categories
.widget.widget-categories
  h3.widget-title Shop categories
  #shop-categories.accordion

    // Category with search bar and scrollbar (more items)
    .accordion
      h3.accordion-header
        a(href=&quot;#clothing&quot;, role=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, aria-expanded=&quot;true&quot;, aria-controls=&quot;clothing&quot;).accordion-button
          | Clothing
      #clothing.accordion-collapse.collapse.show(data-bs-parent=&quot;#shop-categories&quot;)
        .accordion-body
          .widget.widget-links.widget-filter

            // Search
            .input-group.input-group-sm.mb-2
              input(type=&quot;text&quot;, placeholder=&quot;Search&quot;).widget-filter-search.form-control.rounded-end
              i.ci-search.position-absolute.top-50.end-0.translate-middle-y.fs-sm.me-3

            // Sub-categories
            ul(style=&quot;height: 12rem;&quot;, data-simplebar, data-simplebar-auto-hide=&quot;false&quot;).widget-list.widget-filter-list.pt-1
              li.widget-list-item.widget-filter-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span.widget-filter-item-text View all
                  span.fs-xs.text-muted.ms-3 2,548
              li.widget-list-item.widget-filter-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span.widget-filter-item-text Blazers &amp;amp; Suits
                  span.fs-xs.text-muted.ms-3 235
              li.widget-list-item.widget-filter-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span.widget-filter-item-text Blouses
                  span.fs-xs.text-muted.ms-3 410
              ...

    // Category without search bar and scrollbar (less items)
    .accordion
      h3.accordion-header
        a(href=&quot;#sunglasses&quot; role=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;sunglasses&quot;).accordion-button.collapsed
          | Sunglasses
      #sunglasses.accordion-collapse.collapse(data-bs-parent=&quot;#shop-categories&quot;)
        .accordion-body

          // Sub-categories
          .widget.widget-links
            ul.widget-list
              li.widget-list-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span View all
                  span.fs-xs.text-muted.ms-3 1,842
              li.widget-list-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span Fashion Sunglasses
                  span.fs-xs.text-muted.ms-3 953
              li.widget-list-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span Sport Sunglasses
                  span.fs-xs.text-muted.ms-3 589
              li.widget-list-item
                a(href=&quot;#&quot;).widget-list-link.d-flex.justify-content-between.align-items-center
                  span Classic Sunglasses
                  span.fs-xs.text-muted.ms-3 300

    // Add as many categories and sub-categories as you need
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Price range-->
                    <section className="pb-5 mb-md-2" id="widget-range">
                        <h2 className="h5 mb-3">Price range</h2>
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
                                        <div
                                            className="widget"
                                            style="max-width: 20rem"
                                        >
                                            <h3 className="widget-title">
                                                Price range
                                            </h3>
                                            <div
                                                className="range-slider"
                                                data-start-min="250"
                                                data-start-max="680"
                                                data-min="0"
                                                data-max="1000"
                                                data-step="1"
                                            >
                                                <div
                                                    className="range-slider-ui"
                                                ></div>
                                                <div className="d-flex">
                                                    <div
                                                        className="w-50 pe-2 me-2"
                                                    >
                                                        <div
                                                            className="input-group input-group-sm"
                                                        >
                                                            <span
                                                                className="input-group-text"
                                                                >$</span
                                                            >
                                                            <input
                                                                className="form-control range-slider-value-min"
                                                                type="text"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-50 ps-2">
                                                        <div
                                                            className="input-group input-group-sm"
                                                        >
                                                            <span
                                                                className="input-group-text"
                                                                >$</span
                                                            >
                                                            <input
                                                                className="form-control range-slider-value-max"
                                                                type="text"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Widget: Range slider
        Data API:
        data-start-min - position of the slider's left handle
        data-start-max - position of the slider's right handle
        data-min - range minimum
        data-max - range maximum
        data-step - range step
--&gt;
&lt;div className=&quot;widget&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Price range&lt;/h3&gt;
  &lt;div className=&quot;range-slider&quot; data-start-min=&quot;250&quot; data-start-max=&quot;680&quot; data-min=&quot;0&quot; data-max=&quot;1000&quot; data-step=&quot;1&quot;&gt;
    &lt;div className=&quot;range-slider-ui&quot;&gt;&lt;/div&gt;
    &lt;div className=&quot;d-flex&quot;&gt;
      &lt;div className=&quot;w-50 pe-2 me-2&quot;&gt;
        &lt;div className=&quot;input-group input-group-sm&quot;&gt;
          &lt;span className=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
          &lt;input className=&quot;form-control range-slider-value-min&quot; type=&quot;text&quot;&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div className=&quot;w-50 ps-2&quot;&gt;
        &lt;div className=&quot;input-group input-group-sm&quot;&gt;
          &lt;span className=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
          &lt;input className=&quot;form-control range-slider-value-max&quot; type=&quot;text&quot;&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Range slider
// Data API:
// data-start-min - position of the slider's left handle
// data-start-max - position of the slider's right handle
// data-min - range minimum
// data-max - range maximum
// data-step - range step
.widget
  h3.widget-title Price range
  .range-slider(data-start-min=&quot;250&quot;, data-start-max=&quot;680&quot;, data-min=&quot;0&quot;, data-max=&quot;1000&quot;, data-step=&quot;1&quot;)
    .range-slider-ui
    .d-flex
      .w-50.pe-2.me-2
        .input-group.input-group-sm
          span.input-group-text $
          input(type=&quot;text&quot;).form-control.range-slider-value-min
      .w-50.ps-2
        .input-group.input-group-sm
          span.input-group-text $
          input(type=&quot;text&quot;).form-control.range-slider-value-max
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Links-->
                    <section className="pb-5 mb-md-2" id="widget-links">
                        <h2 className="h5 mb-3">Links</h2>
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
                                        <div className="widget widget-links">
                                            <h3 className="widget-title">
                                                Useful links
                                            </h3>
                                            <ul className="widget-list">
                                                <li
                                                    className="widget-list-item"
                                                >
                                                    <a
                                                        className="widget-list-link"
                                                        href="#"
                                                        >Your account</a
                                                    >
                                                </li>
                                                <li
                                                    className="widget-list-item"
                                                >
                                                    <a
                                                        className="widget-list-link"
                                                        href="#"
                                                        >Shipping rates &amp;
                                                        policies</a
                                                    >
                                                </li>
                                                <li
                                                    className="widget-list-item"
                                                >
                                                    <a
                                                        className="widget-list-link"
                                                        href="#"
                                                        >Refunds &amp;
                                                        replacements</a
                                                    >
                                                </li>
                                                <li
                                                    className="widget-list-item"
                                                >
                                                    <a
                                                        className="widget-list-link"
                                                        href="#"
                                                        >Taxes</a
                                                    >
                                                </li>
                                                <li
                                                    className="widget-list-item"
                                                >
                                                    <a
                                                        className="widget-list-link"
                                                        href="#"
                                                        >Delivery info</a
                                                    >
                                                </li>
                                                <li
                                                    className="widget-list-item"
                                                >
                                                    <a
                                                        className="widget-list-link"
                                                        href="#"
                                                        >Affiliate program</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Widget: Links --&gt;
&lt;div className=&quot;widget widget-links&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Useful links&lt;/h3&gt;
  &lt;ul className=&quot;widget-list&quot;&gt;
    &lt;li className=&quot;widget-list-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;widget-list-link&quot;&gt;Your account&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;widget-list-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;widget-list-link&quot;&gt;Shipping rates &amp;amp; policies&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;widget-list-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;widget-list-link&quot;&gt;Refunds &amp;amp; replacements&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;widget-list-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;widget-list-link&quot;&gt;Taxes&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;widget-list-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;widget-list-link&quot;&gt;Delivery info&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;widget-list-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;widget-list-link&quot;&gt;Affiliate program&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Links
.widget.widget-links
  h3.widget-title Useful links
  ul.widget-list
    li.widget-list-item
      a.widget-list-link(href=&quot;#&quot;) Your account
    li.widget-list-item
      a.widget-list-link(href=&quot;#&quot;) Shipping rates &amp;amp; policies
    li.widget-list-item
      a.widget-list-link(href=&quot;#&quot;) Refunds &amp;amp; replacements
    li.widget-list-item
      a.widget-list-link(href=&quot;#&quot;) Taxes
    li.widget-list-item
      a.widget-list-link(href=&quot;#&quot;) Delivery info
    li.widget-list-item
      a.widget-list-link(href=&quot;#&quot;) Affiliate program
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Featured products list-->
                    <section className="pb-5 mb-md-2" id="widget-products-list">
                        <h2 className="h5 mb-3">Featured products list</h2>
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
                                        <div
                                            className="widget"
                                            style="max-width: 22rem"
                                        >
                                            <h3 className="widget-title">
                                                Featured products
                                            </h3>
                                            <div
                                                className="d-flex align-items-center pb-2 border-bottom"
                                            >
                                                <a
                                                    className="flex-shrink-0"
                                                    href="#"
                                                    ><img
                                                        src="../img/shop/cart/widget/01.jpg"
                                                        width="64"
                                                        alt="Product"
                                                /></a>
                                                <div className="ps-2">
                                                    <h6
                                                        className="widget-product-title"
                                                    >
                                                        <a href="#"
                                                            >Women Colorblock
                                                            Sneakers</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="widget-product-meta"
                                                    >
                                                        <span
                                                            className="text-accent me-2"
                                                            >$150.<small
                                                                >00</small
                                                            ></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex align-items-center py-2 border-bottom"
                                            >
                                                <a
                                                    className="flex-shrink-0"
                                                    href="#"
                                                    ><img
                                                        src="../img/shop/cart/widget/02.jpg"
                                                        width="64"
                                                        alt="Product"
                                                /></a>
                                                <div className="ps-2">
                                                    <h6
                                                        className="widget-product-title"
                                                    >
                                                        <a href="#"
                                                            >TH Jeans City
                                                            Backpack</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="widget-product-meta"
                                                    >
                                                        <span
                                                            className="text-accent me-2"
                                                            >$79.<small
                                                                >50</small
                                                            ></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex align-items-center py-2 border-bottom"
                                            >
                                                <a
                                                    className="flex-shrink-0"
                                                    href="#"
                                                    ><img
                                                        src="../img/shop/cart/widget/03.jpg"
                                                        width="64"
                                                        alt="Product"
                                                /></a>
                                                <div className="ps-2">
                                                    <h6
                                                        className="widget-product-title"
                                                    >
                                                        <a href="#"
                                                            >3-Color Sun Stash
                                                            Hat</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="widget-product-meta"
                                                    >
                                                        <span
                                                            className="text-accent me-2"
                                                            >$22.<small
                                                                >50</small
                                                            ></span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex align-items-center py-2"
                                            >
                                                <a
                                                    className="flex-shrink-0"
                                                    href="#"
                                                    ><img
                                                        src="../img/shop/cart/widget/04.jpg"
                                                        width="64"
                                                        alt="Product"
                                                /></a>
                                                <div className="ps-2">
                                                    <h6
                                                        className="widget-product-title"
                                                    >
                                                        <a href="#"
                                                            >Cotton Polo Regular
                                                            Fit</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="widget-product-meta"
                                                    >
                                                        <span
                                                            className="text-accent me-2"
                                                            >$9.<small
                                                                >00</small
                                                            ></span
                                                        >
                                                    </div>
                                                </div>
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
                                        ><code className="lang-html">&lt;!-- Widget: Featured products list --&gt;
&lt;div className=&quot;widget&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Featured products&lt;/h3&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;d-flex align-items-center pb-2 border-bottom&quot;&gt;
    &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
      &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
    &lt;/a&gt;
    &lt;div className=&quot;ps-2&quot;&gt;
      &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Women Colorblock Sneakers&lt;/a&gt;&lt;/h6&gt;
      &lt;div className=&quot;widget-product-meta&quot;&gt;
        &lt;span className=&quot;text-accent me-2&quot;&gt;$150.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;d-flex align-items-center py-2 border-bottom&quot;&gt;
    &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
      &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
    &lt;/a&gt;
    &lt;div className=&quot;ps-2&quot;&gt;
      &lt;6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;TH Jeans City Backpack&lt;/a&gt;&lt;/h6&gt;
      &lt;div className=&quot;widget-product-meta&quot;&gt;
        &lt;span className=&quot;text-accent me-2&quot;&gt;$79.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;d-flex align-items-center py-2 border-bottom&quot;&gt;
    &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
      &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
    &lt;/a&gt;
    &lt;div className=&quot;ps-2y&quot;&gt;
      &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;3-Color Sun Stash Hat&lt;/a&gt;&lt;/h6&gt;
      &lt;div className=&quot;widget-product-meta&quot;&gt;
        &lt;span className=&quot;text-accent me-2&quot;&gt;$22.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;d-flex align-items-center py-2&quot;&gt;
    &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
      &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
    &lt;/a&gt;
    &lt;div className=&quot;ps-2&quot;&gt;
      &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Cotton Polo Regular Fit&lt;/a&gt;&lt;/h6&gt;
      &lt;div className=&quot;widget-product-meta&quot;&gt;
        &lt;span className=&quot;text-accent me-2&quot;&gt;$9.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Featured products list
.widget
  h3.widget-title Featured products

  // Item
  .d-flex.align-items-center.pb-2.border-bottom
    a(href=&quot;#&quot;).flex-shrink-0
      img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
    .ps-2
      h6.widget-product-title
        a(href=&quot;#&quot;) Women Colorblock Sneakers
      .widget-product-meta
        span.text-accent.me-2
          | $150.
          small 00

  // Item
  .d-flex.align-items-center.py-2.border-bottom
    a(href=&quot;#&quot;).flex-shrink-0
      img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
    .ps-2
      h6.widget-product-title
        a(href=&quot;#&quot;) TH Jeans City Backpack
      .widget-product-meta
        span.text-accent.me-2
          | $79.
          small 50

  // Item
  .d-flex.align-items-center.py-2.border-bottom
    a(href=&quot;#&quot;).flex-shrink-0
      img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
    .ps-2
      h6.widget-product-title
        a(href=&quot;#&quot;) 3-Color Sun Stash Hat
      .widget-product-meta
        span.text-accent.me-2
          | $22.
          small 50

  // Item
  .d-flex.align-items-center.py-2
    a(href=&quot;#&quot;).flex-shrink-0
      img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
    .ps-2
      h6.widget-product-title
        a(href=&quot;#&quot;) Cotton Polo Regular Fit
      .widget-product-meta
        span.text-accent.me-2
          | $9.
          small 00
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Featured products carousel-->
                    <section
                        className="pb-5 mb-md-2"
                        id="widget-products-carousel"
                    >
                        <h2 className="h5 mb-3">Featured products carousel</h2>
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
                                        <div
                                            className="widget"
                                            style="max-width: 22rem"
                                        >
                                            <h3 className="widget-title">
                                                Featured products
                                            </h3>
                                            <div
                                                className="tns-carousel tns-nav-start"
                                            >
                                                <div
                                                    className="tns-carousel-inner"
                                                    data-carousel-options='{"controls": false}'
                                                >
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center"
                                                        >
                                                            <a
                                                                className="flex-shrink-0"
                                                                href="#"
                                                                ><img
                                                                    src="../img/shop/cart/widget/01.jpg"
                                                                    width="64"
                                                                    alt="Product"
                                                            /></a>
                                                            <div
                                                                className="ps-2"
                                                            >
                                                                <h6
                                                                    className="widget-product-title"
                                                                >
                                                                    <a href="#"
                                                                        >Women
                                                                        Colorblock
                                                                        Sneakers</a
                                                                    >
                                                                </h6>
                                                                <div
                                                                    className="widget-product-meta"
                                                                >
                                                                    <span
                                                                        className="text-accent me-2"
                                                                        >$150.<small
                                                                            >00</small
                                                                        ></span
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center"
                                                        >
                                                            <a
                                                                className="flex-shrink-0"
                                                                href="#"
                                                                ><img
                                                                    src="../img/shop/cart/widget/02.jpg"
                                                                    width="64"
                                                                    alt="Product"
                                                            /></a>
                                                            <div
                                                                className="ps-2"
                                                            >
                                                                <h6
                                                                    className="widget-product-title"
                                                                >
                                                                    <a href="#"
                                                                        >TH
                                                                        Jeans
                                                                        City
                                                                        Backpack</a
                                                                    >
                                                                </h6>
                                                                <div
                                                                    className="widget-product-meta"
                                                                >
                                                                    <span
                                                                        className="text-accent me-2"
                                                                        >$79.<small
                                                                            >50</small
                                                                        ></span
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center"
                                                        >
                                                            <a
                                                                className="flex-shrink-0"
                                                                href="#"
                                                                ><img
                                                                    src="../img/shop/cart/widget/03.jpg"
                                                                    width="64"
                                                                    alt="Product"
                                                            /></a>
                                                            <div
                                                                className="ps-2"
                                                            >
                                                                <h6
                                                                    className="widget-product-title"
                                                                >
                                                                    <a href="#"
                                                                        >3-Color
                                                                        Sun
                                                                        Stash
                                                                        Hat</a
                                                                    >
                                                                </h6>
                                                                <div
                                                                    className="widget-product-meta"
                                                                >
                                                                    <span
                                                                        className="text-accent me-2"
                                                                        >$22.<small
                                                                            >50</small
                                                                        ></span
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="d-flex align-items-center"
                                                        >
                                                            <a
                                                                className="flex-shrink-0"
                                                                href="#"
                                                                ><img
                                                                    src="../img/shop/cart/widget/04.jpg"
                                                                    width="64"
                                                                    alt="Product"
                                                            /></a>
                                                            <div
                                                                className="ps-2"
                                                            >
                                                                <h6
                                                                    className="widget-product-title"
                                                                >
                                                                    <a href="#"
                                                                        >Cotton
                                                                        Polo
                                                                        Regular
                                                                        Fit</a
                                                                    >
                                                                </h6>
                                                                <div
                                                                    className="widget-product-meta"
                                                                >
                                                                    <span
                                                                        className="text-accent me-2"
                                                                        >$9.<small
                                                                            >00</small
                                                                        ></span
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                        ><code className="lang-html">&lt;!-- Widget: Featured products carousel --&gt;
&lt;div className=&quot;widget&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Featured products&lt;/h3&gt;
  &lt;div className=&quot;tns-carousel tns-nav-start&quot;&gt;
    &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;controls&quot;: false}'&gt;

      &lt;!-- Item --&gt;
      &lt;div&gt;
        &lt;div className=&quot;d-flex align-items-center&quot;&gt;
          &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
            &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
          &lt;/a&gt;
          &lt;div className=&quot;ps-2&quot;&gt;
            &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Women Colorblock Sneakers&lt;/a&gt;&lt;/h6&gt;
            &lt;div className=&quot;widget-product-meta&quot;&gt;
              &lt;span className=&quot;text-accent me-2&quot;&gt;$150.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Item --&gt;
      &lt;div&gt;
        &lt;div className=&quot;d-flex align-items-center&quot;&gt;
          &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
            &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
          &lt;/a&gt;
          &lt;div className=&quot;ps-2&quot;&gt;
            &lt;6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;TH Jeans City Backpack&lt;/a&gt;&lt;/h6&gt;
            &lt;div className=&quot;widget-product-meta&quot;&gt;
              &lt;span className=&quot;text-accent me-2&quot;&gt;$79.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Item --&gt;
      &lt;div&gt;
        &lt;div className=&quot;d-flex align-items-center&quot;&gt;
          &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
            &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
          &lt;/a&gt;
          &lt;div className=&quot;ps-2&quot;&gt;
            &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;3-Color Sun Stash Hat&lt;/a&gt;&lt;/h6&gt;
            &lt;div className=&quot;widget-product-meta&quot;&gt;
              &lt;span className=&quot;text-accent me-2&quot;&gt;$22.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Item --&gt;
      &lt;div&gt;
        &lt;div className=&quot;d-flex align-items-center&quot;&gt;
          &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
            &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
          &lt;/a&gt;
          &lt;div className=&quot;ps-2&quot;&gt;
            &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Cotton Polo Regular Fit&lt;/a&gt;&lt;/h6&gt;
            &lt;div className=&quot;widget-product-meta&quot;&gt;
              &lt;span className=&quot;text-accent me-2&quot;&gt;$9.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Featured products carousel
.widget
  h3.widget-title Featured products

  .tns-carousel.tns-nav-start
    .tns-carousel-inner(data-carousel-options='{&quot;controls&quot;: false}')

      // Item
      div
        .d-flex.align-items-center
          a(href=&quot;#&quot;).flex-shrink-0
            img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
          .ps-2
            h6.widget-product-title
              a(href=&quot;#&quot;) Women Colorblock Sneakers
            .widget-product-meta
              span.text-accent.me-2
                | $150.
                small 00

      // Item
      div
        .d-flex.align-items-center
          a(href=&quot;#&quot;).flex-shrink-0
            img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
          .ps-2
            h6.widget-product-title
              a(href=&quot;#&quot;) TH Jeans City Backpack
            .widget-product-meta
              span.text-accent.me-2
                | $79.
                small 50

      // Item
      div
        .d-flex.align-items-center
          a(href=&quot;#&quot;).flex-shrink-0
            img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
          .ps-2
            h6.widget-product-title
              a(href=&quot;#&quot;) 3-Color Sun Stash Hat
            .widget-product-meta
              span.text-accent.me-2
                | $22.
                small 50

      // Item
      div
        .d-flex.align-items-center
          a(href=&quot;#&quot;).flex-shrink-0
            img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
          .ps-2
            h6.widget-product-title
              a(href=&quot;#&quot;) Cotton Polo Regular Fit
            .widget-product-meta
              span.text-accent.me-2
                | $9.
                small 00
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Shopping cart-->
                    <section className="pb-5 mb-md-2" id="widget-cart">
                        <h2 className="h5 mb-3">Shopping cart</h2>
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
                                            className="widget widget-cart"
                                            style="max-width: 22rem"
                                        >
                                            <h3 className="widget-title">
                                                Your cart
                                            </h3>
                                            <div
                                                style="max-height: 15rem"
                                                data-simplebar
                                                data-simplebar-auto-hide="false"
                                            >
                                                <div
                                                    className="widget-cart-item pb-2 border-bottom"
                                                >
                                                    <button
                                                        className="btn-close text-danger"
                                                        type="button"
                                                        aria-label="Remove"
                                                    >
                                                        <span aria-hidden="true"
                                                            >&times;</span
                                                        >
                                                    </button>
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <a
                                                            className="flex-shrink-0"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/cart/widget/01.jpg"
                                                                width="64"
                                                                alt="Product"
                                                        /></a>
                                                        <div className="ps-2">
                                                            <h6
                                                                className="widget-product-title"
                                                            >
                                                                <a href="#"
                                                                    >Women
                                                                    Colorblock
                                                                    Sneakers</a
                                                                >
                                                            </h6>
                                                            <div
                                                                className="widget-product-meta"
                                                            >
                                                                <span
                                                                    className="text-accent me-2"
                                                                    >$150.<small
                                                                        >00</small
                                                                    ></span
                                                                ><span
                                                                    className="text-muted"
                                                                    >x 1</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="widget-cart-item py-2 border-bottom"
                                                >
                                                    <button
                                                        className="btn-close text-danger"
                                                        type="button"
                                                        aria-label="Remove"
                                                    >
                                                        <span aria-hidden="true"
                                                            >&times;</span
                                                        >
                                                    </button>
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <a
                                                            className="flex-shrink-0"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/cart/widget/02.jpg"
                                                                width="64"
                                                                alt="Product"
                                                        /></a>
                                                        <div className="ps-2">
                                                            <h6
                                                                className="widget-product-title"
                                                            >
                                                                <a href="#"
                                                                    >TH Jeans
                                                                    City
                                                                    Backpack</a
                                                                >
                                                            </h6>
                                                            <div
                                                                className="widget-product-meta"
                                                            >
                                                                <span
                                                                    className="text-accent me-2"
                                                                    >$79.<small
                                                                        >50</small
                                                                    ></span
                                                                ><span
                                                                    className="text-muted"
                                                                    >x 1</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="widget-cart-item py-2 border-bottom"
                                                >
                                                    <button
                                                        className="btn-close text-danger"
                                                        type="button"
                                                        aria-label="Remove"
                                                    >
                                                        <span aria-hidden="true"
                                                            >&times;</span
                                                        >
                                                    </button>
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <a
                                                            className="flex-shrink-0"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/cart/widget/03.jpg"
                                                                width="64"
                                                                alt="Product"
                                                        /></a>
                                                        <div className="ps-2">
                                                            <h6
                                                                className="widget-product-title"
                                                            >
                                                                <a href="#"
                                                                    >3-Color Sun
                                                                    Stash Hat</a
                                                                >
                                                            </h6>
                                                            <div
                                                                className="widget-product-meta"
                                                            >
                                                                <span
                                                                    className="text-accent me-2"
                                                                    >$22.<small
                                                                        >50</small
                                                                    ></span
                                                                ><span
                                                                    className="text-muted"
                                                                    >x 1</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="widget-cart-item py-2 border-bottom"
                                                >
                                                    <button
                                                        className="btn-close text-danger"
                                                        type="button"
                                                        aria-label="Remove"
                                                    >
                                                        <span aria-hidden="true"
                                                            >&times;</span
                                                        >
                                                    </button>
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <a
                                                            className="flex-shrink-0"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/cart/widget/04.jpg"
                                                                width="64"
                                                                alt="Product"
                                                        /></a>
                                                        <div className="ps-2">
                                                            <h6
                                                                className="widget-product-title"
                                                            >
                                                                <a href="#"
                                                                    >Cotton Polo
                                                                    Regular
                                                                    Fit</a
                                                                >
                                                            </h6>
                                                            <div
                                                                className="widget-product-meta"
                                                            >
                                                                <span
                                                                    className="text-accent me-2"
                                                                    >$9.<small
                                                                        >00</small
                                                                    ></span
                                                                ><span
                                                                    className="text-muted"
                                                                    >x 1</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="d-flex flex-wrap justify-content-between align-items-center py-3"
                                            >
                                                <div
                                                    className="fs-sm me-2 py-2"
                                                >
                                                    <span className="text-muted"
                                                        >Subtotal:</span
                                                    ><span
                                                        className="text-accent fs-base ms-1"
                                                        >$265.<small
                                                            >00</small
                                                        ></span
                                                    >
                                                </div>
                                                <a
                                                    className="btn btn-outline-secondary btn-sm"
                                                    href="#"
                                                    >Expand cart<i
                                                        className="ci-arrow-right ms-1 me-n1"
                                                    ></i
                                                ></a>
                                            </div>
                                            <a
                                                className="btn btn-primary btn-sm d-block w-100"
                                                href="#"
                                                ><i
                                                    className="ci-card me-2 fs-base align-middle"
                                                ></i
                                                >Checkout</a
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
                                        ><code className="lang-html">&lt;!-- Widget: Shopping cart --&gt;
&lt;div className=&quot;widget widget-cart&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Your cart&lt;/h3&gt;

  &lt;!-- Scrollable area --&gt;
  &lt;div style=&quot;max-height: 15rem;&quot; data-simplebar data-simplebar-auto-hide=&quot;false&quot;&gt;

    &lt;!-- Item --&gt;
    &lt;div className=&quot;widget-cart-item pb-2 border-bottom&quot;&gt;
      &lt;button className=&quot;btn-close text-danger&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
        &lt;/a&gt;
        &lt;div className=&quot;ps-2&quot;&gt;
          &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Women Colorblock Sneakers&lt;/a&gt;&lt;/h6&gt;
          &lt;div className=&quot;widget-product-meta&quot;&gt;
            &lt;span className=&quot;text-accent me-2&quot;&gt;$150.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;span className=&quot;text-muted&quot;&gt;x 1&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Item --&gt;
    &lt;div className=&quot;widget-cart-item py-2 border-bottom&quot;&gt;
      &lt;button className=&quot;btn-close text-danger&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
        &lt;/a&gt;
        &lt;div className=&quot;ps-2&quot;&gt;
          &lt;6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;TH Jeans City Backpack&lt;/a&gt;&lt;/h6&gt;
          &lt;div className=&quot;widget-product-meta&quot;&gt;
            &lt;span className=&quot;text-accent me-2&quot;&gt;$79.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;span className=&quot;text-muted&quot;&gt;x 1&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Item --&gt;
    &lt;div className=&quot;widget-cart-item py-2 border-bottom&quot;&gt;
      &lt;button className=&quot;btn-close text-danger&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
        &lt;/a&gt;
        &lt;div className=&quot;ps-2&quot;&gt;
          &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;3-Color Sun Stash Hat&lt;/a&gt;&lt;/h6&gt;
          &lt;div className=&quot;widget-product-meta&quot;&gt;
            &lt;span className=&quot;text-accent me-2&quot;&gt;$22.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;span className=&quot;text-muted&quot;&gt;x 1&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Item --&gt;
    &lt;div className=&quot;widget-cart-item py-2 border-bottom&quot;&gt;
      &lt;button className=&quot;btn-close text-danger&quot; type=&quot;button&quot; aria-label=&quot;Remove&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
      &lt;/button&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;a className=&quot;flex-shrink-0&quot; href=&quot;#&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; width=&quot;64&quot; alt=&quot;Product&quot;/&gt;
        &lt;/a&gt;
        &lt;div className=&quot;ps-2&quot;&gt;
          &lt;h6 className=&quot;widget-product-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Cotton Polo Regular Fit&lt;/a&gt;&lt;/h6&gt;
          &lt;div className=&quot;widget-product-meta&quot;&gt;
            &lt;span className=&quot;text-accent me-2&quot;&gt;$9.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
            &lt;span className=&quot;text-muted&quot;&gt;x 1&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Footer --&gt;
  &lt;div className=&quot;d-flex flex-wrap justify-content-between align-items-center py-3&quot;&gt;
    &lt;div className=&quot;fs-sm me-2 py-2&quot;&gt;
      &lt;span className=&quot;text-muted&quot;&gt;Subtotal:&lt;/span&gt;
      &lt;span className=&quot;text-accent fs-base ms-1&quot;&gt;$265.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;a className=&quot;btn btn-outline-secondary btn-sm&quot; href=&quot;#&quot;&gt;
      Expand cart
      &lt;i className=&quot;ci-arrow-right ms-1 me-n1&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
  &lt;/div&gt;
  &lt;a className=&quot;btn btn-primary btn-sm d-block w-100&quot; href=&quot;#&quot;&gt;
    &lt;i className=&quot;ci-card me-2 fs-base align-middle&quot;&gt;&lt;/i&gt;
    Checkout
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Shopping cart
.widget.widget-cart
  h3.widget-title Your cart

  // Scrollable area
  div(style=&quot;max-height: 15rem;&quot;, data-simplebar, data-simplebar-auto-hide=&quot;false&quot;)

    // Item
    .widget-cart-item.pb-2.border-bottom
      button(type=&quot;button&quot;, className=&quot;btn-close text-danger&quot;, aria-label=&quot;Remove&quot;)
        span(aria-hidden=&quot;true&quot;) &amp;times;
      .d-flex.align-items-center
        a(href=&quot;#&quot;).flex-shrink-0
          img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
        .ps-2
          h6.widget-product-title
            a(href=&quot;#&quot;) Women Colorblock Sneakers
          .widget-product-meta
            span.text-accent.me-2
              | $150.
              small 00
            span.text-muted x 1

    // Item
    .widget-cart-item.py-2.border-bottom
      button(type=&quot;button&quot;, className=&quot;btn-close text-danger&quot;, aria-label=&quot;Remove&quot;)
        span(aria-hidden=&quot;true&quot;) &amp;times;
      .d-flex.align-items-center
        a(href=&quot;#&quot;).flex-shrink-0
          img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
        .ps-2
          h6.widget-product-title
            a(href=&quot;#&quot;) TH Jeans City Backpack
          .widget-product-meta
            span.text-accent.me-2
              | $79.
              small 50
            span.text-muted x 1

    // Item
    .widget-cart-item.py-2.border-bottom
      button(type=&quot;button&quot;, className=&quot;btn-close text-danger&quot;, aria-label=&quot;Remove&quot;)
        span(aria-hidden=&quot;true&quot;) &amp;times;
      .d-flex.align-items-center
        a(href=&quot;#&quot;).flex-shrink-0
          img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
        .ps-2
          h6.widget-product-title
            a(href=&quot;#&quot;) 3-Color Sun Stash Hat
          .widget-product-meta
            span.text-accent.me-2
              | $22.
              small 50
            span.text-muted x 1

    // Item
    .widget-cart-item.py-2.border-bottom
      button(type=&quot;button&quot;, className=&quot;btn-close text-danger&quot;, aria-label=&quot;Remove&quot;)
        span(aria-hidden=&quot;true&quot;) &amp;times;
      .d-flex.align-items-center
        a(href=&quot;#&quot;).flex-shrink-0
          img(src=&quot;path-to-image&quot;, width=&quot;64&quot;, alt=&quot;Product&quot;)
        .ps-2
          h6.widget-product-title
            a(href=&quot;#&quot;) Cotton Polo Regular Fit
          .widget-product-meta
            span.text-accent.me-2
              | $9.
              small 00
            span.text-muted x 1

  // Footer
  .d-flex.flex-wrap.justify-content-between.align-items-center.py-3
    .fs-sm.me-2.py-2
      span.text-muted Subtotal:
      span.text-accent.fs-base.ms-1
        | $265.
        small 00
    a(href=&quot;#&quot;).btn.btn-outline-secondary.btn-sm
      | Expand cart
      i.ci-arrow-right.ms-1.me-n1
  a(href=&quot;#&quot;).btn.btn-primary.btn-sm.d-block.w-100
    i.ci-card.me-2.fs-base.align-middle
    | Checkout
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Tag cloud-->
                    <section className="pb-5 mb-md-2" id="widget-tags">
                        <h2 className="h5 mb-3">Tag cloud</h2>
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
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result7"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="widget"
                                            style="max-width: 25rem"
                                        >
                                            <h3 className="widget-title">
                                                Popular tags
                                            </h3>
                                            <a
                                                className="btn-tag me-2 mb-2"
                                                href="#"
                                                >#fashion</a
                                            ><a
                                                className="btn-tag me-2 mb-2"
                                                href="#"
                                                >#gadgets</a
                                            ><a
                                                className="btn-tag me-2 mb-2"
                                                href="#"
                                                >#online shopping</a
                                            ><a
                                                className="btn-tag me-2 mb-2"
                                                href="#"
                                                >#travel</a
                                            ><a
                                                className="btn-tag me-2 mb-2"
                                                href="#"
                                                >#top brands</a
                                            ><a
                                                className="btn-tag me-2 mb-2"
                                                href="#"
                                                >#cartzilla news</a
                                            ><a
                                                className="btn-tag active me-2 mb-2"
                                                href="#"
                                                >#active tag</a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Widget: Tag cloud --&gt;
&lt;div className=&quot;widget&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Popular tags&lt;/h3&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-tag me-2 mb-2&quot;&gt;#cartzilla news&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-tag active me-2 mb-2&quot;&gt;#active tag&lt;/a&gt;
  ...
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Tag cloud
.widget
  h3.widget-title Popular tags
  a(href=&quot;#&quot;).btn-tag.me-2.mb-2 #cartzilla news
  a(href=&quot;#&quot;).btn-tag.active.me-2.mb-2 #active tag
  ...
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Filter (checkboxes)-->
                    <section className="pb-5 mb-md-2" id="widget-filter">
                        <h2 className="h5 mb-3">Filter (checkboxes)</h2>
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
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result8"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="widget widget-filter pb-2"
                                            style="max-width: 20rem"
                                        >
                                            <h3 className="widget-title">
                                                Filter by brand
                                            </h3>
                                            <div
                                                className="input-group input-group-sm mb-2"
                                            >
                                                <input
                                                    className="widget-filter-search form-control rounded-end pe-5"
                                                    type="text"
                                                    placeholder="Search"
                                                /><i
                                                    className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"
                                                ></i>
                                            </div>
                                            <ul
                                                className="widget-list widget-filter-list list-unstyled pt-1"
                                                style="max-height: 13rem"
                                                data-simplebar
                                                data-simplebar-auto-hide="false"
                                            >
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="adidas"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="adidas"
                                                            >Adidas</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >425</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="ataylor"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="ataylor"
                                                            >Ann Taylor</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >15</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="armani"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="armani"
                                                            >Armani</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >18</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="banana"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="banana"
                                                            >Banana
                                                            Republic</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >103</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="bilabong"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="bilabong"
                                                            >Bilabong</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >27</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="birkenstock"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="birkenstock"
                                                            >Birkenstock</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >10</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="klein"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="klein"
                                                            >Calvin Klein</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >365</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="columbia"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="columbia"
                                                            >Columbia</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >508</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="converse"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="converse"
                                                            >Converse</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >176</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="dockers"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="dockers"
                                                            >Dockers</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >54</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="fruit"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="fruit"
                                                            >Fruit of the
                                                            Loom</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >739</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="hanes"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="hanes"
                                                            >Hanes</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >92</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="choo"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="choo"
                                                            >Jimmy Choo</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >17</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="levis"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="levis"
                                                            >Levi's</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >361</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="lee"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="lee"
                                                            >Lee</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >264</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wearhouse"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="wearhouse"
                                                            >Men's
                                                            Wearhouse</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >75</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="newbalance"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="newbalance"
                                                            >New Balance</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >218</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="nike"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="nike"
                                                            >Nike</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >810</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="navy"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="navy"
                                                            >Old Navy</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >147</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="polo"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="polo"
                                                            >Polo Ralph
                                                            Lauren</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >64</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="puma"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="puma"
                                                            >Puma</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >370</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="reebok"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="reebok"
                                                            >Reebok</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >506</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="skechers"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="skechers"
                                                            >Skechers</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >209</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="hilfiger"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="hilfiger"
                                                            >Tommy
                                                            Hilfiger</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >487</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="armour"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="armour"
                                                            >Under Armour</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >90</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="urban"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="urban"
                                                            >Urban
                                                            Outfitters</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >152</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="vsecret"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="vsecret"
                                                            >Victoria's
                                                            Secret</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >238</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wolverine"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="wolverine"
                                                            >Wolverine</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >29</span
                                                    >
                                                </li>
                                                <li
                                                    className="widget-filter-item d-flex justify-content-between align-items-center mb-1"
                                                >
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="wrangler"
                                                        />
                                                        <label
                                                            className="form-check-label widget-filter-item-text"
                                                            htmlFor="wrangler"
                                                            >Wrangler</label
                                                        >
                                                    </div>
                                                    <span
                                                        className="fs-xs text-muted"
                                                        >115</span
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Widget: Filter (checkboxes) --&gt;
&lt;div className=&quot;widget widget-filter&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Filter by brand&lt;/h3&gt;
  &lt;div className=&quot;input-group input-group-sm mb-2&quot;&gt;
    &lt;input type=&quot;text&quot; className=&quot;widget-filter-search form-control rounded-end pe-5&quot; placeholder=&quot;Search&quot;&gt;
    &lt;i className=&quot;ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;ul className=&quot;widget-list widget-filter-list list-unstyled pt-1&quot; style=&quot;max-height: 13rem;&quot; data-simplebar data-simplebar-auto-hide=&quot;false&quot;&gt;
    &lt;li className=&quot;widget-filter-item d-flex justify-content-between align-items-center mb-1&quot;&gt;
      &lt;div className=&quot;form-check&quot;&gt;
        &lt;input type=&quot;checkbox&quot; id=&quot;adidas&quot; className=&quot;form-check-input&quot;&gt;
        &lt;label className=&quot;form-check-label widget-filter-item-text&quot; for=&quot;adidas&quot;&gt;Adidas&lt;/label&gt;
      &lt;/div&gt;
      &lt;span className=&quot;fs-xs text-muted&quot;&gt;425&lt;/span&gt;
    &lt;/li&gt;
    &lt;li className=&quot;widget-filter-item d-flex justify-content-between align-items-center mb-1&quot;&gt;
      &lt;div className=&quot;form-check&quot;&gt;
        &lt;input type=&quot;checkbox&quot; id=&quot;ataylor&quot; className=&quot;form-check-input&quot;&gt;
        &lt;label className=&quot;form-check-label widget-filter-item-text&quot; for=&quot;ataylor&quot;&gt;Ann Taylor&lt;/label&gt;
      &lt;/div&gt;
      &lt;span className=&quot;fs-xs text-muted&quot;&gt;15&lt;/span&gt;
    &lt;/li&gt;
    &lt;!-- Add as many items as you need --&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Filter (checkboxes)
.widget.widget-filter
  h3.widget-title Filter by brand
  .input-group.input-group-sm.mb-2
    input(type=&quot;text&quot;, placeholder=&quot;Search&quot;).widget-filter-search.form-control.rounded-end.pe-5
    i.ci-search.position-absolute.top-50.end-0.translate-middle-y.fs-sm.me-3
  ul(style=&quot;max-height: 13rem;&quot;, data-simplebar, data-simplebar-auto-hide=&quot;false&quot;).widget-list.widget-filter-list.list-unstyled.pt-1
    li.widget-filter-item.d-flex.justify-content-between.align-items-center.mb-1
      .form-check
        input(type=&quot;checkbox&quot;, id=&quot;adidas&quot;).form-check-input
        label.form-check-label.widget-filter-item-text(for=&quot;adidas&quot;) Adidas
      span.fs-xs.text-muted 425
    li.widget-filter-item.d-flex.justify-content-between.align-items-center.mb-1
      .form-check
        input(type=&quot;checkbox&quot;, id=&quot;ataylor&quot;).form-check-input
        label.form-check-label.widget-filter-item-text(for=&quot;ataylor&quot;) Ann Taylor
      span.fs-xs.text-muted 15
    //- Add as many items as you need
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Subscription (MailChimp Ajax)-->
                    <section className="pb-5 mb-md-2" id="widget-subscription">
                        <h2 className="h5 mb-3">
                            Subscription (MailChimp Ajax)
                        </h2>
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
                                        <div
                                            className="widget pb-2"
                                            style="max-width: 24rem"
                                        >
                                            <h3 className="widget-title">
                                                Subscribe
                                            </h3>
                                            <form
                                                className="subscription-form validate"
                                                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126"
                                                method="post"
                                                name="mc-embedded-subscribe-form"
                                                target="_blank"
                                                novalidate
                                            >
                                                <div
                                                    className="input-group flex-nowrap"
                                                >
                                                    <i
                                                        className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"
                                                    ></i>
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
                                                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                                <div
                                                    style="
                                                        position: absolute;
                                                        left: -5000px;
                                                    "
                                                    aria-hidden="true"
                                                >
                                                    <input
                                                        className="subscription-form-antispam"
                                                        type="text"
                                                        name="b_c7103e2c981361a6639545bd5_29ca296126"
                                                        tabindex="-1"
                                                    />
                                                </div>
                                                <div className="form-text">
                                                    *Subscribe to our newsletter
                                                    to receive early discount
                                                    offers, updates and new
                                                    products info.
                                                </div>
                                                <div
                                                    className="subscription-status"
                                                ></div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Widget: Subscription (MailChimp Ajax)
        Instructions how to get MailChimp action link:
        1. Log in to your MailChimp Dashboard / Audience / Manage Audience / Signup forms / Embedded forms
        2. In the provided code find form action link and copy it
        3. Paste it to the form action attribute below
        4. Also in the form code provided by MailChimp find antispam input and copy it name attribute contents
        5. Paste what you have copied from name attribute to the name attribute of input with class &quot;subscription-form-antispam&quot;
--&gt;
&lt;div className=&quot;widget&quot;&gt;
  &lt;h3 className=&quot;widget-title&quot;&gt;Subscribe&lt;/h3&gt;
  &lt;form className=&quot;subscription-form validate&quot; action=&quot;mailchimp-embedded-form-atcion-link&quot; method=&quot;post&quot; name=&quot;mc-embedded-subscribe-form&quot; target=&quot;_blank&quot; noValidate&gt;
    &lt;div className=&quot;input-group flex-nowrap&quot;&gt;
      &lt;i className=&quot;ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3&quot;&gt;&lt;/i&gt;
      &lt;input className=&quot;form-control rounded-start&quot; type=&quot;email&quot; name=&quot;EMAIL&quot; placeholder=&quot;Your email&quot; required&gt;
      &lt;button className=&quot;btn btn-primary&quot; type=&quot;submit&quot; name=&quot;subscribe&quot;&gt;Subscribe*&lt;/button&gt;
    &lt;/div&gt;
    &lt;!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--&gt;
    &lt;div style=&quot;position: absolute; left: -5000px;&quot; aria-hidden=&quot;true&quot;&gt;
      &lt;input type=&quot;text&quot; className=&quot;subscription-form-antispam&quot; name=&quot;mailchimp-embedded-form-antispam-name-attribute&quot; tabindex=&quot;-1&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;form-text&quot;&gt;*Subscribe to our newsletter to receive early discount offers, updates and new products info.&lt;/div&gt;
    &lt;div className=&quot;subscription-status&quot;&gt;&lt;/div&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Subscription (MailChimp Ajax)
// Instructions how to get MailChimp action link:
// 1. Log in to your MailChimp Dashboard / Audience / Manage Audience / Signup forms / Embedded forms
// 2. In the provided code find form action link and copy it
// 3. Paste it to the form action attribute below
// 4. Also in the form code provided by MailChimp find antispam input and copy it name attribute contents
// 5. Paste what you have copied from name attribute to the name attribute of input with class &quot;subscription-form-antispam&quot;
form(action=&quot;mailchimp-embedded-form-atcion-link&quot;, method=&quot;post&quot;, name=&quot;mc-embedded-subscribe-form&quot;, target=&quot;_blank&quot;, noValidate).subscription-form.validate
  .input-group.flex-nowrap
    i.ci-mail.position-absolute.top-50.translate-middle-y.text-muted.fs-base.ms-3
    input(type=&quot;email&quot;, name=&quot;EMAIL&quot;, placeholder=&quot;Your email&quot;, required).form-control.rounded-start
    button(type=&quot;submit&quot;, name=&quot;subscribe&quot;).btn.btn-primary Subscribe*
  // real people should not fill this in and expect good things - do not remove this or risk form bot signups
  div(style=&quot;position: absolute; left: -5000px;&quot; aria-hidden=&quot;true&quot;)
    input(type=&quot;text&quot;, name=&quot;mailchimp-embedded-form-antispam-name-attribute&quot;, tabindex=&quot;-1&quot;).subscription-form-antispam
  .form-text *Subscribe to our newsletter to receive early discount offers, updates and new products info.
  .subscription-status
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Contact details-->
                    <section className="pb-5 mb-md-2" id="widget-contacts">
                        <h2 className="h5 mb-3">Contact details</h2>
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
                                        <div
                                            className="widget"
                                            style="max-width: 18rem"
                                        >
                                            <ul className="widget-list">
                                                <li
                                                    className="d-flex pb-3 border-bottom"
                                                >
                                                    <i
                                                        className="ci-location fs-lg mt-2 text-primary"
                                                    ></i>
                                                    <div className="ps-3">
                                                        <span
                                                            className="fs-ms text-muted"
                                                            >Find us</span
                                                        ><a
                                                            className="d-block text-heading fs-sm"
                                                            href="#"
                                                            >769, Industrial Dr,
                                                            West Chicago, IL
                                                            60185, USA</a
                                                        >
                                                    </div>
                                                </li>
                                                <li
                                                    className="d-flex pt-2 pb-3 border-bottom"
                                                >
                                                    <i
                                                        className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                    ></i>
                                                    <div className="ps-3">
                                                        <span
                                                            className="fs-ms text-muted"
                                                            >Call us</span
                                                        ><a
                                                            className="d-block text-heading fs-sm"
                                                            href="tel:+184725276533"
                                                            >+1 (847) 252 765
                                                            33</a
                                                        >
                                                    </div>
                                                </li>
                                                <li className="d-flex pt-2">
                                                    <i
                                                        className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                    ></i>
                                                    <div className="ps-3">
                                                        <span
                                                            className="fs-ms text-muted"
                                                            >Write us</span
                                                        ><a
                                                            className="d-block text-heading fs-sm"
                                                            href="mailto:email@example.com"
                                                            >email@example.com</a
                                                        >
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Widget: Contact details --&gt;
&lt;div className=&quot;widget&quot;&gt;
  &lt;ul className=&quot;widget-list&quot;&gt;
    &lt;li className=&quot;d-flex pb-3 border-bottom&quot;&gt;
      &lt;i className=&quot;ci-location fs-lg mt-2 text-primary&quot;&gt;&lt;/i&gt;
      &lt;div className=&quot;ps-3&quot;&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
        &lt;a className=&quot;d-block text-heading fs-sm&quot; href=&quot;#&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
      &lt;i className=&quot;ci-phone fs-lg mt-2 text-primary&quot;&gt;&lt;/i&gt;
      &lt;div className=&quot;ps-3&quot;&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
        &lt;a className=&quot;d-block text-heading fs-sm&quot; href=&quot;tel:+184725276533&quot;&gt;+1 (847) 252 765 33&lt;/a&gt;
      &lt;/div&gt;
    &lt;/li&gt;
    &lt;li className=&quot;d-flex pt-2&quot;&gt;
      &lt;i className=&quot;ci-mail fs-lg mt-2 text-primary&quot;&gt;&lt;/i&gt;
      &lt;div className=&quot;ps-3&quot;&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
        &lt;a className=&quot;d-block text-heading fs-sm&quot; href=&quot;mailto:email@example.com&quot;&gt;email@example.com&lt;/a&gt;
      &lt;/div&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Widget: Contact details
.widget
  ul.widget-list
    li.d-flex.pb-3.border-bottom
      i.ci-location.fs-lg.mt-2.text-primary
      .ps-3
        span.fs-ms.text-muted Find us
        a.d-block.text-heading.fs-sm(href=&quot;#&quot;) 769, Industrial Dr, West Chicago, IL 60185, USA
    li.d-flex.pt-2.pb-3.border-bottom
      i.ci-phone.fs-lg.mt-2.text-primary
      .ps-3
        span.fs-ms.text-muted Call us
        a.d-block.text-heading.fs-sm(href=&quot;tel:+184725276533&quot;) +1 (847) 252 765 33
    li.d-flex.pt-2
      i.ci-mail.fs-lg.mt-2.text-primary
      .ps-3
        span.fs-ms.text-muted Write us
        a.d-block.text-heading.fs-sm(href=&quot;mailto:email@example.com&quot;) email@example.com</code></pre>
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
                                            href="#widget-categories"
                                            >Categories</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-range"
                                            >Price range</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-links"
                                            >Links</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-products-list"
                                            >Featured products list</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-products-carousel"
                                            >Featured products carousel</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-cart"
                                            >Shopping cart</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-tags"
                                            >Tag cloud</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-filter"
                                            >Filter (checkboxes)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-subscription"
                                            >Subscription (MailChimp Ajax)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#widget-contacts"
                                            >Contact details</a
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
        <script src="../vendor/nouislider/dist/nouislider.min.js"></script>
        <!-- Main theme script-->
        <script src="../js/theme.min.js"></script>
    </body>
</html>
