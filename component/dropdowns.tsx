<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Dropdowns</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Dropdowns</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Toggle contextual overlays for displaying lists
                                of links or other content.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/dropdowns/"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Static examples-->
                    <section className="pb-5 mb-md-2" id="dropdowns-static">
                        <h2 className="h5 mb-3">Static examples</h2>
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
                                            className="dropdown-menu d-inline-block align-top me-4 mb-4"
                                            style="
                                                position: static;
                                                width: 13rem;
                                            "
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                >Regular link</a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                >Another regular link</a
                                            ><a
                                                className="dropdown-item active"
                                                href="#"
                                                >Active link</a
                                            ><a
                                                className="dropdown-item disabled"
                                                href="#"
                                                >Disabled link</a
                                            >
                                        </div>
                                        <div
                                            className="dropdown-menu d-inline-block align-top me-4 mb-4"
                                            style="
                                                position: static;
                                                width: 13rem;
                                            "
                                        >
                                            <h6 className="dropdown-header">
                                                Dropdown header
                                            </h6>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                >Action</a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                >Another action</a
                                            >
                                            <div
                                                className="dropdown-divider"
                                            ></div>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                >Separated link</a
                                            >
                                        </div>
                                        <div
                                            className="dropdown-menu d-inline-block align-top mb-4"
                                            style="
                                                position: static;
                                                width: 13rem;
                                            "
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                ><i className="ci-home me-2"></i
                                                >Home<span
                                                    className="badge rounded-pill bg-faded-dark text-body ms-2"
                                                    >2</span
                                                ></a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                ><i
                                                    className="ci-user-circle me-2"
                                                ></i
                                                >Profile<span
                                                    className="badge rounded-pill bg-primary ms-2"
                                                    >3</span
                                                ></a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                ><i
                                                    className="ci-message me-2"
                                                ></i
                                                >Messages<span
                                                    className="badge rounded-pill bg-success ms-2"
                                                    >5</span
                                                ></a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                ><i
                                                    className="ci-settings me-2"
                                                ></i
                                                >Settings<span
                                                    className="badge rounded-pill bg-warning ms-2"
                                                    >1</span
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
                                        ><code className="lang-html">&lt;!-- Dropdown example 1 --&gt;
&lt;div className=&quot;dropdown-menu&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Regular link&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another regular link&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item active&quot;&gt;Active link&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item disabled&quot;&gt;Disabled link&lt;/a&gt;
&lt;/div&gt;

&lt;!-- Dropdown example 2 --&gt;
&lt;div className=&quot;dropdown-menu&quot;&gt;
  &lt;h6 className=&quot;dropdown-header&quot;&gt;Dropdown header&lt;/h6&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
  &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Separeted link&lt;/a&gt;
&lt;/div&gt;

&lt;!-- Dropdown example 3 --&gt;
&lt;div className=&quot;dropdown-menu&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-home me-2&quot;&gt;&lt;/i&gt;
    Regular link
    &lt;span className=&quot;badge rounded-pill bg-faded-dark text-body ms-2&quot;&gt;2&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-user-circle me-2&quot;&gt;&lt;/i&gt;
    Profile
    &lt;span className=&quot;badge rounded-pill bg-primary ms-2&quot;&gt;3&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-message me-2&quot;&gt;&lt;/i&gt;
    Messages
    &lt;span className=&quot;badge rounded-pill bg-success ms-2&quot;&gt;5&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-settings me-2&quot;&gt;&lt;/i&gt;
    Settings
    &lt;span className=&quot;badge rounded-pill bg-warning ms-2&quot;&gt;1&lt;/span&gt;
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
                                        ><code className="lang-pug">// Dropdown example 1
.dropdown-menu
  a(href=&quot;#&quot;).dropdown-item
    | Regular link
  a(href=&quot;#&quot;).dropdown-item
    | Another regular link
  a(href=&quot;#&quot;).dropdown-item.active
    | Active link
  a(href=&quot;#&quot;).dropdown-item.disabled
    | Disabled link

// Dropdown example 2
.dropdown-menu
  h6.dropdown-header
    | Dropdown header
  a(href=&quot;#&quot;).dropdown-item
    | Action
  a(href=&quot;#&quot;).dropdown-item
    | Another action
  .dropdown-divider
  a(href=&quot;#&quot;).dropdown-item
    | Separated link

// Dropdown example 3
.dropdown-menu
  a(href=&quot;#&quot;).dropdown-item
    i.ci-home.me-2
    | Home
    span.badge.rounded-pill.bg-faded-dark.text-body.ms-2
      | 2
  a(href=&quot;#&quot;).dropdown-item
    i.ci-user-circle.me-2
    | Profile
    span.badge.rounded-pill.bg-primary.ms-2
      | 3
  a(href=&quot;#&quot;).dropdown-item
    i.ci-message.me-2
    | Messages
    span.badge.rounded-pill.bg-success.ms-2
      | 5
  a(href=&quot;#&quot;).dropdown-item
    i.ci-settings.me-2
    | Settings
    span.badge.rounded-pill.bg-warning.ms-2
      | 1
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Dark dropdowns-->
                    <section className="pb-5 mb-md-2" id="dropdowns-dark">
                        <h2 className="h5 mb-3">Dark dropdowns</h2>
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
                                            className="dropdown-menu dropdown-menu-dark d-inline-block align-top me-4 mb-4"
                                            style="
                                                position: static;
                                                width: 13rem;
                                            "
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                >Regular link</a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                >Another regular link</a
                                            ><a
                                                className="dropdown-item active"
                                                href="#"
                                                >Active link</a
                                            ><a
                                                className="dropdown-item disabled"
                                                href="#"
                                                >Disabled link</a
                                            >
                                        </div>
                                        <div
                                            className="dropdown-menu dropdown-menu-dark d-inline-block align-top me-4 mb-4"
                                            style="
                                                position: static;
                                                width: 13rem;
                                            "
                                        >
                                            <h6 className="dropdown-header">
                                                Dropdown header
                                            </h6>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                >Action</a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                >Another action</a
                                            >
                                            <div
                                                className="dropdown-divider"
                                            ></div>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                >Separated link</a
                                            >
                                        </div>
                                        <div
                                            className="dropdown-menu dropdown-menu-dark d-inline-block align-top mb-4"
                                            style="
                                                position: static;
                                                width: 13rem;
                                            "
                                        >
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                                ><i className="ci-home me-2"></i
                                                >Home<span
                                                    className="badge rounded-pill bg-light text-body ms-2"
                                                    >2</span
                                                ></a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                ><i
                                                    className="ci-user-circle me-2"
                                                ></i
                                                >Profile<span
                                                    className="badge rounded-pill bg-primary ms-2"
                                                    >3</span
                                                ></a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                ><i
                                                    className="ci-message me-2"
                                                ></i
                                                >Messages<span
                                                    className="badge rounded-pill bg-success ms-2"
                                                    >5</span
                                                ></a
                                            ><a
                                                className="dropdown-item"
                                                href="#"
                                                ><i
                                                    className="ci-settings me-2"
                                                ></i
                                                >Settings<span
                                                    className="badge rounded-pill bg-warning ms-2"
                                                    >1</span
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
                                        ><code className="lang-html">&lt;!-- Dark dropdown example 1 --&gt;
&lt;div className=&quot;dropdown-menu dropdown-menu-dark&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Regular link&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another regular link&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item active&quot;&gt;Active link&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item disabled&quot;&gt;Disabled link&lt;/a&gt;
&lt;/div&gt;

&lt;!-- Dark dropdown example 2 --&gt;
&lt;div className=&quot;dropdown-menu dropdown-menu-dark&quot;&gt;
  &lt;h6 className=&quot;dropdown-header&quot;&gt;Dropdown header&lt;/h6&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
  &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Separeted link&lt;/a&gt;
&lt;/div&gt;

&lt;!-- Dark dropdown example 3 --&gt;
&lt;div className=&quot;dropdown-menu dropdown-menu-dark&quot;&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-home me-2&quot;&gt;&lt;/i&gt;
    Regular link
    &lt;span className=&quot;badge rounded-pill bg-light text-body ms-2&quot;&gt;2&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-user-circle me-2&quot;&gt;&lt;/i&gt;
    Profile
    &lt;span className=&quot;badge rounded-pill bg-primary ms-2&quot;&gt;3&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-message me-2&quot;&gt;&lt;/i&gt;
    Messages
    &lt;span className=&quot;badge rounded-pill bg-success ms-2&quot;&gt;5&lt;/span&gt;
  &lt;/a&gt;
  &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;
    &lt;i className=&quot;ci-settings me-2&quot;&gt;&lt;/i&gt;
    Settings
    &lt;span className=&quot;badge rounded-pill bg-warning ms-2&quot;&gt;1&lt;/span&gt;
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
                                        ><code className="lang-pug">// Dark dropdown example 1
.dropdown-menu.dropdown-menu-dark
  a(href=&quot;#&quot;).dropdown-item
    | Regular link
  a(href=&quot;#&quot;).dropdown-item
    | Another regular link
  a(href=&quot;#&quot;).dropdown-item.active
    | Active link
  a(href=&quot;#&quot;).dropdown-item.disabled
    | Disabled link

// Dark dropdown example 2
.dropdown-menu.dropdown-menu-dark
  h6.dropdown-header
    | Dropdown header
  a(href=&quot;#&quot;).dropdown-item
    | Action
  a(href=&quot;#&quot;).dropdown-item
    | Another action
  .dropdown-divider
  a(href=&quot;#&quot;).dropdown-item
    | Separated link

// Dark dropdown example 3
.dropdown-menu.dropdown-menu-dark
  a(href=&quot;#&quot;).dropdown-item
    i.ci-home.me-2
    | Home
    span.badge.rounded-pill.bg-light.text-body.ms-2
      | 2
  a(href=&quot;#&quot;).dropdown-item
    i.ci-user-circle.me-2
    | Profile
    span.badge.rounded-pill.bg-primary.ms-2
      | 3
  a(href=&quot;#&quot;).dropdown-item
    i.ci-message.me-2
    | Messages
    span.badge.rounded-pill.bg-success.ms-2
      | 5
  a(href=&quot;#&quot;).dropdown-item
    i.ci-settings.me-2
    | Settings
    span.badge.rounded-pill.bg-warning.ms-2
      | 1
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Forms inside dropdown-->
                    <section className="pb-5 mb-md-2" id="dropdowns-forms">
                        <h2 className="h5 mb-3">Forms inside dropdown</h2>
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
                                            className="dropdown-menu d-block mb-3"
                                            style="
                                                position: static;
                                                width: 17rem;
                                            "
                                        >
                                            <form
                                                className="p-4"
                                                autocomplete="off"
                                            >
                                                <div className="mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="exampleDropdownFormEmail"
                                                        >Email address</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        id="exampleDropdownFormEmail"
                                                        placeholder="email@example.com"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="exampleDropdownFormPassword"
                                                        >Password</label
                                                    >
                                                    <input
                                                        className="form-control"
                                                        type="password"
                                                        id="exampleDropdownFormPassword"
                                                        placeholder="Password"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="dropdownCheck"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="dropdownCheck"
                                                            >Remember me</label
                                                        >
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-primary"
                                                    type="submit"
                                                >
                                                    Sign In
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Forms inside dropdown --&gt;
&lt;div className=&quot;dropdown-menu&quot; style=&quot;width: 17rem;&quot;&gt;
  &lt;form className=&quot;p-4&quot;&gt;
    &lt;div className=&quot;mb-3&quot;&gt;
      &lt;label for=&quot;exampleDropdownFormEmail&quot; className=&quot;form-label&quot;&gt;Email address&lt;/label&gt;
      &lt;input type=&quot;email&quot; className=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail&quot; placeholder=&quot;email@example.com&quot; required&gt;
    &lt;/div&gt;
    &lt;div className=&quot;mb-3&quot;&gt;
      &lt;label for=&quot;exampleDropdownFormPassword&quot; className=&quot;form-label&quot;&gt;Password&lt;/label&gt;
      &lt;input type=&quot;password&quot; className=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword&quot; placeholder=&quot;Password&quot; required&gt;
    &lt;/div&gt;
    &lt;div className=&quot;mb-3&quot;&gt;
      &lt;div className=&quot;form-check&quot;&gt;
        &lt;input type=&quot;checkbox&quot; className=&quot;form-check-input&quot; id=&quot;dropdownCheck&quot;&gt;
        &lt;label for=&quot;dropdownCheck&quot; className=&quot;form-check-label&quot;&gt;Remember me&lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;button type=&quot;submit&quot; className=&quot;btn btn-primary&quot;&gt;Sign In&lt;/button&gt;
  &lt;/form&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Forms inside dropdown
.dropdown-menu(style=&quot;width: 17rem;&quot;)
  form.p-4
    .mb-3
      label(for=&quot;exampleDropdownFormEmail&quot;).form-label
        | Email address
      input(type=&quot;email&quot;, id=&quot;exampleDropdownFormEmail&quot;, placeholder=&quot;email@example.com&quot;, required).form-control
    .mb-3
      label(for=&quot;exampleDropdownFormPassword&quot;).form-label
        | Password
      input(type=&quot;password&quot;, id=&quot;exampleDropdownFormPassword&quot;, placeholder=&quot;Password&quot;, required).form-control
    .mb-3
      .form-check
        input(type=&quot;checkbox&quot;, id=&quot;dropdownCheck&quot;).form-check-input
        label(for=&quot;dropdownCheck&quot;).form-check-label
          | Remember me
    button(type=&quot;submit&quot;).btn.btn-primary
      | Sign In
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Directions-->
                    <section className="pb-5 mb-md-2" id="dropdowns-directions">
                        <h2 className="h5 mb-3">Directions</h2>
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
                                            className="btn-group dropdown d-inline-block mb-3 me-2"
                                        >
                                            <button
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="btn-group dropup d-inline-block mb-3 me-2"
                                        >
                                            <button
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Dropup
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="btn-group dropend d-inline-block mb-3 me-2"
                                        >
                                            <button
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Dropright
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
                                                >
                                            </div>
                                        </div>
                                        <div
                                            className="btn-group dropstart d-inline-block mb-3 me-2"
                                        >
                                            <button
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                &nbsp;Dropleft
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
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
                                        ><code className="lang-html">&lt;!-- Dropdown --&gt;
&lt;div className=&quot;btn-group dropdown&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    Dropdown
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
    &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Something else here&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dropup --&gt;
&lt;div className=&quot;btn-group dropup&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    Dropdown
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
    &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Something else here&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dropright --&gt;
&lt;div className=&quot;btn-group dropend&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    Dropdown
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
    &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Something else here&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Dropleft --&gt;
&lt;div className=&quot;btn-group dropstart&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    Dropdown
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
    &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Something else here&lt;/a&gt;
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
                                        ><code className="lang-pug">// Dropdown
.btn-group.dropdown
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-outline-secondary.dropdown-toggle
    | Dropdown
  .dropdown-menu
    a(href=&quot;#&quot;).dropdown-item
      | Action
    a(href=&quot;#&quot;).dropdown-item
      | Another action
    .dropdown-divider
    a(href=&quot;#&quot;).dropdown-item
      | Something else here

// Dropup
.btn-group.dropup
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-outline-secondary.dropdown-toggle
    | Dropup
  .dropdown-menu
    a(href=&quot;#&quot;).dropdown-item
      | Action
    a(href=&quot;#&quot;).dropdown-item
      | Another action
    .dropdown-divider
    a(href=&quot;#&quot;).dropdown-item
      | Something else here

// Dropright
.btn-group.dropend
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-outline-secondary.dropdown-toggle
    | Dropright
  .dropdown-menu
    a(href=&quot;#&quot;).dropdown-item
      | Action
    a(href=&quot;#&quot;).dropdown-item
      | Another action
    .dropdown-divider
    a(href=&quot;#&quot;).dropdown-item
      | Something else here

// Dropleft
.btn-group.dropstart
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-outline-secondary.dropdown-toggle
    | Dropleft
  .dropdown-menu
    a(href=&quot;#&quot;).dropdown-item
      | Action
    a(href=&quot;#&quot;).dropdown-item
      | Another action
    .dropdown-divider
    a(href=&quot;#&quot;).dropdown-item
      | Something else here
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Menu alignment-->
                    <section className="pb-5 mb-md-2" id="dropdowns-alignment">
                        <h2 className="h5 mb-3">Menu alignment</h2>
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
                                            className="btn-group dropdown d-inline-block mb-3 me-2"
                                        >
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Right-aligned menu
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
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
                                        ><code className="lang-html">&lt;!-- Dropdown --&gt;
&lt;div className=&quot;btn-group dropdown&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    Right-aligned menu
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Action&lt;/a&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Another action&lt;/a&gt;
    &lt;div className=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
    &lt;a href=&quot;#&quot; className=&quot;dropdown-item&quot;&gt;Something else here&lt;/a&gt;
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
                                        ><code className="lang-pug">// Dropdown
.btn-group.dropdown
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false&quot;).btn.btn-primary.dropdown-toggle
    | Right-aligned menu
  .dropdown-menu.dropdown-menu-end
    a(href=&quot;#&quot;).dropdown-item
      | Action
    a(href=&quot;#&quot;).dropdown-item
      | Another action
    .dropdown-divider
    a(href=&quot;#&quot;).dropdown-item
      | Something else here
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Split button-->
                    <section
                        className="pb-5 mb-md-2"
                        id="dropdowns-split-button"
                    >
                        <h2 className="h5 mb-3">Split button</h2>
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
                                        <div className="btn-group me-2 mb-3">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Button
                                            </button>
                                            <button
                                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span
                                                    className="visually-hidden"
                                                    >Toggle dropdown</span
                                                >
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
                                                >
                                            </div>
                                        </div>
                                        <div className="btn-group me-2 mb-3">
                                            <button
                                                className="btn btn-outline-primary"
                                                type="button"
                                            >
                                                Button
                                            </button>
                                            <button
                                                className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span
                                                    className="visually-hidden"
                                                    >Toggle dropdown</span
                                                >
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
                                                >
                                                <div
                                                    className="dropdown-divider"
                                                ></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                    >Something else here</a
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
                                        ><code className="lang-html">&lt;!-- Solid split button --&gt;
&lt;div className=&quot;btn-group&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary&quot;&gt;Button&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-primary dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    &lt;span className=&quot;visually-hidden&quot;&gt;Toggle dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Outline split button --&gt;
&lt;div className=&quot;btn-group&quot;&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary&quot;&gt;Button&lt;/button&gt;
  &lt;button type=&quot;button&quot; className=&quot;btn btn-outline-primary dropdown-toggle dropdown-toggle-split&quot; data-bs-toggle=&quot;dropdown&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;
    &lt;span className=&quot;visually-hidden&quot;&gt;Toggle dropdown&lt;/span&gt;
  &lt;/button&gt;
  &lt;div className=&quot;dropdown-menu&quot;&gt;
    ...
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
                                        ><code className="lang-pug">// Solid split button
.btn-group
  button(type=&quot;button&quot;).btn.btn-primary
    | Button
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false'&quot;).btn.btn-primary.dropdown-toggle.dropdown-toggle-split
    span.visually-hidden
      | Toggle dropdown
  .dropdown-menu
    | ...

// Outline split button
.btn-group
  button(type=&quot;button&quot;).btn.btn-outline-primary
    | Button
  button(type=&quot;button&quot;, data-bs-toggle=&quot;dropdown&quot;, aria-haspopup=&quot;true&quot;, aria-expanded=&quot;false'&quot;).btn.btn-outline-primary.dropdown-toggle.dropdown-toggle-split
    span.visually-hidden
      | Toggle dropdown
  .dropdown-menu
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
                                            href="#dropdowns-static"
                                            >Static examples</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#dropdowns-dark"
                                            >Dark dropdowns</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#dropdowns-forms"
                                            >Forms inside dropdown</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#dropdowns-directions"
                                            >Directions</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#dropdowns-alignment"
                                            >Menu alignment</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#dropdowns-split-button"
                                            >Split button</a
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
