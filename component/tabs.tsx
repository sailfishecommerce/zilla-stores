<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Cartzilla | Tabs</title>
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
                                        <li className="widget-list-item active">
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
                        <h1 className="mt-3 mt-lg-4 pt-5">Tabs</h1>
                        <div
                            className="d-flex flex-wrap flex-md-nowrap justify-content-between"
                        >
                            <p className="text-muted">
                                Horizontally stacked list of items. When clicked
                                each item switch content in the tab pane.
                            </p>
                            <p className="fs-sm ps-md-4">
                                <a
                                    className="text-nowrap"
                                    href="https://getbootstrap.com/docs/5.1/components/navs-tabs/#tabs"
                                    target="_blank"
                                    rel="noopener"
                                    >Bootstrap docs<i
                                        className="ci-arrow-right align-middle ms-1"
                                    ></i
                                ></a>
                            </p>
                        </div>
                    </div>
                    <!-- Basic example-->
                    <section className="pb-5 mb-md-2" id="tabs-basic">
                        <h2 className="h5 mb-3">Basic example</h2>
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
                                        <ul
                                            className="nav nav-tabs"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#home1"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    ><i
                                                        className="ci-home me-2"
                                                    ></i
                                                    >Home</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#profile1"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    ><i
                                                        className="ci-user-circle me-2"
                                                    ></i
                                                    >Profile</a
                                                >
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    role="button"
                                                    >Dropdown</a
                                                >
                                                <div className="dropdown-menu">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#messages1"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Messages</a
                                                    ><a
                                                        className="dropdown-item"
                                                        href="#settings1"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Settings</a
                                                    >
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home1"
                                                role="tabpanel"
                                            >
                                                <p className="text-muted">
                                                    Raw denim you probably
                                                    haven't heard of them jean
                                                    shorts Austin. Nesciunt tofu
                                                    stumptown aliqua, retro
                                                    synth master cleanse.
                                                    Mustache cliche tempor,
                                                    williamsburg carles vegan
                                                    helvetica. Reprehenderit
                                                    butcher retro keffiyeh
                                                    dreamcatcher synth. Cosby
                                                    sweater eu banh mi, qui
                                                    irure terry richardson ex
                                                    squid. Aliquip placeat
                                                    salvia cillum iphone. Seitan
                                                    aliquip quis cardigan
                                                    american apparel, butcher
                                                    voluptate nisi qui.
                                                    Excepteur sint occaecat
                                                    cupidatat non proident.
                                                </p>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="profile1"
                                                role="tabpanel"
                                            >
                                                <p className="text-muted">
                                                    Food truck fixie locavore,
                                                    accusamus mcsweeney's marfa
                                                    nulla single-origin coffee
                                                    squid. Exercitation +1
                                                    labore velit, blog sartorial
                                                    PBR leggings next level wes
                                                    anderson artisan four loko
                                                    farm-to-table craft beer
                                                    twee. Qui photo booth
                                                    letterpress, commodo enim
                                                    craft beer mlkshk aliquip
                                                    jean shorts ullamco ad vinyl
                                                    cillum PBR. Homo nostrud
                                                    organic, assumenda labore
                                                    aesthetic magna delectus
                                                    mollit. Keytar helvetica VHS
                                                    salvia yr, vero magna velit
                                                    sapiente.
                                                </p>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="messages1"
                                                role="tabpanel"
                                            >
                                                <p className="text-muted">
                                                    Etsy mixtape wayfarers,
                                                    ethical wes anderson tofu
                                                    before they sold out
                                                    mcsweeney's organic lomo
                                                    retro fanny pack lo-fi
                                                    farm-to-table readymade.
                                                    Messenger bag gentrify
                                                    pitchfork tattooed craft
                                                    beer, iphone skateboard
                                                    locavore carles etsy salvia
                                                    banksy hoodie helvetica. DIY
                                                    synth PBR banksy irony.
                                                    Leggings gentrify squid
                                                    8-bit cred pitchfork.
                                                    Williamsburg banh mi
                                                    whatever gluten-free, carles
                                                    pitchfork biodiesel fixie
                                                    etsy retro mlkshk vice blog.
                                                    Scenester cred you probably
                                                    haven't heard of them, vinyl
                                                    craft beer blog stumptown.
                                                    Pitchfork sustainable tofu
                                                    synth chambray yr.
                                                </p>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="settings1"
                                                role="tabpanel"
                                            >
                                                <p className="fs-sm">
                                                    Trust fund seitan
                                                    letterpress, keytar raw
                                                    denim keffiyeh etsy art
                                                    party before they sold out
                                                    master cleanse gluten-free
                                                    squid scenester freegan
                                                    cosby sweater. Fanny pack
                                                    portland seitan DIY, art
                                                    party locavore wolf cliche
                                                    high life echo park Austin.
                                                    Cred vinyl keffiyeh DIY
                                                    salvia PBR, banh mi before
                                                    they sold out farm-to-table
                                                    VHS viral locavore cosby
                                                    sweater. Lomo wolf viral,
                                                    mustache readymade
                                                    thundercats keffiyeh craft
                                                    beer marfa ethical. Wolf
                                                    salvia freegan.
                                                </p>
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
                                        ><code className="lang-html">&lt;!-- Nav tabs --&gt;
&lt;ul className=&quot;nav nav-tabs&quot; role=&quot;tablist&quot;&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a href=&quot;#home1&quot; className=&quot;nav-link active&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;i className=&quot;ci-home me-2&quot;&gt;&lt;/i&gt;
      Home
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a href=&quot;#profile1&quot; className=&quot;nav-link&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;i className=&quot;ci-user-circle me-2&quot;&gt;&lt;/i&gt;
      Profile
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item dropdown&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;nav-link dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; role=&quot;button&quot;&gt;Dropdown&lt;/a&gt;
    &lt;div className=&quot;dropdown-menu&quot;&gt;
      &lt;a href=&quot;#messages1&quot; className=&quot;dropdown-item&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;Messages&lt;/a&gt;
      &lt;a href=&quot;#settings1&quot; className=&quot;dropdown-item&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;Settings&lt;/a&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Tabs content --&gt;
&lt;div className=&quot;tab-content&quot;&gt;
  &lt;div className=&quot;tab-pane fade show active&quot; id=&quot;home1&quot; role=&quot;tabpanel&quot;&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. Excepteur sint occaecat cupidatat non proident.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div className=&quot;tab-pane fade&quot; id=&quot;profile1&quot; role=&quot;tabpanel&quot;&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div className=&quot;tab-pane fade&quot; id=&quot;messages1&quot; role=&quot;tabpanel&quot;&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div className=&quot;tab-pane fade&quot; id=&quot;settings1&quot; role=&quot;tabpanel&quot;&gt;
    &lt;p className=&quot;fs-sm&quot;&gt;Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan.&lt;/p&gt;
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
                                        ><code className="lang-pug">// Nav tabs
ul(className=&quot;nav nav-tabs&quot;, role=&quot;tablist&quot;)
  li.nav-item
    a(href=&quot;#home1&quot;, className=&quot;nav-link active&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      i.ci-home.me-2
      | Home
  li.nav-item
    a(href=&quot;#profile1&quot;, className=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      i.ci-user-circle.me-2
      | Profile
  li.nav-item.dropdown
    a(href=&quot;#&quot;, className=&quot;nav-link dropdown-toggle&quot;, data-bs-toggle=&quot;dropdown&quot;, role=&quot;button&quot;)
      | Dropdown
    .dropdown-menu
      a(href=&quot;#messages1&quot;, className=&quot;dropdown-item&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
        | Messages
      a(href=&quot;#settings1&quot;, className=&quot;dropdown-item&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
        | Settings

// Tabs content
.tab-content
  div(id=&quot;home1&quot;, className=&quot;tab-pane fade show active&quot;, role=&quot;tabpanel&quot;)
    p.fs-sm
      | Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. Excepteur sint occaecat cupidatat non proident.
  div(id=&quot;profile1&quot;, className=&quot;tab-pane fade&quot;, role=&quot;tabpanel&quot;)
    p.fs-sm
      | Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente.
  div(id=&quot;messages1&quot;, className=&quot;tab-pane fade&quot;, role=&quot;tabpanel&quot;)
    p.fs-sm
      | Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
  div(id=&quot;settings1&quot;, className=&quot;tab-pane fade&quot;, role=&quot;tabpanel&quot;)
    p.fs-sm
      | Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan.
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Alignment and fill-->
                    <section className="pb-5 mb-md-2" id="tabs-alignment">
                        <h2 className="h5 mb-3">Alignment and fill</h2>
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
                                        <ul
                                            className="nav nav-tabs justify-content-center mb-5"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    >Home</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    >Profile</a
                                                >
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    role="button"
                                                    >Dropdown</a
                                                >
                                                <div className="dropdown-menu">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Messages</a
                                                    ><a
                                                        className="dropdown-item"
                                                        href="#"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Settings</a
                                                    >
                                                </div>
                                            </li>
                                        </ul>
                                        <ul
                                            className="nav nav-tabs justify-content-end mb-5"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    >Home</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    >Profile</a
                                                >
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    role="button"
                                                    >Dropdown</a
                                                >
                                                <div
                                                    className="dropdown-menu dropdown-menu-end"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Messages</a
                                                    ><a
                                                        className="dropdown-item"
                                                        href="#"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Settings</a
                                                    >
                                                </div>
                                            </li>
                                        </ul>
                                        <ul
                                            className="nav nav-tabs nav-fill"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    >Home</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                    >Profile</a
                                                >
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    role="button"
                                                    >Dropdown</a
                                                >
                                                <div
                                                    className="dropdown-menu w-100 text-center"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Messages</a
                                                    ><a
                                                        className="dropdown-item"
                                                        href="#"
                                                        data-bs-toggle="tab"
                                                        role="tab"
                                                        >Settings</a
                                                    >
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Center aligned --&gt;
&lt;ul className=&quot;nav nav-tabs justify-content-center&quot; role=&quot;tablist&quot;&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;nav-link&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;Home&lt;/a&gt;
  &lt;/li&gt;
  ...
&lt;/ul&gt;

&lt;!-- Right aligned --&gt;
&lt;ul className=&quot;nav nav-tabs justify-content-end&quot; role=&quot;tablist&quot;&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;nav-link&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;Home&lt;/a&gt;
  &lt;/li&gt;
  ...
&lt;/ul&gt;

&lt;!-- Fill tabs --&gt;
&lt;ul className=&quot;nav nav-tabs nav-fill&quot; role=&quot;tablist&quot;&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a href=&quot;#&quot; className=&quot;nav-link&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;Home&lt;/a&gt;
  &lt;/li&gt;
  ...
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug2"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Center aligned
ul(className=&quot;nav nav-tabs justify-content-center&quot;, role=&quot;tablist&quot;)
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;) Home
  ...

// Right aligned
ul(className=&quot;nav nav-tabs justify-content-end&quot;, role=&quot;tablist&quot;)
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;) Home
  ...

// Fill tabs
ul(className=&quot;nav nav-tabs nav-fill&quot;, role=&quot;tablist&quot;)
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;) Home
  ...
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Media tabs: Icon-->
                    <section className="pb-5 mb-md-2" id="tabs-media-icon">
                        <h2 className="h5 mb-3">Media tabs: Icon</h2>
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
                                        <ul
                                            className="nav nav-tabs media-tabs nav-justified"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link disabled"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-cart"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Disabled step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Shopping cart
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-wallet"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Second step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Payment method
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-package"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Third step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Delivery info
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media"
                                                        >
                                                            <i
                                                                className="ci-check"
                                                            ></i>
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Fourth step
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Confirmation
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Media tabs: Icon --&gt;
&lt;ul className=&quot;nav nav-tabs media-tabs nav-justified&quot; role=&quot;tablist&quot;&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a className=&quot;nav-link disabled&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-cart&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Disabled step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Shopping cart&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a className=&quot;nav-link active&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-wallet&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Second step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Payment method&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a className=&quot;nav-link&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-package&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Third step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Delivery info&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li className=&quot;nav-item&quot;&gt;
    &lt;a className=&quot;nav-link&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div className=&quot;d-flex align-items-center&quot;&gt;
        &lt;div className=&quot;media-tab-media&quot;&gt;&lt;i className=&quot;ci-check&quot;&gt;&lt;/i&gt;&lt;/div&gt;
        &lt;div className=&quot;ps-3&quot;&gt;
          &lt;div className=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Fourth step&lt;/div&gt;
          &lt;h6 className=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Confirmation&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug3"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Media tabs: Icon
ul(role=&quot;tablist&quot;).nav.nav-tabs.media-tabs.nav-justified
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link disabled&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media
          i.ci-cart
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Disabled step
          h6.media-tab-title.text-nowrap.mb-0
            | Shopping cart
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link active&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media
          i.ci-wallet
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Second step
          h6.media-tab-title.text-nowrap.mb-0
            | Payment method
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media
          i.ci-package
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Third step
          h6.media-tab-title.text-nowrap.mb-0
            | Delivery info
  li.nav-item
    a(href=&quot;#&quot;, className=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media
          i.ci-check
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Fourth step
          h6.media-tab-title.text-nowrap.mb-0
            | Confirmation
</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Media tabs: Image-->
                    <section className="pb-5 mb-md-2" id="tabs-media-image">
                        <h2 className="h5 mb-3">Media tabs: Image</h2>
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
                                        <ul
                                            className="nav nav-tabs media-tabs nav-justified"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media shadow-none"
                                                        >
                                                            <img
                                                                src="../img/components/tabs/01.jpg"
                                                                alt="Profile image"
                                                            />
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                CEO, Co-founder
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                William Smith
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media shadow-none"
                                                        >
                                                            <img
                                                                src="../img/components/tabs/02.jpg"
                                                                alt="Profile image"
                                                            />
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Manager
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Emma Gallaher
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="d-flex align-items-center"
                                                    >
                                                        <div
                                                            className="media-tab-media shadow-none"
                                                        >
                                                            <img
                                                                src="../img/components/tabs/03.jpg"
                                                                alt="Profile image"
                                                            />
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="media-tab-subtitle text-muted fs-xs mb-1"
                                                            >
                                                                Lead accountant
                                                            </div>
                                                            <h6
                                                                className="media-tab-title text-nowrap mb-0"
                                                            >
                                                                Benjamin Miller
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#"
                                                    data-bs-toggle="tab"
                                                    role="tab"
                                                >
                                                    <div
                                                        className="
                                                            d-flex
                                                            align-items-center
                                                        "
                                                    >
                                                        <div
                                                            className="
                                                                media-tab-media
                                                                shadow-none
                                                            "
                                                        >
                                                            <img
                                                                src="../img/components/tabs/04.jpg"
                                                                alt="Profile image"
                                                            />
                                                        </div>
                                                        <div className="ps-3">
                                                            <div
                                                                className="
                                                                    media-tab-subtitle
                                                                    text-muted
                                                                    fs-xs
                                                                    mb-1
                                                                "
                                                            >
                                                                Chief editor
                                                            </div>
                                                            <h6
                                                                className="
                                                                    media-tab-title
                                                                    text-nowrap
                                                                    mb-0
                                                                "
                                                            >
                                                                Anna Lee
                                                            </h6>
                                                        </div>
                                                    </div></a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="html4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-html">&lt;!-- Media tabs: Icon --&gt;
&lt;ul class=&quot;nav nav-tabs media-tabs nav-justified&quot; role=&quot;tablist&quot;&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div class=&quot;d-flex align-items-center&quot;&gt;
        &lt;div class=&quot;media-tab-media shadow-none&quot;&gt;&lt;img src=&quot;path-to-image&quot; alt=&quot;Profile image&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;ps-3&quot;&gt;
          &lt;div class=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Second step&lt;/div&gt;
          &lt;h6 class=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Shopping cart&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link active&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div class=&quot;d-flex align-items-center&quot;&gt;
        &lt;div class=&quot;media-tab-media shadow-none&quot;&gt;&lt;img src=&quot;path-to-image&quot; alt=&quot;Profile image&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;ps-3&quot;&gt;
          &lt;div class=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Second step&lt;/div&gt;
          &lt;h6 class=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Payment method&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div class=&quot;d-flex align-items-center&quot;&gt;
        &lt;div class=&quot;media-tab-media shadow-none&quot;&gt;&lt;img src=&quot;path-to-image&quot; alt=&quot;Profile image&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;ps-3&quot;&gt;
          &lt;div class=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Third step&lt;/div&gt;
          &lt;h6 class=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Delivery info&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li class=&quot;nav-item&quot;&gt;
    &lt;a class=&quot;nav-link&quot; href=&quot;#&quot; data-bs-toggle=&quot;tab&quot; role=&quot;tab&quot;&gt;
      &lt;div class=&quot;d-flex align-items-center&quot;&gt;
        &lt;div class=&quot;media-tab-media shadow-none&quot;&gt;&lt;img src=&quot;path-to-image&quot; alt=&quot;Profile image&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;ps-3&quot;&gt;
          &lt;div class=&quot;media-tab-subtitle text-muted fs-xs mb-1&quot;&gt;Fourth step&lt;/div&gt;
          &lt;h6 class=&quot;media-tab-title text-nowrap mb-0&quot;&gt;Confirmation&lt;/h6&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pug4"
                                        role="tabpanel"
                                    >
                                        <pre
                                            className="line-numbers"
                                        ><code className="lang-pug">// Media tabs: Icon
ul(class=&quot;nav nav-tabs media-tabs nav-justified&quot;, role=&quot;tablist&quot;)
  li.nav-item
    a(href=&quot;#&quot;, class=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media.shadow-none
          img(src=&quot;path-to-image&quot;, alt=&quot;Profile image&quot;)
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Second step
          h6.media-tab-title.text-nowrap.mb-0
            | Shopping cart
  li.nav-item
    a(href=&quot;#&quot;, class=&quot;nav-link active&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media.shadow-none
          img(src=&quot;path-to-image&quot;, alt=&quot;Profile image&quot;)
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Second step
          h6.media-tab-title.text-nowrap.mb-0
            | Payment method
  li.nav-item
    a(href=&quot;#&quot;, class=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media.shadow-none
          img(src=&quot;path-to-image&quot;, alt=&quot;Profile image&quot;)
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Third step
          h6.media-tab-title.text-nowrap.mb-0
            | Delivery info
  li.nav-item
    a(href=&quot;#&quot;, class=&quot;nav-link&quot;, data-bs-toggle=&quot;tab&quot;, role=&quot;tab&quot;)
      .d-flex.align-items-center
        .media-tab-media.shadow-none
          img(src=&quot;path-to-image&quot;, alt=&quot;Profile image&quot;)
        .ps-3
          .media-tab-subtitle.text-muted.fs-xs.mb-1
            | Fourth step
          h6.media-tab-title.text-nowrap.mb-0
            | Confirmation</code></pre>
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
                                            href="#tabs-basic"
                                            >Basic example</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#tabs-alignment"
                                            >Alignment and fill</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#tabs-media-icon"
                                            >Media tabs: Icon</a
                                        >
                                    </li>
                                    <li className="widget-list-item">
                                        <a
                                            className="widget-list-link"
                                            data-scroll
                                            href="#tabs-media-image"
                                            >Media tabs: Image</a
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
