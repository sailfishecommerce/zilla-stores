<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Team</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Team</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Component to display team members on the
                                website.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <!-- Style 1-->
                    <section className="pb-5 mb-md-2" id="team-style1">
                        <h2 className="h5 mb-3">Style 1</h2>
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
                                            <div className="col-xl-10">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div
                                                            className="mb-4 mb-sm-0 pt-1"
                                                        >
                                                            <img
                                                                className="d-inline-block rounded mb-3"
                                                                src="../img/team/01.jpg"
                                                                width="96"
                                                                alt="William Smith"
                                                            />
                                                            <h6
                                                                className="pt-1 mb-1"
                                                            >
                                                                William Smith
                                                            </h6>
                                                            <p
                                                                className="fs-sm text-muted"
                                                            >
                                                                CEO, Co-founder
                                                                at Company Ltd.
                                                            </p>
                                                            <a
                                                                className="btn-social bs-facebook bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-facebook"
                                                                ></i></a
                                                            ><a
                                                                className="btn-social bs-twitter bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-twitter"
                                                                ></i></a
                                                            ><a
                                                                className="btn-social bs-linkedin bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-linkedin"
                                                                ></i></a
                                                            ><a
                                                                className="btn-social bs-google bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-google"
                                                                ></i
                                                            ></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div
                                                            className="mb-4 mb-sm-0 pt-1 text-center"
                                                        >
                                                            <img
                                                                className="d-inline-block rounded-circle mb-3"
                                                                src="../img/team/02.jpg"
                                                                width="96"
                                                                alt="Amanda Gallaher"
                                                            />
                                                            <h6
                                                                className="pt-1 mb-1"
                                                            >
                                                                Amanda Gallaher
                                                            </h6>
                                                            <p
                                                                className="fs-sm text-muted"
                                                            >
                                                                Chief of
                                                                Marketing at
                                                                Company Ltd.
                                                            </p>
                                                            <a
                                                                className="btn-social bs-twitter bs-outline bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-twitter"
                                                                ></i></a
                                                            ><a
                                                                className="btn-social bs-messenger bs-outline bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-messenger"
                                                                ></i></a
                                                            ><a
                                                                className="btn-social bs-pinterest bs-outline bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-pinterest"
                                                                ></i></a
                                                            ><a
                                                                className="btn-social bs-linkedin bs-outline bs-sm me-2 mb-2"
                                                                href="#"
                                                                ><i
                                                                    className="ci-linkedin"
                                                                ></i
                                                            ></a>
                                                        </div>
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
                                        ><code className="lang-html">&lt;!-- Team Style 1: Left aligned + rounded picture + solid socials --&gt;
&lt;div className=&quot;text-start&quot;&gt;
  &lt;img src=&quot;path-to-image&quot; className=&quot;d-inline-block rounded mb-3&quot; width=&quot;96&quot; alt=&quot;William Smith&quot;&gt;
  &lt;h6 className=&quot;pt-1 mb-1&quot;&gt;William Smith&lt;/h6&gt;
  &lt;p className=&quot;fs-sm text-muted&quot;&gt;CEO, Co-founder at Company Ltd.&lt;/p&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-facebook bs-sm&quot;&gt;
    &lt;i className=&quot;ci-facebook&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-twitter bs-sm&quot;&gt;
    &lt;i className=&quot;ci-twitter&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-linkedin bs-sm&quot;&gt;
    &lt;i className=&quot;ci-linkedin&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-google bs-sm&quot;&gt;
    &lt;i className=&quot;ci-google&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
&lt;/div&gt;

&lt;!-- Team Style 1: Center aligned + round picture + outline socials --&gt;
&lt;div className=&quot;text-center&quot;&gt;
  &lt;img src=&quot;path-to-image&quot; className=&quot;d-inline-block rounded-circle mb-3&quot; width=&quot;96&quot; alt=&quot;Amanda Gallaher&quot;&gt;
  &lt;h6 className=&quot;pt-1 mb-1&quot;&gt;Amanda Gallaher&lt;/h6&gt;
  &lt;p className=&quot;fs-sm text-muted&quot;&gt;Chief of Marketing at Company Ltd.&lt;/p&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-twitter bs-outline bs-sm&quot;&gt;
    &lt;i className=&quot;ci-twitter&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-messenger bs-outline bs-sm&quot;&gt;
    &lt;i className=&quot;ci-messenger&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-pinterest bs-outline bs-sm&quot;&gt;
    &lt;i className=&quot;ci-pinterest&quot;&gt;&lt;/i&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;btn-social bs-linkedin bs-outline bs-sm&quot;&gt;
    &lt;i className=&quot;ci-linkedin&quot;&gt;&lt;/i&gt;
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
                                        ><code className="lang-pug">// Team Style 1: Left aligned + rounded picture + solid socials
.text-start
  img(src=&quot;path-to-image&quot;, width=&quot;96&quot;, alt=&quot;William Smith&quot;).d-inline-block.rounded.mb-3
  h6.pt-1.mb-1 William Smith
  p.fs-sm.text-muted CEO, Co-founder at Company Ltd.
  a(href=&quot;#&quot;).btn-social.bs-facebook.bs-sm.me-2.mb-2
    i.ci-facebook
  a(href=&quot;#&quot;).btn-social.bs-twitter.bs-sm.me-2.mb-2
    i.ci-twitter
  a(href=&quot;#&quot;).btn-social.bs-linkedin.bs-sm.me-2.mb-2
    i.ci-linkedin
  a(href=&quot;#&quot;).btn-social.bs-google.bs-sm.me-2.mb-2
    i.ci-google

// Team Style 1: Center aligned + round picture + outline socials
.text-center
  img(src=&quot;path-to-image&quot;, width=&quot;96&quot;, alt=&quot;Amanda Gallaher&quot;).d-inline-block.rounded-circle.mb-3
  h6.pt-1.mb-1 Amanda Gallaher
  p.fs-sm.text-muted Chief of Marketing at Company Ltd.
  a(href=&quot;#&quot;).btn-social.bs-twitter.bs-outline.bs-sm.me-2.mb-2
    i.ci-twitter
  a(href=&quot;#&quot;).btn-social.bs-messenger.bs-outline.bs-sm.me-2.mb-2
    i.ci-messenger
  a(href=&quot;#&quot;).btn-social.bs-pinterest.bs-outline.bs-sm.me-2.mb-2
    i.ci-pinterest
  a(href=&quot;#&quot;).btn-social.bs-linkedin.bs-outline.bs-sm.me-2.mb-2
    i.ci-linkedin
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Horizontal layout-->
                    <section className="pb-5 mb-md-2" id="team-horizontal">
                        <h2 className="h5 mb-3">Horizontal layout</h2>
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
                                            <div className="col-xl-11">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div
                                                            className="d-flex align-items-start pt-1 mb-4 mb-md-0"
                                                        >
                                                            <img
                                                                className="d-inline-block rounded"
                                                                src="../img/team/03.jpg"
                                                                width="96"
                                                                alt="Jonathan Doe"
                                                            />
                                                            <div
                                                                className="ps-3"
                                                            >
                                                                <h6
                                                                    className="pt-1 mb-1"
                                                                >
                                                                    Jonathan Doe
                                                                </h6>
                                                                <p
                                                                    className="fs-sm text-muted"
                                                                >
                                                                    CEO,
                                                                    Co-founder
                                                                    at Company
                                                                    Ltd.
                                                                </p>
                                                                <a
                                                                    className="btn-social bs-facebook rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-facebook"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-twitter rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-twitter"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-linkedin rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-linkedin"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-google rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-google"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div
                                                            className="d-flex align-items-start pt-1 mb-4 mb-md-0"
                                                        >
                                                            <div
                                                                className="text-end pe-3"
                                                            >
                                                                <h6
                                                                    className="pt-1 mb-1"
                                                                >
                                                                    Barbara
                                                                    Palson
                                                                </h6>
                                                                <p
                                                                    className="fs-sm text-muted"
                                                                >
                                                                    Chief of
                                                                    Marketing at
                                                                    Company Ltd.
                                                                </p>
                                                                <a
                                                                    className="btn-social bs-twitter bs-outline rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-twitter"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-messenger bs-outline rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-messenger"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-pinterest bs-outline rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-pinterest"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-linkedin bs-outline rounded-circle bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-linkedin"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                            <img
                                                                className="d-inline-block rounded-circle"
                                                                src="../img/team/04.jpg"
                                                                width="96"
                                                                alt="Barbara Palson"
                                                            />
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
                                        ><code className="lang-html">&lt;!-- Horizontal layout: Picture on the left + rounded picture + solid round socials --&gt;
&lt;div className=&quot;d-flex align-items-start&quot;&gt;
  &lt;img className=&quot;d-inline-block rounded&quot; width=&quot;96&quot; src=&quot;path-to-image&quot; alt=&quot;Jonathan Doe&quot;/&gt;
  &lt;div className=&quot;ps-3&quot;&gt;
    &lt;h6 className=&quot;pt-1 mb-1&quot;&gt;Jonathan Doe&lt;/h6&gt;
    &lt;p className=&quot;fs-sm text-muted&quot;&gt;CEO, Co-founder at Company Ltd.&lt;/p&gt;
    &lt;a className=&quot;btn-social bs-facebook rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-facebook&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-twitter rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-twitter&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-linkedin rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-linkedin&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-google rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-google&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Horizontal layout: Picture on the right + round picture + outline round socials --&gt;
&lt;div className=&quot;d-flex align-items-start&quot;&gt;
  &lt;div className=&quot;text-end pe-3&quot;&gt;
    &lt;h6 className=&quot;pt-1 mb-1&quot;&gt;Barbara Palson&lt;/h6&gt;
    &lt;p className=&quot;fs-sm text-muted&quot;&gt;Chief of Marketing at Company Ltd.&lt;/p&gt;
    &lt;a className=&quot;btn-social bs-twitter bs-outline rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-twitter&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-messenger bs-outline rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-messenger&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-pinterest bs-outline rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-pinterest&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-linkedin bs-outline rounded-circle bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-linkedin&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
  &lt;/div&gt;
  &lt;img className=&quot;d-inline-block rounded-circle&quot; width=&quot;96&quot; src=&quot;path-to-image&quot; alt=&quot;Barbara Palson&quot;/&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Horizontal layout: Picture on the left + rounded picture + solid round socials
.d-flex.align-items-start
  img(src=&quot;path-to-image&quot;, width=&quot;96&quot;, alt=&quot;Jonathan Doe&quot;).d-inline-block.rounded
  .ps-3
    h6.pt-1.mb-1 Jonathan Doe
    p.fs-sm.text-muted CEO, Co-founder at Company Ltd.
    a(href=&quot;#&quot;).btn-social.bs-facebook.rounded-circle.bs-sm.me-2.mb-2
      i.ci-facebook
    a(href=&quot;#&quot;).btn-social.bs-twitter.rounded-circle.bs-sm.me-2.mb-2
      i.ci-twitter
    a(href=&quot;#&quot;).btn-social.bs-linkedin.rounded-circle.bs-sm.me-2.mb-2
      i.ci-linkedin
    a(href=&quot;#&quot;).btn-social.bs-google.rounded-circle.bs-sm.me-2.mb-2
      i.ci-google

// Horizontal layout: Picture on the right + round picture + outline round socials
.d-flex.align-items-start
  .text-end.pe-3
    h6.pt-1.mb-1 Barbara Palson
    p.fs-sm.text-muted Chief of Marketing at Company Ltd.
    a(href=&quot;#&quot;).btn-social.bs-twitter.bs-outline.rounded-circle.bs-sm.me-2.mb-2
      i.ci-twitter
    a(href=&quot;#&quot;).btn-social.bs-messenger.bs-outline.rounded-circle.bs-sm.me-2.mb-2
      i.ci-messenger
    a(href=&quot;#&quot;).btn-social.bs-pinterest.bs-outline.rounded-circle.bs-sm.me-2.mb-2
      i.ci-pinterest
    a(href=&quot;#&quot;).btn-social.bs-linkedin.bs-outline.rounded-circle.bs-sm.me-2.mb-2
      i.ci-linkedin
  img(src=&quot;path-to-image&quot;, width=&quot;96&quot;, alt=&quot;Barbara Palson&quot;).d-inline-block.rounded-circle
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Style 2 (inside card)-->
                    <section className="pb-5 mb-md-2" id="team-style2">
                        <h2 className="h5 mb-3">Style 2 (inside card)</h2>
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
                                            <div className="col-xl-11">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div
                                                            className="card text-center mb-grid-gutter mb-md-0 mx-auto"
                                                            style="
                                                                max-width: 22rem;
                                                            "
                                                        >
                                                            <div
                                                                className="card-body"
                                                            >
                                                                <img
                                                                    className="d-inline-block rounded mb-3"
                                                                    src="../img/team/05.jpg"
                                                                    width="96"
                                                                    alt="Benjamin Miller"
                                                                />
                                                                <h6
                                                                    className="pt-1 mb-1"
                                                                >
                                                                    Benjamin
                                                                    Miller
                                                                </h6>
                                                                <p
                                                                    className="fs-sm text-muted"
                                                                >
                                                                    Lead
                                                                    Accountant
                                                                    at Company
                                                                    Ltd.
                                                                </p>
                                                                <ul
                                                                    className="fs-sm list-unstyled mb-4"
                                                                >
                                                                    <li
                                                                        className="mb-0"
                                                                    >
                                                                        <i
                                                                            className="ci-phone me-2"
                                                                        ></i
                                                                        ><a
                                                                            className="nav-link-style"
                                                                            href="tel:00331697720"
                                                                            >00
                                                                            33
                                                                            169
                                                                            7720</a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="mb-0"
                                                                    >
                                                                        <i
                                                                            className="ci-mail me-2"
                                                                        ></i
                                                                        ><a
                                                                            className="nav-link-style"
                                                                            href="mailto:ben.miller@example.com"
                                                                            >ben.miller@example.com</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                                <a
                                                                    className="btn-social bs-facebook bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-facebook"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-twitter bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-twitter"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-linkedin bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-linkedin"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-google bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-google"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div
                                                            className="card text-center border-0 shadow mb-grid-gutter mb-md-0 mx-auto"
                                                            style="
                                                                max-width: 22rem;
                                                            "
                                                        >
                                                            <div
                                                                className="card-body"
                                                            >
                                                                <img
                                                                    className="d-inline-block rounded-circle mb-3"
                                                                    src="../img/team/06.jpg"
                                                                    width="96"
                                                                    alt="Richard Williams"
                                                                />
                                                                <h6
                                                                    className="pt-1 mb-1"
                                                                >
                                                                    Richard
                                                                    Williams
                                                                </h6>
                                                                <p
                                                                    className="fs-sm text-muted"
                                                                >
                                                                    Financial
                                                                    Director at
                                                                    Company Ltd.
                                                                </p>
                                                                <ul
                                                                    className="fs-sm list-unstyled mb-4"
                                                                >
                                                                    <li
                                                                        className="mb-0"
                                                                    >
                                                                        <i
                                                                            className="ci-phone me-2"
                                                                        ></i
                                                                        ><a
                                                                            className="nav-link-style"
                                                                            href="tel:00331697720"
                                                                            >00
                                                                            33
                                                                            169
                                                                            7720</a
                                                                        >
                                                                    </li>
                                                                    <li
                                                                        className="mb-0"
                                                                    >
                                                                        <i
                                                                            className="ci-mail me-2"
                                                                        ></i
                                                                        ><a
                                                                            className="nav-link-style"
                                                                            href="mailto:r.williams@example.com"
                                                                            >r.williams@example.com</a
                                                                        >
                                                                    </li>
                                                                </ul>
                                                                <a
                                                                    className="btn-social bs-twitter bs-outline bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-twitter"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-messenger bs-outline bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-messenger"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-pinterest bs-outline bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-pinterest"
                                                                    ></i></a
                                                                ><a
                                                                    className="btn-social bs-linkedin bs-outline bs-sm me-2 mb-2"
                                                                    href="#"
                                                                    ><i
                                                                        className="ci-linkedin"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                        ><code className="lang-html">&lt;!-- Card border: Rounded picture + solid socials --&gt;
&lt;div className=&quot;card text-center&quot;&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;img className=&quot;d-inline-block rounded mb-3&quot; width=&quot;96&quot; src=&quot;path-to-image&quot; alt=&quot;Benjamin Miller&quot;/&gt;
    &lt;h6 className=&quot;pt-1 mb-1&quot;&gt;Benjamin Miller&lt;/h6&gt;
    &lt;p className=&quot;fs-sm text-muted&quot;&gt;Lead Accountant at Company Ltd.&lt;/p&gt;
    &lt;ul className=&quot;fs-sm list-unstyled mb-4&quot;&gt;
      &lt;li className=&quot;mb-0&quot;&gt;
        &lt;i className=&quot;ci-phone me-2&quot;&gt;&lt;/i&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;tel:00331697720&quot;&gt;00 33 169 7720&lt;/a&gt;
      &lt;/li&gt;
      &lt;li className=&quot;mb-0&quot;&gt;
        &lt;i className=&quot;ci-mail me-2&quot;&gt;&lt;/i&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;mailto:ben.miller@example.com&quot;&gt;ben.miller@example.com&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;a className=&quot;btn-social bs-facebook bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-facebook&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-twitter bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-twitter&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-linkedin bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-linkedin&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-google bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-google&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Card shadow: Round picture + outline socials --&gt;
&lt;div className=&quot;card text-center border-0 shadow&quot;&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;img className=&quot;d-inline-block rounded-circle mb-3&quot; width=&quot;96&quot; src=&quot;path-to-image&quot; alt=&quot;Richard Williams&quot;/&gt;
    &lt;h6 className=&quot;pt-1 mb-1&quot;&gt;Richard Williams&lt;/h6&gt;
    &lt;p className=&quot;fs-sm text-muted&quot;&gt;Financial Director at Company Ltd.&lt;/p&gt;
    &lt;ul className=&quot;fs-sm list-unstyled mb-4&quot;&gt;
      &lt;li className=&quot;mb-0&quot;&gt;
        &lt;i className=&quot;ci-phone me-2&quot;&gt;&lt;/i&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;tel:00331697720&quot;&gt;00 33 169 7720&lt;/a&gt;
      &lt;/li&gt;
      &lt;li className=&quot;mb-0&quot;&gt;
        &lt;i className=&quot;ci-mail me-2&quot;&gt;&lt;/i&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;mailto:r.williams@example.com&quot;&gt;r.williams@example.com&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;a className=&quot;btn-social bs-twitter bs-outline bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-twitter&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-messenger bs-outline bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-messenger&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-pinterest bs-outline bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-pinterest&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
    &lt;a className=&quot;btn-social bs-linkedin bs-outline bs-sm me-2 mb-2&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-linkedin&quot;&gt;&lt;/i&gt;
    &lt;/a&gt;
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
                                        ><code className="lang-pug">// Card border: Rounded picture + solid socials
.card.text-center
  .card-body
    img(src=&quot;path-to-image&quot;, width=&quot;96&quot;, alt=&quot;Benjamin Miller&quot;).d-inline-block.rounded.mb-3
    h6.pt-1.mb-1 Benjamin Miller
    p.fs-sm.text-muted Lead Accountant at Company Ltd.
    ul.fs-sm.list-unstyled.mb-4
      li.mb-0
        i.ci-phone.me-2
        a(href=&quot;tel:00331697720&quot;).nav-link-style 00 33 169 7720
      li.mb-0
        i.ci-mail.me-2
        a(href=&quot;mailto:ben.miller@example.com&quot;).nav-link-style ben.miller@example.com
    a(href=&quot;#&quot;).btn-social.bs-facebook.bs-sm.me-2.mb-2
      i.ci-facebook
    a(href=&quot;#&quot;).btn-social.bs-twitter.bs-sm.me-2.mb-2
      i.ci-twitter
    a(href=&quot;#&quot;).btn-social.bs-linkedin.bs-sm.me-2.mb-2
      i.ci-linkedin
    a(href=&quot;#&quot;).btn-social.bs-google.bs-sm.me-2.mb-2
      i.ci-google

// Card shadow: Round picture + outline socials
.card.text-center.border-0.shadow
  .card-body
    img(src=&quot;path-to-image&quot;, width=&quot;96&quot;, alt=&quot;Richard Williams&quot;).d-inline-block.rounded-circle.mb-3
    h6.pt-1.mb-1 Richard Williams
    p.fs-sm.text-muted Financial Director at Company Ltd.
    ul.fs-sm.list-unstyled.mb-4
      li.mb-0
        i.ci-phone.me-2
        a(href=&quot;tel:00331697720&quot;).nav-link-style 00 33 169 7720
      li.mb-0
        i.ci-mail.me-2
        a(href=&quot;mailto:r.williams@example.com&quot;).nav-link-style r.williams@example.com
    a(href=&quot;#&quot;).btn-social.bs-twitter.bs-outline.bs-sm.me-2.mb-2
      i.ci-twitter
    a(href=&quot;#&quot;).btn-social.bs-messenger.bs-outline.bs-sm.me-2.mb-2
      i.ci-messenger
    a(href=&quot;#&quot;).btn-social.bs-pinterest.bs-outline.bs-sm.me-2.mb-2
      i.ci-pinterest
    a(href=&quot;#&quot;).btn-social.bs-linkedin.bs-outline.bs-sm.me-2.mb-2
      i.ci-linkedin</code></pre>
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
                                            href="#team-style1"
                                            >Style 1</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#team-horizontal"
                                            >Horizontal layout</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#team-style2"
                                            >Style 2 (inside card)</a
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
