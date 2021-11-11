<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Pagination</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Pagination</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Indicate a series of related content exists
                                across multiple pages.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/pagination/"
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
                    <section className="pb-5 mb-md-2" id="pagination-basic">
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
                                        <nav
                                            className="mt-2"
                                            aria-label="Page navigation example"
                                        >
                                            <ul className="pagination mb-0">
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >Prev</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-sm-none"
                                                >
                                                    <span
                                                        className="page-link page-link-static"
                                                        >2 / 5</span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >1</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item active d-none d-sm-block"
                                                    aria-current="page"
                                                >
                                                    <span className="page-link"
                                                        >2<span
                                                            className="visually-hidden"
                                                            >(current)</span
                                                        ></span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >3</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >4</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >5</a
                                                    >
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >Next</a
                                                    >
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Pagination: basic example --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
  &lt;ul className=&quot;pagination&quot;&gt;
    &lt;li className=&quot;page-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;Prev&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-sm-none&quot;&gt;
      &lt;span className=&quot;page-link page-link-static&quot;&gt;2 / 5&lt;/span&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item active d-none d-sm-block&quot; aria-current=&quot;page&quot;&gt;
      &lt;span className=&quot;page-link&quot;&gt;
        2
        &lt;span className=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;3&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;4&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;5&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Pagination: basic example
nav(aria-label=&quot;Page navigation example&quot;)
  ul.pagination
    li.page-item
      a.page-link(href=&quot;#&quot;) Prev
    li.page-item.d-sm-none
      span.page-link.page-link-static 2 / 5
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 1
    li.page-item.active.d-none.d-sm-block(aria-current=&quot;page&quot;)
      span.page-link
        | 2
        span.visually-hidden (current)
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 3
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 4
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 5
    li.page-item
      a.page-link(href=&quot;#&quot;) Next
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- With icons-->
                    <section className="pb-5 mb-md-2" id="pagination-icons">
                        <h2 className="h5 mb-3">With icons</h2>
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
                                        <nav
                                            className="mt-2 mb-4"
                                            aria-label="Page navigation example"
                                        >
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                        ><i
                                                            className="ci-arrow-left"
                                                        ></i
                                                    ></a>
                                                </li>
                                                <li
                                                    className="page-item d-sm-none"
                                                >
                                                    <span
                                                        className="page-link page-link-static"
                                                        >2 / 5</span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >1</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item active d-none d-sm-block"
                                                    aria-current="page"
                                                >
                                                    <span className="page-link"
                                                        >2<span
                                                            className="visually-hidden"
                                                            >(current)</span
                                                        ></span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >3</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >4</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >5</a
                                                    >
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Next"
                                                        ><i
                                                            className="ci-arrow-right"
                                                        ></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <nav
                                            aria-label="Page navigation example"
                                        >
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        ><i
                                                            className="ci-arrow-left me-2"
                                                        ></i
                                                        >Prev</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-sm-none"
                                                >
                                                    <span
                                                        className="page-link page-link-static"
                                                        >2 / 5</span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >1</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item active d-none d-sm-block"
                                                    aria-current="page"
                                                >
                                                    <span className="page-link"
                                                        >2<span
                                                            className="visually-hidden"
                                                            >(current)</span
                                                        ></span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >3</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >4</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >5</a
                                                    >
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Next"
                                                        >Next<i
                                                            className="ci-arrow-right ms-2"
                                                        ></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Pagination: with icons --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
  &lt;ul className=&quot;pagination&quot;&gt;
    &lt;li className=&quot;page-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot; aria-label=&quot;Previous&quot;&gt;
        &lt;i className=&quot;ci-arrow-left&quot;&gt;&lt;/i&gt;
      &lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-sm-none&quot;&gt;
      &lt;span className=&quot;page-link page-link-static&quot;&gt;2 / 5&lt;/span&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item active d-none d-sm-block&quot; aria-current=&quot;page&quot;&gt;
      &lt;span className=&quot;page-link&quot;&gt;
        2
        &lt;span className=&quot;visually-hidden&quot;&gt;(current)&lt;/span&gt;
      &lt;/span&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;3&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;4&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item d-none d-sm-block&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot;&gt;5&lt;/a&gt;
    &lt;/li&gt;
    &lt;li className=&quot;page-item&quot;&gt;
      &lt;a href=&quot;#&quot; className=&quot;page-link&quot; aria-label=&quot;Next&quot;&gt;
        &lt;i className=&quot;ci-arrow-right&quot;&gt;&lt;/i&gt;
      &lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Pagination: with icons
nav(aria-label=&quot;Page navigation example&quot;)
  ul.pagination
    li.page-item
      a.page-link(href=&quot;#&quot; aria-label=&quot;Previous&quot;)
        i.ci-arrow-left
    li.page-item.d-sm-none
      span.page-link.page-link-static 2 / 5
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 1
    li.page-item.active.d-none.d-sm-block(aria-current=&quot;page&quot;)
      span.page-link
        | 2
        span.visually-hidden (current)
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 3
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 4
    li.page-item.d-none.d-sm-block
      a.page-link(href=&quot;#&quot;) 5
    li.page-item
      a.page-link(href=&quot;#&quot; aria-label=&quot;Next&quot;)
        i.ci-arrow-right
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Sizing-->
                    <section className="pb-5 mb-md-2" id="pagination-sizing">
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
                                        <nav
                                            className="mt-2 mb-4"
                                            aria-label="Page navigation example"
                                        >
                                            <ul
                                                className="pagination pagination-lg"
                                            >
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                        ><i
                                                            className="ci-arrow-left"
                                                        ></i
                                                    ></a>
                                                </li>
                                                <li
                                                    className="page-item d-sm-none"
                                                >
                                                    <span
                                                        className="page-link page-link-static"
                                                        >2 / 5</span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >1</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item active d-none d-sm-block"
                                                    aria-current="page"
                                                >
                                                    <span className="page-link"
                                                        >2<span
                                                            className="visually-hidden"
                                                            >(current)</span
                                                        ></span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >3</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >4</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >5</a
                                                    >
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Next"
                                                        ><i
                                                            className="ci-arrow-right"
                                                        ></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <nav
                                            className="mb-4"
                                            aria-label="Page navigation example"
                                        >
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                        ><i
                                                            className="ci-arrow-left"
                                                        ></i
                                                    ></a>
                                                </li>
                                                <li
                                                    className="page-item d-sm-none"
                                                >
                                                    <span
                                                        className="page-link page-link-static"
                                                        >2 / 5</span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >1</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item active d-none d-sm-block"
                                                    aria-current="page"
                                                >
                                                    <span className="page-link"
                                                        >2<span
                                                            className="visually-hidden"
                                                            >(current)</span
                                                        ></span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >3</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >4</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >5</a
                                                    >
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Next"
                                                        ><i
                                                            className="ci-arrow-right"
                                                        ></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <nav
                                            className="mb-4"
                                            aria-label="Page navigation example"
                                        >
                                            <ul
                                                className="pagination pagination-sm"
                                            >
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                        ><i
                                                            className="ci-arrow-left"
                                                        ></i
                                                    ></a>
                                                </li>
                                                <li
                                                    className="page-item d-sm-none"
                                                >
                                                    <span
                                                        className="page-link page-link-static"
                                                        >2 / 5</span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >1</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item active d-none d-sm-block"
                                                    aria-current="page"
                                                >
                                                    <span className="page-link"
                                                        >2<span
                                                            className="visually-hidden"
                                                            >(current)</span
                                                        ></span
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >3</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >4</a
                                                    >
                                                </li>
                                                <li
                                                    className="page-item d-none d-sm-block"
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        >5</a
                                                    >
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        href="#"
                                                        aria-label="Next"
                                                        ><i
                                                            className="ci-arrow-right"
                                                        ></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Large size --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul className=&quot;pagination pagination-lg&quot;&gt;
    &lt;!-- Page links --&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;!-- Normal size --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul className=&quot;pagination&quot;&gt;
    &lt;!-- Page links --&gt;
  &lt;/ul&gt;
&lt;/nav&gt;

&lt;!-- Small size --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
  &lt;ul className=&quot;pagination pagination-sm&quot;&gt;
    &lt;!-- Page links --&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Large size
nav(aria-label=&quot;...&quot;)
  ul.pagination.pagination-lg
    //- Page links

// Normal size
nav(aria-label=&quot;...&quot;)
  ul.pagination
    //- Page links

// Small size
nav(aria-label=&quot;...&quot;)
  ul.pagination.pagination-sm
    //- Page links
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Load more (One-page)-->
                    <section className="pb-5 mb-md-2" id="pagination-load-more">
                        <h2 className="h5 mb-3">Load more (One-page)</h2>
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
                                        <nav
                                            className="d-md-flex justify-content-between align-items-center text-center text-md-left"
                                            aria-label="Page navigation"
                                        >
                                            <div
                                                className="d-md-flex align-items-center w-100"
                                            >
                                                <span
                                                    className="fs-sm text-muted me-md-3"
                                                    >Showing 12 of 90
                                                    products</span
                                                >
                                                <div
                                                    className="progress w-100 my-3 mx-auto mx-md-0"
                                                    style="
                                                        max-width: 10rem;
                                                        height: 4px;
                                                    "
                                                >
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style="width: 18%"
                                                        aria-valuenow="18"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-outline-primary btn-sm"
                                                type="button"
                                            >
                                                Load more products
                                            </button>
                                        </nav>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Load more (One-page) --&gt;
&lt;nav className=&quot;d-md-flex justify-content-between align-items-center text-center text-md-left&quot; aria-label=&quot;...&quot;&gt;
  &lt;div className=&quot;d-md-flex align-items-center w-100&quot;&gt;
    &lt;span className=&quot;fs-sm text-muted me-md-3&quot;&gt;
      Showing 12 of 90 products
    &lt;/span&gt;
    &lt;div className=&quot;progress w-100 my-3 mx-auto mx-md-0&quot; style=&quot;max-width: 10rem; height: 4px;&quot;&gt;
      &lt;div className=&quot;progress-bar&quot; role=&quot;progressbar&quot; style=&quot;width: 18%;&quot; aria-valuenow=&quot;18&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;button&gt;
      Load more products
    &lt;/button type=&quot;button&quot; className=&quot;btn btn-outline-primary btn-sm&quot;&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Load more (One-page)
nav.d-md-flex.justify-content-between.align-items-center.text-center.text-md-left(aria-label=&quot;Page navigation&quot;)
  .d-md-flex.align-items-center.w-100
    span.fs-sm.text-muted.me-md-3 Showing 12 of 90 products
    .progress.w-100.my-3.mx-auto.mx-md-0(style=&quot;max-width: 10rem; height: 4px;&quot;)
      .progress-bar(role=&quot;progressbar&quot;, style=&quot;width: 18%;&quot;, aria-valuenow=&quot;18&quot;, aria-valuemin=&quot;0&quot;, aria-valuemax=&quot;100&quot;)
  button(type=&quot;button&quot;).btn.btn-outline-primary.btn-sm
    | Load more products
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Entry navigation-->
                    <section
                        className="pb-5 mb-md-2"
                        id="pagination-entry-navigation"
                    >
                        <h2 className="h5 mb-3">Entry navigation</h2>
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
                                        <nav
                                            className="entry-navigation"
                                            aria-label="Entry navigation example"
                                        >
                                            <a
                                                className="entry-navigation-link"
                                                href="#"
                                                ><i
                                                    className="ci-arrow-left me-2"
                                                ></i
                                                ><span
                                                    className="d-none d-sm-inline"
                                                    >Prev post</span
                                                ></a
                                            ><a
                                                className="entry-navigation-link"
                                                href="#"
                                                ><i
                                                    className="ci-view-list me-2"
                                                ></i
                                                ><span
                                                    className="d-none d-sm-inline"
                                                    >All posts</span
                                                ></a
                                            ><a
                                                className="entry-navigation-link"
                                                href="#"
                                                ><span
                                                    className="d-none d-sm-inline"
                                                    >Next post</span
                                                ><i
                                                    className="ci-arrow-right ms-2"
                                                ></i
                                            ></a>
                                        </nav>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Entry navigation --&gt;
&lt;nav className=&quot;entry-navigation&quot; aria-label=&quot;Entry navigation example&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;entry-navigation-link&quot;&gt;
    &lt;i className=&quot;ci-arrow-left me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;d-none d-sm-inline&quot;&gt;Prev post&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;entry-navigation-link&quot;&gt;
    &lt;i className=&quot;ci-view-list me-2&quot;&gt;&lt;/i&gt;
    &lt;span className=&quot;d-none d-sm-inline&quot;&gt;All post&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;entry-navigation-link&quot;&gt;
    &lt;span className=&quot;d-none d-sm-inline&quot;&gt;Next post&lt;/span&gt;
    &lt;i className=&quot;ci-arrow-right ms-2&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
&lt;/nav&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Entry navigation
nav.entry-navigation(aria-label=&quot;Entry navigation example&quot;)
  a(href=&quot;#&quot;).entry-navigation-link
    i.ci-arrow-left.me-2
    span.d-none.d-sm-inline Prev post
  a(href=&quot;#&quot;).entry-navigation-link
    i.ci-view-list.me-2
    span.d-none.d-sm-inline All posts
  a(href=&quot;#&quot;).entry-navigation-link
    span.d-none.d-sm-inline Next post
    i.ci-arrow-right.ms-2</code></pre>
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
                                            href="#pagination-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#pagination-icons"
                                            >With icons</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#pagination-sizing"
                                            >Sizing</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#pagination-load-more"
                                            >Load more (One-page)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#pagination-entry-navigation"
                                            >Entry navigation</a
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
