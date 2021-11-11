<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Badges</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Badges</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Small count and labeling component.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/badge/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Color variations-->
                    <section className="pb-5 mb-md-2" id="badge-colors">
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
                                        <span
                                            className="badge bg-primary me-2 mb-2"
                                            >Primary</span
                                        ><span
                                            className="badge bg-accent me-2 mb-2"
                                            >Accent</span
                                        ><span
                                            className="badge bg-secondary me-2 mb-2"
                                            >Secondary</span
                                        ><span
                                            className="badge bg-success me-2 mb-2"
                                            >Success</span
                                        ><span
                                            className="badge bg-danger me-2 mb-2"
                                            >Danger</span
                                        ><span
                                            className="badge bg-warning me-2 mb-2"
                                            >Warning</span
                                        ><span
                                            className="badge bg-info me-2 mb-2"
                                            >Info</span
                                        >
                                        <div
                                            className="d-inline-block py-1 px-2 bg-dark me-2 mb-2"
                                        >
                                            <span className="badge bg-light"
                                                >Light</span
                                            >
                                        </div>
                                        <span
                                            className="badge bg-dark me-2 mb-2"
                                            >Dark</span
                                        >
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary badge --&gt;
&lt;span className=&quot;badge bg-primary&quot;&gt;Primary&lt;/span&gt;

&lt;!-- Accent badge --&gt;
&lt;span className=&quot;badge bg-accent&quot;&gt;Accent&lt;/span&gt;

&lt;!-- Secondary badge --&gt;
&lt;span className=&quot;badge bg-secondary&quot;&gt;Secondary&lt;/span&gt;

&lt;!-- Success badge --&gt;
&lt;span className=&quot;badge bg-success&quot;&gt;Success&lt;/span&gt;

&lt;!-- Danger badge --&gt;
&lt;span className=&quot;badge bg-danger&quot;&gt;Danger&lt;/span&gt;

&lt;!-- Warning badge --&gt;
&lt;span className=&quot;badge bg-warning&quot;&gt;Warning&lt;/span&gt;

&lt;!-- Info badge --&gt;
&lt;span className=&quot;badge bg-info&quot;&gt;Info&lt;/span&gt;

&lt;!-- Light badge --&gt;
&lt;span className=&quot;badge bg-light&quot;&gt;Light&lt;/span&gt;

&lt;!-- Dark badge --&gt;
&lt;span className=&quot;badge bg-dark&quot;&gt;Dark&lt;/span&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary badge
span.badge.bg-primary Primary

// Accent badge
span.badge.bg-accent Accent

// Secondary badge
span.badge.bg-secondary Secondary

// Success badge
span.badge.bg-success Success

// Danger badge
span.badge.bg-danger Danger

// Warning badge
span.badge.bg-warning Warning

// Info badge
span.badge.bg-info Info

// Light badge
span.badge.bg-light Light

// Dark badge
span.badge.bg-dark Dark
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Badge shadow-->
                    <section className="pb-5 mb-md-2" id="badge-shadow">
                        <h2 className="h5 mb-3">Badge shadow</h2>
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
                                        <span
                                            className="badge bg-primary badge-shadow me-2 mb-2"
                                            >Primary</span
                                        ><span
                                            className="badge bg-accent badge-shadow me-2 mb-2"
                                            >Accent</span
                                        ><span
                                            className="badge bg-secondary badge-shadow me-2 mb-2"
                                            >Secondary</span
                                        ><span
                                            className="badge bg-success badge-shadow me-2 mb-2"
                                            >Success</span
                                        ><span
                                            className="badge bg-danger badge-shadow me-2 mb-2"
                                            >Danger</span
                                        ><span
                                            className="badge bg-warning badge-shadow me-2 mb-2"
                                            >Warning</span
                                        ><span
                                            className="badge bg-info badge-shadow me-2 mb-2"
                                            >Info</span
                                        ><span
                                            className="badge bg-light badge-shadow me-2 mb-2"
                                            >Light</span
                                        ><span
                                            className="badge bg-dark badge-shadow me-2 mb-2"
                                            >Dark</span
                                        >
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary badge with shadow --&gt;
&lt;span className=&quot;badge bg-primary badge-shadow&quot;&gt;Primary&lt;/span&gt;

&lt;!-- Accent badge with shadow --&gt;
&lt;span className=&quot;badge bg-accent badge-shadow&quot;&gt;Accent&lt;/span&gt;

&lt;!-- Secondary badge with shadow --&gt;
&lt;span className=&quot;badge bg-secondary badge-shadow&quot;&gt;Secondary&lt;/span&gt;

&lt;!-- Success badge with shadow --&gt;
&lt;span className=&quot;badge bg-success badge-shadow&quot;&gt;Success&lt;/span&gt;

&lt;!-- Danger badge with shadow --&gt;
&lt;span className=&quot;badge bg-danger badge-shadow&quot;&gt;Danger&lt;/span&gt;

&lt;!-- Warning badge with shadow --&gt;
&lt;span className=&quot;badge bg-warning badge-shadow&quot;&gt;Warning&lt;/span&gt;

&lt;!-- Info badge with shadow --&gt;
&lt;span className=&quot;badge bg-info badge-shadow&quot;&gt;Info&lt;/span&gt;

&lt;!-- Light badge with shadow --&gt;
&lt;span className=&quot;badge bg-light badge-shadow&quot;&gt;Light&lt;/span&gt;

&lt;!-- Dark badge with shadow --&gt;
&lt;span className=&quot;badge bg-dark badge-shadow&quot;&gt;Dark&lt;/span&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary badge with shadow
span.badge.bg-primary.badge-shadow Primary

// Accent badge with shadow
span.badge.bg-accent.badge-shadow Accent

// Secondary badge with shadow
span.badge.bg-secondary.badge-shadow Secondary

// Success badge with shadow
span.badge.bg-success.badge-shadow Success

// Danger badge with shadow
span.badge.bg-danger.badge-shadow Danger

// Warning badge with shadow
span.badge.bg-warning.badge-shadow Warning

// Info badge with shadow
span.badge.bg-info.badge-shadow Info

// Light badge with shadow
span.badge.bg-light.badge-shadow Light

// Dark badge with shadow
span.badge.bg-dark.badge-shadow Dark
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Pill badges-->
                    <section className="pb-5 mb-md-2" id="rounded-pill">
                        <h2 className="h5 mb-3">Pill badges</h2>
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
                                        <span
                                            className="badge rounded-pill bg-primary me-2 mb-2"
                                            >Primary</span
                                        ><span
                                            className="badge rounded-pill bg-accent me-2 mb-2"
                                            >Accent</span
                                        ><span
                                            className="badge rounded-pill bg-secondary me-2 mb-2"
                                            >Secondary</span
                                        ><span
                                            className="badge rounded-pill bg-success me-2 mb-2"
                                            >Success</span
                                        ><span
                                            className="badge rounded-pill bg-danger me-2 mb-2"
                                            >Danger</span
                                        ><span
                                            className="badge rounded-pill bg-warning me-2 mb-2"
                                            >Warning</span
                                        ><span
                                            className="badge rounded-pill bg-info me-2 mb-2"
                                            >Info</span
                                        >
                                        <div
                                            className="d-inline-block py-1 px-2 bg-dark me-2 mb-2"
                                        >
                                            <span
                                                className="badge rounded-pill bg-light"
                                                >Light</span
                                            >
                                        </div>
                                        <span
                                            className="badge rounded-pill bg-dark me-2 mb-2"
                                            >Dark</span
                                        >
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-primary&quot;&gt;Primary&lt;/span&gt;

&lt;!-- Accent badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-accent&quot;&gt;Accent&lt;/span&gt;

&lt;!-- Secondary badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-secondary&quot;&gt;Secondary&lt;/span&gt;

&lt;!-- Success badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-success&quot;&gt;Success&lt;/span&gt;

&lt;!-- Danger badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-danger&quot;&gt;Danger&lt;/span&gt;

&lt;!-- Warning badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-warning&quot;&gt;Warning&lt;/span&gt;

&lt;!-- Info badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-info&quot;&gt;Info&lt;/span&gt;

&lt;!-- Light badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-light&quot;&gt;Light&lt;/span&gt;

&lt;!-- Dark badge --&gt;
&lt;span className=&quot;badge rounded-pill bg-dark&quot;&gt;Dark&lt;/span&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary badge
span.badge.rounded-pill.bg-primary Primary

// Accent badge
span.badge.rounded-pill.bg-accent Accent

// Secondary badge
span.badge.rounded-pill.bg-secondary Secondary

// Success badge
span.badge.rounded-pill.bg-success Success

// Danger badge
span.badge.rounded-pill.bg-danger Danger

// Warning badge
span.badge.rounded-pill.bg-warning Warning

// Info badge
span.badge.rounded-pill.bg-info Info

// Light badge
span.badge.rounded-pill.bg-light Light

// Dark badge
span.badge.rounded-pill.bg-dark Dark
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Inside heading-->
                    <section className="pb-5 mb-md-2" id="badge-heading">
                        <h2 className="h5 mb-3">Inside heading</h2>
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
                                        <h1>
                                            Example heading
                                            <span className="badge bg-secondary"
                                                >New</span
                                            >
                                        </h1>
                                        <h2>
                                            Example heading
                                            <span className="badge bg-secondary"
                                                >New</span
                                            >
                                        </h2>
                                        <h3>
                                            Example heading
                                            <span className="badge bg-secondary"
                                                >New</span
                                            >
                                        </h3>
                                        <h4>
                                            Example heading
                                            <span className="badge bg-secondary"
                                                >New</span
                                            >
                                        </h4>
                                        <h5>
                                            Example heading
                                            <span className="badge bg-secondary"
                                                >New</span
                                            >
                                        </h5>
                                        <h6>
                                            Example heading
                                            <span className="badge bg-secondary"
                                                >New</span
                                            >
                                        </h6>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;h1&gt;Example heading &lt;span className=&quot;badge bg-secondary&quot;&gt;New&lt;/span&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;span className=&quot;badge bg-secondary&quot;&gt;New&lt;/span&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;span className=&quot;badge bg-secondary&quot;&gt;New&lt;/span&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;span className=&quot;badge bg-secondary&quot;&gt;New&lt;/span&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;span className=&quot;badge bg-secondary&quot;&gt;New&lt;/span&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;span className=&quot;badge bg-secondary&quot;&gt;New&lt;/span&gt;&lt;/h6&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">h1
  | Example heading
  span.badge.bg-secondary New
h2
  | Example heading
  span.badge.bg-secondary New
h3
  | Example heading
  span.badge.bg-secondary New
h4
  | Example heading
  span.badge.bg-secondary New
h5
  | Example heading
  span.badge.bg-secondary New
h6
  | Example heading
  span.badge.bg-secondary New
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Inside button-->
                    <section className="pb-5 mb-md-2" id="badge-button">
                        <h2 className="h5 mb-3">Inside button</h2>
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
                                        <button
                                            className="btn btn-primary me-2 mb-3"
                                            type="button"
                                        >
                                            Notifications
                                            <span
                                                className="badge bg-light ms-1"
                                                >4</span
                                            >
                                        </button>
                                        <button
                                            className="btn rounded-pill btn-dark me-2 mb-3"
                                            type="button"
                                        >
                                            Profile
                                            <span
                                                className="badge rounded-pill bg-warning ms-1"
                                                >9</span
                                            >
                                        </button>
                                        <button
                                            className="btn btn-outline-secondary me-2 mb-3"
                                            type="button"
                                        >
                                            Messages
                                            <span
                                                className="badge bg-success ms-1"
                                                >18</span
                                            >
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Button + badge --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;
  Notifications &lt;span className=&quot;badge bg-light ms-1&quot;&gt;4&lt;/span&gt;
&lt;/button&gt;

&lt;!-- Pill button + pill badge --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn rounded-pill btn-dark&quot;&gt;
  Profile &lt;span className=&quot;badge rounded-pill bg-warning ms-1&quot;&gt;9&lt;/span&gt;
&lt;/button&gt;

&lt;!-- Outline button + badge --&gt;
&lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;
  Messages &lt;span className=&quot;badge bg-success ms-1&quot;&gt;18&lt;/span&gt;
&lt;/button&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Button + badge
button(type=&quot;button&quot;).btn.btn-primary
  | Notifications
  span.badge.bg-light.ms-1 4

// Pill button + pill badge
button(type=&quot;button&quot;).btn.rounded-pill.btn-dark
  | Profile
  span.badge.rounded-pill.bg-warning.ms-1 9

// Outline button + badge
button(type=&quot;button&quot;).btn.btn-outline-secondary
  | Messages
  span.badge.bg-success.ms-1 18
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Inside list group-->
                    <section className="pb-5 mb-md-2" id="badge-list-group">
                        <h2 className="h5 mb-3">Inside list group</h2>
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
                                        <div className="row">
                                            <div
                                                className="col-xl-5 col-lg-7 col-md-6"
                                            >
                                                <div className="list-group">
                                                    <a
                                                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                                        href="#"
                                                        >Messages<span
                                                            className="badge rounded-pill bg-info"
                                                            >14</span
                                                        ></a
                                                    ><a
                                                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                                        href="#"
                                                        >Orders<span
                                                            className="badge rounded-pill bg-warning"
                                                            >2</span
                                                        ></a
                                                    ><a
                                                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                                        href="#"
                                                        >Favourites<span
                                                            className="badge rounded-pill bg-danger"
                                                            >6</span
                                                        ></a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Badges inside list group --&gt;
&lt;div className=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action d-flex justify-content-between align-items-center&quot;&gt;
    Messages
    &lt;span className=&quot;badge rounded-pill bg-info&quot;&gt;14&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action d-flex justify-content-between align-items-center&quot;&gt;
    Orders
    &lt;span className=&quot;badge rounded-pill bg-warning&quot;&gt;2&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action d-flex justify-content-between align-items-center&quot;&gt;
    Favourites
    &lt;span className=&quot;badge rounded-pill bg-danger&quot;&gt;6&lt;/span&gt;
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
                                        ><code className="lang-pug">// Badges inside list group
.list-group
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.d-flex.justify-content-between.align-items-center
    | Messages
    span.badge.rounded-pill.bg-info 14
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.d-flex.justify-content-between.align-items-center
    | Orders
    span.badge.rounded-pill.bg-warning 2
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.d-flex.justify-content-between.align-items-center
    | Favourites
    span.badge.rounded-pill.bg-danger 6</code></pre>
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
                                            href="#badge-colors"
                                            >Color variations</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#badge-shadow"
                                            >Badge shadow</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#rounded-pill"
                                            >Pill badges</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#badge-heading"
                                            >Inside heading</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#badge-button"
                                            >Inside button</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#badge-list-group"
                                            >Inside list group</a
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
