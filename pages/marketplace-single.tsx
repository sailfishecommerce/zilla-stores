<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Isometric Device Mockups Bundle</title>
    <!-- SEO Meta Tags-->
    <meta name="description" content="Cartzilla - Bootstrap E-commerce Template">
    <meta name="keywords" content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean">
    <meta name="author" content="Bandicoot Studio">
    <!-- Viewport-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon and Touch Icons-->
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="mask-icon" color="#fe6a6a" href="safari-pinned-tab.svg">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <!-- Vendor Styles including: Font Icons, Plugins, etc.-->
    <link rel="stylesheet" media="screen" href="vendor/simplebar/dist/simplebar.min.css"/>
    <link rel="stylesheet" media="screen" href="vendor/tiny-slider/dist/tiny-slider.css"/>
    <link rel="stylesheet" media="screen" href="vendor/lightgallery.js/dist/css/lightgallery.min.css"/>
    <!-- Main Theme Styles + Bootstrap-->
    <link rel="stylesheet" media="screen" href="css/theme.min.css">
  </head>
  <!-- Body-->
  <body className="handheld-toolbar-enabled">
    <!-- Sign in / sign up modal-->
    <div className="modal fade" id="signin-modal" tabindex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-secondary">
            <ul className="nav nav-tabs card-header-tabs" role="tablist">
              <li className="nav-item"><a className="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true"><i className="ci-unlocked me-2 mt-n1"></i>Sign in</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false"><i className="ci-user me-2 mt-n1"></i>Sign up</a></li>
            </ul>
            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body tab-content py-4">
            <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
              <div className="mb-3">
                <label className="form-label" htmlFor="si-email">Email address</label>
                <input className="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required />
                <div className="invalid-feedback">Please provide a valid email address.</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="si-password">Password</label>
                <div className="password-toggle">
                  <input className="form-control" type="password" id="si-password" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox"><span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div className="mb-3 d-flex flex-wrap justify-content-between">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="si-remember">
                  <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                </div><a className="fs-sm" href="#">Forgot password?</a>
              </div>
              <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in</button>
            </form>
            <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
              <div className="mb-3">
                <label className="form-label" htmlFor="su-name">Full name</label>
                <input className="form-control" type="text" id="su-name" placeholder="John Doe" required />
                <div className="invalid-feedback">Please fill in your name.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="su-email">Email address</label>
                <input className="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required />
                <div className="invalid-feedback">Please provide a valid email address.</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="su-password">Password</label>
                <div className="password-toggle">
                  <input className="form-control" type="password" id="su-password" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox"><span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                <div className="password-toggle">
                  <input className="form-control" type="password" id="su-password-confirm" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox"><span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <main className="page-wrapper">
      <!-- Navbar Marketplace-->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <header className="bg-light shadow-sm navbar-sticky">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container"><a className="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none me-2 order-lg-1" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
            <!-- Toolbar-->
            <div className="navbar-toolbar d-flex align-items-center order-lg-3">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool d-none d-lg-flex" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#searchBox" role="button" aria-expanded="false" aria-controls="searchBox"><span className="navbar-tool-tooltip">Search</span>
                <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="dashboard-favorites.html"><span className="navbar-tool-tooltip">Favorites</span>
                <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a>
              <div className="navbar-tool dropdown ms-2"><a className="navbar-tool-icon-box border dropdown-toggle" href="dashboard-sales.html"><img src="/img/marketplace/account/avatar-sm.png" width="32" alt="Bandicoot Studio"></a><a className="navbar-tool-text ms-n1" href="dashboard-sales.html"><small>Bandicoot Std.</small>$1,375.00</a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div style="min-width: 14rem;">
                    <h6 className="dropdown-header">Account</h6><a className="dropdown-item d-flex align-items-center" href="dashboard-settings.html"><i className="ci-settings opacity-60 me-2"></i>Settings</a><a className="dropdown-item d-flex align-items-center" href="dashboard-purchases.html"><i className="ci-basket opacity-60 me-2"></i>Purchases</a><a className="dropdown-item d-flex align-items-center" href="dashboard-favorites.html"><i className="ci-heart opacity-60 me-2"></i>Favorites<span className="fs-xs text-muted ms-auto">4</span></a>
                    <div className="dropdown-divider"></div>
                    <h6 className="dropdown-header">Seller Dashboard</h6><a className="dropdown-item d-flex align-items-center" href="dashboard-sales.html"><i className="ci-dollar opacity-60 me-2"></i>Sales<span className="fs-xs text-muted ms-auto">$1,375.00</span></a><a className="dropdown-item d-flex align-items-center" href="dashboard-products.html"><i className="ci-package opacity-60 me-2"></i>Products<span className="fs-xs text-muted ms-auto">5</span></a><a className="dropdown-item d-flex align-items-center" href="dashboard-add-new-product.html"><i className="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a><a className="dropdown-item d-flex align-items-center" href="dashboard-payouts.html"><i className="ci-currency-exchange opacity-60 me-2"></i>Payouts</a>
                    <div className="dropdown-divider"></div><a className="dropdown-item d-flex align-items-center" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign Out</a>
                  </div>
                </div>
              </div>
              <div className="navbar-tool ms-4"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="marketplace-cart.html"><span className="navbar-tool-label">3</span><i className="navbar-tool-icon ci-cart"></i></a></div>
            </div>
            <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
              <!-- Search-->
              <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                <input className="form-control rounded-start" type="text" placeholder="Search marketplace">
              </div>
              <!-- Categories dropdown-->
              <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-menu align-middle mt-n1 me-2"></i>Categories</a>
                  <ul className="dropdown-menu py-1">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Photos</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Photos<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Abstract</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Animals</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Architecture</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Beauty &amp; Fashion</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Business</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Education</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Food &amp; Drink</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Holidays</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Industrial</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">People</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Sports</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Technology</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Graphics</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item product-title fw-medium"><a href="#">All Graphics<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Icons</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Illustartions</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Patterns</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Textures</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Web Elements</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">UI Design</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All UI Design<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">PSD Templates</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Sketch Templates</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Adobe XD Templates</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Figma Templates</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Web Themes</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Web Themes<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">WordPress Themes</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Bootstrap Themes</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">eCommerce Templates</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Muse Templates</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Plugins</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Fonts</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Fonts<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Blackletter</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Display</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Non Western</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Sans Serif</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Script</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Serif</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Slab Serif</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Symbols</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Add-Ons</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Add-Ons<i className="ci-arrow-right fs-xs ms-1"></i></a></li>
                        <li className="dropdown-divider"></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Photoshop Add-Ons</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Illustrator Add-Ons</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Sketch Plugins</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Procreate Brushes</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">InDesign Palettes</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Lightroom Presets</a></li>
                        <li><a className="dropdown-item" href="marketplace-category.html">Other Software</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- Primary menu-->
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="index.html">Back to main demo</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Search collapse-->
        <div className="search-box collapse" id="searchBox">
          <div className="card pt-2 pb-4 border-0 rounded-0">
            <div className="container">
              <div className="input-group"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                <input className="form-control rounded-start" type="text" placeholder="Search marketplace">
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Page Title-->
      <div className="page-title-overlap bg-accent pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="marketplace-category.html">Market</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Single Item</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Isometric Device Mockups Bundle</h1>
          </div>
        </div>
      </div>
      <!-- Shadow box-->
      <section className="container mb-3 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            <!-- Content-->
            <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-lg-3">
              <div className="pt-3 px-4 pe-lg-0 ps-xl-5">
                <!-- Product gallery-->
                <div className="gallery"><a className="gallery-item rounded-3 mb-grid-gutter" href="/img/marketplace/single/01.jpg" data-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Simple iPhone X Mockups&lt;/h6&gt;"><img src="/img/marketplace/single/01.jpg" alt="Gallery preview"><span className="gallery-item-caption">Simple iPhone X Mockups</span></a>
                  <div className="row">
                    <div className="col-sm-6"><a className="gallery-item rounded-3 mb-grid-gutter" href="/img/marketplace/single/02.jpg" data-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;UI Psd iPhone X Monochrome&lt;/h6&gt;"><img src="/img/marketplace/single/02.jpg" alt="Gallery preview"><span className="gallery-item-caption">UI Psd iPhone X Monochrome</span></a></div>
                    <div className="col-sm-6"><a className="gallery-item rounded-3 mb-grid-gutter" href="/img/marketplace/single/03.jpg" data-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;iPhone 11 Clay Mockup&lt;/h6&gt;"><img src="/img/marketplace/single/03.jpg" alt="Gallery preview"><span className="gallery-item-caption">iPhone 11 Clay Mockup</span></a></div>
                  </div>
                </div>
                <!-- Wishlist + Sharing-->
                <div className="d-flex flex-wrap justify-content-between align-items-center border-top pt-3">
                  <div className="py-2 me-2">
                    <button className="btn btn-outline-accent" type="button"><i className="ci-heart fs-lg me-2"></i>Add to Favorites</button>
                  </div>
                  <div className="py-2"><i className="ci-share-alt fs-lg align-middle text-muted me-2"></i><a className="btn-social bs-outline bs-facebook bs-sm ms-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-outline bs-twitter bs-sm ms-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-outline bs-pinterest bs-sm ms-2" href="#"><i className="ci-pinterest"></i></a><a className="btn-social bs-outline bs-instagram bs-sm ms-2" href="#"><i className="ci-instagram"></i></a></div>
                </div>
              </div>
            </section>
            <!-- Sidebar-->
            <aside className="col-lg-4 ps-xl-5">
              <hr className="d-lg-none">
              <div className="bg-white h-100 p-4 ms-auto border-start">
                <div className="px-lg-2">
                  <div className="accordion accordion-flush" id="licenses">
                    <div className="accordion-item border-bottom">
                      <div className="accordion-header d-flex justify-content-between align-items-center py-3">
                        <div className="form-check" data-bs-toggle="collapse" data-bs-target="#standard-license">
                          <input className="form-check-input" type="radio" name="license" id="license-std" checked>
                          <label className="form-check-label fw-medium text-dark" htmlFor="license-std">Standard license</label>
                        </div>
                        <h5 className="mb-0 text-accent fw-normal">$18.<small>00</small></h5>
                      </div>
                      <div className="accordion-collapse collapse show" id="standard-license" data-bs-parent="#licenses">
                        <div className="accordion-body py-0 pb-2">
                          <ul className="list-unstyled fs-sm">
                            <li className="d-flex align-items-center"><i className="ci-check-circle text-success me-1"></i><span className="fs-ms">Quality verified</span></li>
                            <li className="d-flex align-items-center"><i className="ci-check-circle text-success me-1"></i><span className="fs-ms">Use for a single project</span></li>
                            <li className="d-flex align-items-center"><i className="ci-check-circle text-success me-1"></i><span className="fs-ms">Non-paying users only</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header d-flex justify-content-between align-items-center py-3">
                        <div className="form-check" data-bs-toggle="collapse" data-bs-target="#extended-license">
                          <input className="form-check-input" type="radio" name="license" id="license-ext">
                          <label className="form-check-label fw-medium text-dark" htmlFor="license-ext">Extended license</label>
                        </div>
                        <h5 className="mb-0 text-accent fw-normal">$299.<small>00</small></h5>
                      </div>
                      <div className="accordion-collapse collapse border-0" id="extended-license" data-bs-parent="#licenses">
                        <div className="accordion-body py-0 pb-2">
                          <ul className="list-unstyled fs-sm">
                            <li className="d-flex align-items-center"><i className="ci-check-circle text-success me-1"></i><span className="fs-ms">Quality verified</span></li>
                            <li className="d-flex align-items-center"><i className="ci-check-circle text-success me-1"></i><span className="fs-ms">Use for a single project</span></li>
                            <li className="d-flex align-items-center"><i className="ci-check-circle text-success me-1"></i><span className="fs-ms">Paying users allowed</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr>
                  <button className="btn btn-primary btn-shadow d-block w-100 mt-4" type="button"><i className="ci-cart fs-lg me-2"></i>Add to Cart</button>
                  <div className="bg-secondary rounded p-3 mt-4 mb-2"><a className="d-flex align-items-center" href="#"><img className="rounded-circle" src="/img/testimonials/01.jpg" width="50" alt="Sara Palson">
                      <div className="ps-2"><span className="fs-ms text-muted">Created by</span>
                        <h6 className="fs-sm mb-0">Sara Palson</h6>
                      </div></a></div>
                  <div className="bg-secondary rounded p-3 mb-2"><i className="ci-download h5 text-muted align-middle mb-0 mt-n1 me-2"></i><span className="d-inline-block h6 mb-0 me-1">715</span><span className="fs-sm">Sales</span></div>
                  <div className="bg-secondary rounded p-3 mb-4">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div><span className="fs-ms ms-2">4.1/5</span>
                    <div className="fs-ms text-muted">based on 74 reviews</div>
                  </div>
                  <ul className="list-unstyled fs-sm">
                    <li className="d-flex justify-content-between mb-3 pb-3 border-bottom"><span className="text-dark fw-medium">Last update</span><span className="text-muted">April 27, 2019</span></li>
                    <li className="d-flex justify-content-between mb-3 pb-3 border-bottom"><span className="text-dark fw-medium">Released</span><span className="text-muted">February 13, 2019</span></li>
                    <li className="d-flex justify-content-between mb-3 pb-3 border-bottom"><span className="text-dark fw-medium">Category</span><a className="product-meta" href="#">Graphics</a></li>
                    <li className="d-flex justify-content-between mb-3 pb-3 border-bottom"><span className="text-dark fw-medium">Compatible with</span><span className="text-muted">Photoshop CS5</span></li>
                    <li className="d-flex justify-content-between mb-3 pb-3 border-bottom"><span className="text-dark fw-medium">File type</span><span className="text-muted">PSD, JPG</span></li>
                    <li className="d-flex justify-content-between pb-3 border-bottom"><span className="text-dark fw-medium">File size</span><span className="text-muted">56 MB</span></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <!-- Product description + Reviews + Comments-->
      <section className="container mb-4 mb-lg-5">
        <!-- Nav tabs-->
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item"><a className="nav-link p-4 active" href="#details" data-bs-toggle="tab" role="tab">Product details</a></li>
          <li className="nav-item"><a className="nav-link p-4" href="#reviews" data-bs-toggle="tab" role="tab">Reviews</a></li>
          <li className="nav-item"><a className="nav-link p-4" href="#comments" data-bs-toggle="tab" role="tab">Comments</a></li>
        </ul>
        <div className="tab-content pt-2">
          <!-- Product details tab-->
          <div className="tab-pane fade show active" id="details" role="tabpanel">
            <div className="row">
              <div className="col-lg-8">
                <p className="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3 className="h5 pt-2">Main features</h3>
                <ul className="fs-md">
                  <li>Nemo enim ipsam voluptatem quia voluptas sit</li>
                  <li>Ut enim ad minima veniam, quis nostrum exercitationem</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Omnis voluptas assumenda est omnis dolor</li>
                  <li>Quis autem vel eum iure reprehenderit qui in ea voluptate</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Reviews tab-->
          <div className="tab-pane fade" id="reviews" role="tabpanel">
            <!-- Reviews-->
            <div className="row pt-2 pb-3">
              <div className="col-lg-4 col-md-5">
                <h3 className="h4 mb-4">74 Reviews</h3>
                <div className="star-rating me-2"><i className="ci-star-filled fs-sm text-accent me-1"></i><i className="ci-star-filled fs-sm text-accent me-1"></i><i className="ci-star-filled fs-sm text-accent me-1"></i><i className="ci-star-filled fs-sm text-accent me-1"></i><i className="ci-star fs-sm text-muted me-1"></i></div><span className="d-inline-block align-middle">4.1 Overall rating</span>
                <p className="pt-3 fs-sm text-muted">58 out of 74 (77%)<br>Customers recommended this product</p>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="d-flex align-items-center mb-2">
                  <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted">5</span><i className="ci-star-filled fs-xs ms-1"></i></div>
                  <div className="w-100">
                    <div className="progress" style="height: 4px;">
                      <div className="progress-bar bg-success" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div><span className="text-muted ms-3">43</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted">4</span><i className="ci-star-filled fs-xs ms-1"></i></div>
                  <div className="w-100">
                    <div className="progress" style="height: 4px;">
                      <div className="progress-bar" role="progressbar" style="width: 27%; background-color: #a7e453;" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div><span className="text-muted ms-3">16</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted">3</span><i className="ci-star-filled fs-xs ms-1"></i></div>
                  <div className="w-100">
                    <div className="progress" style="height: 4px;">
                      <div className="progress-bar" role="progressbar" style="width: 17%; background-color: #ffda75;" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div><span className="text-muted ms-3">9</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted">2</span><i className="ci-star-filled fs-xs ms-1"></i></div>
                  <div className="w-100">
                    <div className="progress" style="height: 4px;">
                      <div className="progress-bar" role="progressbar" style="width: 9%; background-color: #fea569;" aria-valuenow="9" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div><span className="text-muted ms-3">4</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-nowrap me-3"><span className="d-inline-block align-middle text-muted">1</span><i className="ci-star-filled fs-xs ms-1"></i></div>
                  <div className="w-100">
                    <div className="progress" style="height: 4px;">
                      <div className="progress-bar bg-danger" role="progressbar" style="width: 4%;" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div><span className="text-muted ms-3">2</span>
                </div>
              </div>
            </div>
            <hr className="mt-4 mb-3">
            <div className="row py-4">
              <!-- Reviews list-->
              <div className="col-md-7">
                <div className="d-flex justify-content-end pb-4">
                  <div className="d-flex align-items-center flex-nowrap">
                    <label className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block" htmlFor="sort-reviews">Sort by:</label>
                    <select className="form-select form-select-sm" id="sort-reviews">
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>Popular</option>
                      <option>High rating</option>
                      <option>Low rating</option>
                    </select>
                  </div>
                </div>
                <!-- Review-->
                <div className="product-review pb-4 mb-4 border-bottom">
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center me-4 pe-2"><img className="rounded-circle" src="/img/shop/reviews/01.jpg" width="50" alt="Rafael Marquez">
                      <div className="ps-3">
                        <h6 className="fs-sm mb-0">Rafael Marquez</h6><span className="fs-ms text-muted">June 28, 2019</span>
                      </div>
                    </div>
                    <div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                      </div>
                      <div className="fs-ms text-muted">83% of users found this review helpful</div>
                    </div>
                  </div>
                  <p className="fs-md mb-2">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est...</p>
                  <ul className="list-unstyled fs-ms pt-1">
                    <li className="mb-1"><span className="fw-medium">Pros:&nbsp;</span>Consequuntur magni, voluptatem sequi, tempora</li>
                    <li className="mb-1"><span className="fw-medium">Cons:&nbsp;</span>Architecto beatae, quis autem</li>
                  </ul>
                  <div className="text-nowrap">
                    <button className="btn-like" type="button">15</button>
                    <button className="btn-dislike" type="button">3</button>
                  </div>
                </div>
                <!-- Review-->
                <div className="product-review pb-4 mb-4 border-bottom">
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center me-4 pe-2"><img className="rounded-circle" src="/img/shop/reviews/02.jpg" width="50" alt="Barbara Palson">
                      <div className="ps-3">
                        <h6 className="fs-sm mb-0">Barbara Palson</h6><span className="fs-ms text-muted">May 17, 2019</span>
                      </div>
                    </div>
                    <div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                      <div className="fs-ms text-muted">99% of users found this review helpful</div>
                    </div>
                  </div>
                  <p className="fs-md mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <ul className="list-unstyled fs-ms pt-1">
                    <li className="mb-1"><span className="fw-medium">Pros:&nbsp;</span>Consequuntur magni, voluptatem sequi, tempora</li>
                    <li className="mb-1"><span className="fw-medium">Cons:&nbsp;</span>Architecto beatae, quis autem</li>
                  </ul>
                  <div className="text-nowrap">
                    <button className="btn-like" type="button">34</button>
                    <button className="btn-dislike" type="button">1</button>
                  </div>
                </div>
                <!-- Review-->
                <div className="product-review pb-4 mb-4 border-bottom">
                  <div className="d-flex mb-3">
                    <div className="d-flex align-items-center me-4 pe-2"><img className="rounded-circle" src="/img/shop/reviews/03.jpg" width="50" alt="Daniel Adams">
                      <div className="ps-3">
                        <h6 className="fs-sm mb-0">Daniel Adams</h6><span className="fs-ms text-muted">May 8, 2019</span>
                      </div>
                    </div>
                    <div>
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                      </div>
                      <div className="fs-ms text-muted">75% of users found this review helpful</div>
                    </div>
                  </div>
                  <p className="fs-md mb-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
                  <ul className="list-unstyled fs-ms pt-1">
                    <li className="mb-1"><span className="fw-medium">Pros:&nbsp;</span>Consequuntur magni, voluptatem sequi</li>
                    <li className="mb-1"><span className="fw-medium">Cons:&nbsp;</span>Architecto beatae,  quis autem, voluptatem sequ</li>
                  </ul>
                  <div className="text-nowrap">
                    <button className="btn-like" type="button">26</button>
                    <button className="btn-dislike" type="button">9</button>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-accent" type="button"><i className="ci-reload me-2"></i>Load more reviews</button>
                </div>
              </div>
              <!-- Leave review form-->
              <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
                <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
                  <h3 className="h4 pb-2">Write a review</h3>
                  <form className="needs-validation" method="post" noValidate>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="review-name">Your name<span className="text-danger">*</span></label>
                      <input className="form-control" type="text" required id="review-name">
                      <div className="invalid-feedback">Please enter your name!</div><small className="form-text text-muted">Will be displayed on the comment.</small>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="review-email">Your email<span className="text-danger">*</span></label>
                      <input className="form-control" type="email" required id="review-email">
                      <div className="invalid-feedback">Please provide valid email address!</div><small className="form-text text-muted">Authentication only - we won't spam you.</small>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="review-rating">Rating<span className="text-danger">*</span></label>
                      <select className="form-select" required id="review-rating">
                        <option value="">Choose rating</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                        <option value="2">2 stars</option>
                        <option value="1">1 star</option>
                      </select>
                      <div className="invalid-feedback">Please choose rating!</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="review-text">Review<span className="text-danger">*</span></label>
                      <textarea className="form-control" rows="6" required id="review-text"></textarea>
                      <div className="invalid-feedback">Please write a review!</div><small className="form-text text-muted">Your review must be at least 50 characters.</small>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="review-pros">Pros</label>
                      <textarea className="form-control" rows="2" placeholder="Separated by commas" id="review-pros"></textarea>
                    </div>
                    <div className="mb-3 mb-4">
                      <label className="form-label" htmlFor="review-cons">Cons</label>
                      <textarea className="form-control" rows="2" placeholder="Separated by commas" id="review-cons"></textarea>
                    </div>
                    <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Submit a Review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Comments tab-->
          <div className="tab-pane fade" id="comments" role="tabpanel">
            <div className="row">
              <div className="col-lg-8">
                <!-- comment-->
                <div className="d-flex align-items-start py-4 border-bottom"><img className="rounded-circle" src="/img/testimonials/04.jpg" width="50" alt="Laura Willson">
                  <div className="ps-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="fs-md mb-0">Laura Willson</h6><a className="nav-link-style fs-sm fw-medium" href="#"><i className="ci-reply me-2"></i>Reply</a>
                    </div>
                    <p className="fs-md mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cupidatat non proident, sunt in culpa qui.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Sep 7, 2019</span>
                    <!-- comment reply-->
                    <div className="d-flex align-items-start border-top pt-4 mt-4"><img className="rounded-circle" src="/img/testimonials/01.jpg" width="50" alt="Sara Palson">
                      <div className="ps-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="fs-md mb-0">Sara Palson</h6>
                        </div>
                        <p className="fs-md mb-1">Egestas sed sed risus pretium quam vulputate dignissim. A diam sollicitudin tempor id eu nisl. Ut porttitor leo a diam. Bibendum at varius vel pharetra vel turpis nunc.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Sep 13, 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- comment-->
                <div className="d-flex align-items-start py-4"><img className="rounded-circle" src="/img/testimonials/02.jpg" width="50" alt="Benjamin Miller">
                  <div className="ps-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="fs-md mb-0">Benjamin Miller</h6><a className="nav-link-style fs-sm fw-medium" href="#"><i className="ci-reply me-2"></i>Reply</a>
                    </div>
                    <p className="fs-md mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cupidatat non proident, sunt in culpa qui.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Aug 15, 2019</span>
                  </div>
                </div>
                <!-- Post comment form-->
                <div className="card border-0 shadow my-2">
                  <div className="card-body">
                    <div className="d-flex align-items-start"><img className="rounded-circle border p-2" src="/img/marketplace/account/avatar-sm.png" width="50" alt="Bandicoot Studio">
                      <form className="needs-validation w-100 ms-3" noValidate>
                        <div className="mb-3">
                          <textarea className="form-control" rows="4" placeholder="Write comment..." required /></textarea>
                          <div className="invalid-feedback">Please write your comment.</div>
                        </div>
                        <button className="btn btn-primary btn-sm" type="submit">Post comment</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Related products carousel-->
      <section className="container mb-5 pb-lg-3">
        <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-4 mb-4">
          <h2 className="h3 mb-0 pt-2">Related mockups</h2>
          <div className="pt-2"><a className="btn btn-outline-accent btn-sm" href="marketplace-category.html">More mockups<i className="ci-arrow-end ms-1 me-n1"></i></a></div>
        </div>
        <!-- Carousel-->
        <div className="tns-carousel">
          <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;gutter&quot;: 16, &quot;controls&quot;: false, &quot;nav&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2 },&quot;768&quot;:{&quot;items&quot;:3}, &quot;992&quot;:{&quot;items&quot;:4}}}">
            <!-- Product-->
            <div>
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button"><i className="ci-heart"></i></button>
                  <div className="product-card-actions"><a className="btn btn-light btn-icon btn-shadow fs-base mx-2" href="#"><i className="ci-eye"></i></a>
                    <button className="btn btn-light btn-icon btn-shadow fs-base mx-2" type="button"><i className="ci-cart"></i></button>
                  </div><a className="product-thumb-overlay" href="#"></a><img src="/img/marketplace/products/02.jpg" alt="Product">
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">by <a className="product-meta fw-medium" href="#">Bandicoot Std. </a>in <a className="product-meta fw-medium" href="#">Graphics</a></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2"><a href="#">Floating Phone and Tablet Mockup</a></h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2"><i className="ci-download text-muted me-1"></i>109<span className="fs-xs ms-1">Sales</span></div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">$15.<small>00</small></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button"><i className="ci-heart"></i></button>
                  <div className="product-card-actions"><a className="btn btn-light btn-icon btn-shadow fs-base mx-2" href="#"><i className="ci-eye"></i></a>
                    <button className="btn btn-light btn-icon btn-shadow fs-base mx-2" type="button"><i className="ci-cart"></i></button>
                  </div><a className="product-thumb-overlay" href="#"></a><img src="/img/marketplace/products/03.jpg" alt="Product">
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">by <a className="product-meta fw-medium" href="#">Bandicoot Std. </a>in <a className="product-meta fw-medium" href="#">Graphics</a></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2"><a href="#">Project Devices Showcase (PSD)</a></h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2"><i className="ci-download text-muted me-1"></i>95<span className="fs-xs ms-1">Sales</span></div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">$18.<small>00</small></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button"><i className="ci-heart"></i></button>
                  <div className="product-card-actions"><a className="btn btn-light btn-icon btn-shadow fs-base mx-2" href="#"><i className="ci-eye"></i></a>
                    <button className="btn btn-light btn-icon btn-shadow fs-base mx-2" type="button"><i className="ci-cart"></i></button>
                  </div><a className="product-thumb-overlay" href="#"></a><img src="/img/marketplace/products/08.jpg" alt="Product">
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">by <a className="product-meta fw-medium" href="#">pixels </a>in <a className="product-meta fw-medium" href="#">Graphics</a></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2"><a href="#">Business Card Branding Mockup</a></h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2"><i className="ci-download text-muted me-1"></i>316<span className="fs-xs ms-1">Sales</span></div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">$17.<small>00</small></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card-alt">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button"><i className="ci-heart"></i></button>
                  <div className="product-card-actions"><a className="btn btn-light btn-icon btn-shadow fs-base mx-2" href="#"><i className="ci-eye"></i></a>
                    <button className="btn btn-light btn-icon btn-shadow fs-base mx-2" type="button"><i className="ci-cart"></i></button>
                  </div><a className="product-thumb-overlay" href="#"></a><img src="/img/marketplace/products/07.jpg" alt="Product">
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="text-muted fs-xs me-1">by <a className="product-meta fw-medium" href="#">pixels </a>in <a className="product-meta fw-medium" href="#">Graphics</a></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2"><a href="#">Gravity Device Mockups (PSD)</a></h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="fs-sm me-2"><i className="ci-download text-muted me-1"></i>234<span className="fs-xs ms-1">Sales</span></div>
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">$16.<small>00</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer-->
    <footer className="footer bg-dark pt-5">
      <div className="container pt-2 pb-3">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-4">
            <div className="text-nowrap mb-3"><a className="d-inline-block align-middle mt-n2 me-2" href="#"><img className="d-block" src="/img/footer-logo-light.png" width="117" alt="Cartzilla"></a><span className="d-inline-block align-middle h5 fw-light text-white mb-0">Marketplace</span></div>
            <p className="fs-sm text-white opacity-70 pb-1">High quality items created by our global community.</p>
            <h6 className="d-inline-block pe-3 me-3 border-end border-light"><span className="text-primary">65,478 </span><span className="fw-normal text-white">Products</span></h6>
            <h6 className="d-inline-block pe-3 me-3 border-end border-light"><span className="text-primary">2,521 </span><span className="fw-normal text-white">Members</span></h6>
            <h6 className="d-inline-block me-3"><span className="text-primary">897 </span><span className="fw-normal text-white">Vendors</span></h6>
            <div className="widget mt-4 text-md-nowrap text-center text-md-start"><a className="btn-social bs-light bs-twitter me-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-light bs-facebook me-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-light bs-dribbble me-2 mb-2" href="#"><i className="ci-dribbble"></i></a><a className="btn-social bs-light bs-behance me-2 mb-2" href="#"><i className="ci-behance"></i></a><a className="btn-social bs-light bs-pinterest me-2 mb-2" href="#"><i className="ci-pinterest"></i></a></div>
          </div>
          <!-- Mobile dropdown menu (visible on screens below md)-->
          <div className="col-12 d-md-none text-center mb-4 pb-2">
            <div className="btn-group dropdown d-block mx-auto mb-3">
              <button className="btn btn-outline-light border-light dropdown-toggle" type="button" data-bs-toggle="dropdown">Categories</button>
              <ul className="dropdown-menu my-1">
                <li><a className="dropdown-item" href="#">Photos</a></li>
                <li><a className="dropdown-item" href="#">Graphics</a></li>
                <li><a className="dropdown-item" href="#">UI Design</a></li>
                <li><a className="dropdown-item" href="#">Web Themes</a></li>
                <li><a className="dropdown-item" href="#">Fonts</a></li>
                <li><a className="dropdown-item" href="#">Add-Ons</a></li>
              </ul>
            </div>
            <div className="btn-group dropdown d-block mx-auto">
              <button className="btn btn-outline-light border-light dropdown-toggle" type="button" data-bs-toggle="dropdown">For members</button>
              <ul className="dropdown-menu my-1">
                <li><a className="dropdown-item" href="#">Licenses</a></li>
                <li><a className="dropdown-item" href="#">Return policy</a></li>
                <li><a className="dropdown-item" href="#">Payment methods</a></li>
                <li><a className="dropdown-item" href="#">Become a vendor</a></li>
                <li><a className="dropdown-item" href="#">Become an affiliate</a></li>
                <li><a className="dropdown-item" href="#">Marketplace benefits</a></li>
              </ul>
            </div>
          </div>
          <!-- Desktop menu (visible on screens above md)-->
          <div className="col-md-3 d-none d-md-block text-center text-md-start mb-4">
            <div className="widget widget-links widget-light pb-2">
              <h3 className="widget-title text-light">Categories</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Photos</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Graphics</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">UI Design</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Web Themes</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Fonts</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Add-Ons</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block text-center text-md-start mb-4">
            <div className="widget widget-links widget-light pb-2">
              <h3 className="widget-title text-light">For members</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Licenses</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Return policy</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Payment methods</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Become a vendor</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Become an affiliate</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Marketplace benefits</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Second row-->
      <div className="pt-5 bg-darker">
        <div className="container">
          <div className="widget w-100 mb-4 pb-3 text-center mx-auto" style="max-width: 28rem;">
            <h3 className="widget-title text-light pb-1">Subscribe to newsletter</h3>
            <form className="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
              <div className="input-group flex-nowrap"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required />
                <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true">
                <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabindex="-1">
              </div>
              <div className="form-text text-light opacity-50">*Receive early discount offers, updates and new products info.</div>
              <div className="subscription-status"></div>
            </form>
          </div>
          <hr className="hr-light mb-3">
          <div className="d-md-flex justify-content-between pt-4">
            <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Bandicoot Studio</a></div>
            <div className="widget widget-links widget-light pb-4">
              <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Help Center</a></li>
                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Affiliates</a></li>
                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Support</a></li>
                <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Terms &amp; Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Toolbar for handheld devices (Marketplace)-->
    <div className="handheld-toolbar">
      <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item" href="dashboard-favorites.html"><span className="handheld-toolbar-icon"><i className="ci-heart"></i></span><span className="handheld-toolbar-label">Favorites</span></a><a className="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span className="handheld-toolbar-icon"><i className="ci-menu"></i></span><span className="handheld-toolbar-label">Menu</span></a><a className="d-table-cell handheld-toolbar-item" href="marketplace-cart.html"><span className="handheld-toolbar-icon"><i className="ci-cart"></i><span className="badge bg-primary rounded-pill ms-1">3</span></span><span className="handheld-toolbar-label">$56.00</span></a></div>
    </div>
    <!-- Back To Top Button--><a className="btn-scroll-top" href="#top" data-scroll><span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i className="btn-scroll-top-icon ci-arrow-up">   </i></a>
    <!-- Vendor scrits: js libraries and plugins-->
    <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/simplebar/dist/simplebar.min.js"></script>
    <script src="vendor/tiny-slider/dist/min/tiny-slider.js"></script>
    <script src="vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
    <script src="vendor/lightgallery.js/dist/js/lightgallery.min.js"></script>
    <script src="vendor/lg-fullscreen.js/dist/lg-fullscreen.min.js"></script>
    <script src="vendor/lg-zoom.js/dist/lg-zoom.min.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>