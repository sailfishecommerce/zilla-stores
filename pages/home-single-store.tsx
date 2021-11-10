<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Single Product / Brand Store</title>
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
      <!-- Floating Navbar (Transparent version)-->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <header className="navbar navbar-sticky navbar-expand-lg navbar-light bg-light">
        <div className="container"><a className="navbar-brand d-none d-sm-block me-4 order-lg-1" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none me-2 order-lg-1" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
          <div className="navbar-toolbar d-flex align-items-center order-lg-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool ms-1 me-n1" href="#signin-modal" data-bs-toggle="modal"><span className="navbar-tool-tooltip">Account</span>
              <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div></a>
            <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="#"><i className="navbar-tool-icon ci-cart"></i></a>
              <div className="dropdown-menu dropdown-menu-end text-center py-4 px-3">
                <div style="width: 16rem;"><img className="d-inline-block mb-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACcCAIAAAB3FTesAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMxMDBDQzcwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMxMDBDQzgwRTEyMTFFQTlDN0JDNTAzRUUyMzIxMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkIwRDVENDBFMEYxMUVBOUM3QkM1MDNFRTIzMjEwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzEwMENDNjBFMTIxMUVBOUM3QkM1MDNFRTIzMjEwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk3kXrQAABTwSURBVHja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" width="40" alt="Empty cart">
                  <p className="fs-sm text-muted mb-0">Your cart is currently empty</p>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
            <!-- Models dropdown-->
            <ul className="navbar-nav navbar-mega-nav ms-lg-4 pe-lg-2 me-lg-2 pt-3 pt-lg-0">
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Models</a>
                <div className="dropdown-menu px-2 ps-0 pb-4">
                  <div className="d-flex flex-wrap flex-sm-nowrap">
                    <div className="mega-dropdown-column pt-4 px-3">
                      <div className="widget mb-2"><a className="d-block mb-3" href="#"><img src="/img/home/mono-product/models/01.jpg" alt="Model image"></a>
                        <h6 className="fs-base text-center mb-2">Solo Headphones</h6>
                      </div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3">
                      <div className="widget mb-2"><a className="d-block mb-3" href="#"><img src="/img/home/mono-product/models/02.jpg" alt="Model image"></a>
                        <h6 className="fs-base text-center mb-2">Air Earphones</h6>
                      </div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3">
                      <div className="widget mb-2"><a className="d-block mb-3" href="#"><img src="/img/home/mono-product/models/03.jpg" alt="Model image"></a>
                        <h6 className="fs-base text-center mb-2">Headphones Pro</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <!-- Primary menu-->
            <ul className="navbar-nav">
              <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
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
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</a>
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
      </header>
      <!-- Hero section-->
      <section className="bg-position-top-center bg-repeat-0 pt-5 pb-5 py-md-10" style="background-image: url(img/home/mono-product/hero-bg.jpg);">
        <div className="container pt-4 mb-3 mb-lg-0">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-8 offset-lg-1">
              <h5 className="text-light fw-normal">Wireless Bluetooth Headphones</h5>
              <h1 className="text-light mb-5">Enjoy the music like never before</h1>
              <div className="d-flex align-items-center mb-5"><a className="btn btn-primary me-grid-gutter" href="#"><i className="ci-cart fs-lg me-2"></i>Add to Cart</a><span className="h4 mb-0 text-light fw-normal">$329.<small>99</small></span></div>
              <ul className="list-unstyled text-light mb-0">
                <li className="d-flex"><i className="ci-bluetooth-circle h5 fw-normal text-light me-2"></i>
                  <div className="ps-1">Wireless connection</div>
                </li>
                <li className="d-flex"><i className="ci-sound-waves h5 fw-normal text-light me-2"></i>
                  <div className="ps-1">Best in class sound</div>
                </li>
                <li className="d-flex"><i className="ci-battery h5 fw-normal text-light me-2"></i>
                  <div className="ps-1">Up to 40 hours battery life</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- Color options-->
      <section className="container py-5">
        <div className="row align-items-center py-3 py-md-4">
          <div className="col-sm-6">
            <div className="mb-5 mb-sm-0 text-center text-sm-start" id="colorOptions">
              <div className="radio-tab-pane active" id="color-1" role="tabpanel"><img className="d-block mx-auto" src="/img/home/mono-product/colors/color-option01.jpg" alt="Color 1"></div>
              <div className="radio-tab-pane" id="color-2" role="tabpanel"><img className="d-block mx-auto" src="/img/home/mono-product/colors/color-option02.jpg" alt="Color 1"></div>
              <div className="radio-tab-pane" id="color-3" role="tabpanel"><img className="d-block mx-auto" src="/img/home/mono-product/colors/color-option03.jpg" alt="Color 1"></div>
              <div className="radio-tab-pane" id="color-4" role="tabpanel"><img className="d-block mx-auto" src="/img/home/mono-product/colors/color-option04.jpg" alt="Color 1"></div>
              <div className="radio-tab-pane" id="color-5" role="tabpanel"><img className="d-block mx-auto" src="/img/home/mono-product/colors/color-option05.jpg" alt="Color 1"></div>
              <div className="radio-tab-pane" id="color-6" role="tabpanel"><img className="d-block mx-auto" src="/img/home/mono-product/colors/color-option06.jpg" alt="Color 1"></div>
            </div>
          </div>
          <div className="col-sm-6 text-center text-sm-start">
            <h2 className="pb-4">Choose your style</h2>
            <div className="mb-3"><span className="fs-sm text-heading fw-medium me-1" id="colorOptionText">Rose Gold</span><span>&nbsp;&mdash;&nbsp; $329.<small>99</small></span></div>
            <div className="mb-4 pb-2">
              <div className="form-check form-option form-check-inline mb-2">
                <input className="form-check-input" type="radio" name="color" id="color1" data-bs-label="colorOptionText" value="Rose Gold" checked>
                <label className="form-option-label rounded-circle" htmlFor="color1" data-bs-toggle="radioTab" data-bs-target="#color-1" data-bs-parent="#colorOptions"><span className="form-option-color rounded-circle" style="background-color: #e8c4c0;"></span></label>
              </div>
              <div className="form-check form-option form-check-inline mb-2">
                <input className="form-check-input" type="radio" name="color" id="color2" data-bs-label="colorOptionText" value="Satin Silver">
                <label className="form-option-label rounded-circle" htmlFor="color2" data-bs-toggle="radioTab" data-bs-target="#color-2" data-bs-parent="#colorOptions"><span className="form-option-color rounded-circle" style="background-color: #e6e6e6;"></span></label>
              </div>
              <div className="form-check form-option form-check-inline mb-2">
                <input className="form-check-input" type="radio" name="color" id="color3" data-bs-label="colorOptionText" value="Satin Gold">
                <label className="form-option-label rounded-circle" htmlFor="color3" data-bs-toggle="radioTab" data-bs-target="#color-3" data-bs-parent="#colorOptions"><span className="form-option-color rounded-circle" style="background-color: #f7e6d5;"></span></label>
              </div>
              <div className="form-check form-option form-check-inline mb-2">
                <input className="form-check-input" type="radio" name="color" id="color4" data-bs-label="colorOptionText" value="Club Navy">
                <label className="form-option-label rounded-circle" htmlFor="color4" data-bs-toggle="radioTab" data-bs-target="#color-4" data-bs-parent="#colorOptions"><span className="form-option-color rounded-circle" style="background-image: url(img/home/mono-product/colors/color-radio01.png)"></span></label>
              </div>
              <div className="form-check form-option form-check-inline mb-2">
                <input className="form-check-input" type="radio" name="color" id="color5" data-bs-label="colorOptionText" value="Club White">
                <label className="form-option-label rounded-circle" htmlFor="color5" data-bs-toggle="radioTab" data-bs-target="#color-5" data-bs-parent="#colorOptions"><span className="form-option-color rounded-circle" style="background-image: url(img/home/mono-product/colors/color-radio02.png)"></span></label>
              </div>
              <div className="form-check form-option form-check-inline mb-2">
                <input className="form-check-input" type="radio" name="color" id="color6" data-bs-label="colorOptionText" value="Club Red">
                <label className="form-option-label rounded-circle" htmlFor="color6" data-bs-toggle="radioTab" data-bs-target="#color-6" data-bs-parent="#colorOptions"><span className="form-option-color rounded-circle" style="background-image: url(img/home/mono-product/colors/color-radio03.png)"></span></label>
              </div>
            </div><a className="btn btn-primary" href="#"><i className="ci-cart fs-lg me-2"></i>Add to Cart</a>
          </div>
        </div>
      </section>
      <!-- Divider-->
      <hr className="mt-md-2 mb-5">
      <!-- Gallery-->
      <section className="container pt-2 pt-md-5">
        <h2 className="text-center mb-5">Product gallery</h2>
        <div className="row gallery">
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="gallery-item rounded-3" href="/img/home/mono-product/gallery/01.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;"><img src="/img/home/mono-product/gallery/th01.jpg" alt="Gallery thumbnail"><span className="gallery-item-caption">Gallery image caption</span></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="gallery-item rounded-3" href="/img/home/mono-product/gallery/02.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;"><img src="/img/home/mono-product/gallery/th02.jpg" alt="Gallery thumbnail"><span className="gallery-item-caption">Gallery image caption</span></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="gallery-item rounded-3" href="/img/home/mono-product/gallery/03.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;"><img src="/img/home/mono-product/gallery/th03.jpg" alt="Gallery thumbnail"><span className="gallery-item-caption">Gallery image caption</span></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="gallery-item rounded-3" href="/img/home/mono-product/gallery/04.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;"><img src="/img/home/mono-product/gallery/th04.jpg" alt="Gallery thumbnail"><span className="gallery-item-caption">Gallery image caption</span></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="gallery-item rounded-3" href="/img/home/mono-product/gallery/05.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;"><img src="/img/home/mono-product/gallery/th05.jpg" alt="Gallery thumbnail"><span className="gallery-item-caption">Gallery image caption</span></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="gallery-item rounded-3" href="/img/home/mono-product/gallery/06.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption&lt;/h6&gt;"><img src="/img/home/mono-product/gallery/th06.jpg" alt="Gallery thumbnail"><span className="gallery-item-caption">Gallery image caption</span></a></div>
        </div>
      </section>
      <!-- Product details-->
      <section className="container py-4 py-md-5 my-2">
        <h2 className="text-center mb-4 mb-md-5 pb-2">Product details</h2>
        <div className="row text-center text-sm-start">
          <div className="col-lg-5 col-md-6 col-sm-8 offset-lg-2 offset-md-1">
            <h5 className="mb-3">Highlights</h5>
            <p className="fs-sm mb-3 mb-lg-4 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animasurel. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h5 className="mb-3">Battery</h5>
            <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
              <li>Up to 40 hours life</li>
              <li>Fast charging technology</li>
              <li>Charge via Micro-USB cable</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 offset-md-1">
            <h5 className="mb-3">General</h5>
            <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
              <li>Height: 7.8 in / 19.8 cm</li>
              <li>Weight: 7.58 oz / 215 g</li>
              <li>Form factor: On ear</li>
            </ul>
            <h5 className="mb-3">Connectivity</h5>
            <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
              <li>Wireless Bluetooth</li>
              <li>Micro-USD port</li>
            </ul>
            <h5 className="mb-3">Other features</h5>
            <ul className="list-unstyled fs-sm mb-3 mb-lg-4 pb-1">
              <li>Lightweight</li>
              <li>Durable materials</li>
            </ul>
          </div>
        </div>
      </section>
      <!-- Reviews-->
      <section className="bg-secondary pt-5" style="padding-bottom: 300px;">
        <div className="container py-md-5 mb-4 pt-3 pb-4">
          <h2 className="text-center mb-4 mb-md-5 pb-2">Customer reviews</h2>
          <div className="tns-carousel mb-3">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1, &quot;gutter&quot;:20}, &quot;576&quot;:{&quot;items&quot;:2, &quot;gutter&quot;:20},&quot;850&quot;:{&quot;items&quot;:3, &quot;gutter&quot;:20},&quot;1080&quot;:{&quot;items&quot;:4, &quot;gutter&quot;:25}}}">
              <blockquote className="mb-2">
                <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                  <div className="card-body fs-md text-muted">
                    <div className="mb-2">
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <footer className="d-flex justify-content-center pt-4">
                  <div className="d-flex align-items-center"><img className="rounded-circle" src="/img/testimonials/03.jpg" width="50" alt="Richard Davis">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Richard Davis</h6><span className="fs-ms text-muted opacity-75">Feb 14, 2020</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                  <div className="card-body fs-md text-muted">
                    <div className="mb-2">
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                    </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <footer className="d-flex justify-content-center pt-4">
                  <div className="d-flex align-items-center"><img className="rounded-circle" src="/img/testimonials/04.jpg" width="50" alt="Laura Willson">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Laura Willson</h6><span className="fs-ms text-muted opacity-75">Feb 05, 2020</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                  <div className="card-body fs-md text-muted">
                    <div className="mb-2">
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <footer className="d-flex justify-content-center pt-4">
                  <div className="d-flex align-items-center"><img className="rounded-circle" src="/img/testimonials/01.jpg" width="50" alt="Mary Grant">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Mary Alice Grant</h6><span className="fs-ms text-muted opacity-75">Jan 27, 2020</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                  <div className="card-body fs-md text-muted">
                    <div className="mb-2">
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <footer className="d-flex justify-content-center pt-4">
                  <div className="d-flex align-items-center"><img className="rounded-circle" src="/img/shop/reviews/01.jpg" width="50" alt="Rafael Marquez">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Rafael Marquez</h6><span className="fs-ms text-muted opacity-75">Dec 19, 2020</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                  <div className="card-body fs-md text-muted">
                    <div className="mb-2">
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                    </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <footer className="d-flex justify-content-center pt-4">
                  <div className="d-flex align-items-center"><img className="rounded-circle" src="/img/testimonials/02.jpg" width="50" alt="Adrian Lewis">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Adrian Lewis</h6><span className="fs-ms text-muted opacity-75">Dec 13, 2020</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                  <div className="card-body fs-md text-muted">
                    <div className="mb-2">
                      <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
                <footer className="d-flex justify-content-center pt-4">
                  <div className="d-flex align-items-center"><img className="rounded-circle" src="/img/shop/reviews/03.jpg" width="50" alt="Daniel Adams">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Daniel Adams</h6><span className="fs-ms text-muted opacity-75">Dec 04, 2020</span>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <!-- Related products-->
      <section className="container position-relative" style="margin-top: -300px; z-index: 5;">
        <div className="bg-light rounded-3 shadow-lg py-5 px-grid-gutter">
          <h2 className="text-center pt-2 pt-md-4 mb-4 mb-md-5">You may also like</h2>
          <div className="tns-carousel">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 18},&quot;768&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:4, &quot;gutter&quot;: 30}}}">
              <!-- Product-->
              <div>
                <div className="card product-card card-static"><span className="badge badge-danger badge-shadow">Sale</span><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/home/mono-product/products/01.jpg" alt="Product"></a>
                  <div className="card-body text-center py-2">
                    <h3 className="product-title fs-sm"><a href="#">Wireless Bluetooth Headphones</a></h3>
                    <div className="product-price"><span className="text-accent">$298.<small>50</small></span>
                      <del className="fs-sm text-muted">$349.<small>99</small></del>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div>
                <div className="card product-card card-static"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/home/mono-product/products/02.jpg" alt="Product"></a>
                  <div className="card-body text-center py-2">
                    <h3 className="product-title fs-sm"><a href="#">Wireless Bluetooth Headphones</a></h3>
                    <div className="product-price"><span className="text-accent">$129.<small>99</small></span></div>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div>
                <div className="card product-card card-static"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/home/mono-product/products/03.jpg" alt="Product"></a>
                  <div className="card-body text-center py-2">
                    <h3 className="product-title fs-sm"><a href="#">Wireless Bluetooth Earbuds</a></h3>
                    <div className="product-price"><span className="text-accent">$95.<small>00</small></span></div>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div>
                <div className="card product-card card-static"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/home/mono-product/products/04.jpg" alt="Product"></a>
                  <div className="card-body text-center py-2">
                    <h3 className="product-title fs-sm"><a href="#">Wireless Bluetooth Headphones</a></h3>
                    <div className="product-price"><span className="text-accent">$214.<small>99</small></span></div>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div>
                <div className="card product-card card-static"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/home/mono-product/products/05.jpg" alt="Product"></a>
                  <div className="card-body text-center py-2">
                    <h3 className="product-title fs-sm"><a href="#">Wireless Bluetooth Headphones</a></h3>
                    <div className="product-price"><span className="text-accent">$179.<small>99</small></span></div>
                  </div>
                </div>
              </div>
              <!-- Product-->
              <div>
                <div className="card product-card card-static"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/home/mono-product/products/06.jpg" alt="Product"></a>
                  <div className="card-body text-center py-2">
                    <h3 className="product-title fs-sm"><a href="#">Wireless Bluetooth Headphones</a></h3>
                    <div className="product-price"><span className="text-accent">$219.<small>99</small></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer-->
    <footer className="bg-darker" style="margin-top: -300px; padding-top: 300px;">
      <div className="container mt-2 pt-5">
        <div className="row pt-4 pb-3">
          <div className="col-lg-2 col-sm-4 pb-2 mb-4">
            <div className="mt-n1"><a className="d-inline-block align-middle" href="#"><img className="d-block mb-4" src="/img/footer-logo-light.png" width="117" alt="Cartzilla"></a></div>
            <div className="btn-group dropdown disable-autohide">
              <button className="btn btn-outline-light border-light btn-sm dropdown-toggle px-2" type="button" data-bs-toggle="dropdown"><img className="me-2" src="/img/flags/en.png" width="20" alt="English">Eng / $</button>
              <ul className="dropdown-menu my-1">
                <li className="dropdown-item">
                  <select className="form-select form-select-sm">
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="ukp">£ UKP</option>
                    <option value="jpy">¥ JPY</option>
                  </select>
                </li>
                <li><a className="dropdown-item pb-1" href="#"><img className="me-2" src="/img/flags/fr.png" width="20" alt="Français">Français</a></li>
                <li><a className="dropdown-item pb-1" href="#"><img className="me-2" src="/img/flags/de.png" width="20" alt="Deutsch">Deutsch</a></li>
                <li><a className="dropdown-item" href="#"><img className="me-2" src="/img/flags/it.png" width="20" alt="Italiano">Italiano</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Products</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Headphones</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Earphones</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Speakers</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Accessories</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Special Offers</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">For customers</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Your Account</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Shipping Rates &amp; Policy</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Refunds &amp; Replacements</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Delivery Info</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Company</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">About Us</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Contacts</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Careers</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Affiliates</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-8">
            <div className="widget pb-2 mb-4">
              <h3 className="widget-title text-light pb-1">Stay informed</h3>
              <form className="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <div className="input-group flex-nowrap"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                  <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required>
                  <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabindex="-1">
                </div>
                <div className="form-text text-light opacity-50">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                <div className="subscription-status"></div>
              </form>
            </div>
          </div>
        </div>
        <hr className="hr-light">
        <div className="row align-items-center py-4">
          <div className="col-sm-6 py-3">
            <div className="fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
          </div>
          <div className="col-sm-6 pt-3 pb-2 text-center text-sm-end"><a className="btn-social bs-light bs-twitter ms-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-light bs-facebook ms-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-light bs-instagram ms-2 mb-2" href="#"><i className="ci-instagram"></i></a><a className="btn-social bs-light bs-pinterest ms-2 mb-2" href="#"><i className="ci-pinterest"></i></a><a className="btn-social bs-light bs-youtube ms-2 mb-2" href="#"><i className="ci-youtube"></i></a></div>
        </div>
      </div>
    </footer>
    <!-- Toolbar for handheld devices (Single brand store)-->
    <div className="handheld-toolbar">
      <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item" href="#signin-modal" data-bs-toggle="modal"><span className="handheld-toolbar-icon"><i className="ci-user"></i></span><span className="handheld-toolbar-label">Account</span></a><a className="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span className="handheld-toolbar-icon"><i className="ci-menu"></i></span><span className="handheld-toolbar-label">Menu</span></a><a className="d-table-cell handheld-toolbar-item" href="#"><span className="handheld-toolbar-icon"><i className="ci-cart"></i></span><span className="handheld-toolbar-label">$0.00</span></a></div>
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