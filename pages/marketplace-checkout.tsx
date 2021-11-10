<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Checkout</title>
    <!-- SEO Meta Tags-->
    <meta name="description" content="Cartzilla - Bootstrap E-commerce Template">
    <meta name="keywords" content="bootstrap, shop, e-commerce, market, modern, responsive,  business, mobile, bootstrap, html5, css3, js, gallery, slider, touch, creative, clean">
    <meta name="author" content="Createx Studio">
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
                <input className="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required>
                <div className="invalid-feedback">Please provide a valid email address.</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="si-password">Password</label>
                <div className="password-toggle">
                  <input className="form-control" type="password" id="si-password" required>
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
                <input className="form-control" type="text" id="su-name" placeholder="John Doe" required>
                <div className="invalid-feedback">Please fill in your name.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="su-email">Email address</label>
                <input className="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required>
                <div className="invalid-feedback">Please provide a valid email address.</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="su-password">Password</label>
                <div className="password-toggle">
                  <input className="form-control" type="password" id="su-password" required>
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox"><span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                <div className="password-toggle">
                  <input className="form-control" type="password" id="su-password-confirm" required>
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
              <div className="navbar-tool dropdown ms-2"><a className="navbar-tool-icon-box border dropdown-toggle" href="dashboard-sales.html"><img src="/img/marketplace/account/avatar-sm.png" width="32" alt="Createx Studio"></a><a className="navbar-tool-text ms-n1" href="dashboard-sales.html"><small>Createx Std.</small>$1,375.00</a>
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
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Checkout</h1>
          </div>
        </div>
      </div>
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            <!-- Content-->
            <section className="col-lg-8 pt-2 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 pe-lg-0 ps-xl-5">
                <!-- Title-->
                <h2 className="h6 border-bottom pb-3 mb-3">Billing details</h2>
                <!-- Billing detail-->
                <div className="row pb-4 gx-4 gy-3">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="mc-fn">First name <span className='text-danger'>*</span></label>
                    <input className="form-control" type="text" value="Jonathan" id="mc-fn">
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="mc-ln">Last name <span className='text-danger'>*</span></label>
                    <input className="form-control" type="text" value="Doe" id="mc-ln">
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="mc-email">Email address <span className='text-danger'>*</span></label>
                    <input className="form-control" type="email" value="contact@createx.studio" id="mc-email">
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="mc-company">Company</label>
                    <input className="form-control" type="text" value="Createx Studio" id="mc-company">
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="mc-country">Country <span className='text-danger'>*</span></label>
                    <select className="form-select" id="mc-country">
                      <option value>Select country</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Belgium">Belgium</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Madagascar" selected>Madagascar</option>
                      <option value="Spain">Spain</option>
                      <option value="UK">United Kingdom</option>
                      <option value="USA">USA</option>
                    </select>
                  </div>
                </div>
                <!-- Order preview on mobile (screens small than 991px)-->
                <div className="widget mb-3 d-lg-none">
                  <h2 className="widget-title">Order summary</h2>
                  <div className="d-flex align-items-center pb-2 border-bottom"><a className="d-block flex-shrink-0 me-2" href="marketplace-single.html"><img className="rounded-1" src="/img/marketplace/products/widget/01.jpg" width="64" alt="Product"></a>
                    <div className="ps-1">
                      <h6 className="widget-product-title"><a href="marketplace-single.html">UI Isometric Devices Pack</a></h6>
                      <div className="widget-product-meta"><span className="text-accent border-end pe-2 me-2">$23.<small>99</small></span><span className="fs-xs text-muted">Standard license</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0 me-2" href="marketplace-single.html"><img className="rounded-1" src="/img/marketplace/products/widget/02.jpg" width="64" alt="Product"></a>
                    <div className="ps-1">
                      <h6 className="widget-product-title"><a href="marketplace-single.html">Project Devices Showcase</a></h6>
                      <div className="widget-product-meta"><span className="text-accent border-end pe-2 me-2">$18.<small>99</small></span><span className="fs-xs text-muted">Standard license</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0 me-2" href="marketplace-single.html"><img className="rounded-1" src="/img/marketplace/products/widget/03.jpg" width="64" alt="Product"></a>
                    <div className="ps-1">
                      <h6 className="widget-product-title"><a href="marketplace-single.html">Gravity Devices UI Mockup</a></h6>
                      <div className="widget-product-meta"><span className="text-accent border-end pe-2 me-2">$15.<small>99</small></span><span className="fs-xs text-muted">Standard license</span></div>
                    </div>
                  </div>
                  <ul className="list-unstyled fs-sm py-3">
                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Subtotal:</span><span className="text-end">$58.<small>97</small></span></li>
                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Taxes:</span><span className="text-end">$10.<small>45</small></span></li>
                    <li className="d-flex justify-content-between align-items-center fs-base"><span className="me-2">Total:</span><span className="text-end">$69.<small>42</small></span></li>
                  </ul>
                </div>
                <!-- Payment methods accordion-->
                <div className="accordion mb-2" id="payment-method" role="tablist">
                  <div className="accordion-item">
                    <h3 className="accordion-header"><a className="accordion-button" href="#card" data-bs-toggle="collapse"><i className="ci-card fs-lg me-2 mt-n1 align-middle"></i>Pay with Credit Card</a></h3>
                    <div className="accordion-collapse collapse show" id="card" data-bs-parent="#payment-method" role="tabpanel">
                      <div className="accordion-body">
                        <p className="fs-sm">We accept following credit cards:&nbsp;&nbsp;<img className="d-inline-block align-middle" src="/img/cards.png" style="width: 187px;" alt="Cerdit Cards"></p>
                        <div className="credit-card-wrapper"></div>
                        <form className="credit-card-form row g-3">
                          <div className="col-sm-6">
                            <input className="form-control" type="text" name="number" placeholder="Card Number" required>
                          </div>
                          <div className="col-sm-6">
                            <input className="form-control" type="text" name="name" placeholder="Full Name" required>
                          </div>
                          <div className="col-sm-3">
                            <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required>
                          </div>
                          <div className="col-sm-3">
                            <input className="form-control" type="text" name="cvc" placeholder="CVC" required>
                          </div>
                          <div className="col-sm-6">
                            <button className="btn btn-primary d-block w-100" type="submit">Place order</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header"><a className="accordion-button collapsed" href="#paypal" data-bs-toggle="collapse"><i className="ci-paypal me-2 align-middle"></i>Pay with PayPal</a></h3>
                    <div className="accordion-collapse collapse" id="paypal" data-bs-parent="#payment-method" role="tabpanel">
                      <div className="accordion-body fs-sm">
                        <p><span className='fw-medium'>PayPal</span> - the safer, easier way to pay</p>
                        <button className="btn btn-primary" type="button">Checkout with PayPal</button>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header"><a className="accordion-button collapsed" href="#points" data-bs-toggle="collapse"><i className="ci-money-bag me-2"></i>Pay with my account balance</a></h3>
                    <div className="accordion-collapse collapse" id="points" data-bs-parent="#payment-method" role="tabpanel">
                      <div className="accordion-body">
                        <p>You currently have<span className="fw-medium">&nbsp;$1,375.<small>00</small></span>&nbsp;on your account balance.</p>
                        <button className="btn btn-primary" type="submit">Pay with account balance</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- Sidebar-->
            <!-- Order preview on desktop (screens larger than 991px)-->
            <aside className="col-lg-4 d-none d-lg-block ps-xl-5">
              <hr className="d-lg-none">
              <div className="p-4 h-100 ms-auto border-start">
                <div className="widget px-lg-2 py-2 mb-3">
                  <h2 className="widget-title text-center">Order summary</h2>
                  <div className="d-flex align-items-center pb-2 border-bottom"><a className="d-block flex-shrink-0 me-2" href="marketplace-single.html"><img className="rounded-1" src="/img/marketplace/products/widget/01.jpg" width="64" alt="Product"></a>
                    <div className="ps-1">
                      <h6 className="widget-product-title"><a href="marketplace-single.html">UI Isometric Devices Pack</a></h6>
                      <div className="widget-product-meta"><span className="text-accent border-end pe-2 me-2">$23.<small>00</small></span><span className="fs-xs text-muted">Standard license</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0 me-2" href="marketplace-single.html"><img className="rounded-1" src="/img/marketplace/products/widget/02.jpg" width="64" alt="Product"></a>
                    <div className="ps-1">
                      <h6 className="widget-product-title"><a href="marketplace-single.html">Project Devices Showcase</a></h6>
                      <div className="widget-product-meta"><span className="text-accent border-end pe-2 me-2">$18.<small>00</small></span><span className="fs-xs text-muted">Standard license</span></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0 me-2" href="marketplace-single.html"><img className="rounded-1" src="/img/marketplace/products/widget/03.jpg" width="64" alt="Product"></a>
                    <div className="ps-1">
                      <h6 className="widget-product-title"><a href="marketplace-single.html">Gravity Devices UI Mockup</a></h6>
                      <div className="widget-product-meta"><span className="text-accent border-end pe-2 me-2">$15.<small>00</small></span><span className="fs-xs text-muted">Standard license</span></div>
                    </div>
                  </div>
                  <ul className="list-unstyled fs-sm pt-3 pb-2 border-bottom">
                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Subtotal:</span><span className="text-end">$56.<small>00</small></span></li>
                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Taxes:</span><span className="text-end">$9.<small>30</small></span></li>
                  </ul>
                  <h3 className="fw-normal text-center my-4">$65.<small>30</small></h3>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
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
                <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required>
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
            <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
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
    <script src="vendor/card/dist/card.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>