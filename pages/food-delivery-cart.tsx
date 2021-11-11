<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Food Delivery - Cart</title>
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
      <!-- Navbar for Food Delivery Service demo-->
      <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
      <header className="navbar d-block navbar-sticky navbar-expand-lg navbar-light bg-light">
        <div className="container"><a className="navbar-brand d-none d-sm-block me-4 order-lg-1" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none me-2 order-lg-1" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
          <div className="navbar-toolbar d-flex align-items-center order-lg-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool d-none d-lg-flex" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#searchBox" role="button" aria-expanded="false" aria-controls="searchBox"><span className="navbar-tool-tooltip">Search</span>
              <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div></a><a className="navbar-tool ms-2" href="#signin-modal" data-bs-toggle="modal"><span className="navbar-tool-tooltip">Account</span>
              <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div></a>
            <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="food-delivery-cart.html"><span className="navbar-tool-label">3</span><i className="navbar-tool-icon ci-cart"></i></a>
              <!-- Cart dropdown-->
              <div className="dropdown-menu dropdown-menu-end">
                <div className="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                  <div style="height: 15rem;" data-simplebar data-simplebar-auto-hide="false">
                    <div className="widget-cart-item pb-2 border-bottom">
                      <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div className="d-flex align-items-center"><a className="d-block" href="#"><img src="/img/food-delivery/cart/th01.jpg" width="64" alt="Pizza"></a>
                        <div className="ps-2">
                          <h6 className="widget-product-title"><a href="#">Pizza Pepperoni with Tomatoes</a></h6>
                          <div className="widget-product-meta"><span className="text-accent me-2">$9.<small>00</small></span><span className="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-cart-item py-2 border-bottom">
                      <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div className="d-flex align-items-center"><a className="d-block" href="#"><img src="/img/food-delivery/cart/th02.jpg" width="64" alt="Burger"></a>
                        <div className="ps-2">
                          <h6 className="widget-product-title"><a href="#">Beef Burger with Fries</a></h6>
                          <div className="widget-product-meta"><span className="text-accent me-2">$12.<small>00</small></span><span className="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-cart-item py-2 border-bottom">
                      <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div className="d-flex align-items-center"><a className="d-block" href="#"><img src="/img/food-delivery/cart/th03.jpg" width="64" alt="Drink"></a>
                        <div className="ps-2">
                          <h6 className="widget-product-title"><a href="#">Coca Cola Can, 335ml</a></h6>
                          <div className="widget-product-meta"><span className="text-accent me-2">$1.<small>00</small></span><span className="text-muted">x 3</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <div className="fs-sm me-2 py-2"><span className="text-muted">Total:</span><span className="text-accent fs-base ms-1">$24.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="food-delivery-cart.html">Expand cart<i className="ci-arrow-right ms-1 me-n1"></i></a>
                  </div><a className="btn btn-primary btn-sm d-block w-100" href="food-delivery-checkout.html"><i className="ci-card me-2 fs-base align-middle"></i>Checkout</a>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
            <!-- Search (mobile)-->
            <div className="d-lg-none py-3">
              <div className="input-group"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input className="form-control rounded-start" type="text" placeholder="What do you need?">
              </div>
            </div>
            <!-- Location dropdown-->
            <ul className="navbar-nav navbar-mega-nav ms-lg-4 pe-lg-2 me-lg-2">
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-location me-2"></i>New York</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Los Angeles</a></li>
                  <li><a className="dropdown-item" href="#">Chicago</a></li>
                  <li><a className="dropdown-item" href="#">Houston</a></li>
                  <li><a className="dropdown-item" href="#">Philadelphia</a></li>
                  <li><a className="dropdown-item" href="#">San Diego</a></li>
                  <li><a className="dropdown-item" href="#">Miami</a></li>
                </ul>
              </li>
            </ul>
            <!-- Primary menu-->
            <ul className="navbar-nav">
              <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Cuisine</a>
                <div className="dropdown-menu px-2 ps-0 pb-4">
                  <div className="d-flex">
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/burger.svg" width="60" alt="Burgers &amp; Fries">
                          <h6 className="fs-base text-center">Burgers &amp; Fries</h6></a></div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/noodles.svg" width="60" alt="Noodles">
                          <h6 className="fs-base text-center">Noodles</h6></a></div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/pizza.svg" width="60" alt="Pizza &amp; Pasta">
                          <h6 className="fs-base text-center">Pizza &amp; Pasta</h6></a></div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/steak.svg" width="60" alt="Grill &amp; Steaks">
                          <h6 className="fs-base text-center">Grill &amp; Steaks</h6></a></div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/fish.svg" width="60" alt="Fish &amp; Seafood">
                          <h6 className="fs-base text-center">Fish &amp; Seafood</h6></a></div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/healthy.svg" width="60" alt="Healthy Food">
                          <h6 className="fs-base text-center">Healthy Food</h6></a></div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/cuisine.svg" width="60" alt="Haute Cuisine">
                          <h6 className="fs-base text-center">Haute Cuisine</h6></a></div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/chicken.svg" width="60" alt="Chicken &amp; Snaks">
                          <h6 className="fs-base text-center">Chicken &amp; Snaks</h6></a></div>
                    </div>
                    <div className="mega-dropdown-column pt-4 px-3" style="width: 12rem;">
                      <div className="widget mb-3"><a className="d-block" href="food-delivery-category.html"><img className="d-block mx-auto mb-3" src="/img/food-delivery/icons/coffee.svg" width="60" alt="Coffee &amp; Desserts">
                          <h6 className="fs-base text-center">Coffee &amp; Desserts</h6></a></div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="index.html">Back to main demo</a></li>
            </ul>
          </div>
        </div>
        <!-- Search collapse-->
        <div className="search-box collapse" id="searchBox">
          <div className="container py-2">
            <div className="input-group"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input className="form-control rounded-start" type="text" placeholder="What do you need?">
            </div>
          </div>
        </div>
      </header>
      <div className="container pt-4 pb-3 py-sm-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
            <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
            <li className="breadcrumb-item text-nowrap active" aria-current="page">Cart</li>
          </ol>
        </nav>
        <div className="rounded-3 shadow-lg mt-4 mb-5">
          <ul className="nav nav-tabs nav-justified mb-4">
            <li className="nav-item"><a className="nav-link fs-lg fw-medium py-4 active" href="food-delivery-cart.html">1. Your order</a></li>
            <li className="nav-item"><a className="nav-link fs-lg fw-medium py-4" href="food-delivery-checkout.html">2. Checkout</a></li>
          </ul>
          <div className="px-3 px-sm-4 px-xl-5 pt-1 pb-4 pb-sm-5">
            <div className="row">
              <!-- Items in cart-->
              <div className="col-lg-8 col-md-7 pt-sm-2">
                <!-- Item-->
                <div className="d-sm-flex justify-content-between align-items-center mt-3 mb-4 pb-3 border-bottom">
                  <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="#"><img src="/img/food-delivery/cart/01.jpg" width="120" alt="Pizza"></a>
                    <div className="pt-2">
                      <h3 className="product-title fs-base mb-2"><a href="#">Pizza Pepperoni with Tomatoes</a></h3>
                      <div className="fs-sm"><span className="text-muted me-2">Size:</span>Medium</div>
                      <div className="fs-sm"><span className="text-muted me-2">Base:</span>Standard</div>
                      <div className="fs-lg text-accent pt-2">$9.<small>00</small></div>
                    </div>
                  </div>
                  <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                    <label className="form-label" htmlFor="quantity1">Quantity</label>
                    <input className="form-control" type="number" id="quantity1" value="1" min="1">
                    <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                  </div>
                </div>
                <!-- Item-->
                <div className="d-sm-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                  <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="#"><img src="/img/food-delivery/cart/02.jpg" width="120" alt="Burger"></a>
                    <div className="pt-2">
                      <h3 className="product-title fs-base mb-2"><a href="#">Beef Burger with Fries</a></h3>
                      <div className="fs-sm"><span className="text-muted me-2">Size:</span>XL</div>
                      <div className="fs-sm"><span className="text-muted me-2">Sauce:</span>Barbeque</div>
                      <div className="fs-lg text-accent pt-2">$12.<small>00</small></div>
                    </div>
                  </div>
                  <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                    <label className="form-label" htmlFor="quantity2">Quantity</label>
                    <input className="form-control" type="number" id="quantity2" value="1" min="1">
                    <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                  </div>
                </div>
                <!-- Item-->
                <div className="d-sm-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                  <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="#"><img src="/img/food-delivery/cart/03.jpg" width="120" alt="Drink"></a>
                    <div className="pt-2">
                      <h3 className="product-title fs-base mb-2"><a href="#">Coca Cola Can, 335ml</a></h3>
                      <div className="fs-sm"><span className="text-muted me-2">Size:</span>335ml</div>
                      <div className="fs-lg text-accent pt-2">$1.<small>00</small></div>
                    </div>
                  </div>
                  <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">
                    <label className="form-label" htmlFor="quantity3">Quantity</label>
                    <input className="form-control" type="number" id="quantity3" value="3" min="1">
                    <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
                  </div>
                </div>
              </div>
              <!-- Sidebar-->
              <div className="col-lg-4 col-md-5 pt-3 pt-sm-4">
                <div className="rounded-3 bg-secondary px-3 px-sm-4 py-4">
                  <div className="text-center mb-4 pb-3 border-bottom">
                    <h3 className="h5 mb-3 pb-1">Total</h3>
                    <h4 className="fw-normal">$24.<small>00</small></h4>
                  </div>
                  <div className="mb-4">
                    <label className="form-label mb-3" htmlFor="order-comments"><span className="badge bg-info fs-xs me-2">Note</span>Additional comments</label>
                    <textarea className="form-control" rows="4" id="order-comments"></textarea>
                  </div>
                  <h3 className="h6 mb-4">Apply promo code</h3>
                  <form className="needs-validation" method="post" noValidate>
                    <div className="mb-3">
                      <input className="form-control" type="text" placeholder="Promo code" required />
                      <div className="invalid-feedback">Please provide promo code.</div>
                    </div>
                    <button className="btn btn-outline-primary d-block w-100" type="submit">Apply promo code</button>
                  </form><a className="btn btn-primary btn-shadow d-block w-100 mt-4 mb-3" href="food-delivery-checkout.html"><i className="ci-card fs-lg me-2"></i>Proceed to Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer-->
    <footer className="footer bg-darker pt-5">
      <div className="container pt-2">
        <div className="row pb-2">
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
              <h3 className="widget-title text-light">Join us</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Careers</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Restaurants</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Become a Courier</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">About</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Let us help you</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Help Center</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Support</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Contacts</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="widget widget-links widget-light pb-2 mb-4">
              <h3 className="widget-title text-light">Follow us</h3>
              <ul className="widget-list">
                <li className="widget-list-item"><a className="widget-list-link" href="#">Facebook</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Twitter</a></li>
                <li className="widget-list-item"><a className="widget-list-link" href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-8">
            <div className="widget pb-2 mb-4">
              <h3 className="widget-title text-light pb-1">Download our app</h3>
              <div className="d-flex flex-wrap"><a className="btn-market btn-apple border border-light me-3 mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a><a className="btn-market btn-google border border-light mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
            </div>
          </div>
        </div>
        <hr className="hr-light mt-md-2 mb-3">
        <div className="d-md-flex justify-content-between pt-4 pb-1">
          <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
          <div className="widget widget-links widget-light pb-4">
            <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
              <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Privacy Policy</a></li>
              <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Terms &amp; Conditions</a></li>
              <li className="widget-list-item ms-4"><a className="widget-list-link fs-ms" href="#">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- Toolbar for handheld devices (Food delivery)-->
    <div className="handheld-toolbar">
      <div className="d-table table-layout-fixed w-100"><a className="d-table-cell handheld-toolbar-item" href="#signin-modal" data-bs-toggle="modal"><span className="handheld-toolbar-icon"><i className="ci-user"></i></span><span className="handheld-toolbar-label">Account</span></a><a className="d-table-cell handheld-toolbar-item" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onclick="window.scrollTo(0, 0)"><span className="handheld-toolbar-icon"><i className="ci-menu"></i></span><span className="handheld-toolbar-label">Menu</span></a><a className="d-table-cell handheld-toolbar-item" href="food-delivery-cart.html"><span className="handheld-toolbar-icon"><i className="ci-cart"></i><span className="badge bg-primary rounded-pill ms-1">3</span></span><span className="handheld-toolbar-label">$24.00</span></a></div>
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