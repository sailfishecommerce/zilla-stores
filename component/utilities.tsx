/* eslint-disable @next/next/no-img-element */
export default function Utilities() {
    return (
        <>
            <main className="container-fluid">
                {/*<!-- Main content-->*/}
                <section className="offcanvas-enabled row pb-3 pb-md-4">
                    <div className="col-xxl-9">
                        {/*<!-- Navbar-->*/}
                        <header
                            className="navbar navbar-expand navbar-light fixed-top bg-light shadow-sm px-3 px-lg-4"
                            data-scroll-header
                            data-fixed-element
                        >
                            <a
                                className="navbar-brand d-lg-none"
                                href="typography.html"
                            >
                                <img
                                    src="../img/logo-dark.png"
                                    width="142"
                                    alt="Cartzilla"
                                />
                            </a>
                            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="../index.html"
                                    >
                                        <i className="ci-eye align-middle mt-n1 me-2"></i>
                                        Live preview
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link disabled text-border px-1">
                                        |
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="../docs/dev-setup.html"
                                    >
                                        <i className="ci-book align-middle mt-n1 me-2"></i>
                                        Documentation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link disabled text-border px-1">
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
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a
                                className="btn btn-primary btn-shadow ms-2 ms-lg-4"
                                href="https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="ci-cart me-2 d-none d-sm-inline-block"></i>
                                Buy now
                            </a>
                        </header>
                        {/*<!-- Side navigation-->*/}
                        <aside
                            className="offcanvas offcanvas-expand bg-dark"
                            id="components-nav"
                        >
                            <div className="offcanvas-header bg-darker d-none d-lg-block">
                                <a
                                    className="navbar-brand py-1"
                                    href="typography.html"
                                >
                                    <img
                                        src="../img/logo-light.png"
                                        width="142"
                                        alt="Cartzilla"
                                    />
                                </a>
                                <span className="badge bg-info">
                                    Components
                                </span>
                            </div>
                            <div className="offcanvas-header bg-darker align-items-center d-flex d-lg-none">
                                <div className="d-flex align-items-center">
                                    <h5 className="text-light mb-0 me-2">
                                        Menu
                                    </h5>
                                    <span className="badge bg-info">
                                        Components
                                    </span>
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
                                    <div className="d-flex d-lg-none pb-4 mb-4 border-bottom border-light">
                                        <a
                                            className="btn btn-outline-light btn-sm me-3"
                                            href="../index.html"
                                        >
                                            <i className="ci-eye align-middle mt-n1 me-2"></i>
                                            Live demo
                                        </a>
                                        <a
                                            className="btn btn-light btn-sm ps-2"
                                            href="../docs/dev-setup.html"
                                        >
                                            <i className="ci-book align-middle mt-n1 me-2"></i>
                                            Documentation
                                        </a>
                                    </div>
                                    <div className="widget widget-links widget-light border-bottom border-light mb-4 pb-4 me-n3">
                                        <h3 className="widget-title text-white">
                                            Content
                                        </h3>
                                        <ul className="widget-list">
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="typography.html"
                                                >
                                                    Typography
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="icon-font.html"
                                                >
                                                    Icon font
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="code.html"
                                                >
                                                    Code
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="images.html"
                                                >
                                                    Images &amp; figures
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="tables.html"
                                                >
                                                    Tables
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-links widget-light border-bottom border-light mb-4 pb-4 me-n3">
                                        <h3 className="widget-title text-white">
                                            Components
                                        </h3>
                                        <ul className="widget-list">
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="accordion.html"
                                                >
                                                    Accordion
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="alerts.html"
                                                >
                                                    Alerts
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="badge.html"
                                                >
                                                    Badges
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="blog-components.html"
                                                >
                                                    Blog components
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="breadcrumb.html"
                                                >
                                                    Breadcrumb
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="buttons.html"
                                                >
                                                    Buttons
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="button-group.html"
                                                >
                                                    Button group
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="cards.html"
                                                >
                                                    Cards
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="carousel.html"
                                                >
                                                    Carousel
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="charts.html"
                                                >
                                                    Charts
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="collapse.html"
                                                >
                                                    Collapse
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="contacts-card.html"
                                                >
                                                    Contacts card
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="countdown.html"
                                                >
                                                    Countdown
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="dropdowns.html"
                                                >
                                                    Dropdowns
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="footer.html"
                                                >
                                                    Footer
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="forms.html"
                                                >
                                                    Forms
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="gallery.html"
                                                >
                                                    Gallery
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="input-group.html"
                                                >
                                                    Input group
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="list-group.html"
                                                >
                                                    List group
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="modal.html"
                                                >
                                                    Modal
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="navbar.html"
                                                >
                                                    Navbar
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="offcanvas.html"
                                                >
                                                    Offcanvas
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="pagination.html"
                                                >
                                                    Pagination
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="pills.html"
                                                >
                                                    Pills
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="placeholders.html"
                                                >
                                                    Placeholders
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="popovers.html"
                                                >
                                                    Popovers
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="progress.html"
                                                >
                                                    Progress
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="shop-components.html"
                                                >
                                                    Shop components
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="social-buttons.html"
                                                >
                                                    Social buttons
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="spinners.html"
                                                >
                                                    Spinners
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="steps.html"
                                                >
                                                    Steps
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="tabs.html"
                                                >
                                                    Tabs
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="team.html"
                                                >
                                                    Team
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="testimonials.html"
                                                >
                                                    Testimonials / reviews
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="toasts.html"
                                                >
                                                    Toasts
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="tooltips.html"
                                                >
                                                    Tooltips
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="video-button.html"
                                                >
                                                    Video button
                                                </a>
                                            </li>
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="widgets.html"
                                                >
                                                    Widgets
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-links widget-light mb-4 pb-2">
                                        <h3 className="widget-title text-white">
                                            Utilities
                                        </h3>
                                        <ul className="widget-list">
                                            <li className="widget-list-item">
                                                <a
                                                    className="widget-list-link"
                                                    href="https://getbootstrap.com/docs/5.1/utilities/borders/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Bootstrap
                                                </a>
                                            </li>
                                            <li className="widget-list-item active">
                                                <a
                                                    className="widget-list-link"
                                                    href="utilities.html"
                                                >
                                                    Cartzilla
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/*<!-- Page title-->*/}
                        <div className="border-bottom mt-lg-2 pt-5 pb-2 mb-5">
                            <h1 className="mt-3 mt-lg-4 pt-5">
                                Cartzilla utilities
                            </h1>
                            <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                                <p className="text-muted">
                                    Custom Cartzilla utility classes.
                                </p>
                                <div className="ps-md-4 mb-3">
                                    <span className="badge bg-info">
                                        Cartzilla component
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Faded background colors-->*/}
                        <section className="pb-5 mb-md-2" id="faded-bg">
                            <h2 className="h5 mb-3">Faded background colors</h2>
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
                                            >
                                                Result
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#html1"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="html1"
                                                aria-selected="false"
                                            >
                                                HTML
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#pug1"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="pug1"
                                                aria-selected="false"
                                            >
                                                Pug
                                            </a>
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
                                            <div className="bg-faded-primary p-4 text-center mb-3">
                                                <h5 className="text-primary mb-0 py-2">
                                                    Primary faded background
                                                </h5>
                                            </div>
                                            <div className="bg-faded-accent p-4 text-center mb-3">
                                                <h5 className="text-accent mb-0 py-2">
                                                    Accent faded background
                                                </h5>
                                            </div>
                                            <div className="bg-secondary p-4 text-center mb-3">
                                                <h5 className="mb-0 py-2">
                                                    Secondary background
                                                </h5>
                                            </div>
                                            <div className="bg-faded-info p-4 text-center mb-3">
                                                <h5 className="text-info mb-0 py-2">
                                                    Info faded background
                                                </h5>
                                            </div>
                                            <div className="bg-faded-success p-4 text-center mb-3">
                                                <h5 className="text-success mb-0 py-2">
                                                    Success faded background
                                                </h5>
                                            </div>
                                            <div className="bg-faded-warning p-4 text-center mb-3">
                                                <h5 className="text-warning mb-0 py-2">
                                                    Warning faded background
                                                </h5>
                                            </div>
                                            <div className="bg-faded-danger p-4 text-center mb-3">
                                                <h5 className="text-danger mb-0 py-2">
                                                    Danger faded background
                                                </h5>
                                            </div>
                                            <div className="bg-faded-dark p-4 text-center">
                                                <h5 className="text-dark mb-0 py-2">
                                                    Dark faded background
                                                </h5>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="html1"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-html">
                                                    &lt;!-- Primary faded
                                                    background --&gt; &lt;div
                                                    className=&quot;bg-faded-primary&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Accent background
                                                    --&gt; &lt;div
                                                    className=&quot;bg-faded-accent&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Secondary background
                                                    --&gt; &lt;div
                                                    className=&quot;bg-secondary&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Info faded
                                                    background --&gt; &lt;div
                                                    className=&quot;bg-faded-info&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Success faded
                                                    background --&gt; &lt;div
                                                    className=&quot;bg-faded-success&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Warning faded
                                                    background --&gt; &lt;div
                                                    className=&quot;bg-faded-warning&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Danger faded
                                                    background --&gt; &lt;div
                                                    className=&quot;bg-faded-danger&quot;&gt;...&lt;/div&gt;
                                                    &lt;!-- Dark faded
                                                    background --&gt; &lt;div
                                                    className=&quot;bg-faded-dark&quot;&gt;...&lt;/div&gt;
                                                </code>
                                            </pre>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pug1"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-pug">
                                                    {/*// Primary faded background*/}
                                                    .bg-faded-primary | ... //
                                                    Accent faded background
                                                    .bg-faded-accent | ... //
                                                    Secondary background
                                                    .bg-secondary | ... // Info
                                                    faded background
                                                    .bg-faded-info | ... //
                                                    Success faded background
                                                    .bg-faded-success | ... //
                                                    Warning faded background
                                                    .bg-faded-warning | ... //
                                                    Danger faded background
                                                    .bg-faded-danger | ... //
                                                    Dark faded background
                                                    .bg-faded-dark | ...
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*<!-- Text shadow-->*/}
                        <section className="pb-5 mb-md-2" id="text-shadow">
                            <h2 className="h5 mb-3">Text shadow</h2>
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
                                            >
                                                Result
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#html2"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="html2"
                                                aria-selected="false"
                                            >
                                                HTML
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#pug2"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="pug2"
                                                aria-selected="false"
                                            >
                                                Pug
                                            </a>
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
                                            <h2 className="text-white text-shadow">
                                                Text shadow
                                            </h2>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="html2"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-html">
                                                    &lt;!-- Text shadow --&gt;
                                                    &lt;h2
                                                    className=&quot;text-white
                                                    text-shadow&quot;&gt;Text
                                                    shadow&lt;/h2&gt;
                                                </code>
                                            </pre>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pug2"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-pug">
                                                    {/*// Text shadow*/}
                                                    h2.text-white.text-shadow
                                                    Text shadow
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*<!-- Opacity-->*/}
                        <section className="pb-5 mb-md-2" id="opacity">
                            <h2 className="h5 mb-3">Opacity</h2>
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
                                            >
                                                Result
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#html3"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="html3"
                                                aria-selected="false"
                                            >
                                                HTML
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#pug3"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="pug3"
                                                aria-selected="false"
                                            >
                                                Pug
                                            </a>
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
                                            <div className="d-flex flex-wrap pt-2">
                                                <span className="text-dark opacity-25 mb-3 me-4">
                                                    Opacity 25%
                                                </span>
                                                <span className="text-dark opacity-50 mb-3 me-4">
                                                    Opacity 50%
                                                </span>
                                                <span className="text-dark opacity-60 mb-3 me-4">
                                                    Opacity 60%
                                                </span>
                                                <span className="text-dark opacity-70 mb-3 me-4">
                                                    Opacity 70%
                                                </span>
                                                <span className="text-dark opacity-75 mb-3 me-4">
                                                    Opacity 75%
                                                </span>
                                                <span className="text-dark opacity-80 mb-3 me-4">
                                                    Opacity 80%
                                                </span>
                                                <span className="text-dark opacity-90 mb-3 me-4">
                                                    Opacity 90%
                                                </span>
                                                <span className="text-dark opacity-100 mb-3">
                                                    Opacity 100%
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="html3"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-html">
                                                    &lt;!-- Opacity --&gt;
                                                    &lt;div
                                                    className=&quot;opacity-25&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-50&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-60&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-75&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-80&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-90&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;opacity-100&quot;&gt;&lt;/div&gt;
                                                </code>
                                            </pre>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pug3"
                                            role="tabpanel"
                                        >
                                            {/*<pre
                                            className="line-numbers"
                                        ><code className="lang-pug">
// Opacity
.opacity-25
.opacity-50
.opacity-60
.opacity-70
.opacity-75
.opacity-80
.opacity-90
.opacity-100
</code></pre>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*<!-- Translucent image overlay-->*/}
                        <section className="pb-5 mb-md-2" id="image-overlay">
                            <h2 className="h5 mb-3">
                                Translucent image overlay
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
                                            >
                                                Result
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#html4"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="html4"
                                                aria-selected="false"
                                            >
                                                HTML
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#pug4"
                                                data-bs-toggle="tab"
                                                role="tab"
                                                aria-controls="pug4"
                                                aria-selected="false"
                                            >
                                                Pug
                                            </a>
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
                                            <div className="row g-3">
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/02.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Black overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/03.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-70"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Primary overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/01.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-accent opacity-70"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Accent overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/03.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-success opacity-70"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Success overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/01.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-warning opacity-70"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Warning overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/01.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-danger opacity-70"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Danger overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/01.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-info opacity-70"></div>
                                                        <div className="position-relative fw-medium text-white text-shadow text-center zindex-5 py-5">
                                                            Info overlay
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-6">
                                                    <div
                                                        className="position-relative bg-size-cover bg-position-center py-5"
                                                        style={{
                                                            backgroundImage:
                                                                "url(../img/components/images/02.jpg)",
                                                        }}
                                                    >
                                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70"></div>
                                                        <div className="position-relative fw-medium text-center zindex-5 py-5">
                                                            White overlay
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="html4"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-html">
                                                    &lt;!-- Black overlay --&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-black
                                                    opacity-50&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5 py-5&quot;&gt;Black
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- Primary
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-primary
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5
                                                    py-5&quot;&gt;Primary
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- Accent
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-accent
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5
                                                    py-5&quot;&gt;Accent
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- Success
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-success
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5
                                                    py-5&quot;&gt;Success
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- Warning
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-warning
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5
                                                    py-5&quot;&gt;Warning
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- Danger
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-danger
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5
                                                    py-5&quot;&gt;Danger
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- Info
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-info
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-white
                                                    text-shadow text-center
                                                    zindex-5 py-5&quot;&gt;Info
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt; &lt;!-- White
                                                    overlay --&gt; &lt;div
                                                    className=&quot;position-relative
                                                    bg-size-cover
                                                    bg-position-center
                                                    py-5&quot;
                                                    style=&quot;background-image:
                                                    url(path-tobg-image);&quot;&gt;
                                                    &lt;div
                                                    className=&quot;position-absolute
                                                    top-0 start-0 w-100 h-100
                                                    bg-white
                                                    opacity-70&quot;&gt;&lt;/div&gt;
                                                    &lt;div
                                                    className=&quot;position-relative
                                                    fw-medium text-center
                                                    zindex-5 py-5&quot;&gt;White
                                                    overlay&lt;/div&gt;
                                                    &lt;/div&gt;
                                                </code>
                                            </pre>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pug4"
                                            role="tabpanel"
                                        >
                                            <pre className="line-numbers">
                                                <code className="lang-pug">
                                                    {/*// Black overlay*/}
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-black.opacity-50
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Black overlay // Primary
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-primary.opacity-70
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Primary overlay // Accent
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-accent.opacity-70
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Accent overlay // Success
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-success.opacity-70
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Success overlay // Warning
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-warning.opacity-70
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Warning overlay // Danger
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-danger.opacity-70
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Danger overlay // Info
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-info.opacity-70
                                                    .position-relative.fw-medium.text-white.text-shadow.text-center.zindex-5.py-5
                                                    Info overlay // White
                                                    overlay
                                                    .position-relative.bg-size-cover.bg-position-center.py-5(style=&quot;background-image:
                                                    url(path-to-bg-image);&quot;)
                                                    .position-absolute.top-0.start-0.w-100.h-100.bg-white.opacity-70
                                                    .position-relative.fw-medium.text-center.zindex-5.py-5
                                                    White overlay
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/*<!-- Quick (anchor) navigation-->*/}
                    <div className="col-xxl-3 d-none d-xxl-block ps-5">
                        <aside className="sticky-top pt-5">
                            <div className="pt-5 mt-5">
                                <div className="widget widget-links ps-4 border-start">
                                    <h3 className="widget-title">Jump to</h3>
                                    <ul className="widget-list">
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                data-scroll
                                                href="#faded-bg"
                                            >
                                                Faded background colors
                                            </a>
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                data-scroll
                                                href="#text-shadow"
                                            >
                                                Text shadow
                                            </a>
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                data-scroll
                                                href="#opacity"
                                            >
                                                Opacity
                                            </a>
                                        </li>
                                        <li className="widget-list-item">
                                            <a
                                                className="widget-list-link"
                                                data-scroll
                                                href="#image-overlay"
                                            >
                                                Translucent image overlay
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    );
}
