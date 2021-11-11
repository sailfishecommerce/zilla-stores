<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Buttons</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Buttons</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Custom button styles for actions in forms,
                                dialogs, etc.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/buttons/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Solid (default)-->
                    <section className="pb-5 mb-md-2" id="buttons-solid">
                        <h2 className="h5 mb-3">Solid (default)</h2>
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
                                            className="btn btn-primary mb-2 me-1"
                                            type="button"
                                        >
                                            Primary
                                        </button>
                                        <button
                                            className="btn btn-accent mb-2 me-1"
                                            type="button"
                                        >
                                            Accent
                                        </button>
                                        <button
                                            className="btn btn-secondary mb-2 me-1"
                                            type="button"
                                        >
                                            Secondary
                                        </button>
                                        <button
                                            className="btn btn-success mb-2 me-1"
                                            type="button"
                                        >
                                            Success
                                        </button>
                                        <button
                                            className="btn btn-danger mb-2 me-1"
                                            type="button"
                                        >
                                            Danger
                                        </button>
                                        <button
                                            className="btn btn-warning mb-2 me-1"
                                            type="button"
                                        >
                                            Warning
                                        </button>
                                        <button
                                            className="btn btn-info mb-2 me-1"
                                            type="button"
                                        >
                                            Info
                                        </button>
                                        <div
                                            className="d-inline-block p-2 bg-dark mb-2 me-1"
                                        >
                                            <button
                                                className="btn btn-light"
                                                type="button"
                                            >
                                                Light
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-dark mb-2"
                                            type="button"
                                        >
                                            Dark
                                        </button>
                                        <button
                                            className="btn btn-link mb-2"
                                            type="button"
                                        >
                                            Link
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Primary&lt;/button&gt;

&lt;!-- Accent button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-accent&quot;&gt;Accent&lt;/button&gt;

&lt;!-- Secondary button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-secondary&quot;&gt;Secondary&lt;/button&gt;

&lt;!-- Success button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-success&quot;&gt;Success&lt;/button&gt;

&lt;!-- Danger button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-danger&quot;&gt;Danger&lt;/button&gt;

&lt;!-- Warning button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-warning&quot;&gt;Warning&lt;/button&gt;

&lt;!-- Info button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-info&quot;&gt;Info&lt;/button&gt;

&lt;!-- Light button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-light&quot;&gt;Info&lt;/button&gt;

&lt;!-- Dark button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-dark&quot;&gt;Dark&lt;/button&gt;

&lt;!-- Link button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-link&quot;&gt;Link&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary button
button(type=&quot;button&quot;).btn.btn-primary
  | Primary

// Accent button
button(type=&quot;button&quot;).btn.btn-accent
  | Accent

// Secondary button
button(type=&quot;button&quot;).btn.btn-secondary
  | Secondary

// Success button
button(type=&quot;button&quot;).btn.btn-success
  | Success

// Danger button
button(type=&quot;button&quot;).btn.btn-danger
  | Danger

// Warning button
button(type=&quot;button&quot;).btn.btn-warning
  | Warning

// Info button
button(type=&quot;button&quot;).btn.btn-info
  | Info

// Light button
button(type=&quot;button&quot;).btn.btn-light
  | Light

// Dark button
button(type=&quot;button&quot;).btn.btn-dark
  | Dark

// Link button
button(type=&quot;button&quot;).btn.btn-link
  | Link
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Outline-->
                    <section className="pb-5 mb-md-2" id="buttons-outline">
                        <h2 className="h5 mb-3">Outline</h2>
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
                                            className="btn btn-outline-primary mb-2 me-1"
                                            type="button"
                                        >
                                            Primary
                                        </button>
                                        <button
                                            className="btn btn-outline-accent mb-2 me-1"
                                            type="button"
                                        >
                                            Accent
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary mb-2 me-1"
                                            type="button"
                                        >
                                            Secondary
                                        </button>
                                        <button
                                            className="btn btn-outline-success mb-2 me-1"
                                            type="button"
                                        >
                                            Success
                                        </button>
                                        <button
                                            className="btn btn-outline-danger mb-2 me-1"
                                            type="button"
                                        >
                                            Danger
                                        </button>
                                        <button
                                            className="btn btn-outline-warning mb-2 me-1"
                                            type="button"
                                        >
                                            Warning
                                        </button>
                                        <button
                                            className="btn btn-outline-info mb-2 me-1"
                                            type="button"
                                        >
                                            Info
                                        </button>
                                        <div
                                            className="d-inline-block p-2 bg-dark mb-2 me-1"
                                        >
                                            <button
                                                className="btn btn-outline-light"
                                                type="button"
                                            >
                                                Light
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-outline-dark mb-2"
                                            type="button"
                                        >
                                            Dark
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Primary&lt;/button&gt;

&lt;!-- Accent button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-accent&quot;&gt;Accent&lt;/button&gt;

&lt;!-- Secondary button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;Secondary&lt;/button&gt;

&lt;!-- Success button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-success&quot;&gt;Success&lt;/button&gt;

&lt;!-- Danger button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-danger&quot;&gt;Danger&lt;/button&gt;

&lt;!-- Warning button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-warning&quot;&gt;Warning&lt;/button&gt;

&lt;!-- Info button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-info&quot;&gt;Info&lt;/button&gt;

&lt;!-- Light button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-light&quot;&gt;Info&lt;/button&gt;

&lt;!-- Dark button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-dark&quot;&gt;Dark&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary button
button(type=&quot;button&quot;).btn.btn-outline-primary
  | Primary

// Accent button
button(type=&quot;button&quot;).btn.btn-outline-accent
  | Accent

// Secondary button
button(type=&quot;button&quot;).btn.btn-outline-secondary
  | Secondary

// Success button
button(type=&quot;button&quot;).btn.btn-outline-success
  | Success

// Danger button
button(type=&quot;button&quot;).btn.btn-outline-danger
  | Danger

// Warning button
button(type=&quot;button&quot;).btn.btn-outline-warning
  | Warning

// Info button
button(type=&quot;button&quot;).btn.btn-outline-info
  | Info

// Light button
button(type=&quot;button&quot;).btn.btn-outline-light
  | Light

// Dark button
button(type=&quot;button&quot;).btn.btn-outline-dark
  | Dark
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Button shadow-->
                    <section className="pb-5 mb-md-2" id="buttons-shadow">
                        <h2 className="h5 mb-3">
                            Button shadow (solid buttons only)
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
                                            className="btn btn-primary btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Primary
                                        </button>
                                        <button
                                            className="btn btn-accent btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Accent
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Secondary
                                        </button>
                                        <button
                                            className="btn btn-success btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Success
                                        </button>
                                        <button
                                            className="btn btn-danger btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Danger
                                        </button>
                                        <button
                                            className="btn btn-warning btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Warning
                                        </button>
                                        <button
                                            className="btn btn-info btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Info
                                        </button>
                                        <button
                                            className="btn btn-light btn-shadow mb-2 me-1"
                                            type="button"
                                        >
                                            Light
                                        </button>
                                        <button
                                            className="btn btn-dark btn-shadow mb-2"
                                            type="button"
                                        >
                                            Dark
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary btn-shadow&quot;&gt;Primary&lt;/button&gt;

&lt;!-- Accent button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-accent btn-shadow&quot;&gt;Accent&lt;/button&gt;

&lt;!-- Secondary button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-secondary btn-shadow&quot;&gt;Secondary&lt;/button&gt;

&lt;!-- Success button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-success btn-shadow&quot;&gt;Success&lt;/button&gt;

&lt;!-- Danger button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-danger btn-shadow&quot;&gt;Danger&lt;/button&gt;

&lt;!-- Warning button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-warning btn-shadow&quot;&gt;Warning&lt;/button&gt;

&lt;!-- Info button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-info btn-shadow&quot;&gt;Info&lt;/button&gt;

&lt;!-- Light button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-light btn-shadow&quot;&gt;Info&lt;/button&gt;

&lt;!-- Dark button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-dark btn-shadow&quot;&gt;Dark&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary button
button(type=&quot;button&quot;).btn.btn-primary.btn-shadow
  | Primary

// Accent button
button(type=&quot;button&quot;).btn.btn-accent.btn-shadow
  | Accent

// Secondary button
button(type=&quot;button&quot;).btn.btn-secondary.btn-shadow
  | Secondary

// Success button
button(type=&quot;button&quot;).btn.btn-success.btn-shadow
  | Success

// Danger button
button(type=&quot;button&quot;).btn.btn-danger.btn-shadow
  | Danger

// Warning button
button(type=&quot;button&quot;).btn.btn-warning.btn-shadow
  | Warning

// Info button
button(type=&quot;button&quot;).btn.btn-info.btn-shadow
  | Info

// Light button
button(type=&quot;button&quot;).btn.btn-light.btn-shadow
  | Light

// Dark button
button(type=&quot;button&quot;).btn.btn-dark.btn-shadow
  | Dark
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Icons-->
                    <section className="pb-5 mb-md-2" id="buttons-icons">
                        <h2 className="h5 mb-3">Icons</h2>
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
                                        <button
                                            className="btn btn-primary mb-2 me-2"
                                            type="button"
                                        >
                                            <i className="ci-user me-2"></i
                                            >Profile
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-icon mb-2 me-2"
                                            type="button"
                                        >
                                            <i className="ci-edit"></i>
                                        </button>
                                        <button
                                            className="btn btn-outline-danger btn-icon mb-2 me-2"
                                            type="button"
                                        >
                                            <i className="ci-trash"></i>
                                        </button>
                                        <button
                                            className="btn btn-success btn-icon mb-2 me-2"
                                            type="button"
                                        >
                                            <i className="ci-check"></i>
                                        </button>
                                        <button
                                            className="btn btn-warning rounded-pill btn-icon mb-2 me-2"
                                            type="button"
                                        >
                                            <i className="ci-star"></i>
                                        </button>
                                        <button
                                            className="btn btn-outline-info rounded-pill btn-icon mb-2 me-2"
                                            type="button"
                                        >
                                            <i className="ci-bookmark"></i>
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary button with text and icon --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;
  &lt;i className=&quot;ci-user me-2&quot;&gt;&lt;/i&gt;
  Profile
&lt;/button&gt;

&lt;!-- Secondary solid icon button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-secondary btn-icon&quot;&gt;
  &lt;i className=&quot;ci-edit&quot;&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Danger outline icon button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-danger btn-icon&quot;&gt;
  &lt;i className=&quot;ci-trash&quot;&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Success solid icon button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-success btn-icon&quot;&gt;
  &lt;i className=&quot;ci-check&quot;&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Warning pill solid icon button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-warning rounded-pill btn-icon&quot;&gt;
  &lt;i className=&quot;ci-star&quot;&gt;&lt;/i&gt;
&lt;/button&gt;

&lt;!-- Info pill outline icon button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-info rounded-pill btn-icon&quot;&gt;
  &lt;i className=&quot;ci-bookmark&quot;&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary button with text and icon
button(type=&quot;button&quot;).btn.btn-primary
  i.ci-user.me-2
  | Profile

// Secondary solid icon button
button(type=&quot;button&quot;).btn.btn-secondary.btn-icon
  i.ci-edit

// Danger outline icon button
button(type=&quot;button&quot;).btn.btn-outline-danger.btn-icon
  i.ci-trash

// Success solid icon button
button(type=&quot;button&quot;).btn.btn-success.btn-icon
  i.ci-check

// Warning pill solid icon button
button(type=&quot;button&quot;).btn.btn-warning.rounded-pill.btn-icon
  i.ci-star

// Info pill outline icon button
button(type=&quot;button&quot;).btn.btn-outline-info.rounded-pill.btn-icon
  i.ci-bookmark
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Market buttons-->
                    <section className="pb-5 mb-md-2" id="buttons-market">
                        <h2 className="h5 mb-3">Market buttons</h2>
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
                                        <a
                                            className="btn-market btn-apple me-2 mb-3"
                                            href="#"
                                            role="button"
                                            ><span
                                                className="btn-market-subtitle"
                                                >Download on the</span
                                            ><span className="btn-market-title"
                                                >App Store</span
                                            ></a
                                        ><a
                                            className="btn-market btn-google me-2 mb-3"
                                            href="#"
                                            role="button"
                                            ><span
                                                className="btn-market-subtitle"
                                                >Download on the</span
                                            ><span className="btn-market-title"
                                                >Google Play</span
                                            ></a
                                        ><a
                                            className="btn-market btn-windows me-2 mb-3"
                                            href="#"
                                            role="button"
                                            ><span
                                                className="btn-market-subtitle"
                                                >Download on the</span
                                            ><span className="btn-market-title"
                                                >Windows Store</span
                                            ></a
                                        ><a
                                            className="btn-market btn-amazon mb-3"
                                            href="#"
                                            role="button"
                                            ><span
                                                className="btn-market-subtitle"
                                                >Order now at</span
                                            ><span className="btn-market-title"
                                                >Amazon.com</span
                                            ></a
                                        >
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- App Store button --&gt;
&lt;a href=&quot;#&quot; className=&quot;btn-market btn-apple&quot; role=&quot;button&quot;&gt;
  &lt;span className=&quot;btn-market-subtitle&quot;&gt;Download on the&lt;/span&gt;
  &lt;span className=&quot;btn-market-title&quot;&gt;App Store&lt;/span&gt;
&lt;/a&gt;

&lt;!-- Google Play button --&gt;
&lt;a href=&quot;#&quot; className=&quot;btn-market btn-google&quot; role=&quot;button&quot;&gt;
  &lt;span className=&quot;btn-market-subtitle&quot;&gt;Download on the&lt;/span&gt;
  &lt;span className=&quot;btn-market-title&quot;&gt;Google Play&lt;/span&gt;
&lt;/a&gt;

&lt;!-- Windows store button --&gt;
&lt;a href=&quot;#&quot; className=&quot;btn-market btn-windows&quot; role=&quot;button&quot;&gt;
  &lt;span className=&quot;btn-market-subtitle&quot;&gt;Download on the&lt;/span&gt;
  &lt;span className=&quot;btn-market-title&quot;&gt;Windows Store&lt;/span&gt;
&lt;/a&gt;

&lt;!-- Amazon button --&gt;
&lt;a href=&quot;#&quot; className=&quot;btn-market btn-amazon&quot; role=&quot;button&quot;&gt;
  &lt;span className=&quot;btn-market-subtitle&quot;&gt;Order now at&lt;/span&gt;
  &lt;span className=&quot;btn-market-title&quot;&gt;Amazon.com&lt;/span&gt;
&lt;/a&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// App Store button
a(href=&quot;#&quot;, role=&quot;button&quot;).btn-market.btn-apple
  span.btn-market-subtitle Download on the
  span.btn-market-title App Store

// Google Play button
a(href=&quot;#&quot;, role=&quot;button&quot;).btn-market.btn-google
  span.btn-market-subtitle Download on the
  span.btn-market-title Google Play

// Windows store button
a(href=&quot;#&quot;, role=&quot;button&quot;).btn-market.btn-windows
  span.btn-market-subtitle Download on the
  span.btn-market-title Windows Store

// Amazon button
a(href=&quot;#&quot;, role=&quot;button&quot;).btn-market.btn-amazon
  span.btn-market-subtitle Order now at
  span.btn-market-title Amazon.com
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Shapes-->
                    <section className="pb-5 mb-md-2" id="buttons-shapes">
                        <h2 className="h5 mb-3">Shapes</h2>
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
                                        <button
                                            className="btn btn-primary mb-2 me-1"
                                            type="button"
                                        >
                                            Rounded
                                        </button>
                                        <button
                                            className="btn btn-primary rounded-pill mb-2 me-1"
                                            type="button"
                                        >
                                            Pill button
                                        </button>
                                        <button
                                            className="btn btn-primary rounded-0 mb-2"
                                            type="button"
                                        >
                                            Square
                                        </button>
                                        <div className="pt-2"></div>
                                        <button
                                            className="btn btn-outline-primary mb-2 me-1"
                                            type="button"
                                        >
                                            Rounded
                                        </button>
                                        <button
                                            className="btn btn-outline-primary rounded-pill mb-2 me-1"
                                            type="button"
                                        >
                                            Pill button
                                        </button>
                                        <button
                                            className="btn btn-outline-primary rounded-0 mb-2"
                                            type="button"
                                        >
                                            Square
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Rounded solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Rounded&lt;/button&gt;

&lt;!-- Pill solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary rounded-pill&quot;&gt;Pill button&lt;/button&gt;

&lt;!-- Square solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary rounded-0&quot;&gt;Square&lt;/button&gt;

&lt;!-- Rounded outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Rounded&lt;/button&gt;

&lt;!-- Pill outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary rounded-pill&quot;&gt;Pill button&lt;/button&gt;

&lt;!-- Square outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary rounded-0&quot;&gt;Square&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Rounded solid button
button(type=&quot;button&quot;).btn.btn-primary
  | Rounded

// Pill solid button
button(type=&quot;button&quot;).btn.btn-primary.rounded-pill
  | Pill button

// Square solid button
button(type=&quot;button&quot;).btn.btn-primary.rounded-0
  | Square

// Rounded outline button
button(type=&quot;button&quot;).btn.btn-outline-primary
  | Rounded

// Pill outline button
button(type=&quot;button&quot;).btn.btn-outline-primary.rounded-pill
  | Pill button

// Square outline button
button(type=&quot;button&quot;).btn.btn-outline-primary.rounded-0
  | Square
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Sizes-->
                    <section className="pb-5 mb-md-2" id="buttons-sizes">
                        <h2 className="h5 mb-3">Sizes</h2>
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
                                        <button
                                            className="btn btn-primary btn-lg mb-2 me-1"
                                            type="button"
                                        >
                                            Large button
                                        </button>
                                        <button
                                            className="btn btn-primary mb-2 me-1"
                                            type="button"
                                        >
                                            Normal button
                                        </button>
                                        <button
                                            className="btn btn-primary btn-sm mb-2"
                                            type="button"
                                        >
                                            Small button
                                        </button>
                                        <div className="pt-2"></div>
                                        <button
                                            className="btn btn-outline-primary btn-lg mb-2 me-1"
                                            type="button"
                                        >
                                            Large button
                                        </button>
                                        <button
                                            className="btn btn-outline-primary mb-2 me-1"
                                            type="button"
                                        >
                                            Normal button
                                        </button>
                                        <button
                                            className="btn btn-outline-primary btn-sm mb-2"
                                            type="button"
                                        >
                                            Small button
                                        </button>
                                        <div className="row pt-2">
                                            <div className="col-sm-6">
                                                <button
                                                    className="btn btn-primary d-block w-100 mb-3"
                                                    type="button"
                                                >
                                                    Block level button
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button
                                                    className="btn btn-outline-primary d-block w-100 mb-3"
                                                    type="button"
                                                >
                                                    Block level button
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
                                        ><code className="lang-html">&lt;!-- Large solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary btn-lg&quot;&gt;Large button&lt;/button&gt;

&lt;!-- Normal solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Normal button&lt;/button&gt;

&lt;!-- Small solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary btn-sm&quot;&gt;Small button&lt;/button&gt;

&lt;!-- Large outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary btn-lg&quot;&gt;Large button&lt;/button&gt;

&lt;!-- Normal outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Normal button&lt;/button&gt;

&lt;!-- Small outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary btn-sm&quot;&gt;Small button&lt;/button&gt;

&lt;!-- Block solid button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary d-block w-100&quot;&gt;Block level button&lt;/button&gt;

&lt;!-- Block outline button --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary d-block w-100&quot;&gt;Block level button&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Large solid button
button(type=&quot;button&quot;).btn.btn-primary.btn-lg Large button

// Normal solid button
button(type=&quot;button&quot;).btn.btn-primary Normal button

// Small solid button
button(type=&quot;button&quot;).btn.btn-primary.btn-sm Small button

// Large outline button
button(type=&quot;button&quot;).btn.btn-outline-primary.btn-lg Large button

// Normal outline button
button(type=&quot;button&quot;).btn.btn-outline-primary Normal button

// Small outline button
button(type=&quot;button&quot;).btn.btn-outline-primary.btn-sm Small button

// Block solid button
button(type=&quot;button&quot;).btn.btn-primary.d-block.w-100 Block level button

// Block outline button
button(type=&quot;button&quot;).btn.btn-outline-primary.d-block.w-100 Block level button
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- States-->
                    <section className="pb-5 mb-md-2" id="buttons-states">
                        <h2 className="h5 mb-3">States</h2>
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
                                        <button
                                            className="btn btn-primary active mb-2 me-1"
                                            type="button"
                                        >
                                            Active
                                        </button>
                                        <button
                                            className="btn btn-secondary active mb-2 me-1"
                                            type="button"
                                        >
                                            Active
                                        </button>
                                        <button
                                            className="btn btn-primary mb-2 me-1"
                                            type="button"
                                            disabled
                                        >
                                            Disabled
                                        </button>
                                        <button
                                            className="btn btn-secondary mb-2 me-1"
                                            type="button"
                                            disabled
                                        >
                                            Disabled
                                        </button>
                                        <button
                                            className="btn btn-primary mb-2 me-1"
                                            type="button"
                                            data-bs-toggle="button"
                                        >
                                            Button toggle
                                        </button>
                                        <button
                                            className="btn btn-primary mb-2 me-1"
                                            type="button"
                                        >
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span
                                            >Loading...
                                        </button>
                                        <button
                                            className="btn btn-secondary mb-2"
                                            type="button"
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span
                                            >Loading...
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Button states --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary active&quot;&gt;Active&lt;/button&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-secondary active&quot;&gt;Active&lt;/button&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot; disabled&gt;Disabled&lt;/button&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-secondary&quot; disabled&gt;Disabled&lt;/button&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot; data-bs-toggle=&quot;button&quot;&gt;Button toggle&lt;/button&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;
  &lt;span className=&quot;spinner-border spinner-border-sm me-2&quot; role=&quot;status&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
  Loading...
&lt;/button&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-secondary&quot;&gt;
  &lt;span className=&quot;spinner-grow spinner-grow-sm me-2&quot; role=&quot;status&quot; aria-hidden=&quot;true&quot;&gt;&lt;/span&gt;
  Loading...
&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Button states
button(type=&quot;button&quot;).btn.btn-primary.active Active
button(type=&quot;button&quot;).btn.btn-secondary.active Active
button(type=&quot;button&quot;, disabled).btn.btn-primary Disabled
button(type=&quot;button&quot;, disabled).btn.btn-secondary Disabled
button(type=&quot;button&quot;, data-bs-toggle=&quot;button&quot;).btn.btn-primary Button toggle
button(type=&quot;button&quot;).btn.btn-primary
  span(role=&quot;status&quot;, aria-hidden=&quot;true&quot;).spinner-border.spinner-border-sm.me-2
  | Loading...
button(type=&quot;button&quot;).btn.btn-secondary
  span(role=&quot;status&quot;, aria-hidden=&quot;true&quot;).spinner-grow.spinner-grow-sm.me-2
  | Loading...
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Like / dislike buttons-->
                    <section className="pb-5 mb-md-2" id="buttons-like-dislike">
                        <h2 className="h5 mb-3">Like / dislike buttons</h2>
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
                                        <div className="d-flex flex-wrap pt-2">
                                            <div className="mb-3 me-5">
                                                <h6 className="mb-3">
                                                    Idle state
                                                </h6>
                                                <div className="text-nowrap">
                                                    <button
                                                        className="btn-like"
                                                        type="button"
                                                    >
                                                        16
                                                    </button>
                                                    <button
                                                        className="btn-dislike"
                                                        type="button"
                                                    >
                                                        4
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mb-3">
                                                    Active state
                                                </h6>
                                                <div className="text-nowrap">
                                                    <button
                                                        className="btn-like active"
                                                        type="button"
                                                    >
                                                        16
                                                    </button>
                                                    <button
                                                        className="btn-dislike active"
                                                        type="button"
                                                    >
                                                        4
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Like / dislike idle state --&gt;
&lt;div className=&quot;text-nowrap&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn-like&quot;&gt;16&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn-dislike&quot;&gt;4&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Like / dislike active state --&gt;
&lt;div className=&quot;text-nowrap&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn-like active&quot;&gt;16&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn-dislike active&quot;&gt;4&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Like / dislike idle state
.text-nowrap
  button(type=&quot;button&quot;).btn-like
    | 16
  button(type=&quot;button&quot;).btn-dislike
    | 4

// Like / dislike active state
.text-nowrap
  button(type=&quot;button&quot;).btn-like.active
    | 16
  button(type=&quot;button&quot;).btn-dislike.active
    | 4</code></pre>
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
                                            href="#buttons-solid"
                                            >Solid (default)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-outline"
                                            >Outline</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-shadow"
                                            >Button shadow</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-icons"
                                            >Icons</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-market"
                                            >Market buttons</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-shapes"
                                            >Shapes</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-sizes"
                                            >Sizes</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-states"
                                            >States</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#buttons-like-dislike"
                                            >Like / dislike buttons</a
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
