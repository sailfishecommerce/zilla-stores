<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Accordion</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Accordion</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Vertically stacked list of headers that can be
                                clicked to reveal or hide content associated
                                with them.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/accordion/"
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
                    <section className="pb-5 mb-md-2" id="accordion-basic">
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
                                            className="accordion"
                                            id="accordionExample"
                                        >
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingOne"
                                                >
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="collapseOne"
                                                    >
                                                        Accordion Item #1
                                                    </button>
                                                </h2>
                                                <div
                                                    className="accordion-collapse collapse show"
                                                    id="collapseOne"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div
                                                        className="accordion-body"
                                                    >
                                                        This is the first item's
                                                        accordion body. It is
                                                        hidden by default, until
                                                        the collapse plugin adds
                                                        the appropriate classes
                                                        that we use to style
                                                        each element. These
                                                        classes control the
                                                        overall appearance, as
                                                        well as the showing and
                                                        hiding via CSS
                                                        transitions. You can
                                                        modify any of this with
                                                        custom CSS or overriding
                                                        our default variables.
                                                        It's also worth noting
                                                        that just about any HTML
                                                        can go within the
                                                        <code
                                                            >.accordion-body</code
                                                        >, though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingTwo"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="collapseTwo"
                                                    >
                                                        Accordion Item #2
                                                    </button>
                                                </h2>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="collapseTwo"
                                                    aria-labelledby="headingTwo"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div
                                                        className="accordion-body"
                                                    >
                                                        This is the second
                                                        item's accordion body.
                                                        It is hidden by default,
                                                        until the collapse
                                                        plugin adds the
                                                        appropriate classes that
                                                        we use to style each
                                                        element. These classes
                                                        control the overall
                                                        appearance, as well as
                                                        the showing and hiding
                                                        via CSS transitions. You
                                                        can modify any of this
                                                        with custom CSS or
                                                        overriding our default
                                                        variables. It's also
                                                        worth noting that just
                                                        about any HTML can go
                                                        within the
                                                        <code
                                                            >.accordion-body</code
                                                        >, though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingThree"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="collapseThree"
                                                    >
                                                        Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="collapseThree"
                                                    aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div
                                                        className="accordion-body"
                                                    >
                                                        This is the third item's
                                                        accordion body. It is
                                                        hidden by default, until
                                                        the collapse plugin adds
                                                        the appropriate classes
                                                        that we use to style
                                                        each element. These
                                                        classes control the
                                                        overall appearance, as
                                                        well as the showing and
                                                        hiding via CSS
                                                        transitions. You can
                                                        modify any of this with
                                                        custom CSS or overriding
                                                        our default variables.
                                                        It's also worth noting
                                                        that just about any HTML
                                                        can go within the
                                                        <code
                                                            >.accordion-body</code
                                                        >, though the transition
                                                        does limit overflow.
                                                    </div>
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
                                        ><code className="lang-html">&lt;!-- Basic accordion --&gt;
&lt;div className=&quot;accordion&quot; id=&quot;accordionExample&quot;&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;accordion-item&quot;&gt;
    &lt;h2 className=&quot;accordion-header&quot; id=&quot;headingOne&quot;&gt;
      &lt;button className=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseOne&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;collapseOne&quot;&gt;Accordion Item #1&lt;/button&gt;
    &lt;/h2&gt;
    &lt;div className=&quot;accordion-collapse collapse show&quot; id=&quot;collapseOne&quot; aria-labelledby=&quot;headingOne&quot; data-bs-parent=&quot;#accordionExample&quot;&gt;
      &lt;div className=&quot;accordion-body&quot;&gt;This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;accordion-item&quot;&gt;
    &lt;h2 className=&quot;accordion-header&quot; id=&quot;headingTwo&quot;&gt;
      &lt;button className=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseTwo&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;collapseTwo&quot;&gt;Accordion Item #2&lt;/button&gt;
    &lt;/h2&gt;
    &lt;div className=&quot;accordion-collapse collapse&quot; id=&quot;collapseTwo&quot; aria-labelledby=&quot;headingTwo&quot; data-bs-parent=&quot;#accordionExample&quot;&gt;
      &lt;div className=&quot;accordion-body&quot;&gt;This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;accordion-item&quot;&gt;
    &lt;h2 className=&quot;accordion-header&quot; id=&quot;headingThree&quot;&gt;
      &lt;button className=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseThree&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;collapseThree&quot;&gt;Accordion Item #3&lt;/button&gt;
    &lt;/h2&gt;
    &lt;div className=&quot;accordion-collapse collapse&quot; id=&quot;collapseThree&quot; aria-labelledby=&quot;headingThree&quot; data-bs-parent=&quot;#accordionExample&quot;&gt;
      &lt;div className=&quot;accordion-body&quot;&gt;This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.&lt;/div&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Basic accordion
#accordionExample.accordion

  // Item
  .accordion-item
    h2#headingOne.accordion-header
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#collapseOne&quot;, aria-expanded=&quot;true&quot;, aria-controls=&quot;collapseOne&quot;).accordion-button
        | Accordion Item #1
    #collapseOne.accordion-collapse.collapse.show(aria-labelledby=&quot;headingOne&quot;, data-bs-parent=&quot;#accordionExample&quot;)
      .accordion-body
        | This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.

  // Item
  .accordion-item
    h2#headingTwo.accordion-header
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#collapseTwo&quot;, aria-expanded=&quot;false&quot;, aria-controls=&quot;collapseTwo&quot;).accordion-button.collapsed
        | Accordion Item #2
    #collapseTwo.accordion-collapse.collapse(aria-labelledby=&quot;headingTwo&quot;, data-bs-parent=&quot;#accordionExample&quot;)
      .accordion-body
        | This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.

  // Item
  .accordion-item
    h2#headingThree.accordion-header
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#collapseThree&quot;, aria-expanded=&quot;false&quot;, aria-controls=&quot;collapseThree&quot;).accordion-button.collapsed
        | Accordion Item #3
    #collapseThree.accordion-collapse.collapse(aria-labelledby=&quot;headingThree&quot;, data-bs-parent=&quot;#accordionExample&quot;)
      .accordion-body
        | This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Flush example-->
                    <section className="pb-5 mb-md-2" id="accordion-flush">
                        <h2 className="h5 mb-3">Flush example</h2>
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
                                            className="accordion accordion-flush"
                                            id="accordionFlushExample"
                                        >
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="flush-headingOne"
                                                >
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="flush-collapseOne"
                                                    >
                                                        Accordion Item #1
                                                    </button>
                                                </h2>
                                                <div
                                                    className="accordion-collapse collapse show"
                                                    id="flush-collapseOne"
                                                    aria-labelledby="flush-headingOne"
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div
                                                        className="accordion-body"
                                                    >
                                                        This is the first item's
                                                        accordion body. It is
                                                        hidden by default, until
                                                        the collapse plugin adds
                                                        the appropriate classes
                                                        that we use to style
                                                        each element. These
                                                        classes control the
                                                        overall appearance, as
                                                        well as the showing and
                                                        hiding via CSS
                                                        transitions. You can
                                                        modify any of this with
                                                        custom CSS or overriding
                                                        our default variables.
                                                        It's also worth noting
                                                        that just about any HTML
                                                        can go within the
                                                        <code
                                                            >.accordion-body</code
                                                        >, though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="flush-headingTwo"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseTwo"
                                                        aria-expanded="false"
                                                        aria-controls="flush-collapseTwo"
                                                    >
                                                        Accordion Item #2
                                                    </button>
                                                </h2>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="flush-collapseTwo"
                                                    aria-labelledby="flush-headingTwo"
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div
                                                        className="accordion-body"
                                                    >
                                                        This is the second
                                                        item's accordion body.
                                                        It is hidden by default,
                                                        until the collapse
                                                        plugin adds the
                                                        appropriate classes that
                                                        we use to style each
                                                        element. These classes
                                                        control the overall
                                                        appearance, as well as
                                                        the showing and hiding
                                                        via CSS transitions. You
                                                        can modify any of this
                                                        with custom CSS or
                                                        overriding our default
                                                        variables. It's also
                                                        worth noting that just
                                                        about any HTML can go
                                                        within the
                                                        <code
                                                            >.accordion-body</code
                                                        >, though the transition
                                                        does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="flush-headingThree"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseThree"
                                                        aria-expanded="false"
                                                        aria-controls="flush-collapseThree"
                                                    >
                                                        Accordion Item #3
                                                    </button>
                                                </h2>
                                                <div
                                                    className="accordion-collapse collapse"
                                                    id="flush-collapseThree"
                                                    aria-labelledby="flush-headingThree"
                                                    data-bs-parent="#accordionFlushExample"
                                                >
                                                    <div
                                                        className="accordion-body"
                                                    >
                                                        This is the third item's
                                                        accordion body. It is
                                                        hidden by default, until
                                                        the collapse plugin adds
                                                        the appropriate classes
                                                        that we use to style
                                                        each element. These
                                                        classes control the
                                                        overall appearance, as
                                                        well as the showing and
                                                        hiding via CSS
                                                        transitions. You can
                                                        modify any of this with
                                                        custom CSS or overriding
                                                        our default variables.
                                                        It's also worth noting
                                                        that just about any HTML
                                                        can go within the
                                                        <code
                                                            >.accordion-body</code
                                                        >, though the transition
                                                        does limit overflow.
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
                                        ><code className="lang-html">&lt;!-- Flush accordion. Use this when you need to render accordions edge-to-edge with their parent container --&gt;
&lt;div className=&quot;accordion accordion-flush&quot; id=&quot;accordionFlushExample&quot;&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;accordion-item&quot;&gt;
    &lt;h2 className=&quot;accordion-header&quot; id=&quot;flush-headingOne&quot;&gt;
      &lt;button className=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#flush-collapseOne&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;flush-collapseOne&quot;&gt;Accordion Item #1&lt;/button&gt;
    &lt;/h2&gt;
    &lt;div className=&quot;accordion-collapse collapse show&quot; id=&quot;flush-collapseOne&quot; aria-labelledby=&quot;flush-headingOne&quot; data-bs-parent=&quot;#accordionFlushExample&quot;&gt;
      &lt;div className=&quot;accordion-body&quot;&gt;This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;accordion-item&quot;&gt;
    &lt;h2 className=&quot;accordion-header&quot; id=&quot;flush-headingTwo&quot;&gt;
      &lt;button className=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#flush-collapseTwo&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;flush-collapseTwo&quot;&gt;Accordion Item #2&lt;/button&gt;
    &lt;/h2&gt;
    &lt;div className=&quot;accordion-collapse collapse&quot; id=&quot;flush-collapseTwo&quot; aria-labelledby=&quot;flush-headingTwo&quot; data-bs-parent=&quot;#accordionFlushExample&quot;&gt;
      &lt;div className=&quot;accordion-body&quot;&gt;This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;accordion-item&quot;&gt;
    &lt;h2 className=&quot;accordion-header&quot; id=&quot;flush-headingThree&quot;&gt;
      &lt;button className=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#flush-collapseThree&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;flush-collapseThree&quot;&gt;Accordion Item #3&lt;/button&gt;
    &lt;/h2&gt;
    &lt;div className=&quot;accordion-collapse collapse&quot; id=&quot;flush-collapseThree&quot; aria-labelledby=&quot;flush-headingThree&quot; data-bs-parent=&quot;#accordionFlushExample&quot;&gt;
      &lt;div className=&quot;accordion-body&quot;&gt;This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the &lt;code&gt;.accordion-body&lt;/code&gt;, though the transition does limit overflow.&lt;/div&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Flush accordion. Use this when you need to render accordions edge-to-edge with their parent container
#accordionFlushExample.accordion.accordion-flush

  // Item
  .accordion-item
    h2#flush-headingOne.accordion-header
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#flush-collapseOne&quot;, aria-expanded=&quot;true&quot;, aria-controls=&quot;flush-collapseOne&quot;).accordion-button
        | Accordion Item #1
    #flush-collapseOne.accordion-collapse.collapse.show(aria-labelledby=&quot;flush-headingOne&quot;, data-bs-parent=&quot;#accordionFlushExample&quot;)
      .accordion-body
        | This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.

  // Item
  .accordion-item
    h2#flush-headingTwo.accordion-header
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#flush-collapseTwo&quot;, aria-expanded=&quot;false&quot;, aria-controls=&quot;flush-collapseTwo&quot;).accordion-button.collapsed
        | Accordion Item #2
    #flush-collapseTwo.accordion-collapse.collapse(aria-labelledby=&quot;flush-headingTwo&quot;, data-bs-parent=&quot;#accordionFlushExample&quot;)
      .accordion-body
        | This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.

  // Item
  .accordion-item
    h2#flush-headingThree.accordion-header
      button(type=&quot;button&quot;, data-bs-toggle=&quot;collapse&quot;, data-bs-target=&quot;#flush-collapseThree&quot;, aria-expanded=&quot;false&quot;, aria-controls=&quot;flush-collapseThree&quot;).accordion-button.collapsed
        | Accordion Item #3
    #flush-collapseThree.accordion-collapse.collapse(aria-labelledby=&quot;flush-headingThree&quot;, data-bs-parent=&quot;#accordionFlushExample&quot;)
      .accordion-body
        | This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.</code></pre>
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
                                            href="#accordion-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#accordion-flush"
                                            >Flush example</a
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
