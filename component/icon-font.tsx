<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Icon font</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Icon font</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Collection of vector icons in the format of
                                font. To add icon simply apply css class listed
                                under each icon to <code>&lt;i&gt;</code> tag.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <section className="pb-5 mb-md-2">
                        <div className="card border-0 shadow">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-add-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-add-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-add-document"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-add-document
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-add-location"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-add-location
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-add"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-add
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-add-user"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-add-user
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-announcement"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-announcement
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-down-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-down-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-down"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-down
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-left-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-left-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-left"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-left
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-right-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-right-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-right"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-right
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-up-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-up-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrow-up"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrow-up
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrows-horizontal"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrows-horizontal
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-arrows-vertical"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-arrows-vertical
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-bag"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bag
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-basket"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-basket
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-behance"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-behance
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-bell"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bell
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-bluetooth"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bluetooth
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-bluetooth-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bluetooth-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-battery"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-battery
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-book"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-book
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-bookmark"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bookmark
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-briefcase"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-briefcase
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-calculator"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-calculator
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-camera"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-camera
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-card"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-card
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-cart"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cart
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-chat"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-chat
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-check-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-check-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-check"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-check
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-clip"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-clip
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-close-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-close-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-close"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-close
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-cloud-check"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cloud-check
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-cloud-download"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cloud-download
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-cloud-upload"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cloud-upload
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-cloud"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cloud
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-coin"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-coin
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-coins"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-coins
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-compare"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-compare
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-currency-exchange"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-currency-exchange
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-delete-document"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-delete-document
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-delete-folder"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-delete-folder
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-delete-location"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-delete-location
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-delivery"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-delivery
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-diamond"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-diamond
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-discord"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-discord
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-document-alt"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-document-alt
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-document"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-document
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-dollar-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-dollar-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-dollar"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-dollar
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-download"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-download
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-dribbble"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-dribbble
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-earphones"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-earphones
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-edit-alt"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-edit-alt
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-edit"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-edit
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-euro-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-euro-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-euro"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-euro
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-exit-full-screen"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-exit-full-screen
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-eye"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-eye
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-eye-off"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-eye-off
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-facebook"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-facebook
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-filter-alt"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-filter-alt
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-filter"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-filter
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-flag"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-flag
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-folder"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-folder
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-forward"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-forward
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-full-screen"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-full-screen
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-gift"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-gift
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-globe"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-globe
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-google"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-google
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-hangouts"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-hangouts
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-heart-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-heart-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-heart"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-heart
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-help"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-help
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-home"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-home
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-idea"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-idea
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-image"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-image
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-increase"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-increase
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-instagram"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-instagram
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-joystick"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-joystick
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-key"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-key
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-lable"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-lable
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-laptop"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-laptop
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-lightning"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-lightning
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-link"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-link
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-linkedin"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-linkedin
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-list"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-list
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-loading"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-loading
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-location"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-location
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-locked"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-locked
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-loudspeaker"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-loudspeaker
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-mail"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-mail
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-map"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-map
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-menu-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-menu-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-menu"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-menu
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-message"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-message
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-messenger"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-messenger
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-mobile"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-mobile
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-money-bag"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-money-bag
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-money-box"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-money-box
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-monitor"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-monitor
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-moon"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-moon
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-music"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-music
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-navigation"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-navigation
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-odnoklassniki"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-odnoklassniki
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-package"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-package
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-percent"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-percent
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-phone"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-phone
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-pinterest"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-pinterest
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-plane"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-plane
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-play-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-play-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-play"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-play
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-printer"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-printer
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-reduce"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-reduce
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-reload"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-reload
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-remove-document"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-remove-document
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-remove-folder"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-remove-folder
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-reply"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-reply
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-rocket"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-rocket
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-ruler"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-ruler
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-rupee"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-rupee
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-scroll"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-scroll
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-search"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-search
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-security-announcement"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-security-announcement
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-security-check"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-security-check
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-security-close"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-security-close
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-security-prohibition"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-security-prohibition
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-send"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-send
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-server-alt"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-server-alt
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-server"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-server
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-settings"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-settings
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-share-alt"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-share-alt
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-share"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-share
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-sign-in"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-sign-in
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-sign-out"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-sign-out
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-skype"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-skype
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-smile"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-smile
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-speaker"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-speaker
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-star-filled"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-star-filled
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-star"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-star
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-star-half"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-star-half
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-sun"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-sun
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-support"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-support
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-target"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-target
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-telegram"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-telegram
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-thumb-up"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-thumb-up
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-thumb-up-filled"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-thumb-up-filled
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-tiktok"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-tiktok
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-time"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-time
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-trash"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-trash
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-tumblr"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-tumblr
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-turn-off"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-turn-off
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-twitter"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-twitter
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-unlocked"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-unlocked
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-upload"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-upload
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-user-circle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-user-circle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-user"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-user
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-viber"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-viber
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-video"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-video
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-view-grid"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-view-grid
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-view-list"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-view-list
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-vimeo"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-vimeo
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-vk"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-vk
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-wallet"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-wallet
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-watch"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-watch
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-weather"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-weather
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-wechat"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-wechat
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-whatsapp"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-whatsapp
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-youtube-outline"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-youtube-outline
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-youtube"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-youtube
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-caret"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-caret
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-dot-square"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-dot-square
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-paypal"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-paypal
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-wash"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-wash
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-bleach"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bleach
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-hand-wash"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-hand-wash
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-ironing"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-ironing
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-sound-waves"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-sound-waves
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-paprika"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-paprika
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-chili"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-chili
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-canned-food"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-canned-food
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-toothbrush"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-toothbrush
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-pumpkin"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-pumpkin
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-orange"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-orange
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-broccoli"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-broccoli
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-sauce"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-sauce
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-soap"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-soap
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-toilet-paper"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-toilet-paper
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-lemon"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-lemon
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-bread"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-bread
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-jam"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-jam
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-fish"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-fish
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-wine"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-wine
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-truck"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-truck
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-tag"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-tag
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-eggs"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-eggs
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-store"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-store
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-ham-leg"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-ham-leg
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-discount"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-discount
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-open"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-open
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-juice"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-juice
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-cheese"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cheese
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-milk"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-milk
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-cashier"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-cashier
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-avocado"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-avocado
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-apple"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-apple
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-pizza"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-pizza
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-scale"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-scale
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-ice-cream"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-ice-cream
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-water-bottle"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-water-bottle
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-carrot"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-carrot
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-basket-alt"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-basket-alt
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-corn"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-corn
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-frozen"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-frozen
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i
                                            className="h2 text-body ci-lollipop"
                                        ></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-lollipop
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 col-sm-4 col-6 mb-4"
                                    >
                                        <i className="h2 text-body ci-pot"></i>
                                        <div
                                            className="border-top border-bottom mt-1 py-1 fs-sm text-muted"
                                        >
                                            ci-pot
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
        <!-- Main theme script-->
        <script src="../js/theme.min.js"></script>
    </body>
</html>
