<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Account Settings</title>
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
      <!-- Add Payment Method-->
      <form className="needs-validation modal fade" method="post" id="add-payment" tabindex="-1" noValidate>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add a payment method</h5>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-check mb-4">
                <input className="form-check-input" type="radio" id="paypal" name="payment-method">
                <label className="form-check-label" htmlFor="paypal">PayPal<img className="d-inline-block align-middle ms-2" src="/img/card-paypal.png" width="39" alt="PayPal"></label>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="radio" id="card" name="payment-method" checked>
                <label className="form-check-label" htmlFor="card">Credit / Debit card<img className="d-inline-block align-middle ms-2" src="/img/cards.png" width="187" alt="Credit card"></label>
              </div>
              <div className="row g-3 mb-2">
                <div className="col-sm-6">
                  <input className="form-control" type="text" name="number" placeholder="Card Number" required>
                  <div className="invalid-feedback">Please fill in the card number!</div>
                </div>
                <div className="col-sm-6">
                  <input className="form-control" type="text" name="name" placeholder="Full Name" required>
                  <div className="invalid-feedback">Please provide name on the card!</div>
                </div>
                <div className="col-sm-3">
                  <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required>
                  <div className="invalid-feedback">Please provide card expiration date!</div>
                </div>
                <div className="col-sm-3">
                  <input className="form-control" type="text" name="cvc" placeholder="CVC" required>
                  <div className="invalid-feedback">Please provide card CVC code!</div>
                </div>
                <div className="col-sm-6">
                  <button className="btn btn-primary d-block w-100" type="submit">Register this card</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
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
      <!-- Dashboard header-->
      <div className="page-title-overlap bg-accent pt-4">
        <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
          <div className="d-flex align-items-center pb-3">
            <div className="img-thumbnail rounded-circle position-relative flex-shrink-0" style="width: 6.375rem;"><img className="rounded-circle" src="/img/marketplace/account/avatar.png" alt="Createx Studio"></div>
            <div className="ps-3">
              <h3 className="text-light fs-lg mb-0">Createx Studio</h3><span className="d-block text-light fs-ms opacity-60 py-1">Member since November 2019</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="text-sm-end me-5">
              <div className="text-light fs-base">Total sales</div>
              <h3 className="text-light">426</h3>
            </div>
            <div className="text-sm-end">
              <div className="text-light fs-base">Seller rating</div>
              <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
              </div>
              <div className="text-light opacity-60 fs-xs">Based on 98 reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 pb-3">
        <div className="bg-light shadow-lg rounded-3 overflow-hidden">
          <div className="row">
            <!-- Sidebar-->
            <aside className="col-lg-4 pe-xl-5">
              <!-- Account menu toggler (hidden on screens larger 992px)-->
              <div className="d-block d-lg-none p-4"><a className="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse"><i className="ci-menu me-2"></i>Account menu</a></div>
              <!-- Actual menu-->
              <div className="h-100 border-end mb-2">
                <div className="d-lg-block collapse" id="account-menu">
                  <div className="bg-secondary p-4">
                    <h3 className="fs-sm mb-0 text-muted">Account</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3 active" href="dashboard-settings.html"><i className="ci-settings opacity-60 me-2"></i>Settings</a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-purchases.html"><i className="ci-basket opacity-60 me-2"></i>Purchases</a></li>
                    <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-favorites.html"><i className="ci-heart opacity-60 me-2"></i>Favorites<span className="fs-sm text-muted ms-auto">4</span></a></li>
                  </ul>
                  <div className="bg-secondary p-4">
                    <h3 className="fs-sm mb-0 text-muted">Seller Dashboard</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-sales.html"><i className="ci-dollar opacity-60 me-2"></i>Sales<span className="fs-sm text-muted ms-auto">$1,375.00</span></a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-products.html"><i className="ci-package opacity-60 me-2"></i>Products<span className="fs-sm text-muted ms-auto">5</span></a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-add-new-product.html"><i className="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a></li>
                    <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-payouts.html"><i className="ci-currency-exchange opacity-60 me-2"></i>Payouts</a></li>
                    <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                  </ul>
                  <hr>
                </div>
              </div>
            </aside>
            <!-- Content-->
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
              <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                <h2 className="h3 py-2 text-center text-sm-start">Settings</h2>
                <!-- Tabs-->
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li className="nav-item"><a className="nav-link px-0 active" href="#profile" data-bs-toggle="tab" role="tab">
                      <div className="d-none d-lg-block"><i className="ci-user opacity-60 me-2"></i>Profile</div>
                      <div className="d-lg-none text-center"><i className="ci-user opacity-60 d-block fs-xl mb-2"></i><span className="fs-ms">Profile</span></div></a></li>
                  <li className="nav-item"><a className="nav-link px-0" href="#notifications" data-bs-toggle="tab" role="tab">
                      <div className="d-none d-lg-block"><i className="ci-bell opacity-60 me-2"></i>Notifications</div>
                      <div className="d-lg-none text-center"><i className="ci-bell opacity-60 d-block fs-xl mb-2"></i><span className="fs-ms">Notifications</span></div></a></li>
                  <li className="nav-item"><a className="nav-link px-0" href="#payment" data-bs-toggle="tab" role="tab">
                      <div className="d-none d-lg-block"><i className="ci-card opacity-60 me-2"></i>Payment methods</div>
                      <div className="d-lg-none text-center"><i className="ci-card opacity-60 d-block fs-xl mb-2"></i><span className="fs-ms">Payment</span></div></a></li>
                </ul>
                <!-- Tab content-->
                <div className="tab-content">
                  <!-- Profile-->
                  <div className="tab-pane fade show active" id="profile" role="tabpanel">
                    <div className="bg-secondary rounded-3 p-4 mb-4">
                      <div className="d-flex align-items-center"><img className="rounded" src="/img/marketplace/account/avatar.png" width="90" alt="Createx Studio">
                        <div className="ps-3">
                          <button className="btn btn-light btn-shadow btn-sm mb-2" type="button"><i className="ci-loading me-2"></i>Change <span className='d-none d-sm-inline'>avatar</span></button>
                          <div className="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                        </div>
                      </div>
                    </div>
                    <div className="row gx-4 gy-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-fn">First Name</label>
                        <input className="form-control" type="text" id="dashboard-fn" value="John">
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-ln">Last Name</label>
                        <input className="form-control" type="text" id="dashboard-ln" value="Doe">
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-email">Email address</label>
                        <input className="form-control" type="text" id="dashboard-email" value="contact@example.com" disabled>
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-profile-name">Profile Name</label>
                        <input className="form-control" type="text" id="dashboard-profile-name" value="Createx Studio">
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-country">Country</label>
                        <select className="form-select" id="dashboard-country">
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
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-city">City</label>
                        <input className="form-control" type="text" id="dashboard-city" value="Antananarivo">
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-address">Address Line</label>
                        <input className="form-control" type="text" id="dashboard-address" value="Some Cool Street, 22/1">
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="dashboard-zip">ZIP Code</label>
                        <input className="form-control" type="text" id="dashboard-zip">
                      </div>
                      <div className="col-12">
                        <hr className="mt-2 mb-4">
                        <div className="d-sm-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="freelancer" checked>
                            <label className="form-check-label" htmlFor="freelancer">I'm available for freelance</label>
                          </div>
                          <button className="btn btn-primary mt-3 mt-sm-0" type="button">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Notifications-->
                  <div className="tab-pane fade" id="notifications" role="tabpanel">
                    <div className="bg-secondary rounded-3 p-4">
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="nf-disable-all" data-master-checkbox-htmlFor="#notifocation-settings">
                        <label className="form-check-label fw-medium" htmlFor="nf-disable-all">Enable/disable all notifications</label>
                      </div>
                    </div>
                    <div id="notifocation-settings">
                      <div className="border-bottom p-4">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="nf-product-sold" checked>
                          <label className="form-check-label" htmlFor="nf-product-sold">Product sold notifications</label>
                        </div>
                        <div className="form-text">Send an email when someone purchased one of my products</div>
                      </div>
                      <div className="border-bottom p-4">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="nf-product-updated" checked>
                          <label className="form-check-label" htmlFor="nf-product-updated">Product update notifications</label>
                        </div>
                        <div className="form-text">Send an email when a product I've purchased is updated</div>
                      </div>
                      <div className="border-bottom p-4">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="nf-product-comment" checked>
                          <label className="form-check-label" htmlFor="nf-product-comment">Product comment notifications</label>
                        </div>
                        <div className="form-text">Send an email when someone comments on one of my products</div>
                      </div>
                      <div className="border-bottom p-4">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="nf-product-review" checked>
                          <label className="form-check-label" htmlFor="nf-product-review">Product review notification</label>
                        </div>
                        <div className="form-text">Send an email when someone leaves a review with their rating</div>
                      </div>
                      <div className="border-bottom p-4">
                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="nf-daily-summary">
                          <label className="form-check-label" htmlFor="nf-daily-summary">Daily summary emails</label>
                        </div>
                        <div className="form-text">Send me a daily summary of all products sold, commented or reviewed</div>
                      </div>
                    </div>
                    <div className="text-sm-end mt-4">
                      <button className="btn btn-primary" type="button">Save changes</button>
                    </div>
                  </div>
                  <!-- Payment methods-->
                  <div className="tab-pane fade" id="payment" role="tabpanel">
                    <div className="bg-secondary rounded-3 p-4 mb-4">
                      <p className="fs-sm text-muted mb-0">Primary payment method is used by default</p>
                    </div>
                    <div className="table-responsive fs-md mb-4">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Your credit / debit cards</th>
                            <th>Name on card</th>
                            <th>Expires on</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-3 align-middle">
                              <div className="d-flex align-items-center"><img src="/img/card-visa.png" width="39" alt="Visa">
                                <div className="ps-2"><span className="fw-medium text-heading me-1">Visa</span>ending in 4999<span className="align-middle badge badge-info ms-2">Primary</span></div>
                              </div>
                            </td>
                            <td className="py-3 align-middle">John doe</td>
                            <td className="py-3 align-middle">08 / 2019</td>
                            <td className="py-3 align-middle"><a className="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="Edit"><i className="ci-edit"></i></a><a className="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="Remove">
                                <div className="ci-trash"></div></a></td>
                          </tr>
                          <tr>
                            <td className="py-3 align-middle">
                              <div className="d-flex align-items-center"><img src="/img/card-master.png" width="39" alt="MesterCard">
                                <div className="ps-2"><span className="fw-medium text-heading me-1">MasterCard</span>ending in 0015</div>
                              </div>
                            </td>
                            <td className="py-3 align-middle">John doe</td>
                            <td className="py-3 align-middle">11 / 2021</td>
                            <td className="py-3 align-middle"><a className="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="Edit"><i className="ci-edit"></i></a><a className="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="Remove">
                                <div className="ci-trash"></div></a></td>
                          </tr>
                          <tr>
                            <td className="py-3 align-middle">
                              <div className="d-flex align-items-center"><img src="/img/card-paypal.png" width="39" alt="PayPal">
                                <div className="ps-2"><span className="fw-medium text-heading me-1">PayPal</span>j.doe@example.com</div>
                              </div>
                            </td>
                            <td className="py-3 align-middle">&mdash;</td>
                            <td className="py-3 align-middle">&mdash;</td>
                            <td className="py-3 align-middle"><a className="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="Edit"><i className="ci-edit"></i></a><a className="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="Remove">
                                <div className="ci-trash"></div></a></td>
                          </tr>
                          <tr>
                            <td className="py-3 align-middle">
                              <div className="d-flex align-items-center"><img src="/img/card-visa.png" width="39" alt="Visa">
                                <div className="ps-2"><span className="fw-medium text-heading me-1">Visa</span>ending in 6073</div>
                              </div>
                            </td>
                            <td className="py-3 align-middle">John doe</td>
                            <td className="py-3 align-middle">09 / 2021</td>
                            <td className="py-3 align-middle"><a className="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="Edit"><i className="ci-edit"></i></a><a className="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="Remove">
                                <div className="ci-trash"></div></a></td>
                          </tr>
                          <tr>
                            <td className="py-3 align-middle">
                              <div className="d-flex align-items-center"><img src="/img/card-visa.png" width="39" alt="Visa">
                                <div className="ps-2"><span className="fw-medium text-heading me-1">Visa</span>ending in 9791</div>
                              </div>
                            </td>
                            <td className="py-3 align-middle">John doe</td>
                            <td className="py-3 align-middle">05 / 2021</td>
                            <td className="py-3 align-middle"><a className="nav-link-style me-2" href="#" data-bs-toggle="tooltip" title="Edit"><i className="ci-edit"></i></a><a className="nav-link-style text-danger" href="#" data-bs-toggle="tooltip" title="Remove">
                                <div className="ci-trash"></div></a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-sm-end"><a className="btn btn-primary" href="#add-payment" data-bs-toggle="modal">Add payment method</a></div>
                  </div>
                </div>
              </div>
            </section>
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
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>