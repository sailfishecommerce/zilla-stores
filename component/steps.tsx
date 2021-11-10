<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Steps</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Steps</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Series of steps or conditions that the user
                                needs to complete in order to accomplish a goal.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <!-- Dark skin-->
                    <section className="pb-5 mb-md-2" id="steps-dark">
                        <h2 className="h5 mb-3">Dark skin</h2>
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
                                        <div className="steps steps-dark mt-3">
                                            <a
                                                className="step-item active"
                                                href="#"
                                            >
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >1</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i className="ci-cart"></i
                                                    >Cart
                                                </div></a
                                            ><a
                                                className="step-item active current"
                                                href="#"
                                            >
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >2</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i
                                                        className="ci-user-circle"
                                                    ></i
                                                    >Your details
                                                </div></a
                                            ><a className="step-item" href="#">
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >3</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i
                                                        className="ci-package"
                                                    ></i
                                                    >Shipping
                                                </div></a
                                            ><a className="step-item" href="#">
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >4</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i className="ci-card"></i
                                                    >Payment
                                                </div></a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Steps dark skin  --&gt;
&lt;div className=&quot;steps steps-dark&quot;&gt;

  &lt;!-- Step: active --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item active&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;1&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-cart&quot;&gt;&lt;/i&gt;
      Cart
    &lt;/div&gt;
  &lt;/a&gt;

  &lt;!-- Step: active, current --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item active current&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;2&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-user-circle&quot;&gt;&lt;/i&gt;
      Your details
    &lt;/div&gt;
  &lt;/a&gt;

  &lt;!-- Step --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;3&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-package&quot;&gt;&lt;/i&gt;
      Shipping
    &lt;/div&gt;
  &lt;/a&gt;

  &lt;!-- Step --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;4&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-card&quot;&gt;&lt;/i&gt;
      Payment
    &lt;/div&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Steps dark skin
.steps.steps-dark
  a(href=&quot;#&quot;).step-item.active
    .step-progress
      span.step-count 1
    .step-label
      i.ci-cart
      | Cart

  // Step
  a(href=&quot;#&quot;).step-item.active.current
    .step-progress
      span.step-count 2
    .step-label
      i.ci-user-circle
      | Your details

  // Step
  a(href=&quot;#&quot;).step-item
    .step-progress
      span.step-count 3
    .step-label
      i.ci-package
      | Shipping

  // Step
  a(href=&quot;#&quot;).step-item
    .step-progress
      span.step-count 4
    .step-label
      i.ci-card
      | Payment
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Light skin-->
                    <section className="pb-5 mb-md-2" id="steps-light">
                        <h2 className="h5 mb-3">Light skin</h2>
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
                                        className="tab-pane bg-dark pt-5 px-4 pb-4 fade show active"
                                        id="result2"
                                        style="margin: -1.25rem"
                                        role="tabpanel"
                                    >
                                        <div className="steps steps-light">
                                            <a
                                                className="step-item active"
                                                href="#"
                                            >
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >1</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i className="ci-cart"></i
                                                    >Cart
                                                </div></a
                                            ><a
                                                className="step-item active current"
                                                href="#"
                                            >
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >2</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i
                                                        className="ci-user-circle"
                                                    ></i
                                                    >Your details
                                                </div></a
                                            ><a className="step-item" href="#">
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >3</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i
                                                        className="ci-package"
                                                    ></i
                                                    >Shipping
                                                </div></a
                                            ><a className="step-item" href="#">
                                                <div className="step-progress">
                                                    <span className="step-count"
                                                        >4</span
                                                    >
                                                </div>
                                                <div className="step-label">
                                                    <i className="ci-card"></i
                                                    >Payment
                                                </div></a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Steps light skin  --&gt;
&lt;div className=&quot;steps steps-light&quot;&gt;

  &lt;!-- Step: active --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item active&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;1&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-cart&quot;&gt;&lt;/i&gt;
      Cart
    &lt;/div&gt;
  &lt;/a&gt;

  &lt;!-- Step: active, current --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item active current&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;2&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-user-circle&quot;&gt;&lt;/i&gt;
      Your details
    &lt;/div&gt;
  &lt;/a&gt;

  &lt;!-- Step --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;3&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-package&quot;&gt;&lt;/i&gt;
      Shipping
    &lt;/div&gt;
  &lt;/a&gt;

  &lt;!-- Step --&gt;
  &lt;a href=&quot;#&quot; className=&quot;step-item&quot;&gt;
    &lt;div className=&quot;step-progress&quot;&gt;
      &lt;span className=&quot;step-count&quot;&gt;4&lt;/span&gt;
    &lt;/div&gt;
    &lt;div className=&quot;step-label&quot;&gt;
      &lt;i className=&quot;ci-card&quot;&gt;&lt;/i&gt;
      Payment
    &lt;/div&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Steps light skin
.steps.steps-light
  a(href=&quot;#&quot;).step-item.active
    .step-progress
      span.step-count 1
    .step-label
      i.ci-cart
      | Cart

  // Step
  a(href=&quot;#&quot;).step-item.active.current
    .step-progress
      span.step-count 2
    .step-label
      i.ci-user-circle
      | Your details

  // Step
  a(href=&quot;#&quot;).step-item
    .step-progress
      span.step-count 3
    .step-label
      i.ci-package
      | Shipping

  // Step
  a(href=&quot;#&quot;).step-item
    .step-progress
      span.step-count 4
    .step-label
      i.ci-card
      | Payment
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Based on media tabs-->
                    <section className="pb-5 mb-md-2" id="steps-media-tabs">
                        <h2 className="h5 mb-3">Based on media tabs</h2>
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
                                        <ul
                                            className="nav nav-tabs media-tabs nav-justified"
                                        >
                                            <li className="nav-item">
                                                <div
                                                    className="nav-link completed"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-bag"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                First step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Order placed
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <div
                                                    className="nav-link active"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-settings"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Second step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Processing order
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link">
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-star"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Third step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Quality check
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <div className="nav-link">
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-package"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Fourth step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Product
                                                                dispatched
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Steps based on media tabs --&gt;
&lt;ul className=&quot;nav nav-tabs media-tabs nav-justified&quot;&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;div className=&quot;nav-link completed&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-bag&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;First step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Order placed&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;div className=&quot;nav-link active&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-settings&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Second step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Processing order&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;div className=&quot;nav-link&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-star&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Third step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Quality check&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;div className=&quot;nav-link&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-package&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Fourth step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Product dispatched&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Steps based on media tabs
ul.nav.nav-tabs.media-tabs.nav-justified
  li.nav-item
    .nav-link.completed
      .d-flex.align-items-center
        .media-tab-media
          i.ci-bag
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1 First step
          h6.media-tab-title.text-nowrap.mb-0 Order placed
  li.nav-item
    .nav-link.active
      .d-flex.align-items-center
        .media-tab-media
          i.ci-settings
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1 Second step
          h6.media-tab-title.text-nowrap.mb-0 Processing order
  li.nav-item
    .nav-link
      .d-flex.align-items-center
        .media-tab-media
          i.ci-star
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1 Third step
          h6.media-tab-title.text-nowrap.mb-0 Quality check
  li.nav-item
    .nav-link
      .d-flex.align-items-center
        .media-tab-media
          i.ci-package
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1 Fourth step
          h6.media-tab-title.text-nowrap.mb-0 Product dispatched</code></pre>
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
                                            href="#steps-dark"
                                            >Dark skin</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#steps-light"
                                            >Light skin</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#steps-media-tabs"
                                            >Based on media tabs</a
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
