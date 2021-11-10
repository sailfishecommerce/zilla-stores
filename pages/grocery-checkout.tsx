<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Grocery - Checkout</title>
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
  <body class="bg-secondary">
    <!-- Sign in / sign up modal-->
    <div class="modal fade" id="signin-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <ul class="nav nav-tabs card-header-tabs" role="tablist">
              <li class="nav-item"><a class="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true"><i class="ci-unlocked me-2 mt-n1"></i>Sign in</a></li>
              <li class="nav-item"><a class="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false"><i class="ci-user me-2 mt-n1"></i>Sign up</a></li>
            </ul>
            <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body tab-content py-4">
            <form class="needs-validation tab-pane fade show active" autoComplete="off" noValidate id="signin-tab">
              <div class="mb-3">
                <label class="form-label" htmlFor="si-email">Email address</label>
                <input class="form-control" type="email" id="si-email" placeholder="johndoe@example.com" required>
                <div class="invalid-feedback">Please provide a valid email address.</div>
              </div>
              <div class="mb-3">
                <label class="form-label" htmlFor="si-password">Password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="si-password" required>
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="mb-3 d-flex flex-wrap justify-content-between">
                <div class="form-check mb-2">
                  <input class="form-check-input" type="checkbox" id="si-remember">
                  <label class="form-check-label" htmlFor="si-remember">Remember me</label>
                </div><a class="fs-sm" href="#">Forgot password?</a>
              </div>
              <button class="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in</button>
            </form>
            <form class="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
              <div class="mb-3">
                <label class="form-label" htmlFor="su-name">Full name</label>
                <input class="form-control" type="text" id="su-name" placeholder="John Doe" required>
                <div class="invalid-feedback">Please fill in your name.</div>
              </div>
              <div class="mb-3">
                <label htmlFor="su-email">Email address</label>
                <input class="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required>
                <div class="invalid-feedback">Please provide a valid email address.</div>
              </div>
              <div class="mb-3">
                <label class="form-label" htmlFor="su-password">Password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="su-password" required>
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" htmlFor="su-password-confirm">Confirm password</label>
                <div class="password-toggle">
                  <input class="form-control" type="password" id="su-password-confirm" required>
                  <label class="password-toggle-btn" aria-label="Show/hide password">
                    <input class="password-toggle-check" type="checkbox"><span class="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <button class="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar-->
    <header class="bg-light shadow-sm fixed-top" data-fixed-element>
      <div class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid"><a class="navbar-brand d-none d-sm-block me-3 me-xl-4 flex-shrink-0" href="index.html"><img src="/img/logo-dark.png" width="142" alt="Cartzilla"></a><a class="navbar-brand d-sm-none me-2" href="index.html"><img src="/img/logo-icon.png" width="74" alt="Cartzilla"></a>
          <!-- Search-->
          <div class="input-group d-none d-lg-flex flex-nowrap mx-4"><i class="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input class="form-control rounded-start w-100" type="text" placeholder="Search for products">
            <select class="form-select flex-shrink-0" style="width: 14rem;">
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
          <div class="navbar-toolbar d-flex flex-shrink-0 align-items-center ms-xl-2">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav"><span class="navbar-toggler-icon"></span></button><a class="navbar-tool d-flex d-lg-none" href="#searchBox" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="searchBox"><span class="navbar-tool-tooltip">Search</span>
              <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-search"></i></div></a><a class="navbar-tool d-none d-lg-flex" href="#"><span class="navbar-tool-tooltip">Wishlist</span>
              <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-heart"></i></div></a><a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
              <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-user"></i></div>
              <div class="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
            <div class="navbar-tool dropdown ms-3"><a class="navbar-tool-icon-box bg-secondary dropdown-toggle" href="grocery-checkout.html"><span class="navbar-tool-label">3</span><i class="navbar-tool-icon ci-cart"></i></a><a class="navbar-tool-text" href="grocery-checkout.html"><small>My Cart</small>$25.00</a>
              <div class="dropdown-menu dropdown-menu-end">
                <div class="widget widget-cart px-3 pt-2 pb-3" style="width: 20rem;">
                  <div style="height: 15rem;" data-simplebar data-simplebar-auto-hide="false">
                    <div class="widget-cart-item pb-2 border-bottom">
                      <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div class="d-flex align-items-center"><a class="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th01.jpg" width="64" alt="Product"></a>
                        <div class="ps-2">
                          <h6 class="widget-product-title"><a href="grocery-single.html">Frozen Oven-ready Poultry</a></h6>
                          <div class="widget-product-meta"><span class="text-accent me-2">$15.<small>00</small></span><span class="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="widget-cart-item py-2 border-bottom">
                      <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div class="d-flex align-items-center"><a class="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th02.jpg" width="64" alt="Product"></a>
                        <div class="ps-2">
                          <h6 class="widget-product-title"><a href="grocery-single.html">Nut Chocolate Paste (750g)</a></h6>
                          <div class="widget-product-meta"><span class="text-accent me-2">$6.<small>50</small></span><span class="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="widget-cart-item py-2 border-bottom">
                      <button class="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                      <div class="d-flex align-items-center"><a class="d-block" href="grocery-single.html"><img src="/img/grocery/cart/th03.jpg" width="64" alt="Product"></a>
                        <div class="ps-2">
                          <h6 class="widget-product-title"><a href="grocery-single.html">Mozzarella Mini Cheese</a></h6>
                          <div class="widget-product-meta"><span class="text-accent me-2">$3.<small>50</small></span><span class="text-muted">x 1</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap justify-content-between align-items-center pt-3">
                    <div class="fs-sm me-2 py-2"><span class="text-muted">Total:</span><span class="text-accent fs-base ms-1">$25.<small>00</small></span></div><a class="btn btn-primary btn-sm" href="grocery-checkout.html"><i class="ci-card me-2 fs-base align-middle"></i>Checkout<i class="ci-arrow-right ms-1 me-n1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Search collapse-->
      <div class="collapse" id="searchBox">
        <div class="card pt-2 pb-4 border-0 rounded-0">
          <div class="container">
            <div class="input-group"><i class="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input class="form-control rounded-start" type="text" placeholder="Search for products">
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Sidebar menu-->
    <aside class="offcanvas offcanvas-expand w-100 border-end zindex-lg-5 pt-lg-5" id="sideNav" style="max-width: 21.875rem;">
      <div class="pt-2 d-none d-lg-block"></div>
      <ul class="nav nav-tabs nav-justified mt-4 mt-lg-5 mb-0" role="tablist" style="min-height: 3rem;">
        <li class="nav-item"><a class="nav-link fw-medium active" href="#categories" data-bs-toggle="tab" role="tab">Categories</a></li>
        <li class="nav-item"><a class="nav-link fw-medium" href="#menu" data-bs-toggle="tab" role="tab">Menu</a></li>
        <li class="nav-item d-lg-none"><a class="nav-link fs-sm" href="#" data-bs-dismiss="offcanvas" role="tab"><i class="ci-close fs-xs me-2"></i>Close</a></li>
      </ul>
      <div class="offcanvas-body px-0 pt-3 pb-0" data-simplebar>
        <div class="tab-content">
          <!-- Categories-->
          <div class="sidebar-nav tab-pane fade show active" id="categories" role="tabpanel">
            <div class="widget widget-categories">
              <div class="accordion" id="shop-categories">
                <!-- Special offers-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter"><a class="nav-link-style d-block fs-md fw-normal py-3" href="#"><span class="d-flex align-items-center"><i class="ci-discount fs-lg text-danger mt-n1 me-2"></i>Special Offers</span></a></h3>
                </div>
                <!-- Bakery-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#bakery" aria-expanded="false" aria-controls="bakery"><span class="d-flex align-items-center"><i class="ci-bread fs-lg opacity-60 mt-n1 me-2"></i>Bakery</span></button>
                  </h3>
                  <div class="collapse" id="bakery" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Bread</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Baguette</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Loaves</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Ciabatta</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Wheat bread</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Corn bread</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Rye bread</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Rye wheat bread</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Bagels</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Puff pastry</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Stuffed buns</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Buns, sweet cheese danish</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Pita and Flatbread</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fruits and Vegetables-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#fruits" aria-expanded="false" aria-controls="fruits"><span class="d-flex align-items-center"><i class="ci-apple fs-lg opacity-60 mt-n1 me-2"></i>Fruits and Vegetables</span></button>
                  </h3>
                  <div class="collapse" id="fruits" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fruits</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Pears, apples, quinces</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Bananas, pineapples, kiwi</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Citrus</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Peaches, plums, apricots</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Grapes</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Exotic fruits</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Berries</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Vegetables</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Mushrooms</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fresh greens</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Dried fruits</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Dairy and Eggs-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#dairy" aria-expanded="false" aria-controls="dairy"><span class="d-flex align-items-center"><i class="ci-cheese fs-lg opacity-60 mt-n1 me-2"></i>Dairy and Eggs</span></button>
                  </h3>
                  <div class="collapse" id="dairy" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Milk</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Pasteurized milk</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Condensed milk</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Sterilized milk</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Baked milk</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Powder milk</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Coconut milk</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cheese</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Hard cheese</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Semi-hard cheese</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Pickled</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Soft cheese</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Cream-cheese</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Sour cream</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Yogurt</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Sour-milk drinks</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Butter and margarine</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Desserts</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cream</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Eggs</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Meat and Poultry-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#meat" aria-expanded="false" aria-controls="meat"><span class="d-flex align-items-center"><i class="ci-ham-leg fs-lg opacity-60 mt-n1 me-2"></i>Meat and Poultry</span></button>
                  </h3>
                  <div class="collapse" id="meat" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fresh meat</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Pork</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Beef</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Rabbit</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Chicken</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Turkey</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Lamb</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Duck</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Minced meat</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Frozen ready-to-cook</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Sausages</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Meat delicatessen</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Ham</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Cold boiled pork</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Bacon</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Smoked meat</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Jamon</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Cooled meals</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fish and Seafood-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#fish" aria-expanded="false" aria-controls="fish"><span class="d-flex align-items-center"><i class="ci-fish fs-lg opacity-60 me-2"></i>Fish and Seafood</span></button>
                  </h3>
                  <div class="collapse" id="fish" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fresh fish</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Prepared fish</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Light-salted fish</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Marinated fish</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Butter with fish</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Smoked fish</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Dried fish</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Seafood</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Sushi</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Sauces and Spices-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#sauces" aria-expanded="false" aria-controls="sauces"><span class="d-flex align-items-center"><i class="ci-fish fs-lg opacity-60 me-2"></i>Sauces and Spices</span></button>
                  </h3>
                  <div class="collapse" id="sauces" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Mayonnese</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Sauces</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Cooking base</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Mustard</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Soy sauce</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Tomato paste</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Barbecue sauce</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Tartar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Hot sauces</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Balsamic sauce</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Salad dressing</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Curry sauce</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Garlic sauce</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="#">Pesto sauce</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Ketchup</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Herbs and spices</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Salt</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Canned Food and Oil-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#canned" aria-expanded="false" aria-controls="canned"><span class="d-flex align-items-center"><i class="ci-canned-food fs-lg opacity-60 me-2"></i>Canned Food and Oil</span></button>
                  </h3>
                  <div class="collapse" id="canned" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Oils and vinegar</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Canned meat</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Canned fish</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Canned fruit</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Canned vegetables</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Salads and pickles</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Olives</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Pate</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Jam, fruit paste, confiture</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Honey</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Alcoholic Beverages-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#alcoholic" aria-expanded="false" aria-controls="alcoholic"><span class="d-flex align-items-center"><i class="ci-wine fs-lg opacity-60 me-2"></i>Alcoholic Beverages</span></button>
                  </h3>
                  <div class="collapse" id="alcoholic" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Beer</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Wine</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Champagne and sparkling wine</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Alcopops</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Hard liquor</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Liquor</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Soft Drinks and Juice-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#drinks" aria-expanded="false" aria-controls="drinks"><span class="d-flex align-items-center"><i class="ci-juice fs-lg opacity-60 me-2"></i>Soft Drinks and Juice</span></button>
                  </h3>
                  <div class="collapse" id="drinks" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Mineral water</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Juice</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Nectar</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Smoothie</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fruit drincs</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Soda</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Tea</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Coffee</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Ice tea</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cocoa drinks</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Hot chocolate</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Topping</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Packets, Cereals-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#packets" aria-expanded="false" aria-controls="packets"><span class="d-flex align-items-center"><i class="ci-corn fs-lg opacity-60 me-2"></i>Packets, Cereals</span></button>
                  </h3>
                  <div class="collapse" id="packets" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Pasta</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cereal</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Flour</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Porridge and muesli</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Snack meals</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">For baking</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Sugar and sweetener</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Soy food</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Supplements</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Frozen-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#frozen" aria-expanded="false" aria-controls="frozen"><span class="d-flex align-items-center"><i class="ci-frozen fs-lg opacity-60 me-2"></i>Frozen</span></button>
                  </h3>
                  <div class="collapse" id="frozen" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fish</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Meat and poultry</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Salads</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Seafood</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Pizza and breads</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Ready meals</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Fruits</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Vegetables</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Ice-cream</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Frozen bakery</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Personal hygiene-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#hygiene" aria-expanded="false" aria-controls="hygiene"><span class="d-flex align-items-center"><i class="ci-toothbrush fs-lg opacity-60 me-2"></i>Personal hygiene</span></button>
                  </h3>
                  <div class="collapse" id="hygiene" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Oral care</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cotton pads</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">For ladies</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">For shaving and epilation</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cosmetic wipes</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Soap</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Kitchenware-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#kitchenware" aria-expanded="false" aria-controls="kitchenware"><span class="d-flex align-items-center"><i class="ci-pot fs-lg opacity-60 me-2"></i>Kitchenware</span></button>
                  </h3>
                  <div class="collapse" id="kitchenware" data-bs-parent="#shop-categories">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="#">View all</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Glasses, decanters</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Cookware</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Tableware</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Kitchenware</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Food storage</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="#">Disposable tableware</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Menu-->
          <div class="sidebar-nav tab-pane fade" id="menu" role="tabpanel">
            <div class="widget widget-categories">
              <div class="accordion" id="shop-menu">
                <!-- Homepages-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#home" aria-expanded="false" aria-controls="home">Homepages</button>
                  </h3>
                  <div class="collapse" id="home" data-bs-parent="#shop-menu">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="home-fashion-store-v1.html">Fashion Store v.1</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="home-electronics-store.html">Electronics Store</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="home-marketplace.html">Multi-vendor Marketplace</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="home-grocery-store.html">Grocery Store</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="home-food-delivery.html">Food Delivery Service</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="home-fashion-store-v2.html">Fashion Store v.2</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="home-single-store.html">Single Product/Brand Store</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Shop-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#shop" aria-expanded="false" aria-controls="shop">Shop</button>
                  </h3>
                  <div class="collapse" id="shop" data-bs-parent="#shop-menu">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Shop Layouts</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-ls.html">Shop Grid - Left Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-rs.html">Shop Grid - Right Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-grid-ft.html">Shop Grid - Filters on Top</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-list-ls.html">Shop List - Left Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-list-rs.html">Shop List - Right Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-list-ft.html">Shop List - Filters on Top</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Marketplace</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-category.html">Category Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-single.html">Single Item Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-vendor.html">Vendor Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-cart.html">Cart</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="marketplace-checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Grocery Store</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="grocery-catalog.html">Product Catalog</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="grocery-single.html">Single Product Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="grocery-checkout.html">Checkout</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Food Delivery</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-category.html">Category Page</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-single.html">Single Item (Restaurant)</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-cart.html">Cart (Your Order)</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="food-delivery-checkout.html">Checkout (Address &amp; Payment)</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Shop pages</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-categories.html">Shop Categories</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-single-v1.html">Product Page v.1</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-single-v2.html">Product Page v.2</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="shop-cart.html">Cart</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-details.html">Checkout - Details</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-shipping.html">Checkout - Shipping</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-payment.html">Checkout - Payment</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-review.html">Checkout - Review</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="checkout-complete.html">Checkout - Complete</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="order-tracking.html">Order Tracking</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="comparison.html">Product Comparison</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Account-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#account" aria-expanded="false" aria-controls="account">Account</button>
                  </h3>
                  <div class="collapse" id="account" data-bs-parent="#shop-menu">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Shop User Account</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="account-orders.html">Orders History</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="account-profile.html">Profile Settings</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="account-address.html">Account Addresses</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="account-payment.html">Payment Methods</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="account-wishlist.html">Wishlist</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="account-tickets.html">My Tickets</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="account-single-ticket.html">Single Ticket</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Vendor Dashboard</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-settings.html">Settings</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-purchases.html">Purchases</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-favorites.html">Favorites</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-sales.html">Sales</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-products.html">Products</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-add-new-product.html">Add New Product</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="dashboard-payouts.html">Payouts</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link" href="account-signin.html">Sign In / Sign Up</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="account-password-recovery.html">Password Recovery</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Pages-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-controls="pages">Pages</button>
                  </h3>
                  <div class="collapse" id="pages" data-bs-parent="#shop-menu">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="about.html">About Us</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="contacts.html">Contacts</a></li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Help Center</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="help-topics.html">Help Topics</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="help-single-topic.html">Single Topic</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="help-submit-request.html">Submit a Request</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">404 Not Found</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="404-simple.html">404 - Simple Text</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="404-illustration.html">404 - Illustration</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Blog-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#blog" aria-expanded="false" aria-controls="blog">Blog</button>
                  </h3>
                  <div class="collapse" id="blog" data-bs-parent="#shop-menu">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Blog List Layouts</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="blog-list-sidebar.html">List with Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="blog-list.html">List no Sidebar</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Blog Grid Layouts</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="blog-grid-sidebar.html">Grid with Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="blog-grid.html">Grid no Sidebar</a></li>
                            </ul>
                          </li>
                          <li class="widget-list-item"><a class="widget-list-link fw-medium" href="#">Single Post Layouts</a>
                            <ul class="widget-list pt-1">
                              <li class="widget-list-item"><a class="widget-list-link" href="blog-single-sidebar.html">Article with Sidebar</a></li>
                              <li class="widget-list-item"><a class="widget-list-link" href="blog-single.html">Article no Sidebar</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Docs-->
                <div class="accordion-item border-bottom">
                  <h3 class="accordion-header px-grid-gutter">
                    <button class="accordion-button collapsed py-3" type="button" data-bs-toggle="collapse" data-bs-target="#docs" aria-expanded="false" aria-controls="docs">Docs / Components</button>
                  </h3>
                  <div class="collapse" id="docs" data-bs-parent="#shop-menu">
                    <div class="px-grid-gutter pt-1 pb-4">
                      <div class="widget widget-links">
                        <ul class="widget-list">
                          <li class="widget-list-item"><a class="widget-list-link" href="docs/dev-setup.html">Documentation</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="components/typography.html">Components</a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="docs/changelog.html">Changelog<span class="badge bg-success ms-2">v1.4</span></a></li>
                          <li class="widget-list-item"><a class="widget-list-link" href="mailto:contact@createx.studio">Support</a></li>
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
      <div class="offcanvas-footer d-block px-grid-gutter pt-4 pb-4 mb-2">
        <div class="d-flex mb-3"><i class="ci-support h4 mb-0 fw-normal text-primary mt-1 me-1"></i>
          <div class="ps-2">
            <div class="text-muted fs-sm">Support</div><a class="nav-link-style fs-md" href="tel:+100331697720">+1 (00) 33 169 7720</a>
          </div>
        </div>
        <div class="d-flex mb-3"><i class="ci-mail h5 mb-0 fw-normal text-primary mt-1 me-1"></i>
          <div class="ps-2">
            <div class="text-muted fs-sm">Email</div><a class="nav-link-style fs-md" href="mailto:customer@example.com">customer@example.com</a>
          </div>
        </div>
        <h6 class="pt-2 pb-1">Follow us</h6><a class="btn-social bs-outline bs-twitter me-2 mb-2" href="#"><i class="ci-twitter"></i></a><a class="btn-social bs-outline bs-facebook me-2 mb-2" href="#"><i class="ci-facebook"></i></a><a class="btn-social bs-outline bs-instagram me-2 mb-2" href="#"><i class="ci-instagram"></i></a><a class="btn-social bs-outline bs-youtube me-2 mb-2" href="#"><i class="ci-youtube"></i></a>
      </div>
    </aside>
    <!-- Page-->
    <main class="offcanvas-enabled" style="padding-top: 5rem;">
      <section class="ps-lg-4 pe-lg-3 pt-4">
        <div class="px-3 pt-2">
          <!-- Page title + breadcrumb-->
          <nav class="mb-4" aria-label="breadcrumb">
            <ol class="breadcrumb flex-lg-nowrap">
              <li class="breadcrumb-item"><a class="text-nowrap" href="home-grocery-store.html"><i class="ci-home"></i>Home</a></li>
              <li class="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
            </ol>
          </nav>
          <!-- Content-->
          <!-- Checkout form-->
          <form class="needs-validation" noValidate>
            <div class="row g-0 pb-5 mb-xl-3">
              <!-- Delivery details-->
              <div class="col-xl-6 mb-3">
                <h1 class="h2 mb-4">Checkout</h1>
                <h2 class="h5 mb-4">Delivery details</h2>
                <div class="d-flex flex-wrap justify-content-between align-items-center rounded-3 border py-2 px-3 mb-4">
                  <div class="d-flex align-items-center me-3 py-2"><img class="rounded-circle" src="/img/grocery/newyork.jpg" width="50" alt="New York">
                    <div class="ps-3">
                      <div class="fs-ms text-muted">Your city is:</div>
                      <div class="fs-md fw-medium text-heading">New York, USA</div>
                    </div>
                  </div>
                  <div class="py-2"><a class="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0" href="#"><i class="ci-edit me-2"></i>Change city</a></div>
                </div>
                <div class="row gx-4 gy-3">
                  <div class="col-sm-6">
                    <label class="form-label" htmlFor="co-fn">First name <span class='text-danger'>*</span></label>
                    <input class="form-control" type="text" id="co-fn" required>
                    <div class="invalid-feedback">Please enter your first name!</div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" htmlFor="co-ln">Last name <span class='text-danger'>*</span></label>
                    <input class="form-control" type="text" id="co-ln" required>
                    <div class="invalid-feedback">Please enter your last name!</div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" htmlFor="co-ln">Phone number <span class='text-danger'>*</span></label>
                    <input class="form-control" type="tel" id="co-phone" required>
                    <div class="invalid-feedback">Please enter your phone number!</div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" htmlFor="co-fn">Email address</label>
                    <input class="form-control bg-image-none" type="email" id="co-email">
                  </div>
                  <div class="col-sm-12">
                    <label class="form-label" htmlFor="co-address">Address <span class='text-danger'>*</span></label>
                    <input class="form-control" type="text" id="co-address" required>
                    <div class="invalid-feedback">Please enter your address!</div>
                  </div>
                  <div class="col-sm-12">
                    <label class="form-label" htmlFor="co-note">Order note</label>
                    <textarea class="form-control bg-image-none" id="co-note" rows="6" placeholder="Please write here any additional information..."></textarea>
                  </div>
                </div>
                <div class="rounded-3 border p-4 my-3">
                  <h2 class="h6 pb-2">Do you have a coupon code?</h2>
                  <div class="d-flex">
                    <input class="form-control bg-image-none me-3" type="text" placeholder="Coupon code">
                    <button class="btn btn-outline-primary" type="button">Apply code</button>
                  </div>
                </div>
              </div>
              <!-- Order summary + payment-->
              <div class="col-xl-5 offset-xl-1 mb-2">
                <div class="bg-light rounded-3 py-5 px-4 px-xxl-5">
                  <h2 class="h5 pb-3">Your order</h2>
                  <div class="d-flex align-items-center pb-2 border-bottom"><a class="d-block flex-shrink-0" href="grocery-single.html"><img src="/img/grocery/cart/th01.jpg" width="64" alt="Product"></a>
                    <div class="ps-2">
                      <h6 class="widget-product-title"><a href="grocery-single.html">Frozen Oven-ready Poultry</a></h6>
                      <div class="widget-product-meta"><span class="text-accent me-2">$15.<small>00</small></span><span class="text-muted">x 1</span></div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center py-2 border-bottom"><a class="d-block flex-shrink-0" href="grocery-single.html"><img src="/img/grocery/cart/th02.jpg" width="64" alt="Product"></a>
                    <div class="ps-2">
                      <h6 class="widget-product-title"><a href="grocery-single.html">TNut Chocolate Paste (750g)</a></h6>
                      <div class="widget-product-meta"><span class="text-accent me-2">$6.<small>50</small></span><span class="text-muted">x 1</span></div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center py-2 border-bottom"><a class="d-block flex-shrink-0" href="grocery-single.html"><img src="/img/grocery/cart/th03.jpg" width="64" alt="Product"></a>
                    <div class="ps-2">
                      <h6 class="widget-product-title"><a href="grocery-single.html">Mozzarella Mini Cheese</a></h6>
                      <div class="widget-product-meta"><span class="text-accent me-2">$3.<small>50</small></span><span class="text-muted">x 1</span></div>
                    </div>
                  </div>
                  <ul class="list-unstyled fs-sm pt-4 pb-2 border-bottom">
                    <li class="d-flex justify-content-between align-items-center"><span class="me-2">Subtotal:</span><span class="text-end fw-medium">$25.<small>00</small></span></li>
                    <li class="d-flex justify-content-between align-items-center"><span class="me-2">Delivery:</span><span class="text-end fw-medium">$7.<small>00</small></span></li>
                  </ul>
                  <h3 class="fw-normal text-center my-4 py-2">$32.<small>00</small></h3>
                  <div class="accordion accordio-flush shadow-sm rounded-3 mb-4" id="payment-methods">
                    <div class="accordion-item border-bottom">
                      <div class="accordion-header py-3 px-3">
                        <div class="form-check d-table" data-bs-toggle="collapse" data-bs-target="#credit-card">
                          <input class="form-check-input" type="radio" name="license" id="payment-card" checked>
                          <label class="form-check-label fw-medium text-dark" htmlFor="payment-card">Credit card<i class="ci-card text-muted fs-lg align-middle mt-n1 ms-2"></i></label>
                        </div>
                      </div>
                      <div class="collapse show" id="credit-card" data-bs-parent="#payment-methods">
                        <div class="accordion-body py-2">
                          <input class="form-control bg-image-none mb-3" type="text" placeholder="Card number">
                          <div class="row">
                            <div class="col-6 mb-3">
                              <input class="form-control bg-image-none" type="text" placeholder="MM/YY">
                            </div>
                            <div class="col-6 mb-3">
                              <input class="form-control bg-image-none" type="text" placeholder="CVC">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item border-bottom">
                      <div class="accordion-header py-3 px-3">
                        <div class="form-check d-table" data-bs-toggle="collapse" data-bs-target="#paypal">
                          <input class="form-check-input" type="radio" name="license" id="payment-paypal">
                          <label class="form-check-label fw-medium text-dark" htmlFor="payment-paypal">PayPal<i class="ci-paypal text-muted fs-base align-middle mt-n1 ms-2"></i></label>
                        </div>
                      </div>
                      <div class="collapse" id="paypal" data-bs-parent="#payment-methods">
                        <div class="accordion-body pt-2"><a class="btn btn-primary btn-sm" href="#">Proceed with PayPal</a></div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <div class="accordion-header py-3 px-3">
                        <div class="form-check d-table" data-bs-toggle="collapse" data-bs-target="#cash">
                          <input class="form-check-input" type="radio" name="license" id="payment-cash">
                          <label class="form-check-label fw-medium text-dark" htmlFor="payment-cash">Cash on delivery<i class="ci-wallet text-muted fs-lg align-middle mt-n1 ms-2"></i></label>
                        </div>
                      </div>
                      <div class="collapse" id="cash" data-bs-parent="#payment-methods">
                        <div class="accordion-body pt-2">
                          <p class="fs-sm mb-0">I will pay with cash to the courier on delivery.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pt-2">
                    <button class="btn btn-primary d-block w-100" type="submit">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <!-- Footer-->
      <footer class="footer bg-dark pt-5">
        <div class="px-lg-3 pt-2 pb-4">
          <div class="mx-auto px-3" style="max-width: 80rem;">
            <div class="row">
              <div class="col-xl-2 col-lg-3 col-sm-4 pb-2 mb-4">
                <div class="mt-n1"><a class="d-inline-block align-middle" href="#"><img class="d-block mb-4" src="/img/footer-logo-light.png" width="117" alt="Cartzilla"></a></div>
                <div class="btn-group dropdown disable-autohide">
                  <button class="btn btn-outline-light border-light btn-sm dropdown-toggle px-2" type="button" data-bs-toggle="dropdown"><img class="me-2" src="/img/flags/en.png" width="20" alt="English">Eng / $</button>
                  <ul class="dropdown-menu my-1">
                    <li class="dropdown-item">
                      <select class="form-select form-select-sm">
                        <option value="usd">$ USD</option>
                        <option value="eur">€ EUR</option>
                        <option value="ukp">£ UKP</option>
                        <option value="jpy">¥ JPY</option>
                      </select>
                    </li>
                    <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="/img/flags/fr.png" width="20" alt="Français">Français</a></li>
                    <li><a class="dropdown-item pb-1" href="#"><img class="me-2" src="/img/flags/de.png" width="20" alt="Deutsch">Deutsch</a></li>
                    <li><a class="dropdown-item" href="#"><img class="me-2" src="/img/flags/it.png" width="20" alt="Italiano">Italiano</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-4">
                <div class="widget widget-links widget-light pb-2 mb-4">
                  <h3 class="widget-title text-light">Product catalog</h3>
                  <ul class="widget-list">
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Special offers</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Bakery</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Fruits and Vegetables</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Dairy and Eggs</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Meat and Poultry</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Fish and Seafood</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Sauces and Spices</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Canned Food and Oil</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Alcoholic Beverages</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Soft Drinks and Juice</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Packets, Cereals and Poultry</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Frozen</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Personal hygiene</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Kitchenware</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-4">
                <div class="widget widget-links widget-light pb-2 mb-4">
                  <h3 class="widget-title text-light">Company</h3>
                  <ul class="widget-list">
                    <li class="widget-list-item"><a class="widget-list-link" href="#">About us</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Store locator</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Careers at Cartzilla</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Contacts</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Help center</a></li>
                    <li class="widget-list-item"><a class="widget-list-link" href="#">Actions and News</a></li>
                  </ul>
                </div>
                <div class="widget widget-light pb-2 mb-4">
                  <h3 class="widget-title text-light">Follow us</h3><a class="btn-social bs-light bs-twitter me-2 mb-2" href="#"><i class="ci-twitter"></i></a><a class="btn-social bs-light bs-facebook me-2 mb-2" href="#"><i class="ci-facebook"></i></a><a class="btn-social bs-light bs-instagram me-2 mb-2" href="#"><i class="ci-instagram"></i></a><a class="btn-social bs-light bs-youtube me-2 mb-2" href="#"><i class="ci-youtube"></i></a>
                </div>
              </div>
              <div class="col-xl-4 col-sm-8">
                <div class="widget pb-2 mb-4">
                  <h3 class="widget-title text-light pb-1">Stay informed</h3>
                  <form class="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                    <div class="input-group flex-nowrap"><i class="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                      <input class="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required>
                      <button class="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                      <input class="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabindex="-1">
                    </div>
                    <div class="form-text text-light opacity-50">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                    <div class="subscription-status"></div>
                  </form>
                </div>
                <div class="widget pb-2 mb-4">
                  <h3 class="widget-title text-light pb-1">Download our app</h3>
                  <div class="d-flex flex-wrap">
                    <div class="me-2 mb-2"><a class="btn-market btn-apple" href="#" role="button"><span class="btn-market-subtitle">Download on the</span><span class="btn-market-title">App Store</span></a></div>
                    <div class="mb-2"><a class="btn-market btn-google" href="#" role="button"><span class="btn-market-subtitle">Download on the</span><span class="btn-market-title">Google Play</span></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-darker px-lg-3 py-3">
          <div class="d-sm-flex justify-content-between align-items-center mx-auto px-3" style="max-width: 80rem;">
            <div class="fs-xs text-light opacity-50 text-center text-sm-start py-3">© All rights reserved. Made by <a class="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
            <div class="py-3"><img class="d-block mx-auto mx-sm-start" src="/img/cards-alt.png" width="187" alt="Payment methods"></div>
          </div>
        </div>
      </footer>
    </main>
    <!-- Back To Top Button--><a class="btn-scroll-top" href="#top" data-scroll data-fixed-element><span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><i class="btn-scroll-top-icon ci-arrow-up">   </i></a>
    <!-- Vendor scrits: js libraries and plugins-->
    <script src="vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/simplebar/dist/simplebar.min.js"></script>
    <script src="vendor/tiny-slider/dist/min/tiny-slider.js"></script>
    <script src="vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
    <!-- Main theme script-->
    <script src="js/theme.min.js"></script>
  </body>
</html>