<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Toasts</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Toasts</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Push notifications to your visitors with a
                                toast, a lightweight and easily customizable
                                alert message.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/toasts/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Basic example-->
                    <section className="pb-5 mb-md-2" id="toast-basic">
                        <h2 className="h5 mb-3">Basic example</h2>
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
                                <div className="tab-content py-1">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result1"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="toast fade show"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <div className="toast-header">
                                                <div
                                                    className="d-inline-block align-middle bg-primary rounded me-2"
                                                    style="
                                                        width: 1.25rem;
                                                        height: 1.25rem;
                                                    "
                                                ></div>
                                                <h6
                                                    className="fs-sm mb-0 me-auto"
                                                >
                                                    Bootstrap
                                                </h6>
                                                <small>11 mins ago</small>
                                                <button
                                                    className="btn-close ms-2"
                                                    type="button"
                                                    data-bs-dismiss="toast"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="toast-body">
                                                Hello, world! This is a toast
                                                message.
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
                                        ><code className="lang-html">&lt;!-- Basic toast example (remove fade show to hide toast initially) --&gt;
&lt;div className=&quot;toast fade show&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header&quot;&gt;
    &lt;div className=&quot;d-inline-block align-middle bg-primary rounded me-2&quot; style=&quot;width: 1.25rem; height: 1.25rem;&quot;&gt;&lt;/div&gt;
    &lt;h6 className=&quot;fs-sm mb-0 me-auto&quot;&gt;Bootstrap&lt;/h6&gt;
    &lt;small&gt;11 mins ago&lt;/small&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Basic toast example (remove .fade .show to hide toast initially)
.toast.fade.show(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header
    .d-inline-block.align-middle.bg-primary.rounded-circle.me-2(style=&quot;width: 1.25rem; height: 1.25rem;&quot;)
    h6.fs-sm.mb-0.me-auto Bootstrap
    small 11 mins ago
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.ms-2
  .toast-body Hello, world! This is a toast message.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Color variations-->
                    <section className="pb-5 mb-md-2" id="toast-colors">
                        <h2 className="h5 mb-3">Color variations</h2>
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
                                <div className="tab-content pt-1">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result2"
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-primary text-white"
                                                    >
                                                        <i
                                                            className="ci-bell me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Primary toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-primary"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-accent text-white"
                                                    >
                                                        <i
                                                            className="ci-unlocked me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Accent toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-accent"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-success text-white"
                                                    >
                                                        <i
                                                            className="ci-check-circle me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Success toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-success"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-danger text-white"
                                                    >
                                                        <i
                                                            className="ci-close-circle me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Danger toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-danger"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-warning text-white"
                                                    >
                                                        <i
                                                            className="ci-security-announcement me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Warning toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-warning"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-info text-white"
                                                    >
                                                        <i
                                                            className="ci-announcement me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Info toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-info"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header bg-dark text-white"
                                                    >
                                                        <i
                                                            className="ci-time me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Dark toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body text-dark"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
                                                    </div>
                                                </div>
                                                <div
                                                    className="toast fade show mb-3"
                                                    role="alert"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                >
                                                    <div
                                                        className="toast-header border-0 text-white"
                                                        style="
                                                            background-color: #69459e;
                                                        "
                                                    >
                                                        <i
                                                            className="ci-location me-2"
                                                        ></i
                                                        ><span
                                                            className="fw-medium me-auto"
                                                            >Custom color
                                                            toast</span
                                                        >
                                                        <button
                                                            className="btn-close btn-close-white ms-2"
                                                            type="button"
                                                            data-bs-dismiss="toast"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div
                                                        className="toast-body"
                                                        style="color: #69459e"
                                                    >
                                                        Hello, world! This is a
                                                        toast message.
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
                                        ><code className="lang-html">&lt;!-- Primary toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-primary text-white&quot;&gt;
    &lt;i className=&quot;ci-bell me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Primary toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-primary&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Accent toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-accent text-white&quot;&gt;
    &lt;i className=&quot;ci-unlocked me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Accent toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-accent&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-success text-white&quot;&gt;
    &lt;i className=&quot;ci-check-circle me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Success toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-success&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-danger text-white&quot;&gt;
    &lt;i className=&quot;ci-close-circle me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Danger toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-danger&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-warning text-white&quot;&gt;
    &lt;i className=&quot;ci-security-announcement me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Warning toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-warning&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-info text-white&quot;&gt;
    &lt;i className=&quot;ci-announcement me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Info toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-info&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header bg-dark text-white&quot;&gt;
    &lt;i className=&quot;ci-time me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Dark toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body text-dark&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Custom color toast --&gt;
&lt;div className=&quot;toast&quot; role=&quot;alert&quot; aria-live=&quot;assertive&quot; aria-atomic=&quot;true&quot;&gt;
  &lt;div className=&quot;toast-header border-0 text-white&quot; style=&quot;background-color: #69459e;&quot;&gt;
    &lt;i className=&quot;ci-time me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;fw-medium me-auto&quot;&gt;Custom color toast&lt;/span&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white ms-2&quot; data-bs-dismiss=&quot;toast&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;toast-body&quot; style=&quot;color: #69459e;&quot;&gt;Hello, world! This is a toast message.&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-primary.text-white
    i.ci-bell.me-2
    span.fw-medium.me-auto Primary toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-primary Hello, world! This is a toast message.

// Accent toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-accent.text-white
    i.ci-unlocked.me-2
    span.fw-medium.me-auto Accent toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-accent Hello, world! This is a toast message.

// Success toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-success.text-white
    i.ci-check-circle.me-2
    span.fw-medium.me-auto Success toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-success Hello, world! This is a toast message.

// Danger toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-danger.text-white
    i.ci-close-circle.me-2
    span.fw-medium.me-auto Danger toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-danger Hello, world! This is a toast message.

// Warning toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-warning.text-white
    i.ci-security-announcement.me-2
    span.fw-medium.me-auto Warning toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-warning Hello, world! This is a toast message.

// Info toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-info.text-white
    i.ci-announcement.me-2
    span.fw-medium.me-auto Info toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-info Hello, world! This is a toast message.

// Dark toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.bg-dark.text-white
    i.ci-time.me-2
    span.fw-medium.me-auto Dark toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body.text-dark Hello, world! This is a toast message.

// Custom color toast
.toast(role=&quot;alert&quot;, aria-live=&quot;assertive&quot;, aria-atomic=&quot;true&quot;)
  .toast-header.border-0.text-white(style=&quot;background-color: #69459e;&quot;)
    i.ci-time.me-2
    span.fw-medium.me-auto Custom color toast
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;toast&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white.ms-2
      span(aria-hidden=&quot;true&quot;) &amp;times;
  .toast-body(style=&quot;color: #69459e;&quot;) Hello, world! This is a toast message.</code></pre>
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
                                            href="#toast-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#toast-colors"
                                            >Color variations</a
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
