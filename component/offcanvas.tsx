<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Offcanvas</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Offcanvas</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Build hidden sidebars into your project for
                                navigation, shopping carts, etc. Cartzilla
                                customized version of the component is
                                responsive and can be used as an alternative to
                                navbar collapse (only lg breakpoint).
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/offcanvas/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Left offcanvas example-->
                    <div
                        className="offcanvas offcanvas-start"
                        id="offcanvasLeft"
                        tabindex="-1"
                    >
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title">Left offcanvas</h5>
                            <button
                                className="btn-close"
                                type="button"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <div className="offcanvas-body" data-simplebar>
                            <p className="fs-sm">
                                Content for the offcanvas goes here. You can
                                place just about any Bootstrap component or
                                custom elements here.
                            </p>
                        </div>
                    </div>
                    <!-- Right offcanvas example-->
                    <div
                        className="offcanvas offcanvas-end"
                        id="offcanvasRight"
                        tabindex="-1"
                    >
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title">Right offcanvas</h5>
                            <button
                                className="btn-close"
                                type="button"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <div className="offcanvas-body" data-simplebar>
                            <p className="fs-sm">
                                Content for the offcanvas goes here. You can
                                place just about any Bootstrap component or
                                custom elements here.
                            </p>
                        </div>
                    </div>
                    <!-- Bottom offcanvas example-->
                    <div
                        className="offcanvas offcanvas-bottom"
                        id="offcanvasBottom"
                        tabindex="-1"
                    >
                        <div className="offcanvas-header border-bottom">
                            <h5 className="offcanvas-title">
                                Bottom offcanvas
                            </h5>
                            <button
                                className="btn-close"
                                type="button"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <div className="offcanvas-body" data-simplebar>
                            <p className="fs-sm">
                                Content for the offcanvas goes here. You can
                                place just about any Bootstrap component or
                                custom elements here.
                            </p>
                        </div>
                    </div>
                    <!-- Offcanvas components-->
                    <section className="pb-5 mb-md-2" id="offcanvas-components">
                        <h2 className="h5 mb-3">Offcanvas components</h2>
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
                                            className="offcanvas offcanvas-start shadow my-2"
                                            data-offcanvas-show="true"
                                            id="offcanvas"
                                            tabindex="-1"
                                            style="
                                                position: static;
                                                transform: none;
                                            "
                                        >
                                            <div
                                                className="offcanvas-header border-bottom"
                                            >
                                                <h6 className="offcanvas-title">
                                                    Menu
                                                </h6>
                                                <button
                                                    className="btn-close"
                                                    type="button"
                                                ></button>
                                            </div>
                                            <div
                                                className="offcanvas-body"
                                                data-simplebar
                                                style="max-height: 16.5rem"
                                            >
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0 active"
                                                            href="#"
                                                            >Home</a
                                                        >
                                                    </li>
                                                    <li
                                                        className="nav-item dropdown"
                                                    >
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >User Profile</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Services</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Our Works</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >About</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Our Team</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Vendor Dashboard</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Contacts</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Help Center</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link px-0"
                                                            href="#"
                                                            >Support</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="offcanvas-footer border-top"
                                            >
                                                <button
                                                    className="btn btn-outline-primary btn-sm w-100 me-2"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ai-log-in me-1"
                                                    ></i
                                                    >Sign In
                                                </button>
                                                <button
                                                    className="btn btn-primary btn-sm w-100"
                                                    type="button"
                                                >
                                                    <i
                                                        className="ai-user me-1"
                                                    ></i
                                                    >Sign Up
                                                </button>
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
                                        ><code className="lang-html">&lt;!-- Offcanvas --&gt;
&lt;div className=&quot;offcanvas offcanvas-start&quot; id=&quot;offcanvas&quot; tabindex=&quot;-1&quot;&gt;

  &lt;!-- Header --&gt;
  &lt;div className=&quot;offcanvas-header border-bottom&quot;&gt;
    &lt;h6 className=&quot;offcanvas-title&quot;&gt;Menu&lt;/h6&gt;
    &lt;button className=&quot;btn-close&quot; type=&quot;button&quot; data-bs-dismiss=&quot;offcanvas&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;

  &lt;!-- Body --&gt;
  &lt;div className=&quot;offcanvas-body&quot; data-simplebar&gt;
    &lt;ul className=&quot;nav flex-column&quot;&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0 active&quot; href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item dropdown&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;User Profile&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Services&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Our Works&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Our Team&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Vendor Dashboard&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Contacts&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Help Center&lt;/a&gt;&lt;/li&gt;
      &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link px-0&quot; href=&quot;#&quot;&gt;Support&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;

  &lt;!-- Footer --&gt;
  &lt;div className=&quot;offcanvas-footer border-top&quot;&gt;
    &lt;button className=&quot;btn btn-outline-primary btn-sm w-100 me-2&quot; type=&quot;button&quot;&gt;
      &lt;i className=&quot;ai-log-in me-1&quot;&gt;&lt;/i&gt;
      Sign In
    &lt;/button&gt;
    &lt;button className=&quot;btn btn-primary btn-sm w-100&quot; type=&quot;button&quot;&gt;
      &lt;i className=&quot;ai-user me-1&quot;&gt;&lt;/i&gt;
      Sign Up
    &lt;/button&gt;
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
                                        ><code className="lang-pug">// Offcanvas
.offcanvas.offcanvas-start(id=&quot;offcanvas&quot;, tabindex=&quot;-1&quot;)

  // Header
  .offcanvas-header.border-bottom
    h6.offcanvas-title Menu
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;offcanvas&quot;).btn-close

  // Body
  .offcanvas-body(data-simplebar)
    ul.nav.flex-column
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0.active
          | Home
      li.nav-item.dropdown
        a(href=&quot;#&quot;).nav-link.px-0
          | User Profile
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Services
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Our Works
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | About
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Our Team
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Vendor Dashboard
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Contacts
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Help Center
      li.nav-item
        a(href=&quot;#&quot;).nav-link.px-0
          | Support

  // Footer
  .offcanvas-footer.border-top
    button(type=&quot;button&quot;).btn.btn-outline-primary.btn-sm.w-100.me-2
      i.ai-log-in.me-1
      | Sign In
    button(type=&quot;button&quot;).btn.btn-primary.btn-sm.w-100
      i.ai-user.me-1
      | Sign Up
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Placement-->
                    <section className="pb-5 mb-md-2" id="offcanvas-placement">
                        <h2 className="h5 mb-3">Placement</h2>
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
                                            className="btn btn-outline-primary me-2 my-2"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasLeft"
                                        >
                                            Toggle left offcanvas
                                        </button>
                                        <button
                                            className="btn btn-outline-primary me-2 my-2"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight"
                                        >
                                            Toggle right offcanvas
                                        </button>
                                        <button
                                            className="btn btn-outline-primary my-2"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasBottom"
                                        >
                                            Toggle bottom offcanvas
                                        </button>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Offcanvas position: Left --&gt;

&lt;!-- Toogle button --&gt;
&lt;button className=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasLeft&quot;&gt;Toggle left offcanvas&lt;/button&gt;

&lt;!-- Offcanvas --&gt;
&lt;div className=&quot;offcanvas offcanvas-start&quot; id=&quot;offcanvasLeft&quot; tabindex=&quot;-1&quot;&gt;
  &lt;div className=&quot;offcanvas-header border-bottom&quot;&gt;
    &lt;h5 className=&quot;offcanvas-title&quot;&gt;Left offcanvas&lt;/h5&gt;
    &lt;button className=&quot;btn-close&quot; type=&quot;button&quot; data-bs-dismiss=&quot;offcanvas&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;offcanvas-body&quot; data-simplebar&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;


&lt;!-- Offcanvas position: Right --&gt;

&lt;!-- Toogle button --&gt;
&lt;button className=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasRight&quot;&gt;Toggle right offcanvas&lt;/button&gt;

&lt;!-- Offcanvas --&gt;
&lt;div className=&quot;offcanvas offcanvas-end&quot; id=&quot;offcanvasRight&quot; tabindex=&quot;-1&quot;&gt;
  &lt;div className=&quot;offcanvas-header border-bottom&quot;&gt;
    &lt;h5 className=&quot;offcanvas-title&quot;&gt;Right offcanvas&lt;/h5&gt;
    &lt;button className=&quot;btn-close&quot; type=&quot;button&quot; data-bs-dismiss=&quot;offcanvas&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;offcanvas-body&quot; data-simplebar&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;


&lt;!-- Offcanvas position: Bottom --&gt;

&lt;!-- Toogle button --&gt;
&lt;button className=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasBottom&quot;&gt;Toggle bottom offcanvas&lt;/button&gt;

&lt;!-- Offcanvas --&gt;
&lt;div className=&quot;offcanvas offcanvas-bottom&quot; id=&quot;offcanvasBottom&quot; tabindex=&quot;-1&quot;&gt;
  &lt;div className=&quot;offcanvas-header border-bottom&quot;&gt;
    &lt;h5 className=&quot;offcanvas-title&quot;&gt;Bottom offcanvas&lt;/h5&gt;
    &lt;button className=&quot;btn-close&quot; type=&quot;button&quot; data-bs-dismiss=&quot;offcanvas&quot;&gt;&lt;/button&gt;
  &lt;/div&gt;
  &lt;div className=&quot;offcanvas-body&quot; data-simplebar&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.&lt;/p&gt;
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
                                        ><code className="lang-pug">// Offcanvas position: Left

// Toogle button
button(type=&quot;button&quot;, data-bs-toggle=&quot;offcanvas&quot;, data-bs-target=&quot;#offcanvasLeft&quot;).btn.btn-outline-primary
  | Toggle left offcanvas

// Offcanvas
.offcanvas.offcanvas-start(id=&quot;offcanvasLeft&quot;, tabindex=&quot;-1&quot;)
  .offcanvas-header.border-bottom
    h5.offcanvas-title Left offcanvas
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;offcanvas&quot;).btn-close
  .offcanvas-body(data-simplebar)
    p.fs-sm Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.


// Offcanvas position: Right

// Toogle button
button(type=&quot;button&quot;, data-bs-toggle=&quot;offcanvas&quot;, data-bs-target=&quot;#offcanvasRight&quot;).btn.btn-outline-primary
  | Toggle right offcanvas

// Offcanvas
.offcanvas.offcanvas-end(id=&quot;offcanvasRight&quot;, tabindex=&quot;-1&quot;)
  .offcanvas-header.border-bottom
    h5.offcanvas-title Right offcanvas
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;offcanvas&quot;).btn-close
  .offcanvas-body(data-simplebar)
    p.fs-sm Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.


// Offcanvas position: Bottom

// Toogle button
button(type=&quot;button&quot;, data-bs-toggle=&quot;offcanvas&quot;, data-bs-target=&quot;#offcanvasBottom&quot;).btn.btn-outline-primary
  | Toggle bottom offcanvas

// Offcanvas
.offcanvas.offcanvas-bottom(id=&quot;offcanvasBottom&quot;, tabindex=&quot;-1&quot;)
  .offcanvas-header.border-bottom
    h5.offcanvas-title Bottom offcanvas
    button(type=&quot;button&quot;, data-bs-dismiss=&quot;offcanvas&quot;).btn-close
  .offcanvas-body(data-simplebar)
    p.fs-sm Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.</code></pre>
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
                                            href="#offcanvas-components"
                                            >Offcanvas components</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#offcanvas-placement"
                                            >Placement</a
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
