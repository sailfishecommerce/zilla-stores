<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Carousel</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Carousel</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                A slideshow component for cycling through
                                elements (images or slides of text) like a
                                carousel.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <div
                        className="alert alert-info d-flex mt-n3 mb-4"
                        role="alert"
                    >
                        <div className="alert-icon">
                            <i className="ci-announcement"></i>
                        </div>
                        <p className="fs-md text-break mb-0">
                            Make sure to link to
                            <strong>Tiny Slider css and js</strong> files in
                            your document:
                            <strong
                                >vendor/tiny-slider/dist/tiny-slider.css</strong
                            >
                            and
                            <strong
                                >vendor/tiny-slider/dist/min/tiny-slider.js</strong
                            >. Use this page as a reference.
                        </p>
                    </div>
                    <style>
                        .example-code {
                            padding-top: 0 !important;
                        }
                        div.code-toolbar > .toolbar {
                            display: none;
                        }
                    </style>
                    <div className="bg-secondary rounded-3 p-4 mb-5">
                        <p className="fs-sm">
                            You can alter carousel look and behaviour via
                            modifier CSS classes and flexible data API.
                        </p>
                        <h6 className="fs-sm">Basic HTML structure:</h6>
                        <pre
                            className="example-code"
                        ><code className="lang-html">&lt;div className=&quot;tns-carousel tns-nav-enabled&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{}'&gt;
    &lt;!-- Carousel slides here --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                        <h6 className="fs-sm">Modifier classes:</h6>
                        <ul className="list-unstyled fs-sm">
                            <li>
                                <code>tns-nav-enabled</code
                                ><span
                                    >&nbsp;- Helper class to align absolute
                                    positioned controls (prev/next) when nav
                                    (dots) are enabled.</span
                                >
                            </li>
                            <li>
                                <code>tns-controls-lg</code
                                ><span
                                    >&nbsp;- Large controls (prev/next
                                    buttons).</span
                                >
                            </li>
                            <li>
                                <code>tns-controls-sm</code
                                ><span
                                    >&nbsp;- Small controls (prev/next
                                    buttons).</span
                                >
                            </li>
                            <li>
                                <code>tns-controls-static</code
                                ><span
                                    >&nbsp;- Controls (prev/next buttons) are
                                    always visible.</span
                                >
                            </li>
                            <li>
                                <code>tns-controls-outside</code
                                ><span
                                    >&nbsp;- Controls (prev/next buttons) are
                                    placed outside of carousel content.</span
                                >
                            </li>
                            <li>
                                <code>tns-nav-start</code
                                ><span
                                    >&nbsp;- Left aligned dots (center by
                                    default).</span
                                >
                            </li>
                            <li>
                                <code>tns-nav-end</code
                                ><span
                                    >&nbsp;- Right aligned dots (center by
                                    default).</span
                                >
                            </li>
                            <li>
                                <code>tns-nav-inside</code
                                ><span
                                    >&nbsp;- Position dots absolutely on top of
                                    the carousel content.</span
                                >
                            </li>
                            <li>
                                <code>tns-nav-light</code
                                ><span
                                    >&nbsp;- Switch dots skin to light
                                    version.</span
                                >
                            </li>
                        </ul>
                        <h6 className="fs-sm">Data API:</h6>
                        <code className="fs-sm"
                            >data-carousel-options = '{}'</code
                        >:
                        <ul className="list-unstyled fs-sm mb-0">
                            <li>
                                <code>"mode": "carousel" | "gallery"</code
                                ><span
                                    >&nbsp;- With carousel everything slides to
                                    the side, while gallery uses fade animations
                                    and changes all slides at once.</span
                                >
                            </li>
                            <li>
                                <code>"axis": "horizontal" | "vertical"</code
                                ><span>&nbsp;- The axis of the slider.</span>
                            </li>
                            <li>
                                <code>"items": 1</code
                                ><span>&nbsp;- How many items to display</span>
                            </li>
                            <li>
                                <code>"nav": true/false</code
                                ><span> Enable/disable dots control</span>
                            </li>
                            <li>
                                <code>"controls": true/false</code
                                ><span>
                                    Enable/disable prev / next arrow
                                    buttons</span
                                >
                            </li>
                            <li>
                                <code>"loop": true/false</code
                                ><span> Enable/disable infinite loop</span>
                            </li>
                            <li>
                                <code>"speed": 300</code
                                ><span>
                                    Speed of the slide animation (in "ms")</span
                                >
                            </li>
                            <li>
                                <code>"autoplay": true/false</code
                                ><span>
                                    Toggles the automatic change of slides</span
                                >
                            </li>
                            <li>
                                <code>"autoplayTimeout": 5000</code
                                ><span>
                                    Timeou between transition. Value in ms |
                                    1000ms = 1s</span
                                >
                            </li>
                            <li>
                                <code>"gutter": 0</code
                                ><span>
                                    Space between carousel items (in px)</span
                                >
                            </li>
                            <li>
                                <code>"autoHeight": true/false</code
                                ><span>
                                    Height of slider container changes according
                                    to each slide's height.</span
                                >
                            </li>
                            <li>
                                <code
                                    >"responsive": {"0": {"items": 1}, "768":
                                    {"items": 2}, ...}</code
                                ><span>
                                    How many items to display on each screen
                                    size. Options are not limited to number of
                                    items. You can change any option based on
                                    screen size.</span
                                >
                            </li>
                            <li className="fw-medium pt-3">
                                For more options please visit<a
                                    className="ms-2"
                                    href="https://github.com/ganlanyuan/tiny-slider#options"
                                    target="_blank"
                                    rel="noopener"
                                    >https://github.com/ganlanyuan/tiny-slider#options</a
                                >
                            </li>
                        </ul>
                    </div>
                    <!-- One item + Dots + Loop (defaults)-->
                    <section className="pb-5 mb-md-2" id="carousel-example1">
                        <h2 className="h5 mb-3">
                            One item + Dots + Loop (defaults)
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
                                            className="tns-carousel tns-nav-enabled"
                                            style="max-width: 50rem"
                                        >
                                            <div className="tns-carousel-inner">
                                                <img
                                                    src="../img/components/carousel/01.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/02.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/03.jpg"
                                                    alt="Image"
                                                />
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
                                        ><code className="lang-html">&lt;!-- One item + Dots + Loop (defaults) --&gt;
&lt;div className=&quot;tns-carousel tns-nav-enabled&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
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
                                        ><code className="lang-pug">// One item + Dots + Loop (defaults)
.tns-carousel.tns-nav-enabled
  .tns-carousel-inner
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- One item + Static controls + Dots inside + No loop-->
                    <section className="pb-5 mb-md-2" id="carousel-example2">
                        <h2 className="h5 mb-3">
                            One item + Static controls + Dots inside + No loop
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
                                            className="tns-carousel tns-controls-static tns-nav-enabled tns-nav-light tns-nav-inside"
                                            style="max-width: 50rem"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"loop": false}'
                                            >
                                                <img
                                                    src="../img/components/carousel/04.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/05.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/06.jpg"
                                                    alt="Image"
                                                />
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
                                        ><code className="lang-html">&lt;!-- One item + Static controls + Dots inside + No loop --&gt;
&lt;div className=&quot;tns-carousel tns-controls-static tns-nav-enabled tns-nav-light tns-nav-inside&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;loop&quot;: false}'&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
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
                                        ><code className="lang-pug">// One item + Static controls + Dots inside + No loop
.tns-carousel.tns-controls-static.tns-nav-enabled.tns-nav-light.tns-nav-inside
  .tns-carousel-inner(data-carousel-options='{&quot;loop&quot;: false}')
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Vertical carousel + Loop + No dots-->
                    <section className="pb-5 mb-md-2" id="carousel-example3">
                        <h2 className="h5 mb-3">Vertical carousel + No dots</h2>
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
                                            className="tns-carousel"
                                            style="max-width: 50rem"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"axis": "vertical", "nav": false}'
                                            >
                                                <img
                                                    src="../img/components/carousel/03.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/01.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/02.jpg"
                                                    alt="Image"
                                                />
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
                                        ><code className="lang-html">&lt;!-- Vertical carousel + Loop + No dots --&gt;
&lt;div className=&quot;tns-carousel&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;axis&quot;: &quot;vertical&quot;, &quot;nav&quot;: false}'&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
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
                                        ><code className="lang-pug">// Vertical carousel + Loop + No dots
.tns-carousel
  .tns-carousel-inner(data-carousel-options='{&quot;axis&quot;: &quot;vertical&quot;, &quot;nav&quot;: false}')
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Multiple items + Static controls outside + No dots + Loop (Responsive)-->
                    <section className="pb-5 mb-md-2" id="carousel-example4">
                        <h2 className="h5 mb-3">
                            Multiple items + Static controls outside + No dots +
                            Loop (Responsive)
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
                                            className="tns-carousel tns-controls-static tns-controls-outside"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"items": 3, "nav": false, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"768":{"items":3, "gutter": 20}, "1100":{"gutter": 24}}}'
                                            >
                                                <img
                                                    src="../img/components/carousel/04.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/05.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/06.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/07.jpg"
                                                    alt="Image"
                                                />
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
                                        ><code className="lang-html">&lt;!-- Multiple items + Static controls outside + No dots + Loop (Responsive) --&gt;
&lt;div className=&quot;tns-carousel tns-controls-static tns-controls-outside&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;items&quot;: 3, &quot;nav&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 18},&quot;768&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;gutter&quot;: 24}}}'&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
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
                                        ><code className="lang-pug">// Multiple items + Static controls outside + No dots + Loop (Responsive)
.tns-carousel.tns-controls-static.tns-controls-outside
  .tns-carousel-inner(data-carousel-options='{&quot;items&quot;: 3, &quot;nav&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 18},&quot;768&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;gutter&quot;: 24}}}')
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt=&quot;Alt text&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- One item + Fade transition + Dots + Loop-->
                    <section className="pb-5 mb-md-2" id="carousel-example5">
                        <h2 className="h5 mb-3">
                            One item + Fade transition + Dots + Loop
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
                                            className="tns-carousel tns-nav-enabled"
                                            style="max-width: 50rem"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"mode": "gallery", "speed": 1000}'
                                            >
                                                <img
                                                    src="../img/components/carousel/01.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/02.jpg"
                                                    alt="Image"
                                                /><img
                                                    src="../img/components/carousel/03.jpg"
                                                    alt="Image"
                                                />
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
                                        ><code className="lang-html">&lt;!-- One item + Fade transition + Dots + Loop --&gt;
&lt;div className=&quot;tns-carousel tns-nav-enabled&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner data-carousel-options='{&quot;mode&quot;: &quot;gallery&quot;, &quot;speed&quot;: 1000}'&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Alt text&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// One item + Fade transition + Dots + Loop
.tns-carousel.tns-nav-enabled
  .tns-carousel-inner(data-carousel-options='{&quot;mode&quot;: &quot;gallery&quot;, &quot;speed&quot;: 1000}')
    img(src=&quot;path-to-image&quot;, alt&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt&quot;Alt text&quot;)
    img(src=&quot;path-to-image&quot;, alt&quot;Alt text&quot;)
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Fade transition + Layer animations-->
                    <section className="pb-5 mb-md-2" id="carousel-example6">
                        <h2 className="h4 mb-3">
                            Fade transition + Layer animations
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
                                            className="tns-carousel"
                                            style="max-width: 50rem"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"mode": "gallery", "nav": false}'
                                            >
                                                <div>
                                                    <div
                                                        className="bg-faded-primary text-center py-5 px-3"
                                                    >
                                                        <div className="py-4">
                                                            <h3
                                                                className="from-top"
                                                            >
                                                                From top to
                                                                bottom
                                                            </h3>
                                                            <p
                                                                className="fs-lg mb-4 pb-3 from-bottom delay-1"
                                                            >
                                                                From bottom to
                                                                top
                                                            </p>
                                                            <button
                                                                className="btn btn-primary scale-down delay-2"
                                                                type="button"
                                                            >
                                                                Scale down
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div
                                                        className="bg-faded-success text-center py-5 px-3"
                                                    >
                                                        <div className="py-4">
                                                            <h3
                                                                className="from-start"
                                                            >
                                                                From left to
                                                                right
                                                            </h3>
                                                            <p
                                                                className="fs-lg mb-4 pb-3 from-end"
                                                            >
                                                                From right to
                                                                left
                                                            </p>
                                                            <button
                                                                className="btn btn-success scale-up delay-2"
                                                                type="button"
                                                            >
                                                                Scale up
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
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
                                        ><code className="lang-html">&lt;!-- Fade transition + Layer animations --&gt;
&lt;div className=&quot;tns-carousel&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}'&gt;
    &lt;div&gt;
      &lt;div className=&quot;bg-faded-primary text-center py-5 px-3&quot;&gt;
        &lt;h3 className=&quot;from-top&quot;&gt;From top to bottom&lt;/h3&gt;
        &lt;p className=&quot;fs-lg mb-4 pb-3 from-bottom delay-1&quot;&gt;From bottom to top&lt;/p&gt;
        &lt;button className=&quot;btn btn-primary scale-down delay-2&quot; type=&quot;button&quot;&gt;Scale down&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;div className=&quot;bg-faded-success text-center py-5 px-3&quot;&gt;
        &lt;h3 className=&quot;from-start&quot;&gt;From left to right&lt;/h3&gt;
        &lt;p className=&quot;fs-lg mb-4 pb-3 from-end&quot;&gt;From right to left&lt;/p&gt;
        &lt;button className=&quot;btn btn-success scale-up delay-2&quot; type=&quot;button&quot;&gt;Scale up&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Fade transition + Layer animations
.tns-carousel
  .tns-carousel-inner(data-carousel-options = '{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}')
    div
      .bg-faded-primary.text-center.py-5.px-3
        h3.from-top From top to bottom
        p.fs-lg.mb-4.pb-3.from-bottom.delay-1 From bottom to top
        button(type=&quot;button&quot;).btn.btn-primary.scale-down.delay-2
          | Scale down
    div
      .bg-faded-success.text-center.py-5.px-3
        h3.from-start From left to right
        p.fs-lg.mb-4.pb-3.from-end From right to left
        button(type=&quot;button&quot;).btn.btn-success.scale-up.delay-2
          | Scale up</code></pre>
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
                                            href="#carousel-example1"
                                            >One item + Dots + Loop
                                            (defaults)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#carousel-example2"
                                            >One item + Static controls + Dots
                                            inside + No loop</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#carousel-example3"
                                            >Vertical carousel + Loop + No
                                            dots</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#carousel-example4"
                                            >Multiple items + Static controls
                                            outside + No dots + Loop
                                            (Responsive)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#carousel-example5"
                                            >One item + Fade transition + Dots +
                                            Loop</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#carousel-example6"
                                            >Fade transition + Layer
                                            animations</a
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
