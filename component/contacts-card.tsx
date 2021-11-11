<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Contacts card</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Contacts card</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Contacts details like address, phone, email
                                inside card. Can be mixed with image or map.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <!-- Basic example-->
                    <section className="pb-5 mb-md-2" id="contacts-card-basic">
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
                                            className="d-flex flex-wrap flex-sm-nowrap pt-2"
                                        >
                                            <div
                                                className="card me-sm-4 mb-4"
                                                style="max-width: 20rem"
                                            >
                                                <div className="card-body">
                                                    <ul
                                                        className="list-unstyled mb-0"
                                                    >
                                                        <li
                                                            className="d-flex pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-location fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Find
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="#"
                                                                    >769,
                                                                    Industrial
                                                                    Dr, West
                                                                    Chicago, IL
                                                                    60185,
                                                                    USA</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2 pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Call
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="tel:+184725276533"
                                                                    >+1 (847)
                                                                    252 765
                                                                    33</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2"
                                                        >
                                                            <i
                                                                className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Write
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="mailto:email@example.com"
                                                                    >email@example.com</a
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="card border-0 shadow mb-4"
                                                style="max-width: 20rem"
                                            >
                                                <div className="card-body">
                                                    <ul
                                                        className="list-unstyled mb-0"
                                                    >
                                                        <li
                                                            className="d-flex pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-location fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Find
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="#"
                                                                    >769,
                                                                    Industrial
                                                                    Dr, West
                                                                    Chicago, IL
                                                                    60185,
                                                                    USA</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2 pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Call
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="tel:+184725276533"
                                                                    >+1 (847)
                                                                    252 765
                                                                    33</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2"
                                                        >
                                                            <i
                                                                className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Write
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="mailto:email@example.com"
                                                                    >email@example.com</a
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
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
                                        ><code className="lang-html">&lt;!-- Contacts card: Border --&gt;
&lt;div className=&quot;card&quot;&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;ul className=&quot;list-unstyled mb-0&quot;&gt;
      &lt;li className=&quot;d-flex pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-location fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
          &lt;a href=&quot;#&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-phone fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
          &lt;a href=&quot;tel:+184725276533&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;+1 (847) 252 765 33&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2m&quot;&gt;
        &lt;i className=&quot;ci-mail fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
          &lt;a href=&quot;mailto:email@example.com&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;email@example.com&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Contacts card: Shadow --&gt;
&lt;div className=&quot;card border-0 shadow&quot;&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;ul className=&quot;list-unstyled mb-0&quot;&gt;
      &lt;li className=&quot;d-flex pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-location fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
          &lt;a href=&quot;#&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-phone fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
          &lt;a href=&quot;tel:+184725276533&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;+1 (847) 252 765 33&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2m&quot;&gt;
        &lt;i className=&quot;ci-mail fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
          &lt;a href=&quot;mailto:email@example.com&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;email@example.com&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
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
                                        ><code className="lang-pug">// Contacts card: Border
.card
  .card-body
    ul.list-unstyled.mb-0
      li.d-flex.pb-3.border-bottom
        i.ci-location.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Find us
          a(href=&quot;#&quot;).d-block.text-heading.fs-sm
            | 769, Industrial Dr, West Chicago, IL 60185, USA
      li.d-flex.pt-2.pb-3.border-bottom
        i.ci-phone.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Call us
          a(href=&quot;tel:+184725276533&quot;).d-block.text-heading.fs-sm
            | +1 (847) 252 765 33
      li.d-flex.pt-2
        i.ci-mail.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Write us
          a(href=&quot;mailto:email@example.com&quot;).d-block.text-heading.fs-sm
            | email@example.com

// Contacts card: Shadow
.card.border-0.shadow
  .card-body
    ul.list-unstyled.mb-0
      li.d-flex.pb-3.border-bottom
        i.ci-location.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Find us
          a(href=&quot;#&quot;).d-block.text-heading.fs-sm
            | 769, Industrial Dr, West Chicago, IL 60185, USA
      li.d-flex.pt-2.pb-3.border-bottom
        i.ci-phone.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Call us
          a(href=&quot;tel:+184725276533&quot;).d-block.text-heading.fs-sm
            | +1 (847) 252 765 33
      li.d-flex.pt-2
        i.ci-mail.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Write us
          a(href=&quot;mailto:email@example.com&quot;).d-block.text-heading.fs-sm
            | email@example.com
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Alternative layout-->
                    <section
                        className="pb-5 mb-md-2"
                        id="contacts-card-alt-layout"
                    >
                        <h2 className="h5 mb-3">Alternative layout</h2>
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
                                        <div className="col-xl-11 pt-2">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="card mb-4">
                                                        <div
                                                            className="card-body text-center"
                                                        >
                                                            <i
                                                                className="ci-location h3 mt-2 mb-4 text-primary"
                                                            ></i>
                                                            <h3
                                                                className="h6 mb-2"
                                                            >
                                                                Main store
                                                                address
                                                            </h3>
                                                            <p
                                                                className="fs-sm text-muted"
                                                            >
                                                                396 Lillian
                                                                Blvd, Holbrook,
                                                                NY 11741, USA
                                                            </p>
                                                            <a
                                                                className="fs-sm"
                                                                href="#"
                                                                >Click to see
                                                                map<i
                                                                    className="ci-arrow-right align-middle ms-1"
                                                                ></i
                                                            ></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div
                                                        className="card border-0 shadow mb-4"
                                                    >
                                                        <div
                                                            className="card-body text-center"
                                                        >
                                                            <i
                                                                className="ci-phone h3 mt-2 mb-4 text-primary"
                                                            ></i>
                                                            <h3
                                                                className="h6 mb-3"
                                                            >
                                                                Phone numbers
                                                            </h3>
                                                            <ul
                                                                className="list-unstyled fs-sm mb-0"
                                                            >
                                                                <li>
                                                                    <span
                                                                        className="text-muted me-1"
                                                                        >Customer
                                                                        service:</span
                                                                    ><a
                                                                        className="nav-link-style"
                                                                        href="tel:+108044357260"
                                                                        >+1
                                                                        (080) 44
                                                                        357
                                                                        260</a
                                                                    >
                                                                </li>
                                                                <li>
                                                                    <span
                                                                        className="text-muted me-1"
                                                                        >Tech
                                                                        support:</span
                                                                    ><a
                                                                        className="nav-link-style"
                                                                        href="tel:+100331697720"
                                                                        >+1 00
                                                                        33 169
                                                                        7720</a
                                                                    >
                                                                </li>
                                                            </ul>
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
                                        ><code className="lang-html">&lt;!-- Contacts card: Border --&gt;
&lt;div className=&quot;card&quot;&gt;
  &lt;div className=&quot;card-body text-center&quot;&gt;
    &lt;i className=&quot;ci-location h3 mt-2 mb-4 text-primary&quot;&gt;&lt;/i&gt;
    &lt;h3 className=&quot;h6 mb-2&quot;&gt;Main store address&lt;/h3&gt;
    &lt;p className=&quot;fs-sm text-muted&quot;&gt;396 Lillian Blvd, Holbrook, NY 11741, USA&lt;/p&gt;
    &lt;a className=&quot;fs-sm&quot; href=&quot;#&quot;&gt;
      Click to see map
      &lt;i className=&quot;ci-arrow-right align-middle ms-1&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Contacts card: Shadow --&gt;
&lt;div className=&quot;card border-0 shadow&quot;&gt;
  &lt;div className=&quot;card-body text-center&quot;&gt;
    &lt;i className=&quot;ci-phone h3 mt-2 mb-4 text-primary&quot;&gt;&lt;/i&gt;
    &lt;h3 className=&quot;h6 mb-3&quot;&gt;Phone numbers&lt;/h3&gt;
    &lt;ul className=&quot;list-unstyled fs-sm mb-0&quot;&gt;
      &lt;li&gt;
        &lt;span className=&quot;text-muted me-1&quot;&gt;Customer service:&lt;/span&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;tel:+108044357260&quot;&gt;+1 (080) 44 357 260&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;
        &lt;span className=&quot;text-muted me-1&quot;&gt;Tech support:&lt;/span&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;tel:+100331697720&quot;&gt;+1 00 33 169 7720&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
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
                                        ><code className="lang-pug">// Contacts card: Border
.card
  .card-body.text-center
    i.ci-location.h3.mt-2.mb-4.text-primary
    h3.h6.mb-2 Main store address
    p.fs-sm.text-muted 396 Lillian Blvd, Holbrook, NY 11741, USA
    a(href=&quot;#&quot;).fs-sm
      | Click to see map
      i.ci-arrow-right.align-middle.ms-1

// Contacts card: Shadow
.card.border-0.shadow
  .card-body.text-center
    i.ci-phone.h3.mt-2.mb-4.text-primary
    h3.h6.mb-3 Phone numbers
    ul.list-unstyled.fs-sm.mb-0
      li
        span.text-muted.me-1 Customer service:
        a.nav-link-style(href=&quot;tel:+108044357260&quot;) +1 (080) 44 357 260
      li
        span.text-muted.me-1 Tech support:
        a.nav-link-style(href=&quot;tel:+100331697720&quot;) +1 00 33 169 7720
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- With image-->
                    <section className="pb-5 mb-md-2" id="contacts-card-image">
                        <h2 className="h5 mb-3">With image</h2>
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
                                            className="d-flex flex-wrap flex-sm-nowrap pt-2"
                                        >
                                            <div
                                                className="card me-sm-4 mb-4"
                                                style="max-width: 21rem"
                                            >
                                                <img
                                                    className="card-img-top"
                                                    src="../img/contacts/chicago.jpg"
                                                    alt="Chicago"
                                                />
                                                <div className="card-body">
                                                    <h6>Chicago, USA</h6>
                                                    <ul
                                                        className="list-unstyled mb-0"
                                                    >
                                                        <li
                                                            className="d-flex pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-location fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Find
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="#"
                                                                    >769,
                                                                    Industrial
                                                                    Dr, West
                                                                    Chicago, IL
                                                                    60185,
                                                                    USA</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2 pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Call
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="tel:+184725276533"
                                                                    >+1 (847)
                                                                    252 765
                                                                    33</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2"
                                                        >
                                                            <i
                                                                className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Write
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="mailto:chicago@example.com"
                                                                    >chicago@example.com</a
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="card border-0 shadow mb-4"
                                                style="max-width: 21rem"
                                            >
                                                <img
                                                    className="card-img-top"
                                                    src="../img/contacts/newyork.jpg"
                                                    alt="New York"
                                                />
                                                <div className="card-body">
                                                    <h6>New York, USA</h6>
                                                    <ul
                                                        className="list-unstyled mb-0"
                                                    >
                                                        <li
                                                            className="d-flex pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-location fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Find
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="#"
                                                                    >396 Lillian
                                                                    Blvd,
                                                                    Holbrook, NY
                                                                    11741,
                                                                    USA</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2 pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Call
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="tel:+1212477690000"
                                                                    >+1 (212)
                                                                    477 690
                                                                    000</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2"
                                                        >
                                                            <i
                                                                className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Write
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="mailto:newyork@example.com"
                                                                    >newyork@example.com</a
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
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
                                        ><code className="lang-html">&lt;!-- Contacts card: Border --&gt;
&lt;div className=&quot;card&quot;&gt;
  &lt;img src=&quot;path-to-image&quot; className=&quot;card-img-top&quot; alt=&quot;Chicago&quot;&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h6&gt;Chicago, USA&lt;/h6&gt;
    &lt;ul className=&quot;list-unstyled mb-0&quot;&gt;
      &lt;li className=&quot;media pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-location fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
          &lt;a href=&quot;#&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-phone fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
          &lt;a href=&quot;tel:+184725276533&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;+1 (847) 252 765 33&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2m&quot;&gt;
        &lt;i className=&quot;ci-mail fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
          &lt;a href=&quot;mailto:chicago@example.com&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;chicago@example.com&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Contacts card: Shadow --&gt;
&lt;div className=&quot;card border-0 shadow&quot;&gt;
  &lt;img src=&quot;path-to-image&quot; className=&quot;card-img-top&quot; alt=&quot;Chicago&quot;&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h6&gt;New York, USA&lt;/h6&gt;
    &lt;ul className=&quot;list-unstyled mb-0&quot;&gt;
      &lt;li className=&quot;d-flex pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-location fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
          &lt;a href=&quot;#&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-phone fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
          &lt;a href=&quot;tel:+1212477690000&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;+1 (212) 477 690 000&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2m&quot;&gt;
        &lt;i className=&quot;ci-mail fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
          &lt;a href=&quot;newyork:email@example.com&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;newyork@example.com&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
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
                                        ><code className="lang-pug">// Contacts card: Border
.card
  img(src=&quot;path-to-image&quot;, alt=&quot;Chicago&quot;).card-img-top
  .card-body
    h6 Chicago, USA
    ul.list-unstyled.mb-0
      li.d-flex.pb-3.border-bottom
        i.ci-location.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Find us
          a(href=&quot;#&quot;).d-block.text-heading.fs-sm
            | 769, Industrial Dr, West Chicago, IL 60185, USA
      li.d-flex.pt-2.pb-3.border-bottom
        i.ci-phone.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Call us
          a(href=&quot;tel:+184725276533&quot;).d-block.text-heading.fs-sm
            | +1 (847) 252 765 33
      li.d-flex.pt-2
        i.ci-mail.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Write us
          a(href=&quot;mailto:chicago@example.com&quot;).d-block.text-heading.fs-sm
            | chicago@example.com

// Contacts card: Shadow
.card.border-0.shadow
  img(src=&quot;path-to-image&quot;, alt=&quot;New York&quot;).card-img-top
  .card-body
    h6 New York, USA
    ul.list-unstyled.mb-0
      li.d-flex.pb-3.border-bottom
        i.ci-location.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Find us
          a(href=&quot;#&quot;).d-block.text-heading.fs-sm
            | 396 Lillian Blvd, Holbrook, NY 11741, USA
      li.d-flex.pt-2.pb-3.border-bottom
        i.ci-phone.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Call us
          a(href=&quot;tel:+1212477690000&quot;).d-block.text-heading.fs-sm
            | +1 (212) 477 690 000
      li.d-flex.pt-2
        i.ci-mail.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Write us
          a(href=&quot;mailto:newyork@example.com&quot;).d-block.text-heading.fs-sm
            | newyork@example.com
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- With map-->
                    <section className="pb-5 mb-md-2" id="contacts-card-map">
                        <h2 className="h5 mb-3">With map</h2>
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
                                            className="d-flex flex-wrap flex-sm-nowrap pt-2"
                                        >
                                            <div
                                                className="card me-sm-4 mb-4"
                                                style="max-width: 21rem"
                                            >
                                                <div
                                                    className="card-img-top overflow-hidden"
                                                >
                                                    <iframe
                                                        width="600"
                                                        height="200"
                                                        src="https://maps.google.com/maps?q=769%2C%20Industrial%20Dr%2C%20West%20Chicago%2C%20IL%2060185%2C%20USA&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                                    ></iframe>
                                                </div>
                                                <div className="card-body">
                                                    <h6>Chicago, USA</h6>
                                                    <ul
                                                        className="list-unstyled mb-0"
                                                    >
                                                        <li
                                                            className="d-flex pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-location fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Find
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="#"
                                                                    >769,
                                                                    Industrial
                                                                    Dr, West
                                                                    Chicago, IL
                                                                    60185,
                                                                    USA</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2 pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Call
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="tel:+184725276533"
                                                                    >+1 (847)
                                                                    252 765
                                                                    33</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2"
                                                        >
                                                            <i
                                                                className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Write
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="mailto:chicago@example.com"
                                                                    >chicago@example.com</a
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div
                                                className="card border-0 shadow mb-4"
                                                style="max-width: 21rem"
                                            >
                                                <div
                                                    className="card-img-top overflow-hidden"
                                                >
                                                    <iframe
                                                        width="600"
                                                        height="200"
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985265.6834686119!2d-73.53312098675273!3d41.40372595831977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8bffed93%3A0x53467ceb834b7397!2s396%20Lillian%20Blvd%2C%20Holbrook%2C%20NY%2011741%2C%20USA!5e0!3m2!1sen!2sua!4v1569318858921!5m2!1sen!2sua"
                                                    ></iframe>
                                                </div>
                                                <div className="card-body">
                                                    <h6>New York, USA</h6>
                                                    <ul
                                                        className="list-unstyled mb-0"
                                                    >
                                                        <li
                                                            className="d-flex pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-location fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Find
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="#"
                                                                    >396 Lillian
                                                                    Blvd,
                                                                    Holbrook, NY
                                                                    11741,
                                                                    USA</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2 pb-3 border-bottom"
                                                        >
                                                            <i
                                                                className="ci-phone fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Call
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="tel:+1212477690000"
                                                                    >+1 (212)
                                                                    477 690
                                                                    000</a
                                                                >
                                                            </div>
                                                        </li>
                                                        <li
                                                            className="d-flex pt-2"
                                                        >
                                                            <i
                                                                className="ci-mail fs-lg mt-2 mb-0 text-primary"
                                                            ></i>
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <span
                                                                    className="fs-ms text-muted"
                                                                    >Write
                                                                    us</span
                                                                ><a
                                                                    className="d-block text-heading fs-sm"
                                                                    href="mailto:newyork@example.com"
                                                                    >newyork@example.com</a
                                                                >
                                                            </div>
                                                        </li>
                                                    </ul>
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
                                        ><code className="lang-html">&lt;!-- Contacts card: Border --&gt;
&lt;div className=&quot;card&quot;&gt;
  &lt;div className=&quot;card-img-top overflow-hidden&quot;&gt;
    &lt;!-- Google map embed iframe goes here --&gt;
  &lt;/div&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h6&gt;Chicago, USA&lt;/h6&gt;
    &lt;ul className=&quot;list-unstyled mb-0&quot;&gt;
      &lt;li className=&quot;d-flex pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-location fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
          &lt;a href=&quot;#&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-phone fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
          &lt;a href=&quot;tel:+184725276533&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;+1 (847) 252 765 33&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2m&quot;&gt;
        &lt;i className=&quot;ci-mail fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
          &lt;a href=&quot;mailto:chicago@example.com&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;chicago@example.com&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Contacts card: Shadow --&gt;
&lt;div className=&quot;card border-0 shadow&quot;&gt;
  &lt;div className=&quot;card-img-top overflow-hidden&quot;&gt;
    &lt;!-- Google map embed iframe goes here --&gt;
  &lt;/div&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h6&gt;New York, USA&lt;/h6&gt;
    &lt;ul className=&quot;list-unstyled mb-0&quot;&gt;
      &lt;li className=&quot;d-flex pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-location fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Find us&lt;/span&gt;
          &lt;a href=&quot;#&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;769, Industrial Dr, West Chicago, IL 60185, USA&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2 pb-3 border-bottom&quot;&gt;
        &lt;i className=&quot;ci-phone fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Call us&lt;/span&gt;
          &lt;a href=&quot;tel:+1212477690000&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;+1 (212) 477 690 000&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex pt-2m&quot;&gt;
        &lt;i className=&quot;ci-mail fs-lg mt-2 mb-0 text-primary&quot;&gt;&lt;/i&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;span className=&quot;fs-ms text-muted&quot;&gt;Write us&lt;/span&gt;
          &lt;a href=&quot;newyork:email@example.com&quot; className=&quot;d-block text-heading fs-sm&quot;&gt;newyork@example.com&lt;/a&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
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
                                        ><code className="lang-pug">// Contacts card: Border
.card
  .card-img-top.overflow-hidden
    // Google map embed iframe goes here
  .card-body
    h6 Chicago, USA
    ul.list-unstyled.mb-0
      li.d-flex.pb-3.border-bottom
        i.ci-location.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Find us
          a(href=&quot;#&quot;).d-block.text-heading.fs-sm
            | 769, Industrial Dr, West Chicago, IL 60185, USA
      li.d-flex.pt-2.pb-3.border-bottom
        i.ci-phone.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Call us
          a(href=&quot;tel:+184725276533&quot;).d-block.text-heading.fs-sm
            | +1 (847) 252 765 33
      li.d-flex.pt-2
        i.ci-mail.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Write us
          a(href=&quot;mailto:chicago@example.com&quot;).d-block.text-heading.fs-sm
            | chicago@example.com

// Contacts card: Shadow
.card.border-0.shadow
  .card-img-top.overflow-hidden
    // Google map embed iframe goes here
  .card-body
    h6 New York, USA
    ul.list-unstyled.mb-0
      li.d-flex.pb-3.border-bottom
        i.ci-location.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Find us
          a(href=&quot;#&quot;).d-block.text-heading.fs-sm
            | 396 Lillian Blvd, Holbrook, NY 11741, USA
      li.d-flex.pt-2.pb-3.border-bottom
        i.ci-phone.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Call us
          a(href=&quot;tel:+1212477690000&quot;).d-block.text-heading.fs-sm
            | +1 (212) 477 690 000
      li.d-flex.pt-2
        i.ci-mail.fs-lg.mt-2.mb-0.text-primary
        .ps-3
          span.fs-ms.text-muted Write us
          a(href=&quot;mailto:newyork@example.com&quot;).d-block.text-heading.fs-sm
            | newyork@example.com</code></pre>
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
                                            href="#contacts-card-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#contacts-card-alt-layout"
                                            >Alternative layout</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#contacts-card-image"
                                            >With image</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#contacts-card-map"
                                            >With map</a
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
