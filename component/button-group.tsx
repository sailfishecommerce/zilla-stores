<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Button group</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Button group</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Groups a series of buttons together on a single
                                line.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/button-group/"
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
                    <section className="pb-5 mb-md-2" id="btn-group-basic">
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
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result1"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="btn-group mb-4 me-2"
                                            role="group"
                                            aria-label="Solid button group"
                                        >
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Left
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Middle
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Right
                                            </button>
                                        </div>
                                        <div
                                            className="btn-group mb-4 me-2"
                                            role="group"
                                            aria-label="Outline button group"
                                        >
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                            >
                                                Left
                                            </button>
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                            >
                                                Middle
                                            </button>
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                            >
                                                Right
                                            </button>
                                        </div>
                                        <br />
                                        <div
                                            className="btn-group mb-4 me-2"
                                            role="group"
                                            aria-label="Pill solid button group"
                                        >
                                            <button
                                                className="btn btn-secondary"
                                                type="button"
                                            >
                                                Left
                                            </button>
                                            <button
                                                className="btn btn-secondary"
                                                type="button"
                                            >
                                                Middle
                                            </button>
                                            <button
                                                className="btn btn-secondary"
                                                type="button"
                                            >
                                                Right
                                            </button>
                                        </div>
                                        <div
                                            className="btn-group mb-4 me-2"
                                            role="group"
                                            aria-label="Pill outline button group"
                                        >
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                            >
                                                Left
                                            </button>
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                            >
                                                Middle
                                            </button>
                                            <button
                                                className="btn btn-outline-secondary"
                                                type="button"
                                            >
                                                Right
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Solid button group --&gt;
&lt;div className=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Solid button group&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Left&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Middle&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Outline button group --&gt;
&lt;div className=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Outline button group&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Left&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Middle&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Right&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Solid button group
.btn-group(role=&quot;group&quot;, aria-label=&quot;Solid button group&quot;)
  button(type=&quot;button&quot;).btn.btn-primary
    | Left
  button(type=&quot;button&quot;).btn.btn-primary
    | Middle
  button(type=&quot;button&quot;).btn.btn-primary
    | Right

// Outline button group
.btn-group(role=&quot;group&quot;, aria-label=&quot;Outline button group&quot;)
  button(type=&quot;button&quot;).btn.btn-outline-primary
    | Left
  button(type=&quot;button&quot;).btn.btn-outline-primary
    | Middle
  button(type=&quot;button&quot;).btn.btn-outline-primary
    | Right
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Button toolbar-->
                    <section className="pb-5 mb-md-2" id="btn-group-toolbar">
                        <h2 className="h5 mb-3">Button toolbar</h2>
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
                                            className="btn-toolbar mb-3"
                                            role="toolbar"
                                            aria-label="Settings toolbar"
                                        >
                                            <div
                                                className="btn-group me-2 mb-2"
                                                role="group"
                                                aria-label="Settings group"
                                            >
                                                <button
                                                    className="btn btn-dark btn-icon"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ci-settings"
                                                    ></i>
                                                </button>
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ci-arrows-vertical me-1"
                                                    ></i
                                                    >A
                                                </button>
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                >
                                                    <i className="ci-list"></i>
                                                </button>
                                                <button
                                                    className="btn btn-secondary btn-icon"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ci-exit-full-screen"
                                                    ></i>
                                                </button>
                                            </div>
                                            <div
                                                className="btn-group me-2 mb-2"
                                                role="group"
                                                aria-label="Apply settings"
                                            >
                                                <button
                                                    className="btn btn-info"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ci-check me-2"
                                                    ></i
                                                    >Apply
                                                </button>
                                            </div>
                                            <div
                                                className="btn-group mb-2"
                                                role="group"
                                                aria-label="Delete settings"
                                            >
                                                <button
                                                    className="btn bg-faded-danger btn-icon"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ci-trash text-danger"
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            className="btn-toolbar"
                                            role="toolbar"
                                            aria-label="Toolbar with button groups"
                                        >
                                            <div
                                                className="btn-group me-2 mb-2"
                                                role="group"
                                                aria-label="First group"
                                            >
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    1
                                                </button>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    2
                                                </button>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    3
                                                </button>
                                            </div>
                                            <div
                                                className="btn-group me-2 mb-2"
                                                role="group"
                                                aria-label="Second group"
                                            >
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    4
                                                </button>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    5
                                                </button>
                                            </div>
                                            <div
                                                className="btn-group mb-2"
                                                role="group"
                                                aria-label="Third group"
                                            >
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    6
                                                </button>
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
                                        ><code className="lang-html">&lt;!-- Toolbar example --&gt;
&lt;div className=&quot;btn-toolbar&quot; role=&quot;toolbar&quot; aria-label=&quot;Settings toolbar&quot;&gt;
  &lt;div className=&quot;btn-group me-2 mb-2&quot; role=&quot;group&quot; aria-label=&quot;Settings group&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-dark btn-icon&quot;&gt;
      &lt;i className=&quot;ci-settings&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-secondary btn-icon&quot;&gt;
      &lt;i className=&quot;ci-arrows-vertical me-1&quot;&gt;&lt;/i&gt;
      A
    &lt;/button&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-secondary btn-icon&quot;&gt;
      &lt;i className=&quot;ci-list&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-secondary btn-icon&quot;&gt;
      &lt;i className=&quot;ci-exit-full-screen&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;btn-group me-2 mb-2&quot; role=&quot;group&quot; aria-label=&quot;Apply settings&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-info&quot;&gt;
      &lt;i className=&quot;ci-check me-2&quot;&gt;&lt;/i&gt;
      Apply
    &lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;btn-group mb-2&quot; role=&quot;group&quot; aria-label=&quot;Delete settings&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn bg-faded-danger btn-icon&quot;&gt;
      &lt;i className=&quot;ci-trash text-danger&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Pagination example --&gt;
&lt;div className=&quot;btn-toolbar&quot; role=&quot;toolbar&quot; aria-label=&quot;Pagination&quot;&gt;
  &lt;div className=&quot;btn-group me-2 mb-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;1&lt;/button&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;2&lt;/button&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;3&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;btn-group me-2 mb-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;4&lt;/button&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;5&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;btn-group mb-2&quot; role=&quot;group&quot; aria-label=&quot;Third group&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;6&lt;/button&gt;
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
                                        ><code className="lang-pug">// Toolbar example
.btn-toolbar(role=&quot;toolbar&quot;, aria-label=&quot;Settings toolbar&quot;)
  .btn-group.me-2.mb-2(role=&quot;group&quot;, aria-label=&quot;Settings group&quot;)
    button(type=&quot;button&quot;).btn.btn-dark.btn-icon
      i.ci-settings
    button(type=&quot;button&quot;).btn.btn-secondary.btn-icon
      i.ci-arrows-vertical.me-1
      | A
    button(type=&quot;button&quot;).btn.btn-secondary.btn-icon
      i.ci-list
    button(type=&quot;button&quot;).btn.btn-secondary.btn-icon
      i.ci-exit-full-screen
  .btn-group.me-2.mb-2(role=&quot;group&quot;, aria-label=&quot;Apply settings&quot;)
    button(type=&quot;button&quot;).btn.btn-info
      i.ci-check.me-2
      | Apply
  .btn-group.mb-2(role=&quot;group&quot;, aria-label=&quot;Delete settings&quot;)
    button(type=&quot;button&quot;).btn.bg-faded-danger.btn-icon
      i.ci-trash.text-danger

// Pagination example
.btn-toolbar(role=&quot;toolbar&quot;, aria-label=&quot;Pagination&quot;)
  .btn-group.me-2.mb-2(role=&quot;group&quot;, aria-label=&quot;First group&quot;)
    button(type=&quot;button&quot;).btn.btn-pill.btn-outline-secondary
      | 1
    button(type=&quot;button&quot;).btn.btn-pill.btn-outline-secondary
      | 2
    button(type=&quot;button&quot;).btn.btn-pill.btn-outline-secondary
      | 3
  .btn-group.me-2.mb-2(role=&quot;group&quot;, aria-label=&quot;Second group&quot;)
    button(type=&quot;button&quot;).btn.btn-pill.btn-outline-secondary
      | 4
    button(type=&quot;button&quot;).btn.btn-pill.btn-outline-secondary
      | 5
  .btn-group.mb-2(role=&quot;group&quot;, aria-label=&quot;Third group&quot;)
    button(type=&quot;button&quot;).btn.btn-pill.btn-outline-secondary
      | 6
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Sizing-->
                    <section className="pb-5 mb-md-2" id="btn-group-sizing">
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
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div
                                                    className="btn-group btn-group-lg mb-3"
                                                    role="group"
                                                    aria-label="Large group"
                                                >
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Left
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Middle
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Right
                                                    </button>
                                                </div>
                                                <br />
                                                <div
                                                    className="btn-group mb-3"
                                                    role="group"
                                                    aria-label="Normal group"
                                                >
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Left
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Middle
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Right
                                                    </button>
                                                </div>
                                                <br />
                                                <div
                                                    className="btn-group btn-group-sm mb-3"
                                                    role="group"
                                                    aria-label="Small group"
                                                >
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Left
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Middle
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Right
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div
                                                    className="btn-group btn-group-lg mb-3"
                                                    role="group"
                                                    aria-label="Large group"
                                                >
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Left
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Middle
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Right
                                                    </button>
                                                </div>
                                                <br />
                                                <div
                                                    className="btn-group mb-3"
                                                    role="group"
                                                    aria-label="Normal group"
                                                >
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Left
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Middle
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Right
                                                    </button>
                                                </div>
                                                <br />
                                                <div
                                                    className="btn-group btn-group-sm mb-3"
                                                    role="group"
                                                    aria-label="Small group"
                                                >
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Left
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Middle
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        Right
                                                    </button>
                                                </div>
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
                                        ><code className="lang-html">&lt;div className=&quot;btn-group btn-group-lg&quot; role=&quot;group&quot; aria-label=&quot;...&quot;&gt;...&lt;/div&gt;
&lt;div className=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;...&quot;&gt;...&lt;/div&gt;
&lt;div className=&quot;btn-group btn-group-sm&quot; role=&quot;group&quot; aria-label=&quot;...&quot;&gt;...&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">.btn-group.btn-group-lg(role=&quot;group&quot; aria-label=&quot;...&quot;)
  | ...
.btn-group(role=&quot;group&quot; aria-label=&quot;...&quot;)
  | ...
.btn-group.btn-group-sm(role=&quot;group&quot; aria-label=&quot;...&quot;)
  | ...
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Nested dropdown-->
                    <section className="pb-5 mb-md-2" id="btn-group-dropdown">
                        <h2 className="h5 mb-3">Nested dropdown</h2>
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
                                        <div className="row">
                                            <div className="col-sm-6 mb-3">
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Button group with nested dropdown"
                                                >
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        1
                                                    </button>
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        2
                                                    </button>
                                                    <div
                                                        className="btn-group"
                                                        role="group"
                                                    >
                                                        <button
                                                            className="btn btn-primary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            Dropdown
                                                        </button>
                                                        <div
                                                            className="dropdown-menu"
                                                        >
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                >Dropdown
                                                                link</a
                                                            ><a
                                                                className="dropdown-item"
                                                                href="#"
                                                                >Dropdown
                                                                link</a
                                                            ><a
                                                                className="dropdown-item"
                                                                href="#"
                                                                >Dropdown
                                                                link</a
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 mb-3">
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Button group with nested dropdown"
                                                >
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        1
                                                    </button>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        type="button"
                                                    >
                                                        2
                                                    </button>
                                                    <div
                                                        className="btn-group"
                                                        role="group"
                                                    >
                                                        <button
                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            Dropdown
                                                        </button>
                                                        <div
                                                            className="dropdown-menu"
                                                        >
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                >Dropdown
                                                                link</a
                                                            ><a
                                                                className="dropdown-item"
                                                                href="#"
                                                                >Dropdown
                                                                link</a
                                                            ><a
                                                                className="dropdown-item"
                                                                href="#"
                                                                >Dropdown
                                                                link</a
                                                            >
                                                        </div>
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
                                        ><code className="lang-html">&lt;!-- Button group with nested dropdown --&gt;
&lt;div className=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;1&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;2&lt;/button&gt;
  &lt;div className=&quot;btn-group&quot; role=&quot;group&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
      Dropdown
    &lt;/button&gt;
    &lt;div className=&quot;dropdown-menu&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Dropdown link&lt;/a&gt;
      &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Dropdown link&lt;/a&gt;
      &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Dropdown link&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Button group with nested dropdown --&gt;
&lt;div className=&quot;btn-group&quot; role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;1&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary&quot;&gt;2&lt;/button&gt;
  &lt;div className=&quot;btn-group&quot; role=&quot;group&quot;&gt;
    &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
      Dropdown
    &lt;/button&gt;
    &lt;div className=&quot;dropdown-menu&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Dropdown link&lt;/a&gt;
      &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Dropdown link&lt;/a&gt;
      &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Dropdown link&lt;/a&gt;
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
                                        ><code className="lang-pug">// Button group with nested dropdown
.btn-group(role=&quot;group&quot;, aria-label=&quot;Button group with nested dropdown&quot;)
  button(type=&quot;button&quot;).btn.btn-primary
    | 1
  button(type=&quot;button&quot;).btn.btn-primary
    | 2
  .btn-group(role='group')
    button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-primary.dropdown-toggle Dropdown
    .dropdown-menu
      a(href=&quot;#&quot;).dropdown-item
        | Dropdown link
      a(href=&quot;#&quot;).dropdown-item
        | Dropdown link
      a(href=&quot;#&quot;).dropdown-item
        | Dropdown link

// Button group with nested dropdown
.btn-group(role=&quot;group&quot;, aria-label=&quot;Button group with nested dropdown&quot;)
  button(type=&quot;button&quot;).btn.btn-outline-secondary
    | 1
  button(type=&quot;button&quot;).btn.btn-outline-secondary
    | 2
  .btn-group(role='group')
    button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-outline-secondary.dropdown-toggle
      | Dropdown
    .dropdown-menu
      a(href=&quot;#&quot;).dropdown-item
        | Dropdown link
      a(href=&quot;#&quot;).dropdown-item
        | Dropdown link
      a(href=&quot;#&quot;).dropdown-item
        | Dropdown link</code></pre>
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
                                            href="#btn-group-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#btn-group-toolbar"
                                            >Button toolbar</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#btn-group-sizing"
                                            >Sizing</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#btn-group-dropdown"
                                            >Nested dropdown</a
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
