<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Alerts</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Alerts</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Provide contextual feedback messages for typical
                                user actions.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/alerts/"
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
                    <section className="pb-5 mb-md-2" id="alerts-basic">
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
                                            className="alert alert-primary"
                                            role="alert"
                                        >
                                            A simple primary alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-accent"
                                            role="alert"
                                        >
                                            A simple accent alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-secondary"
                                            role="alert"
                                        >
                                            A simple secondary alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-success"
                                            role="alert"
                                        >
                                            A simple success alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-danger"
                                            role="alert"
                                        >
                                            A simple danger alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-warning"
                                            role="alert"
                                        >
                                            A simple warning alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-info"
                                            role="alert"
                                        >
                                            A simple info alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-light"
                                            role="alert"
                                        >
                                            A simple light alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                        <div
                                            className="alert alert-dark mb-0"
                                            role="alert"
                                        >
                                            A simple dark alert with
                                            <a href="#" className="alert-link"
                                                >an example link</a
                                            >. Give it a click if you like.
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary alert --&gt;
&lt;div className=&quot;alert alert-primary&quot; role=&quot;alert&quot;&gt;
  A simple primary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Accent alert --&gt;
&lt;div className=&quot;alert alert-accent&quot; role=&quot;alert&quot;&gt;
  A simple accent alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Secondary alert --&gt;
&lt;div className=&quot;alert alert-secondary&quot; role=&quot;alert&quot;&gt;
  A simple secondary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Success alert --&gt;
&lt;div className=&quot;alert alert-success&quot; role=&quot;alert&quot;&gt;
  A simple success alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Danger alert --&gt;
&lt;div className=&quot;alert alert-danger&quot; role=&quot;alert&quot;&gt;
  A simple danger alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Warning alert --&gt;
&lt;div className=&quot;alert alert-warning&quot; role=&quot;alert&quot;&gt;
  A simple warning alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Info alert --&gt;
&lt;div className=&quot;alert alert-info&quot; role=&quot;alert&quot;&gt;
  A simple info alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Light alert --&gt;
&lt;div className=&quot;alert alert-light&quot; role=&quot;alert&quot;&gt;
  A simple light alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;

&lt;!-- Dark alert --&gt;
&lt;div className=&quot;alert alert-dark&quot; role=&quot;alert&quot;&gt;
  A simple dark alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary alert
.alert.alert-primary(role=&quot;alert&quot;)
  | A simple primary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Accent alert
.alert.alert-accent(role=&quot;alert&quot;)
  | A simple accent alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Secondary alert
.alert.alert-secondary(role=&quot;alert&quot;)
  | A simple secondary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Success alert
.alert.alert-success(role=&quot;alert&quot;)
  | A simple success alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Danger alert
.alert.alert-danger(role=&quot;alert&quot;)
  | A simple danger alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Warning alert
.alert.alert-warning(role=&quot;alert&quot;)
  | A simple warning alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Info alert
.alert.alert-info(role=&quot;alert&quot;)
  | A simple info alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Light alert
.alert.alert-light(role=&quot;alert&quot;)
  | A simple light alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Dark alert
.alert.alert-dark(role=&quot;alert&quot;)
  | A simple dark alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Alert with icon-->
                    <section className="pb-5 mb-md-2" id="alerts-icon">
                        <h2 className="h5 mb-3">Alert with icon</h2>
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
                                            className="alert alert-primary d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i className="ci-bell"></i>
                                            </div>
                                            <div>
                                                A simple primary alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-accent d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i
                                                    className="ci-security-check"
                                                ></i>
                                            </div>
                                            <div>
                                                A simple accent alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-secondary d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i className="ci-time"></i>
                                            </div>
                                            <div>
                                                A simple secondary alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-success d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i
                                                    className="ci-check-circle"
                                                ></i>
                                            </div>
                                            <div>
                                                A simple success alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-danger d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i
                                                    className="ci-close-circle"
                                                ></i>
                                            </div>
                                            <div>
                                                A simple danger alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-warning d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i
                                                    className="ci-security-announcement"
                                                ></i>
                                            </div>
                                            <div>
                                                A simple warning alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-info d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i
                                                    className="ci-announcement"
                                                ></i>
                                            </div>
                                            <div>
                                                A simple info alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-light d-flex"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i className="ci-unlocked"></i>
                                            </div>
                                            <div>
                                                A simple light alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
                                            </div>
                                        </div>
                                        <div
                                            className="alert alert-dark d-flex mb-0"
                                            role="alert"
                                        >
                                            <div className="alert-icon">
                                                <i className="ci-location"></i>
                                            </div>
                                            <div>
                                                A simple dark alert with
                                                <a
                                                    href="#"
                                                    className="alert-link"
                                                    >an example link</a
                                                >. Give it a click if you like.
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
                                        ><code className="lang-html">&lt;!-- Primary alert --&gt;
&lt;div className=&quot;alert alert-primary d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-bell&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple primary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Accent alert --&gt;
&lt;div className=&quot;alert alert-accent d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-security-check&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple accent alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Secondary alert --&gt;
&lt;div className=&quot;alert alert-secondary d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-time&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple secondary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success alert --&gt;
&lt;div className=&quot;alert alert-success d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-check-circle&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple success alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger alert --&gt;
&lt;div className=&quot;alert alert-danger d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-close-circle&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple danger alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning alert --&gt;
&lt;div className=&quot;alert alert-warning d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-security-announcement&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple warning alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info alert --&gt;
&lt;div className=&quot;alert alert-info d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-announcement&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple info alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Light alert --&gt;
&lt;div className=&quot;alert alert-light d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-unlocked&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple light alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark alert --&gt;
&lt;div className=&quot;alert alert-dark d-flex&quot; role=&quot;alert&quot;&gt;
  &lt;div className=&quot;alert-icon&quot;&gt;
    &lt;i className=&quot;ci-location&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div&gt;A simple dark alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary alert
.alert.alert-primary.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-bell
  div A simple primary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Accent alert
.alert.alert-accent.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-security-check
  div A simple accent alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Secondary alert
.alert.alert-secondary.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-time
  div A simple secondary alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Success alert
.alert.alert-success.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-check-circle
  div A simple success alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Danger alert
.alert.alert-danger.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-close-circle
  div A simple danger alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Warning alert
.alert.alert-warning.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-security-announcement
  div A simple warning alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Info alert
.alert.alert-info.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-announcement
  div A simple info alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Light alert
.alert.alert-light.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-unlocked
  div A simple light alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.

// Dark alert
.alert.alert-dark.d-flex(role=&quot;alert&quot;)
  .alert-icon
    i.ci-location
  div A simple dark alert with &lt;a href=&quot;#&quot; className=&quot;alert-link&quot;&gt;an example link&lt;/a&gt;. Give it a click if you like.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Dismissible alerts-->
                    <section className="pb-5 mb-md-2" id="alerts-dismissible">
                        <h2 className="h5 mb-3">Dismissible alerts</h2>
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
                                        <div
                                            className="alert alert-primary alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Primary alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-accent alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Accent alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-secondary alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Secondary alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-success alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Success alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-danger alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Danger alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-warning alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Warning alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-info alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Info alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-light alert-dismissible fade show"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Light alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div
                                            className="alert alert-dark alert-dismissible fade show mb-0"
                                            role="alert"
                                        >
                                            <span className="fw-medium"
                                                >Dark alert:</span
                                            >
                                            Dismiss me by clicking the close
                                            button on the right.
                                            <button
                                                className="btn-close btn-close-white"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary alert --&gt;
&lt;div className=&quot;alert alert-primary alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Primary alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Accent alert --&gt;
&lt;div className=&quot;alert alert-accent alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Secondary alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Secondary alert --&gt;
&lt;div className=&quot;alert alert-secondary alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Secondary alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Success alert --&gt;
&lt;div className=&quot;alert alert-success alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Success alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Danger alert --&gt;
&lt;div className=&quot;alert alert-danger alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Danger alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Warning alert --&gt;
&lt;div className=&quot;alert alert-warning alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Warning alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Info alert --&gt;
&lt;div className=&quot;alert alert-info alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Info alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Light alert --&gt;
&lt;div className=&quot;alert alert-light alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Light alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Dark alert --&gt;
&lt;div className=&quot;alert alert-dark alert-dismissible fade show&quot; role=&quot;alert&quot;&gt;
  &lt;span className=&quot;fw-medium&quot;&gt;Dark alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary alert
.alert.alert-primary.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Primary alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Accent alert
.alert.alert-accent.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Secondary alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Secondary alert
.alert.alert-secondary.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Secondary alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Success alert
.alert.alert-success.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Success alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Danger alert
.alert.alert-danger.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Danger alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Warning alert
.alert.alert-warning.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Warning alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Info alert
.alert.alert-info.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Info alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Light alert
.alert.alert-light.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Light alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close

// Dark alert
.alert.alert-dark.alert-dismissible.fade.show(role=&quot;alert&quot;)
  | &lt;span className=&quot;fw-medium&quot;&gt;Dark alert:&lt;/span&gt; Dismiss me by clicking the close button on the right.
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Additional content-->
                    <section
                        className="pb-5 mb-md-2"
                        id="alerts-additional-content"
                    >
                        <h2 className="h5 mb-3">Additional content</h2>
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
                                            className="alert alert-accent mb-0"
                                            role="alert"
                                        >
                                            <h4 className="pt-2 alert-heading">
                                                Well done!
                                            </h4>
                                            <p>
                                                Aww yeah, you successfully read
                                                this important alert message.
                                                This example text is going to
                                                run a bit longer so that you can
                                                see how spacing within an alert
                                                works with this kind of content.
                                            </p>
                                            <hr />
                                            <p className="pt-3 mb-2">
                                                Whenever you need to, be sure to
                                                use margin utilities to keep
                                                things nice and tidy.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Accent alert --&gt;
&lt;div className=&quot;alert alert-accent&quot; role=&quot;alert&quot;&gt;
  &lt;h4 className=&quot;pt-2 alert-heading&quot;&gt;Well done!&lt;/h4&gt;
  &lt;p&gt;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&lt;/p&gt;
  &lt;hr&gt;
  &lt;p className=&quot;pt-3 mb-2&quot;&gt;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&lt;/p&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Accent alert
.alert.alert-accent(role=&quot;alert&quot;)
  h4.pt-2.alert-heading Well done!
  p Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  hr
  p.pt-3.mb-2 Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Background image-->
                    <section className="pb-5 mb-md-2" id="alerts-bg-image">
                        <h2 className="h5 mb-3">Background image</h2>
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
                                            className="alert alert-dismissible bg-size-cover fade show text-center py-5 mb-0"
                                            style="
                                                background-image: url(../img/components/alerts/alert-bg.jpg);
                                            "
                                            role="alert"
                                        >
                                            <i
                                                className="ci-time d-inline-block text-white my-4"
                                                style="font-size: 3rem"
                                            ></i>
                                            <h2
                                                className="text-white text-shadow"
                                            >
                                                Check Our Limited Offers!
                                            </h2>
                                            <h4
                                                className="text-white text-shadow fs-normal mb-4 pb-2"
                                            >
                                                Save up to 50%
                                            </h4>
                                            <a
                                                className="btn btn-primary mb-3"
                                                href="#"
                                                >View offers</a
                                            >
                                            <button
                                                className="btn-close btn-close-white"
                                                type="button"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Alert with bakground image --&gt;
&lt;div className=&quot;alert alert-dismissible bg-size-cover fade show text-center py-5&quot; style=&quot;background-image: url(path-to-image)&quot; role=&quot;alert&quot;&gt;
  &lt;i className=&quot;ci-time d-block text-white my-4&quot; style=&quot;font-size: 3rem;&quot;&gt;&lt;/i&gt;
  &lt;h2 className=&quot;text-white text-shadow&quot;&gt;Check Our Limited Offers!&lt;/h2&gt;
  &lt;h4 className=&quot;text-white fs-normal text-shadow mb-4 pb-2&quot;&gt;Save up to 50%&lt;/h4&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn btn-primary mb-3&quot;&gt;View offers&lt;/a&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn-close btn-close-white&quot; data-bs-dismiss=&quot;alert&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Alert with bakground image
.alert.alert-dismissible.bg-size-cover.fade.show.text-center.py-5(style=&quot;background-image: url(path-to-image)&quot; role=&quot;alert&quot;)
  i(style=&quot;font-size: 3rem;&quot;).ci-time.d-inline-block.text-white.my-4
  h2.text-white.text-shadow Check Our Limited Offers!
  h4.text-white.fs-normal.text-shadow.mb-4.pb-2 Save up to 50%
  a(href=&quot;#&quot;).btn.btn-primary.mb-3 View offers
  button(type=&quot;button&quot;, data-bs-dismiss=&quot;alert&quot;, aria-label=&quot;Close&quot;).btn-close.btn-close-white</code></pre>
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
                                            href="#alerts-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#alerts-icon"
                                            >Alert with icon</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#alerts-dismissible"
                                            >Dismissible alerts</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#alerts-additional-content"
                                            >Additional content</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#alerts-bg-image"
                                            >Background image</a
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
