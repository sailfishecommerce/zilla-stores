<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Multipurpose Bootstrap E-commerce Template</title>
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
      <!-- Navbar 1 Level (Light)-->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <header className="bg-light shadow-sm navbar-sticky">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container"><a className="navbar-brand d-none d-sm-block me-4 order-lg-1" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none me-2 order-lg-1" href="index.html" style="min-width: 4.625rem;"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
            <div className="navbar-toolbar d-flex align-items-center order-lg-3">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool d-none d-lg-flex" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#searchBox" role="button" aria-expanded="false" aria-controls="searchBox"><span className="navbar-tool-tooltip">Search</span>
                <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="account-wishlist.html"><span className="navbar-tool-tooltip">Wishlist</span>
                <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a><a className="navbar-tool ms-1 me-n1" href="#signin-modal" data-bs-toggle="modal"><span className="navbar-tool-tooltip">Account</span>
                <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div></a>
              <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span className="navbar-tool-label">4</span><i className="navbar-tool-icon ci-cart"></i></a>
                <!-- Cart dropdown-->
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                    <div style="height: 15rem;" data-simplebar data-simplebar-auto-hide="false">
                      <div className="widget-cart-item pb-2 border-bottom">
                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="shop-single-v1.html"><img src="/img/shop/cart/widget/01.jpg" width="64" alt="Product"></a>
                          <div className="ps-2">
                            <h6 className="widget-product-title"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h6>
                            <div className="widget-product-meta"><span className="text-accent me-2">$150.<small>00</small></span><span className="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="shop-single-v1.html"><img src="/img/shop/cart/widget/02.jpg" width="64" alt="Product"></a>
                          <div className="ps-2">
                            <h6 className="widget-product-title"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h6>
                            <div className="widget-product-meta"><span className="text-accent me-2">$79.<small>50</small></span><span className="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="shop-single-v1.html"><img src="/img/shop/cart/widget/03.jpg" width="64" alt="Product"></a>
                          <div className="ps-2">
                            <h6 className="widget-product-title"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h6>
                            <div className="widget-product-meta"><span className="text-accent me-2">$22.<small>50</small></span><span className="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-cart-item py-2 border-bottom">
                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="shop-single-v1.html"><img src="/img/shop/cart/widget/04.jpg" width="64" alt="Product"></a>
                          <div className="ps-2">
                            <h6 className="widget-product-title"><a href="shop-single-v1.html">Cotton Polo Regular Fit</a></h6>
                            <div className="widget-product-meta"><span className="text-accent me-2">$9.<small>00</small></span><span className="text-muted">x 1</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div className="fs-sm me-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent fs-base ms-1">$265.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i className="ci-arrow-right ms-1 me-n1"></i></a>
                    </div><a className="btn btn-primary btn-sm d-block w-100" href="checkout-details.html"><i className="ci-card me-2 fs-base align-middle"></i>Checkout</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
              <!-- Search-->
              <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                <input className="form-control rounded-start" type="text" placeholder="Search for products">
              </div>
              <!-- Primary menu-->
              <ul className="navbar-nav">
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v1.html"><span className="d-block text-heading">Fashion Store v.1</span><small className="d-block text-muted">Classic shop layout</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v1.html" style="width: 250px;"><img src="/img/home/preview/th01.jpg" alt="Fashion Store v.1"></a></div>
                    </li>
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-electronics-store.html"><span className="d-block text-heading">Electronics Store</span><small className="d-block text-muted">Slider + Promo banners</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-electronics-store.html" style="width: 250px;"><img src="/img/home/preview/th03.jpg" alt="Electronics Store"></a></div>
                    </li>
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-marketplace.html"><span className="d-block text-heading">Marketplace</span><small className="d-block text-muted">Multi-vendor, digital goods</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-marketplace.html" style="width: 250px;"><img src="/img/home/preview/th04.jpg" alt="Marketplace"></a></div>
                    </li>
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-grocery-store.html"><span className="d-block text-heading">Grocery Store</span><small className="d-block text-muted">Full width + Side menu</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-grocery-store.html" style="width: 250px;"><img src="/img/home/preview/th06.jpg" alt="Grocery Store"></a></div>
                    </li>
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-food-delivery.html"><span className="d-block text-heading">Food Delivery Service</span><small className="d-block text-muted">Food &amp; Beverages delivery</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-food-delivery.html" style="width: 250px;"><img src="/img/home/preview/th07.jpg" alt="Food Delivery Service"></a></div>
                    </li>
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2 border-bottom" href="home-fashion-store-v2.html"><span className="d-block text-heading">Fashion Store v.2</span><small className="d-block text-muted">Slider + Featured categories</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-fashion-store-v2.html" style="width: 250px;"><img src="/img/home/preview/th02.jpg" alt="Fashion Store v.2"></a></div>
                    </li>
                    <li className="dropdown position-static mb-0"><a className="dropdown-item py-2" href="home-single-store.html"><span className="d-block text-heading">Single Product Store</span><small className="d-block text-muted">Single product / mono brand</small></a>
                      <div className="dropdown-menu h-100 animation-none mt-0 p-3"><a className="d-block" href="home-single-store.html" style="width: 250px;"><img src="/img/home/preview/th05.jpg" alt="Single Product / Brand Store"></a></div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                  <div className="dropdown-menu p-0">
                    <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                      <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div className="widget widget-links mb-4">
                          <h6 className="fs-base mb-3">Shop layouts</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                          </ul>
                        </div>
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Marketplace</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Shop pages</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="shop-cart.html">Cart</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="comparison.html">Product Comparison</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3">
                        <div className="widget widget-links mb-4">
                          <h6 className="fs-base mb-3">Grocery store</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                          </ul>
                        </div>
                        <div className="widget widget-links">
                          <h6 className="fs-base mb-3">Food Delivery</h6>
                          <ul className="widget-list">
                            <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                            <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Account</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop User Account</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="account-orders.html">Orders History</a></li>
                        <li><a className="dropdown-item" href="account-profile.html">Profile Settings</a></li>
                        <li><a className="dropdown-item" href="account-address.html">Account Addresses</a></li>
                        <li><a className="dropdown-item" href="account-payment.html">Payment Methods</a></li>
                        <li><a className="dropdown-item" href="account-wishlist.html">Wishlist</a></li>
                        <li><a className="dropdown-item" href="account-tickets.html">My Tickets</a></li>
                        <li><a className="dropdown-item" href="account-single-ticket.html">Single Ticket</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Vendor Dashboard</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="dashboard-settings.html">Settings</a></li>
                        <li><a className="dropdown-item" href="dashboard-purchases.html">Purchases</a></li>
                        <li><a className="dropdown-item" href="dashboard-favorites.html">Favorites</a></li>
                        <li><a className="dropdown-item" href="dashboard-sales.html">Sales</a></li>
                        <li><a className="dropdown-item" href="dashboard-products.html">Products</a></li>
                        <li><a className="dropdown-item" href="dashboard-add-new-product.html">Add New Product</a></li>
                        <li><a className="dropdown-item" href="dashboard-payouts.html">Payouts</a></li>
                      </ul>
                    </li>
                    <li><a className="dropdown-item" href="account-signin.html">Sign In / Sign Up</a></li>
                    <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Navbar Variants</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="navbar-1-level-light.html">1 Level Light</a></li>
                        <li><a className="dropdown-item" href="navbar-1-level-dark.html">1 Level Dark</a></li>
                        <li><a className="dropdown-item" href="navbar-2-level-light.html">2 Level Light</a></li>
                        <li><a className="dropdown-item" href="navbar-2-level-dark.html">2 Level Dark</a></li>
                        <li><a className="dropdown-item" href="navbar-3-level-light.html">3 Level Light</a></li>
                        <li><a className="dropdown-item" href="navbar-3-level-dark.html">3 Level Dark</a></li>
                        <li><a className="dropdown-item" href="home-electronics-store.html">Electronics Store</a></li>
                        <li><a className="dropdown-item" href="home-marketplace.html">Marketplace</a></li>
                        <li><a className="dropdown-item" href="home-grocery-store.html">Side Menu (Grocery)</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="about.html">About Us</a></li>
                    <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Help Center</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="help-topics.html">Help Topics</a></li>
                        <li><a className="dropdown-item" href="help-single-topic.html">Single Topic</a></li>
                        <li><a className="dropdown-item" href="help-submit-request.html">Submit a Request</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">404 Not Found</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="404-simple.html">404 - Simple Text</a></li>
                        <li><a className="dropdown-item" href="404-illustration.html">404 - Illustration</a></li>
                      </ul>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="sticky-footer.html">Sticky Footer Demo</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog List Layouts</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="blog-list-sidebar.html">List with Sidebar</a></li>
                        <li><a className="dropdown-item" href="blog-list.html">List no Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog Grid Layouts</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                        <li><a className="dropdown-item" href="blog-grid.html">Grid no Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Single Post Layouts</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                        <li><a className="dropdown-item" href="blog-single.html">Article no Sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Docs / Components</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="docs/dev-setup.html">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1"><i className="ci-book"></i></div>
                          <div className="ms-2"><span className="d-block text-heading">Documentation</span><small className="d-block text-muted">Kick-start customization</small></div>
                        </div></a></li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="components/typography.html">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1"><i className="ci-server"></i></div>
                          <div className="ms-2"><span className="d-block text-heading">Components<span className="badge bg-info ms-2">40+</span></span><small className="d-block text-muted">Faster page building</small></div>
                        </div></a></li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="docs/changelog.html">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1"><i className="ci-edit"></i></div>
                          <div className="ms-2"><span className="d-block text-heading">Changelog<span className="badge bg-success ms-2">v2.3.0</span></span><small className="d-block text-muted">Regular updates</small></div>
                        </div></a></li>
                    <li className="dropdown-divider"></li>
                    <li><a className="dropdown-item" href="mailto:support@createx.studio">
                        <div className="d-flex">
                          <div className="lead text-muted pt-1"><i className="ci-help"></i></div>
                          <div className="ms-2"><span className="d-block text-heading">Support</span><small className="d-block text-muted">support@createx.studio</small></div>
                        </div></a></li>
                  </ul>
                </li>
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
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 pt-lg-2">
            <h1 className="h2">Sticky Footer Demo</h1>
            <p>See how footer sticks to the bottom when there is little content on the page. To achive such behavior wrap all the page content except <code>&lt;footer&gt;</code> with <code>&lt;main className="page-wrapper"&gt;...&lt;/main&gt;</code> and add <code>footer</code> class to <code>&lt;footer&gt;</code>.</p>
          </div>
        </div>
      </div>
    </main>
    <footer className="footer bg-dark">
      <div className="container py-5 text-center">
        <h5 className="text-light mb-0">I'm a sticky footer</h5>
      </div>
    </footer>
    <!-- Toolbar for handheld devices (Default)-->
    <div className="handheld-toolbar">
      <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item" href="account-wishlist.html"><span className="handheld-toolbar-icon"><i className="ci-heart"></i></span><span className="handheld-toolbar-label">Wishlist</span></a><a className="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span className="handheld-toolbar-icon"><i className="ci-menu"></i></span><span className="handheld-toolbar-label">Menu</span></a><a className="d-table-cell handheld-toolbar-item" href="shop-cart.html"><span className="handheld-toolbar-icon"><i className="ci-cart"></i><span className="badge bg-primary rounded-pill ms-1">4</span></span><span className="handheld-toolbar-label">$265.00</span></a></div>
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