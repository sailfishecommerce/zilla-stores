<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Shop components</title>
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
        <link
            rel="stylesheet"
            media="screen"
            href="../vendor/drift-zoom/dist/drift-basic.min.css"
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Shop components</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Components that are related to the e-commerce
                                module of the website.
                            </p>
                            <div className="ps-md-4 mb-3">
                                <span className="badge bg-info"
                                    >Cartzilla component</span
                                >
                            </div>
                        </div>
                    </div>
                    <!-- Product card (Grid)-->
                    <section className="pb-5 mb-md-2" id="product-card-grid">
                        <h2 className="h5 mb-3">Product card (Grid)</h2>
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
                                        <div className="pb-lg-5 mb-lg-5">
                                            <div
                                                className="card product-card mb-2 mb-lg-5"
                                                style="max-width: 18.5rem"
                                            >
                                                <span
                                                    className="badge bg-danger badge-shadow"
                                                    >Sale</span
                                                >
                                                <button
                                                    className="btn-wishlist btn-sm"
                                                    type="button"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="left"
                                                    title="Add to wishlist"
                                                >
                                                    <i
                                                        className="ci-heart"
                                                    ></i></button
                                                ><a
                                                    className="card-img-top d-block overflow-hidden"
                                                    href="#"
                                                    ><img
                                                        src="../img/shop/catalog/02.jpg"
                                                        alt="Product"
                                                /></a>
                                                <div className="card-body py-2">
                                                    <a
                                                        className="product-meta d-block fs-xs pb-1"
                                                        href="#"
                                                        >Women’s T-shirt</a
                                                    >
                                                    <h3
                                                        className="product-title fs-sm"
                                                    >
                                                        <a href="#"
                                                            >Cotton Lace
                                                            Blouse</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="d-flex justify-content-between"
                                                    >
                                                        <div
                                                            className="product-price"
                                                        >
                                                            <span
                                                                className="text-accent"
                                                                >$28.<small
                                                                    >50</small
                                                                ></span
                                                            >
                                                            <del
                                                                className="fs-sm text-muted"
                                                                >38.<small
                                                                    >50</small
                                                                ></del
                                                            >
                                                        </div>
                                                        <div
                                                            className="star-rating"
                                                        >
                                                            <i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="card-body card-body-hidden"
                                                >
                                                    <div
                                                        className="text-center pb-2"
                                                    >
                                                        <div
                                                            className="form-check form-option form-check-inline mb-2"
                                                        >
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="color1"
                                                                id="white"
                                                                checked
                                                            />
                                                            <label
                                                                className="form-option-label rounded-circle"
                                                                htmlFor="white"
                                                                ><span
                                                                    className="form-option-color rounded-circle"
                                                                    style="
                                                                        background-color: #eaeaeb;
                                                                    "
                                                                ></span
                                                            ></label>
                                                        </div>
                                                        <div
                                                            className="form-check form-option form-check-inline mb-2"
                                                        >
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="color1"
                                                                id="blue"
                                                            />
                                                            <label
                                                                className="form-option-label rounded-circle"
                                                                htmlFor="blue"
                                                                ><span
                                                                    className="form-option-color rounded-circle"
                                                                    style="
                                                                        background-color: #d1dceb;
                                                                    "
                                                                ></span
                                                            ></label>
                                                        </div>
                                                        <div
                                                            className="form-check form-option form-check-inline mb-2"
                                                        >
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="color1"
                                                                id="yellow"
                                                            />
                                                            <label
                                                                className="form-option-label rounded-circle"
                                                                htmlFor="yellow"
                                                                ><span
                                                                    className="form-option-color rounded-circle"
                                                                    style="
                                                                        background-color: #f4e6a2;
                                                                    "
                                                                ></span
                                                            ></label>
                                                        </div>
                                                        <div
                                                            className="form-check form-option form-check-inline mb-2"
                                                        >
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="color1"
                                                                id="pink"
                                                            />
                                                            <label
                                                                className="form-option-label rounded-circle"
                                                                htmlFor="pink"
                                                                ><span
                                                                    className="form-option-color rounded-circle"
                                                                    style="
                                                                        background-color: #f3dcff;
                                                                    "
                                                                ></span
                                                            ></label>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="d-flex mb-2"
                                                    >
                                                        <select
                                                            className="form-select form-select-sm me-2"
                                                        >
                                                            <option>XS</option>
                                                            <option>S</option>
                                                            <option>M</option>
                                                            <option>L</option>
                                                            <option>XL</option>
                                                        </select>
                                                        <button
                                                            className="btn btn-primary btn-sm"
                                                            type="button"
                                                        >
                                                            <i
                                                                className="ci-cart fs-sm me-1"
                                                            ></i
                                                            >Add to Cart
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="text-center"
                                                    >
                                                        <a
                                                            className="nav-link-style fs-ms"
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            ><i
                                                                className="ci-eye align-middle me-1"
                                                            ></i
                                                            >Quick view</a
                                                        >
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
                                        ><code className="lang-html">&lt;!-- Product card (Grid) --&gt;
&lt;div className=&quot;card product-card&quot;&gt;
  &lt;span className=&quot;badge bg-danger badge-shadow&quot;&gt;Sale&lt;/span&gt;
  &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
    &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;a className=&quot;card-img-top d-block overflow-hidden&quot; href=&quot;#&quot;&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
  &lt;/a&gt;
  &lt;div className=&quot;card-body py-2&quot;&gt;
    &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Women’s T-shirt&lt;/a&gt;
    &lt;h3 className=&quot;product-title fs-sm&quot;&gt;&lt;a href=&quot;#&quot;&gt;Cotton Lace Blouse&lt;/a&gt;&lt;/h3&gt;
    &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
      &lt;div className=&quot;product-price&quot;&gt;
        &lt;span className=&quot;text-accent&quot;&gt;$28.&lt;small&gt;50&lt;/small&gt;&lt;/span&gt;
        &lt;del className=&quot;fs-sm text-muted&quot;&gt;38.&lt;small&gt;50&lt;/small&gt;&lt;/del&gt;
      &lt;/div&gt;
      &lt;div className=&quot;star-rating&quot;&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div className=&quot;card-body card-body-hidden&quot;&gt;
    &lt;div className=&quot;text-center pb-2&quot;&gt;
      &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
        &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color1&quot; id=&quot;white&quot; checked&gt;
        &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;white&quot;&gt;
          &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #eaeaeb;&quot;&gt;&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
        &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color1&quot; id=&quot;blue&quot;&gt;
        &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;blue&quot;&gt;
          &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #d1dceb;&quot;&gt;&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
        &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color1&quot; id=&quot;yellow&quot;&gt;
        &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;yellow&quot;&gt;
          &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #f4e6a2;&quot;&gt;&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;
      &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
        &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;color1&quot; id=&quot;pink&quot;&gt;
        &lt;label className=&quot;form-option-label rounded-circle&quot; for=&quot;pink&quot;&gt;
          &lt;span className=&quot;form-option-color rounded-circle&quot; style=&quot;background-color: #f3dcff;&quot;&gt;&lt;/span&gt;
        &lt;/label&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;d-flex mb-2&quot;&gt;
      &lt;select className=&quot;form-select form-select-sm me-2&quot;&gt;
        &lt;option&gt;XS&lt;/option&gt;
        &lt;option&gt;S&lt;/option&gt;
        &lt;option&gt;M&lt;/option&gt;
        &lt;option&gt;L&lt;/option&gt;
        &lt;option&gt;XL&lt;/option&gt;
      &lt;/select&gt;
      &lt;button className=&quot;btn btn-primary btn-sm&quot; type=&quot;button&quot;&gt;
        &lt;i className=&quot;ci-cart fs-sm me-1&quot;&gt;&lt;/i&gt;
        Add to Cart
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;div className=&quot;text-center&quot;&gt;
      &lt;a className=&quot;nav-link-style fs-ms&quot; href=&quot;#&quot; data-bs-toggle=&quot;modal&quot;&gt;
        &lt;i className=&quot;ci-eye align-middle me-1&quot;&gt;&lt;/i&gt;
        Quick view
      &lt;/a&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Product card (Grid)
.card.product-card
  span.badge.bg-danger.badge-shadow Sale
  button(type=&quot;button&quot;, data-bs-toggle=&quot;tooltip&quot;, data-bs-placement=&quot;left&quot;, title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
    i.ci-heart
  a(href=&quot;#&quot;).card-img-top.d-block.overflow-hidden
    img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
  .card-body.py-2
    a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1
      | Women’s T-shirt
    h3.product-title.fs-sm
      a(href=&quot;#&quot;) Cotton Lace Blouse
    .d-flex.justify-content-between
      .product-price
        span.text-accent $28.&lt;small&gt;50&lt;/small&gt;
        del.fs-sm.text-muted 38.&lt;small&gt;50&lt;/small&gt;
      +star-rating(3)
  .card-body.card-body-hidden
    .text-center.pb-2
      .form-check.form-option.form-check-inline.mb-2
        input(type=&quot;radio&quot;, name=&quot;color1&quot;, id=&quot;white&quot;, checked).form-check-input
        label(for=&quot;white&quot;).form-option-label.rounded-circle
          span(style=&quot;background-color: #eaeaeb;&quot;).form-option-color.rounded-circle
      .form-check.form-option.form-check-inline.mb-2
        input(type=&quot;radio&quot;, name=&quot;color1&quot;, id=&quot;blue&quot;).form-check-input
        label(for=&quot;blue&quot;).form-option-label.rounded-circle
          span(style=&quot;background-color: #d1dceb;&quot;).form-option-color.rounded-circle
      .form-check.form-option.form-check-inline.mb-2
        input(type=&quot;radio&quot;, name=&quot;color1&quot;, id=&quot;yellow&quot;).form-check-input
        label(for=&quot;yellow&quot;).form-option-label.rounded-circle
          span(style=&quot;background-color: #f4e6a2;&quot;).form-option-color.rounded-circle
      .form-check.form-option.form-check-inline.mb-2
        input(type=&quot;radio&quot;, name=&quot;color1&quot;, id=&quot;pink&quot;).form-check-input
        label(for=&quot;pink&quot;).form-option-label.rounded-circle
          span(style=&quot;background-color: #f3dcff;&quot;).form-option-color.rounded-circle
    .d-flex.mb-2
      select.form-select.form-select-sm.me-2
        option XS
        option S
        option M
        option L
        option XL
      button(type=&quot;button&quot;).btn.btn-primary.btn-sm
        i.ci-cart.fs-sm.me-1
        | Add to Cart
    .text-center
      a(href=&quot;#&quot;, data-bs-toggle=&quot;modal&quot;).nav-link-style.fs-ms
        i.ci-eye.align-middle.me-1
        | Quick view
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Product card (List)-->
                    <section className="pb-5 mb-md-2" id="product-card-list">
                        <h2 className="h5 mb-3">Product card (List)</h2>
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
                                            className="card product-card product-list"
                                            style="max-width: 45rem"
                                        >
                                            <button
                                                className="btn-wishlist btn-sm"
                                                type="button"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="left"
                                                title="Add to wishlist"
                                            >
                                                <i className="ci-heart"></i>
                                            </button>
                                            <div
                                                className="d-sm-flex align-items-center"
                                            >
                                                <a
                                                    className="product-list-thumb"
                                                    href="#"
                                                    ><img
                                                        src="../img/shop/catalog/01.jpg"
                                                        alt="Product"
                                                /></a>
                                                <div className="card-body py-2">
                                                    <a
                                                        className="product-meta d-block fs-xs pb-1"
                                                        href="#"
                                                        >Sneakers &amp; Keds</a
                                                    >
                                                    <h3
                                                        className="product-title fs-base"
                                                    >
                                                        <a href="#"
                                                            >Women Colorblock
                                                            Sneakers</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="d-flex justify-content-between"
                                                    >
                                                        <div
                                                            className="product-price"
                                                        >
                                                            <span
                                                                className="text-accent"
                                                                >$154.<small
                                                                    >00</small
                                                                ></span
                                                            >
                                                        </div>
                                                        <div
                                                            className="star-rating"
                                                        >
                                                            <i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-half active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="card-body card-body-hidden"
                                                    >
                                                        <div className="pb-2">
                                                            <div
                                                                className="form-check form-option form-check-inline mb-2"
                                                            >
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="size1"
                                                                    id="s-75"
                                                                />
                                                                <label
                                                                    className="form-option-label"
                                                                    htmlFor="s-75"
                                                                    >7.5</label
                                                                >
                                                            </div>
                                                            <div
                                                                className="form-check form-option form-check-inline mb-2"
                                                            >
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="size1"
                                                                    id="s-80"
                                                                    checked
                                                                />
                                                                <label
                                                                    className="form-option-label"
                                                                    htmlFor="s-80"
                                                                    >8</label
                                                                >
                                                            </div>
                                                            <div
                                                                className="form-check form-option form-check-inline mb-2"
                                                            >
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="size1"
                                                                    id="s-85"
                                                                />
                                                                <label
                                                                    className="form-option-label"
                                                                    htmlFor="s-85"
                                                                    >8.5</label
                                                                >
                                                            </div>
                                                            <div
                                                                className="form-check form-option form-check-inline mb-2"
                                                            >
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="size1"
                                                                    id="s-90"
                                                                />
                                                                <label
                                                                    className="form-option-label"
                                                                    htmlFor="s-90"
                                                                    >9</label
                                                                >
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="btn btn-primary btn-sm mb-2"
                                                            type="button"
                                                        >
                                                            <i
                                                                className="ci-cart fs-sm me-1"
                                                            ></i
                                                            >Add to Cart
                                                        </button>
                                                        <div
                                                            className="text-start"
                                                        >
                                                            <a
                                                                className="nav-link-style fs-ms"
                                                                href="#"
                                                                ><i
                                                                    className="ci-eye align-middle me-1"
                                                                ></i
                                                                >Quick view</a
                                                            >
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
                                        ><code className="lang-html">&lt;!-- Product card (List) --&gt;
&lt;div className=&quot;card product-card product-list&quot;&gt;
  &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
    &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;div className=&quot;d-sm-flex align-items-center&quot;&gt;
    &lt;a className=&quot;product-list-thumb&quot; href=&quot;#&quot;&gt;
      &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
    &lt;/a&gt;
    &lt;div className=&quot;card-body py-2&quot;&gt;
      &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Sneakers &amp;amp; Keds&lt;/a&gt;
      &lt;h3 className=&quot;product-title fs-base&quot;&gt;
        &lt;a href=&quot;#&quot;&gt;Women Colorblock Sneakers&lt;/a&gt;
      &lt;/h3&gt;
      &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
        &lt;div className=&quot;product-price&quot;&gt;
          &lt;span className=&quot;text-accent&quot;&gt;$154.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div className=&quot;star-rating&quot;&gt;
          &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
          &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
          &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
          &lt;i className=&quot;star-rating-icon ci-star-half active&quot;&gt;&lt;/i&gt;
          &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div className=&quot;card-body card-body-hidden&quot;&gt;
        &lt;div className=&quot;pb-2&quot;&gt;
          &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;size1&quot; id=&quot;s-75&quot;&gt;
            &lt;label className=&quot;form-option-label&quot; for=&quot;s-75&quot;&gt;7.5&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;size1&quot; id=&quot;s-80&quot; checked&gt;
            &lt;label className=&quot;form-option-label&quot; for=&quot;s-80&quot;&gt;8&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;size1&quot; id=&quot;s-85&quot;&gt;
            &lt;label className=&quot;form-option-label&quot; for=&quot;s-85&quot;&gt;8.5&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className=&quot;form-check form-option form-check-inline mb-2&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;size1&quot; id=&quot;s-90&quot;&gt;
            &lt;label className=&quot;form-option-label&quot; for=&quot;s-90&quot;&gt;9&lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;button className=&quot;btn btn-primary btn-sm mb-2&quot; type=&quot;button&quot;&gt;
          &lt;i className=&quot;ci-cart fs-sm me-1&quot;&gt;&lt;/i&gt;
          Add to Cart
        &lt;/button&gt;
        &lt;div className=&quot;text-start&quot;&gt;
          &lt;a className=&quot;nav-link-style fs-ms&quot; href=&quot;#&quot;&gt;
            &lt;i className=&quot;ci-eye align-middle me-1&quot;&gt;&lt;/i&gt;
            Quick view
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Product card (List)
.card.product-card.product-list
  button(type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
    i.ci-heart
  .d-sm-flex.align-items-center
    a(href=&quot;#&quot;).product-list-thumb
      img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
    .card-body.py-2
      a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1
        | Sneakers &amp; Keds
      h3.product-title.fs-base
        a(href=&quot;#&quot;) Women Colorblock Sneakers
      .d-flex.justify-content-between
        .product-price
          span.text-accent $154.&lt;small&gt;00&lt;/small&gt;
        +star-rating(3.5)
      .card-body.card-body-hidden
        .pb-2
          .form-check.form-option.form-check-inline.mb-2
            input(type=&quot;radio&quot;, name=&quot;size1&quot;, id=&quot;s-75&quot;).form-check-input
            label.form-option-label(for=&quot;s-75&quot;) 7.5
          .form-check.form-option.form-check-inline.mb-2
            input(type=&quot;radio&quot;, name=&quot;size1&quot;, id=&quot;s-80&quot; checked).form-check-input
            label.form-option-label(for=&quot;s-80&quot;) 8
          .form-check.form-option.form-check-inline.mb-2
            input(type=&quot;radio&quot;, name=&quot;size1&quot;, id=&quot;s-85&quot;).form-check-input
            label.form-option-label(for=&quot;s-85&quot;) 8.5
          .form-check.form-option.form-check-inline.mb-2
            input(type=&quot;radio&quot;, name=&quot;size1&quot;, id=&quot;s-90&quot;).form-check-input
            label.form-option-label(for=&quot;s-90&quot;) 9
        button(type=&quot;button&quot;).btn.btn-primary.btn-sm.mb-2
          i.ci-cart.fs-sm.me-1
          | Add to Cart
        .text-start
          a(href=&quot;#&quot;).nav-link-style.fs-ms
            i.ci-eye.align-middle.me-1
            | Quick view
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Product card alt (Downloadable)-->
                    <section className="pb-5 mb-md-2" id="product-card-alt">
                        <h2 className="h5 mb-3">
                            Product card alt (Downloadable)
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
                                            className="py-2"
                                            style="max-width: 23rem"
                                        >
                                            <div
                                                className="card product-card-alt"
                                            >
                                                <div className="product-thumb">
                                                    <button
                                                        className="btn-wishlist btn-sm"
                                                        type="button"
                                                    >
                                                        <i
                                                            className="ci-heart"
                                                        ></i>
                                                    </button>
                                                    <div
                                                        className="product-card-actions"
                                                    >
                                                        <a
                                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                                            href="#"
                                                            ><i
                                                                className="ci-eye"
                                                            ></i
                                                        ></a>
                                                        <button
                                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                                            type="button"
                                                        >
                                                            <i
                                                                className="ci-cart"
                                                            ></i>
                                                        </button>
                                                    </div>
                                                    <a
                                                        className="product-thumb-overlay"
                                                        href="#"
                                                    ></a
                                                    ><img
                                                        src="../img/marketplace/products/02.jpg"
                                                        alt="Product"
                                                    />
                                                </div>
                                                <div className="card-body">
                                                    <div
                                                        className="d-flex flex-wrap justify-content-between align-items-start pb-2"
                                                    >
                                                        <div
                                                            className="text-muted fs-xs me-1"
                                                        >
                                                            by
                                                            <a
                                                                className="product-meta fw-medium"
                                                                href="#"
                                                                >Createx Std. </a
                                                            >in
                                                            <a
                                                                className="product-meta fw-medium"
                                                                href="#"
                                                                >Graphics</a
                                                            >
                                                        </div>
                                                        <div
                                                            className="star-rating"
                                                        >
                                                            <i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star-filled active"
                                                            ></i
                                                            ><i
                                                                className="star-rating-icon ci-star"
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <h3
                                                        className="product-title fs-sm mb-2"
                                                    >
                                                        <a href="#"
                                                            >Floating Phone and
                                                            Tablet Mockup
                                                            (PSD)</a
                                                        >
                                                    </h3>
                                                    <div
                                                        className="d-flex flex-wrap justify-content-between align-items-center"
                                                    >
                                                        <div
                                                            className="fs-sm me-2"
                                                        >
                                                            <i
                                                                className="ci-download text-muted me-1"
                                                            ></i
                                                            >109<span
                                                                className="fs-xs ms-1"
                                                                >Sales</span
                                                            >
                                                        </div>
                                                        <div
                                                            className="bg-faded-accent text-accent rounded-1 py-1 px-2"
                                                        >
                                                            $15.<small
                                                                >00</small
                                                            >
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
                                        ><code className="lang-html">&lt;!-- Product card alt (Downloadable) --&gt;
&lt;div className=&quot;card product-card-alt&quot;&gt;
  &lt;div className=&quot;product-thumb&quot;&gt;
    &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot;&gt;
      &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
    &lt;/button&gt;
    &lt;div className=&quot;product-card-actions&quot;&gt;
      &lt;a className=&quot;btn btn-light btn-icon btn-shadow fs-base mx-2&quot; href=&quot;#&quot;&gt;
        &lt;i className=&quot;ci-eye&quot;&gt;&lt;/i&gt;
      &lt;/a&gt;
      &lt;button className=&quot;btn btn-light btn-icon btn-shadow fs-base mx-2&quot; type=&quot;button&quot;&gt;
        &lt;i className=&quot;ci-cart&quot;&gt;&lt;/i&gt;
      &lt;/button&gt;
    &lt;/div&gt;
    &lt;a className=&quot;product-thumb-overlay&quot; href=&quot;#&quot;&gt;&lt;/a&gt;
    &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
  &lt;/div&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;div className=&quot;d-flex flex-wrap justify-content-between align-items-start pb-2&quot;&gt;
      &lt;div className=&quot;text-muted fs-xs me-1&quot;&gt;
        by &lt;a className=&quot;product-meta fw-medium&quot; href=&quot;#&quot;&gt;Createx Std. &lt;/a&gt;
        in &lt;a className=&quot;product-meta fw-medium&quot; href=&quot;#&quot;&gt;Graphics&lt;/a&gt;
      &lt;/div&gt;
      &lt;div className=&quot;star-rating&quot;&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
        &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;h3 className=&quot;product-title fs-sm mb-2&quot;&gt;
      &lt;a href=&quot;#&quot;&gt;Floating Phone and Tablet Mockup (PSD)&lt;/a&gt;
    &lt;/h3&gt;
    &lt;div className=&quot;d-flex flex-wrap justify-content-between align-items-center&quot;&gt;
      &lt;div className=&quot;fs-sm me-2&quot;&gt;
        &lt;i className=&quot;ci-download text-muted me-1&quot;&gt;&lt;/i&gt;
        109
        &lt;span className=&quot;fs-xs ms-1&quot;&gt;Sales&lt;/span&gt;
      &lt;/div&gt;
      &lt;div className=&quot;bg-faded-accent text-accent rounded-1 py-1 px-2&quot;&gt;$15.&lt;small&gt;00&lt;/small&gt;&lt;/div&gt;
    &lt;/div&gt;
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
                                        ><code className="lang-pug">// Product card alt (Downloadable)
.card.product-card-alt
  .product-thumb
    button(type=&quot;button&quot;).btn-wishlist.btn-sm
      i.ci-heart
    .product-card-actions
      a(href=&quot;#&quot;).btn.btn-light.btn-icon.btn-shadow.fs-base.mx-2
        i.ci-eye
      button(type=&quot;button&quot;).btn.btn-light.btn-icon.btn-shadow.fs-base.mx-2
        i.ci-cart
    a(href=&quot;#&quot;).product-thumb-overlay
    img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
  .card-body
    .d-flex.flex-wrap.justify-content-between.align-items-start.pb-2
      .text-muted.fs-xs.me-1
        | by
        a.product-meta.fw-medium(href=&quot;#&quot;) Createx Std.
        | in
        a.product-meta.fw-medium(href=&quot;#&quot;) Graphics
      +star-rating(4)
    h3.product-title.fs-sm.mb-2
      a(href=&quot;#&quot;) Floating Phone and Tablet Mockup (PSD)
    .d-flex.flex-wrap.justify-content-between.align-items-center
      .fs-sm.me-2
        i.ci-download.text-muted.me-1
        | 109
        span.fs-xs.ms-1 Sales
      .bg-faded-accent.text-accent.rounded-1.py-1.px-2
        | $15.
        small 00
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Category card-->
                    <section className="pb-5 mb-md-2" id="category-card">
                        <h2 className="h5 mb-3">Category card</h2>
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
                                            className="card border-0"
                                            style="max-width: 23rem"
                                        >
                                            <a
                                                className="d-block overflow-hidden rounded-3"
                                                href="#"
                                                ><img
                                                    className="d-block w-100"
                                                    src="../img/shop/categories/01.jpg"
                                                    alt="Clothing"
                                            /></a>
                                            <div className="card-body">
                                                <h2 className="h5">Clothing</h2>
                                                <ul
                                                    className="list-unstyled fs-sm mb-0"
                                                >
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >Blazers &amp;
                                                            Suits</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >235</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >Blouse</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >410</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >Cardigans &amp;
                                                            Jumpers</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >107</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >Dresses</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >93</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >Hoodie &amp;
                                                            Sweatshirts</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >93</span
                                                        >
                                                    </li>
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >Sportswear</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >65</span
                                                        >
                                                    </li>
                                                    <li>...</li>
                                                    <li>
                                                        <hr />
                                                    </li>
                                                    <li
                                                        className="d-flex align-items-center justify-content-between"
                                                    >
                                                        <a
                                                            className="nav-link-style"
                                                            href="#"
                                                            ><i
                                                                className="ci-arrow-right-circle me-2"
                                                            ></i
                                                            >View all</a
                                                        ><span
                                                            className="fs-ms text-muted"
                                                            >2,548</span
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
                                        ><code className="lang-html">&lt;!-- Category card --&gt;
&lt;div className=&quot;card border-0&quot;&gt;
  &lt;a className=&quot;d-block overflow-hidden rounded-3&quot; href=&quot;#&quot;&gt;
    &lt;img className=&quot;d-block w-100&quot; src=&quot;path-to-image&quot; alt=&quot;Clothing&quot;&gt;
  &lt;/a&gt;
  &lt;div className=&quot;card-body&quot;&gt;
    &lt;h2 className=&quot;h5&quot;&gt;Clothing&lt;/h2&gt;
    &lt;ul className=&quot;list-unstyled fs-sm mb-0&quot;&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          Blazers &amp;amp; Suits
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;235&lt;/span&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          Blouse
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;410&lt;/span&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          Cardigans &amp;amp; Jumpers
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;107&lt;/span&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          Dresses
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;93&lt;/span&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          Hoodie &amp;amp; Sweatshirts
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;93&lt;/span&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          Sportswear
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;65&lt;/span&gt;
      &lt;/li&gt;
      &lt;li&gt;...&lt;/li&gt;
      &lt;li&gt;
        &lt;hr&gt;
      &lt;/li&gt;
      &lt;li className=&quot;d-flex align-items-center justify-content-between&quot;&gt;
        &lt;a className=&quot;nav-link-style&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-arrow-right-circle me-2&quot;&gt;&lt;/i&gt;
          View all
        &lt;/a&gt;
        &lt;span className=&quot;fs-ms text-muted&quot;&gt;2,548&lt;/span&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
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
                                        ><code className="lang-pug">// Category card
.card.border-0
  a(href=&quot;#&quot;).d-block.overflow-hidden.rounded-3
    img(src=&quot;path-to-image&quot;, alt=&quot;Clothing&quot;).d-block.w-100
  .card-body
    h2.h5 Clothing
    ul.list-unstyled.fs-sm.mb-0
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | Blazers &amp;amp; Suits
        span.fs-ms.text-muted 235
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | Blouse
        span.fs-ms.text-muted 410
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | Cardigans &amp;amp; Jumpers
        span.fs-ms.text-muted 107
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | Dresses
        span.fs-ms.text-muted 93
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | Hoodie &amp;amp; Sweatshirts
        span.fs-ms.text-muted 93
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | Sportswear
        span.fs-ms.text-muted 65
      li ...
      li: hr
      li.d-flex.align-items-center.justify-content-between
        a(href=&quot;#&quot;).nav-link-style
          i.ci-arrow-right-circle.me-2
          | View all
        span.fs-ms.text-muted 2,548
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Product gallery-->
                    <section className="pb-5 mb-md-2" id="product-gallery">
                        <h2 className="h5 mb-3">Product gallery</h2>
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
                                            className="product-gallery"
                                            style="max-width: 36rem"
                                        >
                                            <div
                                                className="product-gallery-preview order-sm-2"
                                            >
                                                <div
                                                    className="product-gallery-preview-item active"
                                                    id="first"
                                                >
                                                    <img
                                                        className="image-zoom"
                                                        src="../img/shop/single/gallery/01.jpg"
                                                        data-zoom="../img/shop/single/gallery/01.jpg"
                                                        alt="Product image"
                                                    />
                                                    <div
                                                        className="image-zoom-pane"
                                                    ></div>
                                                </div>
                                                <div
                                                    className="product-gallery-preview-item"
                                                    id="second"
                                                >
                                                    <img
                                                        className="image-zoom"
                                                        src="../img/shop/single/gallery/02.jpg"
                                                        data-zoom="../img/shop/single/gallery/02.jpg"
                                                        alt="Product image"
                                                    />
                                                    <div
                                                        className="image-zoom-pane"
                                                    ></div>
                                                </div>
                                                <div
                                                    className="product-gallery-preview-item"
                                                    id="third"
                                                >
                                                    <img
                                                        className="image-zoom"
                                                        src="../img/shop/single/gallery/03.jpg"
                                                        data-zoom="../img/shop/single/gallery/03.jpg"
                                                        alt="Product image"
                                                    />
                                                    <div
                                                        className="image-zoom-pane"
                                                    ></div>
                                                </div>
                                                <div
                                                    className="product-gallery-preview-item"
                                                    id="fourth"
                                                >
                                                    <img
                                                        className="image-zoom"
                                                        src="../img/shop/single/gallery/04.jpg"
                                                        data-zoom="../img/shop/single/gallery/04.jpg"
                                                        alt="Product image"
                                                    />
                                                    <div
                                                        className="image-zoom-pane"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div
                                                className="product-gallery-thumblist order-sm-1"
                                            >
                                                <a
                                                    className="product-gallery-thumblist-item active"
                                                    href="#first"
                                                    ><img
                                                        src="../img/shop/single/gallery/th01.jpg"
                                                        alt="Product thumb" /></a
                                                ><a
                                                    className="product-gallery-thumblist-item"
                                                    href="#second"
                                                    ><img
                                                        src="../img/shop/single/gallery/th02.jpg"
                                                        alt="Product thumb" /></a
                                                ><a
                                                    className="product-gallery-thumblist-item"
                                                    href="#third"
                                                    ><img
                                                        src="../img/shop/single/gallery/th03.jpg"
                                                        alt="Product thumb" /></a
                                                ><a
                                                    className="product-gallery-thumblist-item"
                                                    href="#fourth"
                                                    ><img
                                                        src="../img/shop/single/gallery/th04.jpg"
                                                        alt="Product thumb" /></a
                                                ><a
                                                    className="product-gallery-thumblist-item video-item"
                                                    href="https://www.youtube.com/watch?v=1vrXpMLLK14"
                                                >
                                                    <div
                                                        className="product-gallery-thumblist-item-text"
                                                    >
                                                        <i
                                                            className="ci-video"
                                                        ></i
                                                        >Video
                                                    </div></a
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
                                        ><code className="lang-html">&lt;!-- Product gallery --&gt;
&lt;div className=&quot;product-gallery&quot;&gt;

  &lt;!-- Preview images with zoom effect --&gt;
  &lt;div className=&quot;product-gallery-preview order-sm-2&quot;&gt;
    &lt;div className=&quot;product-gallery-preview-item active&quot; id=&quot;first&quot;&gt;
      &lt;img className=&quot;image-zoom&quot; src=&quot;path-to-preview-image&quot; data-zoom=&quot;path-to-large-image&quot; alt=&quot;Product image&quot;&gt;
      &lt;div className=&quot;image-zoom-pane&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;product-gallery-preview-item&quot; id=&quot;second&quot;&gt;
      &lt;img className=&quot;image-zoom&quot; src=&quot;path-to-preview-image&quot; data-zoom=&quot;path-to-large-image&quot; alt=&quot;Product image&quot;&gt;
      &lt;div className=&quot;image-zoom-pane&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;product-gallery-preview-item&quot; id=&quot;third&quot;&gt;
      &lt;img className=&quot;image-zoom&quot; src=&quot;path-to-preview-image&quot; data-zoom=&quot;path-to-large-image&quot; alt=&quot;Product image&quot;&gt;
      &lt;div className=&quot;image-zoom-pane&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;product-gallery-preview-item&quot; id=&quot;fourth&quot;&gt;
      &lt;img className=&quot;image-zoom&quot; src=&quot;path-to-preview-image&quot; data-zoom=&quot;path-to-large-image&quot; alt=&quot;Product image&quot;&gt;
      &lt;div className=&quot;image-zoom-pane&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Thumbnails --&gt;
  &lt;div className=&quot;product-gallery-thumblist order-sm-1&quot;&gt;
    &lt;a className=&quot;product-gallery-thumblist-item active&quot; href=&quot;#first&quot;&gt;
      &lt;img src=&quot;path-to-thumbnail&quot; alt=&quot;Product thumb&quot;&gt;
    &lt;/a&gt;
    &lt;a className=&quot;product-gallery-thumblist-item&quot; href=&quot;#second&quot;&gt;
      &lt;img src=&quot;path-to-thumbnail&quot; alt=&quot;Product thumb&quot;&gt;
    &lt;/a&gt;
    &lt;a className=&quot;product-gallery-thumblist-item&quot; href=&quot;#third&quot;&gt;
      &lt;img src=&quot;path-to-thumbnail&quot; alt=&quot;Product thumb&quot;&gt;
    &lt;/a&gt;
    &lt;a className=&quot;product-gallery-thumblist-item&quot; href=&quot;#fourth&quot;&gt;
      &lt;img src=&quot;path-to-thumbnail&quot; alt=&quot;Product thumb&quot;&gt;
    &lt;/a&gt;
    &lt;a className=&quot;product-gallery-thumblist-item video-item&quot; href=&quot;link-to-youtube/vimeo-video&quot;&gt;
      &lt;div className=&quot;product-gallery-thumblist-item-text&quot;&gt;&lt;i className=&quot;ci-video&quot;&gt;&lt;/i&gt;Video&lt;/div&gt;
    &lt;/a&gt;
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
                                        ><code className="lang-pug">// Product gallery
.product-gallery

  // Preview images with zoom effect
  .product-gallery-preview.order-sm-2
    #first.product-gallery-preview-item.active
      img(src=&quot;path-to-preview-image&quot;, data-zoom=&quot;path-to-large-image&quot;, alt=&quot;Product image&quot;).image-zoom
      .image-zoom-pane
    #second.product-gallery-preview-item
      img(src=&quot;path-to-preview-image&quot;, data-zoom=&quot;path-to-large-image&quot;, alt=&quot;Product image&quot;).image-zoom
      .image-zoom-pane
    #third.product-gallery-preview-item
      img(src=&quot;path-to-preview-image&quot;, data-zoom=&quot;path-to-large-image&quot;, alt=&quot;Product image&quot;).image-zoom
      .image-zoom-pane
    #fourth.product-gallery-preview-item
      img(src=&quot;path-to-preview-image&quot;, data-zoom=&quot;path-to-large-image&quot;, alt=&quot;Product image&quot;).image-zoom
      .image-zoom-pane

  // Thumbnails
  .product-gallery-thumblist.order-sm-1
    a(href=&quot;#first&quot;).product-gallery-thumblist-item.active
      img(src=&quot;path-to-thumbnail&quot;, alt=&quot;Product thumb&quot;)
    a(href=&quot;#second&quot;).product-gallery-thumblist-item
      img(src=&quot;path-to-thumbnail&quot;, alt=&quot;Product thumb&quot;)
    a(href=&quot;#third&quot;).product-gallery-thumblist-item
      img(src=&quot;path-to-thumbnail&quot;, alt=&quot;Product thumb&quot;)
    a(href=&quot;#fourth&quot;).product-gallery-thumblist-item
      img(src=&quot;path-to-thumbnail&quot;, alt=&quot;Product thumb&quot;)
    a(href=&quot;link-to-youtube/vimeo-video&quot;).product-gallery-thumblist-item.video-item
      .product-gallery-thumblist-item-text
        i.ci-video
        | Video
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Featured category carousel-->
                    <section
                        className="pb-5 mb-md-2"
                        id="featured-category-carousel"
                    >
                        <h2 className="h5 mb-3">Featured category carousel</h2>
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
                                        <div style="max-width: 65rem">
                                            <div className="row">
                                                <!-- Banner with controls-->
                                                <div className="col-md-6">
                                                    <div
                                                        className="d-flex flex-column h-100 overflow-hidden rounded-3"
                                                        style="
                                                            background-color: #f6f8fb;
                                                        "
                                                    >
                                                        <div
                                                            className="d-flex justify-content-between px-grid-gutter py-grid-gutter"
                                                        >
                                                            <div>
                                                                <h3
                                                                    className="mb-1"
                                                                >
                                                                    For Women
                                                                </h3>
                                                                <a
                                                                    className="fs-md"
                                                                    href="#"
                                                                    >Shop for
                                                                    women<i
                                                                        className="ci-arrow-right fs-xs align-middle ms-1"
                                                                    ></i
                                                                ></a>
                                                            </div>
                                                            <div
                                                                className="tns-carousel-controls"
                                                                id="for-women"
                                                            >
                                                                <button
                                                                    type="button"
                                                                >
                                                                    <i
                                                                        className="ci-arrow-left"
                                                                    ></i>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                >
                                                                    <i
                                                                        className="ci-arrow-right"
                                                                    ></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <a
                                                            className="d-none d-md-block mt-auto"
                                                            href="#"
                                                            ><img
                                                                className="d-block w-100"
                                                                src="../img/home/categories/cat-lg02.jpg"
                                                                alt="For Women"
                                                        /></a>
                                                    </div>
                                                </div>
                                                <!-- Product grid (carousel)-->
                                                <div
                                                    className="col-md-6 pt-4 pt-md-0"
                                                >
                                                    <div
                                                        className="tns-carousel"
                                                    >
                                                        <div
                                                            className="tns-carousel-inner"
                                                            data-carousel-options='{"nav": false, "controlsContainer": "#for-women"}'
                                                        >
                                                            <!-- Carousel item-->
                                                            <div>
                                                                <div
                                                                    className="row mx-n2"
                                                                >
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/09.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Cosmetics</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Metallic
                                                                                        Lipstick
                                                                                        (Crimson)</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$12.<small
                                                                                                >99</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/26.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Shoes</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Textile
                                                                                        Platform
                                                                                        Sneakers</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$59.<small
                                                                                                >99</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <span
                                                                                className="badge bg-danger badge-shadow"
                                                                                >Sale</span
                                                                            >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/27.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Accessories</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Polarized
                                                                                        Sunglasses</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$17.<small
                                                                                                >99</small
                                                                                            ></span
                                                                                        >
                                                                                        <del
                                                                                            className="fs-sm text-muted"
                                                                                            >28.<small
                                                                                                >99</small
                                                                                            ></del
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/28.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Shoes</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Leather
                                                                                        Platform
                                                                                        Sandals</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$79.<small
                                                                                                >99</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Carousel item-->
                                                            <div>
                                                                <div
                                                                    className="row mx-n2"
                                                                >
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/01.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Shoes</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Colorblock
                                                                                        Sneakers</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$154.<small
                                                                                                >99</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/02.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Blouse</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Cotton
                                                                                        Lace
                                                                                        Blouse</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$37.<small
                                                                                                >50</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/03.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Shorts</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Mom
                                                                                        High
                                                                                        Waist
                                                                                        Shorts</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$39.<small
                                                                                                >50</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-6 px-0 px-sm-2 mb-sm-4"
                                                                    >
                                                                        <div
                                                                            className="card product-card card-static"
                                                                        >
                                                                            <button
                                                                                className="btn-wishlist btn-sm"
                                                                                type="button"
                                                                                data-bs-toggle="tooltip"
                                                                                data-bs-placement="left"
                                                                                title="Add to wishlist"
                                                                            >
                                                                                <i
                                                                                    className="ci-heart"
                                                                                ></i></button
                                                                            ><a
                                                                                className="card-img-top d-block overflow-hidden"
                                                                                href="#"
                                                                                ><img
                                                                                    src="../img/shop/catalog/04.jpg"
                                                                                    alt="Product"
                                                                            /></a>
                                                                            <div
                                                                                className="card-body py-2"
                                                                            >
                                                                                <a
                                                                                    className="product-meta d-block fs-xs pb-1"
                                                                                    href="#"
                                                                                    >Sportswear</a
                                                                                >
                                                                                <h3
                                                                                    className="product-title fs-sm"
                                                                                >
                                                                                    <a
                                                                                        href="#"
                                                                                        >Sports
                                                                                        Jacket</a
                                                                                    >
                                                                                </h3>
                                                                                <div
                                                                                    className="d-flex justify-content-between"
                                                                                >
                                                                                    <div
                                                                                        className="product-price"
                                                                                    >
                                                                                        <span
                                                                                            className="text-accent"
                                                                                            >$68.<small
                                                                                                >40</small
                                                                                            ></span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        className="star-rating"
                                                                                    >
                                                                                        <i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star-filled active"
                                                                                        ></i
                                                                                        ><i
                                                                                            className="star-rating-icon ci-star"
                                                                                        ></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                                        ><code className="lang-html">&lt;!-- Featured category carousel --&gt;
&lt;div className=&quot;row&quot;&gt;

  &lt;!-- Banner with controls --&gt;
  &lt;div className=&quot;col-md-5&quot;&gt;
    &lt;div className=&quot;d-flex flex-column h-100 overflow-hidden rounded-3&quot; style=&quot;background-color: #f6f8fb;&quot;&gt;
      &lt;div className=&quot;d-flex justify-content-between px-grid-gutter py-grid-gutter&quot;&gt;
        &lt;div&gt;
          &lt;h3 className=&quot;mb-1&quot;&gt;For Women&lt;/h3&gt;
          &lt;a className=&quot;fs-md&quot; href=&quot;#&quot;&gt;
            Shop for women
            &lt;i className=&quot;ci-arrow-right fs-xs align-middle ms-1&quot;&gt;&lt;/i&gt;
          &lt;/a&gt;
        &lt;/div&gt;
        &lt;div className=&quot;tns-carousel-controls&quot; id=&quot;for-women&quot;&gt;
          &lt;button type=&quot;button&quot;&gt;&lt;i className=&quot;ci-arrow-left&quot;&gt;&lt;/i&gt;&lt;/button&gt;
          &lt;button type=&quot;button&quot;&gt;&lt;i className=&quot;ci-arrow-right&quot;&gt;&lt;/i&gt;&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;a className=&quot;d-none d-md-block mt-auto&quot; href=&quot;#&quot;&gt;
        &lt;img className=&quot;d-block w-100&quot; src=&quot;path-to-category-image&quot; alt=&quot;For Women&quot;&gt;
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- Product grid (carousel) --&gt;
  &lt;div className=&quot;col-md-7 pt-4 pt-md-0&quot;&gt;
    &lt;div className=&quot;tns-carousel&quot;&gt;
      &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#for-women&quot;}'&gt;

        &lt;!-- Carousel slide: 6 items --&gt;
        &lt;div&gt;
          &lt;div className=&quot;row mx-n2&quot;&gt;

            &lt;!-- Item --&gt;
            &lt;div className=&quot;col-lg-4 col-6 px-0 px-sm-2 mb-sm-4&quot;&gt;
              &lt;div className=&quot;card product-card card-static&quot;&gt;
                &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
                  &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
                &lt;/button&gt;
                &lt;a className=&quot;card-img-top d-block overflow-hidden&quot; href=&quot;#&quot;&gt;
                  &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
                &lt;/a&gt;
                &lt;div className=&quot;card-body py-2&quot;&gt;
                  &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Cosmetics&lt;/a&gt;
                  &lt;h3 className=&quot;product-title fs-sm&quot;&gt;
                    &lt;a href=&quot;#&quot;&gt;Metallic Lipstick (Crimson)&lt;/a&gt;
                  &lt;/h3&gt;
                  &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
                    &lt;div className=&quot;product-price&quot;&gt;
                      &lt;span className=&quot;text-accent&quot;&gt;$12.&lt;small&gt;99&lt;/small&gt;&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div className=&quot;star-rating&quot;&gt;
                      &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                      &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                      &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                      &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                      &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            ...
            &lt;!-- Item --&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        ...
        &lt;!-- Carousel slide: 6 items --&gt;
        &lt;!-- Add another slide - set of 6 items --&gt;
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
                                        ><code className="lang-pug">// Featured category carousel
.row

  // Banner with controls
  .col-md-5
    .d-flex.flex-column.h-100.overflow-hidden.rounded-3(style=&quot;background-color: #f6f8fb;&quot;)
      .d-flex.justify-content-between.px-grid-gutter.py-grid-gutter
        div
          h3.mb-1 For Women
          a(href=&quot;#&quot;).fs-md
            | Shop for women
            i.ci-arrow-right.fs-xs.align-middle.ms-1
        #for-women.tns-carousel-controls
          button(type=&quot;button&quot;)
            i.ci-arrow-left
          button(type=&quot;button&quot;)
            i.ci-arrow-right
      a(href=&quot;#&quot;).d-none.d-md-block.mt-auto
        img(src=&quot;path-to-category-image&quot;, alt=&quot;For Women&quot;).d-block.w-100

  // Product grid (carousel)
  .col-md-7.pt-4.pt-md-0
    .tns-carousel
      .tns-carousel-inner(data-carousel-options='{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#for-women&quot;}')

        // Carousel slide: 6 items
        div
          .row.mx-n2
            .col-6.px-0.px-sm-2.mb-sm-4
              .card.product-card.card-static
                button(type=&quot;button&quot;, data-bs-toggle=&quot;tooltip&quot;, data-bs-placement=&quot;left&quot;, title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
                  i.ci-heart
                a(href=&quot;#&quot;).card-img-top.d-block.overflow-hidden
                  img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
                .card-body.py-2
                  a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1 Cosmetics
                  h3.product-title.fs-sm
                    a(href=&quot;#&quot;) Metallic Lipstick (Crimson)
                  .d-flex.justify-content-between
                    .product-price
                      span.text-accent $12.&lt;small&gt;99&lt;/small&gt;
                    +star-rating(4)

        // Carousel slide: 6 items
        // Add another slide - set of 6 items
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Related products carousel-->
                    <section
                        className="pb-5 mb-md-2"
                        id="related-products-carousel"
                    >
                        <h2 className="h5 mb-3">Related products carousel</h2>
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
                                            className="tns-carousel tns-controls-static tns-controls-outside"
                                        >
                                            <div
                                                className="tns-carousel-inner"
                                                data-carousel-options='{"items": 2, "controls": true, "nav": false, "autoHeight": true, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 18},"1380":{"items":3, "gutter": 20}, "1700":{"items":4, "gutter": 30}}}'
                                            >
                                                <!-- Item-->
                                                <div>
                                                    <div
                                                        className="card product-card card-static"
                                                    >
                                                        <button
                                                            className="btn-wishlist btn-sm"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to wishlist"
                                                        >
                                                            <i
                                                                className="ci-heart"
                                                            ></i></button
                                                        ><a
                                                            className="card-img-top d-block overflow-hidden"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/catalog/14.jpg"
                                                                alt="Product"
                                                        /></a>
                                                        <div
                                                            className="card-body py-2"
                                                        >
                                                            <a
                                                                className="product-meta d-block fs-xs pb-1"
                                                                href="#"
                                                                >Men’s Jeans</a
                                                            >
                                                            <h3
                                                                className="product-title fs-sm"
                                                            >
                                                                <a href="#"
                                                                    >Slim Taper
                                                                    Fit Jeans</a
                                                                >
                                                            </h3>
                                                            <div
                                                                className="d-flex justify-content-between"
                                                            >
                                                                <div
                                                                    className="product-price"
                                                                >
                                                                    <span
                                                                        className="text-accent"
                                                                        >$58.<small
                                                                            >99</small
                                                                        ></span
                                                                    >
                                                                </div>
                                                                <div
                                                                    className="star-rating"
                                                                >
                                                                    <i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star"
                                                                    ></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item-->
                                                <div>
                                                    <div
                                                        className="card product-card card-static"
                                                    >
                                                        <span
                                                            className="badge bg-danger badge-shadow"
                                                            >Sale</span
                                                        >
                                                        <button
                                                            className="btn-wishlist btn-sm"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to wishlist"
                                                        >
                                                            <i
                                                                className="ci-heart"
                                                            ></i></button
                                                        ><a
                                                            className="card-img-top d-block overflow-hidden"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/catalog/17.jpg"
                                                                alt="Product"
                                                        /></a>
                                                        <div
                                                            className="card-body py-2"
                                                        >
                                                            <a
                                                                className="product-meta d-block fs-xs pb-1"
                                                                href="#"
                                                                >Men’s
                                                                T-shirts</a
                                                            >
                                                            <h3
                                                                className="product-title fs-sm"
                                                            >
                                                                <a href="#"
                                                                    >Cotton
                                                                    T-shirt
                                                                    Regular
                                                                    Fit</a
                                                                >
                                                            </h3>
                                                            <div
                                                                className="d-flex justify-content-between"
                                                            >
                                                                <div
                                                                    className="product-price"
                                                                >
                                                                    <span
                                                                        className="text-accent"
                                                                        >$9.<small
                                                                            >50</small
                                                                        ></span
                                                                    >
                                                                    <del
                                                                        className="fs-sm text-muted"
                                                                        >$11.<small
                                                                            >50</small
                                                                        ></del
                                                                    >
                                                                </div>
                                                                <div
                                                                    className="star-rating"
                                                                >
                                                                    <i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star"
                                                                    ></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item-->
                                                <div>
                                                    <div
                                                        className="card product-card card-static"
                                                    >
                                                        <button
                                                            className="btn-wishlist btn-sm"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to wishlist"
                                                        >
                                                            <i
                                                                className="ci-heart"
                                                            ></i></button
                                                        ><a
                                                            className="card-img-top d-block overflow-hidden"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/catalog/18.jpg"
                                                                alt="Product"
                                                        /></a>
                                                        <div
                                                            className="card-body py-2"
                                                        >
                                                            <a
                                                                className="product-meta d-block fs-xs pb-1"
                                                                href="#"
                                                                >Men’s Shoes</a
                                                            >
                                                            <h3
                                                                className="product-title fs-sm"
                                                            >
                                                                <a href="#"
                                                                    >Men’s
                                                                    Leather
                                                                    Keds</a
                                                                >
                                                            </h3>
                                                            <div
                                                                className="d-flex justify-content-between"
                                                            >
                                                                <div
                                                                    className="product-price text-accent"
                                                                >
                                                                    $64.<small
                                                                        >99</small
                                                                    >
                                                                </div>
                                                                <div
                                                                    className="star-rating"
                                                                >
                                                                    <i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item-->
                                                <div>
                                                    <div
                                                        className="card product-card card-static"
                                                    >
                                                        <button
                                                            className="btn-wishlist btn-sm"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to wishlist"
                                                        >
                                                            <i
                                                                className="ci-heart"
                                                            ></i></button
                                                        ><a
                                                            className="card-img-top d-block overflow-hidden"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/catalog/19.jpg"
                                                                alt="Product"
                                                        /></a>
                                                        <div
                                                            className="card-body py-2"
                                                        >
                                                            <a
                                                                className="product-meta d-block fs-xs pb-1"
                                                                href="#"
                                                                >Men’s
                                                                T-shirts</a
                                                            >
                                                            <h3
                                                                className="product-title fs-sm"
                                                            >
                                                                <a href="#"
                                                                    >3 Color
                                                                    Collection
                                                                    of
                                                                    T-shirts</a
                                                                >
                                                            </h3>
                                                            <div
                                                                className="d-flex justify-content-between"
                                                            >
                                                                <div
                                                                    className="product-price text-accent"
                                                                >
                                                                    $27.<small
                                                                        >99</small
                                                                    >
                                                                </div>
                                                                <div
                                                                    className="star-rating"
                                                                >
                                                                    <i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star"
                                                                    ></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- Item-->
                                                <div>
                                                    <div
                                                        className="card product-card card-static"
                                                    >
                                                        <button
                                                            className="btn-wishlist btn-sm"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="left"
                                                            title="Add to wishlist"
                                                        >
                                                            <i
                                                                className="ci-heart"
                                                            ></i></button
                                                        ><a
                                                            className="card-img-top d-block overflow-hidden"
                                                            href="#"
                                                            ><img
                                                                src="../img/shop/catalog/13.jpg"
                                                                alt="Product"
                                                        /></a>
                                                        <div
                                                            className="card-body py-2"
                                                        >
                                                            <a
                                                                className="product-meta d-block fs-xs pb-1"
                                                                href="#"
                                                                >Men’s
                                                                T-shirts</a
                                                            >
                                                            <h3
                                                                className="product-title fs-sm"
                                                            >
                                                                <a href="#"
                                                                    >Cotton Polo
                                                                    Regular
                                                                    Fit</a
                                                                >
                                                            </h3>
                                                            <div
                                                                className="d-flex justify-content-between"
                                                            >
                                                                <div
                                                                    className="product-price text-accent"
                                                                >
                                                                    $13.<small
                                                                        >50</small
                                                                    >
                                                                </div>
                                                                <div
                                                                    className="star-rating"
                                                                >
                                                                    <i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star-filled active"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star"
                                                                    ></i
                                                                    ><i
                                                                        className="star-rating-icon ci-star"
                                                                    ></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                        ><code className="lang-html">&lt;!-- Related products carousel --&gt;
&lt;div className=&quot;tns-carousel tns-controls-static tns-controls-outside&quot;&gt;
  &lt;div className=&quot;tns-carousel-inner&quot; data-carousel-options='{&quot;items&quot;: 2, &quot;controls&quot;: true, &quot;nav&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 18},&quot;768&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:4, &quot;gutter&quot;: 30}}}'&gt;

    &lt;!-- Item --&gt;
    &lt;div&gt;
      &lt;div className=&quot;card product-card card-static&quot;&gt;
        &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
          &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;a className=&quot;card-img-top d-block overflow-hidden&quot; href=&quot;#&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
        &lt;/a&gt;
        &lt;div className=&quot;card-body py-2&quot;&gt;
          &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Men’s Jeans&lt;/a&gt;
          &lt;h3 className=&quot;product-title fs-sm&quot;&gt;&lt;a href=&quot;#&quot;&gt;Slim Taper Fit Jeans&lt;/a&gt;&lt;/h3&gt;
          &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
            &lt;div className=&quot;product-price&quot;&gt;
              &lt;span className=&quot;text-accent&quot;&gt;$58.&lt;small&gt;99&lt;/small&gt;&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className=&quot;star-rating&quot;&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Item --&gt;
    &lt;div&gt;
      &lt;div className=&quot;card product-card card-static&quot;&gt;
        &lt;span className=&quot;badge bg-danger badge-shadow&quot;&gt;Sale&lt;/span&gt;
        &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
          &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
        &lt;/button&gt;
        &lt;a className=&quot;card-img-top d-block overflow-hidden&quot; href=&quot;#&quot;&gt;
          &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
        &lt;/a&gt;
        &lt;div className=&quot;card-body py-2&quot;&gt;
          &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Men’s T-shirts&lt;/a&gt;
          &lt;h3 className=&quot;product-title fs-sm&quot;&gt;&lt;a href=&quot;#&quot;&gt;Cotton T-shirt Regular Fit&lt;/a&gt;&lt;/h3&gt;
          &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
            &lt;div className=&quot;product-price&quot;&gt;
              &lt;span className=&quot;text-accent&quot;&gt;$9.&lt;small&gt;50&lt;/small&gt;&lt;/span&gt;
              &lt;del className=&quot;fs-sm text-muted&quot;&gt;$11.&lt;small&gt;50&lt;/small&gt;&lt;/del&gt;
            &lt;/div&gt;
            &lt;div className=&quot;star-rating&quot;&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
              &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Add as many items as you need --&gt;
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
                                        ><code className="lang-pug">// Related products carousel
.tns-carousel.tns-controls-static.tns-controls-outside
  .tns-carousel-inner(data-carousel-options='{&quot;items&quot;: 2, &quot;controls&quot;: true, &quot;nav&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 18},&quot;768&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:4, &quot;gutter&quot;: 30}}}')

    // Item
    div
      .card.product-card.card-static
        button(type=&quot;button&quot;, data-bs-toggle=&quot;tooltip&quot;, data-bs-placement=&quot;left&quot;, title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
          i.ci-heart
        a(href=&quot;#&quot;).card-img-top.d-block.overflow-hidden
          img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
        .card-body.py-2
          a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1
            | Men’s Jeans
          h3.product-title.fs-sm
            a(href=&quot;#&quot;) Slim Taper Fit Jeans
          .d-flex.justify-content-between
            .product-price
              span.text-accent $58.<small>99</small>
            +star-rating(4)

    // Item
    div
      .card.product-card.card-static
        span.badge.bg-danger.badge-shadow Sale
        button(type=&quot;button&quot;, data-bs-toggle=&quot;tooltip&quot;, data-bs-placement=&quot;left&quot;, title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
          i.ci-heart
        a(href=&quot;#&quot;).card-img-top.d-block.overflow-hidden
          img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
        .card-body.py-2
          a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1
            | Men’s T-shirts
          h3.product-title.fs-sm
            a(href=&quot;#&quot;) Cotton T-shirt Regular Fit
          .d-flex.justify-content-between
            .product-price
              span.text-accent $9.<small>50</small>
              del.fs-sm.text-muted $11.<small>50</small>
            +star-rating(3)

    // Add as many items as you need
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Product bundle-->
                    <section className="pb-5 mb-md-2" id="product-bundle">
                        <h2 className="h5 mb-3">Product bundle</h2>
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
                                        <div className="border rounded-3">
                                            <div className="row g-0">
                                                <div
                                                    className="col-xxl-9 col-lg-8 col-md-8"
                                                >
                                                    <div
                                                        className="p-4 pt-5 p-lg-5"
                                                    >
                                                        <h3
                                                            className="text-center text-sm-start"
                                                        >
                                                            Frequently Bought
                                                            Together
                                                        </h3>
                                                        <div
                                                            className="d-sm-flex align-items-center pt-4 mb-4"
                                                        >
                                                            <!-- Product-->
                                                            <div
                                                                className="card product-card card-static mx-auto"
                                                                style="
                                                                    max-width: 18rem;
                                                                "
                                                            >
                                                                <button
                                                                    className="btn-wishlist btn-sm"
                                                                    type="button"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Add to wishlist"
                                                                >
                                                                    <i
                                                                        className="ci-heart"
                                                                    ></i></button
                                                                ><a
                                                                    className="card-img-top d-block overflow-hidden"
                                                                    href="#"
                                                                    ><img
                                                                        src="../img/shop/catalog/01.jpg"
                                                                        alt="Product"
                                                                /></a>
                                                                <div
                                                                    className="card-body py-2"
                                                                >
                                                                    <a
                                                                        className="product-meta d-block fs-xs pb-1"
                                                                        href="#"
                                                                        >Sneakers
                                                                        &amp;
                                                                        Keds</a
                                                                    >
                                                                    <h3
                                                                        className="product-title fs-sm"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            >Women
                                                                            Colorblock
                                                                            Sneakers</a
                                                                        >
                                                                    </h3>
                                                                    <div
                                                                        className="d-flex justify-content-between"
                                                                    >
                                                                        <div
                                                                            className="product-price"
                                                                        >
                                                                            <span
                                                                                className="text-accent"
                                                                                >$154.<small
                                                                                    >00</small
                                                                                ></span
                                                                            >
                                                                        </div>
                                                                        <div
                                                                            className="star-rating"
                                                                        >
                                                                            <i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star-half active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star"
                                                                            ></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="h2 fw-light py-2 py-sm-0 px-sm-2 text-center"
                                                            >
                                                                +
                                                            </div>
                                                            <!-- Product-->
                                                            <div
                                                                className="card product-card card-static mx-auto"
                                                                style="
                                                                    max-width: 18rem;
                                                                "
                                                            >
                                                                <button
                                                                    className="btn-wishlist btn-sm"
                                                                    type="button"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="left"
                                                                    title="Add to wishlist"
                                                                >
                                                                    <i
                                                                        className="ci-heart"
                                                                    ></i></button
                                                                ><a
                                                                    className="card-img-top d-block overflow-hidden"
                                                                    href="#"
                                                                    ><img
                                                                        src="../img/shop/catalog/03.jpg"
                                                                        alt="Product"
                                                                /></a>
                                                                <div
                                                                    className="card-body py-2"
                                                                >
                                                                    <a
                                                                        className="product-meta d-block fs-xs pb-1"
                                                                        href="#"
                                                                        >Women's
                                                                        Shorts</a
                                                                    >
                                                                    <h3
                                                                        className="product-title fs-sm"
                                                                    >
                                                                        <a
                                                                            href="#"
                                                                            >Mom
                                                                            High
                                                                            Waist
                                                                            Shorts</a
                                                                        >
                                                                    </h3>
                                                                    <div
                                                                        className="d-flex justify-content-between"
                                                                    >
                                                                        <div
                                                                            className="product-price"
                                                                        >
                                                                            <span
                                                                                className="text-accent"
                                                                                >$39.<small
                                                                                    >00</small
                                                                                ></span
                                                                            >
                                                                        </div>
                                                                        <div
                                                                            className="star-rating"
                                                                        >
                                                                            <i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star-filled active"
                                                                            ></i
                                                                            ><i
                                                                                className="star-rating-icon ci-star"
                                                                            ></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Checkboxes-->
                                                        <div
                                                            className="border-top pt-4"
                                                        >
                                                            <div
                                                                className="form-check mb-2"
                                                            >
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="check-1"
                                                                    checked
                                                                    disabled
                                                                />
                                                                <label
                                                                    className="form-check-label opacity-100"
                                                                    htmlFor="check-1"
                                                                    ><strong
                                                                        >This
                                                                        product:</strong
                                                                    >
                                                                    Women
                                                                    Colorblock
                                                                    Sneakers
                                                                    <strong
                                                                        className="text-accent"
                                                                        >$154.<small
                                                                            >00</small
                                                                        ></strong
                                                                    ></label
                                                                >
                                                            </div>
                                                            <div
                                                                className="form-check"
                                                            >
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    id="check-2"
                                                                    checked
                                                                />
                                                                <label
                                                                    className="form-check-label opacity-100"
                                                                    htmlFor="check-2"
                                                                    >Mom High
                                                                    Waist Shorts
                                                                    <strong
                                                                        className="text-accent"
                                                                        >$39.<small
                                                                            >00</small
                                                                        ></strong
                                                                    ></label
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-xxl-3 col-lg-4 col-md-4 d-flex flex-column justify-content-center border-start"
                                                >
                                                    <div
                                                        className="p-4 pb-5 py-lg-5 px-xxl-5 text-center"
                                                    >
                                                        <div
                                                            className="h3 text-accent"
                                                        >
                                                            $193.<small
                                                                >00</small
                                                            >
                                                        </div>
                                                        <p
                                                            className="text-muted"
                                                        >
                                                            For 2 item(s)
                                                        </p>
                                                        <a
                                                            className="btn btn-primary btn-shadow"
                                                            href="#"
                                                            ><i
                                                                className="ci-cart fs-lg me-2"
                                                            ></i
                                                            >Add to Cart</a
                                                        >
                                                    </div>
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
                                        ><code className="lang-html">&lt;!-- Product bundle section --&gt;
&lt;div className=&quot;border rounded-3&quot;&gt;
  &lt;div className=&quot;row g-0&quot;&gt;

    &lt;!-- Products --&gt;
    &lt;div className=&quot;col-xxl-9 col-lg-8 col-md-8&quot;&gt;
      &lt;div className=&quot;p-4 pt-5 p-lg-5&quot;&gt;
        &lt;h3 className=&quot;text-center text-sm-start&quot;&gt;Frequently Bought Together&lt;/h3&gt;
        &lt;div className=&quot;d-sm-flex align-items-center pt-4 mb-4&quot;&gt;

          &lt;!-- Product --&gt;
          &lt;div className=&quot;card product-card card-static mx-auto&quot; style=&quot;max-width: 18rem;&quot;&gt;
            &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
              &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
            &lt;/button&gt;
            &lt;a className=&quot;card-img-top d-block overflow-hidden&quot; href=&quot;#&quot;&gt;
              &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
            &lt;/a&gt;
            &lt;div className=&quot;card-body py-2&quot;&gt;
              &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Sneakers &amp; Keds&lt;/a&gt;
              &lt;h3 className=&quot;product-title fs-sm&quot;&gt;
                &lt;a href=&quot;#&quot;&gt;Women Colorblock Sneakers&lt;/a&gt;
              &lt;/h3&gt;
              &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
                &lt;div className=&quot;product-price&quot;&gt;
                  &lt;span className=&quot;text-accent&quot;&gt;$154.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;div className=&quot;star-rating&quot;&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-half active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;div className=&quot;h2 fw-light py-2 py-sm-0 px-sm-2 text-center&quot;&gt;+&lt;/div&gt;

          &lt;!-- Product --&gt;
          &lt;div className=&quot;card product-card card-static mx-auto&quot; style=&quot;max-width: 18rem;&quot;&gt;
            &lt;button className=&quot;btn-wishlist btn-sm&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;left&quot; title=&quot;Add to wishlist&quot;&gt;
              &lt;i className=&quot;ci-heart&quot;&gt;&lt;/i&gt;
            &lt;/button&gt;
            &lt;a className=&quot;card-img-top d-block overflow-hidden&quot; href=&quot;#&quot;&gt;
              &lt;img src=&quot;path-to-image&quot; alt=&quot;Product&quot;&gt;
            &lt;/a&gt;
            &lt;div className=&quot;card-body py-2&quot;&gt;
              &lt;a className=&quot;product-meta d-block fs-xs pb-1&quot; href=&quot;#&quot;&gt;Women's Shorts&lt;/a&gt;
              &lt;h3 className=&quot;product-title fs-sm&quot;&gt;
                &lt;a href=&quot;#&quot;&gt;Mom High Waist Shorts&lt;/a&gt;
              &lt;/h3&gt;
              &lt;div className=&quot;d-flex justify-content-between&quot;&gt;
                &lt;div className=&quot;product-price&quot;&gt;
                  &lt;span className=&quot;text-accent&quot;&gt;$39.&lt;small&gt;00&lt;/small&gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;div className=&quot;star-rating&quot;&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star-filled active&quot;&gt;&lt;/i&gt;
                  &lt;i className=&quot;star-rating-icon ci-star&quot;&gt;&lt;/i&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- Checkboxes --&gt;
        &lt;div className=&quot;border-top pt-4&quot;&gt;
          &lt;div className=&quot;form-check mb-2&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;check-1&quot; checked disabled&gt;
            &lt;label className=&quot;form-check-label opacity-100&quot; for=&quot;check-1&quot;&gt;&lt;strong&gt;This product:&lt;/strong&gt; Women Colorblock Sneakers &lt;strong className='text-accent'&gt;$154.&lt;small&gt;00&lt;/small&gt;&lt;/strong&gt;&lt;/label&gt;
          &lt;/div&gt;
          &lt;div className=&quot;form-check&quot;&gt;
            &lt;input className=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;check-2&quot; checked&gt;
            &lt;label className=&quot;form-check-label opacity-100&quot; for=&quot;check-2&quot;&gt;Mom High Waist Shorts &lt;strong className='text-accent'&gt;$39.&lt;small&gt;00&lt;/small&gt;&lt;/strong&gt;&lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Totals --&gt;
    &lt;div className=&quot;col-xxl-3 col-lg-4 col-md-4 d-flex flex-column justify-content-center border-start&quot;&gt;
      &lt;div className=&quot;p-4 pb-5 py-lg-5 px-xxl-5 text-center&quot;&gt;
        &lt;div className=&quot;h3 text-accent&quot;&gt;$193.&lt;small&gt;00&lt;/small&gt;&lt;/div&gt;
        &lt;p className=&quot;text-muted&quot;&gt;For 2 item(s)&lt;/p&gt;
        &lt;a className=&quot;btn btn-primary btn-shadow&quot; href=&quot;#&quot;&gt;
          &lt;i className=&quot;ci-cart fs-lg me-2&quot;&gt;&lt;/i&gt;Add to Cart
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug8"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Product bundle section
.border.rounded-3
  .row.g-0

    // Products
    .col-xxl-9.col-lg-8.col-md-8
      .p-4.pt-5.p-lg-5
        h3.text-center.text-sm-start Frequently Bought Together
        .d-sm-flex.align-items-center.pt-4.mb-4

          // Product
          .card.product-card.card-static.mx-auto(style=&quot;max-width: 18rem;&quot;)
            button(type=&quot;button&quot;, data-bs-toggle=&quot;tooltip&quot;, data-bs-placement=&quot;left&quot;, title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
              i.ci-heart
            a(href=&quot;#&quot;).card-img-top.d-block.overflow-hidden
              img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
            .card-body.py-2
              a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1
                | Sneakers &amp; Keds
              h3.product-title.fs-sm
                a(href=&quot;#&quot;) Women Colorblock Sneakers
              .d-flex.justify-content-between
                div.product-price
                  span.text-accent $154.&lt;small&gt;00&lt;/small&gt;
                +star-rating(3.5)

          .h2.fw-light.py-2.py-sm-0.px-sm-2.text-center +

          // Product
          .card.product-card.card-static.mx-auto(style=&quot;max-width: 18rem;&quot;)
            button(type=&quot;button&quot;, data-bs-toggle=&quot;tooltip&quot;, data-bs-placement=&quot;left&quot;, title=&quot;Add to wishlist&quot;).btn-wishlist.btn-sm
              i.ci-heart
            a(href=&quot;#&quot;).card-img-top.d-block.overflow-hidden
              img(src=&quot;path-to-image&quot;, alt=&quot;Product&quot;)
            .card-body.py-2
              a(href=&quot;#&quot;).product-meta.d-block.fs-xs.pb-1 Women's Shorts
              h3.product-title.fs-sm
                a(href=&quot;#&quot;) Mom High Waist Shorts
              .d-flex.justify-content-between
                div.product-price
                  span.text-accent $39.&lt;small&gt;00&lt;/small&gt;
                +star-rating(4)

        // Checkboxes
        .border-top.pt-4
          .form-check.mb-2
            input(type=&quot;checkbox&quot;, id=&quot;check-1&quot;, checked, disabled).form-check-input
            label(for=&quot;check-1&quot;).form-check-label.opacity-100
              | &lt;strong&gt;This product:&lt;/strong&gt; Women Colorblock Sneakers &lt;strong className=&quot;text-accent&quot;&gt;$154.&lt;small&gt;00&lt;/small&gt;&lt;/strong&gt;
          .form-check
            input(type=&quot;checkbox&quot;, id=&quot;check-2&quot;, checked).form-check-input
            label(for=&quot;check-2&quot;).form-check-label.opacity-100
              | Mom High Waist Shorts &lt;strong className=&quot;text-accent&quot;&gt;$39.&lt;small&gt;00&lt;/small&gt;&lt;/strong&gt;

    // Totals
    .col-xxl-3.col-lg-4.col-md-4.d-flex.flex-column.justify-content-center.border-start
      .p-4.pb-5.py-lg-5.px-xxl-5.text-center
        .h3.text-accent $193.&lt;small&gt;00&lt;/small&gt;
        p.text-muted For 2 item(s)
        a(href=&quot;#&quot;).btn.btn-primary.btn-shadow
          i.ci-cart.fs-lg.me-2
          | Add to Cart
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Interactive credit card corm-->
                    <section className="pb-5 mb-md-2" id="interactive-cc-form">
                        <h2 className="h5 mb-3">
                            Interactive credit card form
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
                                        <div style="max-width: 40rem">
                                            <div
                                                className="credit-card-wrapper"
                                            ></div>
                                            <form
                                                className="credit-card-form row g-3"
                                            >
                                                <div className="col-sm-6">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="number"
                                                        placeholder="Card Number"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Full Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="expiry"
                                                        placeholder="MM/YY"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="cvc"
                                                        placeholder="CVC"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <button
                                                        className="btn btn-primary d-block w-100"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Interactive credit card form --&gt;
&lt;div className=&quot;credit-card-wrapper&quot;&gt;&lt;/div&gt;
&lt;form className=&quot;credit-card-form row g-3&quot;&gt;
  &lt;div className=&quot;col-sm-6&quot;&gt;
    &lt;input type=&quot;text&quot; className=&quot;form-control&quot; name=&quot;number&quot; placeholder=&quot;Card Number&quot; required&gt;
  &lt;/div&gt;
  &lt;div className=&quot;col-sm-6&quot;&gt;
    &lt;input type=&quot;text&quot; className=&quot;form-control&quot; name=&quot;name&quot; placeholder=&quot;Full Name&quot; required&gt;
  &lt;/div&gt;
  &lt;div className=&quot;col-sm-3&quot;&gt;
    &lt;input type=&quot;text&quot; className=&quot;form-control&quot; name=&quot;expiry&quot; placeholder=&quot;MM/YY&quot; required&gt;
  &lt;/div&gt;
  &lt;div className=&quot;col-sm-3&quot;&gt;
    &lt;input type=&quot;text&quot; className=&quot;form-control&quot; name=&quot;cvc&quot; placeholder=&quot;CVC&quot; required&gt;
  &lt;/div&gt;
  &lt;div className=&quot;col-sm-6&quot;&gt;
    &lt;button type=&quot;submit&quot; className=&quot;btn btn-primary d-block w-100&quot;&gt;Submit&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;
</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug9"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Interactive credit card form
.credit-card-wrapper
form.credit-card-form.row.g-3
  .col-sm-6
    input(type=&quot;text&quot;, name=&quot;number&quot;, placeholder=&quot;Card Number&quot;, required).form-control
  .col-sm-6
    input(type=&quot;text&quot;, name=&quot;name&quot;, placeholder=&quot;Full Name&quot;, required).form-control
  .col-sm-3
    input(type=&quot;text&quot;, name=&quot;expiry&quot;, placeholder=&quot;MM/YY&quot;, required).form-control
  .col-sm-3
    input(type=&quot;text&quot;, name=&quot;cvc&quot;, placeholder=&quot;CVC&quot;, required).form-control
  .col-sm-6
    button(type=&quot;submit&quot;).btn.btn-primary.d-block.w-100
      | Submit</code></pre>
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
                                            href="#product-card-grid"
                                            >Product card (Grid)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#product-card-list"
                                            >Product card (List)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#product-card-alt"
                                            >Product card alt (Downloadable)</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#category-card"
                                            >Category card</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#product-gallery"
                                            >Product gallery</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#featured-category-carousel"
                                            >Featured category carousel</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#related-products-carousel"
                                            >Related products carousel</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#product-bundle"
                                            >Product bundle</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#interactive-cc-form"
                                            >Interactive Credit Card Form</a
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
        <script src="../vendor/drift-zoom/dist/Drift.min.js"></script>
        <script src="../vendor/lightgallery.js/dist/js/lightgallery.min.js"></script>
        <script src="../vendor/lg-video.js/dist/lg-video.min.js"></script>
        <script src="../vendor/card/dist/card.js"></script>
        <!-- Main theme script-->
        <script src="../js/theme.min.js"></script>
    </body>
</html>
