<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Food Delivery - Category</title>
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
      <!-- Quick View Modal-->
      <div className="modal-quick-view modal fade" id="quick-view" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Pizza with Salami and Olives</h4>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <!-- Product gallery-->
                <div className="col-lg-7 col-md-6 pe-lg-0"><img src="/img/food-delivery/restaurants/single/large-preview.jpg" alt="Pizza"></div>
                <!-- Product details-->
                <div className="col-lg-5 col-md-6 pt-4 pt-lg-0">
                  <div className="product-details ms-auto pb-3">
                    <div className="mb-3"><span className="h3 fw-normal text-accent me-1">$15.<small>99</small></span></div>
                    <form className="mb-grid-gutter">
                      <div className="row mx-n2">
                        <div className="col-6 px-2">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="pizza-size">Size:</label>
                            <select className="form-select" id="pizza-size">
                              <option value="small">Small</option>
                              <option value="medium">Medium</option>
                              <option value="large">Large</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-6 px-2">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="pizza-base">Base:</label>
                            <select className="form-select" id="pizza-base">
                              <option value="standard">Standard</option>
                              <option value="thin">Thin</option>
                            </select>
                          </div>
                        </div>
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
                    <h5 className="h6 mb-3 pb-3 border-bottom"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</h5>
                    <h6 className="fs-sm mb-2">Ingredients:</h6>
                    <p className="fs-sm">Salami, Olives, Bell pepper, Mushrooms, Mozzarella, Parmesan</p>
                    <h6 className="fs-sm mb-2">Allergies</h6>
                    <p className="fs-sm">Gluten, Dairy</p>
                    <h6 className="fs-sm mb-2">Calories</h6>
                    <p className="fs-sm mb-0">811</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page title-->
      <section className="bg-darker bg-size-cover bg-position-center py-5" style="background-image: url(img/food-delivery/restaurants/single/pt-bg.jpg);">
        <div className="container py-md-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
              <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
              <li className="breadcrumb-item text-nowrap"><a href="#">Restaurants</a>
              </li>
              <li className="breadcrumb-item text-nowrap active" aria-current="page">Domino's Pizza</li>
            </ol>
          </nav>
          <h1 className="text-light text-center text-lg-start py-3">Domino's Pizza</h1>
        </div>
      </section>
      <!-- Page navigation-->
      <nav className="container mt-n5">
        <div className="d-flex align-items-center bg-white rounded-3 shadow-lg py-2 ps-sm-2 pe-4 pe-lg-2"><img className="d-block rounded-3" src="/img/food-delivery/restaurants/logos/02.png" width="150" alt="Brand">
          <div className="ps-lg-3 w-100 text-end">
            <!-- For desktop-->
            <ul className="nav nav-tabs d-none d-lg-flex border-0 mb-0">
              <li className="nav-item"><a className="nav-link active" href="#">Pizza</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Sides</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Drinks</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Dessert</a></li>
            </ul>
            <!-- For mobile-->
            <div className="btn-group dropdown d-lg-none ms-auto">
              <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ci-menu fs-base me-2"></i>Menu</button>
              <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item fs-base active" href="#">Pizza    </a><a className="dropdown-item fs-base" href="#">Sides    </a><a className="dropdown-item fs-base" href="#">Drinks    </a><a className="dropdown-item fs-base" href="#">Dessert    </a></div>
            </div>
          </div>
        </div>
      </nav>
      <!-- Menu (Products grid)-->
      <section className="container tab-content py-4 py-sm-5">
        <h2 className="text-center pt-2 pt-sm-0 mb-sm-5">Pizza</h2>
        <div className="row pt-3 pt-sm-0">
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/01.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza Vegano Delux</a></h3>
                <p className="fs-ms text-muted">Broccoli, Mushrooms, Bell pepper, Corn, Onion, Mozzarella, Parmesan</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size1" id="s1" checked>
                    <label className="form-option-label" htmlFor="s1">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size1" id="m1">
                    <label className="form-option-label" htmlFor="m1">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size1" id="l1">
                    <label className="form-option-label" htmlFor="l1">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base1" id="standard1" checked>
                    <label className="form-option-label" htmlFor="standard1">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base1" id="thin1">
                    <label className="form-option-label" htmlFor="thin1">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$12.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/02.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza Peperoni with Tomatoes</a></h3>
                <p className="fs-ms text-muted">Pepperoni, Tomatoes, Paprika, Chili, Mozzarella, Parmesan</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size2" id="s2" checked>
                    <label className="form-option-label" htmlFor="s2">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size2" id="m2">
                    <label className="form-option-label" htmlFor="m2">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size2" id="l2">
                    <label className="form-option-label" htmlFor="l2">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base2" id="standard2" checked>
                    <label className="form-option-label" htmlFor="standard2">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base2" id="thin2">
                    <label className="form-option-label" htmlFor="thin2">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$14.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/03.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza with Salami and Olives</a></h3>
                <p className="fs-ms text-muted">Salami, Olives, Bell pepper, Mushrooms, Mozzarella, Parmesan</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size3" id="s3" checked>
                    <label className="form-option-label" htmlFor="s3">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size3" id="m3">
                    <label className="form-option-label" htmlFor="m3">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size3" id="l3">
                    <label className="form-option-label" htmlFor="l3">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base3" id="standard3" checked>
                    <label className="form-option-label" htmlFor="standard3">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base3" id="thin3">
                    <label className="form-option-label" htmlFor="thin3">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$15.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/04.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza Quattro Formaggi</a></h3>
                <p className="fs-ms text-muted">Mozzarella, Parmesan, Monterey Jack, Pecorino Romano, Asiago</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size4" id="s4" checked>
                    <label className="form-option-label" htmlFor="s4">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size4" id="m4">
                    <label className="form-option-label" htmlFor="m4">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size4" id="l4">
                    <label className="form-option-label" htmlFor="l4">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base4" id="standard4" checked>
                    <label className="form-option-label" htmlFor="standard4">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base4" id="thin4">
                    <label className="form-option-label" htmlFor="thin4">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$14.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/05.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza Margherita</a></h3>
                <p className="fs-ms text-muted">Mozzarella, Parmesan, Basil, Fresh tomatoes, Tomato sauce</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size5" id="s5" checked>
                    <label className="form-option-label" htmlFor="s5">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size5" id="m5">
                    <label className="form-option-label" htmlFor="m5">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size5" id="l5">
                    <label className="form-option-label" htmlFor="l5">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base5" id="standard5" checked>
                    <label className="form-option-label" htmlFor="standard5">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base5" id="thin5">
                    <label className="form-option-label" htmlFor="thin5">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$10.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/06.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza with Minced Meat</a></h3>
                <p className="fs-ms text-muted">Minced meat, Bacon, Jalapeño, Mozzarella, Parmesan, Olives, Tomatoes</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size6" id="s6" checked>
                    <label className="form-option-label" htmlFor="s6">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size6" id="m6">
                    <label className="form-option-label" htmlFor="m6">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size6" id="l6">
                    <label className="form-option-label" htmlFor="l6">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base6" id="standard6" checked>
                    <label className="form-option-label" htmlFor="standard6">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base6" id="thin6">
                    <label className="form-option-label" htmlFor="thin6">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$15.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/07.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza Hot Salami</a></h3>
                <p className="fs-ms text-muted">Salami, Chilli, Jalapeño, Mozzarella, Parmesan, Tomato sauce</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size7" id="s7" checked>
                    <label className="form-option-label" htmlFor="s7">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size7" id="m7">
                    <label className="form-option-label" htmlFor="m7">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size7" id="l7">
                    <label className="form-option-label" htmlFor="l7">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base7" id="standard7" checked>
                    <label className="form-option-label" htmlFor="standard7">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base7" id="thin7">
                    <label className="form-option-label" htmlFor="thin7">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$14.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
          <!-- Item-->
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card product-card border pb-2"><a className="d-block" href="#quick-view" data-bs-toggle="modal"><img className="card-img-top" src="/img/food-delivery/restaurants/single/08.jpg" alt="Pizza"></a>
              <div className="card-body pt-1 pb-2">
                <h3 className="product-title fs-md"><a href="#quick-view" data-bs-toggle="modal">Pizza with Grilled Meat</a></h3>
                <p className="fs-ms text-muted">Grilled meat, Tomatoes, Bell pepper, Onion, Mozzarella, Parmesan</p>
                <div className="d-flex mb-1">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size8" id="s8" checked>
                    <label className="form-option-label" htmlFor="s8">Small</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size8" id="m8">
                    <label className="form-option-label" htmlFor="m8">Medium</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="size8" id="l8">
                    <label className="form-option-label" htmlFor="l8">Large</label>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base8" id="standard8" checked>
                    <label className="form-option-label" htmlFor="standard8">Standard</label>
                  </div>
                  <div className="form-check form-option form-check-justified mb-2">
                    <input className="form-check-input" type="radio" name="base8" id="thin8">
                    <label className="form-option-label" htmlFor="thin8">Thin</label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="product-price"><span className="text-accent">$16.99</span></div>
                  <button className="btn btn-primary btn-sm" type="button">+<i className="ci-cart fs-base ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Load more button-->
        <nav className="d-md-flex justify-content-between align-items-center text-center text-md-start pt-2 pb-4 mb-md-2" aria-label="Page navigation">
          <div className="d-md-flex align-items-center w-100"><span className="fs-sm text-muted me-md-3">Showing 8 of 24 items</span>
            <div className="progress w-100 my-3 mx-auto mx-md-0" style="max-width: 10rem; height: 4px;">
              <div className="progress-bar bg-dark" role="progressbar" style="width: 18%;" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <button className="btn btn-outline-secondary" type="button">Load more items</button>
        </nav>
      </section>
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