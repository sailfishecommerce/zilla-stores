<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Typography</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Typography</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Headings, body text, lists, and more.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/content/typography/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Headings-->
                    <section className="pb-5 mb-md-2" id="type-headings">
                        <h2 className="h5 mb-3">Headings</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <h1>h1. Cartzilla heading</h1>
                                        <hr />
                                        <h2 className="pt-3">
                                            h2. Cartzilla heading
                                        </h2>
                                        <hr />
                                        <h3 className="pt-3">
                                            h3. Cartzilla heading
                                        </h3>
                                        <hr />
                                        <h4 className="pt-3">
                                            h4. Cartzilla heading
                                        </h4>
                                        <hr />
                                        <h5 className="pt-3">
                                            h5. Cartzilla heading
                                        </h5>
                                        <hr />
                                        <h6 className="pt-3">
                                            h6. Cartzilla heading
                                        </h6>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Headings --&gt;
&lt;h1&gt;h1. Cartzilla heading&lt;/h1&gt;
&lt;h2&gt;h2. Cartzilla heading&lt;/h2&gt;
&lt;h3&gt;h3. Cartzilla heading&lt;/h3&gt;
&lt;h4&gt;h4. Cartzilla heading&lt;/h4&gt;
&lt;h5&gt;h5. Cartzilla heading&lt;/h5&gt;
&lt;h6&gt;h6. Cartzilla heading&lt;/h6&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Headings
h1 h1. Cartzilla heading
h2 h2. Cartzilla heading
h3 h3. Cartzilla heading
h4 h4. Cartzilla heading
h5 h5. Cartzilla heading
h6 h6. Cartzilla heading
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Display headings-->
                    <section className="pb-5 mb-md-2" id="type-displays">
                        <h2 className="h5 mb-3">Display headings</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <h1 className="display-1">Display 1</h1>
                                        <hr />
                                        <h1 className="display-2 pt-3">
                                            Display 2
                                        </h1>
                                        <hr />
                                        <h1 className="display-3 pt-3">
                                            Display 3
                                        </h1>
                                        <hr />
                                        <h1 className="display-4 pt-3">
                                            Display 4
                                        </h1>
                                        <hr />
                                        <h1 className="display-5 pt-3">
                                            Display 5
                                        </h1>
                                        <hr />
                                        <h1 className="display-6 pt-3">
                                            Display 6
                                        </h1>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Display headings --&gt;
&lt;h1 className=&quot;display-1&quot;&gt;Display 1&lt;/h1&gt;
&lt;h1 className=&quot;display-2&quot;&gt;Display 2&lt;/h1&gt;
&lt;h1 className=&quot;display-3&quot;&gt;Display 3&lt;/h1&gt;
&lt;h1 className=&quot;display-4&quot;&gt;Display 4&lt;/h1&gt;
&lt;h1 className=&quot;display-5&quot;&gt;Display 5&lt;/h1&gt;
&lt;h1 className=&quot;display-6&quot;&gt;Display 6&lt;/h1&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Display headings
h1.display-1 Display 1
h1.display-2 Display 2
h1.display-3 Display 3
h1.display-4 Display 4
h1.display-5 Display 5
h1.display-6 Display 6
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Body text sizes-->
                    <section className="pb-5 mb-md-2" id="type-body-text">
                        <h2 className="h5 mb-3">Body text sizes</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <p className="fs-1">
                                            <span className="fw-bold"
                                                >fs-1.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-2">
                                            <span className="fw-bold"
                                                >fs-2.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-3">
                                            <span className="fw-bold"
                                                >fs-3.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-4">
                                            <span className="fw-bold"
                                                >fs-4.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-5">
                                            <span className="fw-bold"
                                                >fs-5.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-6">
                                            <span className="fw-bold"
                                                >fs-6.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="lead">
                                            <span className="fw-bold"
                                                >Lead.&nbsp;</span
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-lg">
                                            <strong>Large.&nbsp;</strong>Vivamus
                                            sagittis lacus vel augue laoreet
                                            rutrum faucibus dolor auctor
                                        </p>
                                        <p>
                                            <strong>Normal.&nbsp;</strong
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-md">
                                            <strong>Medium.&nbsp;</strong
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-sm">
                                            <strong>Small.&nbsp;</strong>Vivamus
                                            sagittis lacus vel augue laoreet
                                            rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-ms">
                                            <strong>Medium small.&nbsp;</strong
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                        <p className="fs-xs">
                                            <strong>Extra small.&nbsp;</strong
                                            >Vivamus sagittis lacus vel augue
                                            laoreet rutrum faucibus dolor auctor
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Body text sizes --&gt;
&lt;p className=&quot;fs-1&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-2&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-3&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-4&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-5&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-6&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;lead&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-lg&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-md&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-sm&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-ms&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;
&lt;p className=&quot;fs-xs&quot;&gt;Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor&lt;/p&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Body text sizes
p.fs-1 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-2 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-3 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-4 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-5 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-6 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.lead Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-lg Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-md Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-sm Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-ms Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
p.fs-xs Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Inline text elements-->
                    <section className="pb-5 mb-md-2" id="type-inline">
                        <h2 className="h5 mb-3">Inline text elements</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <p>
                                            You can use the mark tag to
                                            <mark>highlight</mark> text.
                                        </p>
                                        <p>
                                            <del
                                                >This line of text is meant to
                                                be treated as deleted text.</del
                                            >
                                        </p>
                                        <p>
                                            <s
                                                >This line of text is meant to
                                                be treated as no longer
                                                accurate.</s
                                            >
                                        </p>
                                        <p>
                                            <ins
                                                >This line of text is meant to
                                                be treated as an addition to the
                                                document.</ins
                                            >
                                        </p>
                                        <p>
                                            <u
                                                >This line of text will render
                                                as underlined.</u
                                            >
                                        </p>
                                        <p>
                                            <small
                                                >This line of text is meant to
                                                be treated as fine print.</small
                                            >
                                        </p>
                                        <p>
                                            <strong
                                                >This line rendered as bold
                                                text.</strong
                                            >
                                        </p>
                                        <p>
                                            <em
                                                >This line rendered as
                                                italicized text.</em
                                            >
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Inline text elements --&gt;
&lt;p&gt;You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.&lt;/p&gt;
&lt;p&gt;&lt;del&gt;This line of text is meant to be treated as deleted text.&lt;/del&gt;&lt;/p&gt;
&lt;p&gt;&lt;s&gt;This line of text is meant to be treated as no longer accurate.&lt;/s&gt;&lt;/p&gt;
&lt;p&gt;&lt;ins&gt;This line of text is meant to be treated as an addition to the document.&lt;/ins&gt;&lt;/p&gt;
&lt;p&gt;&lt;u&gt;This line of text will render as underlined.&lt;/u&gt;&lt;/p&gt;
&lt;p&gt;&lt;small&gt;This line of text is meant to be treated as fine print.&lt;/small&gt;&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;This line rendered as bold text.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;&lt;em&gt;This line rendered as italicized text.&lt;/em&gt;&lt;/p&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Inline text elements
p You can use the mark tag to &lt;mark&gt;highlight&lt;/mark&gt; text.
p
  del This line of text is meant to be treated as deleted text.
p
  s This line of text is meant to be treated as no longer accurate.
p
  ins This line of text is meant to be treated as an addition to the document.
p
  u This line of text will render as underlined.
p
  small This line of text is meant to be treated as fine print.
p
  strong This line rendered as bold text.
p
  em This line rendered as italicized text.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Abbreviations-->
                    <section className="pb-5 mb-md-2" id="type-abbreviations">
                        <h2 className="h5 mb-3">Abbreviations</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <p>
                                            <abbr title="attribute">attr</abbr>
                                        </p>
                                        <p>
                                            <abbr
                                                className="initialism"
                                                title="HyperText Markup Language"
                                                >HTML</abbr
                                            >
                                        </p>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Abbreviations --&gt;
&lt;p&gt;&lt;abbr title=&quot;attribute&quot;&gt;attr&lt;/abbr&gt;&lt;/p&gt;
&lt;p&gt;&lt;abbr className=&quot;initialism&quot; title=&quot;HyperText Markup Language&quot;&gt;HTML&lt;/abbr&gt;&lt;/p&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Abbreviations
p
  abbr(title=&quot;attribute&quot;) attr
p
  abbr.initialism(title=&quot;HyperText Markup Language&quot;) HTML
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Blockquote-->
                    <section className="pb-5 mb-md-2" id="type-blockquote">
                        <h2 className="h5 mb-3">Blockquote</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <blockquote className="blockquote">
                                            <p className="mb-2">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Integer posuere erat a ante
                                            </p>
                                            <footer
                                                className="blockquote-footer"
                                            >
                                                Someone famous in
                                                <cite title="Source Title"
                                                    >Source Title</cite
                                                >
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Blockquote --&gt;
&lt;blockquote className=&quot;blockquote&quot;&gt;
  &lt;p className=&quot;mb-2&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
  &lt;footer className=&quot;blockquote-footer&quot;&gt;
    Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
  &lt;/footer&gt;
&lt;/blockquote&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug6"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Blockquote
blockquote.blockquote
  p.mb-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
  footer.blockquote-footer Someone famous in &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Lists: Unordered and ordered-->
                    <section className="pb-5 mb-md-2" id="type-lists">
                        <h2 className="h5 mb-3">
                            Lists: Unordered and ordered
                        </h2>
                        <div className="card border-0 shadow-lg">
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
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="list-style">
                                                    <li>
                                                        Lorem ipsum dolor sit
                                                        amet
                                                    </li>
                                                    <li>
                                                        Consectetur adipiscing
                                                        elit
                                                    </li>
                                                    <li>
                                                        Integer molestie lorem
                                                        at massa
                                                    </li>
                                                    <li>
                                                        Facilisis in pretium
                                                        nisl aliquet
                                                    </li>
                                                    <li>
                                                        Nulla volutpat aliquam
                                                        velit
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ol className="list-style">
                                                    <li>
                                                        Lorem ipsum dolor sit
                                                        amet
                                                    </li>
                                                    <li>
                                                        Consectetur adipiscing
                                                        elit
                                                    </li>
                                                    <li>
                                                        Integer molestie lorem
                                                        at massa
                                                    </li>
                                                    <li>
                                                        Facilisis in pretium
                                                        nisl aliquet
                                                    </li>
                                                    <li>
                                                        Nulla volutpat aliquam
                                                        velit
                                                    </li>
                                                </ol>
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
                                        ><code className="lang-html">&lt;!-- Unordered list --&gt;
&lt;ul className=&quot;list-style&quot;&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  &lt;li&gt;Integer molestie lorem at massa&lt;/li&gt;
  &lt;li&gt;Facilisis in pretium nisl aliquet&lt;/li&gt;
  &lt;li&gt;Nulla volutpat aliquam velit&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered list --&gt;
&lt;ol className=&quot;list-style&quot;&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  &lt;li&gt;Integer molestie lorem at massa&lt;/li&gt;
  &lt;li&gt;Facilisis in pretium nisl aliquet&lt;/li&gt;
  &lt;li&gt;Nulla volutpat aliquam velit&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug7"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Unordered list
ul.list-style
  li Lorem ipsum dolor sit amet
  li Consectetur adipiscing elit
  li Integer molestie lorem at massa
  li Facilisis in pretium nisl aliquet
  li Nulla volutpat aliquam velit

// Ordered list
ol.list-style
  li Lorem ipsum dolor sit amet
  li Consectetur adipiscing elit
  li Integer molestie lorem at massa
  li Facilisis in pretium nisl aliquet
  li Nulla volutpat aliquam velit
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Lists: Unstyled-->
                    <section className="pb-5 mb-md-2" id="type-lists-unstyled">
                        <h2 className="h5 mb-3">Lists: Unstyled</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <ul className="list-unstyled">
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipiscing elit</li>
                                            <li>
                                                Integer molestie lorem at massa
                                                <ul>
                                                    <li>
                                                        Phasellus iaculis neque
                                                    </li>
                                                    <li>
                                                        Purus sodales ultricies
                                                    </li>
                                                    <li>
                                                        Vestibulum laoreet
                                                        porttitor sem
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                Faucibus porta lacus fringilla
                                                vel
                                            </li>
                                            <li>Aenean sit amet erat nunc</li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Unstyled list --&gt;
&lt;ul className=&quot;list-unstyled&quot;&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  &lt;li&gt;Integer molestie lorem at massa&lt;/li&gt;
    &lt;ul&gt;
      &lt;li&gt;Phasellus iaculis neque&lt;/li&gt;
      &lt;li&gt;Purus sodales ultricies&lt;/li&gt;
      &lt;li&gt;Vestibulum laoreet porttitor sem&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Faucibus porta lacus fringilla vel&lt;/li&gt;
  &lt;li&gt;Aenean sit amet erat nunc&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Unstyled list
ul.list-unstyled
  li Lorem ipsum dolor sit amet
  li Consectetur adipiscing elit
  li Integer molestie lorem at massa
    ul
      li Phasellus iaculis neque
      li Purus sodales ultricies
      li Vestibulum laoreet porttitor sem
  li Faucibus porta lacus fringilla vel
  li Aenean sit amet erat nunc
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Lists: Inline-->
                    <section className="pb-5 mb-md-2" id="type-lists-inline">
                        <h2 className="h5 mb-3">Lists: Inline</h2>
                        <div className="card border-0 shadow-lg">
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
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                Lorem ipsum dolor
                                            </li>
                                            <li className="list-inline-item">
                                                Consectetur adipiscing
                                            </li>
                                            <li className="list-inline-item">
                                                Integer molestie
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Inline list --&gt;
&lt;ul className=&quot;list-inline&quot;&gt;
  &lt;li className=&quot;list-inline-item&quot;&gt;Lorem ipsum dolor&lt;/li&gt;
  &lt;li className=&quot;list-inline-item&quot;&gt;Consectetur adipiscing&lt;/li&gt;
  &lt;li className=&quot;list-inline-item&quot;&gt;Integer molestie&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Inline list
ul.list-inline
  li.list-inline-item Lorem ipsum dolor
  li.list-inline-item Consectetur adipiscing
  li.list-inline-item Integer molestie
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Description list basic example-->
                    <section
                        className="pb-5 mb-md-2"
                        id="type-description-list"
                    >
                        <h2 className="h5 mb-3">
                            Description list basic example
                        </h2>
                        <div className="card border-0 shadow-lg">
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
                                        <dl>
                                            <dt>Description lists</dt>
                                            <dd>
                                                A description list is perfect
                                                for defining terms.
                                            </dd>
                                            <dt>Malesuada porta</dt>
                                            <dd>
                                                Etiam porta sem malesuada magna
                                                mollis euismod.
                                            </dd>
                                            <dt>Euismod</dt>
                                            <dd>
                                                Vestibulum id ligula porta felis
                                                euismod semper eget lacinia odio
                                                sem nec elit.
                                            </dd>
                                        </dl>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Description list basic example --&gt;
&lt;dl&gt;
  &lt;dt&gt;Description lists&lt;/dt&gt;
  &lt;dd&gt;A description list is perfect for defining terms.&lt;/dd&gt;
  &lt;dt&gt;Malesuada porta&lt;/dt&gt;
  &lt;dd&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/dd&gt;
  &lt;dt&gt;Euismod&lt;/dt&gt;
  &lt;dd&gt;Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug10"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Description list basic example
dl
  dt Description lists
  dd A description list is perfect for defining terms.
  dt Malesuada porta
  dd Etiam porta sem malesuada magna mollis euismod.
  dt Euismod
  dd Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Description list alignment-->
                    <section
                        className="pb-5 mb-md-2"
                        id="type-description-list-align"
                    >
                        <h2 className="h5 mb-3">Description list alignment</h2>
                        <div className="card border-0 shadow-lg">
                            <div className="card-header">
                                <ul
                                    className="nav nav-tabs card-header-tabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            href="#result11"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="result11"
                                            aria-selected="true"
                                            >Result</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#html11"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="html11"
                                            aria-selected="false"
                                            >HTML</a
                                        >
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="#pug11"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-controls="pug11"
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
                                        id="result11"
                                        role="tabpanel"
                                    >
                                        <dl className="row mb-0">
                                            <dt className="col-sm-3">
                                                Description lists
                                            </dt>
                                            <dd className="col-sm-9">
                                                A description list is perfect
                                                for defining terms.
                                            </dd>
                                            <dt className="col-sm-3">
                                                Euismod
                                            </dt>
                                            <dd className="col-sm-9">
                                                <p className="mb-2">
                                                    Vestibulum id ligula porta
                                                    felis euismod semper eget
                                                    lacinia odio sem nec elit.
                                                </p>
                                                <p className="mb-0">
                                                    Donec id elit non mi porta
                                                    gravida at eget metus.
                                                </p>
                                            </dd>
                                            <dt className="col-sm-3">
                                                Malesuada porta
                                            </dt>
                                            <dd className="col-sm-9">
                                                Etiam porta sem malesuada magna
                                                mollis euismod.
                                            </dd>
                                            <dt
                                                className="col-sm-3 text-truncate"
                                            >
                                                Long truncated term is truncated
                                            </dt>
                                            <dd className="col-sm-9">
                                                Fusce dapibus, tellus ac cursus
                                                commodo, tortor mauris
                                                condimentum nibh, ut fermentum
                                                massa justo sit amet risus.
                                            </dd>
                                            <dt className="col-sm-3">
                                                Nesting
                                            </dt>
                                            <dd className="col-sm-9">
                                                <dl className="row">
                                                    <dt className="col-sm-4">
                                                        Nested definition list
                                                    </dt>
                                                    <dd className="col-sm-8">
                                                        Aenean posuere, tortor
                                                        sed cursus feugiat nunc
                                                        augue.
                                                    </dd>
                                                </dl>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html11"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Description list alignment --&gt;
&lt;dl className=&quot;row&quot;&gt;
  &lt;dt className=&quot;col-sm-3&quot;&gt;Description lists&amp;nbsp;&lt;/dt&gt;
  &lt;dd className=&quot;col-sm-9&quot;&gt;A description list is perfect for defining terms.&lt;/dd&gt;
  &lt;dt className=&quot;col-sm-3&quot;&gt;Euismod&lt;/dt&gt;
  &lt;dd className=&quot;col-sm-9&quot;&gt;
    &lt;p className=&quot;mb-2&quot;&gt;Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.&lt;/p&gt;
    &lt;p className=&quot;mb-0&quot;&gt;Donec id elit non mi porta gravida at eget metus.&lt;/p&gt;
  &lt;/dd&gt;
  &lt;dt className=&quot;col-sm-3&quot;&gt;Malesuada porta&lt;/dt&gt;
  &lt;dd className=&quot;col-sm-9&quot;&gt;Etiam porta sem malesuada magna mollis euismod.&lt;/dd&gt;
  &lt;dt className=&quot;col-sm-3 text-truncate&quot;&gt;Long truncated term is truncated&lt;/dt&gt;
  &lt;dd className=&quot;col-sm-9&quot;&gt;Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.&lt;/dd&gt;
  &lt;dt className=&quot;col-sm-3&quot;&gt;Nesting&lt;/dt&gt;
  &lt;dd className=&quot;col-sm-9&quot;&gt;
    &lt;dl className=&quot;row&quot;&gt;
      &lt;dt className=&quot;col-sm-4&quot;&gt;Nested definition list&lt;/dt&gt;
      &lt;dd className=&quot;col-sm-8&quot;&gt;Aenean posuere, tortor sed cursus feugiat nunc augue.&lt;/dd&gt;
    &lt;/dl&gt;
  &lt;/dd&gt;
&lt;/dl&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug11"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Description list alignment
dl.row.mb-0
  dt.col-sm-3 Description lists&amp;nbsp;
  dd.col-sm-9 A description list is perfect for defining terms.
  dt.col-sm-3 Euismod
  dd.col-sm-9
    p.mb-2 Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
    p.mb-0 Donec id elit non mi porta gravida at eget metus.
  dt.col-sm-3 Malesuada porta
  dd.col-sm-9 Etiam porta sem malesuada magna mollis euismod.
  dt.col-sm-3.text-truncate Long truncated term is truncated
  dd.col-sm-9 Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  dt.col-sm-3 Nesting
  dd.col-sm-9
    dl.row
      dt.col-sm-4 Nested definition list
      dd.col-sm-8 Aenean posuere, tortor sed cursus feugiat nunc augue.</code></pre>
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
                                            href="#type-headings"
                                            >Headings</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-displays"
                                            >Display headings</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-body-text"
                                            >Body text sizes</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-inline"
                                            >Inline text elements</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-abbreviations"
                                            >Abbreviations</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-blockquote"
                                            >Blockquote</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-lists"
                                            >Lists: Unordered and ordered</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-lists-unstyled"
                                            >Lists: Unstyled</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-lists-inline"
                                            >Lists: Inline</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-description-list"
                                            >Description list basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#type-description-list-align"
                                            >Description list alignment</a
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
