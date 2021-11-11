<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Popovers</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Popovers</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                A pop-up box that appears when the user
                                clicks/hovers on an element.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/popovers/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Static popovers-->
                    <section className="pb-5 mb-md-2" id="popovers-static">
                        <h2 className="h5 mb-3">Static popovers</h2>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <style>
                                    .example-popover .popover {
                                        display: block;
                                        position: relative;
                                        width: 16.25rem;
                                        margin: 1.25rem !important;
                                    }
                                    .bs-popover-bottom-demo .popover-arrow,
                                    .bs-popover-top-demo .popover-arrow {
                                        left: 50%;
                                        margin-left: -0.6875rem;
                                    }
                                    .bs-popover-start-demo .popover-arrow,
                                    .bs-popover-end-demo .popover-arrow {
                                        top: 50%;
                                        margin-top: -0.5rem;
                                    }
                                </style>
                                <div
                                    className="example-popover d-flex flex-wrap"
                                >
                                    <div
                                        className="popover bs-popover-top bs-popover-top-demo"
                                        role="tooltip"
                                    >
                                        <div className="popover-arrow"></div>
                                        <h3 className="popover-header">
                                            Popover top
                                        </h3>
                                        <div className="popover-body">
                                            Sed posuere consectetur est at
                                            lobortis. Aenean eu leo quam.
                                            Pellentesque ornare sem.
                                        </div>
                                    </div>
                                    <div
                                        className="popover bs-popover-end bs-popover-end-demo"
                                        role="tooltip"
                                    >
                                        <div className="popover-arrow"></div>
                                        <h3 className="popover-header">
                                            Popover right
                                        </h3>
                                        <div className="popover-body">
                                            Sed posuere consectetur est at
                                            lobortis. Aenean eu leo quam.
                                            Pellentesque ornare sem.
                                        </div>
                                    </div>
                                    <div
                                        className="popover bs-popover-bottom bs-popover-bottom-demo"
                                        role="tooltip"
                                    >
                                        <div className="popover-arrow"></div>
                                        <h3 className="popover-header">
                                            Popover bottom
                                        </h3>
                                        <div className="popover-body">
                                            Sed posuere consectetur est at
                                            lobortis. Aenean eu leo quam.
                                            Pellentesque ornare sem.
                                        </div>
                                    </div>
                                    <div
                                        className="popover bs-popover-start bs-popover-start-demo"
                                        role="tooltip"
                                    >
                                        <div className="popover-arrow"></div>
                                        <h3 className="popover-header">
                                            Popover left
                                        </h3>
                                        <div className="popover-body">
                                            Sed posuere consectetur est at
                                            lobortis. Aenean eu leo quam.
                                            Pellentesque ornare sem.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Live demo-->
                    <section className="pb-5 mb-md-2" id="popovers-demo">
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
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-container="body"
                                            data-bs-toggle="popover"
                                            data-bs-placement="top"
                                            data-bs-trigger="hover"
                                            title="Popover on top"
                                            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem."
                                        >
                                            Popover on top
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-container="body"
                                            data-bs-toggle="popover"
                                            data-bs-placement="right"
                                            data-bs-trigger="hover"
                                            title="Popover on right"
                                            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem."
                                        >
                                            Popover on right
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                            data-bs-container="body"
                                            data-bs-toggle="popover"
                                            data-bs-placement="bottom"
                                            data-bs-trigger="hover"
                                            title="Popover on bottom"
                                            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem."
                                        >
                                            Popover on bottom
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary mb-3"
                                            type="button"
                                            data-bs-container="body"
                                            data-bs-toggle="popover"
                                            data-bs-placement="left"
                                            data-bs-trigger="hover"
                                            title="Popover on left"
                                            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem."
                                        >
                                            Popover on left
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Popover on top --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-container=&quot;body&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;top&quot; data-bs-trigger=&quot;hover&quot; title=&quot;Popover on top&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;&gt;Popover on top&lt;/button&gt;

&lt;!-- Popover on right --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-container=&quot;body&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;right&quot; data-bs-trigger=&quot;hover&quot; title=&quot;Popover on right&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;&gt;Popover on right&lt;/button&gt;

&lt;!-- Popover on bottom --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-container=&quot;body&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;bottom&quot; data-bs-trigger=&quot;hover&quot; title=&quot;Popover on bottom&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;&gt;Popover on right&lt;/button&gt;

&lt;!-- Popover on left --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot; data-bs-container=&quot;body&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;left&quot; data-bs-trigger=&quot;hover&quot; title=&quot;Popover on left&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;&gt;Popover on right&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Popover on top
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-container=&quot;body&quot;, data-bs-toggle=&quot;popover&quot;, data-bs-placement=&quot;top&quot;, data-bs-trigger=&quot;hover&quot;, title=&quot;Popover on top&quot;, data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;)
  | Popover on top

// Popover on right
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-container=&quot;body&quot;, data-bs-toggle=&quot;popover&quot;, data-bs-placement=&quot;right&quot;, data-bs-trigger=&quot;hover&quot;, title=&quot;Popover on right&quot;, data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;)
  | Popover on right

// Popover on bottom
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-container=&quot;body&quot;, data-bs-toggle=&quot;popover&quot;, data-bs-placement=&quot;bottom&quot;, data-bs-trigger=&quot;hover&quot;, title=&quot;Popover on bottom&quot;, data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;)
  | Popover on bottom

// Popover on left
button(type=&quot;button&quot;, className=&quot;btn btn-outline-secondary&quot;, data-bs-container=&quot;body&quot;, data-bs-toggle=&quot;popover&quot;, data-bs-placement=&quot;left&quot;, data-bs-trigger=&quot;hover&quot;, title=&quot;Popover on left&quot;, data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;)
  | Popover on left
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Toggle on click / hover-->
                    <section className="pb-5 mb-md-2" id="popovers-toggle">
                        <h2 className="h5 mb-3">Toggle on click / hover</h2>
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
                                        <button
                                            className="btn btn-outline-primary me-2 mb-3"
                                            type="button"
                                            data-bs-container="body"
                                            data-bs-toggle="popover"
                                            data-bs-placement="top"
                                            title="Popover on click"
                                            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem."
                                        >
                                            Toggle popover on click
                                        </button>
                                        <button
                                            className="btn btn-outline-accent me-2 mb-3"
                                            type="button"
                                            data-bs-container="body"
                                            data-bs-toggle="popover"
                                            data-bs-placement="top"
                                            data-bs-trigger="hover"
                                            title="Popover on hover"
                                            data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem."
                                        >
                                            Toggle popover on hover
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Toggle popover on click (click is default trigger) --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot; data-bs-container=&quot;body&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;top&quot; title=&quot;Popover on click&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;&gt;Toggle popover on click&lt;/button&gt;

&lt;!-- Toggle popover on hover --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-accent&quot; data-bs-container=&quot;body&quot; data-bs-toggle=&quot;popover&quot; data-bs-placement=&quot;top&quot; data-bs-trigger=&quot;hover&quot; title=&quot;Popover on hover&quot; data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;&gt;Toggle popover on hover&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Toggle popover on click (click is default trigger)
button(type=&quot;button&quot;, className=&quot;btn btn-outline-primary&quot;, data-bs-container=&quot;body&quot;, data-bs-toggle=&quot;popover&quot;, data-bs-placement=&quot;top&quot;, title=&quot;Popover on click&quot;, data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;)
  | Toggle popover on click

// Toggle popover on hover
button(type=&quot;button&quot;, className=&quot;btn btn-outline-accent&quot;, data-bs-container=&quot;body&quot;, data-bs-toggle=&quot;popover&quot;, data-bs-placement=&quot;right&quot;, data-bs-trigger=&quot;hover&quot;, title=&quot;Popover on hover&quot;, data-bs-content=&quot;Vivamus sagittis lacus vel augue laoreet rutrum faucibus ornare sem.&quot;)
  | Toggle popover on hover</code></pre>
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
                                            href="#popovers-static"
                                            >Static popovers</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#popovers-demo"
                                            >Live demo</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#popovers-toggle"
                                            >Toggle on click / hover</a
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
