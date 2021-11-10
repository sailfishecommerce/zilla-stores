<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Navbar</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Navbar</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Responsive navigation header that includes
                                support for branding, navigation, and more.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/navbar/"
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
                    <section className="pb-5 mb-md-2" id="navbar-basic">
                        <h2 className="h5 mb-3">Basic example</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result1"
                                        role="tabpanel"
                                    >
                                        <header
                                            className="navbar navbar-expand-lg navbar-light shadow-sm px-3 rounded"
                                        >
                                            <a
                                                className="navbar-brand d-none d-lg-block order-lg-1"
                                                href="#"
                                                ><img
                                                    src="../img/logo-dark.png"
                                                    width="142"
                                                    alt="Cartzilla" /></a
                                            ><a
                                                className="navbar-brand d-lg-none me-2"
                                                href="#"
                                                ><img
                                                    src="../img/logo-icon.png"
                                                    width="74"
                                                    alt="Cartzilla"
                                            /></a>
                                            <div
                                                className="navbar-toolbar d-flex align-items-center order-lg-3"
                                            >
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navbarCollapse"
                                                >
                                                    <span
                                                        className="navbar-toggler-icon"
                                                    ></span></button
                                                ><a
                                                    className="navbar-tool"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-search"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-1 me-n1"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-user"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-3"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box bg-secondary"
                                                    >
                                                        <span
                                                            className="navbar-tool-label"
                                                            >4</span
                                                        ><i
                                                            className="navbar-tool-icon ci-cart"
                                                        ></i></div
                                                ></a>
                                            </div>
                                            <div
                                                className="collapse navbar-collapse me-auto order-lg-2"
                                                id="navbarCollapse"
                                            >
                                                <hr
                                                    className="d-lg-none my-3"
                                                />
                                                <ul className="navbar-nav">
                                                    <li
                                                        className="nav-item active"
                                                    >
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Home</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Link</a
                                                        >
                                                    </li>
                                                    <li
                                                        className="nav-item dropdown"
                                                    >
                                                        <a
                                                            className="nav-link dropdown-toggle"
                                                            href="#"
                                                            data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside"
                                                            >Dropdown</a
                                                        >
                                                        <ul
                                                            className="dropdown-menu"
                                                        >
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    >Action
                                                                    link</a
                                                                >
                                                            </li>
                                                            <li
                                                                className="dropdown"
                                                            >
                                                                <a
                                                                    className="dropdown-item dropdown-toggle"
                                                                    href="#"
                                                                    data-bs-toggle="dropdown"
                                                                    >Dropdown</a
                                                                >
                                                                <ul
                                                                    className="dropdown-menu"
                                                                >
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                            >Action
                                                                            link</a
                                                                        >
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                            >Another
                                                                            action</a
                                                                        >
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                            >Something
                                                                            else
                                                                            here</a
                                                                        >
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                            >Yet
                                                                            another
                                                                            link</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    >Another
                                                                    action</a
                                                                >
                                                            </li>
                                                            <li
                                                                className="dropdown-divider"
                                                            ></li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    >Something
                                                                    else here</a
                                                                >
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link disabled"
                                                            href="#"
                                                            tabindex="-1"
                                                            aria-disabled="true"
                                                            >Disabled</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </header>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Basic navbar --&gt;
&lt;header className=&quot;navbar navbar-expand-lg navbar-light shadow-sm&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;

    &lt;!-- Brand --&gt;
    &lt;a className=&quot;navbar-brand d-none d-lg-block order-lg-1&quot; href=&quot;#&quot;&gt;
      &lt;img width=&quot;142&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
    &lt;/a&gt;
    &lt;a className=&quot;navbar-brand d-lg-none me-2&quot; href=&quot;#&quot;&gt;
      &lt;img width=&quot;74&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
    &lt;/a&gt;

    &lt;!-- Toolbar --&gt;
    &lt;div className=&quot;navbar-toolbar d-flex align-items-center order-lg-3&quot;&gt;
      &lt;button className=&quot;navbar-toggler&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#navbarCollapse&quot;&gt;
        &lt;span className=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt;
      &lt;/button&gt;
      &lt;a className=&quot;navbar-tool&quot; href=&quot;#&quot;&gt;
        &lt;div className=&quot;navbar-tool-icon-box&quot;&gt;&lt;i className=&quot;navbar-tool-icon ci-search&quot;&gt;&lt;/i&gt;&lt;/div&gt;
      &lt;/a&gt;
      &lt;a className=&quot;navbar-tool ms-1 me-n1&quot; href=&quot;#&quot;&gt;
        &lt;div className=&quot;navbar-tool-icon-box&quot;&gt;
          &lt;i className=&quot;navbar-tool-icon ci-user&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/a&gt;
      &lt;a className=&quot;navbar-tool ms-3&quot; href=&quot;#&quot;&gt;
        &lt;div className=&quot;navbar-tool-icon-box bg-secondary&quot;&gt;
          &lt;span className=&quot;navbar-tool-label&quot;&gt;4&lt;/span&gt;
          &lt;i className=&quot;navbar-tool-icon ci-cart&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/a&gt;
    &lt;/div&gt;

    &lt;!-- Collapsible menu --&gt;
    &lt;div className=&quot;collapse navbar-collapse me-auto order-lg-2&quot; id=&quot;navbarCollapse&quot;&gt;
      &lt;hr className=&quot;d-lg-none my-3&quot;&gt;
      &lt;ul className=&quot;navbar-nav&quot;&gt;
        &lt;li className=&quot;nav-item active&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;&lt;/li&gt;
        &lt;li className=&quot;nav-item dropdown&quot;&gt;
          &lt;a className=&quot;nav-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;outside&quot;&gt;Dropdown&lt;/a&gt;
          &lt;ul className=&quot;dropdown-menu&quot;&gt;
            &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action link&lt;/a&gt;&lt;/li&gt;
            &lt;li className=&quot;dropdown&quot;&gt;
              &lt;a className=&quot;dropdown-item dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Dropdown&lt;/a&gt;
              &lt;ul className=&quot;dropdown-menu&quot;&gt;
                &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action link&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Yet another link&lt;/a&gt;&lt;/li&gt;
              &lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
            &lt;li className=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li className=&quot;nav-item&quot;&gt;
          &lt;a className=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Basic navbar
header.navbar.navbar-expand-lg.navbar-light.shadow-sm
  .container

    // Brand
    a(href=&quot;#&quot;).navbar-brand.d-none.d-lg-block.order-lg-1
      img(src=&quot;path-to-logo&quot; width=&quot;142&quot; alt=&quot;Cartzilla&quot;)
    a(href=&quot;#&quot;).navbar-brand.d-lg-none.me-2
      img(src=&quot;path-to-logo&quot; width=&quot;74&quot; alt=&quot;Cartzilla&quot;)

    // Toolbar
    .navbar-toolbar.d-flex.align-items-center.order-lg-3
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#navbarCollapse&quot;).navbar-toggler
        span.navbar-toggler-icon
      a(href=&quot;#&quot;).navbar-tool
        .navbar-tool-icon-box: i.navbar-tool-icon.ci-search
      a(href=&quot;#&quot;).navbar-tool.ms-1.me-n1
        .navbar-tool-icon-box: i.navbar-tool-icon.ci-user
      a(href=&quot;#&quot;).navbar-tool.ms-3
        .navbar-tool-icon-box.bg-secondary
          span.navbar-tool-label 4
          i.navbar-tool-icon.ci-cart

    // Collapsible menu
    #navbarCollapse.collapse.navbar-collapse.me-auto.order-lg-2
      hr.d-lg-none.my-3
      ul.navbar-nav
        li.nav-item.active
          a.nav-link(href=&quot;#&quot;) Home
        li.nav-item
          a.nav-link(href=&quot;#&quot;) Link
        li.nav-item.dropdown
          a.nav-link.dropdown-toggle(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;outside&quot;) Dropdown
          ul.dropdown-menu
            li
              a.dropdown-item(href=&quot;#&quot;) Action link
            li.dropdown
              a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).dropdown-item.dropdown-toggle
                | Dropdown
              ul.dropdown-menu
                li
                  a.dropdown-item(href=&quot;#&quot;) Action link
                li
                  a.dropdown-item(href=&quot;#&quot;) Another action
                li
                  a.dropdown-item(href=&quot;#&quot;) Something else here
                li
                  a.dropdown-item(href=&quot;#&quot;) Yet another link
            li
              a.dropdown-item(href=&quot;#&quot;) Another action
            li.dropdown-divider
            li
              a.dropdown-item(href=&quot;#&quot;) Something else here
        li.nav-item
          a.nav-link.disabled(href=&quot;#&quot;, tabindex=&quot;-1&quot;, aria-disabled=&quot;true&quot;) Disabled
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Color schemes-->
                    <section className="pb-5 mb-md-2" id="navbar-color-shemes">
                        <h2 className="h5 mb-3">Color schemes</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result2"
                                        role="tabpanel"
                                    >
                                        <header
                                            className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 px-3 rounded"
                                        >
                                            <a
                                                className="navbar-brand d-none d-lg-block me-3 order-lg-1"
                                                href="#"
                                                ><img
                                                    src="../img/logo-light.png"
                                                    width="142"
                                                    alt="Cartzilla" /></a
                                            ><a
                                                className="navbar-brand d-lg-none me-2"
                                                href="#"
                                                ><img
                                                    src="../img/logo-icon-light.png"
                                                    width="74"
                                                    alt="Cartzilla"
                                            /></a>
                                            <div
                                                className="navbar-toolbar d-flex align-items-center order-lg-3"
                                            >
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navbarDarkCollapse"
                                                >
                                                    <span
                                                        className="navbar-toggler-icon"
                                                    ></span></button
                                                ><a
                                                    className="navbar-tool"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-search"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-1 me-n1"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-user"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-3"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box bg-secondary"
                                                    >
                                                        <span
                                                            className="navbar-tool-label"
                                                            >4</span
                                                        ><i
                                                            className="navbar-tool-icon ci-cart"
                                                        ></i></div
                                                ></a>
                                            </div>
                                            <div
                                                className="collapse navbar-collapse me-auto order-lg-2"
                                                id="navbarDarkCollapse"
                                            >
                                                <hr
                                                    className="hr-light d-lg-none my-3"
                                                />
                                                <ul className="navbar-nav">
                                                    <li
                                                        className="nav-item active"
                                                    >
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Home</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Features</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Pricing</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >About</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </header>
                                        <header
                                            className="navbar navbar-expand-lg navbar-dark bg-accent mb-4 px-3 rounded"
                                        >
                                            <a
                                                className="navbar-brand d-none d-lg-block me-3 order-lg-1"
                                                href="#"
                                                ><img
                                                    src="../img/logo-light.png"
                                                    width="142"
                                                    alt="Cartzilla" /></a
                                            ><a
                                                className="navbar-brand d-lg-none me-2"
                                                href="#"
                                                ><img
                                                    src="../img/logo-icon-light.png"
                                                    width="74"
                                                    alt="Cartzilla"
                                            /></a>
                                            <div
                                                className="navbar-toolbar d-flex align-items-center order-lg-3"
                                            >
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navbarAccentCollapse"
                                                >
                                                    <span
                                                        className="navbar-toggler-icon"
                                                    ></span></button
                                                ><a
                                                    className="navbar-tool"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-search"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-1 me-n1"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-user"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-3"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box bg-secondary"
                                                    >
                                                        <span
                                                            className="navbar-tool-label"
                                                            >4</span
                                                        ><i
                                                            className="navbar-tool-icon ci-cart"
                                                        ></i></div
                                                ></a>
                                            </div>
                                            <div
                                                className="collapse navbar-collapse me-auto order-lg-2"
                                                id="navbarAccentCollapse"
                                            >
                                                <hr
                                                    className="hr-light d-lg-none my-3"
                                                />
                                                <ul className="navbar-nav">
                                                    <li
                                                        className="nav-item active"
                                                    >
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Home</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Features</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Pricing</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >About</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </header>
                                        <header
                                            className="navbar navbar-expand-lg navbar-light px-3 rounded"
                                            style="background-color: #f2f5fc"
                                        >
                                            <a
                                                className="navbar-brand d-none d-lg-block me-3 order-lg-1"
                                                href="#"
                                                ><img
                                                    src="../img/logo-dark.png"
                                                    width="142"
                                                    alt="Cartzilla" /></a
                                            ><a
                                                className="navbar-brand d-lg-none me-2"
                                                href="#"
                                                ><img
                                                    src="../img/logo-icon.png"
                                                    width="74"
                                                    alt="Cartzilla"
                                            /></a>
                                            <div
                                                className="navbar-toolbar d-flex align-items-center order-lg-3"
                                            >
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#navbarCustomCollapse"
                                                >
                                                    <span
                                                        className="navbar-toggler-icon"
                                                    ></span></button
                                                ><a
                                                    className="navbar-tool"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-search"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-1 me-n1"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box"
                                                    >
                                                        <i
                                                            className="navbar-tool-icon ci-user"
                                                        ></i></div></a
                                                ><a
                                                    className="navbar-tool ms-3"
                                                    href="#"
                                                >
                                                    <div
                                                        className="navbar-tool-icon-box bg-secondary"
                                                    >
                                                        <span
                                                            className="navbar-tool-label"
                                                            >4</span
                                                        ><i
                                                            className="navbar-tool-icon ci-cart"
                                                        ></i></div
                                                ></a>
                                            </div>
                                            <div
                                                className="collapse navbar-collapse me-auto order-lg-2"
                                                id="navbarCustomCollapse"
                                            >
                                                <hr
                                                    className="d-lg-none my-3"
                                                />
                                                <ul className="navbar-nav">
                                                    <li
                                                        className="nav-item active"
                                                    >
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Home</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Features</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >Pricing</a
                                                        >
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="#"
                                                            >About</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                        </header>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Dark navbar --&gt;
&lt;header className=&quot;navbar navbar-expand-lg navbar-dark bg-dark&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;
    &lt;!-- Navbar content --&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;!-- Accent navbar --&gt;
&lt;header className=&quot;navbar navbar-expand-lg navbar-dark bg-accent&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;
    &lt;!-- Navbar content --&gt;
  &lt;/div&gt;
&lt;/header&gt;

&lt;!-- Custom color navbar --&gt;
&lt;header className=&quot;navbar navbar-expand-lg navbar-light&quot; style=&quot;background-color: #f2f5fc;&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;
    &lt;!-- Navbar content --&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Dark navbar
header.navbar.navbar-expand-lg.navbar-dark.bg-dark
  .container
    //- Navbar content

// Accent navbar
header.navbar.navbar-expand-lg.navbar-accent.bg-dark
  .container
    //- Navbar content

// Custom color navbar
header.navbar.navbar-expand-lg.bg-light(style=&quot;background-color: #f2f5fc;&quot;)
  .container
    //- Navbar content
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Topbar-->
                    <section className="pb-5 mb-md-2" id="navbar-topbar">
                        <h2 className="h5 mb-3">Topbar</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result3"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="topbar topbar-light bg-secondary mb-4 px-3 rounded"
                                        >
                                            <div
                                                className="topbar-text dropdown d-md-none"
                                            >
                                                <a
                                                    className="topbar-link dropdown-toggle"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    >Useful links</a
                                                >
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="tel:00331697720"
                                                            ><i
                                                                className="ci-support text-muted me-2"
                                                            ></i
                                                            >(00) 33 169 7720</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            ><i
                                                                className="ci-location text-muted me-2"
                                                            ></i
                                                            >Order tracking</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="topbar-text text-nowrap d-none d-md-inline-block"
                                            >
                                                <i className="ci-support"></i
                                                ><span
                                                    className="text-muted me-1"
                                                    >Support</span
                                                ><a
                                                    className="topbar-link"
                                                    href="tel:00331697720"
                                                    >(00) 33 169 7720</a
                                                >
                                            </div>
                                            <div
                                                className="topbar-text d-none d-md-inline-block"
                                            >
                                                Free shipping for order over
                                                $200
                                            </div>
                                            <div className="ms-3 text-nowrap">
                                                <a
                                                    className="topbar-link me-4 d-none d-md-inline-block"
                                                    href="#"
                                                    ><i
                                                        className="ci-location"
                                                    ></i
                                                    >Order tracking</a
                                                >
                                                <div
                                                    className="topbar-text dropdown disable-autohide"
                                                >
                                                    <a
                                                        className="topbar-link dropdown-toggle"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        ><img
                                                            className="me-2"
                                                            src="../img/flags/en.png"
                                                            width="20"
                                                            alt="English"
                                                        />Eng / $</a
                                                    >
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end"
                                                    >
                                                        <li
                                                            className="dropdown-item"
                                                        >
                                                            <select
                                                                className="form-select form-select-sm"
                                                            >
                                                                <option
                                                                    value="usd"
                                                                >
                                                                    $ USD
                                                                </option>
                                                                <option
                                                                    value="eur"
                                                                >
                                                                    € EUR
                                                                </option>
                                                                <option
                                                                    value="ukp"
                                                                >
                                                                    £ UKP
                                                                </option>
                                                                <option
                                                                    value="jpy"
                                                                >
                                                                    ¥ JPY
                                                                </option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item pb-1"
                                                                href="#"
                                                                ><img
                                                                    className="me-2"
                                                                    src="../img/flags/fr.png"
                                                                    width="20"
                                                                    alt="Français"
                                                                />Français</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item pb-1"
                                                                href="#"
                                                                ><img
                                                                    className="me-2"
                                                                    src="../img/flags/de.png"
                                                                    width="20"
                                                                    alt="Deutsch"
                                                                />Deutsch</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                ><img
                                                                    className="me-2"
                                                                    src="../img/flags/it.png"
                                                                    width="20"
                                                                    alt="Italiano"
                                                                />Italiano</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="topbar topbar-dark bg-dark px-3 rounded"
                                        >
                                            <div
                                                className="topbar-text dropdown d-md-none"
                                            >
                                                <a
                                                    className="topbar-link dropdown-toggle"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    >Useful links</a
                                                >
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="tel:00331697720"
                                                            ><i
                                                                className="ci-support text-muted me-2"
                                                            ></i
                                                            >(00) 33 169 7720</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            ><i
                                                                className="ci-location text-muted me-2"
                                                            ></i
                                                            >Order tracking</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="topbar-text text-nowrap d-none d-md-inline-block"
                                            >
                                                <i className="ci-support"></i
                                                ><span
                                                    className="text-muted me-1"
                                                    >Support</span
                                                ><a
                                                    className="topbar-link"
                                                    href="tel:00331697720"
                                                    >(00) 33 169 7720</a
                                                >
                                            </div>
                                            <div
                                                className="topbar-text d-none d-md-inline-block"
                                            >
                                                Free shipping for order over
                                                $200
                                            </div>
                                            <div className="ms-3 text-nowrap">
                                                <a
                                                    className="topbar-link me-4 d-none d-md-inline-block"
                                                    href="#"
                                                    ><i
                                                        className="ci-location"
                                                    ></i
                                                    >Order tracking</a
                                                >
                                                <div
                                                    className="topbar-text dropdown disable-autohide"
                                                >
                                                    <a
                                                        className="topbar-link dropdown-toggle"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        ><img
                                                            className="me-2"
                                                            src="../img/flags/en.png"
                                                            width="20"
                                                            alt="English"
                                                        />Eng / $</a
                                                    >
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end"
                                                    >
                                                        <li
                                                            className="dropdown-item"
                                                        >
                                                            <select
                                                                className="form-select form-select-sm"
                                                            >
                                                                <option
                                                                    value="usd"
                                                                >
                                                                    $ USD
                                                                </option>
                                                                <option
                                                                    value="eur"
                                                                >
                                                                    € EUR
                                                                </option>
                                                                <option
                                                                    value="ukp"
                                                                >
                                                                    £ UKP
                                                                </option>
                                                                <option
                                                                    value="jpy"
                                                                >
                                                                    ¥ JPY
                                                                </option>
                                                            </select>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item pb-1"
                                                                href="#"
                                                                ><img
                                                                    className="me-2"
                                                                    src="../img/flags/fr.png"
                                                                    width="20"
                                                                    alt="Français"
                                                                />Français</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item pb-1"
                                                                href="#"
                                                                ><img
                                                                    className="me-2"
                                                                    src="../img/flags/de.png"
                                                                    width="20"
                                                                    alt="Deutsch"
                                                                />Deutsch</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                ><img
                                                                    className="me-2"
                                                                    src="../img/flags/it.png"
                                                                    width="20"
                                                                    alt="Italiano"
                                                                />Italiano</a
                                                            >
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
                                        ><code className="lang-html">&lt;!-- Light topbar --&gt;
&lt;div className=&quot;topbar topbar-light bg-secondary&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;
    &lt;div className=&quot;topbar-text dropdown d-md-none&quot;&gt;
      &lt;a className=&quot;topbar-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Useful links&lt;/a&gt;
      &lt;ul className=&quot;dropdown-menu&quot;&gt;
        &lt;li&gt;
          &lt;a className=&quot;dropdown-item&quot; href=&quot;tel:00331697720&quot;&gt;
            &lt;i className=&quot;ci-support text-muted me-2&quot;&gt;&lt;/i&gt;
            (00) 33 169 7720
          &lt;/a&gt;
        &lt;/li&gt;
        &lt;li&gt;
          &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;
            &lt;i className=&quot;ci-location text-muted me-2&quot;&gt;&lt;/i&gt;
            Order tracking
          &lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div className=&quot;topbar-text text-nowrap d-none d-md-inline-block&quot;&gt;
      &lt;i className=&quot;ci-support&quot;&gt;&lt;/i&gt;
      &lt;span className=&quot;text-muted me-1&quot;&gt;Support&lt;/span&gt;
      &lt;a className=&quot;topbar-link&quot; href=&quot;tel:00331697720&quot;&gt;(00) 33 169 7720&lt;/a&gt;
    &lt;/div&gt;
    &lt;div className=&quot;topbar-text d-none d-md-inline-block&quot;&gt;Free shipping for order over $200&lt;/div&gt;
    &lt;div className=&quot;ms-3 text-nowrap&quot;&gt;
      &lt;a className=&quot;topbar-link me-4 d-none d-md-inline-block&quot; href=&quot;#&quot;&gt;
        &lt;i className=&quot;ci-location&quot;&gt;&lt;/i&gt;
        Order tracking
      &lt;/a&gt;
      &lt;div className=&quot;topbar-text dropdown disable-autohide&quot;&gt;
        &lt;a className=&quot;topbar-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;
          &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;English&quot;/&gt;
          Eng / $
        &lt;/a&gt;
        &lt;ul className=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
          &lt;li className=&quot;dropdown-item&quot;&gt;
            &lt;select className=&quot;form-select form-select-sm&quot;&gt;
              &lt;option value=&quot;usd&quot;&gt;$ USD&lt;/option&gt;
              &lt;option value=&quot;eur&quot;&gt;€ EUR&lt;/option&gt;
              &lt;option value=&quot;ukp&quot;&gt;£ UKP&lt;/option&gt;
              &lt;option value=&quot;jpy&quot;&gt;¥ JPY&lt;/option&gt;
            &lt;/select&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
              &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Français&quot;/&gt;
              Français
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
              &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Deutsch&quot;/&gt;
              Deutsch
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;
            &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Italiano&quot;/&gt;
            Italiano
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dark topbar --&gt;
&lt;div className=&quot;topbar topbar-dark bg-dark&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;
     &lt;!-- Topbar content --&gt;
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
                                        ><code className="lang-pug">// Light topbar
.topbar.topbar-light.bg-secondary
  .container
    .topbar-text.dropdown.d-md-none
      a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).topbar-link.dropdown-toggle Useful links
      ul.dropdown-menu
        li
          a(href=&quot;tel:00331697720&quot;).dropdown-item
            i.ci-support.text-muted.me-2
            | (00) 33 169 7720
        li
          a(href=&quot;#&quot;).dropdown-item
            i.ci-location.text-muted.me-2
            | Order tracking
    .topbar-text.text-nowrap.d-none.d-md-inline-block
      i.ci-support
      span.text-muted.me-1 Support
      a.topbar-link(href=&quot;tel:00331697720&quot;) (00) 33 169 7720
    .topbar-text.d-none.d-md-inline-block Free shipping for order over $200
    .ms-3.text-nowrap
      a(href=&quot;#&quot;).topbar-link.me-4.d-none.d-md-inline-block
        i.ci-location
        | Order tracking
      .topbar-text.dropdown.disable-autohide
        a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).topbar-link.dropdown-toggle
          img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;English&quot;).me-2
          | Eng / $
        ul.dropdown-menu.dropdown-menu-end
          li.dropdown-item
            select.form-select.form-select-sm
              option(value=&quot;usd&quot;) $ USD
              option(value=&quot;eur&quot;) € EUR
              option(value=&quot;ukp&quot;) £ UKP
              option(value=&quot;jpy&quot;) ¥ JPY
          li
            a(href=&quot;#&quot;).dropdown-item.pb-1
              img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;Français&quot;).me-2
              | Français
          li
            a(href=&quot;#&quot;).dropdown-item.pb-1
              img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;Deutsch&quot;).me-2
              | Deutsch
          li
            a(href=&quot;#&quot;).dropdown-item
              img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;Italiano&quot;).me-2
              | Italiano

// Dark topbar
.topbar.topbar-dark.bg-dark
  .container
    //- Topbar content
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Topbar + Navbar-->
                    <section className="pb-5 mb-md-2" id="navbar-twolevel">
                        <h2 className="h5 mb-3">Topbar + Navbar</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result4"
                                        role="tabpanel"
                                    >
                                        <header className="shadow-sm">
                                            <div
                                                className="topbar topbar-dark bg-dark px-3"
                                            >
                                                <div
                                                    className="topbar-text dropdown d-md-none"
                                                >
                                                    <a
                                                        className="topbar-link dropdown-toggle"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        >Useful links</a
                                                    >
                                                    <ul
                                                        className="dropdown-menu"
                                                    >
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="tel:00331697720"
                                                                ><i
                                                                    className="ci-support text-muted me-2"
                                                                ></i
                                                                >(00) 33 169
                                                                7720</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                ><i
                                                                    className="ci-location text-muted me-2"
                                                                ></i
                                                                >Order
                                                                tracking</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="topbar-text text-nowrap d-none d-md-inline-block"
                                                >
                                                    <i
                                                        className="ci-support"
                                                    ></i
                                                    ><span
                                                        className="text-muted me-1"
                                                        >Support</span
                                                    ><a
                                                        className="topbar-link"
                                                        href="tel:00331697720"
                                                        >(00) 33 169 7720</a
                                                    >
                                                </div>
                                                <div
                                                    className="topbar-text d-none d-md-inline-block"
                                                >
                                                    Free shipping for order over
                                                    $200
                                                </div>
                                                <div
                                                    className="ms-3 text-nowrap"
                                                >
                                                    <a
                                                        className="topbar-link me-4 d-none d-md-inline-block"
                                                        href="#"
                                                        ><i
                                                            className="ci-location"
                                                        ></i
                                                        >Order tracking</a
                                                    >
                                                    <div
                                                        className="topbar-text dropdown disable-autohide"
                                                    >
                                                        <a
                                                            className="topbar-link dropdown-toggle"
                                                            href="#"
                                                            data-bs-toggle="dropdown"
                                                            ><img
                                                                className="me-2"
                                                                src="../img/flags/en.png"
                                                                width="20"
                                                                alt="English"
                                                            />Eng / $</a
                                                        >
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end"
                                                        >
                                                            <li
                                                                className="dropdown-item"
                                                            >
                                                                <select
                                                                    className="form-select form-select-sm"
                                                                >
                                                                    <option
                                                                        value="usd"
                                                                    >
                                                                        $ USD
                                                                    </option>
                                                                    <option
                                                                        value="eur"
                                                                    >
                                                                        € EUR
                                                                    </option>
                                                                    <option
                                                                        value="ukp"
                                                                    >
                                                                        £ UKP
                                                                    </option>
                                                                    <option
                                                                        value="jpy"
                                                                    >
                                                                        ¥ JPY
                                                                    </option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item pb-1"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/fr.png"
                                                                        width="20"
                                                                        alt="Français"
                                                                    />Français</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item pb-1"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/de.png"
                                                                        width="20"
                                                                        alt="Deutsch"
                                                                    />Deutsch</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/it.png"
                                                                        width="20"
                                                                        alt="Italiano"
                                                                    />Italiano</a
                                                                >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="navbar navbar-expand-lg navbar-light px-3 rounded"
                                            >
                                                <a
                                                    className="navbar-brand d-none d-lg-block me-3 order-lg-1"
                                                    href="#"
                                                    ><img
                                                        src="../img/logo-dark.png"
                                                        width="142"
                                                        alt="Cartzilla" /></a
                                                ><a
                                                    className="navbar-brand d-lg-none me-2"
                                                    href="#"
                                                    ><img
                                                        src="../img/logo-icon.png"
                                                        width="74"
                                                        alt="Cartzilla"
                                                /></a>
                                                <div
                                                    className="navbar-toolbar d-flex align-items-center order-lg-3"
                                                >
                                                    <button
                                                        className="navbar-toggler"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapse2"
                                                    >
                                                        <span
                                                            className="navbar-toggler-icon"
                                                        ></span></button
                                                    ><a
                                                        className="navbar-tool"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box"
                                                        >
                                                            <i
                                                                className="navbar-tool-icon ci-search"
                                                            ></i></div></a
                                                    ><a
                                                        className="navbar-tool ms-1 me-n1"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box"
                                                        >
                                                            <i
                                                                className="navbar-tool-icon ci-user"
                                                            ></i></div></a
                                                    ><a
                                                        className="navbar-tool ms-3"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box bg-secondary"
                                                        >
                                                            <span
                                                                className="navbar-tool-label"
                                                                >4</span
                                                            ><i
                                                                className="navbar-tool-icon ci-cart"
                                                            ></i></div
                                                    ></a>
                                                </div>
                                                <div
                                                    className="collapse navbar-collapse me-auto order-lg-2"
                                                    id="navbarCollapse2"
                                                >
                                                    <hr
                                                        className="d-lg-none my-3"
                                                    />
                                                    <ul className="navbar-nav">
                                                        <li
                                                            className="nav-item active"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Home</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Link</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item dropdown"
                                                        >
                                                            <a
                                                                className="nav-link dropdown-toggle"
                                                                href="#"
                                                                data-bs-toggle="dropdown"
                                                                data-bs-auto-close="outside"
                                                                >Dropdown</a
                                                            >
                                                            <ul
                                                                className="dropdown-menu"
                                                            >
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        >Action
                                                                        link</a
                                                                    >
                                                                </li>
                                                                <li
                                                                    className="dropdown"
                                                                >
                                                                    <a
                                                                        className="dropdown-item dropdown-toggle"
                                                                        href="#"
                                                                        data-bs-toggle="dropdown"
                                                                        >Dropdown</a
                                                                    >
                                                                    <ul
                                                                        className="dropdown-menu"
                                                                    >
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Action
                                                                                link</a
                                                                            >
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Another
                                                                                action</a
                                                                            >
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Something
                                                                                else
                                                                                here</a
                                                                            >
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Yet
                                                                                another
                                                                                link</a
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        >Another
                                                                        action</a
                                                                    >
                                                                </li>
                                                                <li
                                                                    className="dropdown-divider"
                                                                ></li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        >Something
                                                                        else
                                                                        here</a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link disabled"
                                                                href="#"
                                                                tabindex="-1"
                                                                aria-disabled="true"
                                                                >Disabled</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Topbar + Navbar --&gt;
&lt;header&gt;
  &lt;div className=&quot;topbar topbar-dark bg-dark&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;!-- Topbar content --&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div className=&quot;navbar navbar-expand-lg navbar-light shadow-sm&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;!-- Navbar content --&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Topbar + Navbar
header.shadow-sm
  .topbar.topbar-dark.bg-dark
    .container
      //- Topbar content

  .navbar.navbar-expand-lg.navbar-light
    .container
      //- Navbar content
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Multilevel light navbar-->
                    <section
                        className="pb-5 mb-md-2"
                        id="navbar-multilevel-light"
                    >
                        <h2 className="h5 mb-3">Multilevel light navbar</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result5"
                                        role="tabpanel"
                                    >
                                        <header className="shadow-sm">
                                            <div
                                                className="topbar topbar-dark bg-dark px-3"
                                            >
                                                <div
                                                    className="topbar-text dropdown d-md-none"
                                                >
                                                    <a
                                                        className="topbar-link dropdown-toggle"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        >Useful links</a
                                                    >
                                                    <ul
                                                        className="dropdown-menu"
                                                    >
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="tel:00331697720"
                                                                ><i
                                                                    className="ci-support text-muted me-2"
                                                                ></i
                                                                >(00) 33 169
                                                                7720</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                ><i
                                                                    className="ci-location text-muted me-2"
                                                                ></i
                                                                >Order
                                                                tracking</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="topbar-text text-nowrap d-none d-md-inline-block"
                                                >
                                                    <i
                                                        className="ci-support"
                                                    ></i
                                                    ><span
                                                        className="text-muted me-1"
                                                        >Support</span
                                                    ><a
                                                        className="topbar-link"
                                                        href="tel:00331697720"
                                                        >(00) 33 169 7720</a
                                                    >
                                                </div>
                                                <div
                                                    className="topbar-text d-none d-md-inline-block"
                                                >
                                                    Free shipping for order over
                                                    $200
                                                </div>
                                                <div
                                                    className="ms-3 text-nowrap"
                                                >
                                                    <a
                                                        className="topbar-link me-4 d-none d-md-inline-block"
                                                        href="#"
                                                        ><i
                                                            className="ci-location"
                                                        ></i
                                                        >Order tracking</a
                                                    >
                                                    <div
                                                        className="topbar-text dropdown disable-autohide"
                                                    >
                                                        <a
                                                            className="topbar-link dropdown-toggle"
                                                            href="#"
                                                            data-bs-toggle="dropdown"
                                                            ><img
                                                                className="me-2"
                                                                src="../img/flags/en.png"
                                                                width="20"
                                                                alt="English"
                                                            />Eng / $</a
                                                        >
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end"
                                                        >
                                                            <li
                                                                className="dropdown-item"
                                                            >
                                                                <select
                                                                    className="form-select form-select-sm"
                                                                >
                                                                    <option
                                                                        value="usd"
                                                                    >
                                                                        $ USD
                                                                    </option>
                                                                    <option
                                                                        value="eur"
                                                                    >
                                                                        € EUR
                                                                    </option>
                                                                    <option
                                                                        value="ukp"
                                                                    >
                                                                        £ UKP
                                                                    </option>
                                                                    <option
                                                                        value="jpy"
                                                                    >
                                                                        ¥ JPY
                                                                    </option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item pb-1"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/fr.png"
                                                                        width="20"
                                                                        alt="Français"
                                                                    />Français</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item pb-1"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/de.png"
                                                                        width="20"
                                                                        alt="Deutsch"
                                                                    />Deutsch</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/it.png"
                                                                        width="20"
                                                                        alt="Italiano"
                                                                    />Italiano</a
                                                                >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="navbar navbar-expand-lg navbar-light bg-light px-3"
                                            >
                                                <a
                                                    className="navbar-brand d-none d-lg-block me-3 flex-shrink-0"
                                                    href="#"
                                                    ><img
                                                        src="../img/logo-dark.png"
                                                        width="142"
                                                        alt="Cartzilla" /></a
                                                ><a
                                                    className="navbar-brand d-lg-none me-2"
                                                    href="#"
                                                    ><img
                                                        src="../img/logo-icon.png"
                                                        width="74"
                                                        alt="Cartzilla"
                                                /></a>
                                                <div
                                                    className="input-group d-none d-lg-flex flex-nowrap mx-4"
                                                >
                                                    <input
                                                        className="form-control rounded-end pe-5"
                                                        type="text"
                                                        placeholder="Search for products"
                                                    /><i
                                                        className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"
                                                    ></i>
                                                </div>
                                                <div
                                                    className="navbar-toolbar d-flex align-items-center"
                                                >
                                                    <button
                                                        className="navbar-toggler"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapse3"
                                                    >
                                                        <span
                                                            className="navbar-toggler-icon"
                                                        ></span></button
                                                    ><a
                                                        className="navbar-tool d-lg-none"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box"
                                                        >
                                                            <i
                                                                className="navbar-tool-icon ci-search"
                                                            ></i></div></a
                                                    ><a
                                                        className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box"
                                                        >
                                                            <i
                                                                className="navbar-tool-icon ci-user"
                                                            ></i>
                                                        </div>
                                                        <div
                                                            className="navbar-tool-text ms-n2"
                                                        >
                                                            <small
                                                                >Hello, Sign
                                                                in</small
                                                            >My Account
                                                        </div></a
                                                    ><a
                                                        className="navbar-tool ms-3"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box bg-secondary"
                                                        >
                                                            <span
                                                                className="navbar-tool-label"
                                                                >4</span
                                                            ><i
                                                                className="navbar-tool-icon ci-cart"
                                                            ></i>
                                                        </div>
                                                        <div
                                                            className="navbar-tool-text"
                                                        >
                                                            <small
                                                                >My Cart</small
                                                            >$265.00
                                                        </div></a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="navbar navbar-expand-lg navbar-light bg-light mt-n2 pt-0 pb-2 px-3 px-lg-0"
                                            >
                                                <div
                                                    className="collapse navbar-collapse"
                                                    id="navbarCollapse3"
                                                >
                                                    <hr
                                                        className="d-lg-none my-3"
                                                    />
                                                    <ul
                                                        className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2"
                                                    >
                                                        <li
                                                            className="nav-item dropdown"
                                                        >
                                                            <a
                                                                className="nav-link dropdown-toggle"
                                                                href="#"
                                                                ><i
                                                                    className="ci-view-grid me-2"
                                                                ></i
                                                                >Departments</a
                                                            >
                                                        </li>
                                                    </ul>
                                                    <ul className="navbar-nav">
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Home</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Shop</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Pages</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Blog</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Components</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Multilevel light navbar --&gt;
&lt;header className=&quot;shadow-sm&quot;&gt;
  &lt;div className=&quot;topbar topbar-dark bg-dark&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;div className=&quot;topbar-text dropdown d-md-none&quot;&gt;
        &lt;a className=&quot;topbar-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Useful links&lt;/a&gt;
        &lt;ul className=&quot;dropdown-menu&quot;&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item&quot; href=&quot;tel:00331697720&quot;&gt;
              &lt;i className=&quot;ci-support text-muted me-2&quot;&gt;&lt;/i&gt;
              (00) 33 169 7720
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;
              &lt;i className=&quot;ci-location text-muted me-2&quot;&gt;&lt;/i&gt;
              Order tracking
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div className=&quot;topbar-text text-nowrap d-none d-md-inline-block&quot;&gt;
        &lt;i className=&quot;ci-support&quot;&gt;&lt;/i&gt;
        &lt;span className=&quot;text-muted me-1&quot;&gt;Support&lt;/span&gt;
        &lt;a className=&quot;topbar-link&quot; href=&quot;tel:00331697720&quot;&gt;(00) 33 169 7720&lt;/a&gt;
      &lt;/div&gt;
      &lt;div className=&quot;topbar-text d-none d-md-inline-block&quot;&gt;Free shipping for order over $200&lt;/div&gt;
      &lt;div className=&quot;ms-3 text-nowrap&quot;&gt;
        &lt;a className=&quot;topbar-link me-4 d-none d-md-inline-block&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-location&quot;&gt;&lt;/i&gt;
          Order tracking
        &lt;/a&gt;
        &lt;div className=&quot;topbar-text dropdown disable-autohide&quot;&gt;
          &lt;a className=&quot;topbar-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;
            &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;English&quot;/&gt;
            Eng / $
          &lt;/a&gt;
          &lt;ul className=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
            &lt;li className=&quot;dropdown-item&quot;&gt;
              &lt;select className=&quot;form-select form-select-sm&quot;&gt;
                &lt;option value=&quot;usd&quot;&gt;$ USD&lt;/option&gt;
                &lt;option value=&quot;eur&quot;&gt;€ EUR&lt;/option&gt;
                &lt;option value=&quot;ukp&quot;&gt;£ UKP&lt;/option&gt;
                &lt;option value=&quot;jpy&quot;&gt;¥ JPY&lt;/option&gt;
              &lt;/select&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
                &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Français&quot;/&gt;
                Français
              &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
                &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Deutsch&quot;/&gt;
                Deutsch
              &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
                &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Italiano&quot;/&gt;
                Italiano
              &lt;/a&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div className=&quot;navbar navbar-expand-lg navbar-light bg-light&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;a className=&quot;navbar-brand d-none d-lg-block me-3 flex-shrink-0&quot; href=&quot;#&quot;&gt;
        &lt;img width=&quot;142&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
      &lt;/a&gt;
      &lt;a className=&quot;navbar-brand d-lg-none me-2&quot; href=&quot;#&quot;&gt;
        &lt;img width=&quot;74&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
      &lt;/a&gt;
      &lt;div className=&quot;input-group d-none d-lg-flex flex-nowrap mx-4&quot;&gt;
        &lt;input className=&quot;form-control pe-5&quot; type=&quot;text&quot; placeholder=&quot;Search for products&quot;&gt;
        &lt;i className=&quot;ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
      &lt;div className=&quot;navbar-toolbar d-flex align-items-center&quot;&gt;
        &lt;button className=&quot;navbar-toggler&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#navbarCollapse&quot;&gt;
          &lt;span className=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;a className=&quot;navbar-tool d-lg-none&quot; href=&quot;#&quot;&gt;
          &lt;div className=&quot;navbar-tool-icon-box&quot;&gt;
            &lt;i className=&quot;navbar-tool-icon ci-search&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;a className=&quot;navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2&quot; href=&quot;#&quot;&gt;
          &lt;div className=&quot;navbar-tool-icon-box&quot;&gt;
            &lt;i className=&quot;navbar-tool-icon ci-user&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className=&quot;navbar-tool-text ms-n2&quot;&gt;&lt;small&gt;Hello, Sign in&lt;/small&gt;My Account&lt;/div&gt;
        &lt;/a&gt;
        &lt;a className=&quot;navbar-tool ms-3&quot; href=&quot;#&quot;&gt;
          &lt;div className=&quot;navbar-tool-icon-box bg-secondary&quot;&gt;
            &lt;span className=&quot;navbar-tool-label&quot;&gt;4&lt;/span&gt;
            &lt;i className=&quot;navbar-tool-icon ci-cart&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className=&quot;navbar-tool-text&quot;&gt;&lt;small&gt;My Cart&lt;/small&gt;$265.00&lt;/div&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div className=&quot;navbar navbar-expand-lg navbar-light bg-light mt-n2 pt-0 pb-2 px-3 px-lg-0&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;div className=&quot;collapse navbar-collapse&quot; id=&quot;navbarCollapse&quot;&gt;
        &lt;hr className=&quot;d-lg-none my-3&quot;&gt;
        &lt;ul className=&quot;navbar-nav navbar-mega-nav pe-lg-2 me-lg-2&quot;&gt;
          &lt;li className=&quot;nav-item dropdown&quot;&gt;
            &lt;a className=&quot;nav-link dropdown-toggle ps-0&quot; href=&quot;#&quot;&gt;
              &lt;i className=&quot;ci-view-grid me-2&quot;&gt;&lt;/i&gt;
              Departments
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        &lt;ul className=&quot;navbar-nav&quot;&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Shop&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Pages&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Blog&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Components&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Multilevel light navbar
header.shadow-sm
  .topbar.topbar-dark.bg-dark
    .container
      .topbar-text.dropdown.d-md-none
        a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).topbar-link.dropdown-toggle
          | Useful links
        ul.dropdown-menu
          li
            a(href=&quot;tel:00331697720&quot;).dropdown-item
              i.ci-support.text-muted.me-2
              | (00) 33 169 7720
          li
            a(href=&quot;#&quot;).dropdown-item
              i.ci-location.text-muted.me-2
              | Order tracking
      .topbar-text.text-nowrap.d-none.d-md-inline-block
        i.ci-support
        span.text-muted.me-1 Support
        a(href=&quot;tel:00331697720&quot;).topbar-link
          | (00) 33 169 7720
      .topbar-text.d-none.d-md-inline-block Free shipping for order over $200
      .ms-3.text-nowrap
        a(href=&quot;#&quot;).topbar-link.me-4.d-none.d-md-inline-block
          i.ci-location
          | Order tracking
        .topbar-text.dropdown.disable-autohide
          a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).topbar-link.dropdown-toggle
            img(src=&quot;path-to-image&quot;, width=&quot;20&quot;, alt=&quot;English&quot;).me-2
            | Eng / $
          ul.dropdown-menu.dropdown-menu-end
            li.dropdown-item
              select.form-select.form-select-sm
                option(value=&quot;usd&quot;) $ USD
                option(value=&quot;eur&quot;) € EUR
                option(value=&quot;ukp&quot;) £ UKP
                option(value=&quot;jpy&quot;) ¥ JPY
            li
              a(href=&quot;#&quot;).dropdown-item.pb-1
                img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;Français&quot;).me-2
                | Français
            li
              a(href=&quot;#&quot;).dropdown-item.pb-1
                img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;Deutsch&quot;).me-2
                | Deutsch
            li
              a(href=&quot;#&quot;).dropdown-item
                img(src=&quot;path-to-image&quot; width=&quot;20&quot; alt=&quot;Italiano&quot;).me-2
                | Italiano

  .navbar.navbar-expand-lg.navbar-light.bg-light
    .container
      a(href=&quot;#&quot;).navbar-brand.d-none.d-lg-block.me-3.flex-shrink-0
        img(src=&quot;path-to-logo&quot;, width=&quot;142&quot;, &quot;Cartzilla&quot;)
      a(href=&quot;#&quot;).navbar-brand.d-lg-none.me-2
        img(src=&quot;path-to-logo&quot;, width=&quot;74&quot;, &quot;Cartzilla&quot;)
      .input-group.d-none.d-lg-flex.flex-nowrap.mx-4
        input(type=&quot;text&quot;, placeholder=&quot;Search for products&quot;).form-control.rounded-end.pe-5
        i.ci-search.position-absolute.top-50.end-0.translate-middle-y.text-muted.fs-base.me-3
      .navbar-toolbar.d-flex.align-items-center
        button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#navbarCollapse&quot;).navbar-toggler
          span.navbar-toggler-icon
        a(href=&quot;#&quot;).navbar-tool.d-lg-none
          .navbar-tool-icon-box: i.navbar-tool-icon.ci-search
        a(href=&quot;#&quot;).navbar-tool.ms-1.ms-lg-0.me-n1.me-lg-2
          .navbar-tool-icon-box: i.navbar-tool-icon.ci-user
          .navbar-tool-text.ms-n2
            small Hello, Sign in
            | My Account
        a(href=&quot;#&quot;).navbar-tool.ms-3
          .navbar-tool-icon-box.bg-secondary
            span.navbar-tool-label 4
            i.navbar-tool-icon.ci-cart
          .navbar-tool-text
            small My Cart
            | $265.00

  .navbar.navbar-expand-lg.navbar-light.bg-light.mt-n2.pt-0.pb-2.px-3.px-lg-0
    .container
      #navbarCollapse.collapse.navbar-collapse
        hr.d-lg-none.my-3
        ul.navbar-nav.navbar-mega-nav.pe-lg-2.me-lg-2
          li.nav-item.dropdown
            a(href=&quot;#&quot;).nav-link.dropdown-toggle.ps-0
              i.ci-view-grid.me-2
              | Departments
        ul.navbar-nav
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Home
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Shop
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Pages
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Blog
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Components
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Multilevel dark navbar-->
                    <section
                        className="pb-5 mb-md-2"
                        id="navbar-multilevel-dark"
                    >
                        <h2 className="h5 mb-3">Multilevel dark navbar</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result6"
                                        role="tabpanel"
                                    >
                                        <header>
                                            <div
                                                className="topbar topbar-dark bg-darker px-3"
                                            >
                                                <div
                                                    className="topbar-text dropdown d-md-none"
                                                >
                                                    <a
                                                        className="topbar-link dropdown-toggle"
                                                        href="#"
                                                        data-bs-toggle="dropdown"
                                                        >Useful links</a
                                                    >
                                                    <ul
                                                        className="dropdown-menu"
                                                    >
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="tel:00331697720"
                                                                ><i
                                                                    className="ci-support text-muted me-2"
                                                                ></i
                                                                >(00) 33 169
                                                                7720</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                ><i
                                                                    className="ci-location text-muted me-2"
                                                                ></i
                                                                >Order
                                                                tracking</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="topbar-text text-nowrap d-none d-md-inline-block"
                                                >
                                                    <i
                                                        className="ci-support"
                                                    ></i
                                                    ><span
                                                        className="text-muted me-1"
                                                        >Support</span
                                                    ><a
                                                        className="topbar-link"
                                                        href="tel:00331697720"
                                                        >(00) 33 169 7720</a
                                                    >
                                                </div>
                                                <div
                                                    className="topbar-text d-none d-md-inline-block"
                                                >
                                                    Free shipping for order over
                                                    $200
                                                </div>
                                                <div
                                                    className="ms-3 text-nowrap"
                                                >
                                                    <a
                                                        className="topbar-link me-4 d-none d-md-inline-block"
                                                        href="#"
                                                        ><i
                                                            className="ci-location"
                                                        ></i
                                                        >Order tracking</a
                                                    >
                                                    <div
                                                        className="topbar-text dropdown disable-autohide"
                                                    >
                                                        <a
                                                            className="topbar-link dropdown-toggle"
                                                            href="#"
                                                            data-bs-toggle="dropdown"
                                                            ><img
                                                                className="me-2"
                                                                src="../img/flags/en.png"
                                                                width="20"
                                                                alt="English"
                                                            />Eng / $</a
                                                        >
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-dark dropdown-menu-end border border-light"
                                                        >
                                                            <li
                                                                className="dropdown-item"
                                                            >
                                                                <select
                                                                    className="form-select form-select-sm"
                                                                >
                                                                    <option
                                                                        value="usd"
                                                                    >
                                                                        $ USD
                                                                    </option>
                                                                    <option
                                                                        value="eur"
                                                                    >
                                                                        € EUR
                                                                    </option>
                                                                    <option
                                                                        value="ukp"
                                                                    >
                                                                        £ UKP
                                                                    </option>
                                                                    <option
                                                                        value="jpy"
                                                                    >
                                                                        ¥ JPY
                                                                    </option>
                                                                </select>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item pb-1"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/fr.png"
                                                                        width="20"
                                                                        alt="Français"
                                                                    />Français</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item pb-1"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/de.png"
                                                                        width="20"
                                                                        alt="Deutsch"
                                                                    />Deutsch</a
                                                                >
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                    ><img
                                                                        className="me-2"
                                                                        src="../img/flags/it.png"
                                                                        width="20"
                                                                        alt="Italiano"
                                                                    />Italiano</a
                                                                >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="navbar navbar-expand-lg navbar-dark bg-dark px-3"
                                            >
                                                <a
                                                    className="navbar-brand d-none d-lg-block me-3 flex-shrink-0"
                                                    href="#"
                                                    ><img
                                                        src="../img/logo-light.png"
                                                        width="142"
                                                        alt="Cartzilla" /></a
                                                ><a
                                                    className="navbar-brand d-lg-none me-2"
                                                    href="#"
                                                    ><img
                                                        src="../img/logo-icon-light.png"
                                                        width="74"
                                                        alt="Cartzilla"
                                                /></a>
                                                <div
                                                    className="input-group d-none d-lg-flex flex-nowrap mx-4"
                                                >
                                                    <input
                                                        className="form-control rounded-end pe-5"
                                                        type="text"
                                                        placeholder="Search for products"
                                                    /><i
                                                        className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"
                                                    ></i>
                                                </div>
                                                <div
                                                    className="navbar-toolbar d-flex align-items-center"
                                                >
                                                    <button
                                                        className="navbar-toggler"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#navbarCollapse4"
                                                    >
                                                        <span
                                                            className="navbar-toggler-icon"
                                                        ></span></button
                                                    ><a
                                                        className="navbar-tool d-lg-none"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box"
                                                        >
                                                            <i
                                                                className="navbar-tool-icon ci-search"
                                                            ></i></div></a
                                                    ><a
                                                        className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box"
                                                        >
                                                            <i
                                                                className="navbar-tool-icon ci-user"
                                                            ></i>
                                                        </div>
                                                        <div
                                                            className="navbar-tool-text ms-n2"
                                                        >
                                                            <small
                                                                >Hello, Sign
                                                                in</small
                                                            >My Account
                                                        </div></a
                                                    ><a
                                                        className="navbar-tool ms-3"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="navbar-tool-icon-box bg-secondary"
                                                        >
                                                            <span
                                                                className="navbar-tool-label"
                                                                >4</span
                                                            ><i
                                                                className="navbar-tool-icon ci-cart"
                                                            ></i>
                                                        </div>
                                                        <div
                                                            className="navbar-tool-text"
                                                        >
                                                            <small
                                                                >My Cart</small
                                                            >$265.00
                                                        </div></a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                className="navbar navbar-expand-lg navbar-dark bg-dark mt-n2 pt-0 pb-2 px-3 px-lg-0"
                                            >
                                                <div
                                                    className="collapse navbar-collapse"
                                                    id="navbarCollapse4"
                                                >
                                                    <hr
                                                        className="hr-light d-lg-none my-3"
                                                    />
                                                    <ul
                                                        className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2"
                                                    >
                                                        <li
                                                            className="nav-item dropdown"
                                                        >
                                                            <a
                                                                className="nav-link dropdown-toggle"
                                                                href="#"
                                                                ><i
                                                                    className="ci-view-grid me-2"
                                                                ></i
                                                                >Departments</a
                                                            >
                                                        </li>
                                                    </ul>
                                                    <ul className="navbar-nav">
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Home</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Shop</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Pages</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Blog</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Components</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Multilevel dark navbar --&gt;
&lt;header&gt;
  &lt;div className=&quot;topbar topbar-dark bg-darker&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;div className=&quot;topbar-text dropdown d-md-none&quot;&gt;
        &lt;a className=&quot;topbar-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Useful links&lt;/a&gt;
        &lt;ul className=&quot;dropdown-menu&quot;&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item&quot; href=&quot;tel:00331697720&quot;&gt;
              &lt;i className=&quot;ci-support text-muted me-2&quot;&gt;&lt;/i&gt;
              (00) 33 169 7720
            &lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;
              &lt;i className=&quot;ci-location text-muted me-2&quot;&gt;&lt;/i&gt;
              Order tracking
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div className=&quot;topbar-text text-nowrap d-none d-md-inline-block&quot;&gt;
        &lt;i className=&quot;ci-support&quot;&gt;&lt;/i&gt;
        &lt;span className=&quot;text-muted me-1&quot;&gt;Support&lt;/span&gt;
        &lt;a className=&quot;topbar-link&quot; href=&quot;tel:00331697720&quot;&gt;(00) 33 169 7720&lt;/a&gt;
      &lt;/div&gt;
      &lt;div className=&quot;topbar-text d-none d-md-inline-block&quot;&gt;Free shipping for order over $200&lt;/div&gt;
      &lt;div className=&quot;ms-3 text-nowrap&quot;&gt;
        &lt;a className=&quot;topbar-link me-4 d-none d-md-inline-block&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-location&quot;&gt;&lt;/i&gt;
          Order tracking
        &lt;/a&gt;
        &lt;div className=&quot;topbar-text dropdown disable-autohide&quot;&gt;
          &lt;a className=&quot;topbar-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;
            &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;English&quot;/&gt;
            Eng / $
          &lt;/a&gt;
          &lt;ul className=&quot;dropdown-menu dropdown-menu-dark dropdown-menu-end border border-light&quot;&gt;
            &lt;li className=&quot;dropdown-item&quot;&gt;
              &lt;select className=&quot;form-select form-select-sm&quot;&gt;
                &lt;option value=&quot;usd&quot;&gt;$ USD&lt;/option&gt;
                &lt;option value=&quot;eur&quot;&gt;€ EUR&lt;/option&gt;
                &lt;option value=&quot;ukp&quot;&gt;£ UKP&lt;/option&gt;
                &lt;option value=&quot;jpy&quot;&gt;¥ JPY&lt;/option&gt;
              &lt;/select&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
                &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Français&quot;/&gt;
                Français
              &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
                &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Deutsch&quot;/&gt;
                Deutsch
              &lt;/a&gt;
            &lt;/li&gt;
            &lt;li&gt;
              &lt;a className=&quot;dropdown-item pb-1&quot; href=&quot;#&quot;&gt;
                &lt;img className=&quot;me-2&quot; width=&quot;20&quot; src=&quot;path-to-image&quot; alt=&quot;Italiano&quot;/&gt;
                Italiano
              &lt;/a&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div className=&quot;navbar navbar-expand-lg navbar-dark bg-dark&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;a className=&quot;navbar-brand d-none d-lg-block me-3 flex-shrink-0&quot; href=&quot;#&quot;&gt;
        &lt;img width=&quot;142&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
      &lt;/a&gt;
      &lt;a className=&quot;navbar-brand d-lg-none me-2&quot; href=&quot;#&quot;&gt;
        &lt;img width=&quot;74&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
      &lt;/a&gt;
      &lt;div className=&quot;input-group d-none d-lg-flex flex-nowrap mx-4&quot;&gt;
        &lt;input className=&quot;form-control rounded-end pe-5&quot; type=&quot;text&quot; placeholder=&quot;Search for products&quot;&gt;
        &lt;i className=&quot;ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
      &lt;div className=&quot;navbar-toolbar d-flex align-items-center&quot;&gt;
        &lt;button className=&quot;navbar-toggler&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#navbarCollapse&quot;&gt;
          &lt;span className=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;a className=&quot;navbar-tool d-lg-none&quot; href=&quot;#&quot;&gt;
          &lt;div className=&quot;navbar-tool-icon-box&quot;&gt;
            &lt;i className=&quot;navbar-tool-icon ci-search&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
        &lt;/a&gt;
        &lt;a className=&quot;navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2&quot; href=&quot;#&quot;&gt;
          &lt;div className=&quot;navbar-tool-icon-box&quot;&gt;
            &lt;i className=&quot;navbar-tool-icon ci-user&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className=&quot;navbar-tool-text ms-n2&quot;&gt;&lt;small&gt;Hello, Sign in&lt;/small&gt;My Account&lt;/div&gt;
        &lt;/a&gt;
        &lt;a className=&quot;navbar-tool ms-3&quot; href=&quot;#&quot;&gt;
          &lt;div className=&quot;navbar-tool-icon-box bg-secondary&quot;&gt;
            &lt;span className=&quot;navbar-tool-label&quot;&gt;4&lt;/span&gt;
            &lt;i className=&quot;navbar-tool-icon ci-cart&quot;&gt;&lt;/i&gt;
          &lt;/div&gt;
          &lt;div className=&quot;navbar-tool-text&quot;&gt;&lt;small&gt;My Cart&lt;/small&gt;$265.00&lt;/div&gt;
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div className=&quot;navbar navbar-expand-lg navbar-dark bg-dark mt-n2 pt-0 pb-2 px-3 px-lg-0&quot;&gt;
    &lt;div className=&quot;container&quot;&gt;
      &lt;div className=&quot;collapse navbar-collapse&quot; id=&quot;navbarCollapse&quot;&gt;
        &lt;hr className=&quot;hr-light d-lg-none my-3&quot;&gt;
        &lt;ul className=&quot;navbar-nav navbar-mega-nav pe-lg-2 me-lg-2&quot;&gt;
          &lt;li className=&quot;nav-item dropdown&quot;&gt;
            &lt;a className=&quot;nav-link dropdown-toggle ps-0&quot; href=&quot;#&quot;&gt;
              &lt;i className=&quot;ci-view-grid me-2&quot;&gt;&lt;/i&gt;
              Departments
            &lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        &lt;ul className=&quot;navbar-nav&quot;&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Shop&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Pages&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Blog&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Components&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Multilevel dark navbar
header
  .topbar.topbar-dark.bg-darker
    .container
      .topbar-text.dropdown.d-md-none
        a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).topbar-link.dropdown-toggle
          | Useful links
        ul.dropdown-menu
          li
            a(href=&quot;tel:00331697720&quot;).dropdown-item
              i.ci-support.text-muted.me-2
              | (00) 33 169 7720
          li
            a(href=&quot;#&quot;).dropdown-item
              i.ci-location.text-muted.me-2
              | Order tracking
      .topbar-text.text-nowrap.d-none.d-md-inline-block
        i.ci-support
        span.text-muted.me-1 Support
        a(href=&quot;tel:00331697720&quot;).topbar-link
          | (00) 33 169 7720
      .topbar-text.d-none.d-md-inline-block Free shipping for order over $200
      .ms-3.text-nowrap
        a(href=&quot;#&quot;).topbar-link.me-4.d-none.d-md-inline-block
          i.ci-location
          | Order tracking
        .topbar-text.dropdown.disable-autohide
          a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).topbar-link.dropdown-toggle
            img(src=&quot;path-to-image&quot;, width=&quot;20&quot;, alt=&quot;English&quot;).me-2
            | Eng / $
          ul.dropdown-menu.dropdown-menu-dark.dropdown-menu-end.border.border-light
            li.dropdown-item
              select.form-select.form-select-sm
                option(value=&quot;usd&quot;) $ USD
                option(value=&quot;eur&quot;) € EUR
                option(value=&quot;ukp&quot;) £ UKP
                option(value=&quot;jpy&quot;) ¥ JPY
            li
              a(href=&quot;#&quot;).dropdown-item.pb-1
                img(src=&quot;path-to-image&quot;, width=&quot;20&quot;, alt=&quot;Français&quot;).me-2
                | Français
            li
              a(href=&quot;#&quot;).dropdown-item.pb-1
                img(src=&quot;path-to-image&quot;, width=&quot;20&quot;, alt=&quot;Deutsch&quot;).me-2
                | Deutsch
            li
              a(href=&quot;#&quot;).dropdown-item
                img(src=&quot;path-to-image&quot;, width=&quot;20&quot;, alt=&quot;Italiano&quot;).me-2
                | Italiano

  .navbar.navbar-expand-lg.navbar-dark.bg-dark
    .container
      a(href=&quot;#&quot;).navbar-brand.d-none.d-lg-block.me-3.flex-shrink-0
        img(src=&quot;path-to-logo&quot;, width=&quot;142&quot;, alt=&quot;Cartzilla&quot;)
      a(href=&quot;#&quot;).navbar-brand.d-lg-none.me-2
        img(src=&quot;path-to-logo&quot;, width=&quot;74&quot;, alt=&quot;Cartzilla&quot;)
      .input-group.d-none.d-lg-flex.flex-nowrap.mx-4
        input(type=&quot;text&quot;, placeholder=&quot;Search for products&quot;).form-control.rounded-end.pe-5
        i.ci-search.position-absolute.top-50.end-0.translate-middle-y.text-muted.fs-base.me-3
      .navbar-toolbar.d-flex.align-items-center
        button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#navbarCollapse&quot;).navbar-toggler
          span.navbar-toggler-icon
        a(href=&quot;#&quot;).navbar-tool.d-lg-none
          .navbar-tool-icon-box: i.navbar-tool-icon.ci-search
        a(href=&quot;#&quot;).navbar-tool.ms-1.ms-lg-0.me-n1.me-lg-2
          .navbar-tool-icon-box: i.navbar-tool-icon.ci-user
          .navbar-tool-text.ms-n2
            small Hello, Sign in
            | My Account
        a(href=&quot;#&quot;).navbar-tool.ms-3
          .navbar-tool-icon-box.bg-secondary
            span.navbar-tool-label 4
            i.navbar-tool-icon.ci-cart
          .navbar-tool-text
            small My Cart
            | $265.00

  .navbar.navbar-expand-lg.navbar-dark.bg-dark.mt-n2.pt-0.pb-2.px-3.px-lg-0
    .container
      #navbarCollapse.collapse.navbar-collapse
        hr.hr-light.d-lg-none.my-3
        ul.navbar-nav.navbar-mega-nav.pe-lg-2.me-lg-2
          li.nav-item.dropdown
            a(href=&quot;#&quot;).nav-link.dropdown-toggle.ps-0
              i.ci-view-grid.me-2
              | Departments
        ul.navbar-nav
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Home
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Shop
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Pages
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Blog
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Components
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Offcanvas menu-->
                    <section className="pb-5 mb-md-2" id="navbar-offcanvas">
                        <h2 className="h5 mb-3">Offcanvas menu</h2>
                        <div className="card border-0">
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
                            <div className="card-body px-0 pb-3">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result7"
                                        role="tabpanel"
                                    >
                                        <header
                                            className="navbar navbar-light shadow-sm px-3 rounded"
                                        >
                                            <a
                                                className="navbar-brand d-none d-lg-block order-lg-1"
                                                href="#"
                                                ><img
                                                    src="../img/logo-dark.png"
                                                    width="142"
                                                    alt="Cartzilla" /></a
                                            ><a
                                                className="navbar-brand d-lg-none me-2"
                                                href="#"
                                                ><img
                                                    src="../img/logo-icon.png"
                                                    width="74"
                                                    alt="Cartzilla"
                                            /></a>
                                            <div
                                                className="navbar-toolbar d-flex align-items-center order-lg-3"
                                            >
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#navbarOffcanvas"
                                                >
                                                    <span
                                                        className="navbar-toggler-icon"
                                                    ></span>
                                                </button>
                                            </div>
                                            <div
                                                className="offcanvas offcanvas-end me-auto order-lg-2"
                                                id="navbarOffcanvas"
                                            >
                                                <div
                                                    className="offcanvas-header"
                                                >
                                                    <h5
                                                        className="offcanvas-title"
                                                    >
                                                        Menu
                                                    </h5>
                                                    <button
                                                        className="btn-close text-reset"
                                                        type="button"
                                                        data-bs-dismiss="offcanvas"
                                                        aria-label="Close"
                                                    ></button>
                                                </div>
                                                <div className="offcanvas-body">
                                                    <ul className="navbar-nav">
                                                        <li
                                                            className="nav-item active"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Home</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link"
                                                                href="#"
                                                                >Link</a
                                                            >
                                                        </li>
                                                        <li
                                                            className="nav-item dropdown"
                                                        >
                                                            <a
                                                                className="nav-link dropdown-toggle"
                                                                href="#"
                                                                data-bs-toggle="dropdown"
                                                                data-bs-auto-close="outside"
                                                                >Dropdown</a
                                                            >
                                                            <ul
                                                                className="dropdown-menu"
                                                            >
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        >Action
                                                                        link</a
                                                                    >
                                                                </li>
                                                                <li
                                                                    className="dropdown"
                                                                >
                                                                    <a
                                                                        className="dropdown-item dropdown-toggle"
                                                                        href="#"
                                                                        data-bs-toggle="dropdown"
                                                                        >Dropdown</a
                                                                    >
                                                                    <ul
                                                                        className="dropdown-menu"
                                                                    >
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Action
                                                                                link</a
                                                                            >
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Another
                                                                                action</a
                                                                            >
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Something
                                                                                else
                                                                                here</a
                                                                            >
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                className="dropdown-item"
                                                                                href="#"
                                                                                >Yet
                                                                                another
                                                                                link</a
                                                                            >
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        >Another
                                                                        action</a
                                                                    >
                                                                </li>
                                                                <li
                                                                    className="dropdown-divider"
                                                                ></li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                        >Something
                                                                        else
                                                                        here</a
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li
                                                            className="nav-item"
                                                        >
                                                            <a
                                                                className="nav-link disabled"
                                                                href="#"
                                                                tabindex="-1"
                                                                aria-disabled="true"
                                                                >Disabled</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Offcanvas menu example --&gt;
&lt;!-- Use .navbar-expand-* classes to create a dynamic and flexible navigation sidebar --&gt;
&lt;header className=&quot;navbar navbar-light shadow-sm&quot;&gt;
  &lt;div className=&quot;container&quot;&gt;

    &lt;!-- Brand --&gt;
    &lt;a className=&quot;navbar-brand d-none d-lg-block order-lg-1&quot; href=&quot;#&quot;&gt;
      &lt;img width=&quot;142&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
    &lt;/a&gt;
    &lt;a className=&quot;navbar-brand d-lg-none me-2&quot; href=&quot;#&quot;&gt;
      &lt;img width=&quot;74&quot; src=&quot;path-to-logo&quot; alt=&quot;Cartzilla&quot;/&gt;
    &lt;/a&gt;

    &lt;!-- Toolbar --&gt;
    &lt;div className=&quot;navbar-toolbar d-flex align-items-center order-lg-3&quot;&gt;
      &lt;button className=&quot;navbar-toggler&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#navbarOffcanvas&quot;&gt;
        &lt;span className=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt;
      &lt;/button&gt;
    &lt;/div&gt;

    &lt;!-- Offcanvas menu --&gt;
    &lt;div className=&quot;offcanvas offcanvas-end me-auto order-lg-2&quot; id=&quot;navbarOffcanvas&quot;&gt;
      &lt;div className=&quot;offcanvas-header&quot;&gt;
        &lt;h5 className=&quot;offcanvas-title&quot;&gt;Menu&lt;/h5&gt;
        &lt;button type=&quot;button&quot; className=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div className=&quot;offcanvas-body&quot;&gt;
        &lt;ul className=&quot;navbar-nav&quot;&gt;
          &lt;li className=&quot;nav-item active&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;&lt;a className=&quot;nav-link&quot; href=&quot;#&quot;&gt;Link&lt;/a&gt;&lt;/li&gt;
          &lt;li className=&quot;nav-item dropdown&quot;&gt;
            &lt;a className=&quot;nav-link dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;outside&quot;&gt;Dropdown&lt;/a&gt;
            &lt;ul className=&quot;dropdown-menu&quot;&gt;
              &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action link&lt;/a&gt;&lt;/li&gt;
              &lt;li className=&quot;dropdown&quot;&gt;
                &lt;a className=&quot;dropdown-item dropdown-toggle&quot; href=&quot;#&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Dropdown&lt;/a&gt;
                &lt;ul className=&quot;dropdown-menu&quot;&gt;
                  &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action link&lt;/a&gt;&lt;/li&gt;
                  &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
                  &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
                  &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Yet another link&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
              &lt;/li&gt;
              &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
              &lt;li className=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/li&gt;
          &lt;li className=&quot;nav-item&quot;&gt;
            &lt;a className=&quot;nav-link disabled&quot; href=&quot;#&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Offcanvas menu example
// Use .navbar-expand-* classes to create a dynamic and flexible navigation sidebar
header.navbar.navbar-light.shadow-sm
  .container

    // Brand
    a(href=&quot;#&quot;).navbar-brand.d-none.d-lg-block.order-lg-1
      img(src=&quot;path-to-logo&quot; width=&quot;142&quot; alt=&quot;Cartzilla&quot;)
    a(href=&quot;#&quot;).navbar-brand.d-lg-none.me-2
      img(src=&quot;path-to-logo&quot; width=&quot;74&quot; alt=&quot;Cartzilla&quot;)

    // Toolbar
    .navbar-toolbar.d-flex.align-items-center.order-lg-3
      button(type=&quot;button&quot;, data-bs-toggle=&quot;offcanvas&quot;, data-bs-target=&quot;#navbarOffcanvas&quot;).navbar-toggler
        span.navbar-toggler-icon

    // Offcanvas menu
    #navbarOffcanvas.collapse.navbar-collapse.me-auto.order-lg-2
      .offcanvas-header
        h5.offcanvas-title Menu
        button(type=&quot;button&quot;, data-bs-dismiss=&quot;offcanvas&quot;, aria-label=&quot;Close&quot;).btn-close.text-reset
      .offcanvas-body
        ul.navbar-nav
          li.nav-item.active
            a.nav-link(href=&quot;#&quot;) Home
          li.nav-item
            a.nav-link(href=&quot;#&quot;) Link
          li.nav-item.dropdown
            a.nav-link.dropdown-toggle(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot; data-bs-auto-close=&quot;outside&quot;) Dropdown
            ul.dropdown-menu
              li
                a.dropdown-item(href=&quot;#&quot;) Action link
              li.dropdown
                a(href=&quot;#&quot;, data-bs-toggle=&quot;dropdown&quot;).dropdown-item.dropdown-toggle
                  | Dropdown
                ul.dropdown-menu
                  li
                    a.dropdown-item(href=&quot;#&quot;) Action link
                  li
                    a.dropdown-item(href=&quot;#&quot;) Another action
                  li
                    a.dropdown-item(href=&quot;#&quot;) Something else here
                  li
                    a.dropdown-item(href=&quot;#&quot;) Yet another link
              li
                a.dropdown-item(href=&quot;#&quot;) Another action
              li.dropdown-divider
              li
                a.dropdown-item(href=&quot;#&quot;) Something else here
          li.nav-item
            a.nav-link.disabled(href=&quot;#&quot;, tabindex=&quot;-1&quot;, aria-disabled=&quot;true&quot;) Disabled</code></pre>
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
                                            href="#navbar-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#navbar-color-shemes"
                                            >Color schemes</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#navbar-topbar"
                                            >Topbar</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#navbar-twolevel"
                                            >Topbar + Navbar</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#navbar-multilevel-light"
                                            >Multilevel light navbar</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#navbar-multilevel-dark"
                                            >Multilevel dark navbar</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#navbar-offcanvas"
                                            >Offcanvas menu</a
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
