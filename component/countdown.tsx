<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Countdown</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Countdown</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Timer that counts down in seconds, minutes,
                                hours and days to any date.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3 p-4 mb-5">
                        <h6 className="fs-sm">
                            Date / time format to use inside data attribute:
                        </h6>
                        <code>data-countdown='MM/DD/YYYY HH:mm:ss AM/PM'</code>
                        <p className="fs-sm mb-0 py-2">
                            <u>Example:</u>
                        </p>
                        <code>data-countdown='07/01/2023 07:00:00 PM'</code>
                    </div>
                    <!-- Basic example + Alignment-->
                    <section className="pb-5 mb-md-2" id="coundown-basic">
                        <h2 className="h5 mb-3">Basic example + Alignment</h2>
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
                                            className="countdown py-2 h4"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown justify-content-center py-2 h4"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown justify-content-end py-2 h4"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
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
                                        ><code className="lang-html">&lt;!-- Left aligned countdown (default) --&gt;
&lt;div className=&quot;countdown h4&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  &lt;div className=&quot;countdown-days&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;d&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-hours&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;h&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-minutes&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;m&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-seconds&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;s&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Center aligned countdown --&gt;
&lt;div className=&quot;countdown h4 justify-content-center&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;

&lt;!-- Right aligned countdown --&gt;
&lt;div className=&quot;countdown h4 justify-content-end&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Left aligned countdown (default)
.countdown.h4(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  .countdown-days
    span.countdown-value 0
    span.countdown-label.text-muted d
  .countdown-hours
    span.countdown-value 0
    span.countdown-label.text-muted h
  .countdown-minutes
    span.countdown-value 0
    span.countdown-label.text-muted m
  .countdown-seconds
    span.countdown-value 0
    span.countdown-label.text-muted s

// Center aligned countdown
.countdown.h4.justify-content-center(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...

// Right aligned countdown
.countdown.h4.justify-content-end(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Sizing-->
                    <section className="pb-5 mb-md-2" id="coundown-sizing">
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
                                            className="countdown py-1 h1"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown py-1 h2"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown py-1 h3"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown py-1 h4"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown py-1 h5"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown py-1 h6"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div className="countdown-days">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div className="countdown-hours">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div className="countdown-minutes">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div className="countdown-seconds">
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
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
                                        ><code className="lang-html">&lt;!-- Alter countdown sizing using h1-h6, display1-display4 classes --&gt;
&lt;div className=&quot;countdown h1&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;

&lt;div className=&quot;countdown h2&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;

&lt;div className=&quot;countdown h3&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;

&lt;div className=&quot;countdown h4&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;

&lt;div className=&quot;countdown h5&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;

&lt;div className=&quot;countdown h6&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  ...
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Alter countdown sizing using h1-h6, display1-display4 classes
.countdown.h1(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...

.countdown.h2(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...

.countdown.h3(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...

.countdown.h4(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...

.countdown.h5(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...

.countdown.h6(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  ...
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Colors-->
                    <section className="pb-5 mb-md-2" id="coundown-colors">
                        <h2 className="h5 mb-3">Colors</h2>
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
                                            className="countdown py-1 h4"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div
                                                className="countdown-days text-accent"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label opacity-60"
                                                    >d</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-hours text-warning"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label opacity-60"
                                                    >h</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-minutes text-success"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label opacity-60"
                                                    >m</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-seconds text-danger"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label opacity-60"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div className="bg-dark pt-4 px-4 pb-2">
                                            <div
                                                className="countdown py-1 h4 text-light"
                                                data-countdown="07/01/2023 07:00:00 PM"
                                            >
                                                <div className="countdown-days">
                                                    <span
                                                        className="countdown-value"
                                                        >0</span
                                                    ><span
                                                        className="countdown-label opacity-60"
                                                        >d</span
                                                    >
                                                </div>
                                                <div
                                                    className="countdown-hours"
                                                >
                                                    <span
                                                        className="countdown-value"
                                                        >0</span
                                                    ><span
                                                        className="countdown-label opacity-60"
                                                        >h</span
                                                    >
                                                </div>
                                                <div
                                                    className="countdown-minutes"
                                                >
                                                    <span
                                                        className="countdown-value"
                                                        >0</span
                                                    ><span
                                                        className="countdown-label opacity-60"
                                                        >m</span
                                                    >
                                                </div>
                                                <div
                                                    className="countdown-seconds"
                                                >
                                                    <span
                                                        className="countdown-value"
                                                        >0</span
                                                    ><span
                                                        className="countdown-label opacity-60"
                                                        >s</span
                                                    >
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
                                        ><code className="lang-html">&lt;!-- Multicolor --&gt;
&lt;div className=&quot;countdown h4&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  &lt;div className=&quot;countdown-days text-accent&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;d&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-hours text-warning&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;h&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-minutes text-success&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;m&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-seconds text-danger&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;s&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Light version (white text on dark background) --&gt;
&lt;div className=&quot;countdown h4 text-light&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  &lt;div className=&quot;countdown-days&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;d&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-hours&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;h&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-minutes&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;m&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-seconds&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label opacity-60&quot;&gt;s&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Multicolor
.countdown.h4(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  .countdown-days.text-accent
    span.countdown-value 0
    span.countdown-label.opacity-60 d
  .countdown-hours.text-warning
    span.countdown-value 0
    span.countdown-label.opacity-60 h
  .countdown-minutes.text-success
    span.countdown-value 0
    span.countdown-label.opacity-60 m
  .countdown-seconds.text-danger
    span.countdown-value 0
    span.countdown-label.opacity-60 s

// Light version (white text on dark background)
.countdown.h4.text-light(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  .countdown-days
    span.countdown-value 0
    span.countdown-label.opacity-60 d
  .countdown-hours
    span.countdown-value 0
    span.countdown-label.opacity-60 h
  .countdown-minutes
    span.countdown-value 0
    span.countdown-label.opacity-60 m
  .countdown-seconds
    span.countdown-value 0
    span.countdown-label.opacity-60 s
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Cards example-->
                    <section className="pb-5 mb-md-2" id="coundown-cards">
                        <h2 className="h5 mb-3">Cards example</h2>
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
                                            className="countdown pt-2 h5"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div
                                                className="countdown-days border rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-hours border rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-minutes border rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-seconds border rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="countdown pt-2 h5"
                                            data-countdown="07/01/2023 07:00:00 PM"
                                        >
                                            <div
                                                className="countdown-days shadow rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >d</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-hours shadow rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >h</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-minutes shadow rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >m</span
                                                >
                                            </div>
                                            <div
                                                className="countdown-seconds shadow rounded p-3"
                                            >
                                                <span
                                                    className="countdown-value"
                                                    >0</span
                                                ><span
                                                    className="countdown-label text-muted"
                                                    >s</span
                                                >
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
                                        ><code className="lang-html">&lt;!-- Border version --&gt;
&lt;div className=&quot;countdown h5&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  &lt;div className=&quot;countdown-days border rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;d&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-hours border rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;h&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-minutes border rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;m&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-seconds border rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;s&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Shadow version --&gt;
&lt;div className=&quot;countdown h5&quot; data-countdown=&quot;07/01/2023 07:00:00 PM&quot;&gt;
  &lt;div className=&quot;countdown-days shadow rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;d&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-hours shadow rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;h&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-minutes shadow rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;m&lt;/span&gt;
  &lt;/div&gt;
  &lt;div className=&quot;countdown-seconds shadow rounded p-3&quot;&gt;
    &lt;span className=&quot;countdown-value&quot;&gt;0&lt;/span&gt;
    &lt;span className=&quot;countdown-label text-muted&quot;&gt;s&lt;/span&gt;
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
                                        ><code className="lang-pug">// Border version
.countdown.h5(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  .countdown-days.border.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted d
  .countdown-hours.border.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted h
  .countdown-minutes.border.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted m
  .countdown-seconds.border.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted s

// Shadow version
.countdown.h5(data-countdown=&quot;07/01/2023 07:00:00 PM&quot;)
  .countdown-days.shadow.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted d
  .countdown-hours.shadow.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted h
  .countdown-minutes.shadow.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted m
  .countdown-seconds.shadow.rounded.p-3
    span.countdown-value 0
    span.countdown-label.text-muted s</code></pre>
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
                                            href="#coundown-basic"
                                            >Basic example + Alignment</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#coundown-sizing"
                                            >Sizing</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#coundown-colors"
                                            >Colors</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#coundown-cards"
                                            >Cards example</a
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
