<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Input group</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Input group</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Extend form controls by adding text, buttons,
                                etc. on either side.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/forms/input-group/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Addon position-->
                    <section className="pb-5 mb-md-2" id="ig-addon-position">
                        <h2 className="h5 mb-3">Addon position</h2>
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
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"
                                                ><i className="ci-locked"></i
                                            ></span>
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Recipient's e-mail"
                                            /><span className="input-group-text"
                                                >@example.com</span
                                            >
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text"
                                                ><i className="ci-dollar"></i
                                            ></span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Amount"
                                            /><span className="input-group-text"
                                                >.00</span
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
                                        ><code className="lang-html">&lt;!-- Addon on the left --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;span className=&quot;input-group-text&quot;&gt;
    &lt;i className=&quot;ci-locked&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;input type=&quot;password&quot; className=&quot;form-control&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;

&lt;!-- Addon on the right --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;input type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;Recipient's e-mail&quot;&gt;
  &lt;span className=&quot;input-group-text&quot;&gt;@example.com&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Addons on both sides --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;span className=&quot;input-group-text&quot;&gt;
    &lt;i className=&quot;ci-dollar&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;input type=&quot;text&quot; className=&quot;form-control&quot; placeholder=&quot;Amount&quot;&gt;
  &lt;span className=&quot;input-group-text&quot;&gt;.00&lt;/span&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Addon on the left
.input-group
  span.input-group-text
    i.ci-locked
  input(type=&quot;password&quot;, placeholder=&quot;Password&quot;).form-control

// Addon on the right
.input-group
  input(type=&quot;text&quot;, placeholder=&quot;Recipient's e-mail&quot;).form-control
  span.input-group-text
      | @example.com

// Addons on both sides
.input-group
  span.input-group-text
    i.ci-dollar
  input(type=&quot;text&quot;, placeholder=&quot;Amount&quot;).form-control
  span.input-group-text
    | .00
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Different types-->
                    <section className="pb-5 mb-md-2" id="ig-addon-types">
                        <h2 className="h5 mb-3">Different types</h2>
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
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"
                                                ><i className="ci-message"></i
                                            ></span>
                                            <textarea
                                                className="form-control"
                                                placeholder="Type your message here..."
                                                rows="6"
                                            ></textarea>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span
                                                className="input-group-text fw-medium"
                                                >Options</span
                                            >
                                            <select className="form-select">
                                                <option>Choose one...</option>
                                                <option>One</option>
                                                <option>Two</option>
                                                <option>Three</option>
                                                <option>Four</option>
                                                <option>Five</option>
                                            </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div
                                                className="input-group-text pe-2"
                                            >
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="ex-check-1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="ex-check-1"
                                                    ></label>
                                                </div>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Checkbox here"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <div
                                                className="input-group-text pe-2"
                                            >
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="ex-radio-1"
                                                        name="radio"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="ex-radio-1"
                                                    ></label>
                                                </div>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Radio button here"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Icon addon --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;span className=&quot;input-group-text&quot;&gt;
    &lt;i className=&quot;ci-message&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;textarea className=&quot;form-control&quot; placeholder=&quot;Type your message here...&quot; rows=&quot;6&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;

&lt;!-- Textual addon --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;span className=&quot;input-group-text fw-medium&quot;&gt;Options&lt;/span&gt;
  &lt;select className=&quot;form-select&quot;&gt;
    &lt;option&gt;Choose one...&lt;/option&gt;
    &lt;option&gt;One&lt;/option&gt;
    &lt;option&gt;Two&lt;/option&gt;
    &lt;option&gt;Three&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;

&lt;!-- Checkbox addon --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;div className=&quot;input-group-text pe-2&quot;&gt;
    &lt;div className=&quot;form-check&quot;&gt;
      &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;ex-check-1&quot;&gt;
      &lt;label className=&quot;form-check-label&quot; for=&quot;ex-check-1&quot;&gt;&lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Checkbox here&quot;&gt;
&lt;/div&gt;

&lt;!-- Radio button addon --&gt;
&lt;div className=&quot;input-group&quot;&gt;
    &lt;div className=&quot;input-group-text pe-2&quot;&gt;
      &lt;div className=&quot;form-check&quot;&gt;
        &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; id=&quot;ex-radio-1&quot; name=&quot;radio&quot;&gt;
        &lt;label className=&quot;form-check-label&quot; for=&quot;ex-radio-1&quot;&gt;&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Radio button here&quot;&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Icon addon
.input-group
  span.input-group-text
    i.ci-message
  textarea(placeholder=&quot;Type your message here...&quot;, rows=&quot;6&quot;).form-control

// Textual addon
.input-group
  span.input-group-text.fw-medium
    | Options
  select.form-select
    option Choose one...
    option One
    option Two
    option Three
    option Four
    option Five

// Checkbox addon
.input-group.mb-3
  .input-group-text.pe-2
    .form-check
      input(type=&quot;checkbox&quot;, id=&quot;ex-check-1&quot;).form-check-input
      label(for=&quot;ex-check-1&quot;).form-check-label
  input(type=&quot;text&quot;, placeholder=&quot;Checkbox here&quot;).form-control

// Radio button addon
.input-group.mb-3
  .input-group-text.pe-2
    .form-check
      input(type=&quot;radio&quot;, id=&quot;ex-radio-1&quot;, name=&quot;radio&quot;).form-check-input
      label(for=&quot;ex-radio-1&quot;).form-check-label
  input(type=&quot;text&quot;, placeholder=&quot;Radio button here&quot;).form-control
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Multiple inputs-->
                    <section className="pb-5 mb-md-2" id="ig-addon-multiple">
                        <h2 className="h5 mb-3">Multiple inputs</h2>
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
                                        <div className="input-group mb-3">
                                            <span
                                                className="input-group-text fw-medium"
                                                >Full name</span
                                            >
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="First name"
                                            />
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Last name"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="time"
                                                value="07:45"
                                            />
                                            <input
                                                className="form-control"
                                                type="time"
                                                value="09:00"
                                            /><span className="input-group-text"
                                                ><i className="ci-time"></i
                                            ></span>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Multiple inputs (addon on the left) --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;span className=&quot;input-group-text fw-medium&quot;&gt;Full name&lt;/span&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;First name&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Last name&quot;&gt;
&lt;/div&gt;

&lt;!-- Multiple inputs (addon on the right) --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;time&quot; value=&quot;07:45&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;time&quot; value=&quot;09:00&quot;&gt;
  &lt;span className=&quot;input-group-text&quot;&gt;
    &lt;i className=&quot;ci-time&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Multiple inputs (addon on the left)
.input-group
  span.input-group-text.fw-medium Full name
  input(type=&quot;text&quot;, placeholder=&quot;First name&quot;).form-control
  input(type=&quot;text&quot;, placeholder=&quot;Last name&quot;).form-control

// Multiple inputs (addon on the right)
.input-group
  input(type=&quot;time&quot;, value=&quot;07:45&quot;).form-control
  input(type=&quot;time&quot;, value=&quot;09:00&quot;).form-control
  span.input-group-text
    i.ci-time
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Button addons-->
                    <section className="pb-5 mb-md-2" id="ig-addon-button">
                        <h2 className="h5 mb-3">Button addons</h2>
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
                                        <div className="input-group mb-3">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Button
                                            </button>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Button on the left"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Button on the right"
                                            />
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Button
                                            </button>
                                        </div>
                                        <div className="input-group mb-3">
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                Dropdown
                                            </button>
                                            <div className="dropdown-menu">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Action</a
                                                ><a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Another action</a
                                                ><a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
                                                >
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dropdown on the left"
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Dropdown on the right"
                                            />
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                Dropdown
                                            </button>
                                            <div
                                                className="dropdown-menu dropdown-menu-end"
                                            >
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Action</a
                                                ><a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Another action</a
                                                ><a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
                                                >
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Buttons on the right"
                                            />
                                            <button
                                                className="btn btn-light border btn-icon"
                                                type="button"
                                            >
                                                <i className="ci-edit"></i>
                                            </button>
                                            <button
                                                className="btn btn-white border btn-icon"
                                                type="button"
                                            >
                                                <i
                                                    className="ci-check text-success"
                                                ></i>
                                            </button>
                                            <button
                                                className="btn bg-white border btn-icon"
                                                type="button"
                                            >
                                                <i
                                                    className="ci-trash text-danger"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Button addon on the left --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;button className=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Button on the left&quot;&gt;
&lt;/div&gt;

&lt;!-- Button addon on the right --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Button on the right&quot;&gt;
  &lt;button className=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Dropdown addon on the left --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;button className=&quot;btn btn-primary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Dropdown&lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
    &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
    &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
  &lt;/div&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Dropdown on the right&quot;&gt;
&lt;/div&gt;

&lt;!-- Dropdown addon on the right --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Dropdown on the right&quot;&gt;
  &lt;button className=&quot;btn btn-primary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot;&gt;Dropdown&lt;/button&gt;
  &lt;div className=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
    &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
    &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
    &lt;a className=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Multiple button addons --&gt;
&lt;div className=&quot;input-group&quot;&gt;
  &lt;input className=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;Buttons on the right&quot;&gt;
  &lt;button className=&quot;btn btn-white border btn-icon&quot; type=&quot;button&quot;&gt;
    &lt;i className=&quot;ci-edit&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;button className=&quot;btn btn-white border btn-icon&quot; type=&quot;button&quot;&gt;
    &lt;i className=&quot;ci-check text-success&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;button className=&quot;btn btn-white border btn-icon&quot; type=&quot;button&quot;&gt;
    &lt;i className=&quot;ci-trash text-danger&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug5"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Button addon on the left
.input-group
  button.btn.btn-primary(type=&quot;button&quot;) Button
  input(type=&quot;text&quot;, placeholder=&quot;Button on the left&quot;).form-control

// Button addon on the right
.input-group
  input(type=&quot;text&quot;, placeholder=&quot;Button on the right&quot;).form-control
  button.btn.btn-primary(type=&quot;button&quot;) Button

// Dropdown addon on the left
.input-group
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;).btn.btn-primary.dropdown-toggle Dropdown
  .dropdown-menu
    a.dropdown-item(href=&quot;#&quot;) Action
    a.dropdown-item(href=&quot;#&quot;) Another action
    a.dropdown-item(href=&quot;#&quot;) Something else here
  input(type=&quot;text&quot;, placeholder=&quot;Dropdown on the left&quot;).form-control

// Dropdown addon on the right
.input-group
  input(type=&quot;text&quot;, placeholder=&quot;Dropdown on the right&quot;).form-control
  button.btn.btn-primary.dropdown-toggle(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;) Dropdown
  .dropdown-menu.dropdown-menu-end
    a.dropdown-item(href=&quot;#&quot;) Action
    a.dropdown-item(href=&quot;#&quot;) Another action
    a.dropdown-item(href=&quot;#&quot;) Something else here

// Multiple button addons
.input-group
  input(type=&quot;text&quot;, placeholder=&quot;Buttons on the right&quot;).form-control
  button(type=&quot;button&quot;).btn.btn-light.border.btn-icon
    i.ci-edit
  button(type=&quot;button&quot;).btn.btn-white.border.btn-icon
    i.ci-check.text-success
  button(type=&quot;button&quot;).btn.bg-white.border.btn-icon
    i.ci-trash.text-danger</code></pre>
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
                                            href="#ig-addon-position"
                                            >Addon position</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#ig-addon-types"
                                            >Different types</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#ig-addon-multiple"
                                            >Multiple inputs</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#ig-addon-button"
                                            >Button addons</a
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
