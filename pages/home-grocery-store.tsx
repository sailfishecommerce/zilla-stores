<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Grocery Store</title>
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
    <!-- Main Theme Styles + Bootstrap-->
    <link rel="stylesheet" media="screen" href="css/theme.min.css">
  </head>
  <!-- Body-->
  <body className="bg-secondary">
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
    <!-- Navbar-->
    <header className="bg-light shadow-sm fixed-top" data-fixed-element>
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid"><a className="navbar-brand d-none d-sm-block me-3 me-xl-4 flex-shrink-0" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a className="navbar-brand d-sm-none me-2" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
          <!-- Search-->
          <div className="input-group d-none d-lg-flex flex-nowrap mx-4"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input className="form-control rounded-start w-100" type="text" placeholder="Search for products">
            <select className="form-select flex-shrink-0" style="width: 14rem;">
              <option>All categories</option>
              <option>Bakery</option>
              <option>Fruits and Vegetables</option>
              <option>Dairy and Eggs</option>
              <option>Meat and Poultry</option>
              <option>Fish and Seafood</option>
              <option>Sauces and Spices</option>
              <option>Canned Food and Oil</option>
              <option>Alcoholic Beverages</option>
              <option>Soft Drinks and Juice</option>
              <option>Packets, Cereals</option>
              <option>Frozen</option>
              <option>Snaks, Sweets and Chips</option>
              <option>Personal hygiene</option>
              <option>Kitchenware</option>
            </select>
          </div>
          <!-- Toolbar-->
          <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center ms-xl-2">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool d-flex d-lg-none" href="#searchBox" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="searchBox"><span className="navbar-tool-tooltip">Search</span>
              <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-search"></i></div></a><a className="navbar-tool d-none d-lg-flex" href="#"><span className="navbar-tool-tooltip">Wishlist</span>
              <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-heart"></i></div></a><a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
              <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
              <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
            <div className="navbar-tool dropdown ms-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="grocery-checkout.html"><span className="navbar-tool-label">3</span><i className="navbar-tool-icon ci-cart"></i></a><a className="navbar-tool-text" href="grocery-checkout.html"><small>My Cart</small>$25.00</a>
              <div className="dropdown-menu dropdown-menu-end">
                <div className="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                  <div style="height: 15rem;" data-simplebar data-simplebar-auto-hide="false">
                    <div className="widget-cart-item pb-2 border-bottom">
                      <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div className="d-flex align-items-center"><a className="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th01.jpg" width="64" alt="Product"></a>
                        <div className="ps-2">
                          <h6 className="widget-product-title"><a href="grocery-single.html">Frozen Oven-ready Poultry</a></h6>
                          <div className="widget-product-meta"><span className="text-accent me-2">$15.<small>00</small></span><span className="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-cart-item py-2 border-bottom">
                      <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div className="d-flex align-items-center"><a className="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th02.jpg" width="64" alt="Product"></a>
                        <div className="ps-2">
                          <h6 className="widget-product-title"><a href="grocery-single.html">Nut Chocolate Paste (750g)</a></h6>
                          <div className="widget-product-meta"><span className="text-accent me-2">$6.<small>50</small></span><span className="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-cart-item py-2 border-bottom">
                      <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div className="d-flex align-items-center"><a className="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th03.jpg" width="64" alt="Product"></a>
                        <div className="ps-2">
                          <h6 className="widget-product-title"><a href="grocery-single.html">Mozzarella Mini Cheese</a></h6>
                          <div className="widget-product-meta"><span className="text-accent me-2">$3.<small>50</small></span><span className="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between align-items-center pt-3">
                    <div className="fs-sm me-2 py-2"><span className="text-muted">Total:</span><span className="text-accent fs-base ms-1">$25.<small>00</small></span></div><a className="btn btn-primary btn-sm" href="grocery-checkout.html"><i className="ci-card me-2 fs-base align-middle"></i>Checkout<i className="ci-arrow-right ms-1 me-n1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Search collapse-->
      <div className="collapse" id="searchBox">
        <div className="card pt-2 pb-4 border-0 rounded-0">
          <div className="container">
            <div className="input-group"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input className="form-control rounded-start" type="text" placeholder="Search for products">
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Sidebar menu-->
    <aside className="offcanvas offcanvas-expand w-100 border-end zindex-lg-5 pt-lg-5" id="sideNav" style="max-width: 21.875rem;">
      <div className="pt-2 d-none d-lg-block"></div>
      <ul className="nav nav-tabs nav-justified mt-4 mt-lg-5 mb-0" role="tablist" style="min-height: 3rem;">
        <li className="nav-item"><a className="nav-link fw-medium active" href="#categories" data-bs-toggle="tab" role="tab">Categories</a></li>
        <li className="nav-item"><a className="nav-link fw-medium" href="#menu" data-bs-toggle="tab" role="tab">Menu</a></li>
        <li className="nav-item d-lg-none"><a className="nav-link fs-sm" href="#" data-bs-dismiss="offcanvas" role="tab"><i className="ci-close fs-xs me-2"></i>Close</a></li>
      </ul>
      <div className="offcanvas-body px-0 pt-3 pb-0" data-simplebar>
        <div className="tab-content">
          <!-- Categories-->
          <div className="sidebar-nav tab-pane fade show active" id="categories" role="tabpanel">
            <div className="widget widget-categories">
              <div className="accordion" id="shop-categories">
                <!-- Special offers-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter"><a className="nav-link-style d-block fs-md fw-normal py-3" href="#"><span className="d-flex align-items-center"><i className="ci-discount fs-lg text-danger mt-n1 me-2"></i>Special Offers</span></a></h3>
                </div>
                <!-- Bakery-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#bakery" aria-expanded="false" aria-controls="bakery"><span className="d-flex align-items-center"><i className="ci-bread fs-lg opacity-60 mt-n1 me-2"></i>Bakery</span></button>
                  </h3>
                  <div className="collapse" id="bakery" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Bread</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Baguette</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Loaves</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Ciabatta</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Wheat bread</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Corn bread</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Rye bread</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Rye wheat bread</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Bagels</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Puff pastry</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Stuffed buns</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Buns, sweet cheese danish</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Pita and Flatbread</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fruits and Vegetables-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#fruits" aria-expanded="false" aria-controls="fruits"><span className="d-flex align-items-center"><i className="ci-apple fs-lg opacity-60 mt-n1 me-2"></i>Fruits and Vegetables</span></button>
                  </h3>
                  <div className="collapse" id="fruits" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fruits</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Pears, apples, quinces</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Bananas, pineapples, kiwi</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Citrus</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Peaches, plums, apricots</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Grapes</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Exotic fruits</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Berries</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Vegetables</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Mushrooms</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fresh greens</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Dried fruits</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Dairy and Eggs-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#dairy" aria-expanded="false" aria-controls="dairy"><span className="d-flex align-items-center"><i className="ci-cheese fs-lg opacity-60 mt-n1 me-2"></i>Dairy and Eggs</span></button>
                  </h3>
                  <div className="collapse" id="dairy" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Milk</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Pasteurized milk</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Condensed milk</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Sterilized milk</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Baked milk</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Powder milk</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Coconut milk</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cheese</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Hard cheese</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Semi-hard cheese</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Pickled</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Soft cheese</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Cream-cheese</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Sour cream</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Yogurt</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Sour-milk drinks</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Butter and margarine</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Desserts</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cream</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Eggs</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Meat and Poultry-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#meat" aria-expanded="false" aria-controls="meat"><span className="d-flex align-items-center"><i className="ci-ham-leg fs-lg opacity-60 mt-n1 me-2"></i>Meat and Poultry</span></button>
                  </h3>
                  <div className="collapse" id="meat" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fresh meat</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Pork</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Beef</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Rabbit</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Chicken</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Turkey</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Lamb</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Duck</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Minced meat</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Frozen ready-to-cook</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Sausages</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Meat delicatessen</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Ham</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Cold boiled pork</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Bacon</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Smoked meat</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Jamon</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Cooled meals</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fish and Seafood-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#fish" aria-expanded="false" aria-controls="fish"><span className="d-flex align-items-center"><i className="ci-fish fs-lg opacity-60 me-2"></i>Fish and Seafood</span></button>
                  </h3>
                  <div className="collapse" id="fish" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fresh fish</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Prepared fish</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Light-salted fish</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Marinated fish</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Butter with fish</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Smoked fish</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Dried fish</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Seafood</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Sushi</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Sauces and Spices-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sauces" aria-expanded="false" aria-controls="sauces"><span className="d-flex align-items-center"><i className="ci-fish fs-lg opacity-60 me-2"></i>Sauces and Spices</span></button>
                  </h3>
                  <div className="collapse" id="sauces" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Mayonnese</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Sauces</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Cooking base</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Mustard</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Soy sauce</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Tomato paste</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Barbecue sauce</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Tartar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Hot sauces</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Balsamic sauce</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Salad dressing</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Curry sauce</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Garlic sauce</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="#">Pesto sauce</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Ketchup</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Herbs and spices</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Salt</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Canned Food and Oil-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#canned" aria-expanded="false" aria-controls="canned"><span className="d-flex align-items-center"><i className="ci-canned-food fs-lg opacity-60 me-2"></i>Canned Food and Oil</span></button>
                  </h3>
                  <div className="collapse" id="canned" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Oils and vinegar</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Canned meat</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Canned fish</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Canned fruit</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Canned vegetables</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Salads and pickles</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Olives</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Pate</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Jam, fruit paste, confiture</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Honey</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Alcoholic Beverages-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#alcoholic" aria-expanded="false" aria-controls="alcoholic"><span className="d-flex align-items-center"><i className="ci-wine fs-lg opacity-60 me-2"></i>Alcoholic Beverages</span></button>
                  </h3>
                  <div className="collapse" id="alcoholic" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Beer</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Wine</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Champagne and sparkling wine</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Alcopops</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Hard liquor</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Liquor</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Soft Drinks and Juice-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#drinks" aria-expanded="false" aria-controls="drinks"><span className="d-flex align-items-center"><i className="ci-juice fs-lg opacity-60 me-2"></i>Soft Drinks and Juice</span></button>
                  </h3>
                  <div className="collapse" id="drinks" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Mineral water</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Juice</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Nectar</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Smoothie</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fruit drincs</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Soda</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Tea</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Coffee</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Ice tea</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cocoa drinks</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Hot chocolate</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Topping</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Packets, Cereals-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#packets" aria-expanded="false" aria-controls="packets"><span className="d-flex align-items-center"><i className="ci-corn fs-lg opacity-60 me-2"></i>Packets, Cereals</span></button>
                  </h3>
                  <div className="collapse" id="packets" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Pasta</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cereal</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Flour</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Porridge and muesli</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Snack meals</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">For baking</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Sugar and sweetener</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Soy food</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Supplements</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Frozen-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#frozen" aria-expanded="false" aria-controls="frozen"><span className="d-flex align-items-center"><i className="ci-frozen fs-lg opacity-60 me-2"></i>Frozen</span></button>
                  </h3>
                  <div className="collapse" id="frozen" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fish</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Meat and poultry</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Salads</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Seafood</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Pizza and breads</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Ready meals</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Fruits</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Vegetables</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Ice-cream</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Frozen bakery</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Personal hygiene-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#hygiene" aria-expanded="false" aria-controls="hygiene"><span className="d-flex align-items-center"><i className="ci-toothbrush fs-lg opacity-60 me-2"></i>Personal hygiene</span></button>
                  </h3>
                  <div className="collapse" id="hygiene" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Oral care</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cotton pads</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">For ladies</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">For shaving and epilation</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cosmetic wipes</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Soap</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Kitchenware-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#kitchenware" aria-expanded="false" aria-controls="kitchenware"><span className="d-flex align-items-center"><i className="ci-pot fs-lg opacity-60 me-2"></i>Kitchenware</span></button>
                  </h3>
                  <div className="collapse" id="kitchenware" data-bs-parent="#shop-categories">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="#">View all</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Glasses, decanters</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Cookware</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Tableware</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Kitchenware</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Food storage</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="#">Disposable tableware</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Menu-->
          <div className="sidebar-nav tab-pane fade" id="menu" role="tabpanel">
            <div className="widget widget-categories">
              <div className="accordion" id="shop-menu">
                <!-- Homepages-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#home" aria-expanded="false" aria-controls="home">Homepages</button>
                  </h3>
                  <div className="collapse" id="home" data-bs-parent="#shop-menu">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="home-fashion-store-v1.html">Fashion Store v.1</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="home-electronics-store.html">Electronics Store</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="home-marketplace.html">Multi-vendor Marketplace</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="home-grocery-store.html">Grocery Store</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="home-food-delivery.html">Food Delivery Service</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="home-fashion-store-v2.html">Fashion Store v.2</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="home-single-store.html">Single Product/Brand Store</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Shop-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#shop" aria-expanded="false" aria-controls="shop">Shop</button>
                  </h3>
                  <div className="collapse" id="shop" data-bs-parent="#shop-menu">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Shop Layouts</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Marketplace</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Grocery Store</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Food Delivery</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Shop pages</a>
                            <ul className="widget-list pt-1">
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Account-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#account" aria-expanded="false" aria-controls="account">Account</button>
                  </h3>
                  <div className="collapse" id="account" data-bs-parent="#shop-menu">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Shop User Account</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="account-orders.html">Orders History</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="account-profile.html">Profile Settings</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="account-address.html">Account Addresses</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="account-payment.html">Payment Methods</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="account-wishlist.html">Wishlist</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="account-tickets.html">My Tickets</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="account-single-ticket.html">Single Ticket</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Vendor Dashboard</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-settings.html">Settings</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-purchases.html">Purchases</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-favorites.html">Favorites</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-sales.html">Sales</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-products.html">Products</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-add-new-product.html">Add New Product</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="dashboard-payouts.html">Payouts</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link" href="account-signin.html">Sign In / Sign Up</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="account-password-recovery.html">Password Recovery</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Pages-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-controls="pages">Pages</button>
                  </h3>
                  <div className="collapse" id="pages" data-bs-parent="#shop-menu">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="about.html">About Us</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="contacts.html">Contacts</a></li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Help Center</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="help-topics.html">Help Topics</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="help-single-topic.html">Single Topic</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="help-submit-request.html">Submit a Request</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">404 Not Found</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="404-simple.html">404 - Simple Text</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="404-illustration.html">404 - Illustration</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Blog-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#blog" aria-expanded="false" aria-controls="blog">Blog</button>
                  </h3>
                  <div className="collapse" id="blog" data-bs-parent="#shop-menu">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Blog List Layouts</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="blog-list-sidebar.html">List with Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="blog-list.html">List no Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Blog Grid Layouts</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="blog-grid.html">Grid no Sidebar</a></li>
                            </ul>
                          </li>
                          <li className="widget-list-item"><a className="widget-list-link fw-medium" href="#">Single Post Layouts</a>
                            <ul className="widget-list pt-1">
                              <li className="widget-list-item"><a className="widget-list-link" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                              <li className="widget-list-item"><a className="widget-list-link" href="blog-single.html">Article no Sidebar</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Docs-->
                <div className="accordion-item border-bottom">
                  <h3 className="accordion-header px-grid-gutter">
                    <button className="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#docs" aria-expanded="false" aria-controls="docs">Docs / Components</button>
                  </h3>
                  <div className="collapse" id="docs" data-bs-parent="#shop-menu">
                    <div className="px-grid-gutter pt-1 pb-4">
                      <div className="widget widget-links">
                        <ul className="widget-list">
                          <li className="widget-list-item"><a className="widget-list-link" href="docs/dev-setup.html">Documentation</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="components/typography.html">Components</a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="docs/changelog.html">Changelog<span className="badge bg-success ms-2">v1.4</span></a></li>
                          <li className="widget-list-item"><a className="widget-list-link" href="mailto:contact@createx.studio">Support</a></li>
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
      <div className="offcanvas-footer d-block px-grid-gutter pt-4 pb-4 mb-2">
        <div className="d-flex mb-3"><i className="ci-support h4 mb-0 fw-normal text-primary mt-1 me-1"></i>
          <div className="ps-2">
            <div className="text-muted fs-sm">Support</div><a className="nav-link-style fs-md" href="tel:+100331697720">+1 (00) 33 169 7720</a>
          </div>
        </div>
        <div className="d-flex mb-3"><i className="ci-mail h5 mb-0 fw-normal text-primary mt-1 me-1"></i>
          <div className="ps-2">
            <div className="text-muted fs-sm">Email</div><a className="nav-link-style fs-md" href="mailto:customer@example.com">customer@example.com</a>
          </div>
        </div>
        <h6 className="pt-2 pb-1">Follow us</h6><a className="btn-social bs-outline bs-twitter me-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-outline bs-facebook me-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-outline bs-instagram me-2 mb-2" href="#"><i className="ci-instagram"></i></a><a className="btn-social bs-outline bs-youtube me-2 mb-2" href="#"><i className="ci-youtube"></i></a>
      </div>
    </aside>
    <!-- Page-->
    <main className="offcanvas-enabled" style="padding-top: 5rem;">
      <section className="ps-lg-4 pe-lg-3 pt-4">
        <div className="px-3 pt-2">
          <!-- Page title + breadcrumb-->
          <!-- Content-->
          <!-- Slider-->
          <section className="tns-carousel mb-3 mb-md-5">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 1, &quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false, &quot;responsive&quot;: {&quot;0&quot;: {&quot;nav&quot;: true, &quot;controls&quot;: false}, &quot;576&quot;: {&quot;nav&quot;: false, &quot;controls&quot;: true}}}">
              <!-- Slide 1-->
              <div>
                <div className="rounded-3 px-md-5 text-center text-xl-start" style="background-color: #59c879;">
                  <div className="d-xl-flex justify-content-between align-items-center px-4 px-sm-5 mx-auto" style="max-width: 1226px;">
                    <div className="py-5 me-xl-4 mx-auto mx-xl-0" style="max-width: 490px;">
                      <h2 className="h1 text-light">Fresh Foods a Click Away</h2>
                      <p className="text-light pb-4">Order any goods from our store online and we deliver them to your door at a time convenient for you.</p>
                      <h5 className="text-light pb-3">On the go? Try our mobile app</h5>
                      <div className="d-flex flex-wrap justify-content-center justify-content-xl-start"><a className="btn-market btn-apple me-2 mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a><a className="btn-market btn-google mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
                    </div>
                    <div><img src="/img/grocery/slider/slide01.jpg" alt="Image"></div>
                  </div>
                </div>
              </div>
              <!-- Slide 2-->
              <div>
                <div className="rounded-3 px-md-5 text-center text-xl-start" style="background-color: #1a6fb0;">
                  <div className="d-xl-flex justify-content-between align-items-center px-4 px-sm-5 mx-auto" style="max-width: 1226px;">
                    <div className="py-5 me-xl-4 mx-auto mx-xl-0" style="max-width: 490px;">
                      <h2 className="h1 text-light">24/7 Delivery Service</h2>
                      <p className="text-light pb-4">Order any goods from our store online and we deliver them to your door at a time convenient for you.</p>
                      <h5 className="text-light pb-3">On the go? Try our mobile app</h5>
                      <div className="d-flex flex-wrap justify-content-center justify-content-xl-start"><a className="btn-market btn-apple me-2 mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a><a className="btn-market btn-google mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
                    </div>
                    <div><img src="/img/grocery/slider/slide02.jpg" alt="Image"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- How it works-->
          <section className="pt-4 mb-4 mb-md-5">
            <h2 className="h3 text-center mb-grid-gutter pt-2">How it works?</h2>
            <div className="row g-0 bg-light rounded-3">
              <div className="col-xl-4 col-lg-12 col-md-4 border-end">
                <div className="py-3">
                  <div className="d-flex align-items-center mx-auto py-3 px-3" style="max-width: 362px;">
                    <div className="display-3 fw-normal opacity-15 me-4">01</div>
                    <div className="ps-2"><img className="d-block my-2" src="/img/grocery/steps/01.png" width="72" alt="Order online">
                      <p className="mb-3 pt-1">You order your favorite products online</p>
                    </div>
                  </div>
                  <hr className="d-md-none d-lg-block d-xl-none">
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-4 border-end">
                <div className="py-3">
                  <div className="d-flex align-items-center mx-auto py-3 px-3" style="max-width: 362px;">
                    <div className="display-3 fw-normal opacity-15 me-4">02</div>
                    <div className="ps-2"><img className="d-block my-2" src="/img/grocery/steps/02.png" width="72" alt="Grocery collected">
                      <p className="mb-3 pt-1">A personal assistant collects the products from your list</p>
                    </div>
                  </div>
                  <hr className="d-md-none d-lg-block d-xl-none">
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-4">
                <div className="py-3">
                  <div className="d-flex align-items-center mx-auto py-3 px-3" style="max-width: 362px;">
                    <div className="display-3 fw-normal opacity-15 me-4">03</div>
                    <div className="ps-2"><img className="d-block my-2" src="/img/grocery/steps/03.png" width="72" alt="Delivery">
                      <p className="mb-3 pt-1">We deliver to the door at a time convenient for you</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Discounted products (Carousel)-->
          <section className="pt-3 pt-md-4">
            <!-- Heading-->
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
              <h2 className="h3 mb-0 pt-3 me-3">Discounted products</h2>
              <div className="pt-3"><a className="btn btn-outline-accent btn-sm" href="grocery-catalog.html">More products<i className="ci-arrow-right ms-1 me-n1"></i></a></div>
            </div>
            <div className="tns-carousel tns-controls-static tns-controls-outside tns-nav-enabled pt-2">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;gutter&quot;: 16, &quot;controls&quot;: true, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1}, &quot;480&quot;:{&quot;items&quot;:2}, &quot;720&quot;:{&quot;items&quot;:3}, &quot;991&quot;:{&quot;items&quot;:2}, &quot;1140&quot;:{&quot;items&quot;:3}, &quot;1300&quot;:{&quot;items&quot;:4}, &quot;1500&quot;:{&quot;items&quot;:5}}}">
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/01.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Fruits and Vegetables</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Coconut, Indonesia (piece)</a></h3>
                      <div className="product-price"><span className="text-accent">$1.<small>99</small></span>
                        <del className="fs-sm text-muted">$2.<small>99</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/02.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Dairy and Eggs</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Soft Creme Cheese (200g)</a></h3>
                      <div className="product-price"><span className="text-accent">$2.<small>99</small></span>
                        <del className="fs-sm text-muted">$3.<small>99</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/03.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Soft Drinks and Juice</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Pepsi Soda Can (.33ml)</a></h3>
                      <div className="product-price"><span className="text-accent">$1.<small>00</small></span>
                        <del className="fs-sm text-muted">$1.<small>25</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/04.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Fruits and Vegetables</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Fresh Orange, Spain (1kg)</a></h3>
                      <div className="product-price"><span className="text-accent">$1.<small>15</small></span>
                        <del className="fs-sm text-muted">$1.<small>75</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/05.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Personal hygiene</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Moisture Body Lotion (250ml)</a></h3>
                      <div className="product-price"><span className="text-accent">$4.<small>20</small></span>
                        <del className="fs-sm text-muted">$5.<small>99</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/06.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Snacks, Sweets and Chips</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Nut Chocolate Paste (750g)</a></h3>
                      <div className="product-price"><span className="text-accent">$6.<small>50</small></span>
                        <del className="fs-sm text-muted">$7.<small>99</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3"><span className="badge bg-danger badge-shadow">Sale</span>
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/07.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Dairy and Eggs</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Mozzarella Mini Cheese</a></h3>
                      <div className="product-price"><span className="text-accent">$3.<small>50</small></span>
                        <del className="fs-sm text-muted">$4.<small>99</small></del>
                      </div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Bestsellers (Carousel)-->
          <section className="pt-5 pb-4">
            <!-- Heading-->
            <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
              <h2 className="h3 mb-0 pt-3 me-3">Bestsellers</h2>
              <div className="pt-3"><a className="btn btn-outline-accent btn-sm" href="grocery-catalog.html">More products<i className="ci-arrow-right ms-1 me-n1"></i></a></div>
            </div>
            <div className="tns-carousel tns-controls-static tns-controls-outside tns-dots-enabled pt-2">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;gutter&quot;: 16, &quot;controls&quot;: true, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1}, &quot;480&quot;:{&quot;items&quot;:2}, &quot;720&quot;:{&quot;items&quot;:3}, &quot;991&quot;:{&quot;items&quot;:2}, &quot;1140&quot;:{&quot;items&quot;:3}, &quot;1300&quot;:{&quot;items&quot;:4}, &quot;1500&quot;:{&quot;items&quot;:5}}}">
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/08.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Dairy and Eggs</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Mozzarella Cheese (125g)</a></h3>
                      <div className="product-price"><span className="text-accent">$4.<small>30</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/09.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Personal hygiene</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Men’s Shampoo (400ml)</a></h3>
                      <div className="product-price"><span className="text-accent">$5.<small>99</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/10.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Meat and Poultry</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Frozen Oven-ready Poultry</a></h3>
                      <div className="product-price"><span className="text-accent">$12.<small>00</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/11.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Snacks, Sweets and Chips</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Dark Chocolate with Nuts</a></h3>
                      <div className="product-price"><span className="text-accent">$2.<small>50</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/12.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Canned Food and Oil</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Corn Oil Bottle (500ml)</a></h3>
                      <div className="product-price"><span className="text-accent">$3.<small>10</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/13.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Fish and Seafood</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Steak Salmon Fillet (1kg)</a></h3>
                      <div className="product-price"><span className="text-accent">$17.<small>99</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
                <!-- Product-->
                <div>
                  <div className="card product-card card-static pb-3">
                    <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="grocery-single.html"><img src="/img/grocery/catalog/14.jpg" alt="Product"></a>
                    <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Canned Food and Oil</a>
                      <h3 className="product-title fs-sm text-truncate"><a href="grocery-single.html">Sardine in Tomato Sauce (105g)</a></h3>
                      <div className="product-price"><span className="text-accent">$3.<small>25</small></span></div>
                    </div>
                    <div className="product-floating-btn">
                      <button className="btn btn-primary btn-shadow btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Reviews-->
          <section className="py-5 bg-light rounded-3 my-4 my-md-5 px-3 px-sm-4">
            <h2 className="h3 py-4 text-center">Customer reviews</h2>
            <div className="tns-carousel mb-3">
              <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;gutter&quot;: 20, &quot;controls&quot;: false, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 5000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1}, &quot;576&quot;:{&quot;items&quot;:2},&quot;1200&quot;:{&quot;items&quot;:3},&quot;1560&quot;:{&quot;items&quot;:4}}}">
                <blockquote className="mb-2">
                  <div className="card border-0">
                    <div className="card-body px-3 fs-md text-muted">
                      <div className="mb-2">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                        </div>
                      </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua porro quisquam est.
                    </div>
                  </div>
                  <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/03.jpg" width="50" alt="Richard Davis">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Richard Davis</h6><span className="fs-ms text-muted opacity-75">Feb 14, 2020</span>
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="mb-2">
                  <div className="card border-0">
                    <div className="card-body px-3 fs-md text-muted">
                      <div className="mb-2">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                        </div>
                      </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua porro quisquam est.
                    </div>
                  </div>
                  <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/04.jpg" width="50" alt="Laura Willson">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Laura Willson</h6><span className="fs-ms text-muted opacity-75">Feb 05, 2020</span>
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="mb-2">
                  <div className="card border-0">
                    <div className="card-body px-3 fs-md text-muted">
                      <div className="mb-2">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                        </div>
                      </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua porro quisquam est.
                    </div>
                  </div>
                  <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/01.jpg" width="50" alt="Mary Grant">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Mary Alice Grant</h6><span className="fs-ms text-muted opacity-75">Jan 27, 2020</span>
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="mb-2">
                  <div className="card border-0">
                    <div className="card-body px-3 fs-md text-muted">
                      <div className="mb-2">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                        </div>
                      </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua porro quisquam est.
                    </div>
                  </div>
                  <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/shop/reviews/01.jpg" width="50" alt="Rafael Marquez">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Rafael Marquez</h6><span className="fs-ms text-muted opacity-75">Dec 19, 2020</span>
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="mb-2">
                  <div className="card border-0">
                    <div className="card-body px-3 fs-md text-muted">
                      <div className="mb-2">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                        </div>
                      </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua porro quisquam est.
                    </div>
                  </div>
                  <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/02.jpg" width="50" alt="Adrian Lewis">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Adrian Lewis</h6><span className="fs-ms text-muted opacity-75">Dec 13, 2020</span>
                    </div>
                  </footer>
                </blockquote>
                <blockquote className="mb-2">
                  <div className="card border-0">
                    <div className="card-body px-3 fs-md text-muted">
                      <div className="mb-2">
                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                        </div>
                      </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua porro quisquam est.
                    </div>
                  </div>
                  <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/shop/reviews/03.jpg" width="50" alt="Daniel Adams">
                    <div className="ps-3">
                      <h6 className="fs-sm mb-n1">Daniel Adams</h6><span className="fs-ms text-muted opacity-75">Dec 04, 2020</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </section>
          <div className="pb-3"></div>
        </div>
      </section>
      <!-- Footer-->
      <footer className="footer bg-dark pt-5">
        <div className="px-lg-3 pt-2 pb-4">
          <div className="mx-auto px-3" style="max-width: 80rem;">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-sm-4 pb-2 mb-4">
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
              <div className="col-xl-3 col-lg-4 col-sm-4">
                <div className="widget widget-links widget-light pb-2 mb-4">
                  <h3 className="widget-title text-light">Product catalog</h3>
                  <ul className="widget-list">
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Special offers</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Bakery</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Fruits and Vegetables</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Dairy and Eggs</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Meat and Poultry</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Fish and Seafood</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Sauces and Spices</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Canned Food and Oil</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Alcoholic Beverages</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Soft Drinks and Juice</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Packets, Cereals and Poultry</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Frozen</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Personal hygiene</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Kitchenware</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-4">
                <div className="widget widget-links widget-light pb-2 mb-4">
                  <h3 className="widget-title text-light">Company</h3>
                  <ul className="widget-list">
                    <li className="widget-list-item"><a className="widget-list-link" href="#">About us</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Store locator</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Careers at Cartzilla</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Contacts</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Help center</a></li>
                    <li className="widget-list-item"><a className="widget-list-link" href="#">Actions and News</a></li>
                  </ul>
                </div>
                <div className="widget widget-light pb-2 mb-4">
                  <h3 className="widget-title text-light">Follow us</h3><a className="btn-social bs-light bs-twitter me-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-light bs-facebook me-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-light bs-instagram me-2 mb-2" href="#"><i className="ci-instagram"></i></a><a className="btn-social bs-light bs-youtube me-2 mb-2" href="#"><i className="ci-youtube"></i></a>
                </div>
              </div>
              <div className="col-xl-4 col-sm-8">
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
        </div>
        <div className="bg-darker px-lg-3 py-3">
          <div className="d-sm-flex justify-content-between align-items-center mx-auto px-3" style="max-width: 80rem;">
            <div className="fs-xs text-light opacity-50 text-center text-sm-start py-3">© All rights reserved. Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Bandicoot Studio</a></div>
            <div className="py-3"><img className="d-block mx-auto mx-sm-start" src="/img/cards-alt.png" width="187" alt="Payment methods"></div>
          </div>
        </div>
      </footer>
    </main>
    <!-- Back To Top Button--><a className="btn-scroll-top" href="#top" data-scroll data-fixed-element><span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i className="btn-scroll-top-icon ci-arrow-up">   </i></a>
    <!-- Vendor scrits: js libraries and plugins-->
    <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/simplebar/dist/simplebar.min.js"></script>
    <script src="vendor/tiny-slider/dist/min/tiny-slider.js"></script>
    <script src="vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>