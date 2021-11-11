<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Smartwatch Youth Edition</title>
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
    <link rel="stylesheet" media="screen" href="vendor/drift-zoom/dist/drift-basic.min.css"/>
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
      <!-- Navbar Electronics Store-->
      <header className="shadow-sm">
        <!-- Topbar-->
        <div className="topbar topbar-dark bg-dark">
          <div className="container">
            <div>
              <div className="topbar-text dropdown disable-autohide"><a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><img className="me-2" src="/img/flags/en.png" width="20" alt="English">Eng / $</a>
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
              <div className="topbar-text text-nowrap d-none d-md-inline-block border-start border-light ps-3 ms-3"><span className="text-muted me-1">Available 24/7 at</span><a className="topbar-link" href="tel:00331697720">(00) 33 169 7720</a></div>
            </div>
            <div className="topbar-text dropdown d-md-none ms-auto"><a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Wishlist / Compare / Track</a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="account-wishlist.html"><i className="ci-heart text-muted me-2"></i>Wishlist (3)</a></li>
                <li><a className="dropdown-item" href="comparison.html"><i className="ci-compare text-muted me-2"></i>Compare (3)</a></li>
                <li><a className="dropdown-item" href="order-tracking.html"><i className="ci-location text-muted me-2"></i>Order tracking</a></li>
              </ul>
            </div>
            <div className="d-none d-md-block ms-3 text-nowrap"><a className="topbar-link d-none d-md-inline-block" href="account-wishlist.html"><i className="ci-heart mt-n1"></i>Wishlist (3)</a><a className="topbar-link ms-3 ps-3 border-start border-light d-none d-md-inline-block" href="comparison.html"><i className="ci-compare mt-n1"></i>Compare (3)</a><a className="topbar-link ms-3 border-start border-light ps-3 d-none d-md-inline-block" href="order-tracking.html"><i className="ci-location mt-n1"></i>Order tracking</a></div>
          </div>
        </div>
        <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
        <div className="navbar-sticky bg-light">
          <div className="navbar navbar-expand-lg navbar-light">
            <div className="container"><a className="navbar-brand d-none d-sm-block me-3 flex-shrink-0" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none me-2" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
              <!-- Search-->
              <div className="input-group d-none d-lg-flex flex-nowrap mx-4"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input className="form-control rounded-start w-100" type="text" placeholder="Search for products">
                <select className="form-select flex-shrink-0" style="width: 10.5rem;">
                  <option>All categories</option>
                  <option>Computers</option>
                  <option>Smartphones</option>
                  <option>TV, Video, Audio</option>
                  <option>Cameras</option>
                  <option>Headphones</option>
                  <option>Wearables</option>
                  <option>Printers</option>
                  <option>Video Games</option>
                  <option>Home Music</option>
                  <option>Data Storage</option>
                </select>
              </div>
              <!-- Toolbar-->
              <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Toggle menu</span>
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a><a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                  <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
                <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span className="navbar-tool-label">4</span><i className="navbar-tool-icon ci-cart"></i></a><a className="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>$1,247.00</a>
                  <!-- Cart dropdown-->
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                      <div style="height: 15rem;" data-simplebar data-simplebar-auto-hide="false">
                        <div className="widget-cart-item pb-2 border-bottom">
                          <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="/img/shop/cart/widget/05.jpg" width="64" alt="Product"></a>
                            <div className="ps-2">
                              <h6 className="widget-product-title"><a href="shop-single-v2.html">Bluetooth Headphones</a></h6>
                              <div className="widget-product-meta"><span className="text-accent me-2">$259.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-cart-item py-2 border-bottom">
                          <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="/img/shop/cart/widget/06.jpg" width="64" alt="Product"></a>
                            <div className="ps-2">
                              <h6 className="widget-product-title"><a href="shop-single-v2.html">Cloud Security Camera</a></h6>
                              <div className="widget-product-meta"><span className="text-accent me-2">$122.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-cart-item py-2 border-bottom">
                          <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="/img/shop/cart/widget/07.jpg" width="64" alt="Product"></a>
                            <div className="ps-2">
                              <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smartphone S10</a></h6>
                              <div className="widget-product-meta"><span className="text-accent me-2">$799.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-cart-item py-2 border-bottom">
                          <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                          <div className="d-flex align-items-center"><a className="d-block flex-shrink-0" href="shop-single-v2.html"><img src="/img/shop/cart/widget/08.jpg" width="64" alt="Product"></a>
                            <div className="ps-2">
                              <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smart TV Box</a></h6>
                              <div className="widget-product-meta"><span className="text-accent me-2">$67.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="fs-sm me-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent fs-base ms-1">$1,247.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i className="ci-arrow-right ms-1 me-n1"></i></a>
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
                <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                  <input className="form-control rounded-start" type="text" placeholder="Search for products">
                </div>
                <!-- Departments menu-->
                <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside"><i className="ci-menu align-middle mt-n1 me-2"></i>Departments</a>
                    <ul className="dropdown-menu">
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-laptop opacity-60 fs-lg mt-n1 me-2"></i>Computers &amp; Accessories</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-sm-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Computers</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Laptops &amp; Tablets</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Desktop Computers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Computer External Components</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Computer Internal Components</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Networking Products (NAS)</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Single Board Computers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Desktop Barebones</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Accessories</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Monitors</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bags, Cases &amp; Sleeves</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Batteries</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Charges &amp; Adapters</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cooling Pads</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mounts</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Replacement Screens</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Security Locks</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Stands</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/07.jpg" alt="Computers &amp; Accessories"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$149.<small>80</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-mobile opacity-60 fs-lg mt-n1 me-2"></i>Smartphones &amp; Tablets</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links mb-3">
                                <h6 className="fs-base mb-3">Smartphones</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Apple iPhone</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Android Smartphones</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Phablets</a></li>
                                </ul>
                              </div>
                              <div className="widget widget-links">
                                <h6 className="fs-base">Tablets</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Apple iPad</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Android Tablets</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Tablets with Keyboard</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Accessories</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Accessory Kits</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Batteries &amp; Battery Packs</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cables</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Car Accessories</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Charges &amp; Power Adapters</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">FM Transmitters</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Lens Attachments</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mounts &amp; Stands</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Repair Kits</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Replacement Parts</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Styluses</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/09.jpg" alt="Smartphones &amp; Tablets"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$127.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-monitor opacity-60 fs-lg mt-n1 me-2"></i>TV, Video &amp; Audio</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Television &amp; Video</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">TV Sets</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Theater Systems</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DVD Players &amp; Recorders</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Blue-ray Players &amp; Recorders</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">HD DVD Players &amp; Recorders</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DVD-VCR Combos</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DTV Converters</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">AV Receivers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">AV Amplifiers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Projectors</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Projection Screens</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Satelite Television</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column pt-0 pb-4 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">TV-DTD Combos</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sound Systems</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Cinema Systems</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Streaming Media Players</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">VCRs</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Video Glasses</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Lens Attachments</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/08.jpg" alt="TV, Video &amp; Audio"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$78.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-camera opacity-60 fs-lg mt-n1 me-2"></i>Cameras, Photo &amp; Video</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Cameras &amp; Lenses</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Point &amp; Shoot Digital Cameras</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">DSLR Cameras</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mirrorless Cameras</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Body Mounted Cameras</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camcorders</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camcorder Lenses</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camera Lenses</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Macro &amp; Ringlight Flashes</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Shoe Mount Flashes</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Tripods &amp; Monopods</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Video Studio</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Accessories</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bags &amp; Cases</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Binoculars &amp; Scopes</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Batteries &amp; Chargers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cables &amp; Cords</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Camcorder Accessories</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cleaning Equipment</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Protector Foils</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Filters &amp; Accessories</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Remote Controls</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Rain Covers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Viewfinders</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/10.jpg" alt="Cameras, Photo &amp; Video"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$210.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-earphones opacity-60 fs-lg mt-n1 me-2"></i>Headphones</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Headphones</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Earbud Headphones</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Over-Ear Headphones</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">On-Ear Headphones</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bluetooth Headphones</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sports &amp; Fitness Headphones</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Noise-Cancelling Headphones</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Accessories</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cases &amp; Sleeves</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cables &amp; Cords</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Ear Pads</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Repair Kits</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Cleaning Equipment</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/11.jpg" alt="Headphones"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$35.<small>99</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-watch opacity-60 fs-lg mt-n1 me-2"></i>Wearable Electronics</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Gadgets</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Smartwatches</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Fitness Trackers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Smart Glasses</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Rings</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Virtual Reality</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Clips, Arm &amp; Wristbands</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Accessories</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/12.jpg" alt="Wearable Electronics"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$79.<small>50</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-printer opacity-60 fs-lg mt-n1 me-2"></i>Printers &amp; Ink</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links mb-3">
                                <h6 className="fs-base mb-3">By type</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">All-in-One</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Copying</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Faxing</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Photo Printing</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Printing Only</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Scanning</a></li>
                                </ul>
                              </div>
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Scanners</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Business Card Scanners</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Document Scanners</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Flatbed &amp; Photo Scanners</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Slide &amp; Negative Scanners</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base">Printers</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Dot Matrix Printers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Inkjet Printers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Label Printers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Laser Printers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Photo Printers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wide Format Printers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Plotter Printers</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/13.jpg" alt="Printers &amp; Ink"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$54.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-joystick opacity-60 fs-lg mt-n1 me-2"></i>Video Games</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Games &amp; Hardware</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Video Games</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PlayStation 4</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PlayStation 3</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Xbox One</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Xbox 360</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Nintendo Switch</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wii U</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wii</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PC</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Mac</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Nintendo 3DS &amp; 2DS</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Nintendo DS</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column pt-0 pb-4 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">PlayStation Vita</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sony PSP</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Retro Gaming</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Microconsoles</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Accessories</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Digital Games</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/14.jpg" alt="Video Games"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$19.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-speaker opacity-60 fs-lg mt-n1 me-2"></i>Speakers &amp; Home Music</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column pt-4 pb-0 py-sm-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Speakers</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bluetooth Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Bookshelf Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Ceiling &amp; In-Wall Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Center-Channel Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Floorstanding Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Outdoor Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Satellite Speakers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Sound Bars</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Subwoofers</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Surround Sound Systems</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Home Audio</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Theater</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Wireless &amp; Streaming Audio</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Stereo System Components</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Compact Radios &amp; Stereos</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Home Audio Accessories</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/16.jpg" alt="Speakers &amp; Home Music"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$43.<small>00</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown mega-dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown"><i className="ci-server opacity-60 fs-lg mt-n1 me-2"></i>HDD/SSD Data Storage</a>
                        <div className="dropdown-menu p-0">
                          <div className="d-flex flex-wrap flex-md-nowrap px-2">
                            <div className="mega-dropdown-column py-4 px-3">
                              <div className="widget widget-links">
                                <h6 className="fs-base mb-3">Data Storage</h6>
                                <ul className="widget-list">
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">External Hard Drives</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">External Solid State Drives</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">External Zip Drives</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Floppy &amp; Tape Drives</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Internal Hard Drives</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Internal Solid State Drives</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">Network Attached Storage</a></li>
                                  <li className="widget-list-item pb-1"><a className="widget-list-link" href="#">USB Flash Drives</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="mega-dropdown-column d-none d-lg-block py-4 text-center"><a className="d-block mb-2" href="#"><img src="/img/shop/departments/15.jpg" alt="HDD/SSD Data Storage"></a>
                              <div className="fs-sm mb-3">Starting from <span className='fw-medium'>$21.<small>60</small></span></div><a className="btn btn-primary btn-shadow btn-sm" href="#">See offers<i className="ci-arrow-right fs-xs ms-1"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
                  <li className="nav-item dropdown active"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
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
      <!-- Custom page title-->
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="#">Shop</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Product Page v.2</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-2">Smartwatch Youth Edition</h1>
            <div>
              <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
              </div><span className="d-inline-block fs-sm text-white opacity-70 align-middle mt-1 ms-1">74 Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bg-light shadow-lg rounded-3">
          <!-- Tabs-->
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item"><a className="nav-link py-4 px-sm-4 active" href="#general" data-bs-toggle="tab" role="tab">General <span className='d-none d-sm-inline'>Info</span></a></li>
            <li className="nav-item"><a className="nav-link py-4 px-sm-4" href="#specs" data-bs-toggle="tab" role="tab"><span className='d-none d-sm-inline'>Tech</span> Specs</a></li>
            <li className="nav-item"><a className="nav-link py-4 px-sm-4" href="#reviews" data-bs-toggle="tab" role="tab">Reviews <span className="fs-sm opacity-60">(74)</span></a></li>
          </ul>
          <div className="px-4 pt-lg-3 pb-3 mb-5">
            <div className="tab-content px-lg-3">
              <!-- General info tab-->
              <div className="tab-pane fade show active" id="general" role="tabpanel">
                <div className="row">
                  <!-- Product gallery-->
                  <div className="col-lg-7 pe-lg-0">
                    <div className="product-gallery">
                      <div className="product-gallery-preview order-sm-2">
                        <div className="product-gallery-preview-item active" id="first"><img className="image-zoom" src="/img/shop/single/gallery/05.jpg" data-zoom="/img/shop/single/gallery/05.jpg" alt="Product image">
                          <div className="image-zoom-pane"></div>
                        </div>
                        <div className="product-gallery-preview-item" id="second"><img className="image-zoom" src="/img/shop/single/gallery/06.jpg" data-zoom="/img/shop/single/gallery/06.jpg" alt="Product image">
                          <div className="image-zoom-pane"></div>
                        </div>
                        <div className="product-gallery-preview-item" id="third"><img className="image-zoom" src="/img/shop/single/gallery/07.jpg" data-zoom="/img/shop/single/gallery/07.jpg" alt="Product image">
                          <div className="image-zoom-pane"></div>
                        </div>
                        <div className="product-gallery-preview-item" id="fourth"><img className="image-zoom" src="/img/shop/single/gallery/08.jpg" data-zoom="/img/shop/single/gallery/08.jpg" alt="Product image">
                          <div className="image-zoom-pane"></div>
                        </div>
                      </div>
                      <div className="product-gallery-thumblist order-sm-1"><a className="product-gallery-thumblist-item active" href="#first"><img src="/img/shop/single/gallery/th05.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item" href="#second"><img src="/img/shop/single/gallery/th06.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item" href="#third"><img src="/img/shop/single/gallery/th07.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item" href="#fourth"><img src="/img/shop/single/gallery/th08.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item video-item" href="https://www.youtube.com/watch?v=nrQevwouWn0">
                          <div className="product-gallery-thumblist-item-text"><i className="ci-video"></i>Video</div></a></div>
                    </div>
                  </div>
                  <!-- Product details-->
                  <div className="col-lg-5 pt-4 pt-lg-0">
                    <div className="product-details ms-auto pb-3">
                      <div className="h3 fw-normal text-accent mb-3 me-1">$124.<small>99</small></div>
                      <div className="fs-sm mb-4"><span className="text-heading fw-medium me-1">Color:</span><span className="text-muted" id="colorOption">Dark blue/Orange</span></div>
                      <div className="position-relative me-n4 mb-3">
                        <div className="form-check form-option form-check-inline mb-2">
                          <input className="form-check-input" type="radio" name="color" id="color1" data-bs-label="colorOption" value="Dark blue/Orange" checked>
                          <label className="form-option-label rounded-circle" htmlFor="color1"><span className="form-option-color rounded-circle" style="background-color: #f25540;"></span></label>
                        </div>
                        <div className="form-check form-option form-check-inline mb-2">
                          <input className="form-check-input" type="radio" name="color" id="color2" data-bs-label="colorOption" value="Dark blue/Green">
                          <label className="form-option-label rounded-circle" htmlFor="color2"><span className="form-option-color rounded-circle" style="background-color: #65805b;"></span></label>
                        </div>
                        <div className="form-check form-option form-check-inline mb-2">
                          <input className="form-check-input" type="radio" name="color" id="color3" data-bs-label="colorOption" value="Dark blue/White">
                          <label className="form-option-label rounded-circle" htmlFor="color3"><span className="form-option-color rounded-circle" style="background-color: #f5f5f5;"></span></label>
                        </div>
                        <div className="form-check form-option form-check-inline mb-2">
                          <input className="form-check-input" type="radio" name="color" id="color4" data-bs-label="colorOption" value="Dark blue/Black">
                          <label className="form-option-label rounded-circle" htmlFor="color4"><span className="form-option-color rounded-circle" style="background-color: #333;"></span></label>
                        </div>
                        <div className="product-badge product-available mt-n1"><i className="ci-security-check"></i>Product available</div>
                      </div>
                      <div className="d-flex align-items-center pt-2 pb-4">
                        <select className="form-select me-3" style="width: 5rem;">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <button className="btn btn-primary btn-shadow d-block w-100" type="button"><i className="ci-cart fs-lg me-2"></i>Add to Cart</button>
                      </div>
                      <div className="d-flex mb-4">
                        <div className="w-100 me-3">
                          <button className="btn btn-secondary d-block w-100" type="button"><i className="ci-heart fs-lg me-2"></i><span className='d-none d-sm-inline'>Add to </span>Wishlist</button>
                        </div>
                        <div className="w-100">
                          <button className="btn btn-secondary d-block w-100" type="button"><i className="ci-compare fs-lg me-2"></i>Compare</button>
                        </div>
                      </div>
                      <!-- Product panels-->
                      <div className="accordion mb-4" id="productPanels">
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button" href="#shippingOptions" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="shippingOptions"><i className="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>Shipping options</a></h3>
                          <div className="accordion-collapse collapse show" id="shippingOptions" data-bs-parent="#productPanels">
                            <div className="accordion-body fs-sm">
                              <div className="d-flex justify-content-between border-bottom pb-2">
                                <div>
                                  <div className="fw-semibold text-dark">Local courier shipping</div>
                                  <div className="fs-sm text-muted">2 - 4 days</div>
                                </div>
                                <div>$16.50</div>
                              </div>
                              <div className="d-flex justify-content-between border-bottom py-2">
                                <div>
                                  <div className="fw-semibold text-dark">UPS ground shipping</div>
                                  <div className="fs-sm text-muted">4 - 6 days</div>
                                </div>
                                <div>$19.00</div>
                              </div>
                              <div className="d-flex justify-content-between pt-2">
                                <div>
                                  <div className="fw-semibold text-dark">Local pickup from store</div>
                                  <div className="fs-sm text-muted">&mdash;</div>
                                </div>
                                <div>$0.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button collapsed" href="#localStore" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="localStore"><i className="ci-location text-muted fs-lg align-middle mt-n1 me-2"></i>Find in local store</a></h3>
                          <div className="accordion-collapse collapse" id="localStore" data-bs-parent="#productPanels">
                            <div className="accordion-body">
                              <select className="form-select">
                                <option value>Select your country</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Belgium">Belgium</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Spain">Spain</option>
                                <option value="UK">United Kingdom</option>
                                <option value="USA">USA</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Sharing-->
                      <label className="form-label d-inline-block align-middle my-2 me-3">Share:</label><a className="btn-share btn-twitter me-2 my-2" href="#"><i className="ci-twitter"></i>Twitter</a><a className="btn-share btn-instagram me-2 my-2" href="#"><i className="ci-instagram"></i>Instagram</a><a className="btn-share btn-facebook my-2" href="#"><i className="ci-facebook"></i>Facebook</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Tech specs tab-->
              <div className="tab-pane fade" id="specs" role="tabpanel">
                <div className="d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                  <div className="d-flex align-items-center me-md-3"><img src="/img/shop/single/gallery/th05.jpg" width="90" alt="Product thumb">
                    <div className="ps-3">
                      <h6 className="fs-base mb-2">Smartwatch Youth Edition</h6>
                      <div className="h4 fw-normal text-accent">$124.<small>99</small></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-3">
                    <select className="form-select me-2" style="width: 5rem;">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="btn btn-primary btn-shadow me-2" type="button"><i className="ci-cart fs-lg me-sm-2"></i><span className="d-none d-sm-inline">Add to Cart</span></button>
                    <div className="me-2">
                      <button className="btn btn-secondary btn-icon" type="button" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="ci-heart fs-lg"></i></button>
                    </div>
                    <div>
                      <button className="btn btn-secondary btn-icon" type="button" data-bs-toggle="tooltip" title="Compare"><i className="ci-compare fs-lg"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Specs table-->
                <div className="row pt-2">
                  <div className="col-lg-5 col-sm-6">
                    <h3 className="h6">General specs</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Model:</span><span>Amazfit Smartwatch</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Gender:</span><span>Unisex</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Smartphone app:</span><span>Amazfit Watch</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">OS campitibility:</span><span>Android / iOS</span></li>
                    </ul>
                    <h3 className="h6">Physical specs</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Shape:</span><span>Rectangular</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Body material:</span><span>Plastics / Ceramics</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Band material:</span><span>Silicone</span></li>
                    </ul>
                    <h3 className="h6">Display</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Display type:</span><span>Color</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Display size:</span><span>1.28"</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Screen resolution:</span><span>176 x 176</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Touch screen:</span><span>No</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-sm-6 offset-lg-1">
                    <h3 className="h6">Functions</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Phone calls:</span><span>Incoming call notification</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Monitoring:</span><span>Heart rate / Physical activity</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">GPS support:</span><span>Yes</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Sensors:</span><span>Heart rate, Gyroscope, Geomagnetic, Light sensor</span></li>
                    </ul>
                    <h3 className="h6">Battery</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Battery:</span><span>Li-Pol</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Battery capacity:</span><span>190 mAh</span></li>
                    </ul>
                    <h3 className="h6">Dimensions</h3>
                    <ul className="list-unstyled fs-sm pb-2">
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Dimensions:</span><span>195 x 20 mm</span></li>
                      <li className="d-flex justify-content-between pb-2 border-bottom"><span className="text-muted">Weight:</span><span>32 g</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- Reviews tab-->
              <div className="tab-pane fade" id="reviews" role="tabpanel">
                <div className="d-md-flex justify-content-between align-items-start pb-4 mb-4 border-bottom">
                  <div className="d-flex align-items-center me-md-3"><img src="/img/shop/single/gallery/th05.jpg" width="90" alt="Product thumb">
                    <div className="ps-3">
                      <h6 className="fs-base mb-2">Smartwatch Youth Edition</h6>
                      <div className="h4 fw-normal text-accent">$124.<small>99</small></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center pt-3">
                    <select className="form-select me-2" style="width: 5rem;">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button className="btn btn-primary btn-shadow me-2" type="button"><i className="ci-cart fs-lg me-sm-2"></i><span className="d-none d-sm-inline">Add to Cart</span></button>
                    <div className="me-2">
                      <button className="btn btn-secondary btn-icon" type="button" data-bs-toggle="tooltip" title="Add to Wishlist"><i className="ci-heart fs-lg"></i></button>
                    </div>
                    <div>
                      <button className="btn btn-secondary btn-icon" type="button" data-bs-toggle="tooltip" title="Compare"><i className="ci-compare fs-lg"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Reviews-->
                <div className="row pt-2 pb-3">
                  <div className="col-lg-4 col-md-5">
                    <h2 className="h3 mb-4">74 Reviews</h2>
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
                      <div className="d-flex flex-nowrap align-items-center">
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
                          <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
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
                        <div className="mb-4">
                          <label className="form-label" htmlFor="review-cons">Cons</label>
                          <textarea className="form-control" rows="2" placeholder="Separated by commas" id="review-cons"></textarea>
                        </div>
                        <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Submit a Review</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Product description-->
      <div className="container pt-lg-3 pb-4 pb-sm-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="h3 pb-2">Choose your style</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p><img src="/img/shop/single/prod-img2.jpg" alt="Product description">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
          </div>
        </div>
      </div>
      <hr className="mb-5">
      <!-- Product carousel (You may also like)-->
      <div className="container pt-lg-2 pb-5 mb-md-3">
        <h2 className="h3 text-center pb-4">You may also like</h2>
        <div className="tns-carousel tns-controls-static tns-controls-outside">
          <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;controls&quot;: true, &quot;nav&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;500&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 18},&quot;768&quot;:{&quot;items&quot;:3, &quot;gutter&quot;: 20}, &quot;1100&quot;:{&quot;items&quot;:4, &quot;gutter&quot;: 30}}}">
            <!-- Product-->
            <div>
              <div className="card product-card card-static">
                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/66.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Smartwatches</a>
                  <h3 className="product-title fs-sm"><a href="#">Health &amp; Fitness Smartwatch</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$250.<small>00</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card card-static">
                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/67.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Smartwatches</a>
                  <h3 className="product-title fs-sm"><a href="#">Heart Rate &amp; Activity Tracker</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">$26.<small>99</small></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card card-static">
                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/64.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Smartwatches</a>
                  <h3 className="product-title fs-sm"><a href="#">Smart Watch Series 5, Aluminium</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">$349.<small>99</small></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card card-static">
                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/68.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Smartwatches</a>
                  <h3 className="product-title fs-sm"><a href="#">Health &amp; Fitness Smartwatch</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">$118.<small>00</small></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Product-->
            <div>
              <div className="card product-card card-static">
                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/69.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Smartwatches</a>
                  <h3 className="product-title fs-sm"><a href="#">Heart Rate &amp; Activity Tracker</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price text-accent">$25.<small>00</small></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Product bundles carousel (Cheaper together)-->
      <div className="container pt-lg-1 pb-5 mb-md-3">
        <div className="card card-body pt-5">
          <h2 className="h3 text-center pb-4">Cheaper together</h2>
          <div className="tns-carousel">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 1, &quot;controls&quot;: false, &quot;nav&quot;: true}">
              <div>
                <div className="row align-items-center">
                  <div className="col-md-3 col-sm-5">
                    <div className="card product-card card-static text-center mx-auto" style="max-width: 20rem;"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/70.jpg" alt="Product"></a>
                      <div className="card-body py-2"><span className="d-inline-block bg-secondary fs-ms rounded-1 py-1 px-2 mb-3">Your product</span>
                        <h3 className="product-title fs-sm"><a href="#">Smartwatch Youth Edition</a></h3>
                        <div className="product-price text-accent">$124.<small>99</small></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-2 text-center">
                    <div className="display-4 fw-light text-muted px-4">+</div>
                  </div>
                  <div className="col-md-3 col-sm-5">
                    <div className="card product-card card-static text-center mx-auto" style="max-width: 20rem;"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/72.jpg" alt="Product"></a>
                      <div className="card-body py-2"><span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">-20%</span>
                        <h3 className="product-title fs-sm"><a href="#">Smartwatch Wireless Charger</a></h3>
                        <div className="product-price"><span className="text-accent">$16.<small>00</small></span>
                          <del className="fs-sm text-muted">$20.<small>00</small></del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block col-md-1 text-center">
                    <div className="display-4 fw-light text-muted px-4">=</div>
                  </div>
                  <div className="col-md-4 pt-3 pt-md-0">
                    <div className="bg-secondary p-4 rounded-3 text-center mx-auto" style="max-width: 20rem;">
                      <div className="h3 fw-normal text-accent mb-3 me-1">$140.<small>99</small></div>
                      <button className="btn btn-primary" type="button">Purchase together</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row align-items-center">
                  <div className="col-md-3 col-sm-5">
                    <div className="card product-card card-static text-center mx-auto" style="max-width: 20rem;"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/70.jpg" alt="Product"></a>
                      <div className="card-body py-2"><span className="d-inline-block bg-secondary fs-ms rounded-1 py-1 px-2 mb-3">Your product</span>
                        <h3 className="product-title fs-sm"><a href="#">Smartwatch Youth Edition</a></h3>
                        <div className="product-price text-accent">$124.<small>99</small></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-sm-2 text-center">
                    <div className="display-4 fw-light text-muted px-4">+</div>
                  </div>
                  <div className="col-md-3 col-sm-5">
                    <div className="card product-card card-static text-center mx-auto" style="max-width: 20rem;"><a className="card-img-top d-block overflow-hidden" href="#"><img src="/img/shop/catalog/71.jpg" alt="Product"></a>
                      <div className="card-body py-2"><span className="d-inline-block bg-danger fs-ms text-white rounded-1 py-1 px-2 mb-3">-15%</span>
                        <h3 className="product-title fs-sm"><a href="#">Bluetooth Headset Air (White)</a></h3>
                        <div className="product-price"><span className="text-accent">$59.<small>00</small></span>
                          <del className="fs-sm text-muted">$69.<small>00</small></del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-block col-md-1 text-center">
                    <div className="display-4 fw-light text-muted px-4">=</div>
                  </div>
                  <div className="col-md-4 pt-3 pt-md-0">
                    <div className="bg-secondary p-4 rounded-3 text-center mx-auto" style="max-width: 20rem;">
                      <div className="h3 fw-normal text-accent mb-3 me-1">$183.<small>99</small></div>
                      <button className="btn btn-primary" type="button">Purchase together</button>
                    </div>
                  </div>
                </div>
              </div>
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
                  <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required />
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
    <script src="vendor/drift-zoom/dist/Drift.min.js"></script>
    <script src="vendor/lightgallery.js/dist/js/lightgallery.min.js"></script>
    <script src="vendor/lg-video.js/dist/lg-video.min.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>