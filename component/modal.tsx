<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Modal</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Modal</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Add dialogs to your site for lightboxes, user
                                notifications, etc.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/modal/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Small modal-->
                    <div
                        className="modal fade"
                        id="modalSmall"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p>...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Default modal-->
                    <div
                        className="modal fade"
                        id="modalDefault"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p className="fs-sm">
                                        Modal body text goes here.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-primary btn-shadow btn-sm"
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Large modal-->
                    <div
                        className="modal fade"
                        id="modalLarge"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p className="fs-sm">
                                        Modal body text goes here.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-primary btn-shadow btn-sm"
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Extra large modal-->
                    <div
                        className="modal fade"
                        id="modalXL"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div className="modal-dialog modal-xl" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p className="fs-sm">
                                        Modal body text goes here.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-primary btn-shadow btn-sm"
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Long modal-->
                    <div
                        className="modal fade"
                        id="modalLong"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body fs-sm">
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-primary btn-shadow btn-sm"
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Scrolling content-->
                    <div
                        className="modal fade"
                        id="modalScroll"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div
                            className="modal-dialog modal-dialog-scrollable"
                            role="document"
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body fs-sm">
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                    <p>
                                        Cras mattis consectetur purus sit amet
                                        fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi
                                        leo risus, porta ac consectetur ac,
                                        vestibulum at eros.
                                    </p>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum
                                        faucibus dolor auctor.
                                    </p>
                                    <p>
                                        Aenean lacinia bibendum nulla sed
                                        consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur
                                        et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor
                                        fringilla.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-primary btn-shadow btn-sm"
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Vertically centered modal-->
                    <div
                        className="modal fade"
                        id="modalCentered"
                        tabindex="-1"
                        role="dialog"
                    >
                        <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                    <button
                                        className="btn-close"
                                        type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p className="fs-sm">
                                        Modal body text goes here.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        type="button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-primary btn-shadow btn-sm"
                                        type="button"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal markup-->
                    <section className="pb-5 mb-md-2" id="modal-markup">
                        <h2 className="h5 mb-3">Modal markup</h2>
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
                                        <style>
                                            .example-modal .modal {
                                                display: block;
                                                position: relative;
                                                top: auto;
                                                right: auto;
                                                bottom: auto;
                                                left: auto;
                                                z-index: 1;
                                            }
                                        </style>
                                        <div className="example-modal">
                                            <div
                                                className="modal"
                                                tabindex="-1"
                                                role="dialog"
                                            >
                                                <div
                                                    className="modal-dialog"
                                                    role="document"
                                                >
                                                    <div
                                                        className="modal-content"
                                                    >
                                                        <div
                                                            className="modal-header"
                                                        >
                                                            <h5
                                                                className="modal-title"
                                                            >
                                                                Modal title
                                                            </h5>
                                                            <button
                                                                className="btn-close"
                                                                type="button"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div
                                                            className="modal-body"
                                                        >
                                                            <p
                                                                className="fs-sm"
                                                            >
                                                                Modal body text
                                                                goes here.
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="modal-footer"
                                                        >
                                                            <button
                                                                className="btn btn-secondary btn-sm"
                                                                type="button"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            <button
                                                                className="btn btn-primary btn-shadow btn-sm"
                                                                type="button"
                                                            >
                                                                Save changes
                                                            </button>
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
                                        ><code className="lang-html">&lt;!-- Modal markup --&gt;
&lt;div className=&quot;modal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;
  &lt;div className=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
    &lt;div className=&quot;modal-content&quot;&gt;
      &lt;div className=&quot;modal-header&quot;&gt;
        &lt;h5 className=&quot;modal-title&quot;&gt;Modal title&lt;/h5&gt;
        &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div className=&quot;modal-body&quot;&gt;
        &lt;p className=&quot;fs-sm&quot;&gt;Modal body text goes here.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div className=&quot;modal-footer&quot;&gt;
        &lt;button type=&quot;button&quot; className=&quot;btn btn-secondary btn-sm&quot; data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
        &lt;button type=&quot;button&quot; className=&quot;btn btn-primary btn-sm&quot;&gt;Save changes&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Modal markup
.modal(tabindex=&quot;-1&quot;, role=&quot;dialog&quot;)
  .modal-dialog(role=&quot;document&quot;)
    .modal-content
      .modal-header
        h5.modal-title
          | Modal title
        button(type=&quot;button&quot;, className=&quot;btn-close&quot;, data-bs-dismiss=&quot;modal&quot;, aria-label=&quot;Close&quot;)
      .modal-body
        p.fs-sm
          | Modal body text goes here.
      .modal-footer
        button(type=&quot;button&quot;, className=&quot;btn btn-secondary btn-sm&quot;, data-bs-dismiss=&quot;modal&quot;)
          | Close
      button(type=&quot;button&quot;, className=&quot;btn btn-primary btn-sm&quot;)
        | Save changes
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Tabs and forms-->
                    <section className="pb-5 mb-md-2" id="modal-tabs-forms">
                        <h2 className="h5 mb-3">Tabs and forms</h2>
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
                                        <div className="example-modal">
                                            <div
                                                className="modal"
                                                tabindex="-1"
                                                role="dialog"
                                            >
                                                <div
                                                    className="modal-dialog"
                                                    role="document"
                                                >
                                                    <div
                                                        className="modal-content"
                                                    >
                                                        <div
                                                            className="modal-header"
                                                        >
                                                            <ul
                                                                className="nav nav-tabs card-header-tabs"
                                                                role="tablist"
                                                            >
                                                                <li
                                                                    className="nav-item"
                                                                >
                                                                    <a
                                                                        className="nav-link active"
                                                                        href="#signin"
                                                                        data-bs-toggle="tab"
                                                                        role="tab"
                                                                        aria-selected="true"
                                                                        ><i
                                                                            className="ci-unlocked me-2 mt-n1"
                                                                        ></i
                                                                        >Sign
                                                                        in</a
                                                                    >
                                                                </li>
                                                                <li
                                                                    className="nav-item"
                                                                >
                                                                    <a
                                                                        className="nav-link"
                                                                        href="#signup"
                                                                        data-bs-toggle="tab"
                                                                        role="tab"
                                                                        aria-selected="false"
                                                                        ><i
                                                                            className="ci-user me-2 mt-n1"
                                                                        ></i
                                                                        >Sign
                                                                        up</a
                                                                    >
                                                                </li>
                                                            </ul>
                                                            <button
                                                                className="btn-close"
                                                                type="button"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div
                                                            className="modal-body tab-content py-4"
                                                        >
                                                            <form
                                                                className="tab-pane fade show active"
                                                                autocomplete="off"
                                                                id="signin"
                                                            >
                                                                <div
                                                                    className="mb-3"
                                                                >
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="email1"
                                                                        >Email
                                                                        address</label
                                                                    >
                                                                    <input
                                                                        className="form-control"
                                                                        type="email"
                                                                        id="email1"
                                                                        placeholder="johndoe@example.com"
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="mb-3"
                                                                >
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="pass1"
                                                                        >Password</label
                                                                    >
                                                                    <div
                                                                        className="password-toggle"
                                                                    >
                                                                        <input
                                                                            className="form-control"
                                                                            type="password"
                                                                            id="pass1"
                                                                        />
                                                                        <label
                                                                            className="password-toggle-btn"
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
                                                                <div
                                                                    className="mb-3 d-flex flex-wrap justify-content-between"
                                                                >
                                                                    <div
                                                                        className="form-check mb-2"
                                                                    >
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id="remember"
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="remember"
                                                                            >Remember
                                                                            me</label
                                                                        >
                                                                    </div>
                                                                    <a
                                                                        className="fs-sm"
                                                                        href="#"
                                                                        >Forgot
                                                                        password?</a
                                                                    >
                                                                </div>
                                                                <button
                                                                    className="btn btn-primary d-block w-100 btn-shadow"
                                                                    type="submit"
                                                                >
                                                                    Sign in
                                                                </button>
                                                            </form>
                                                            <form
                                                                className="tab-pane fade"
                                                                autocomplete="off"
                                                                id="signup"
                                                            >
                                                                <div
                                                                    className="mb-3"
                                                                >
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="name"
                                                                        >Full
                                                                        name</label
                                                                    >
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        id="name"
                                                                        placeholder="John Doe"
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="mb-3"
                                                                >
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="email2"
                                                                        >Email
                                                                        address</label
                                                                    >
                                                                    <input
                                                                        className="form-control"
                                                                        type="email"
                                                                        id="email2"
                                                                        placeholder="johndoe@example.com"
                                                                    />
                                                                </div>
                                                                <div
                                                                    className="mb-3"
                                                                >
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="pass2"
                                                                        >Password</label
                                                                    >
                                                                    <div
                                                                        className="password-toggle"
                                                                    >
                                                                        <input
                                                                            className="form-control"
                                                                            type="password"
                                                                            id="pass2"
                                                                        />
                                                                        <label
                                                                            className="password-toggle-btn"
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
                                                                <div
                                                                    className="mb-3"
                                                                >
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="pass3"
                                                                        >Confirm
                                                                        password</label
                                                                    >
                                                                    <div
                                                                        className="password-toggle"
                                                                    >
                                                                        <input
                                                                            className="form-control"
                                                                            type="password"
                                                                            id="pass3"
                                                                        />
                                                                        <label
                                                                            className="password-toggle-btn"
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
                                                                <button
                                                                    className="btn btn-primary d-block btn-shadow"
                                                                    type="submit"
                                                                >
                                                                    Sign up
                                                                </button>
                                                            </form>
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
                                        ><code className="lang-html">&lt;!-- Modal with tabs and forms --&gt;
&lt;div className=&quot;modal&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot;&gt;
  &lt;div className=&quot;modal-dialog&quot; role=&quot;document&quot;&gt;
    &lt;div className=&quot;modal-content&quot;&gt;
      &lt;div className=&quot;modal-header&quot;&gt;
        &lt;ul className=&quot;nav nav-tabs card-header-tabs&quot; role=&quot;tablist&quot;&gt;
          &lt;li className=&quot;nav-item&quot;&gt;
            &lt;a className=&quot;nav-link active&quot; href=&quot;#signin&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot; aria-selected=&quot;true&quot;&gt;
              &lt;i className=&quot;ci-unlocked me-2 mt-n1&quot;&gt;&lt;/i&gt;
              Sign in
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;
            &lt;a className=&quot;nav-link&quot; href=&quot;#signup&quot;data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot; aria-selected=&quot;false&quot;&gt;
              &lt;i className=&quot;ci-user me-2 mt-n1&quot;&gt;&lt;/i&gt;
              Sign up
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        &lt;button className=&quot;btn-close&quot; type=&quot;button&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div className=&quot;modal-body tab-content py-4&quot;&gt;
        &lt;form className=&quot;tab-pane fade show active&quot; id=&quot;signin&quot; autocomplete=&quot;off&quot;&gt;
          &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;email1&quot; className=&quot;form-label&quot;&gt;Email address&lt;/label&gt;
            &lt;input className=&quot;form-control&quot; type=&quot;email&quot; id=&quot;email1&quot; placeholder=&quot;johndoe@example.com&quot;&gt;
          &lt;/label&gt;
          &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;pass1&quot; className=&quot;form-label&quot;&gt;Password&lt;/label&gt;
            &lt;div className=&quot;password-toggle&quot;&gt;
              &lt;input className=&quot;form-control&quot; type=&quot;password&quot; id=&quot;pass1&quot;&gt;
              &lt;label className=&quot;password-toggle-btn&quot;&gt;
                &lt;input className=&quot;password-toggle-check&quot; type=&quot;checkbox&quot;&gt;
                &lt;span className=&quot;password-toggle-indicator&quot;&gt;&lt;/span&gt;
              &lt;/label&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=&quot;mb-3 d-flex flex-wrap justify-content-between&quot;&gt;
            &lt;div className=&quot;form-check mb-2&quot;&gt;
              &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;remember&quot;&gt;
              &lt;label className=&quot;form-check-label&quot; for=&quot;remember&quot;&gt;Remember me&lt;/label&gt;
            &lt;/div&gt;
            &lt;a className=&quot;fs-sm&quot; href=&quot;#&quot;&gt;Forgot password?&lt;/a&gt;
          &lt;/div&gt;
          &lt;button className=&quot;btn btn-primary d-block btn-shadow&quot; type=&quot;submit&quot;&gt;Sign in&lt;/button&gt;
        &lt;/form&gt;
        &lt;form className=&quot;tab-pane fade&quot; id=&quot;signup&quot; autocomplete=&quot;off&quot;&gt;
          &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;name&quot; className=&quot;form-label&quot;&gt;Full name&lt;/label&gt;
            &lt;input className=&quot;form-control&quot; type=&quot;text&quot; id=&quot;name&quot; placeholder=&quot;John Doe&quot;&gt;
          &lt;/div&gt;
          &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;email2&quot; className=&quot;form-label&quot;&gt;Email address&lt;/label&gt;
            &lt;input className=&quot;form-control&quot; type=&quot;email&quot; id=&quot;email2&quot; placeholder=&quot;johndoe@example.com&quot;&gt;
          &lt;/div&gt;
          &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;pass2&quot; className=&quot;form-label&quot;&gt;Password&lt;/label&gt;
            &lt;div className=&quot;password-toggle&quot;&gt;
              &lt;input className=&quot;form-control&quot; type=&quot;password&quot; id=&quot;pass2&quot;&gt;
              &lt;label className=&quot;password-toggle-btn&quot;&gt;
                &lt;input className=&quot;password-toggle-check&quot; type=&quot;checkbox&quot;&gt;
                &lt;span className=&quot;password-toggle-indicator&quot;&gt;&lt;/span&gt;
              &lt;/label&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=&quot;mb-3&quot;&gt;
            &lt;label for=&quot;pass3&quot; className=&quot;form-label&quot;&gt;Confirm password&lt;/label&gt;
            &lt;div className=&quot;password-toggle&quot;&gt;
              &lt;input className=&quot;form-control&quot; type=&quot;password&quot; id=&quot;pass3&quot;&gt;
              &lt;label className=&quot;password-toggle-btn&quot;&gt;
                &lt;input className=&quot;password-toggle-check&quot; type=&quot;checkbox&quot;&gt;
                &lt;span className=&quot;password-toggle-indicator&quot;&gt;&lt;/span&gt;
              &lt;/label&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;button className=&quot;btn btn-primary d-block btn-shadow&quot; type=&quot;submit&quot;&gt;Sign in&lt;/button&gt;
        &lt;/form&gt;
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
                                        ><code className="lang-pug">// Modal with tabs and forms
.modal(tabindex=&quot;-1&quot;, role=&quot;dialog&quot;)
  .modal-dialog(role=&quot;document&quot;)
    .modal-content
      .modal-header
        ul(role=&quot;tablist&quot;).nav.nav-tabs.card-header-tabs
          li.nav-item
            a(href=&quot;#signin&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;, aria-selected=&quot;true&quot;).nav-link.active
              i.ci-unlocked.me-2.mt-n1
              | Sign in
          li.nav-item
            a(href=&quot;#signup&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;, aria-selected=&quot;false&quot;).nav-link
              i.ci-user.me-2.mt-n1
              | Sign up
        button(type=&quot;button&quot;, className=&quot;btn-close&quot;, data-bs-dismiss=&quot;modal&quot;, aria-label=&quot;Close&quot;)
      .modal-body.tab-content.py-4
        form(autocomplete=&quot;off&quot;)#signin.tab-pane.fade.show.active
          .mb-3
            label(for=&quot;email1&quot;).form-label
              | Email address
            input(type=&quot;email&quot;, id=&quot;email1&quot;, placeholder=&quot;johndoe@example.com&quot;).form-control
          .mb-3
            label(for=&quot;pass1&quot;).form-label
              | Password
            .password-toggle
              input(type=&quot;password&quot;, id=&quot;pass1&quot;).form-control
              label.password-toggle-btn
                input(type=&quot;checkbox&quot;).password-toggle-check
                span.password-toggle-indicator
          .mb-3.d-flex.flex-wrap.justify-content-between
            .form-check.mb-2
              input(type=&quot;checkbox&quot;, id=&quot;remember&quot;).form-check-input
              label(for=&quot;remember&quot;).form-check-label
                | Remember me
            a(href=&quot;#&quot;).fs-sm
              | Forgot password?
          button(type=&quot;submit&quot; className=&quot;btn btn-primary d-block btn-shadow&quot;) Sign in
        form(autocomplete=&quot;off&quot;)#signup.tab-pane.fade
          .mb-3
            label(for=&quot;name&quot;).form-label
              | Full name
            input(type=&quot;text&quot;, id=&quot;name&quot;, placeholder=&quot;John Doe&quot;).form-control
          .mb-3
            label(for=&quot;email2&quot;).form-label
              | Email address
            input(type=&quot;email&quot;, id=&quot;email2&quot;, placeholder=&quot;johndoe@example.com&quot;).form-control
          .mb-3
            label(for=&quot;pass2&quot;).form-label
              | Password
            .password-toggle
              input(type=&quot;password&quot;, id=&quot;pass2&quot;).form-control
              label.password-toggle-btn
                input(type=&quot;checkbox&quot;).password-toggle-check
                span.password-toggle-indicator
          .mb-3
            label(for=&quot;pass3&quot;).form-label
              | Confirm password
            .password-toggle
              input(type=&quot;password&quot;, id=&quot;pass3&quot;).form-control
              label.password-toggle-btn
                input(type=&quot;checkbox&quot;).password-toggle-check
                span.password-toggle-indicator
          button(type=&quot;submit&quot;, className=&quot;btn btn-primary d-block btn-shadow&quot;) Sign in
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Live demo-->
                    <section className="pb-5 mb-md-2" id="modal-demo">
                        <h2 className="h5 mb-3">Live demo</h2>
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
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalSmall"
                                        >
                                            Small modal
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalDefault"
                                        >
                                            Default modal
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalLarge"
                                        >
                                            Large modal
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalXL"
                                        >
                                            Extra large modal
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalLong"
                                        >
                                            Long modal
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalScroll"
                                        >
                                            Srolling content
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary mb-3"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalCentered"
                                        >
                                            Vertically centered modal
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Make sure the actual modal markup is present on the page and has the right id --&gt;

&lt;!-- Launch small modal --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalSmall&quot;&gt;
  Small modal
&lt;/button&gt;

&lt;!-- Launch default modal --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalDefault&quot;&gt;
  Default modal
&lt;/button&gt;

&lt;!-- Launch large modal --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalLarge&quot;&gt;
  Large modal
&lt;/button&gt;

&lt;!-- Launch extra large modal --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalXL&quot;&gt;
  Extra large modal
&lt;/button&gt;

&lt;!-- Launch long modal --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalLong&quot;&gt;
  Long modal
&lt;/button&gt;

&lt;!-- Launch modal with srolling content --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalScroll&quot;&gt;
  Srolling content
&lt;/button&gt;

&lt;!-- Launch vertically centered modal --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-toggle=&quot;modal&quot; data-bs-target=&quot;#modalCentered&quot;&gt;
  Vertically centered modal
&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">//  Make sure the actual modal markup is present on the page and has the right id

// Launch small modal
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalSmall&quot;)
  | Small modal

// Launch default modal
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalDefault&quot;)
  | Default modal

// Launch large modal
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalLarge&quot;)
  | Large modal

// Launch extra large modal
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalXL&quot;)
  | Extra large modal

// Launch long modal
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalLong&quot;)
  | Long modal

// Launch modal with srolling content
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalScroll&quot;)
  | Srolling content

// Launch vertically centered modal
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-toggle=&quot;modal&quot;, data-bs-target=&quot;#modalCentered&quot;)
  | Vertically centered modal</code></pre>
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
                                            href="#modal-markup"
                                            >Modal markup</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#modal-tabs-forms"
                                            >Tabs and forms</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#modal-demo"
                                            >Live demo</a
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
