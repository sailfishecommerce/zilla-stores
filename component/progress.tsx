<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Progress</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Progress</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Custom progress bars featuring support for
                                stacked bars, animated backgrounds, and text
                                labels.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/progress/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Color variation (thick)-->
                    <section
                        className="pb-5 mb-md-2"
                        id="progress-colors-thick"
                    >
                        <h2 className="h5 mb-3">Color variation (thick)</h2>
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
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar fw-medium"
                                                role="progressbar"
                                                style="width: 45%"
                                                aria-valuenow="45"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                45%
                                            </div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar fw-medium bg-accent"
                                                role="progressbar"
                                                style="width: 60%"
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                60%
                                            </div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar fw-medium bg-success"
                                                role="progressbar"
                                                style="width: 55%"
                                                aria-valuenow="55"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                55%
                                            </div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar fw-medium bg-danger"
                                                role="progressbar"
                                                style="width: 40%"
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                40%
                                            </div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar fw-medium bg-warning"
                                                role="progressbar"
                                                style="width: 70%"
                                                aria-valuenow="70"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                70%
                                            </div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar fw-medium bg-info"
                                                role="progressbar"
                                                style="width: 60%"
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                60%
                                            </div>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar fw-medium bg-dark"
                                                role="progressbar"
                                                style="width: 33%"
                                                aria-valuenow="33"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                33%
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
                                        ><code className="lang-html">&lt;!-- Primary progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium&quot; role=&quot;progressbar&quot; style=&quot;width: 45%&quot; aria-valuenow=&quot;45&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    45%
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Accent progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium bg-accent&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    60%
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 55%&quot; aria-valuenow=&quot;55&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    55%
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 40%&quot; aria-valuenow=&quot;40&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    40%
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 70%&quot; aria-valuenow=&quot;70&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    70%
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    60%
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar fw-medium bg-dark&quot; role=&quot;progressbar&quot; style=&quot;width: 33%&quot; aria-valuenow=&quot;33&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;
    33%
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
                                        ><code className="lang-pug">// Primary progress bar
.progress.mb-3
  .progress-bar.fw-medium(role=&quot;progressbar&quot;, style=&quot;width: 45%&quot;, aria-valuenow=&quot;45&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 45%

// Accent progress bar
.progress.mb-3
  .progress-bar.fw-medium.bg-accent(role=&quot;progressbar&quot;, style=&quot;width: 60%&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 60%

// Success progress bar
.progress.mb-3
  .progress-bar.fw-medium.bg-success(role=&quot;progressbar&quot;, style=&quot;width: 55%&quot;, aria-valuenow=&quot;55&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 55%

// Danger progress bar
.progress.mb-3
  .progress-bar.fw-medium.bg-danger(role=&quot;progressbar&quot;, style=&quot;width: 40%&quot;, aria-valuenow=&quot;40&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 40%

// Warning progress bar
.progress.mb-3
  .progress-bar.fw-medium.bg-warning(role=&quot;progressbar&quot;, style=&quot;width: 70%&quot;, aria-valuenow=&quot;70&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 70%

// Info progress bar
.progress.mb-3
  .progress-bar.fw-medium.bg-info(role=&quot;progressbar&quot;, style=&quot;width: 60%&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 60%

// Dark progress bar
.progress.mb-3
  .progress-bar.fw-medium.bg-dark(role=&quot;progressbar&quot;, style=&quot;width: 33%&quot;, aria-valuenow=&quot;33&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
    | 33%
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Color variation (thin)-->
                    <section className="pb-5 mb-md-2" id="progress-colors-thin">
                        <h2 className="h5 mb-3">Color variation (thin)</h2>
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
                                        <div className="fs-sm mb-2">45%</div>
                                        <div
                                            className="progress mb-3"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style="width: 45%"
                                                aria-valuenow="45"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="fs-sm mb-2">60%</div>
                                        <div
                                            className="progress mb-3"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-accent"
                                                role="progressbar"
                                                style="width: 60%"
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="fs-sm mb-2">55%</div>
                                        <div
                                            className="progress mb-3"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style="width: 55%"
                                                aria-valuenow="55"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="fs-sm mb-2">40%</div>
                                        <div
                                            className="progress mb-3"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style="width: 40%"
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="fs-sm mb-2">70%</div>
                                        <div
                                            className="progress mb-3"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style="width: 70%"
                                                aria-valuenow="70"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="fs-sm mb-2">60%</div>
                                        <div
                                            className="progress mb-3"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style="width: 60%"
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="fs-sm mb-2">33%</div>
                                        <div
                                            className="progress"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-dark"
                                                role="progressbar"
                                                style="width: 33%"
                                                aria-valuenow="33"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Primary progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;45%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 45%&quot; aria-valuenow=&quot;45&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Accent progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;60%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-accent&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Success progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;55%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 55%&quot; aria-valuenow=&quot;55&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Danger progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;40%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 40%&quot; aria-valuenow=&quot;40&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Warning progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;70%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 70%&quot; aria-valuenow=&quot;70&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Info progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;60%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark progress bar --&gt;
&lt;div className=&quot;fs-sm mb-2&quot;&gt;33%&lt;/div&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 4px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-dark&quot; role=&quot;progressbar&quot; style=&quot;width: 33%&quot; aria-valuenow=&quot;33&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Primary progress bar
.fs-sm.mb-2
  | 45%
.progress.mb-3(style=&quot;height: 4px;&quot;)
  .progress-bar(role=&quot;progressbar&quot;, style=&quot;width: 45%&quot;, aria-valuenow=&quot;45&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Accent progress bar
fs-sm.mb-2
  | 60%
.progress.mb-3(style=&quot;height: 4px;&quot;)
  .progress-bar.bg-accent(role=&quot;progressbar&quot;, style=&quot;width: 60%&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Success progress bar
fs-sm.mb-2
  | 55%
.progress.mb-3(style=&quot;height: 4px;&quot;)
  .progress-bar.bg-success(role=&quot;progressbar&quot;, style=&quot;width: 55%&quot;, aria-valuenow=&quot;55&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Danger progress bar
fs-sm.mb-2
  | 40%
.progress.mb-3(style=&quot;height: 4px;&quot;)
  .progress-bar.bg-danger(role=&quot;progressbar&quot;, style=&quot;width: 40%&quot;, aria-valuenow=&quot;40&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Warning progress bar
.fs-sm.mb-2
  | 70%
.progress.mb-3(style=&quot;height: 4px;&quot;)
  .progress-bar.bg-warning(role=&quot;progressbar&quot;, style=&quot;width: 70%&quot;, aria-valuenow=&quot;70&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Info progress bar
.fs-sm.mb-2
  | 60%
.progress.mb-3(style=&quot;height: 4px;&quot;)
  .progress-bar.bg-info(role=&quot;progressbar&quot;, style=&quot;width: 60%&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Dark progress bar
.fs-sm.mb-2
  | 33%
.progress(style=&quot;height: 4px;&quot;)
  .progress-bar.bg-dark(role=&quot;progressbar&quot;, style=&quot;width: 33%&quot;, aria-valuenow=&quot;33&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Multiple bars-->
                    <section className="pb-5 mb-md-2" id="progress-multiple">
                        <h2 className="h5 mb-3">Multiple bars</h2>
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
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style="width: 15%"
                                                aria-valuenow="15"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style="width: 10%"
                                                aria-valuenow="10"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style="width: 20%"
                                                aria-valuenow="20"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style="width: 25%"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div
                                            className="progress"
                                            style="height: 4px"
                                        >
                                            <div
                                                className="progress-bar bg-warning"
                                                role="progressbar"
                                                style="width: 20%"
                                                aria-valuenow="20"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style="width: 25%"
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style="width: 10%"
                                                aria-valuenow="10"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style="width: 15%"
                                                aria-valuenow="15"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Thick bars --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
  &lt;div className=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 10%&quot; aria-valuenow=&quot;10&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
  &lt;div className=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 20%&quot; aria-valuenow=&quot;20&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
  &lt;div className=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Thin bars --&gt;
&lt;div className=&quot;progress mb-3&quot; style=&quot;height: 2px;&quot;&gt;
  &lt;div className=&quot;progress-bar bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 20%&quot; aria-valuenow=&quot;20&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
  &lt;div className=&quot;progress-bar bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 25%&quot; aria-valuenow=&quot;25&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
  &lt;div className=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 10%&quot; aria-valuenow=&quot;10&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
  &lt;div className=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 15%&quot; aria-valuenow=&quot;15&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Thick bars
.progress.mb-3
  .progress-bar.bg-info(role=&quot;progressbar&quot;, style=&quot;width: 15%&quot;, aria-valuenow=&quot;15&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  .progress-bar(role=&quot;progressbar&quot;, style=&quot;width: 10%&quot;, aria-valuenow=&quot;10&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  .progress-bar.bg-success(role=&quot;progressbar&quot;, style=&quot;width: 20%&quot;, aria-valuenow=&quot;20&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  .progress-bar.bg-warning(role=&quot;progressbar&quot;, style=&quot;width: 25%&quot;, aria-valuenow=&quot;25&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Thin bars
.progress.mb-3(style=&quot;height:2px;&quot;)
  .progress-bar.bg-warning(role=&quot;progressbar&quot;, style=&quot;width: 20%&quot;, aria-valuenow=&quot;20&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  .progress-bar.bg-info(role=&quot;progressbar&quot;, style=&quot;width: 25%&quot;, aria-valuenow=&quot;25&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  .progress-bar.bg-danger(role=&quot;progressbar&quot;, style=&quot;width: 10%&quot;, aria-valuenow=&quot;10&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  .progress-bar.bg-success(role=&quot;progressbar&quot;, style=&quot;width: 15%&quot;, aria-valuenow=&quot;15&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Animated striped bars-->
                    <section className="pb-5 mb-md-2" id="progress-animated">
                        <h2 className="h5 mb-3">Animated striped bars</h2>
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
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated"
                                                role="progressbar"
                                                style="width: 45%"
                                                aria-valuenow="45"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-accent"
                                                role="progressbar"
                                                style="width: 60%"
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                role="progressbar"
                                                style="width: 55%"
                                                aria-valuenow="55"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                role="progressbar"
                                                style="width: 40%"
                                                aria-valuenow="40"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                role="progressbar"
                                                style="width: 70%"
                                                aria-valuenow="70"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                                role="progressbar"
                                                style="width: 60%"
                                                aria-valuenow="60"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                        <div className="progress">
                                            <div
                                                className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                                                role="progressbar"
                                                style="width: 33%"
                                                aria-valuenow="33"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Striped primary progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated&quot; role=&quot;progressbar&quot; style=&quot;width: 45%&quot; aria-valuenow=&quot;45&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped accent progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated bg-accent&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped success progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 55%&quot; aria-valuenow=&quot;55&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped danger progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 40%&quot; aria-valuenow=&quot;40&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped warning progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated bg-warning&quot; role=&quot;progressbar&quot; style=&quot;width: 70%&quot; aria-valuenow=&quot;70&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped info progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated bg-info&quot; role=&quot;progressbar&quot; style=&quot;width: 60%&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped dark progress bar --&gt;
&lt;div className=&quot;progress mb-3&quot;&gt;
  &lt;div className=&quot;progress-bar progress-bar-striped progress-bar-animated bg-dark&quot; role=&quot;progressbar&quot; style=&quot;width: 33%&quot; aria-valuenow=&quot;33&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Striped primary progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated(role=&quot;progressbar&quot;, style=&quot;width: 45%&quot;, aria-valuenow=&quot;45&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Striped accent progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated.bg-accent(role=&quot;progressbar&quot;, style=&quot;width: 60%&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Striped success progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated.bg-success(role=&quot;progressbar&quot;, style=&quot;width: 55%&quot;, aria-valuenow=&quot;55&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Striped danger progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated.bg-danger(role=&quot;progressbar&quot;, style=&quot;width: 40%&quot;, aria-valuenow=&quot;40&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Striped warning progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated.bg-warning(role=&quot;progressbar&quot;, style=&quot;width: 70%&quot;, aria-valuenow=&quot;70&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Striped info progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated.bg-info(role=&quot;progressbar&quot;, style=&quot;width: 60%&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)

// Striped dark progress bar
.progress.mb-3
  .progress-bar.progress-bar-striped.progress-bar-animated.bg-dark(role=&quot;progressbar&quot;, style=&quot;width: 33%&quot;, aria-valuenow=&quot;33&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Use case: Rating breakdown-->
                    <section
                        className="pb-5 mb-md-2"
                        id="progress-rating-breakdown"
                    >
                        <h2 className="h5 mb-3">Use case: Rating breakdown</h2>
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
                                            className="d-flex align-items-center mb-2"
                                        >
                                            <div className="text-nowrap me-3">
                                                <span
                                                    className="d-inline-block align-middle text-muted"
                                                    >5</span
                                                ><i
                                                    className="ci-star-filled fs-xs ms-1"
                                                ></i>
                                            </div>
                                            <div className="w-100">
                                                <div
                                                    className="progress"
                                                    style="height: 4px"
                                                >
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style="width: 60%"
                                                        aria-valuenow="60"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-muted ms-3"
                                                >43</span
                                            >
                                        </div>
                                        <div
                                            className="d-flex align-items-center mb-2"
                                        >
                                            <div className="text-nowrap me-3">
                                                <span
                                                    className="d-inline-block align-middle text-muted"
                                                    >4</span
                                                ><i
                                                    className="ci-star-filled fs-xs ms-1"
                                                ></i>
                                            </div>
                                            <div className="w-100">
                                                <div
                                                    className="progress"
                                                    style="height: 4px"
                                                >
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style="
                                                            width: 27%;
                                                            background-color: #a7e453;
                                                        "
                                                        aria-valuenow="27"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-muted ms-3"
                                                >16</span
                                            >
                                        </div>
                                        <div
                                            className="d-flex align-items-center mb-2"
                                        >
                                            <div className="text-nowrap me-3">
                                                <span
                                                    className="d-inline-block align-middle text-muted"
                                                    >3</span
                                                ><i
                                                    className="ci-star-filled fs-xs ms-1"
                                                ></i>
                                            </div>
                                            <div className="w-100">
                                                <div
                                                    className="progress"
                                                    style="height: 4px"
                                                >
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style="
                                                            width: 17%;
                                                            background-color: #ffda75;
                                                        "
                                                        aria-valuenow="17"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-muted ms-3"
                                                >9</span
                                            >
                                        </div>
                                        <div
                                            className="d-flex align-items-center mb-2"
                                        >
                                            <div className="text-nowrap me-3">
                                                <span
                                                    className="d-inline-block align-middle text-muted"
                                                    >2</span
                                                ><i
                                                    className="ci-star-filled fs-xs ms-1"
                                                ></i>
                                            </div>
                                            <div className="w-100">
                                                <div
                                                    className="progress"
                                                    style="height: 4px"
                                                >
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style="
                                                            width: 9%;
                                                            background-color: #fea569;
                                                        "
                                                        aria-valuenow="9"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-muted ms-3"
                                                >4</span
                                            >
                                        </div>
                                        <div
                                            className="d-flex align-items-center"
                                        >
                                            <div className="text-nowrap me-3">
                                                <span
                                                    className="d-inline-block align-middle text-muted"
                                                    >1</span
                                                ><i
                                                    className="ci-star-filled fs-xs ms-1"
                                                ></i>
                                            </div>
                                            <div className="w-100">
                                                <div
                                                    className="progress"
                                                    style="height: 4px"
                                                >
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        role="progressbar"
                                                        style="width: 4%"
                                                        aria-valuenow="4"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <span className="text-muted ms-3"
                                                >2</span
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- 5 stars --&gt;
&lt;div className=&quot;d-flex align-items-center mb-2&quot;&gt;
  &lt;div className=&quot;text-nowrap me-3&quot;&gt;
    &lt;span className=&quot;d-inline-block align-middle text-muted&quot;&gt;5&lt;/span&gt;
    &lt;i className=&quot;ci-star-filled fs-xs ms-1&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div className=&quot;w-100&quot;&gt;
    &lt;div className=&quot;progress&quot; style=&quot;height: 4px;&quot;&gt;
      &lt;div className=&quot;progress-bar bg-success&quot; role=&quot;progressbar&quot; style=&quot;width: 60%;&quot; aria-valuenow=&quot;60&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;span className=&quot;text-muted ms-3&quot;&gt;43&lt;/span&gt;
&lt;/div&gt;

&lt;!-- 4 stars --&gt;
&lt;div className=&quot;d-flex align-items-center mb-2&quot;&gt;
  &lt;div className=&quot;text-nowrap me-3&quot;&gt;
    &lt;span className=&quot;d-inline-block align-middle text-muted&quot;&gt;4&lt;/span&gt;
    &lt;i className=&quot;ci-star-filled fs-xs ms-1&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div className=&quot;w-100&quot;&gt;
    &lt;div className=&quot;progress&quot; style=&quot;height: 4px;&quot;&gt;
      &lt;div className=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 27%; background-color: #a7e453;&quot; aria-valuenow=&quot;27&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;span className=&quot;text-muted ms-3&quot;&gt;16&lt;/span&gt;
&lt;/div&gt;

&lt;!-- 3 stars --&gt;
&lt;div className=&quot;d-flex align-items-center mb-2&quot;&gt;
  &lt;div className=&quot;text-nowrap me-3&quot;&gt;
    &lt;span className=&quot;d-inline-block align-middle text-muted&quot;&gt;3&lt;/span&gt;
    &lt;i className=&quot;ci-star-filled fs-xs ms-1&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div className=&quot;w-100&quot;&gt;
    &lt;div className=&quot;progress&quot; style=&quot;height: 4px;&quot;&gt;
      &lt;div className=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 17%; background-color: #ffda75;&quot; aria-valuenow=&quot;17&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;span className=&quot;text-muted ms-3&quot;&gt;9&lt;/span&gt;
&lt;/div&gt;

&lt;!-- 2 stars --&gt;
&lt;div className=&quot;d-flex align-items-center mb-2&quot;&gt;
  &lt;div className=&quot;text-nowrap me-3&quot;&gt;
    &lt;span className=&quot;d-inline-block align-middle text-muted&quot;&gt;2&lt;/span&gt;
    &lt;i className=&quot;ci-star-filled fs-xs ms-1&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div className=&quot;w-100&quot;&gt;
    &lt;div className=&quot;progress&quot; style=&quot;height: 4px;&quot;&gt;
      &lt;div className=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 9%; background-color: #fea569;&quot; aria-valuenow=&quot;9&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;span className=&quot;text-muted ms-3&quot;&gt;4&lt;/span&gt;
&lt;/div&gt;

&lt;!-- 1 star --&gt;
&lt;div className=&quot;d-flex align-items-center&quot;&gt;
  &lt;div className=&quot;text-nowrap me-3&quot;&gt;
    &lt;span className=&quot;d-inline-block align-middle text-muted&quot;&gt;1&lt;/span&gt;
    &lt;i className=&quot;ci-star-filled fs-xs ms-1&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div className=&quot;w-100&quot;&gt;
    &lt;div className=&quot;progress&quot; style=&quot;height: 4px;&quot;&gt;
      &lt;div className=&quot;progress-bar bg-danger&quot; role=&quot;progressbar&quot; style=&quot;width: 4%;&quot; aria-valuenow=&quot;4&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;span className=&quot;text-muted ms-3&quot;&gt;2&lt;/span&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// 5 stars
.d-flex.align-items-center.mb-2
  .text-nowrap.me-3
    span.d-inline-block.align-middle.text-muted 5
    i.ci-star-filled.fs-xs.ms-1
  .w-100
    .progress(style=&quot;height: 4px;&quot;)
      .progress-bar.bg-success(role=&quot;progressbar&quot;, style=&quot;width: 60%;&quot;, aria-valuenow=&quot;60&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  span.text-muted.ms-3 43

// 4 stars
.d-flex.align-items-center.mb-2
  .text-nowrap.me-3
    span.d-inline-block.align-middle.text-muted 4
    i.ci-star-filled.fs-xs.ms-1
  .w-100
    .progress(style=&quot;height: 4px;&quot;)
      .progress-bar(role=&quot;progressbar&quot;, style=&quot;width: 27%; background-color: #a7e453;&quot;, aria-valuenow=&quot;27&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  span.text-muted.ms-3 16

// 3 stars
.d-flex.align-items-center.mb-2
  .text-nowrap.me-3
    span.d-inline-block.align-middle.text-muted 3
    i.ci-star-filled.fs-xs.ms-1
  .w-100
    .progress(style=&quot;height: 4px;&quot;')
      .progress-bar(role=&quot;progressbar&quot;, style=&quot;width: 17%; background-color: #ffda75;&quot;, aria-valuenow=&quot;17&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  span.text-muted.ms-3 9

// 2 stars
.d-flex.align-items-center.mb-2
  .text-nowrap.me-3
    span.d-inline-block.align-middle.text-muted 2
    i.ci-star-filled.fs-xs.ms-1
  .w-100
    .progress(style=&quot;height: 4px;&quot;)
      .progress-bar(role=&quot;progressbar&quot;, style=&quot;width: 9%; background-color: #fea569;&quot;, aria-valuenow=&quot;9&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  span.text-muted.ms-3 4

// 1 star
.d-flex.align-items-center
  .text-nowrap.me-3
    span.d-inline-block.align-middle.text-muted 1
    i.ci-star-filled.fs-xs.ms-1
  .w-100
    .progress(style=&quot;height: 4px;&quot;)
      .progress-bar.bg-danger(role=&quot;progressbar&quot;, style=&quot;width: 4%;&quot;, aria-valuenow=&quot;4&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  span.text-muted.ms-3 2</code></pre>
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
                                            href="#progress-colors-thick"
                                            >Color variation (thick)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#progress-colors-thin"
                                            >Color variation (thin)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#progress-multiple"
                                            >Multiple bars</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#progress-animated"
                                            >Animated striped bars</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#progress-rating-breakdown"
                                            >Use case: Rating breakdown</a
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
