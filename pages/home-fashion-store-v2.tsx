<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Fashion Store v.2</title>
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
          </div>
        </div>
      </header>
      <!-- Hero slider-->
      <section className="tns-carousel tns-controls-lg mb-4 mb-lg-5">
        <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;responsive&quot;: {&quot;0&quot;:{&quot;nav&quot;:true, &quot;controls&quot;: false},&quot;992&quot;:{&quot;nav&quot;:false, &quot;controls&quot;: true}}}">
          <!-- Item-->
          <div className="px-lg-5" style="background-color: #f5b1b0;">
            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="/img/home/hero-slider/02.jpg" alt="Women Sportswear">
              <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style="max-width: 42rem; z-index: 10;">
                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                  <h3 className="h2 text-light fw-light pb-1 from-bottom">Hurry up! Limited time offer.</h3>
                  <h2 className="text-light display-5 from-bottom delay-1">Women Sportswear Sale</h2>
                  <p className="fs-lg text-light pb-3 from-bottom delay-2">Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...</p>
                  <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="px-lg-5" style="background-color: #3aafd2;">
            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="/img/home/hero-slider/01.jpg" alt="Summer Collection">
              <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style="max-width: 42rem; z-index: 10;">
                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                  <h3 className="h2 text-light fw-light pb-1 from-start">Has just arrived!</h3>
                  <h2 className="text-light display-5 from-start delay-1">Huge Summer Collection</h2>
                  <p className="fs-lg text-light pb-3 from-start delay-2">Swimwear, Tops, Shorts, Sunglasses &amp; much more...</p>
                  <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="px-lg-5" style="background-color: #eba170;">
            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4"><img className="d-block order-lg-2 me-lg-n5 flex-shrink-0" src="/img/home/hero-slider/03.jpg" alt="Men Accessories">
              <div className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1" style="max-width: 42rem; z-index: 10;">
                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                  <h3 className="h2 text-light fw-light pb-1 from-top">Complete your look with</h3>
                  <h2 className="text-light display-5 from-top delay-1">New Men's Accessories</h2>
                  <p className="fs-lg text-light pb-3 from-top delay-2">Hats &amp; Caps, Sunglasses, Bags &amp; much more...</p>
                  <div className="d-table scale-up delay-4 mx-auto mx-lg-0"><a className="btn btn-primary" href="shop-grid-ls.html">Shop Now<i className="ci-arrow-right ms-2 me-n1"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Category (Women)-->
      <section className="container pt-lg-3 mb-4 mb-sm-5">
        <div className="row">
          <!-- Banner with controls-->
          <div className="col-md-5">
            <div className="d-flex flex-column h-100 overflow-hidden rounded-3" style="background-color: #f6f8fb;">
              <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div>
                  <h3 className="mb-1">For Women</h3><a className="fs-md" href="shop-grid-ls.html">Shop for women<i className="ci-arrow-right fs-xs align-middle ms-1"></i></a>
                </div>
                <div className="tns-carousel-controls" id="for-women">
                  <button type="button"><i className="ci-arrow-left"></i></button>
                  <button type="button"><i className="ci-arrow-right"></i></button>
                </div>
              </div><a className="d-none d-md-block mt-auto" href="shop-grid-ls.html"><img className="d-block w-100" src="/img/home/categories/cat-lg02.jpg" alt="For Women"></a>
            </div>
          </div>
          <!-- Product grid (carousel)-->
          <div className="col-md-7 pt-4 pt-md-0">
            <div className="tns-carousel">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#for-women&quot;}">
                <!-- Carousel item-->
                <div>
                  <div className="row mx-n2">
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/09.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Cosmetics</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Metallic Lipstick (Crimson)</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$12.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/26.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shoes</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Textile Platform Sneakers</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$59.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static"><span className="badge badge-danger badge-shadow">Sale</span>
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/27.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Accessories</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Polarized Sunglasses</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$17.<small>99</small></span>
                              <del className="fs-sm text-muted">28.<small>99</small></del>
                            </div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/28.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shoes</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Leather Platform Sandals</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$79.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/29.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shorts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Short Chino Shorts</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/30.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">T-shirts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">T-shirt with Motif</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$13.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Carousel item-->
                <div>
                  <div className="row mx-n2">
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/01.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shoes</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Colorblock Sneakers</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$154.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/02.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Blouse</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Cotton Lace Blouse</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$37.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/03.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shorts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mom High Waist Shorts</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$39.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/04.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sportswear</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Sports Jacket</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$68.<small>40</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/31.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shorts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Leather Platform Sandals</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$67.<small>95</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/07.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">T-shirts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Two-Piece Bikini</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$18.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
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
      </section>
      <!-- Category (Men)-->
      <section className="container pt-lg-4 mb-4 mb-sm-5">
        <div className="row">
          <!-- Banner with controls-->
          <div className="col-md-5 order-md-2">
            <div className="d-flex flex-column h-100 overflow-hidden rounded-3" style="background-color: #f6f8fb;">
              <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div className="order-md-2">
                  <h3 className="mb-1">For Men</h3><a className="fs-md" href="shop-grid-ls.html">Shop for men<i className="ci-arrow-right fs-xs align-middle ms-1"></i></a>
                </div>
                <div className="tns-carousel-controls order-md-1" id="for-men">
                  <button type="button"><i className="ci-arrow-left"></i></button>
                  <button type="button"><i className="ci-arrow-right"></i></button>
                </div>
              </div><a className="d-none d-md-block mt-auto" href="shop-grid-ls.html"><img className="d-block w-100" src="/img/home/categories/cat-lg01.jpg" alt="For Men"></a>
            </div>
          </div>
          <!-- Product grid (carousel)-->
          <div className="col-md-7 pt-4 pt-md-0 order-md-1">
            <div className="tns-carousel">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#for-men&quot;}">
                <!-- Carousel item-->
                <div>
                  <div className="row mx-n2">
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/32.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hats &amp; Caps</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Cap with Appliqué</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$15.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/33.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">T-shirts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Regular Fit Cotton Shirt</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$19.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/34.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Accessories</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Polarized Sunglasses</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$37.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/35.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shoes</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Leather Men’s Sneakers</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$45.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static"><span className="badge badge-info badge-shadow">Popular</span>
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/36.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Bags</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Swedish Backpack</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$68.<small>95</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/37.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Accessories</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Stainless Steel Watches</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$542.<small>80</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Carousel item-->
                <div>
                  <div className="row mx-n2">
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/11.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sandals</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Soft Footbed Sandals</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$99.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/38.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shorts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Silver Ringe Cargo Short</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$45.<small>00</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/10.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shorts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Multicolor Bracelets</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$7.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/39.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">T-shirts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">3-pack T-shirts Slim Fit</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$21.<small>70</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/12.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hats &amp; Caps</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$25.<small>9</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/06.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Bags</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$79.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
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
      </section>
      <!-- Category (Kids)-->
      <section className="container pt-lg-4 mb-4 mb-md-5">
        <div className="row">
          <!-- Banner with controls-->
          <div className="col-md-5">
            <div className="d-flex flex-column h-100 overflow-hidden rounded-3" style="background-color: #f6f8fb;">
              <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                <div>
                  <h3 className="mb-1">For Kids</h3><a className="fs-md" href="shop-grid-ls.html">Shop for kids<i className="ci-arrow-right fs-xs align-middle ms-1"></i></a>
                </div>
                <div className="tns-carousel-controls" id="for-kids">
                  <button type="button"><i className="ci-arrow-left"></i></button>
                  <button type="button"><i className="ci-arrow-right"></i></button>
                </div>
              </div><a className="d-none d-md-block mt-auto" href="shop-grid-ls.html"><img className="d-block w-100" src="/img/home/categories/cat-lg03.jpg" alt="For Kids"></a>
            </div>
          </div>
          <!-- Product grid (carousel)-->
          <div className="col-md-7 pt-4 pt-md-0">
            <div className="tns-carousel">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#for-kids&quot;}">
                <!-- Carousel item-->
                <div>
                  <div className="row mx-n2">
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/40.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Clothing</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Girl’s Denim Jacket</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static"><span className="badge badge-success badge-shadow">Trending</span>
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/41.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shoes</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Textile Ballet Flats</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$16.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/42.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">T-shirts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Boys T-shirt with Motif</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$17.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/43.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Accessories</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Dotted Shoulder Bag</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$23.<small>00</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/44.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hats &amp; Caps</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">2-pack Cotton Sun Hats</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$18.<small>00</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/08.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Toys</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Soft Panda Teddy Bear</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$14.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Carousel item-->
                <div>
                  <div className="row mx-n2">
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/45.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">T-shirts</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Outlined Star Chevron Tee</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$10.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/46.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hats &amp; Caps</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Banana Embroidery Cap</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$15.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/47.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Shoes</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Big Kid Sneakers</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$42.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/48.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Clothing</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Boy's Printed Shorts</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$18.<small>99</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/49.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Toys</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Unicorn Soft Toy</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$22.<small>50</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                      <div className="card product-card card-static">
                        <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="/img/shop/catalog/50.jpg" alt="Product"></a>
                        <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Swimwear</a>
                          <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Pool Santorini Tankini</a></h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">$20.<small>00</small></span></div>
                            <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
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
      </section>
      <!-- Shop by brand-->
      <section className="container py-lg-4">
        <h2 className="h3 text-center pb-4">Shop by brand</h2>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/01.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/02.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/03.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/04.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/05.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/06.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/07.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/08.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/09.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/10.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/11.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="#"><img className="d-block mx-auto" src="/img/shop/brands/12.png" style="width: 150px;" alt="Brand"></a></div>
        </div>
      </section>
      <!-- Product widgets-->
      <section className="container pt-md-3 pb-4 pb-md-5 mb-lg-2">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">Bestsellers</h3>
              <div className="d-flex align-items-center pb-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/cart/widget/01.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$150.<small>00</small></span></div>
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/cart/widget/02.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$79.<small>50</small></span></div>
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/cart/widget/03.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$22.<small>50</small></span></div>
                </div>
              </div>
              <div className="d-flex align-items-center py-2"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/cart/widget/04.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">Cotton Polo Regular Fit</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$9.<small>00</small></span></div>
                </div>
              </div>
              <p className="mb-0">...</p><a className="fs-sm" href="shop-grid-ls.html">View more<i className="ci-arrow-right fs-xs ms-1"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-2 py-3">
            <div className="widget">
              <h3 className="widget-title">New arrivals</h3>
              <div className="d-flex align-items-center pb-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/widget/02.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">Cap with Appliqué</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$15.<small>99</small></span></div>
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/widget/01.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">Girl's T-shirt with Motif</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$14.<small>50</small></span></div>
                </div>
              </div>
              <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/widget/03.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">Leather Platform Sandals</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$78.<small>00</small></span></div>
                </div>
              </div>
              <div className="d-flex align-items-center py-2"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/widget/04.jpg" width="64" alt="Product"></a>
                <div className="ps-2">
                  <h6 className="widget-product-title"><a href="shop-single-v1.html">Regular Fit Cotton Shirt</a></h6>
                  <div className="widget-product-meta"><span className="text-accent me-2">$17.<small>99</small></span></div>
                </div>
              </div>
              <p className="mb-0">...</p><a className="fs-sm" href="shop-grid-ls.html">View more<i className="ci-arrow-right fs-xs ms-1"></i></a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 d-none d-lg-block"><a className="d-block" href="shop-grid-ls.html"><img className="d-block rounded-3" src="/img/home/banners/v-banner.jpg" alt="Promo banner"></a></div>
        </div>
      </section>
      <!-- Blog + Instagram info cards-->
      <section className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-md-6"><a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary" href="blog-list-sidebar.html">
              <div className="card-body text-center"><i className="ci-edit h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h5 mb-1">Read the blog</h3>
                <p className="text-muted fs-sm">Latest store, fashion news and trends</p>
              </div></a></div>
          <div className="col-md-6"><a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent" href="#">
              <div className="card-body text-center"><i className="ci-instagram h3 mt-2 mb-4 text-accent"></i>
                <h3 className="h5 mb-1">Follow on Instagram</h3>
                <p className="text-muted fs-sm">#ShopWithCartzilla</p>
              </div></a></div>
        </div>
      </section>
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
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>