<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Product comparison</title>
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
      <!-- Page Title (Dark)-->
      <div className="bg-dark py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">Comparison</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Product comparison</h1>
          </div>
        </div>
      </div>
      <div className="container py-5 mb-2">
        <div className="table-responsive">
          <table className="table table-bordered table-layout-fixed fs-sm" style="min-width: 45rem;">
            <thead>
              <tr>
                <td className="align-middle">
                  <select className="form-select" id="compare-criteria" data-filter-trigger>
                    <option value="all">Comparison criteria *</option>
                    <option value="summary">Summary</option>
                    <option value="general">General</option>
                    <option value="multimedia">Multimedia</option>
                    <option value="performance">Performance</option>
                    <option value="design">Design</option>
                    <option value="display">Display</option>
                    <option value="storage">Storage</option>
                    <option value="camera">Camera</option>
                    <option value="battery">Battery</option>
                    <option value="price">Price &amp; rating</option>
                  </select>
                  <div className="form-text">* Choose criteria to filter table below.</div>
                  <div className="pt-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="differences">
                      <label className="form-check-label" htmlFor="differences">Show differences only</label>
                    </div>
                  </div>
                </td>
                <td className="text-center px-4 pb-4"><a className="btn btn-sm d-block w-100 text-danger mb-2" href="#"><i className="ci-trash me-1"></i>Remove</a><a className="d-inline-block mb-3" href="shop-single-v2.html"><img src="/img/shop/comparison/01.jpg" width="80" alt="Apple iPhone Xs Max"></a>
                  <h3 className="product-title fs-sm"><a href="shop-single-v2.html">Apple iPhone Xs Max</a></h3>
                  <button className="btn btn-primary btn-sm" type="button">Add to Cart</button>
                </td>
                <td className="text-center px-4 pb-4"><a className="btn btn-sm d-block w-100 text-danger mb-2" href="#"><i className="ci-trash me-1"></i>Remove</a><a className="d-inline-block mb-3" href="shop-single-v2.html"><img src="/img/shop/comparison/02.jpg" width="80" alt="Google Pixel 3 XL"></a>
                  <h3 className="product-title fs-sm"><a href="shop-single-v2.html">Google Pixel 3 XL</a></h3>
                  <button className="btn btn-primary btn-sm" type="button">Add to Cart</button>
                </td>
                <td className="text-center px-4 pb-4"><a className="btn btn-sm d-block w-100 text-danger mb-2" href="#"><i className="ci-trash me-1"></i>Remove</a><a className="d-inline-block mb-3" href="shop-single-v2.html"><img src="/img/shop/comparison/03.jpg" width="80" alt="Samsung Galaxy S10+"></a>
                  <h3 className="product-title fs-sm"><a className="comparison-item-title" href="shop-single-v2.html">Samsung Galaxy S10+</a></h3>
                  <button className="btn btn-primary btn-sm" type="button">Add to Cart</button>
                </td>
              </tr>
            </thead>
            <tbody id="summary" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Summary</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Performance</th>
                <td>Hexa Core</td>
                <td>Octa Core</td>
                <td>Octa Core</td>
              </tr>
              <tr>
                <th className="text-dark">Display</th>
                <td>6.5-inch</td>
                <td>6.3-inch</td>
                <td>6.4-inch</td>
              </tr>
              <tr>
                <th className="text-dark">Storage</th>
                <td>64 GB</td>
                <td>64 GB</td>
                <td>128 GB</td>
              </tr>
              <tr>
                <th className="text-dark">Camera</th>
                <td>Dual 12-megapixel</td>
                <td>12.2-megapixel</td>
                <td>12,16,12-megapixel</td>
              </tr>
              <tr>
                <th className="text-dark">Battery</th>
                <td>3,174 mAh</td>
                <td>3,430 mAh</td>
                <td>4,100 mAh</td>
              </tr>
            </tbody>
            <tbody id="general" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">General</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Quick charging</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Operating system</th>
                <td>iOS v12</td>
                <td>Android v9.0 Pie	</td>
                <td>Android v9.0 with Samsung One UI	</td>
              </tr>
              <tr>
                <th className="text-dark">Sim slots</th>
                <td>Single SIM, GSM</td>
                <td>Single SIM, GSM</td>
                <td>Hybrid SIM slot, GSM</td>
              </tr>
              <tr>
                <th className="text-dark">Launch date</th>
                <td>September 12, 2018 (Official)</td>
                <td>November 1, 2018 (Official)</td>
                <td>February 20, 2019 (Official)</td>
              </tr>
              <tr>
                <th className="text-dark">Sim size</th>
                <td>SIM1: Nano</td>
                <td>SIM1: Nano</td>
                <td>SIM1: Nano SIM2: Nano (Hybrid)</td>
              </tr>
              <tr>
                <th className="text-dark">Network</th>
                <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
                <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
                <td>4G: Available (supports Indian bands) 3G: Available, 2G: Available</td>
              </tr>
              <tr>
                <th className="text-dark">Fingerprint sensor</th>
                <td>None (Face ID)</td>
                <td>Back cover</td>
                <td>In-screen</td>
              </tr>
            </tbody>
            <tbody id="multimedia" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Multimedia</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Loudspeaker</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">FM radio</th>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <th className="text-dark">Headphone jack</th>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
            </tbody>
            <tbody id="performance" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Performance</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Processor</th>
                <td>Apple A12 Bionic</td>
                <td>Qualcomm Snapdragon 845 (2.5GHz octa-core)</td>
                <td>Octa-core Qualcomm Snapdragon 855</td>
              </tr>
              <tr>
                <th className="text-dark">Graphics</th>
                <td>Apple GPU (4-core graphics)</td>
                <td>Adreno 630</td>
                <td>Mali-G72 MP18</td>
              </tr>
              <tr>
                <th className="text-dark">Architecture</th>
                <td>64 bit</td>
                <td>64 bit</td>
                <td>64 bit</td>
              </tr>
              <tr>
                <th className="text-dark">RAM</th>
                <td>4 GB</td>
                <td>4 GB</td>
                <td>8 GB</td>
              </tr>
            </tbody>
            <tbody id="design" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Design</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Build material</th>
                <td>Case: AluminiumBack: Mineral Glass</td>
                <td>Case: AluminiumBack: Aluminium</td>
                <td>Case: AluminiumBack: Mineral Glass</td>
              </tr>
              <tr>
                <th className="text-dark">Thickness</th>
                <td>7.7 mm</td>
                <td>7.9 mm</td>
                <td>8.5 mm</td>
              </tr>
              <tr>
                <th className="text-dark">Width</th>
                <td>70.9 mm</td>
                <td>76.7 mm</td>
                <td>73.8 mm</td>
              </tr>
              <tr>
                <th className="text-dark">Height</th>
                <td>143.6 mm</td>
                <td>157.9 mm</td>
                <td>158.1 mm</td>
              </tr>
              <tr>
                <th className="text-dark">Weight</th>
                <td>174 grams</td>
                <td>175 grams</td>
                <td>189 grams</td>
              </tr>
              <tr>
                <th className="text-dark">Waterproof</th>
                <td>Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67</td>
                <td>Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67</td>
                <td>Yes Water resistant (up to 30 minutes in a depth of 1.5 meter), IP68</td>
              </tr>
              <tr>
                <th className="text-dark">Colors</th>
                <td>Silver, Space Grey</td>
                <td>Black, Black and White</td>
                <td>Midnight Black, Coral Blue, Lilac Purple</td>
              </tr>
            </tbody>
            <tbody id="display" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Display</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Display type</th>
                <td>Super Retina OLED</td>
                <td>'flexible' OLED</td>
                <td>Super AMOLED</td>
              </tr>
              <tr>
                <th className="text-dark">Pixel density</th>
                <td>458 ppi</td>
                <td>522 ppi</td>
                <td>522 ppi</td>
              </tr>
              <tr>
                <th className="text-dark">Screen protection</th>
                <td>Yes</td>
                <td>Corning Gorilla Glass v5</td>
                <td>Corning Gorilla Glass v5</td>
              </tr>
              <tr>
                <th className="text-dark">Screen size</th>
                <td>6.5 inches</td>
                <td>6.3 inches</td>
                <td>6.4 inches</td>
              </tr>
              <tr>
                <th className="text-dark">Screen resolution</th>
                <td>1125 x 2436 pixels</td>
                <td>1440 x 2880 pixels</td>
                <td>1440 x 2960 pixels	</td>
              </tr>
              <tr>
                <th className="text-dark">Touch screen</th>
                <td>Yes, 3D Touch Touchscreen, Multi-touch</td>
                <td>Yes, Capacitive Touchscreen, Multi-touch</td>
                <td>Yes, Capacitive Touchscreen, Multi-touch</td>
              </tr>
            </tbody>
            <tbody id="storage" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Storage</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Internal memory</th>
                <td>64 GB</td>
                <td>64 GB</td>
                <td>128 GB</td>
              </tr>
              <tr>
                <th className="text-dark">Expandable memory</th>
                <td>No</td>
                <td>No</td>
                <td>Yes Up to 1 TB</td>
              </tr>
            </tbody>
            <tbody id="camera" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Camera</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Settings</th>
                <td>Exposure compensation, ISO control</td>
                <td>Exposure compensation, ISO control</td>
                <td>Exposure compensation</td>
              </tr>
              <tr>
                <th className="text-dark">Aperture</th>
                <td>F2.2</td>
                <td>F2.4</td>
                <td>F1.7</td>
              </tr>
              <tr>
                <th className="text-dark">Camera features</th>
                <td>10 x Digital zoom, Optical zoom, Auto flash, Face detection, Touch to focus</td>
                <td>Fixed zocus</td>
                <td>Wide angle selfie</td>
              </tr>
              <tr>
                <th className="text-dark">Image resolution</th>
                <td>4000 x 3000 pixels</td>
                <td>4000 x 3000 pixels</td>
                <td>4000 x 3000 pixels</td>
              </tr>
              <tr>
                <th className="text-dark">Sensor</th>
                <td>BSI sensor</td>
                <td>CMOS image sensor</td>
                <td>CMOS image sensor</td>
              </tr>
              <tr>
                <th className="text-dark">Autofocus</th>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Shooting modes</th>
                <td>Continuos shooting, High dynamic range mode (HDR), Burst mode</td>
                <td>Continuos shooting, High dynamic range mode (HDR)</td>
                <td>Continuos shooting, High dynamic range mode (HDR)</td>
              </tr>
              <tr>
                <th className="text-dark">Optical image stabilisation</th>
                <td>Yes, Dual optical image stabilization</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Flash</th>
                <td>Yes, Retina flash</td>
                <td>Yes, Dual LED flash</td>
                <td>Yes, LED flash</td>
              </tr>
            </tbody>
            <tbody id="battery" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Battery</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Talktime</th>
                <td>Up to 21 hours(4G)</td>
                <td>Up to 24 hours(4G)</td>
                <td>Up to 25 hours(4G)</td>
              </tr>
              <tr>
                <th className="text-dark">Quick charging</th>
                <td>Yes, fast, 50 % in 30 minutes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Wireless charging</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th className="text-dark">Type</th>
                <td>Li-ion</td>
                <td>Li-ion</td>
                <td>Li-ion</td>
              </tr>
              <tr>
                <th className="text-dark">Capacity</th>
                <td>3,174 mAh</td>
                <td>3,430 mAh</td>
                <td>4,100 mAh</td>
              </tr>
            </tbody>
            <tbody id="price" data-filter-target>
              <tr className="bg-secondary">
                <th className="text-uppercase text-dark">Price &amp; rating</th>
                <td><span className="text-dark fw-medium text-dark">Apple iPhone Xs Max</span></td>
                <td><span className="text-dark fw-medium text-dark">Google Pixel 3 XL</span></td>
                <td><span className="text-dark fw-medium text-dark">Samsung Galaxy S10+</span></td>
              </tr>
              <tr>
                <th className="text-dark">Price</th>
                <td>$1,099</td>
                <td>$899</td>
                <td>$1,000</td>
              </tr>
              <tr>
                <th className="text-dark">Rating</th>
                <td>4.5/5</td>
                <td>4.5/5</td>
                <td>4.5/5</td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <button className="btn btn-primary d-block w-100" type="button">Add to Cart</button>
                </td>
                <td>
                  <button className="btn btn-primary d-block w-100" type="button">Add to Cart</button>
                </td>
                <td>
                  <button className="btn btn-primary d-block w-100" type="button">Add to Cart</button>
                </td>
              </tr>
            </tbody>
          </table>
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
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>