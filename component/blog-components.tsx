<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Blog components</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Blog components</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Components that are related to the blog / news
                                module of the website.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <!-- Post preview (List)-->
                    <section className="pb-5 mb-md-2" id="post-preview-list">
                        <h2 className="h5 mb-3">Post preview (List)</h2>
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
                                        <article
                                            className="blog-list pt-3 pb-2"
                                            style="max-width: 51rem"
                                        >
                                            <div className="blog-start-column">
                                                <div
                                                    className="d-flex align-items-center fs-sm pb-2 mb-1"
                                                >
                                                    <a
                                                        className="blog-entry-meta-link"
                                                        href="#"
                                                    >
                                                        <div
                                                            className="blog-entry-author-ava"
                                                        >
                                                            <img
                                                                src="../img/blog/meta/03.jpg"
                                                                alt="Paul Woodred"
                                                            />
                                                        </div>
                                                        Paul Woodred</a
                                                    ><span
                                                        className="blog-entry-meta-divider"
                                                    ></span
                                                    ><a
                                                        className="blog-entry-meta-link"
                                                        href="#"
                                                        >Jul 6</a
                                                    >
                                                </div>
                                                <h2
                                                    className="h5 blog-entry-title"
                                                >
                                                    <a href="#"
                                                        >Shopping Tips. Places
                                                        Where to Buy Cheap</a
                                                    >
                                                </h2>
                                            </div>
                                            <div className="blog-end-column">
                                                <a
                                                    className="blog-entry-thumb mb-3"
                                                    href="#"
                                                    ><img
                                                        src="../img/blog/02.jpg"
                                                        alt="Post"
                                                /></a>
                                                <div
                                                    className="d-flex justify-content-between mb-1"
                                                >
                                                    <div
                                                        className="fs-sm text-muted pe-2 mb-2"
                                                    >
                                                        in
                                                        <a
                                                            href="#"
                                                            className="blog-entry-meta-link"
                                                            >Shopping</a
                                                        >,
                                                        <a
                                                            href="#"
                                                            className="blog-entry-meta-link"
                                                            >Personal finance</a
                                                        >
                                                    </div>
                                                    <div className="fs-sm mb-2">
                                                        <a
                                                            className="blog-entry-meta-link text-nowrap"
                                                            href="#"
                                                            ><i
                                                                className="ci-message"
                                                            ></i
                                                            >15</a
                                                        >
                                                    </div>
                                                </div>
                                                <p className="fs-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation…
                                                    <a
                                                        href="#"
                                                        className="blog-entry-meta-link fw-medium"
                                                        >[Read more]</a
                                                    >
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Post preview (List) --&gt;
&lt;article className=&quot;blog-list&quot;&gt;
  &lt;div className=&quot;blog-start-column&quot;&gt;
    &lt;div className=&quot;d-flex align-items-center fs-sm pb-2 mb-1&quot;&gt;
      &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;
        &lt;div className=&quot;blog-entry-author-ava&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; alt=&quot;Paul Woodred&quot;&gt;
        &lt;/div&gt;
        Paul Woodred
      &lt;/a&gt;
      &lt;span className=&quot;blog-entry-meta-divider&quot;&gt;&lt;/span&gt;
      &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;Jul 6&lt;/a&gt;
    &lt;/div&gt;
    &lt;h2 className=&quot;h5 blog-entry-title&quot;&gt;&lt;a href=&quot;#&quot;&gt;Shopping Tips. Places Where to Buy Cheap&lt;/a&gt;&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div className=&quot;blog-end-column&quot;&gt;
    &lt;a className=&quot;blog-entry-thumb mb-3&quot; href=&quot;#&quot;&gt;&lt;img src=&quot;path-to-image&quot; alt=&quot;Post&quot;&gt;&lt;/a&gt;
    &lt;div className=&quot;d-flex justify-content-between mb-1&quot;&gt;
      &lt;div className=&quot;fs-sm text-muted pe-2 mb-2&quot;&gt;
        in &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Shopping&lt;/a&gt;, &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Personal finance&lt;/a&gt;
      &lt;/div&gt;
      &lt;div className=&quot;fs-sm mb-2&quot;&gt;
        &lt;a className=&quot;blog-entry-meta-link text-nowrap&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-message&quot;&gt;&lt;/i&gt;
          15
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation… &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link fw-medium&quot;&gt;[Read more]&lt;/a&gt;&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug1"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Post preview (List)
article.blog-list
  .blog-start-column
    .d-flex.align-items-center.fs-sm.pb-2.mb-1
      a(href=&quot;#&quot;).blog-entry-meta-link
        .blog-entry-author-ava
          img(src=&quot;path-to-image&quot;, alt=&quot;Paul Woodred&quot;)
        | Paul Woodred
      span.blog-entry-meta-divider
      a(href=&quot;#&quot;).blog-entry-meta-link Jul 6
    h2.h5.blog-entry-title
      a(href=&quot;#&quot;) Shopping Tips. Places Where to Buy Cheap
  .blog-end-column
    a(href=&quot;#&quot;).blog-entry-thumb.mb-3
      img(src=&quot;path-to-image&quot;, alt=&quot;Post&quot;)
    .d-flex.justify-content-between.mb-1
      .fs-sm.text-muted.pe-2.mb-2
        | in &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Shopping&lt;/a&gt;, &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Personal finance&lt;/a&gt;
      .fs-sm.mb-2
        a(href=&quot;#&quot;).blog-entry-meta-link.text-nowrap
          i.ci-message
          | 15
    p.fs-sm Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation… &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link fw-medium&quot;&gt;[Read more]&lt;/a&gt;
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Post preview (Grid)-->
                    <section className="pb-5 mb-md-2" id="post-preview-grid">
                        <h2 className="h5 mb-3">Post preview (Grid)</h2>
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
                                        <article
                                            className="card"
                                            style="max-width: 24rem"
                                        >
                                            <a
                                                className="blog-entry-thumb"
                                                href="#"
                                                ><img
                                                    className="card-img-top"
                                                    src="../img/blog/04.jpg"
                                                    alt="Post"
                                            /></a>
                                            <div className="card-body">
                                                <h2
                                                    className="h6 blog-entry-title"
                                                >
                                                    <a href="#"
                                                        >Payments Made Easy. How
                                                        New Technology will
                                                        Affect E-Commerce
                                                        Industry Worldwide?</a
                                                    >
                                                </h2>
                                                <p className="fs-sm">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua enim ad
                                                    minim...
                                                </p>
                                                <a
                                                    className="btn-tag me-2 mb-2"
                                                    href="#"
                                                    >Shopping</a
                                                ><a
                                                    className="btn-tag me-2 mb-2"
                                                    href="#"
                                                    >Technology</a
                                                >
                                            </div>
                                            <div
                                                className="card-footer d-flex align-items-center fs-xs"
                                            >
                                                <a
                                                    className="blog-entry-meta-link"
                                                    href="#"
                                                >
                                                    <div
                                                        className="blog-entry-author-ava"
                                                    >
                                                        <img
                                                            src="../img/blog/meta/01.jpg"
                                                            alt="Emma Gallaher"
                                                        />
                                                    </div>
                                                    Emma Gallaher</a
                                                >
                                                <div
                                                    className="ms-auto text-nowrap"
                                                >
                                                    <a
                                                        className="blog-entry-meta-link text-nowrap"
                                                        href="#"
                                                        >May 13</a
                                                    ><span
                                                        className="blog-entry-meta-divider mx-2"
                                                    ></span
                                                    ><a
                                                        className="blog-entry-meta-link text-nowrap"
                                                        href="#"
                                                        ><i
                                                            className="ci-message"
                                                        ></i
                                                        >28</a
                                                    >
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Post preview (Grid) --&gt;
&lt;article className=&quot;card&quot;&gt;
  &lt;a className=&quot;blog-entry-thumb&quot; href=&quot;#&quot;&gt;
    &lt;img className=&quot;card-img-top&quot; src=&quot;path-to-image&quot; alt=&quot;Post&quot;&gt;
  &lt;/a&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h2 className=&quot;h6 blog-entry-title&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Payments Made Easy. How New Technology will Affect E-Commerce Industry Worldwide?&lt;/a&gt;
    &lt;/h2&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim...&lt;/p&gt;
    &lt;a className=&quot;btn-tag me-2 mb-2&quot; href=&quot;#&quot;&gt;Shopping&lt;/a&gt;
    &lt;a className=&quot;btn-tag me-2 mb-2&quot; href=&quot;#&quot;&gt;Technology&lt;/a&gt;
  &lt;/div&gt;
  &lt;div className=&quot;card-footer d-flex align-items-center fs-xs&quot;&gt;
    &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;
      &lt;div className=&quot;blog-entry-author-ava&quot;&gt;
        &lt;img src=&quot;path-to-image&quot; alt=&quot;Emma Gallaher&quot;&gt;
      &lt;/div&gt;
      Emma Gallaher
    &lt;/a&gt;
    &lt;div className=&quot;ms-auto text-nowrap&quot;&gt;
      &lt;a className=&quot;blog-entry-meta-link text-nowrap&quot; href=&quot;#&quot;&gt;May 13&lt;/a&gt;
      &lt;span className=&quot;blog-entry-meta-divider mx-2&quot;&gt;&lt;/span&gt;
      &lt;a className=&quot;blog-entry-meta-link text-nowrap&quot; href=&quot;#&quot;&gt;
        &lt;i className=&quot;ci-message&quot;&gt;&lt;/i&gt;
        28
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Post preview (Grid)
article.card
  a(href=&quot;#&quot;).blog-entry-thumb
    img(src=&quot;path-to-image&quot;, alt=&quot;Post&quot;).card-img-top
  .card-body
    h2.h6.blog-entry-title
      a(href=&quot;#&quot;) Payments Made Easy. How New Technology will Affect E-Commerce Industry Worldwide?
    p.fs-sm Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim...
    a.btn-tag.me-2.mb-2(href=&quot;#&quot;) Shopping
    a.btn-tag.me-2.mb-2(href=&quot;#&quot;) Technology
  .card-footer.d-flex.align-items-center.fs-xs
    a(href=&quot;#&quot;).blog-entry-meta-link
      .blog-entry-author-ava
        img(src=&quot;path-to-image&quot;, alt=&quot;Emma Gallaher&quot;)
      | Emma Gallaher
    .ms-auto.text-nowrap
      a.blog-entry-meta-link.text-nowrap(href=&quot;#&quot;) May 13
      span.blog-entry-meta-divider.mx-2
      a.blog-entry-meta-link.text-nowrap(href=&quot;#&quot;)
        i.ci-message
        | 28
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Featured post-->
                    <section className="pb-5 mb-md-2" id="featured-post">
                        <h2 className="h5 mb-3">Featured post</h2>
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
                                        <article style="max-width: 37rem">
                                            <a
                                                className="blog-entry-thumb mb-3"
                                                href="#"
                                                ><span
                                                    className="blog-entry-meta-label fs-sm"
                                                    ><i className="ci-time"></i
                                                    >Sep 10</span
                                                ><img
                                                    src="../img/blog/featured/01.jpg"
                                                    alt="Featured post"
                                            /></a>
                                            <div
                                                className="d-flex justify-content-between mb-2 pt-1"
                                            >
                                                <h2
                                                    className="h5 blog-entry-title mb-0"
                                                >
                                                    <a href="#"
                                                        >Healthy Food - New Way
                                                        of Living</a
                                                    >
                                                </h2>
                                                <a
                                                    className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1"
                                                    href="#"
                                                    ><i
                                                        className="ci-message"
                                                    ></i
                                                    >13</a
                                                >
                                            </div>
                                            <div
                                                className="d-flex align-items-center fs-sm"
                                            >
                                                <a
                                                    className="blog-entry-meta-link"
                                                    href="#"
                                                >
                                                    <div
                                                        className="blog-entry-author-ava"
                                                    >
                                                        <img
                                                            src="../img/blog/meta/04.jpg"
                                                            alt="Olivia Reyes"
                                                        />
                                                    </div>
                                                    Olivia Reyes</a
                                                ><span
                                                    className="blog-entry-meta-divider"
                                                ></span>
                                                <div
                                                    className="fs-sm text-muted"
                                                >
                                                    in
                                                    <a
                                                        href="#"
                                                        className="blog-entry-meta-link"
                                                        >Lifestyle</a
                                                    >,
                                                    <a
                                                        href="#"
                                                        className="blog-entry-meta-link"
                                                        >Nutrition</a
                                                    >
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Featured post --&gt;
&lt;article&gt;
  &lt;a className=&quot;blog-entry-thumb mb-3&quot; href=&quot;#&quot;&gt;
    &lt;span className=&quot;blog-entry-meta-label fs-sm&quot;&gt;
      &lt;i className=&quot;ci-time&quot;&gt;&lt;/i&gt;
      Sep 10
    &lt;/span&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Featured post&quot;&gt;
  &lt;/a&gt;
  &lt;div className=&quot;d-flex justify-content-between mb-2 pt-1&quot;&gt;
    &lt;h2 className=&quot;h5 blog-entry-title mb-0&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Healthy Food - New Way of Living&lt;/a&gt;
    &lt;/h2&gt;
    &lt;a className=&quot;blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1&quot; href=&quot;#&quot;&gt;
      &lt;i className=&quot;ci-message&quot;&gt;&lt;/i&gt;
      13
    &lt;/a&gt;
  &lt;/div&gt;
  &lt;div className=&quot;d-flex align-items-center fs-sm&quot;&gt;
    &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;
      &lt;div className=&quot;blog-entry-author-ava&quot;&gt;
        &lt;img src=&quot;path-to-image&quot; alt=&quot;Olivia Reyes&quot;&gt;
      &lt;/div&gt;
      Olivia Reyes
    &lt;/a&gt;
    &lt;span className=&quot;blog-entry-meta-divider&quot;&gt;&lt;/span&gt;
    &lt;div className=&quot;fs-sm text-muted&quot;&gt;
      in &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Lifestyle&lt;/a&gt;, &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Nutrition&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Featured post
article
  a(href=&quot;#&quot;).blog-entry-thumb.mb-3
    span.blog-entry-meta-label.fs-sm
      i.ci-time
      | Sep 10
    img(src=&quot;path-to-image&quot;, alt=&quot;Featured post&quot;)
  .d-flex.justify-content-between.mb-2.pt-1
    h2.h5.blog-entry-title.mb-0
      a(href=&quot;#&quot;) Healthy Food - New Way of Living
    a(href=&quot;#&quot;).blog-entry-meta-link.fs-sm.text-nowrap.ms-3.pt-1
      i.ci-message
      | 13
  .d-flex.align-items-center.fs-sm
    a(href=&quot;#&quot;).blog-entry-meta-link
      .blog-entry-author-ava
        img(src=&quot;path-to-image&quot;, alt=&quot;Olivia Reyes&quot;)
      | Olivia Reyes
    span.blog-entry-meta-divider
    .fs-sm.text-muted
      | in &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Lifestyle&lt;/a&gt;, &lt;a href=&quot;#&quot; className=&quot;blog-entry-meta-link&quot;&gt;Nutrition&lt;/a&gt;
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Related posts carousel-->
                    <section
                        className="pb-5 mb-md-2"
                        id="related-posts-carousel"
                    >
                        <h2 className="h5 mb-3">Related posts carousel</h2>
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
                                        <div className="tns-carousel">
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"items": 2, "controls": false, "autoHeight": true, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 20},"900":{"items":3, "gutter": 20}, "1100":{"items":3, "gutter": 30}}}'
                                            >
                                                <!-- Article-->
                                                <article>
                                                    <a
                                                        className="blog-entry-thumb mb-3"
                                                        href="#"
                                                        ><img
                                                            className="rounded"
                                                            src="../img/blog/03.jpg"
                                                            alt="Post"
                                                    /></a>
                                                    <div
                                                        className="d-flex align-items-center fs-sm mb-2"
                                                    >
                                                        <a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >by Rafael
                                                            Marquez</a
                                                        ><span
                                                            className="blog-entry-meta-divider"
                                                        ></span
                                                        ><a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >Sep 16</a
                                                        >
                                                    </div>
                                                    <h3
                                                        className="h6 blog-entry-title"
                                                    >
                                                        <a href="#"
                                                            >We Launched Regular
                                                            Drone Delivery in
                                                            California. Watch
                                                            Demo Video</a
                                                        >
                                                    </h3>
                                                </article>
                                                <!-- Article-->
                                                <article>
                                                    <a
                                                        className="blog-entry-thumb mb-3"
                                                        href="#"
                                                        ><img
                                                            className="rounded"
                                                            src="../img/blog/04.jpg"
                                                            alt="Post"
                                                    /></a>
                                                    <div
                                                        className="d-flex align-items-center fs-sm mb-2"
                                                    >
                                                        <a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >by Emma Gallaher</a
                                                        ><span
                                                            className="blog-entry-meta-divider"
                                                        ></span
                                                        ><a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >Sep 5</a
                                                        >
                                                    </div>
                                                    <h3
                                                        className="h6 blog-entry-title"
                                                    >
                                                        <a href="#"
                                                            >Payments Made Easy.
                                                            How New Technology
                                                            will Affect
                                                            E-Commerce Industry
                                                            Worldwide?</a
                                                        >
                                                    </h3>
                                                </article>
                                                <!-- Article-->
                                                <article>
                                                    <a
                                                        className="blog-entry-thumb mb-3"
                                                        href="#"
                                                        ><img
                                                            className="rounded"
                                                            src="../img/blog/02.jpg"
                                                            alt="Post"
                                                    /></a>
                                                    <div
                                                        className="d-flex align-items-center fs-sm mb-2"
                                                    >
                                                        <a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >by Emma Gallaher</a
                                                        ><span
                                                            className="blog-entry-meta-divider"
                                                        ></span
                                                        ><a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >Aug 28</a
                                                        >
                                                    </div>
                                                    <h3
                                                        className="h6 blog-entry-title"
                                                    >
                                                        <a href="#"
                                                            >Shopping Tips.
                                                            Complete Guide of
                                                            Places Where to Buy
                                                            Cheap and Get
                                                            Cashback</a
                                                        >
                                                    </h3>
                                                </article>
                                                <!-- Article-->
                                                <article>
                                                    <a
                                                        className="blog-entry-thumb mb-3"
                                                        href="#"
                                                        ><img
                                                            className="rounded"
                                                            src="../img/blog/01.jpg"
                                                            alt="Post"
                                                    /></a>
                                                    <div
                                                        className="d-flex align-items-center fs-sm mb-2"
                                                    >
                                                        <a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >by Emma Gallaher</a
                                                        ><span
                                                            className="blog-entry-meta-divider"
                                                        ></span
                                                        ><a
                                                            className="blog-entry-meta-link"
                                                            href="#"
                                                            >Aug 28</a
                                                        >
                                                    </div>
                                                    <h3
                                                        className="h6 blog-entry-title"
                                                    >
                                                        <a href="#"
                                                            >Top 10 New Trends
                                                            in Suburban High
                                                            Fashion</a
                                                        >
                                                    </h3>
                                                </article>
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
                                        ><code className="lang-html">&lt;!-- Related posts carousel --&gt;
&lt;div className=&quot;tns-carousel&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;740&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;900&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 30}}}'&gt;

    &lt;!-- Article --&gt;
    &lt;article&gt;
      &lt;a className=&quot;blog-entry-thumb mb-3&quot; href=&quot;#&quot;&gt;
        &lt;img className=&quot;rounded&quot; src=&quot;path-to-image&quot; alt=&quot;Post&quot;&gt;
      &lt;/a&gt;
      &lt;div className=&quot;d-flex align-items-center fs-sm mb-2&quot;&gt;
        &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;by Rafael Marquez&lt;/a&gt;
        &lt;span className=&quot;blog-entry-meta-divider&quot;&gt;&lt;/span&gt;
        &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;Sep 16&lt;/a&gt;
      &lt;/div&gt;
      &lt;h3 className=&quot;h6 blog-entry-title&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;We Launched Regular Drone Delivery in California. Watch Demo Video&lt;/a&gt;
      &lt;/h3&gt;
    &lt;/article&gt;

    &lt;!-- Article --&gt;
    &lt;article&gt;
      &lt;a className=&quot;blog-entry-thumb mb-3&quot; href=&quot;#&quot;&gt;
        &lt;img className=&quot;rounded&quot; src=&quot;path-to-image&quot; alt=&quot;Post&quot;&gt;
      &lt;/a&gt;
      &lt;div className=&quot;d-flex align-items-center fs-sm mb-2&quot;&gt;
        &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;by Emma Gallaher&lt;/a&gt;
        &lt;span className=&quot;blog-entry-meta-divider&quot;&gt;&lt;/span&gt;
        &lt;a className=&quot;blog-entry-meta-link&quot; href=&quot;#&quot;&gt;Sep 5&lt;/a&gt;
      &lt;/div&gt;
      &lt;h3 className=&quot;h6 blog-entry-title&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;Payments Made Easy. How New Technology will Affect E-Commerce Industry Worldwide?&lt;/a&gt;
      &lt;/h3&gt;
    &lt;/article&gt;

    &lt;!-- Add as many articles as you need --&gt;
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
                                        ><code className="lang-pug">// Related posts carousel
.tns-carousel
  .tns-carousel-inner(data-carousel-options='{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;740&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;900&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 30}}}')

    // Article
    article
      a(href=&quot;#&quot;).blog-entry-thumb.mb-3
        img(src=&quot;path-to-image&quot;, alt=&quot;Post&quot;).rounded
      .d-flex.align-items-center.fs-sm.mb-2
        a.blog-entry-meta-link(href=&quot;#&quot;) by Rafael Marquez
        span.blog-entry-meta-divider
        a.blog-entry-meta-link(href=&quot;#&quot;) Sep 16
      h3.h6.blog-entry-title
        a(href=&quot;#&quot;) We Launched Regular Drone Delivery in California. Watch Demo Video

    // Article
    article
      a(href=&quot;#&quot;).blog-entry-thumb.mb-3
        img(src=&quot;path-to-image&quot;, alt=&quot;Post&quot;).rounded
      .d-flex.align-items-center.fs-sm.mb-2
        a.blog-entry-meta-link(href=&quot;#&quot;) by Emma Gallaher
        span.blog-entry-meta-divider
        a.blog-entry-meta-link(href=&quot;#&quot;) Sep 5
      h3.h6.blog-entry-title
        a(href=&quot;#&quot;) Payments Made Easy. How New Technology will Affect E-Commerce Industry Worldwide?

    // Add as many articles as you need</code></pre>
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
                                            href="#post-preview-list"
                                            >Post preview (List)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#post-preview-grid"
                                            >Post preview (Grid)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#featured-post"
                                            >Featured post</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#related-posts-carousel"
                                            >Related posts carousel</a
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
