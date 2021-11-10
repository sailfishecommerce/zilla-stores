<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Single post no sidebar</title>
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
      <!-- Navbar 3 Level (Light)-->
      <header className="shadow-sm">
        <!-- Topbar-->
        <div className="topbar topbar-dark bg-dark">
          <div className="container">
            <div className="topbar-text dropdown d-md-none"><a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful links</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="tel:00331697720"><i className="ci-support text-muted me-2"></i>(00) 33 169 7720</a></li>
                <li><a className="dropdown-item" href="order-tracking.html"><i className="ci-location text-muted me-2"></i>Order tracking</a></li>
              </ul>
            </div>
            <div className="topbar-text text-nowrap d-none d-md-inline-block"><i className="ci-support"></i><span className="text-muted me-1">Support</span><a className="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
            <div className="tns-carousel tns-controls-static d-none d-md-block">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}">
                <div className="topbar-text">Free shipping for order over $200</div>
                <div className="topbar-text">We return money within 30 days</div>
                <div className="topbar-text">Friendly 24/7 customer support</div>
              </div>
            </div>
            <div className="ms-3 text-nowrap"><a className="topbar-link me-4 d-none d-md-inline-block" href="order-tracking.html"><i className="ci-location"></i>Order tracking</a>
              <div className="topbar-text dropdown disable-autohide"><a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><img className="me-2" src="/img/flags/en.png" width="20" alt="English">Eng / $</a>
                <ul className="dropdown-menu dropdown-menu-end">
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
          </div>
        </div>
        <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
        <div className="navbar-sticky bg-light">
          <div className="navbar navbar-expand-lg navbar-light">
            <div className="container"><a className="navbar-brand d-none d-sm-block flex-shrink-0" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none flex-shrink-0 me-2" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
              <div className="input-group d-none d-lg-flex mx-4">
                <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products"><i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
              </div>
              <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="account-wishlist.html"><span className="navbar-tool-tooltip">Wishlist</span>
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a><a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                  <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
                <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span className="navbar-tool-label">4</span><i className="navbar-tool-icon ci-cart"></i></a><a className="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>$265.00</a>
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
            </div>
          </div>
          <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <!-- Search-->
                <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                  <input className="form-control rounded-start" type="text" placeholder="Search for products">
                </div>
                <!-- Departments menu-->
                <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Departments</a>
                    <div className="dropdown-menu px-2 pb-4">
                      <div className="d-flex flex-wrap flex-sm-nowrap">
                        <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                          <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="/img/shop/departments/01.jpg" alt="Clothing"></a>
                            <h6 className="fs-base mb-2">Clothing</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's clothing</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's clothing</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's clothing</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="/img/shop/departments/02.jpg" alt="Shoes"></a>
                            <h6 className="fs-base mb-2">Shoes</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's shoes</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's shoes</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's shoes</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="/img/shop/departments/03.jpg" alt="Gadgets"></a>
                            <h6 className="fs-base mb-2">Gadgets</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Smartphones &amp; Tablets</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Wearable gadgets</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">E-book readers</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap flex-sm-nowrap">
                        <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="/img/shop/departments/04.jpg" alt="Furniture"></a>
                            <h6 className="fs-base mb-2">Furniture &amp; Decor</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Home furniture</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Office furniture</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Lighting and decoration</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="/img/shop/departments/05.jpg" alt="Accessories"></a>
                            <h6 className="fs-base mb-2">Accessories</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Hats</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Sunglasses</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Bags</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                          <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="/img/shop/departments/06.jpg" alt="Entertainment"></a>
                            <h6 className="fs-base mb-2">Entertainment</h6>
                            <ul className="widget-list">
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Kid's toys</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Video games</a></li>
                              <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Outdoor / Camping</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
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
                  <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</a>
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
        </div>
      </header>
      <!-- Page Title (Light)-->
      <div className="bg-secondary py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="#">Blog</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Single post</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 mb-0">Single post no sidebar</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row justify-content-center pt-5 mt-md-2">
          <div className="col-lg-9">
            <!-- Post meta-->
            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1">
              <div className="d-flex align-items-center fs-sm mb-2"><a className="blog-entry-meta-link" href="#">
                  <div className="blog-entry-author-ava"><img src="/img/blog/meta/02.jpg" alt="Cynthia Gomez"></div>Cynthia Gomez</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Jul 17</a></div>
              <div className="fs-sm mb-2"><a className="blog-entry-meta-link text-nowrap" href="#comments" data-scroll><i className="ci-message"></i>3</a></div>
            </div>
            <!-- Gallery-->
            <div className="gallery row pb-2">
              <div className="col-sm-8"><a className="gallery-item rounded-3 mb-grid-gutter" href="/img/blog/single/01.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption #1&lt;/h6&gt;"><img src="/img/blog/single/th01.jpg" alt="Gallery image"><span className="gallery-item-caption">Gallery image caption #1</span></a></div>
              <div className="col-sm-4"><a className="gallery-item rounded-3 mb-grid-gutter" href="/img/blog/single/02.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption #2&lt;/h6&gt;"><img src="/img/blog/single/th02.jpg" alt="Gallery image"><span className="gallery-item-caption">Gallery image caption #2</span></a><a className="gallery-item rounded-3 mb-grid-gutter" href="/img/blog/single/03.jpg" data-bs-sub-html="&lt;h6 class=&quot;fs-sm text-light&quot;&gt;Gallery image caption #3&lt;/h6&gt;"><img src="/img/blog/single/th03.jpg" alt="Gallery image"><span className="gallery-item-caption">Gallery image caption #3</span></a></div>
            </div>
            <!-- Post content-->
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minima veniam, quis nostrum exercitationem occaecat cupidatat non proident.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <blockquote className="testimonial my-4 pt-4 pb-2">
              <div className="card border-0 shadow-sm"><span className="testimonial-mark"></span>
                <div className="card-body fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
              </div>
              <footer className="d-flex align-items-center justify-content-center pt-4"><img className="rounded" src="/img/testimonials/01.jpg" width="50" alt="Mary Grant">
                <div className="ps-3">
                  <h6 className="fs-sm mb-n1">Mary Alice Grant</h6><span className="fs-ms text-muted">Shopoholic</span>
                </div>
              </footer>
            </blockquote>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
            <!-- Post tags + sharing-->
            <div className="d-flex flex-wrap justify-content-between pt-2 pb-4 mb-1">
              <div className="mt-3 me-3"><a className="btn-tag me-2 mb-2" href="#">#merchandise</a><a className="btn-tag mb-2" href="#">#printed tshirts</a></div>
              <div className="mt-3"><span className="d-inline-block align-middle text-muted fs-sm me-3 mt-1 mb-2">Share post:</span><a className="btn-social bs-facebook me-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-twitter me-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-pinterest me-2 mb-2" href="#"><i className="ci-pinterest"></i></a></div>
            </div>
            <!-- Post navigation-->
            <nav className="entry-navigation" aria-label="Post navigation"><a className="entry-navigation-link" href="#" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class=&quot;d-flex align-items-center&quot;&gt;&lt;img src=&quot;img/blog/navigation/01.jpg&quot; width=&quot;60&quot; class=&quot;rounded&quot; alt=&quot;Post thumb&quot;&gt;&lt;div class=&quot;ps-3&quot;&gt;&lt;h6 class=&quot;fs-sm fw-semibold mb-0&quot;&gt;How to choose perfect shoes for running&lt;/h6&gt;&lt;span class=&quot;d-block fs-xs text-muted&quot;&gt;by Susan Mayer&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;"><i className="ci-arrow-left me-2"></i><span className="d-none d-sm-inline">Prev post</span></a><a className="entry-navigation-link" href="blog-list.html"><i className="ci-view-list me-2"></i><span className="d-none d-sm-inline">All posts</span></a><a className="entry-navigation-link" href="#" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class=&quot;d-flex align-items-center&quot;&gt;&lt;img src=&quot;img/blog/navigation/02.jpg&quot; width=&quot;60&quot; class=&quot;rounded&quot; alt=&quot;Post thumb&quot;&gt;&lt;div class=&quot;ps-3&quot;&gt;&lt;h6  class=&quot;fs-sm fw-semibold mb-0&quot;&gt;Factors behind smart watches popularity&lt;/h6&gt;&lt;span class=&quot;d-block fs-xs text-muted&quot;&gt;by Logan Coleman&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;"><span className="d-none d-sm-inline">Next post</span><i className="ci-arrow-right ms-2"></i></a></nav>
            <!-- Comments-->
            <div className="pt-2 mt-5" id="comments">
              <h2 className="h4">Comments<span className="badge bg-secondary fs-sm text-body align-middle ms-2">3</span></h2>
              <!-- comment-->
              <div className="d-flex align-items-start py-4 border-bottom"><img className="rounded-circle" src="/img/testimonials/04.jpg" width="50" alt="Laura Willson">
                <div className="ps-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fs-md mb-0">Laura Willson</h6><a className="nav-link-style fs-sm fw-medium" href="#"><i className="ci-reply me-2"></i>Reply</a>
                  </div>
                  <p className="fs-md mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cupidatat non proident, sunt in culpa qui.</p><span className="fs-ms text-muted"><i className="ci-time align-middle me-2"></i>Sep 7, 2019</span>
                  <!-- comment reply-->
                  <div className="d-flex align-items-start border-top pt-4 mt-4"><img className="rounded-circle" src="/img/testimonials/03.jpg" width="50" alt="Michael Davis">
                    <div className="ps-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="fs-md mb-0">Michael Davis</h6>
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
              <div className="card border-0 shadow mt-2 mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-start"><img className="rounded-circle" src="/img/testimonials/01.jpg" width="50" alt="Mary Alice">
                    <form className="w-100 needs-validation ms-3" noValidate>
                      <div className="mb-3">
                        <textarea className="form-control" rows="4" placeholder="Write comment..." required></textarea>
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
      <!-- Related posts-->
      <div className="bg-secondary py-5">
        <div className="container py-3">
          <h2 className="h4 text-center pb-4">You may also like</h2>
          <div className="tns-carousel">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;900&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 30}}}">
              <!-- article-->
              <article><a className="blog-entry-thumb mb-3" href="#"><img src="/img/blog/03.jpg" alt="Post"></a>
                <div className="d-flex align-items-center fs-sm mb-2"><a className="blog-entry-meta-link" href="#">by Rafael Marquez</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Sep 16</a></div>
                <h3 className="h6 blog-entry-title"><a href="#">We Launched Regular Drone Delivery in California. Watch Demo Video</a></h3>
              </article>
              <!-- article-->
              <article><a className="blog-entry-thumb mb-3" href="#"><img src="/img/blog/04.jpg" alt="Post"></a>
                <div className="d-flex align-items-center fs-sm mb-2"><a className="blog-entry-meta-link" href="#">by Emma Gallaher</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Sep 5</a></div>
                <h3 className="h6 blog-entry-title"><a href="#">Payments Made Easy. How New Technology will Affect E-Commerce Industry Worldwide?</a></h3>
              </article>
              <!-- article-->
              <article><a className="blog-entry-thumb mb-3" href="#"><img src="/img/blog/02.jpg" alt="Post"></a>
                <div className="d-flex align-items-center fs-sm mb-2"><a className="blog-entry-meta-link" href="#">by Emma Gallaher</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Aug 28</a></div>
                <h3 className="h6 blog-entry-title"><a href="#">Shopping Tips. Complete Guide of Places Where to Buy Cheap and Get Cashback</a></h3>
              </article>
              <!-- article-->
              <article><a className="blog-entry-thumb mb-3" href="#"><img src="/img/blog/01.jpg" alt="Post"></a>
                <div className="d-flex align-items-center fs-sm mb-2"><a className="blog-entry-meta-link" href="#">by Emma Gallaher</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Aug 28</a></div>
                <h3 className="h6 blog-entry-title"><a href="#">Top 10 New Trends in Suburban High Fashion</a></h3>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer-->
    <footer className="footer bg-dark pt-5">
      <div className="container">
        <div className="row pb-2">
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Shop departments</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Sneakers &amp; Athletic</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Athletic Apparel</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Sandals</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Jeans</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Shirts &amp; Tops</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Shorts</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">T-Shirts</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Swimwear</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Clogs &amp; Mules</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Bags &amp; Wallets</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Accessories</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Sunglasses &amp; Eyewear</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Watches</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Account &amp; shipping info</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Your account</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Shipping rates &amp; policies</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Refunds &amp; replacements</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Order tracking</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Delivery info</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Taxes &amp; fees</a></li>
              </ul>
            </div>
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">About us</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">About company</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Our team</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Careers</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">News</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
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
            <div className="widget pb-2 mb-4">
              <h3 className="widget-title text-light pb-1">Download our app</h3>
              <div className="d-flex flex-wrap">
                <div className="me-2 mb-2"><a className="btn-market btn-apple" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a></div>
                <div className="mb-2"><a className="btn-market btn-google" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 bg-darker">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex"><i className="ci-rocket text-primary" style="font-size: 2.25rem;"></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                  <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex"><i className="ci-currency-exchange text-primary" style="font-size: 2.25rem;"></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                  <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex"><i className="ci-support text-primary" style="font-size: 2.25rem;"></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                  <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="d-flex"><i className="ci-card text-primary" style="font-size: 2.25rem;"></i>
                <div className="ps-3">
                  <h6 className="fs-base text-light mb-1">Secure online payment</h6>
                  <p className="mb-0 fs-ms text-light opacity-50">We possess SSL / Secure сertificate</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-light mb-5">
          <div className="row pb-2">
            <div className="col-md-6 text-center text-md-start mb-4">
              <div className="text-nowrap mb-4"><a className="d-inline-block align-middle mt-n1 me-3" href="#"><img className="d-block" src="/img/footer-logo-light.png" width="117" alt="Cartzilla"></a>
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
              <div className="widget widget-links widget-light">
                <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                  <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Outlets</a></li>
                  <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Affiliates</a></li>
                  <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Support</a></li>
                  <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Privacy</a></li>
                  <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Terms of use</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end mb-4">
              <div className="mb-3"><a className="btn-social bs-light bs-twitter ms-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-light bs-facebook ms-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-light bs-instagram ms-2 mb-2" href="#"><i className="ci-instagram"></i></a><a className="btn-social bs-light bs-pinterest ms-2 mb-2" href="#"><i className="ci-pinterest"></i></a><a className="btn-social bs-light bs-youtube ms-2 mb-2" href="#"><i className="ci-youtube"></i></a></div><img className="d-inline-block" src="/img/cards-alt.png" width="187" alt="Payment methods">
            </div>
          </div>
          <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
        </div>
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
    <script src="vendor/lightgallery.js/dist/js/lightgallery.min.js"></script>
    <script src="vendor/lg-fullscreen.js/dist/lg-fullscreen.min.js"></script>
    <script src="vendor/lg-zoom.js/dist/lg-zoom.min.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>