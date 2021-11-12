/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BaseLayout from "../layout/BaseLayout";

export default function index() {
    return (
        <BaseLayout title=" Homepage">
            <>
                <section
                    className="bg-accent bg-position-center bg-size-cover py-3 py-sm-5"
                    style={{
                        backgroundImage: "url(img/intro/intro-hero.jpg)",
                    }}
                >
                    <div className="container py-5">
                        <div className="row pt-md-5 pb-lg-5 justify-content-center">
                            <div className="col-xl-7 col-lg-8 col-md-10 text-center py-xl-3">
                                <h1 className="text-light pb-sm-3">
                                    <span className="fw-light">
                                        Multipurpose
                                    </span>{" "}
                                    Bootstrap 5<br />
                                    E-Commerce{" "}
                                    <span className="fw-light">Template</span>
                                </h1>
                                <span className="d-inline-block h5 text-light fw-light mx-2 opacity-70">
                                    Single / Multi-vendor
                                </span>
                                <span className="d-inline-block h3 text-light fw-light mx-2">
                                    Marketplace
                                </span>
                                <span className="d-inline-block h4 text-light fw-light mx-2 opacity-70">
                                    Fashion
                                </span>
                                <span className="d-inline-block h3 text-light fw-light mx-2 opacity-90">
                                    Electronics
                                </span>
                                <span className="d-inline-block h6 text-light fw-light mx-2 opacity-60">
                                    Cart
                                </span>
                                <span className="d-inline-block h3 text-light fw-light mx-2">
                                    Grocery store
                                </span>
                                <span className="d-inline-block h5 text-light fw-light mx-2 opacity-80">
                                    Checkout
                                </span>
                                <span className="d-inline-block h4 text-light fw-light mx-2">
                                    Food Delivery
                                </span>
                                <span className="d-inline-block fs-lg text-light fw-light mx-2 opacity-60">
                                    Account / Dasboard
                                </span>
                                <div className="py-4 py-sm-5">
                                    <a
                                        className="btn btn-primary btn-lg"
                                        href="#demos"
                                        data-scroll
                                    >
                                        View Demos
                                        <i className="ci-arrow-down-circle ms-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Demos section*/}
                <section className="container pt-5 pb-3 pb-lg-5" id="demos">
                    <div className="text-center pt-md-4 pb-2">
                        <h2>
                            <span className="fw-light">Explore</span> Bandicoot
                            Demos
                        </h2>
                        <p className="text-muted">
                            Explore the collection of carefully built homepages.
                            More to come soon!
                        </p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link
                                            href="/home-fashion-store-v1"
                                            passHref
                                        >
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>
                                        <a
                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link
                                        href="/home-fashion-store-v1"
                                        passHref
                                    >
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/01.jpg"
                                        alt="Fashion Store v.1"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link
                                            href="/home-fashion-store-v1"
                                            passHref
                                        >
                                            <a>Fashion Store v.1</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link
                                            href="/home-electronics-store"
                                            passHref
                                        >
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>
                                        <a
                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link
                                        href="/home-electronics-store"
                                        passHref
                                    >
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/03.jpg"
                                        alt="Electronics Store"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link
                                            href="/home-electronics-store"
                                            passHref
                                        >
                                            <a>Electronics Store</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link
                                            href="/home-food-delivery"
                                            passHref
                                        >
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>
                                        <a
                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link href="/home-food-delivery" passHref>
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/07.jpg"
                                        alt="Food Delivery Service"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link
                                            href="/home-food-delivery"
                                            passHref
                                        >
                                            <a>Food Delivery Service</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link href="/home-marketplace" passHref>
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>
                                        <a
                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link href="/home-marketplace" passHref>
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/04.jpg"
                                        alt="Multi-vendor Marketplace"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link href="/home-marketplace" passHref>
                                            <a>Multi-vendor Marketplace</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link
                                            href="/home-grocery-store"
                                            passHref
                                        >
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>
                                        <a
                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link href="/home-grocery-store" passHref>
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/06.jpg"
                                        alt="Grocery Store"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link
                                            href="/home-grocery-store"
                                            passHref
                                        >
                                            <a>Grocery Store</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link
                                            href="/home-fashion-store-v2"
                                            passHref
                                        >
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>

                                        <a
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link
                                        href="/home-fashion-store-v2"
                                        passHref
                                    >
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/02.jpg"
                                        alt="Fashion Store v.2"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link
                                            href="/home-fashion-store-v2"
                                            passHref
                                        >
                                            <a>Fashion Store v.2</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb border">
                                    <div className="product-card-actions">
                                        <Link
                                            href="/home-single-store"
                                            passHref
                                        >
                                            <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                                                <i className="ci-eye"></i>
                                            </a>
                                        </Link>
                                        <a
                                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                                            href="#https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <i className="ci-cart"></i>
                                        </a>
                                    </div>
                                    <Link href="/home-single-store" passHref>
                                        <a className="product-thumb-overlay"></a>
                                    </Link>
                                    <img
                                        src="/img/home/preview/05.jpg"
                                        alt="Single Product / Brand Store"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="product-title fs-lg pt-2">
                                        <Link
                                            href="/home-single-store"
                                            passHref
                                        >
                                            <a>Single Product / Brand Store</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                            <div className="card product-card-alt">
                                <div className="product-thumb">
                                    <img
                                        src="/img/home/preview/coming.png"
                                        alt="Coming Soon"
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="fs-lg pt-2">Coming Soon</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-dark py-5">
                    <div className="container py-3 py-lg-4">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-5 pb-4 pb-lg-0">
                                <h2 className="text-light">
                                    <span className="fw-light">Complete</span>{" "}
                                    E-Commerce Front-End{" "}
                                    <span className="fw-light">Solution</span>
                                </h2>
                                <p className="text-light opacity-70">
                                    All you need for your next e-commerce
                                    project
                                </p>
                                <ul className="text-light list-unstyled pt-3">
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Shop Grid / List Layout Options
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Multiple Product Page Variations
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Complete Order Workflow: Cart + Checkout
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Shop Customer Account Pages
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Vendor Dashboard for Multi-vendor
                                        Marketplaces
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Ready for any Content: Fashion,
                                        Electronics, Digital (Downloadable)
                                        Products, etc.
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Blog Pages: Blog Layouts + Single Post
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Help Center / Support Pages
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        Secondary Pages: About, Contacts, 404,
                                        etc.
                                    </li>
                                    <li>
                                        <i className="ci-check-circle text-success me-2"></i>
                                        40+ Flexible Components
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-7 offset-xl-1">
                                <img
                                    src="/img/intro/pages-showcase.jpg"
                                    alt="Bandicoot pages"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-secondary py-4">
                    <div className="container pt-4 pt-md-0">
                        <div className="row align-items-center">
                            <div className="col-xl-4 offset-xl-1 col-lg-5 offset-lg-1 col-md-6 text-center text-md-left">
                                <span className="badge badge-info fs-sm mb-4">
                                    From v1.2
                                </span>
                                <h2>
                                    <span className="fw-light">Even More</span>{" "}
                                    Mobile Friendly{" "}
                                    <span className="fw-light">Interface</span>
                                </h2>
                                <p className="text-muted pb-2">
                                    New{" "}
                                    <span className="fw-medium">Toolbar</span>{" "}
                                    designed specifically for handheld devices
                                    to further improve user experience.
                                </p>
                                <p className="fs-sm">
                                    Scan QR code below to test on your device:
                                </p>
                                <img
                                    src="/img/intro/qrcode.png"
                                    width="150"
                                    alt="QR code"
                                />
                            </div>
                            <div className="col-md-6">
                                <img
                                    className="d-block mx-auto"
                                    src="/img/intro/handheld-toolbar.jpg"
                                    alt="Toolbar"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container py-3 py-lg-4">
                        <h2 className="text-center mb-4">
                            Bandicoot Feature{" "}
                            <span className="fw-light">Highlights</span>
                        </h2>
                        <div className="row text-center pt-4">
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/01.png"
                                    width="90"
                                    alt="Gulp icon"
                                />
                                <h6>Kick-start Your Development</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Start your development process fast and easy
                                    with Node.js and Gulp setup. Configuration
                                    files are included in download package. Full
                                    tasks automation.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/02.png"
                                    width="90"
                                    alt="Sass icon"
                                />
                                <h6>Easy to Customize with Sass</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Bandicoot is built using Sass. Easily change
                                    colors, typography and much more. It is the
                                    most mature, stable, and powerful CSS
                                    extension language in the world.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/03.png"
                                    width="90"
                                    alt="Pug icon"
                                />
                                <h6>Pug - Node Templating Engine</h6>
                                <p className="fs-ms text-muted mb-0">
                                    No need to write huge amount of HTML, if you
                                    don’t want to. Pug provides features not
                                    available in plain HTML like variables,
                                    includes, mixins, functions, etc.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/04.png"
                                    width="90"
                                    alt="Bootstrap icon"
                                />
                                <h6>Built With Bootstrap 5</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Bandicoot is the powerful e-commerce
                                    front-end solution based on Bootstrap 5 -
                                    the worlds most popular responsive,
                                    mobile-first front-end component library.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/05.png"
                                    width="90"
                                    alt="Web Components icon"
                                />
                                <h6>40+ Flexible Components</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Besides styling all default Bootstrap 5
                                    components Bandicoot introduces lots of new
                                    flexible, customizable and reusable elements
                                    you can use across the website.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/06.png"
                                    width="90"
                                    alt="Mobile Friendly icon"
                                />
                                <h6>Mobile Friendly Interface</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Its not a surprise that nowadays over 70% of
                                    users shop online using their mobile
                                    devices. Bandicoot is 100% responsive and
                                    optimized for small touch screens.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/07.png"
                                    width="90"
                                    alt="Google Fonts icon"
                                />
                                <h6>Google Fonts</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Bandicoot uses Google fonts which are free,
                                    fast to load and of very high quality.
                                    Currently Google fonts library includes 870+
                                    font families to choose from.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/08.png"
                                    width="90"
                                    alt="Touch icon"
                                />
                                <h6>Touch-enabled Sliders</h6>
                                <p className="fs-ms text-muted mb-0">
                                    In the era of touch screens its important to
                                    ensure great user experience on handheld
                                    devices, especially when it comes to such
                                    frequently used interface component as
                                    slider.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/09.png"
                                    width="90"
                                    alt="Vector icon"
                                />
                                <h6>Vector Based HD Ready Icons</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Bandicoot is equiped with font-based icon
                                    pack to ensure that infographics and
                                    interface icons look sharp on any device
                                    with any screen resolution and pixel
                                    density.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/10.png"
                                    width="90"
                                    alt="HTML5 icon"
                                />
                                <h6>W3C Valid HTML Code</h6>
                                <p className="fs-ms text-muted mb-0">
                                    All HTML files are checked via W3C validator
                                    to ensure 100% valid code. As you probably
                                    know invalid HTML limits innovation, but
                                    Bandicoot is innovative at its core.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/11.png"
                                    width="90"
                                    alt="JavaScript icon"
                                />
                                <h6>Future-proof JavaScript</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Bandicoot core scripts as well as all
                                    dependencies are written in vanilla JS. And
                                    now with Bootstrap 5 we finally drops jQuery
                                    and uses ES6 modules.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter pb-2">
                                <img
                                    className="inline-block mb-3"
                                    src="/img/intro/features/12.png"
                                    width="90"
                                    alt="Documentation icon"
                                />
                                <h6>Detailed Documentation</h6>
                                <p className="fs-ms text-muted mb-0">
                                    Download package includes links to online
                                    documentation. It covers all crucial
                                    information about how to get started,
                                    customize template and components usage.
                                </p>
                            </div>
                        </div>
                        <h6 className="text-center">And much more...</h6>
                    </div>
                </section>
            </>
        </BaseLayout>
    );
}
