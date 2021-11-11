<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Gallery</title>
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
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/lightgallery.js/dist/css/lightgallery.min.css"
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Gallery</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                JavaScript based lightbox component for
                                presenting various types of media.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        className="alert alert-info d-flex mt-n3 mb-5"
                        role="alert"
                    >
                        <div className="alert-icon">
                            <i className="ci-announcement"></i>
                        </div>
                        <div className="fs-md text-break">
                            <p>
                                Gallery component relies on 3rd party plugin.
                                Make sure to link to
                                <strong>Light Gallery css and js</strong> files
                                in your document:
                                <strong
                                    >vendor/lightgallery.js/dist/css/lightgallery.min.css</strong
                                >
                                and
                                <strong
                                    >lightgallery.js/dist/js/lightgallery.min.js</strong
                                >. If you need extra features like zooming,
                                fullscreen view or video you need to include
                                additional plugins:
                            </p>
                            <ul className="fw-bold">
                                <li>
                                    vendor/lg-fullscreen.js/dist/lg-fullscreen.min.js
                                </li>
                                <li>vendor/lg-zoom.js/dist/lg-zoom.min.js</li>
                                <li>vendor/lg-video.js/dist/lg-video.min.js</li>
                            </ul>
                            <p className="mb-0">
                                Use this page as a reference.
                            </p>
                        </div>
                    </div>
                    <!-- Media: Image-->
                    <section className="pb-5 mb-md-2" id="gallery-image">
                        <h2 className="h5 mb-3">Media: Image</h2>
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
                                            className="gallery"
                                            style="max-width: 25rem"
                                        >
                                            <a
                                                className="gallery-item rounded-3"
                                                href="../img/components/gallery/01.jpg"
                                                data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
                                                ><img
                                                    src="../img/components/gallery/th01.jpg"
                                                    alt="Gallery thumbnail"
                                                /><span
                                                    className="gallery-item-caption"
                                                    >Gallery image caption</span
                                                ></a
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
                                        ><code className="lang-html">&lt;!-- Image gallery --&gt;
&lt;div className=&quot;gallery&quot;&gt;
  &lt;a href=&quot;path-to-large-image&quot; className=&quot;gallery-item rounded-3&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;'&gt;
    &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
    &lt;span className=&quot;gallery-item-caption&quot;&gt;Gallery image caption&lt;/span&gt;
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
                                        ><code className="lang-pug">// Image gallery
.gallery
  a(href=&quot;path-to-large-image&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;').gallery-item.rounded-3
    img(src=&quot;path-to-thumbnail-image&quot;, alt=&quot;Gallery thumbnail&quot;)
    span.gallery-item-caption Gallery image caption
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Media: Video-->
                    <section className="pb-5 mb-md-2" id="gallery-video">
                        <h2 className="h5 mb-3">Media: Video</h2>
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
                                            className="gallery"
                                            style="max-width: 25rem"
                                        >
                                            <a
                                                className="gallery-item video-item rounded-3"
                                                href="https://vimeo.com/78058789"
                                                data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery video caption&lt;/h6&gt;'
                                                ><img
                                                    src="../img/components/gallery/th02.jpg"
                                                    alt="Gallery thumbnail"
                                                /><span
                                                    className="gallery-item-caption"
                                                    >Gallery video caption</span
                                                ></a
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
                                        ><code className="lang-html">&lt;!-- Video gallery --&gt;
&lt;div className=&quot;gallery&quot;&gt;
  &lt;a href=&quot;link-to-youtube/vimeo-video&quot; className=&quot;gallery-item video-item rounded-3&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery video caption&lt;/h6&gt;'&gt;
    &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
    &lt;span className=&quot;gallery-item-caption&quot;&gt;Gallery video caption&lt;/span&gt;
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
                                        ><code className="lang-pug">// Video gallery
.gallery
  a(href=&quot;link-to-youtube/vimeo-video&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery video caption&lt;/h6&gt;').gallery-item.video-item.rounded-3
    img(src=&quot;path-to-thumbnail-image&quot;, alt=&quot;Gallery thumbnail&quot;)
    span.gallery-item-caption Gallery video caption
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Media: Iframe (Google map)-->
                    <section className="pb-5 mb-md-2" id="gallery-iframe">
                        <h2 className="h5 mb-3">Media: Iframe (Google map)</h2>
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
                                            className="gallery"
                                            style="max-width: 25rem"
                                        >
                                            <a
                                                className="gallery-item rounded-3"
                                                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua"
                                                data-iframe="true"
                                                data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Google map embed&lt;/h6&gt;'
                                                ><img
                                                    src="../img/components/gallery/th09.jpg"
                                                    alt="Map preview"
                                                /><span
                                                    className="gallery-item-caption"
                                                    >Google map embed</span
                                                ></a
                                            >
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Iframe (Google map) --&gt;
&lt;div className=&quot;gallery&quot;&gt;
  &lt;a href=&quot;link-to-google-map-embed&quot; className=&quot;gallery-item rounded-3&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Google map embed&lt;/h6&gt;'&gt;
    &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
    &lt;span className=&quot;gallery-item-caption&quot;&gt;Google map embed&lt;/span&gt;
  &lt;/a&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Iframe (Google map)
.gallery
  a(href=&quot;link-to-google-map-embed&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Google map embed&lt;/h6&gt;').gallery-item.rounded-3
    img(src=&quot;path-to-thumbnail-image&quot;, alt=&quot;Gallery thumbnail&quot;)
    span.gallery-item-caption Google map embed
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Grid with gutters-->
                    <section className="pb-5 mb-md-2" id="gallery-grid-gutters">
                        <h2 className="h5 mb-3">Grid with gutters</h2>
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
                                        <div className="row gallery">
                                            <div
                                                className="col-xl-4 col-sm-6 mb-grid-gutter"
                                            >
                                                <a
                                                    className="gallery-item rounded-3"
                                                    href="../img/components/gallery/03.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #1&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th03.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #1</span
                                                    ></a
                                                >
                                            </div>
                                            <div
                                                className="col-xl-4 col-sm-6 mb-grid-gutter"
                                            >
                                                <a
                                                    className="gallery-item rounded-3"
                                                    href="../img/components/gallery/04.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #2&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th04.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #2</span
                                                    ></a
                                                >
                                            </div>
                                            <div
                                                className="col-xl-4 col-sm-6 mb-grid-gutter"
                                            >
                                                <a
                                                    className="gallery-item video-item rounded-3"
                                                    href="https://vimeo.com/93641234"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #3&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th05.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #3</span
                                                    ></a
                                                >
                                            </div>
                                            <div
                                                className="col-xl-4 col-sm-6 mb-grid-gutter"
                                            >
                                                <a
                                                    className="gallery-item rounded-3"
                                                    href="../img/components/gallery/06.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #4&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th06.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #4</span
                                                    ></a
                                                >
                                            </div>
                                            <div
                                                className="col-xl-4 col-sm-6 mb-grid-gutter"
                                            >
                                                <a
                                                    className="gallery-item video-item rounded-3"
                                                    href="https://vimeo.com/78058789"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #5&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th07.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #5</span
                                                    ></a
                                                >
                                            </div>
                                            <div
                                                className="col-xl-4 col-sm-6 mb-grid-gutter"
                                            >
                                                <a
                                                    className="gallery-item rounded-3"
                                                    href="../img/components/gallery/08.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #6&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th08.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #6</span
                                                    ></a
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
                                        ><code className="lang-html">&lt;!-- Gallery grid with gutters --&gt;
&lt;div className=&quot;row gallery&quot;&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;col-xl-4 col-sm-6 mb-grid-gutter&quot;&gt;
    &lt;a href=&quot;path-to-large-image&quot; className=&quot;gallery-item rounded-3&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;'&gt;
      &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
      &lt;span className=&quot;gallery-item-caption&quot;&gt;Gallery image caption&lt;/span&gt;
    &lt;/a&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;col-xl-4 col-sm-6 mb-grid-gutter&quot;&gt;
    ....
  &lt;/div&gt;

  &lt;!-- Add as many columns with gallery item inside as you need --&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Gallery grid with gutters
.row.gallery

  //- Item
  .col-xl-4.col-sm-6.mb-grid-gutter
    a(href=&quot;path-to-large-image&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;').gallery-item.rounded-3
      img(src=&quot;path-to-thumbnail-image&quot;, alt=&quot;Gallery thumbnail&quot;)
      span.gallery-item-caption Gallery image caption

  //- Item
  .col-xl-4.col-sm-6.mb-grid-gutter
    ...

  //- Add as many columns with gallery item inside as you need
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Grid no gutters-->
                    <section
                        className="pb-5 mb-md-2"
                        id="gallery-grid-nogutters"
                    >
                        <h2 className="h5 mb-3">Grid no gutters</h2>
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
                                        <div className="row gallery g-0">
                                            <div className="col-xl-4 col-sm-6">
                                                <a
                                                    className="gallery-item"
                                                    href="../img/components/gallery/03.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #1&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th03.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #1</span
                                                    ></a
                                                >
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <a
                                                    className="gallery-item"
                                                    href="../img/components/gallery/04.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #2&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th04.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #2</span
                                                    ></a
                                                >
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <a
                                                    className="gallery-item video-item"
                                                    href="https://vimeo.com/93641234"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #3&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th05.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #3</span
                                                    ></a
                                                >
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <a
                                                    className="gallery-item"
                                                    href="../img/components/gallery/06.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #4&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th06.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #4</span
                                                    ></a
                                                >
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <a
                                                    className="gallery-item video-item"
                                                    href="https://vimeo.com/78058789"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #5&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th07.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #5</span
                                                    ></a
                                                >
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <a
                                                    className="gallery-item"
                                                    href="../img/components/gallery/08.jpg"
                                                    data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #6&lt;/h6&gt;'
                                                    ><img
                                                        src="../img/components/gallery/th08.jpg"
                                                        alt="Gallery thumbnail"
                                                    /><span
                                                        className="gallery-item-caption"
                                                        >Gallery image caption
                                                        #6</span
                                                    ></a
                                                >
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
                                        ><code className="lang-html">&lt;!-- Gallery grid no gutters --&gt;
&lt;div className=&quot;row gallery g-0&quot;&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;col-xl-4 col-sm-6&quot;&gt;
    &lt;a href=&quot;path-to-large-image&quot; className=&quot;gallery-item&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;'&gt;
      &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
      &lt;span className=&quot;gallery-item-caption&quot;&gt;Gallery image caption&lt;/span&gt;
    &lt;/a&gt;
  &lt;/div&gt;

  &lt;!-- Item --&gt;
  &lt;div className=&quot;col-xl-4 col-sm-6&quot;&gt;
    ....
  &lt;/div&gt;

  &lt;!-- Add as many columns with gallery item inside as you need --&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Gallery grid no gutters
.row.gallery.g-0

  //- Item
  .col-xl-4.col-sm-6
    a(href=&quot;path-to-large-image&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;').gallery-item
      img(src=&quot;path-to-thumbnail-image&quot;, alt=&quot;Gallery thumbnail&quot;)
      span.gallery-item-caption Gallery image caption

  //- Item
  .col-xl-4.col-sm-6
    ...

  //- Add as many columns with gallery item inside as you need
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Inside card-->
                    <section className="pb-5 mb-md-2" id="gallery-card">
                        <h2 className="h5 mb-3">Inside card</h2>
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
                                        <div
                                            className="card gallery"
                                            style="max-width: 25rem"
                                        >
                                            <a
                                                className="gallery-item card-img-top"
                                                href="../img/components/gallery/01.jpg"
                                                data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption&lt;/h6&gt;'
                                                ><img
                                                    src="../img/components/gallery/th01.jpg"
                                                    alt="Gallery thumbnail"
                                            /></a>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Card with gallery thumbnail
                                                </h5>
                                                <p
                                                    className="card-text fs-sm text-muted"
                                                >
                                                    Some quick example text to
                                                    build on the card title and
                                                    make up the bulk of the
                                                    card's content.
                                                </p>
                                                <a
                                                    className="btn btn-sm btn-primary"
                                                    href="#"
                                                    >Go somewhere</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Gallery inside card --&gt;
&lt;div className=&quot;card gallery&quot;&gt;
  &lt;a href=&quot;path-to-large-image&quot; className=&quot;gallery-item card-img-top&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;'&gt;
    &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
  &lt;/a&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h5 className=&quot;card-title&quot;&gt;Card with gallery thumbnail&lt;/h5&gt;
    &lt;p className=&quot;card-text fs-sm text-muted&quot;&gt;Some quick example text to build on the card title and make up the bulk of the card's content.&lt;/p&gt;
    &lt;a href=&quot;#&quot; className=&quot;btn btn-sm btn-primary&quot;&gt;Go somewhere&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Gallery inside card
.card.gallery
  a(href=&quot;path-to-large-image&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;').gallery-item.rounded-3
    img(src=&quot;path-to-thumbnail-image&quot;, alt&quot;Gallery thumbnail&quot;)
  .card-body
    h5.card-title
      | Card with gallery thumbnail
    p.card-text.fs-sm.text-muted
      | Some quick example text to build on the card title and make up the bulk of the card's content.
    a.btn.btn-sm.btn-primary(href=&quot;#&quot;) Go somewhere
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Inside carousel-->
                    <section className="pb-5 mb-md-2" id="gallery-carousel">
                        <h2 className="h5 mb-3">Inside carousel</h2>
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
                                            className="tns-carousel tns-nav-enabled gallery"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"responsive": {"0":{"items":1},"576":{"items":2, "gutter": 20},"1200":{"items":3, "gutter": 30}}}'
                                            >
                                                <div>
                                                    <a
                                                        className="gallery-item rounded-3"
                                                        href="../img/components/gallery/03.jpg"
                                                        data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #1&lt;/h6&gt;'
                                                        ><img
                                                            src="../img/components/gallery/th03.jpg"
                                                            alt="Gallery thumbnail"
                                                        /><span
                                                            className="gallery-item-caption"
                                                            >Gallery image
                                                            caption #1</span
                                                        ></a
                                                    >
                                                </div>
                                                <div>
                                                    <a
                                                        className="gallery-item rounded-3"
                                                        href="../img/components/gallery/04.jpg"
                                                        data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #2&lt;/h6&gt;'
                                                        ><img
                                                            src="../img/components/gallery/th04.jpg"
                                                            alt="Gallery thumbnail"
                                                        /><span
                                                            className="gallery-item-caption"
                                                            >Gallery image
                                                            caption #2</span
                                                        ></a
                                                    >
                                                </div>
                                                <div>
                                                    <a
                                                        className="gallery-item video-item rounded-3"
                                                        href="https://vimeo.com/93641234"
                                                        data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #3&lt;/h6&gt;'
                                                        ><img
                                                            src="../img/components/gallery/th05.jpg"
                                                            alt="Gallery thumbnail"
                                                        /><span
                                                            className="gallery-item-caption"
                                                            >Gallery image
                                                            caption #3</span
                                                        ></a
                                                    >
                                                </div>
                                                <div>
                                                    <a
                                                        className="gallery-item rounded-3"
                                                        href="../img/components/gallery/06.jpg"
                                                        data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #4&lt;/h6&gt;'
                                                        ><img
                                                            src="../img/components/gallery/th06.jpg"
                                                            alt="Gallery thumbnail"
                                                        /><span
                                                            className="gallery-item-caption"
                                                            >Gallery image
                                                            caption #4</span
                                                        ></a
                                                    >
                                                </div>
                                                <div>
                                                    <a
                                                        className="gallery-item video-item rounded-3"
                                                        href="https://vimeo.com/78058789"
                                                        data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #5&lt;/h6&gt;'
                                                        ><img
                                                            src="../img/components/gallery/th07.jpg"
                                                            alt="Gallery thumbnail"
                                                        /><span
                                                            className="gallery-item-caption"
                                                            >Gallery image
                                                            caption #5</span
                                                        ></a
                                                    >
                                                </div>
                                                <div>
                                                    <a
                                                        className="gallery-item rounded-3"
                                                        href="../img/components/gallery/08.jpg"
                                                        data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Gallery image caption #6&lt;/h6&gt;'
                                                        ><img
                                                            src="../img/components/gallery/th08.jpg"
                                                            alt="Gallery thumbnail"
                                                        /><span
                                                            className="gallery-item-caption"
                                                            >Gallery image
                                                            caption #6</span
                                                        ></a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Gallery inside carousel  --&gt;
&lt;div className=&quot;tns-carousel tns-nav-enabled gallery&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;1200&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 30}}}'&gt;

    &lt;!-- Item --&gt;
    &lt;div&gt;
      &lt;a href=&quot;path-to-large-image&quot; className=&quot;gallery-item&quot; data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;'&gt;
        &lt;img src=&quot;path-to-thumbnail-image&quot; alt=&quot;Gallery thumbnail&quot;&gt;
        &lt;span className=&quot;gallery-item-caption&quot;&gt;Gallery image caption&lt;/span&gt;
      &lt;/a&gt;
    &lt;/div&gt;

     &lt;!-- Add as many gallery items wrapped in divs as you need --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Gallery inside carousel
.tns-carousel.tns-nav-enabled.gallery
  .tns-carousel-inner(data-carousel-options='{&quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;1200&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 30}}}')

    //- Item
    div
      a(href=&quot;path-to-large-image&quot;, data-sub-html='&lt;h6 className=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;').gallery-item.rounded-3
        img(src=&quot;path-to-thumbnail-image&quot;, alt=&quot;Gallery thumbnail&quot;)
        span.gallery-item-caption Gallery image caption

    //- Add as many gallery items wrapped in divs as you need</code></pre>
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
                                            href="#gallery-image"
                                            >Media: Image</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#gallery-video"
                                            >Media: Video</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#gallery-iframe"
                                            >Media: Iframe (Google map)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#gallery-grid-gutters"
                                            >Grid with gutters</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#gallery-grid-nogutters"
                                            >Grid no gutters</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#gallery-card"
                                            >Inside card</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#gallery-carousel"
                                            >Inside carousel</a
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
        <script src="../vendor/lightgallery.js/dist/js/lightgallery.min.js"></script>
        <script src="../vendor/lg-fullscreen.js/dist/lg-fullscreen.min.js"></script>
        <script src="../vendor/lg-zoom.js/dist/lg-zoom.min.js"></script>
        <script src="../vendor/lg-video.js/dist/lg-video.min.js"></script>
        <!-- Main theme script-->
        <script src="../js/theme.min.js"></script>
    </body>
</html>
