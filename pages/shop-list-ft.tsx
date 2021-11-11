<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Shop list filters on top</title>
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
    <link rel="stylesheet" media="screen" href="vendor/nouislider/dist/nouislider.min.css"/>
    <link rel="stylesheet" media="screen" href="vendor/drift-zoom/dist/drift-basic.min.css"/>
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
      <!-- Quick View Modal-->
      <div className="modal-quick-view modal fade" id="quick-view" tabindex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title product-title"><a href="shop-single-v1.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Go to product page">Sports Hooded Sweatshirt<i className="ci-arrow-right fs-lg ms-2"></i></a></h4>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <!-- Product gallery-->
                <div className="col-lg-7 pe-lg-0">
                  <div className="product-gallery">
                    <div className="product-gallery-preview order-sm-2">
                      <div className="product-gallery-preview-item active" id="first"><img className="image-zoom" src="/img/shop/single/gallery/01.jpg" data-zoom="/img/shop/single/gallery/01.jpg" alt="Product image">
                        <div className="image-zoom-pane"></div>
                      </div>
                      <div className="product-gallery-preview-item" id="second"><img className="image-zoom" src="/img/shop/single/gallery/02.jpg" data-zoom="/img/shop/single/gallery/02.jpg" alt="Product image">
                        <div className="image-zoom-pane"></div>
                      </div>
                      <div className="product-gallery-preview-item" id="third"><img className="image-zoom" src="/img/shop/single/gallery/03.jpg" data-zoom="/img/shop/single/gallery/03.jpg" alt="Product image">
                        <div className="image-zoom-pane"></div>
                      </div>
                      <div className="product-gallery-preview-item" id="fourth"><img className="image-zoom" src="/img/shop/single/gallery/04.jpg" data-zoom="/img/shop/single/gallery/04.jpg" alt="Product image">
                        <div className="image-zoom-pane"></div>
                      </div>
                    </div>
                    <div className="product-gallery-thumblist order-sm-1"><a className="product-gallery-thumblist-item active" href="#first"><img src="/img/shop/single/gallery/th01.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item" href="#second"><img src="/img/shop/single/gallery/th02.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item" href="#third"><img src="/img/shop/single/gallery/th03.jpg" alt="Product thumb"></a><a className="product-gallery-thumblist-item" href="#fourth"><img src="/img/shop/single/gallery/th04.jpg" alt="Product thumb"></a></div>
                  </div>
                </div>
                <!-- Product details-->
                <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
                  <div className="product-details ms-auto pb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2"><a href="shop-single-v1.html#reviews">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                        </div><span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">74 Reviews</span></a>
                      <button className="btn-wishlist" type="button" data-bs-toggle="tooltip" title="Add to wishlist"><i className="ci-heart"></i></button>
                    </div>
                    <div className="mb-3"><span className="h3 fw-normal text-accent me-1">$18.<small>99</small></span>
                      <del className="text-muted fs-lg me-3">$25.<small>00</small></del><span className="badge bg-danger badge-shadow align-middle mt-n2">Sale</span>
                    </div>
                    <div className="fs-sm mb-4"><span className="text-heading fw-medium me-1">Color:</span><span className="text-muted" id="colorOptionText">Red/Dark blue/White</span></div>
                    <div className="position-relative me-n4 mb-3">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color" id="color1" data-bs-label="colorOptionText" value="Red/Dark blue/White" checked>
                        <label className="form-option-label rounded-circle" htmlFor="color1"><span className="form-option-color rounded-circle" style="background-image: url(img/shop/single/color-opt-1.png)"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color" id="color2" data-bs-label="colorOptionText" value="Beige/White/Black">
                        <label className="form-option-label rounded-circle" htmlFor="color2"><span className="form-option-color rounded-circle" style="background-image: url(img/shop/single/color-opt-2.png)"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color" id="color3" data-bs-label="colorOptionText" value="Dark grey/White/Mustard">
                        <label className="form-option-label rounded-circle" htmlFor="color3"><span className="form-option-color rounded-circle" style="background-image: url(img/shop/single/color-opt-3.png)"></span></label>
                      </div>
                      <div className="product-badge product-available mt-n1"><i className="ci-security-check"></i>Product available</div>
                    </div>
                    <form className="mb-grid-gutter">
                      <div className="mb-3">
                        <label className="fw-medium pb-1" htmlFor="product-size">Size:</label>
                        <select className="form-select" required id="product-size">
                          <option value="">Select size</option>
                          <option value="xs">XS</option>
                          <option value="s">S</option>
                          <option value="m">M</option>
                          <option value="l">L</option>
                          <option value="xl">XL</option>
                        </select>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <select className="form-select me-3" style="width: 5rem;">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <button className="btn btn-primary btn-shadow d-block w-100" type="submit"><i className="ci-cart fs-lg me-2"></i>Add to Cart</button>
                      </div>
                    </form>
                    <h5 className="h6 mb-3 pb-2 border-bottom"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</h5>
                    <h6 className="fs-sm mb-2">Style</h6>
                    <ul className="fs-sm ps-4">
                      <li>Hooded top</li>
                    </ul>
                    <h6 className="fs-sm mb-2">Composition</h6>
                    <ul className="fs-sm ps-4">
                      <li>Elastic rib: Cotton 95%, Elastane 5%</li>
                      <li>Lining: Cotton 100%</li>
                      <li>Cotton 80%, Polyester 20%</li>
                    </ul>
                    <h6 className="fs-sm mb-2">Art. No.</h6>
                    <ul className="fs-sm ps-4 mb-0">
                      <li>183260098</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <!-- Page Title (Shop Alt)-->
      <!-- used for shop templates with filters on top-->
      <div className="bg-dark pt-4 pb-5">
        <div className="container pt-2 pb-3 pt-lg-3 pb-lg-4">
          <div className="d-lg-flex justify-content-between pb-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                  <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                  <li className="breadcrumb-item text-nowrap"><a href="#">Shop</a>
                  </li>
                  <li className="breadcrumb-item text-nowrap active" aria-current="page">List filters on top</li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 text-light mb-0">Shop list filters on top</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <!-- Toolbar-->
        <div className="bg-light shadow-lg rounded-3 p-4 mt-n5 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="dropdown me-2"><a className="btn btn-outline-secondary dropdown-toggle" href="#shop-filters" data-bs-toggle="collapse"><i className="ci-filter me-2"></i>Filters</a></div>
            <div className="d-flex"><a className="nav-link-style me-3" href="#"><i className="ci-arrow-left"></i></a><span className="fs-md">1 / 5</span><a className="nav-link-style ms-3" href="#"><i className="ci-arrow-right"></i></a></div>
            <div className="d-none d-sm-flex"><a className="btn btn-icon nav-link-style me-2" href="shop-grid-ft.html"><i className="ci-view-grid"></i></a><a className="btn btn-icon nav-link-style bg-primary text-light disabled opacity-100" href="#"><i className="ci-view-list"></i></a></div>
          </div>
          <!-- Toolbar with expandable filters-->
          <div className="collapse" id="shop-filters">
            <div className="row pt-4">
              <div className="col-lg-4 col-sm-6">
                <!-- Categories-->
                <div className="card mb-grid-gutter">
                  <div className="card-body px-4">
                    <div className="widget widget-categories">
                      <h3 className="widget-title">Categories</h3>
                      <div className="accordion mt-n1" id="shop-categories">
                        <!-- Shoes-->
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button collapsed" href="#shoes" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="shoes">Shoes</a></h3>
                          <div className="accordion-collapse collapse" id="shoes" data-bs-parent="#shop-categories">
                            <div className="accordion-body">
                              <div className="widget widget-links widget-filter">
                                <div className="input-group input-group-sm mb-2">
                                  <input className="widget-filter-search form-control rounded-end" type="text" placeholder="Search"><i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                </div>
                                <ul className="widget-list widget-filter-list pt-1" style="height: 12rem;" data-simplebar data-simplebar-auto-hide="false">
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">View all</span><span className="fs-xs text-muted ms-3">1,953</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Pumps &amp; High Heels</span><span className="fs-xs text-muted ms-3">247</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Ballerinas &amp; Flats</span><span className="fs-xs text-muted ms-3">156</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Sandals</span><span className="fs-xs text-muted ms-3">310</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Sneakers</span><span className="fs-xs text-muted ms-3">402</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Boots</span><span className="fs-xs text-muted ms-3">393</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Ankle Boots</span><span className="fs-xs text-muted ms-3">50</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Loafers</span><span className="fs-xs text-muted ms-3">93</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Slip-on</span><span className="fs-xs text-muted ms-3">122</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Flip Flops</span><span className="fs-xs text-muted ms-3">116</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Clogs &amp; Mules</span><span className="fs-xs text-muted ms-3">24</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Athletic Shoes</span><span className="fs-xs text-muted ms-3">31</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Oxfords</span><span className="fs-xs text-muted ms-3">9</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Smart Shoes</span><span className="fs-xs text-muted ms-3">18</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Clothing-->
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button" href="#clothing" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="clothing">Clothing</a></h3>
                          <div className="accordion-collapse collapse show" id="clothing" data-bs-parent="#shop-categories">
                            <div className="accordion-body">
                              <div className="widget widget-links widget-filter">
                                <div className="input-group input-group-sm mb-2">
                                  <input className="widget-filter-search form-control rounded-end" type="text" placeholder="Search"><i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                </div>
                                <ul className="widget-list widget-filter-list pt-1" style="height: 12rem;" data-simplebar data-simplebar-auto-hide="false">
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">View all</span><span className="fs-xs text-muted ms-3">2,548</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Blazers &amp; Suits</span><span className="fs-xs text-muted ms-3">235</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Blouses</span><span className="fs-xs text-muted ms-3">410</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Cardigans &amp; Jumpers</span><span className="fs-xs text-muted ms-3">107</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Dresses</span><span className="fs-xs text-muted ms-3">93</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Hoodie &amp; Sweatshirts</span><span className="fs-xs text-muted ms-3">122</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Jackets &amp; Coats</span><span className="fs-xs text-muted ms-3">116</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Jeans</span><span className="fs-xs text-muted ms-3">215</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Lingerie</span><span className="fs-xs text-muted ms-3">150</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Maternity Wear</span><span className="fs-xs text-muted ms-3">8</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Nightwear</span><span className="fs-xs text-muted ms-3">26</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Shirts</span><span className="fs-xs text-muted ms-3">164</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Shorts</span><span className="fs-xs text-muted ms-3">147</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Socks &amp; Tights</span><span className="fs-xs text-muted ms-3">139</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Sportswear</span><span className="fs-xs text-muted ms-3">65</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Swimwear</span><span className="fs-xs text-muted ms-3">18</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">T-shirts &amp; Vests</span><span className="fs-xs text-muted ms-3">209</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Tops</span><span className="fs-xs text-muted ms-3">132</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Trousers</span><span className="fs-xs text-muted ms-3">105</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Underwear</span><span className="fs-xs text-muted ms-3">87</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Bags-->
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button collapsed" href="#bags" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="bags">Bags</a></h3>
                          <div className="accordion-collapse collapse" id="bags" data-bs-parent="#shop-categories">
                            <div className="accordion-body">
                              <div className="widget widget-links widget-filter">
                                <div className="input-group input-group-sm mb-2">
                                  <input className="widget-filter-search form-control rounded-end" type="text" placeholder="Search"><i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                                </div>
                                <ul className="widget-list widget-filter-list pt-1" style="height: 12rem;" data-simplebar data-simplebar-auto-hide="false">
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">View all</span><span className="fs-xs text-muted ms-3">801</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Handbags</span><span className="fs-xs text-muted ms-3">238</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Backpacks</span><span className="fs-xs text-muted ms-3">116</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Wallets</span><span className="fs-xs text-muted ms-3">104</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Luggage</span><span className="fs-xs text-muted ms-3">115</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Lumbar Packs</span><span className="fs-xs text-muted ms-3">17</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Duffle Bags</span><span className="fs-xs text-muted ms-3">9</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Bag / Travel Accessories</span><span className="fs-xs text-muted ms-3">93</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Diaper Bags</span><span className="fs-xs text-muted ms-3">5</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Lunch Bags</span><span className="fs-xs text-muted ms-3">8</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Messenger Bags</span><span className="fs-xs text-muted ms-3">2</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Laptop Bags</span><span className="fs-xs text-muted ms-3">31</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Briefcases</span><span className="fs-xs text-muted ms-3">45</span></a></li>
                                  <li className="widget-list-item widget-filter-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span className="widget-filter-item-text">Sport Bags</span><span className="fs-xs text-muted ms-3">18</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Sunglasses-->
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button collapsed" href="#sunglasses" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="sunglasses">Sunglasses</a></h3>
                          <div className="collapse" id="sunglasses" data-bs-parent="#shop-categories">
                            <div className="accordion-body">
                              <div className="widget widget-links">
                                <ul className="widget-list">
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>View all</span><span className="fs-xs text-muted ms-3">1,842</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Fashion Sunglasses</span><span className="fs-xs text-muted ms-3">953</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Sport Sunglasses</span><span className="fs-xs text-muted ms-3">589</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Classic Sunglasses</span><span className="fs-xs text-muted ms-3">300</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Watches-->
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button collapsed" href="#watches" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="watches">Watches</a></h3>
                          <div className="accordion-collapse collapse" id="watches" data-bs-parent="#shop-categories">
                            <div className="accordion-body">
                              <div className="widget widget-links">
                                <ul className="widget-list">
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>View all</span><span className="fs-xs text-muted ms-3">734</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Fashion Watches</span><span className="fs-xs text-muted ms-3">572</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Casual Watches</span><span className="fs-xs text-muted ms-3">110</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Luxury Watches</span><span className="fs-xs text-muted ms-3">34</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Sport Watches</span><span className="fs-xs text-muted ms-3">18</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Accessories-->
                        <div className="accordion-item">
                          <h3 className="accordion-header"><a className="accordion-button collapsed" href="#accessories" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="accessories">Accessories</a></h3>
                          <div className="accordion-collapse collapse" id="accessories" data-bs-parent="#shop-categories">
                            <div className="accordion-body">
                              <div className="widget widget-links">
                                <ul className="widget-list">
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>View all</span><span className="fs-xs text-muted ms-3">920</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Belts</span><span className="fs-xs text-muted ms-3">364</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Hats</span><span className="fs-xs text-muted ms-3">405</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Jewelry</span><span className="fs-xs text-muted ms-3">131</span></a></li>
                                  <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Cosmetics</span><span className="fs-xs text-muted ms-3">20</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <!-- Price range-->
                <div className="card mb-grid-gutter">
                  <div className="card-body px-4">
                    <div className="widget">
                      <h3 className="widget-title">Price range</h3>
                      <div className="range-slider" data-start-min="250" data-start-max="680" data-min="0" data-max="1000" data-step="1">
                        <div className="range-slider-ui"></div>
                        <div className="d-flex pb-1">
                          <div className="w-50 pe-2 me-2">
                            <div className="input-group input-group-sm"><span className="input-group-text">$</span>
                              <input className="form-control range-slider-value-min" type="text">
                            </div>
                          </div>
                          <div className="w-50 ps-2">
                            <div className="input-group input-group-sm"><span className="input-group-text">$</span>
                              <input className="form-control range-slider-value-max" type="text">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Filter by Brand-->
                <div className="card mb-grid-gutter">
                  <div className="card-body px-4">
                    <div className="widget widget-filter">
                      <h3 className="widget-title">Brand</h3>
                      <div className="input-group input-group-sm mb-2">
                        <input className="widget-filter-search form-control rounded-end pe-5" type="text" placeholder="Search"><i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                      </div>
                      <ul className="widget-list widget-filter-list list-unstyled pt-1" style="max-height: 11rem;" data-simplebar data-simplebar-auto-hide="false">
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="adidas">
                            <label className="form-check-label widget-filter-item-text" htmlFor="adidas">Adidas</label>
                          </div><span className="fs-xs text-muted">425</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="ataylor">
                            <label className="form-check-label widget-filter-item-text" htmlFor="ataylor">Ann Taylor</label>
                          </div><span className="fs-xs text-muted">15</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="armani">
                            <label className="form-check-label widget-filter-item-text" htmlFor="armani">Armani</label>
                          </div><span className="fs-xs text-muted">18</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="banana">
                            <label className="form-check-label widget-filter-item-text" htmlFor="banana">Banana Republic</label>
                          </div><span className="fs-xs text-muted">103</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="bilabong">
                            <label className="form-check-label widget-filter-item-text" htmlFor="bilabong">Bilabong</label>
                          </div><span className="fs-xs text-muted">27</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="birkenstock">
                            <label className="form-check-label widget-filter-item-text" htmlFor="birkenstock">Birkenstock</label>
                          </div><span className="fs-xs text-muted">10</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="klein">
                            <label className="form-check-label widget-filter-item-text" htmlFor="klein">Calvin Klein</label>
                          </div><span className="fs-xs text-muted">365</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="columbia">
                            <label className="form-check-label widget-filter-item-text" htmlFor="columbia">Columbia</label>
                          </div><span className="fs-xs text-muted">508</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="converse">
                            <label className="form-check-label widget-filter-item-text" htmlFor="converse">Converse</label>
                          </div><span className="fs-xs text-muted">176</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="dockers">
                            <label className="form-check-label widget-filter-item-text" htmlFor="dockers">Dockers</label>
                          </div><span className="fs-xs text-muted">54</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="fruit">
                            <label className="form-check-label widget-filter-item-text" htmlFor="fruit">Fruit of the Loom</label>
                          </div><span className="fs-xs text-muted">739</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="hanes">
                            <label className="form-check-label widget-filter-item-text" htmlFor="hanes">Hanes</label>
                          </div><span className="fs-xs text-muted">92</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="choo">
                            <label className="form-check-label widget-filter-item-text" htmlFor="choo">Jimmy Choo</label>
                          </div><span className="fs-xs text-muted">17</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="levis">
                            <label className="form-check-label widget-filter-item-text" htmlFor="levis">Levi's</label>
                          </div><span className="fs-xs text-muted">361</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="lee">
                            <label className="form-check-label widget-filter-item-text" htmlFor="lee">Lee</label>
                          </div><span className="fs-xs text-muted">264</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wearhouse">
                            <label className="form-check-label widget-filter-item-text" htmlFor="wearhouse">Men's Wearhouse</label>
                          </div><span className="fs-xs text-muted">75</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="newbalance">
                            <label className="form-check-label widget-filter-item-text" htmlFor="newbalance">New Balance</label>
                          </div><span className="fs-xs text-muted">218</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="nike">
                            <label className="form-check-label widget-filter-item-text" htmlFor="nike">Nike</label>
                          </div><span className="fs-xs text-muted">810</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="navy">
                            <label className="form-check-label widget-filter-item-text" htmlFor="navy">Old Navy</label>
                          </div><span className="fs-xs text-muted">147</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="polo">
                            <label className="form-check-label widget-filter-item-text" htmlFor="polo">Polo Ralph Lauren</label>
                          </div><span className="fs-xs text-muted">64</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="puma">
                            <label className="form-check-label widget-filter-item-text" htmlFor="puma">Puma</label>
                          </div><span className="fs-xs text-muted">370</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="reebok">
                            <label className="form-check-label widget-filter-item-text" htmlFor="reebok">Reebok</label>
                          </div><span className="fs-xs text-muted">506</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="skechers">
                            <label className="form-check-label widget-filter-item-text" htmlFor="skechers">Skechers</label>
                          </div><span className="fs-xs text-muted">209</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="hilfiger">
                            <label className="form-check-label widget-filter-item-text" htmlFor="hilfiger">Tommy Hilfiger</label>
                          </div><span className="fs-xs text-muted">487</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="armour">
                            <label className="form-check-label widget-filter-item-text" htmlFor="armour">Under Armour</label>
                          </div><span className="fs-xs text-muted">90</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="urban">
                            <label className="form-check-label widget-filter-item-text" htmlFor="urban">Urban Outfitters</label>
                          </div><span className="fs-xs text-muted">152</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="vsecret">
                            <label className="form-check-label widget-filter-item-text" htmlFor="vsecret">Victoria's Secret</label>
                          </div><span className="fs-xs text-muted">238</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wolverine">
                            <label className="form-check-label widget-filter-item-text" htmlFor="wolverine">Wolverine</label>
                          </div><span className="fs-xs text-muted">29</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wrangler">
                            <label className="form-check-label widget-filter-item-text" htmlFor="wrangler">Wrangler</label>
                          </div><span className="fs-xs text-muted">115</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <!-- Filter by Size-->
                <div className="card mb-grid-gutter">
                  <div className="card-body px-4">
                    <div className="widget widget-filter">
                      <h3 className="widget-title">Size</h3>
                      <div className="input-group input-group-sm mb-2">
                        <input className="widget-filter-search form-control rounded-end pe-5" type="text" placeholder="Search"><i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                      </div>
                      <ul className="widget-list widget-filter-list list-unstyled pt-1" style="max-height: 11.5rem;" data-simplebar data-simplebar-auto-hide="false">
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-xs">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-xs">XS</label>
                          </div><span className="fs-xs text-muted">34</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-s">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-s">S</label>
                          </div><span className="fs-xs text-muted">57</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-m">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-m">M</label>
                          </div><span className="fs-xs text-muted">198</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-l">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-l">L</label>
                          </div><span className="fs-xs text-muted">72</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-xl">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-xl">XL</label>
                          </div><span className="fs-xs text-muted">46</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-39">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-39">39</label>
                          </div><span className="fs-xs text-muted">112</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-40">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-40">40</label>
                          </div><span className="fs-xs text-muted">85</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-41">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-40">41</label>
                          </div><span className="fs-xs text-muted">210</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-42">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-42">42</label>
                          </div><span className="fs-xs text-muted">57</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-43">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-43">43</label>
                          </div><span className="fs-xs text-muted">30</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-44">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-44">44</label>
                          </div><span className="fs-xs text-muted">61</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-45">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-45">45</label>
                          </div><span className="fs-xs text-muted">23</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-46">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-46">46</label>
                          </div><span className="fs-xs text-muted">19</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-47">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-47">47</label>
                          </div><span className="fs-xs text-muted">15</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-48">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-48">48</label>
                          </div><span className="fs-xs text-muted">12</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-49">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-49">49</label>
                          </div><span className="fs-xs text-muted">8</span>
                        </li>
                        <li className="widget-filter-item d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="size-50">
                            <label className="form-check-label widget-filter-item-text" htmlFor="size-50">50</label>
                          </div><span className="fs-xs text-muted">6</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Filter by Color-->
                <div className="card mb-grid-gutter">
                  <div className="card-body px-4">
                    <div className="widget">
                      <h3 className="widget-title">Color</h3>
                      <div className="d-flex flex-wrap">
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-blue-gray">
                          <label className="form-option-label rounded-circle" htmlFor="color-blue-gray"><span className="form-option-color rounded-circle" style="background-color: #b3c8db;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-blue-gray">Blue-gray</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-burgundy">
                          <label className="form-option-label rounded-circle" htmlFor="color-burgundy"><span className="form-option-color rounded-circle" style="background-color: #ca7295;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-burgundy">Burgundy</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-teal">
                          <label className="form-option-label rounded-circle" htmlFor="color-teal"><span className="form-option-color rounded-circle" style="background-color: #91c2c3;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-teal">Teal</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-brown">
                          <label className="form-option-label rounded-circle" htmlFor="color-brown"><span className="form-option-color rounded-circle" style="background-color: #9a8480;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-brown">Brown</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-coral-red">
                          <label className="form-option-label rounded-circle" htmlFor="color-coral-red"><span className="form-option-color rounded-circle" style="background-color: #ff7072;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-coral-red">Coral red</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-navy">
                          <label className="form-option-label rounded-circle" htmlFor="color-navy"><span className="form-option-color rounded-circle" style="background-color: #696dc8;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-navy">Navy</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-charcoal">
                          <label className="form-option-label rounded-circle" htmlFor="color-charcoal"><span className="form-option-color rounded-circle" style="background-color: #4e4d4d;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-charcoal">Charcoal</label>
                        </div>
                        <div className="form-check form-option text-center mb-2 mx-1" style="width: 4rem;">
                          <input className="form-check-input" type="checkbox" id="color-sky-blue">
                          <label className="form-option-label rounded-circle" htmlFor="color-sky-blue"><span className="form-option-color rounded-circle" style="background-color: #8bcdf5;"></span></label>
                          <label className="d-block fs-xs text-muted mt-n1" htmlFor="color-sky-blue">Sky blue</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <!-- Products list-->
          <section className="col-lg-8 pt-2">
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/01.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sneakers &amp; Keds</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$154.<small>00</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-75">
                        <label className="form-option-label" htmlFor="s-75">7.5</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-80" checked>
                        <label className="form-option-label" htmlFor="s-80">8</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-85">
                        <label className="form-option-label" htmlFor="s-85">8.5</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size1" id="s-90">
                        <label className="form-option-label" htmlFor="s-90">9</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list"><span className="badge bg-danger badge-shadow">Sale</span>
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/02.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women’s T-shirt</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Cotton Lace Blouse</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$28.<small>50</small></span>
                      <del className="fs-sm text-muted">38.<small>50</small></del>
                    </div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="white" checked>
                        <label className="form-option-label rounded-circle" htmlFor="white"><span className="form-option-color rounded-circle" style="background-color: #eaeaeb;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="blue">
                        <label className="form-option-label rounded-circle" htmlFor="blue"><span className="form-option-color rounded-circle" style="background-color: #d1dceb;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="yellow">
                        <label className="form-option-label rounded-circle" htmlFor="yellow"><span className="form-option-color rounded-circle" style="background-color: #f4e6a2;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color1" id="pink">
                        <label className="form-option-label rounded-circle" htmlFor="pink"><span className="form-option-color rounded-circle" style="background-color: #f3dcff;"></span></label>
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <select className="form-select form-select-sm me-2" style="max-width: 6rem;">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <button className="btn btn-primary btn-sm" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    </div>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/03.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women’s Shorts</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Mom High Waist Shorts</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$39.<small>50</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="xs">
                        <label className="form-option-label" htmlFor="xs">XS</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="s" checked>
                        <label className="form-option-label" htmlFor="s">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="m">
                        <label className="form-option-label" htmlFor="m">M</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size2" id="l">
                        <label className="form-option-label" htmlFor="l">L</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/04.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sportswear</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Women Sports Jacket</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$68.<small>40</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="xs2" checked>
                        <label className="form-option-label" htmlFor="xs2">XS</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="s2">
                        <label className="form-option-label" htmlFor="s2">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="m2">
                        <label className="form-option-label" htmlFor="m2">M</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size3" id="l2">
                        <label className="form-option-label" htmlFor="l2">L</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"> <a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/05.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Men’s Sunglasses</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Polarized Sunglasses</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-muted fs-sm">Out of stock</span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden"><a className="btn btn-secondary btn-sm mb-2" href="shop-single-v1.html">View details</a>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/06.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Backpacks</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">TH Jeans City Backpack</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$79.<small>50</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color2" id="khaki" checked>
                        <label className="form-option-label rounded-circle" htmlFor="khaki"><span className="form-option-color rounded-circle" style="background-color: #97947c;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color2" id="jeans">
                        <label className="form-option-label rounded-circle" htmlFor="jeans"><span className="form-option-color rounded-circle" style="background-color: #99a8be;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color2" id="white2">
                        <label className="form-option-label rounded-circle" htmlFor="white2"><span className="form-option-color rounded-circle" style="background-color: #eaeaeb;"></span></label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/07.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women's Swimwear</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Two-Piece Bikini in Print</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$18.<small>99</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size4" id="xs3" checked>
                        <label className="form-option-label" htmlFor="xs3">XS</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size4" id="s3">
                        <label className="form-option-label" htmlFor="s3">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size4" id="m3">
                        <label className="form-option-label" htmlFor="m3">M</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/08.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Kid's Toys</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Soft Panda Teddy Bear</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$14.<small>99</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/09.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Cosmetics</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Metallic Lipstick (Crimson)</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$12.<small>99</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color3" id="crimson" checked>
                        <label className="form-option-label rounded-circle" htmlFor="crimson"><span className="form-option-color rounded-circle" style="background-color: #bd3c82;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color3" id="creamy">
                        <label className="form-option-label rounded-circle" htmlFor="creamy"><span className="form-option-color rounded-circle" style="background-color: #ebae81;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color3" id="palm">
                        <label className="form-option-label rounded-circle" htmlFor="palm"><span className="form-option-color rounded-circle" style="background-color: #ca8799;"></span></label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/10.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Men’s Accessories</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">5-Pack Multicolor Bracelets</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$7.<small>99</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/11.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Men’s Sandals</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">Soft Footbed Sandals</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$99.<small>50</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color4" id="blue2" checked>
                        <label className="form-option-label rounded-circle" htmlFor="blue2"><span className="form-option-color rounded-circle" style="background-color: #879fb3;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color4" id="brown">
                        <label className="form-option-label rounded-circle" htmlFor="brown"><span className="form-option-color rounded-circle" style="background-color: #9c6d4a;"></span></label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="color4" id="black">
                        <label className="form-option-label rounded-circle" htmlFor="black"><span className="form-option-color rounded-circle" style="background-color: #333333;"></span></label>
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <select className="form-select form-select-sm me-2" style="max-width: 6rem;">
                        <option>9.5</option>
                        <option>10</option>
                        <option>10.5</option>
                        <option>11</option>
                        <option>11.5</option>
                      </select>
                      <button className="btn btn-primary btn-sm" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    </div>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Product-->
            <div className="card product-card product-list">
              <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button>
              <div className="d-sm-flex align-items-center"><a className="product-list-thumb" href="shop-single-v1.html"><img src="/img/shop/catalog/12.jpg" alt="Product"></a>
                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Men’s Hats</a>
                  <h3 className="product-title fs-base"><a href="shop-single-v1.html">3-Color Sun Stash Hat</a></h3>
                  <div className="d-flex justify-content-between">
                    <div className="product-price"><span className="text-accent">$25.<small>99</small></span></div>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>
                  <div className="card-body card-body-hidden">
                    <div className="pb-2">
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="s4" checked>
                        <label className="form-option-label" htmlFor="s4">S</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="m4">
                        <label className="form-option-label" htmlFor="m4">M</label>
                      </div>
                      <div className="form-check form-option form-check-inline mb-2">
                        <input className="form-check-input" type="radio" name="size5" id="l4">
                        <label className="form-option-label" htmlFor="l4">L</label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                    <div className="text-start"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top pt-3 mt-3"></div>
            <!-- Pagination-->
            <nav className="d-flex justify-content-between pt-2" aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#"><i className="ci-arrow-left me-2"></i>Prev</a></li>
              </ul>
              <ul className="pagination">
                <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 5</span></li>
                <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">2</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">4</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">5</a></li>
              </ul>
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#" aria-label="Next">Next<i className="ci-arrow-right ms-2"></i></a></li>
              </ul>
            </nav>
          </section>
          <!-- Sidebar with banners-->
          <aside className="col-lg-4 d-none d-lg-block">
            <div className="d-flex d-lg-block p-4 ms-auto w-100" style="max-width: 21.25rem;">
              <div className="widget mb-4">
                <h3 className="widget-title">Popular products</h3>
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
                <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/widget/04.jpg" width="64" alt="Product"></a>
                  <div className="ps-2">
                    <h6 className="widget-product-title"><a href="shop-single-v1.html">Regular Fit Cotton Shirt</a></h6>
                    <div className="widget-product-meta"><span className="text-accent me-2">$17.<small>99</small></span></div>
                  </div>
                </div>
                <div className="d-flex align-items-center py-2"><a className="d-block" href="shop-single-v1.html"><img src="/img/shop/widget/05.jpg" width="64" alt="Product"></a>
                  <div className="ps-2">
                    <h6 className="widget-product-title"><a href="shop-single-v1.html">Boy's Shorts with Print</a></h6>
                    <div className="widget-product-meta"><span className="text-accent me-2">$12.<small>40</small></span></div>
                  </div>
                </div>
              </div>
              <div className="position-relative bg-size-cover bg-position-center rounded-3 py-5 mb-grid-gutter" style="background-image: url(img/blog/banner-bg.jpg);">
                <div className="py-5 px-4 text-center">
                  <h5 className="mb-2">Your Add Banner Here</h5>
                  <p className="fs-sm text-muted">Hurry up to reserve your spot</p><a className="btn btn-info btn-shadow btn-sm stretched-link" href="#">Contact Us</a>
                </div>
              </div>
              <div className="position-relative bg-faded-primary rounded-3 overflow-hidden pt-4">
                <div className="py-4 px-4 text-center">
                  <p className="fs-sm text-muted mb-2">Converse All Star</p>
                  <h5 className="mb-3">Make Your Day Comfortable</h5><a className="btn btn-primary btn-shadow btn-sm stretched-link" href="#">Shop Now</a>
                </div><img src="/img/shop/catalog/banner2.jpg" alt="Banner">
              </div>
            </div>
          </aside>
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
          <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Bandicoot Studio</a></div>
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
    <script src="vendor/nouislider/dist/nouislider.min.js"></script>
    <script src="vendor/drift-zoom/dist/Drift.min.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>