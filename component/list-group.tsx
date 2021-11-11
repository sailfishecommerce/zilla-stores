<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | List group</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">List group</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Flexible component for displaying a series of
                                content.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/list-group/"
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
                    <section className="pb-5 mb-md-2" id="lg-basic">
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
                                        <div className="row">
                                            <div
                                                className="col-xl-5 col-lg-7 col-md-6"
                                            >
                                                <ul className="list-group">
                                                    <li
                                                        className="list-group-item active"
                                                    >
                                                        Active item here
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li
                                                        className="list-group-item disabled"
                                                        aria-disabled="true"
                                                    >
                                                        Disabled item here
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Porta ac consectetur ac
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Vestibulum at eros
                                                    </li>
                                                </ul>
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
                                        ><code className="lang-html">&lt;!-- Basic list group --&gt;
&lt;ul className=&quot;list-group&quot;&gt;
  &lt;li className=&quot;list-group-item active&quot;&gt;Active item here&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li className=&quot;list-group-item disabled&quot; aria-disabled=&quot;true&quot;&gt;Disabled item here&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Basic list group
ul.list-group
  li.list-group-item.active
    | Active item here
  li.list-group-item
    | Dapibus ac facilisis in
  li(aria-disabled=&quot;true&quot;).list-group-item.disabled
    | Disabled item here
  li.list-group-item
    | Porta ac consectetur ac
  li.list-group-item
    | Vestibulum at eros
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Links or buttons-->
                    <section className="pb-5 mb-md-2" id="lg-links">
                        <h2 className="h5 mb-3">Links or buttons</h2>
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
                                        <div className="row">
                                            <div
                                                className="col-xl-5 col-lg-7 col-md-6"
                                            >
                                                <div className="list-group">
                                                    <a
                                                        className="list-group-item list-group-item-action"
                                                        href="#"
                                                        >Dapibus ac facilisis
                                                        in</a
                                                    ><a
                                                        className="list-group-item list-group-item-action active"
                                                        href="#"
                                                        >Active item here</a
                                                    ><a
                                                        className="list-group-item list-group-item-action"
                                                        href="#"
                                                        >Porta ac consectetur
                                                        ac</a
                                                    ><a
                                                        className="list-group-item list-group-item-action disabled"
                                                        href="#"
                                                        tabindex="-1"
                                                        aria-disabled="true"
                                                        >Disabled item here</a
                                                    ><a
                                                        className="list-group-item list-group-item-action"
                                                        href="#"
                                                        >Vestibulum at eros</a
                                                    >
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
                                        ><code className="lang-html">&lt;!-- Actionalbe list group --&gt;
&lt;div className=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action&quot;&gt;Dapibus ac facilisis in&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action active&quot;&gt;Active item here&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action&quot;&gt;Porta ac consectetur ac&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action disabled&quot; tabindex=&quot;-1&quot; aria-disabled=&quot;true&quot;&gt;Disabled item here&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action&quot;&gt;Vestibulum at eros&lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Actionalbe list group
.list-group
  a(href=&quot;#&quot;).list-group-item.list-group-item-action
    | Dapibus ac facilisis in
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.active
    | Active item here
  a(href=&quot;#&quot;).list-group-item.list-group-item-action
    | Porta ac consectetur ac
  a(href=&quot;#&quot;, tabindex=&quot;-1&quot;, aria-disabled=&quot;true&quot;).list-group-item.list-group-item-action.disabled
    | Disabled item here
  a(href=&quot;#&quot;).list-group-item.list-group-item-action
    | Vestibulum at eros
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Flush-->
                    <section className="pb-5 mb-md-2" id="lg-flush">
                        <h2 className="h5 mb-3">Flush</h2>
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
                                            <div
                                                className="col-xl-5 col-lg-7 col-md-6"
                                            >
                                                <ul
                                                    className="list-group list-group-flush"
                                                >
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Cras justo odio
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Morbi leo risus
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Porta ac consectetur ac
                                                    </li>
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Vestibulum at eros
                                                    </li>
                                                </ul>
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
                                        ><code className="lang-html">&lt;!-- Flush list group --&gt;
&lt;ul className=&quot;list-group list-group-flush&quot;&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Flush list group
ul.list-group.list-group-flush
  li.list-group-item
    | Cras justo odio
  li.list-group-item
    | Dapibus ac facilisis in
  li.list-group-item
    | Morbi leo risus
  li.list-group-item
    | Porta ac consectetur ac
  li.list-group-item
    | Vestibulum at eros
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- With icons & badges-->
                    <section className="pb-5 mb-md-2" id="lg-icons">
                        <h2 className="h5 mb-3">With icons &amp; badges</h2>
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
                                            <div
                                                className="col-xl-5 col-lg-7 col-md-6"
                                            >
                                                <ul className="list-group">
                                                    <li
                                                        className="list-group-item d-flex justify-content-between align-items-center"
                                                    >
                                                        <span
                                                            ><i
                                                                className="ci-message text-muted me-2"
                                                            ></i
                                                            >Messages</span
                                                        ><span
                                                            className="badge rounded-pill bg-info"
                                                            >14</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="list-group-item d-flex justify-content-between align-items-center"
                                                    >
                                                        <span
                                                            ><i
                                                                className="ci-bag mt-n1 text-muted me-2"
                                                            ></i
                                                            >Orders</span
                                                        ><span
                                                            className="badge rounded-pill bg-warning"
                                                            >2</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="list-group-item d-flex justify-content-between align-items-center"
                                                    >
                                                        <span
                                                            ><i
                                                                className="ci-heart text-muted me-2"
                                                            ></i
                                                            >Favourites</span
                                                        ><span
                                                            className="badge rounded-pill bg-danger"
                                                            >6</span
                                                        >
                                                    </li>
                                                </ul>
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
                                        ><code className="lang-html">&lt;!-- List group with icons and badges --&gt;
&lt;ul className=&quot;list-group&quot;&gt;
  &lt;li className=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
    &lt;span&gt;
      &lt;i className=&quot;ci-message text-muted me-2&quot;&gt;&lt;/i&gt;
      Messages
    &lt;/span&gt;
    &lt;span className=&quot;badge rounded-pill bg-info&quot;&gt;14&lt;/span&gt;
  &lt;/li&gt;
  &lt;li className=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
    &lt;span&gt;
      &lt;i className=&quot;ci-bag mt-n1 text-muted me-2&quot;&gt;&lt;/i&gt;
      Orders
    &lt;/span&gt;
    &lt;span className=&quot;badge rounded-pill bg-warning&quot;&gt;2&lt;/span&gt;
  &lt;/li&gt;
  &lt;li className=&quot;list-group-item d-flex justify-content-between align-items-center&quot;&gt;
    &lt;span&gt;
      &lt;i className=&quot;ci-heart text-muted me-2&quot;&gt;&lt;/i&gt;
      Favourites
    &lt;/span&gt;
    &lt;span className=&quot;badge rounded-pill bg-danger&quot;&gt;6&lt;/span&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// List group with icons and badges
ul.list-group
  li.list-group-item.d-flex.justify-content-between.align-items-center
    span
      i.ci-message.text-muted.me-2
      | Messages
    span.badge.rounded-pill.bg-info 14
  li.list-group-item.d-flex.justify-content-between.align-items-center
    span
      i.ci-bag.mt-n1.text-muted.me-2
      | Orders
    span.badge.rounded-pill.bg-warning 2
  li.list-group-item.d-flex.justify-content-between.align-items-center
    span
      i.ci-heart.text-muted.me-2
      | Favourites
    span.badge.rounded-pill.bg-danger 6
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Checkboxes & radios-->
                    <section className="pb-5 mb-md-2" id="lg-checkboxes">
                        <h2 className="h5 mb-3">Checkboxes &amp; radios</h2>
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
                                        <div className="row">
                                            <div
                                                className="col-xl-5 col-sm-6 mb-4 mb-sm-0"
                                            >
                                                <div className="list-group">
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            checked
                                                            value=""
                                                        /><span
                                                            >Cras justo
                                                            odio</span
                                                        >
                                                    </label>
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                        /><span
                                                            >Dapibus ac
                                                            facilisis in</span
                                                        >
                                                    </label>
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                        /><span
                                                            >Morbi leo
                                                            risus</span
                                                        >
                                                    </label>
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            value=""
                                                        /><span
                                                            >Porta ac
                                                            consectetur ac</span
                                                        >
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-sm-6">
                                                <div className="list-group">
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="radio"
                                                            name="lg-radio"
                                                            checked
                                                            value=""
                                                        /><span
                                                            >Cras justo
                                                            odio</span
                                                        >
                                                    </label>
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="radio"
                                                            name="lg-radio"
                                                            value=""
                                                        /><span
                                                            >Dapibus ac
                                                            facilisis in</span
                                                        >
                                                    </label>
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="radio"
                                                            name="lg-radio"
                                                            value=""
                                                        /><span
                                                            >Morbi leo
                                                            risus</span
                                                        >
                                                    </label>
                                                    <label
                                                        className="list-group-item"
                                                    >
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="radio"
                                                            name="lg-radio"
                                                            value=""
                                                        /><span
                                                            >Porta ac
                                                            consectetur ac</span
                                                        >
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- List group with checkboxes --&gt;
&lt;div className=&quot;list-group&quot;&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;checkbox&quot; checked value=&quot;&quot;&gt;&lt;span&gt;Cras justo odio&lt;/span&gt;
  &lt;/label&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;&lt;span&gt;Dapibus ac facilisis in&lt;/span&gt;
  &lt;/label&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;&lt;span&gt;Morbi leo risus&lt;/span&gt;
  &lt;/label&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;checkbox&quot; value=&quot;&quot;&gt;&lt;span&gt;Porta ac consectetur ac&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;

&lt;!-- List group with radios --&gt;
&lt;div className=&quot;list-group&quot;&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;radio&quot; name=&quot;lg-radio&quot; checked value=&quot;&quot;&gt;&lt;span&gt;Cras justo odio&lt;/span&gt;
  &lt;/label&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;radio&quot; name=&quot;lg-radio&quot; value=&quot;&quot;&gt;&lt;span&gt;Dapibus ac facilisis in&lt;/span&gt;
  &lt;/label&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;radio&quot; name=&quot;lg-radio&quot; value=&quot;&quot;&gt;&lt;span&gt;Morbi leo risus&lt;/span&gt;
  &lt;/label&gt;
  &lt;label className=&quot;list-group-item&quot;&gt;
    &lt;input className=&quot;form-check-input me-2&quot; type=&quot;radio&quot; name=&quot;lg-radio&quot; value=&quot;&quot;&gt;&lt;span&gt;Porta ac consectetur ac&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// List group with checkboxes
.list-group
  label.list-group-item
    input(type=&quot;checkbox&quot;, value=&quot;&quot;, checked).form-check-input.me-2
    span Cras justo odio
  label.list-group-item
    input(type=&quot;checkbox&quot;, value=&quot;&quot;).form-check-input.me-2
    span Dapibus ac facilisis in
  label.list-group-item
    input(type=&quot;checkbox&quot;, value=&quot;&quot;).form-check-input.me-2
    span Morbi leo risus
  label.list-group-item
    input(type=&quot;checkbox&quot;, value=&quot;&quot;).form-check-input.me-2
    span Porta ac consectetur ac

// List group with radios
.list-group
  label.list-group-item
    input(type=&quot;radio&quot;, name=&quot;lg-radio&quot;, value=&quot;&quot;, checked).form-check-input.me-2
    span Cras justo odio
  label.list-group-item
    input(type=&quot;radio&quot;, name=&quot;lg-radio&quot;, value=&quot;&quot;).form-check-input.me-2
    span Dapibus ac facilisis in
  label.list-group-item
    input(type=&quot;radio&quot;, name=&quot;lg-radio&quot;, value=&quot;&quot;).form-check-input.me-2
    span Morbi leo risus
  label.list-group-item
    input(type=&quot;radio&quot;, name=&quot;lg-radio&quot;, value=&quot;&quot;).form-check-input.me-2
    span Porta ac consectetur ac
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Horizontal list group-->
                    <section className="pb-5 mb-md-2" id="lg-horizontal">
                        <h2 className="h5 mb-3">Horizontal list group</h2>
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
                                        <ul
                                            className="list-group list-group-horizontal-sm mb-3"
                                        >
                                            <li className="list-group-item">
                                                Cras justo odio
                                            </li>
                                            <li className="list-group-item">
                                                Dapibus ac facilisis in
                                            </li>
                                            <li className="list-group-item">
                                                Morbi leo risus
                                            </li>
                                        </ul>
                                        <ul
                                            className="list-group list-group-horizontal-sm"
                                        >
                                            <li
                                                className="list-group-item flex-fill text-center"
                                            >
                                                Cras justo odio
                                            </li>
                                            <li
                                                className="list-group-item flex-fill text-center"
                                            >
                                                Dapibus ac facilisis in
                                            </li>
                                            <li
                                                className="list-group-item flex-fill text-center"
                                            >
                                                Morbi leo risus
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Basic horizontal list group (starting sm screen) --&gt;
&lt;ul className=&quot;list-group list-group-horizontal-sm&quot;&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Justified horizontal list group (starting sm screen) --&gt;
&lt;ul className=&quot;list-group list-group-horizontal-sm&quot;&gt;
  &lt;li className=&quot;list-group-item flex-fill text-center&quot;&gt;Cras justo odio&lt;/li&gt;
  &lt;li className=&quot;list-group-item flex-fill text-center&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li className=&quot;list-group-item flex-fill text-center&quot;&gt;Morbi leo risus&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Basic horizontal list group (starting sm screen)
ul.list-group.list-group-horizontal-sm
  li.list-group-item
    | Cras justo odio
  li.list-group-item
    | Dapibus ac facilisis in
  li.list-group-item
    | Morbi leo risus

// Justified horizontal list group (starting sm screen)
ul.list-group.list-group-horizontal-sm
  li.list-group-item.flex-fill.text-center
    | Cras justo odio
  li.list-group-item.flex-fill.text-center
    | Dapibus ac facilisis in
  li.list-group-item.flex-fill.text-center
    | Morbi leo risus
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Actionable horizontal list group-->
                    <section className="pb-5 mb-md-2" id="lg-horizontal-action">
                        <h2 className="h5 mb-3">
                            Actionable horizontal list group
                        </h2>
                        <div className="card border-0 shadow">
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
                            <div className="card-body">
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="result7"
                                        role="tabpanel"
                                    >
                                        <div
                                            className="list-group list-group-horizontal-sm"
                                        >
                                            <a
                                                className="list-group-item list-group-item-action active text-center"
                                                href="#"
                                                >Active item here</a
                                            ><a
                                                className="list-group-item list-group-item-action text-center"
                                                href="#"
                                                >Dapibus ac facilisis in</a
                                            ><a
                                                className="list-group-item list-group-item-action text-center"
                                                href="#"
                                                >Morbi leo risus</a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Actionable horizontal list group (starting sm screen) --&gt;
&lt;div className=&quot;list-group list-group-horizontal-sm&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action active text-center&quot;&gt;Active item here&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action text-center&quot;&gt;Dapibus ac facilisis in&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action text-center&quot;&gt;Morbi leo risus&lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Actionable horizontal list group (starting sm screen)
.list-group.list-group-horizontal-sm
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.active.text-center
    | Active item here
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.text-center
    | Dapibus ac facilisis in
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.text-center
    | Morbi leo risus
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Contextual classes-->
                    <section className="pb-5 mb-md-2" id="lg-contextual">
                        <h2 className="h5 mb-3">Contextual classes</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result8"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result8"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html8"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html8"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug8"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug8"
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
                                        id="result8"
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="list-group">
                                                    <li
                                                        className="list-group-item"
                                                    >
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-primary"
                                                    >
                                                        A simple primary list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-accent"
                                                    >
                                                        A simple accent list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-secondary"
                                                    >
                                                        A simple secondary list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-success"
                                                    >
                                                        A simple success list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-danger"
                                                    >
                                                        A simple danger list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-warning"
                                                    >
                                                        A simple warning list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-info"
                                                    >
                                                        A simple info list group
                                                        item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-light"
                                                    >
                                                        A simple light list
                                                        group item
                                                    </li>
                                                    <li
                                                        className="list-group-item list-group-item-dark"
                                                    >
                                                        A simple dark list group
                                                        item
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="list-group">
                                                    <a
                                                        className="list-group-item list-group-item-action"
                                                        href="#"
                                                        >Dapibus ac facilisis
                                                        in</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-primary"
                                                        href="#"
                                                        >A simple primary list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-accent"
                                                        href="#"
                                                        >A simple accent list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-secondary"
                                                        href="#"
                                                        >A simple secondary list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-success"
                                                        href="#"
                                                        >A simple success list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-danger"
                                                        href="#"
                                                        >A simple danger list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-warning"
                                                        href="#"
                                                        >A simple warning list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-info"
                                                        href="#"
                                                        >A simple info list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-light"
                                                        href="#"
                                                        >A simple light list
                                                        group item</a
                                                    ><a
                                                        className="list-group-item list-group-item-action list-group-item-dark"
                                                        href="#"
                                                        >A simple dark list
                                                        group item</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Contextual classes on basic list group --&gt;
&lt;ul className=&quot;list-group&quot;&gt;
  &lt;li className=&quot;list-group-item&quot;&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-primary&quot;&gt;A simple primary list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-accent&quot;&gt;A simple accent list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-secondary&quot;&gt;A simple secondary list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-success&quot;&gt;A simple success list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-danger&quot;&gt;A simple danger list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-warning&quot;&gt;A simple warning list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-info&quot;&gt;A simple info list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-light&quot;&gt;A simple light list group item&lt;/li&gt;
  &lt;li className=&quot;list-group-item list-group-item-dark&quot;&gt;A simple dark list group item&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Contextual classes on actionable list group --&gt;
&lt;div className=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action&quot;&gt;Dapibus ac facilisis in&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-primary&quot;&gt;A simple primary list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-accent&quot;&gt;A simple accent list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-secondary&quot;&gt;A simple secondary list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-success&quot;&gt;A simple success list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-danger&quot;&gt;A simple danger list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-warning&quot;&gt;A simple warning list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-info&quot;&gt;A simple info list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-light&quot;&gt;A simple light list group item&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action list-group-item-dark&quot;&gt;A simple dark list group item&lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Contextual classes on basic list group
ul.list-group
  li.list-group-item Dapibus ac facilisis in
  li.list-group-item.list-group-item-primary A simple primary list group item
  li.list-group-item.list-group-item-accent A simple accent list group item
  li.list-group-item.list-group-item-secondary A simple secondary list group item
  li.list-group-item.list-group-item-success A simple success list group item
  li.list-group-item.list-group-item-danger A simple danger list group item
  li.list-group-item.list-group-item-warning A simple warning list group item
  li.list-group-item.list-group-item-info A simple info list group item
  li.list-group-item.list-group-item-light A simple light list group item
  li.list-group-item.list-group-item-dark A simple dark list group item

// Contextual classes on actionable list group
.list-group
  a(href=&quot;#&quot;).list-group-item.list-group-item-action
    | Dapibus ac facilisis in
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-primary
    | A simple primary list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-accent
    | A simple accent list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-secondary
    | A simple secondary list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-success
    | A simple success list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-danger
    | A simple danger list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-warning
    | A simple warning list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-info
    | A simple info list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-light
    | A simple light list group item
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.list-group-item-dark
    | A simple dark list group item
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Custom content-->
                    <section className="pb-5 mb-md-2" id="lg-custom-content">
                        <h2 className="h5 mb-3">Custom content</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result9"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result9"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html9"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html9"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug9"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug9"
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
                                        id="result9"
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            <div
                                                className="col-xl-6 col-lg-8 col-md-6"
                                            >
                                                <div className="list-group">
                                                    <a
                                                        className="list-group-item list-group-item-action flex-column align-items-start active py-3"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="d-flex flex-wrap w-100 justify-content-between"
                                                        >
                                                            <h6
                                                                className="text-white"
                                                            >
                                                                List group item
                                                                heading
                                                            </h6>
                                                            <small
                                                                className="text-white opacity-50 mb-2"
                                                                >3 days
                                                                ago</small
                                                            >
                                                        </div>
                                                        <p
                                                            className="fs-sm fw-normal text-white opacity-75"
                                                        >
                                                            Donec id elit non mi
                                                            porta gravida at
                                                            eget metus. Maecenas
                                                            sed diam eget risus
                                                            varius blandit.
                                                            Excepteur sint
                                                            occaecat cupidatat.
                                                            Excepteur sint
                                                            occaecat cupidatat.
                                                        </p>
                                                        <small
                                                            className="text-white opacity-50"
                                                            >Donec id elit non
                                                            mi porta.</small
                                                        ></a
                                                    ><a
                                                        className="list-group-item list-group-item-action flex-column align-items-start py-3"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="d-flex flex-wrap w-100 justify-content-between"
                                                        >
                                                            <h6>
                                                                List group item
                                                                heading
                                                            </h6>
                                                            <small
                                                                className="text-muted mb-2"
                                                                >3 days
                                                                ago</small
                                                            >
                                                        </div>
                                                        <p
                                                            className="fs-sm fw-normal text-body"
                                                        >
                                                            Donec id elit non mi
                                                            porta gravida at
                                                            eget metus. Maecenas
                                                            sed diam eget risus
                                                            varius blandit.
                                                            Excepteur sint
                                                            occaecat cupidatat.
                                                            Excepteur sint
                                                            occaecat cupidatat.
                                                        </p>
                                                        <small
                                                            className="text-muted"
                                                            >Donec id elit non
                                                            mi porta.</small
                                                        ></a
                                                    ><a
                                                        className="list-group-item list-group-item-action flex-column align-items-start py-3"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="d-flex flex-wrap w-100 justify-content-between"
                                                        >
                                                            <h6>
                                                                List group item
                                                                heading
                                                            </h6>
                                                            <small
                                                                className="text-muted mb-2"
                                                                >3 days
                                                                ago</small
                                                            >
                                                        </div>
                                                        <p
                                                            className="fs-sm fw-normal text-body"
                                                        >
                                                            Donec id elit non mi
                                                            porta gravida at
                                                            eget metus. Maecenas
                                                            sed diam eget risus
                                                            varius blandit.
                                                            Excepteur sint
                                                            occaecat cupidatat.
                                                            Excepteur sint
                                                            occaecat cupidatat.
                                                        </p>
                                                        <small
                                                            className="text-muted"
                                                            >Donec id elit non
                                                            mi porta.</small
                                                        ></a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- List group with custom content --&gt;
&lt;div className=&quot;list-group&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action flex-column align-items-start py-3 active&quot;&gt;
    &lt;div className=&quot;d-flex flex-wrap w-100 justify-content-between&quot;&gt;
      &lt;h6 className=&quot;text-white&quot;&gt;List group item heading&lt;/h6&gt;
      &lt;small className=&quot;text-white opacity-50 mb-2&quot;&gt;3 days ago&lt;/small&gt;
    &lt;/div&gt;
    &lt;p className=&quot;fs-sm fw-normal text-white opacity-75&quot;&gt;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.&lt;/p&gt;
    &lt;small className=&quot;text-white opacity-50&quot;&gt;Donec id elit non mi porta.&lt;/small&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action flex-column align-items-start py-3&quot;&gt;
    &lt;div className=&quot;d-flex flex-wrap w-100 justify-content-between&quot;&gt;
      &lt;h6&gt;List group item heading&lt;/h6&gt;
      &lt;small className=&quot;text-muted mb-2&quot;&gt;3 days ago&lt;/small&gt;
    &lt;/div&gt;
    &lt;p className=&quot;fs-sm fw-normal text-body&quot;&gt;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.&lt;/p&gt;
    &lt;small className=&quot;text-muted&quot;&gt;Donec id elit non mi porta.&lt;/small&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;list-group-item list-group-item-action flex-column align-items-start py-3&quot;&gt;
    &lt;div className=&quot;d-flex flex-wrap w-100 justify-content-between&quot;&gt;
      &lt;h6&gt;List group item heading&lt;/h6&gt;
      &lt;small className=&quot;text-muted mb-2&quot;&gt;3 days ago&lt;/small&gt;
    &lt;/div&gt;
    &lt;p className=&quot;fs-sm fw-normal text-body&quot;&gt;Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.&lt;/p&gt;
    &lt;small className=&quot;text-muted&quot;&gt;Donec id elit non mi porta.&lt;/small&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// List group with custom content
.list-group
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.flex-column.align-items-start.py-3.active
    .d-flex.flex-wrap.w-100.justify-content-between
      h6.text-white
        | List group item heading
      small.text-white.opacity-50.mb-2
        | 3 days ago
    p.fs-sm.fw-normal.text-white.opacity-75
      | Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    small.text-white.opacity-50
      | Donec id elit non mi porta.
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.flex-column.align-items-start.py-3
    .d-flex.flex-wrap.w-100.justify-content-between
      h6
        | List group item heading
      small.text-muted.mb-2
        | 3 days ago
    p.fs-sm.fw-normal.text-body
      | Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    small.text-muted
      | Donec id elit non mi porta.
  a(href=&quot;#&quot;).list-group-item.list-group-item-action.flex-column.align-items-start.py-3
    .d-flex.flex-wrap.w-100.justify-content-between
      h6
        | List group item heading
      small.text-muted.mb-2
        | 3 days ago
    p.fs-sm.fw-normal.text-body
      | Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit. Excepteur sint occaecat cupidatat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
    small.text-muted
      | Donec id elit non mi porta.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- JavaScript behavior-->
                    <section className="pb-5 mb-md-2" id="lg-javascript">
                        <h2 className="h5 mb-3">JavaScript behavior</h2>
                        <div className="card border-0 shadow">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result10"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result10"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html10"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html10"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug10"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug10"
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
                                        id="result10"
                                        role="tabpanel"
                                    >
                                        <div className="row">
                                            <div className="col-xl-11">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div
                                                            className="list-group"
                                                            role="tablist"
                                                        >
                                                            <a
                                                                className="list-group-item list-group-item-action active"
                                                                href="#list-home"
                                                                data-bs-toggle="list"
                                                                role="tab"
                                                                aria-controls="list-home"
                                                                id="list-home-list"
                                                                >Home</a
                                                            ><a
                                                                className="list-group-item list-group-item-action"
                                                                href="#list-profile"
                                                                data-bs-toggle="list"
                                                                role="tab"
                                                                aria-controls="list-profile"
                                                                id="list-profile-list"
                                                                >Profile</a
                                                            ><a
                                                                className="list-group-item list-group-item-action"
                                                                href="#list-messages"
                                                                data-bs-toggle="list"
                                                                role="tab"
                                                                aria-controls="list-messages"
                                                                id="list-messages-list"
                                                                >Messages</a
                                                            ><a
                                                                className="list-group-item list-group-item-action"
                                                                href="#list-settings"
                                                                data-bs-toggle="list"
                                                                role="tab"
                                                                aria-controls="list-settings"
                                                                id="list-settings-list"
                                                                >Settings</a
                                                            >
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-md-8 pt-4 pt-md-0"
                                                    >
                                                        <div
                                                            className="tab-content"
                                                        >
                                                            <div
                                                                className="tab-pane fade show active"
                                                                id="list-home"
                                                                role="tabpanel"
                                                                aria-labelledby="list-home-list"
                                                            >
                                                                Velit aute
                                                                mollit ipsum ad
                                                                dolor
                                                                consectetur
                                                                nulla officia
                                                                culpa
                                                                adipisicing
                                                                exercitation
                                                                fugiat tempor.
                                                                Voluptate
                                                                deserunt sit
                                                                sunt nisi aliqua
                                                                fugiat proident
                                                                ea ut. Mollit
                                                                voluptate
                                                                reprehenderit
                                                                occaecat nisi ad
                                                                non minim tempor
                                                                sunt voluptate
                                                                consectetur
                                                                exercitation id
                                                                ut nulla. Ea et
                                                                fugiat aliquip
                                                                nostrud sunt
                                                                incididunt
                                                                consectetur
                                                                culpa aliquip
                                                                eiusmod dolor.
                                                                Anim ad Lorem
                                                                aliqua in
                                                                cupidatat nisi
                                                                enim eu nostrud.
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="list-profile"
                                                                role="tabpanel"
                                                                aria-labelledby="list-profile-list"
                                                            >
                                                                Cupidatat quis
                                                                ad sint
                                                                excepteur
                                                                laborum in esse
                                                                qui. Et
                                                                excepteur
                                                                consectetur ex
                                                                nisi eu do
                                                                cillum ad
                                                                laborum. Mollit
                                                                et eu officia
                                                                dolore sunt
                                                                Lorem culpa qui
                                                                commodo velit ex
                                                                amet id ex.
                                                                Officia anim
                                                                incididunt
                                                                laboris deserunt
                                                                anim aute dolor
                                                                incididunt
                                                                veniam aute
                                                                dolore do
                                                                exercitation.
                                                                Dolor nisi culpa
                                                                ex ad irure in
                                                                elit eu dolore.
                                                                Ad laboris ipsum
                                                                reprehenderit
                                                                irure non
                                                                commodo enim
                                                                culpa commodo
                                                                veniam.
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="list-messages"
                                                                role="tabpanel"
                                                                aria-labelledby="list-messages-list"
                                                            >
                                                                Ut ut do
                                                                pariatur aliquip
                                                                aliqua aliquip
                                                                exercitation do
                                                                nostrud commodo
                                                                reprehenderit
                                                                aute ipsum
                                                                voluptate. Irure
                                                                Lorem et laboris
                                                                nostrud amet
                                                                cupidatat
                                                                cupidatat anim
                                                                do ut velit
                                                                mollit consequat
                                                                enim tempor.
                                                                Consectetur est
                                                                minim nostrud
                                                                nostrud
                                                                consectetur
                                                                irure labore
                                                                voluptate irure.
                                                                Ipsum id Lorem
                                                                sit sint
                                                                voluptate est
                                                                pariatur eu ad
                                                                cupidatat et
                                                                deserunt culpa
                                                                sit eiusmod
                                                                deserunt.
                                                                Consectetur et
                                                                fugiat anim do
                                                                eiusmod aliquip
                                                                nulla laborum
                                                                elit adipisicing
                                                                pariatur cillum.
                                                            </div>
                                                            <div
                                                                className="tab-pane fade"
                                                                id="list-settings"
                                                                role="tabpanel"
                                                                aria-labelledby="list-settings-list"
                                                            >
                                                                Irure enim
                                                                occaecat labore
                                                                sit qui aliquip
                                                                reprehenderit
                                                                amet velit.
                                                                Deserunt ullamco
                                                                ex elit nostrud
                                                                ut dolore nisi
                                                                officia magna
                                                                sit occaecat
                                                                laboris sunt
                                                                dolor. Nisi eu
                                                                minim cillum
                                                                occaecat aute
                                                                est cupidatat
                                                                aliqua labore
                                                                aute occaecat ea
                                                                aliquip sunt
                                                                amet. Aute
                                                                mollit dolor ut
                                                                exercitation
                                                                irure commodo
                                                                non amet
                                                                consectetur quis
                                                                amet culpa. Quis
                                                                ullamco nisi
                                                                amet qui aute
                                                                irure eu. Magna
                                                                labore dolor
                                                                quis ex labore
                                                                id nostrud
                                                                deserunt dolor
                                                                eiusmod eu
                                                                pariatur culpa
                                                                mollit in irure.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- JavaScript behavior --&gt;
&lt;div className=&quot;row&quot;&gt;
  &lt;div className=&quot;col-md-4&quot;&gt;
    &lt;div className=&quot;list-group&quot; role=&quot;tablist&quot;&gt;
      &lt;a href=&quot;#list-home&quot; id=&quot;list-home-list&quot; className=&quot;list-group-item list-group-item-action active&quot; data-bs-toggle=&quot;list&quot; role=&quot;tab&quot; aria-controls=&quot;list-home&quot;&gt;
        Home
      &lt;/a&gt;
      &lt;a href=&quot;#list-profile&quot; id=&quot;list-profile-list&quot; className=&quot;list-group-item list-group-item-action&quot; data-bs-toggle=&quot;list&quot; role=&quot;tab&quot; aria-controls=&quot;list-profile&quot;&gt;
        Profile
      &lt;/a&gt;
      &lt;a href=&quot;#list-messages&quot; id=&quot;list-messages-list&quot; className=&quot;list-group-item list-group-item-action&quot; data-bs-toggle=&quot;list&quot; role=&quot;tab&quot; aria-controls=&quot;list-messages&quot;&gt;
        Messages
      &lt;/a&gt;
      &lt;a href=&quot;#list-settings&quot; id=&quot;list-settings-list&quot; className=&quot;list-group-item list-group-item-action&quot; data-bs-toggle=&quot;list&quot; role=&quot;tab&quot; aria-controls=&quot;list-settings&quot;&gt;
        Settings
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div className=&quot;col-md-8 pt-4 pt-md-0&quot;&gt;
    &lt;div className=&quot;tab-content&quot;&gt;
      &lt;div id=&quot;list-home&quot; className=&quot;tab-pane fade show active&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;list-home-list&quot;&gt;...&lt;/div&gt;
      &lt;div id=&quot;list-profile&quot; className=&quot;tab-pane fade&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;list-profile-list&quot;&gt;...&lt;/div&gt;
      &lt;div id=&quot;list-messages&quot; className=&quot;tab-pane fade&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;list-messages-list&quot;&gt;...&lt;/div&gt;
      &lt;div id=&quot;list-settings&quot; className=&quot;tab-pane fade&quot; role=&quot;tabpanel&quot; aria-labelledby=&quot;list-settings-list&quot;&gt;...&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// JavaScript behavior
.row
  .col-md-4
    .list-group(role=&quot;tablist&quot;)
      a(href=&quot;#list-home&quot;, data-bs-toggle=&quot;list&quot;, role=&quot;tab&quot;, aria-controls=&quot;list-home&quot;)#list-home-list.list-group-item.list-group-item-action.active
        | Home
      a(href=&quot;#list-profile&quot;, data-bs-toggle=&quot;list&quot; role=&quot;tab&quot;, aria-controls=&quot;list-profile&quot;)#list-profile-list.list-group-item.list-group-item-action
        | Profile
      a(href=&quot;#list-messages&quot;, data-bs-toggle=&quot;list&quot;, role=&quot;tab&quot;, aria-controls=&quot;list-messages&quot;)#list-messages-list.list-group-item.list-group-item-action
        | Messages
      a(href=&quot;#list-settings&quot;, data-bs-toggle=&quot;list&quot;, role=&quot;tab&quot;, aria-controls=&quot;list-settings&quot;)#list-settings-list.list-group-item.list-group-item-action
        | Settings
  .col-md-8.pt-4.pt-md-0
    .tab-content
      #list-home.tab-pane.fade.show.active(role=&quot;tabpanel&quot;, aria-labelledby=&quot;list-home-list&quot;)
        | ...
      #list-profile.tab-pane.fade(role=&quot;tabpanel&quot;, aria-labelledby=&quot;list-profile-list&quot;)
        | ...
      #list-messages.tab-pane.fade(role=&quot;tabpanel&quot;, aria-labelledby=&quot;list-messages-list&quot;)
        | ...
      #list-settings.tab-pane.fade(role=&quot;tabpanel&quot;, aria-labelledby=&quot;list-settings-list&quot;)
        | ...</code></pre>
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
                                            href="#lg-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-links"
                                            >Links or buttons</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-flush"
                                            >Flush</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-icons"
                                            >With icons &amp; badges</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-checkboxes"
                                            >Checkboxes &amp; radios</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-horizontal"
                                            >Horizontal list group</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-horizontal-action"
                                            >Actionable horizontal list group</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-contextual"
                                            >Contextual classes</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-custom-content"
                                            >Custom content</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#lg-javascript"
                                            >JavaScript behavior</a
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
