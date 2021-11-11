<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cartzilla | Food Delivery Service</title>
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
      <!-- Hero section-->
      <section className="bg-darker bg-size-cover bg-position-center py-5 py-lg-10" style="background-image: url(img/food-delivery/hero-bg.jpg);">
        <div className="container pb-5">
          <div className="row justify-content-center pb-5">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
              <h5 className="text-light fw-light">#1 Food Delivery Service since 2010</h5>
              <div className="h1 text-light mb-3 pb-4">We deliver your favorite food fresh &amp; fast in
                <div className="dropdown d-inline-block ms-1"><a className="dropdown-toggle" href="#" data-bs-toggle="dropdown">New York</a>
                  <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item fs-base" href="#">Los Angeles</a><a className="dropdown-item fs-base" href="#">Chicago</a><a className="dropdown-item fs-base" href="#">Houston</a><a className="dropdown-item fs-base" href="#">Philadelphia</a><a className="dropdown-item fs-base" href="#">San Diego</a><a className="dropdown-item fs-base" href="#">Miami</a></div>
                </div>
              </div><a className="btn btn-primary" href="#cuisine" data-scroll>What do you want to eat?</a>
            </div>
          </div>
        </div>
      </section>
      <!-- Categories (cuisine) grid-->
      <section className="container py-4 my-lg-3 py-sm-5" id="cuisine">
        <h2 className="text-center pt-4 pt-sm-3">Trending food in your city</h2>
        <p className="text-muted text-center mb-5">Choose what you want and we dilever it to you</p>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="card border-0 shadow" href="food-delivery-category.html"><img className="card-img-top" src="/img/food-delivery/category/01.jpg" alt="Burgers &amp; Fries">
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Burgers &amp; Fries</h3>
              </div></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="card border-0 shadow" href="food-delivery-category.html"><img className="card-img-top" src="/img/food-delivery/category/02.jpg" alt="Noodles">
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Noodles</h3>
              </div></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="card border-0 shadow" href="food-delivery-category.html"><img className="card-img-top" src="/img/food-delivery/category/03.jpg" alt="Sushi &amp; Rolls">
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Sushi &amp; Rolls</h3>
              </div></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="card border-0 shadow" href="food-delivery-category.html"><img className="card-img-top" src="/img/food-delivery/category/04.jpg" alt="Pizza &amp; Pasta">
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Pizza &amp; Pasta</h3>
              </div></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="card border-0 shadow" href="food-delivery-category.html"><img className="card-img-top" src="/img/food-delivery/category/05.jpg" alt="Coffee &amp; Desserts">
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Coffee &amp; Desserts</h3>
              </div></a></div>
          <div className="col-md-4 col-sm-6 mb-grid-gutter"><a className="card border-0 shadow" href="food-delivery-category.html"><img className="card-img-top" src="/img/food-delivery/category/06.jpg" alt="Healthy &amp; Food">
              <div className="card-body py-4 text-center">
                <h3 className="h5 mt-1">Healthy &amp; Food</h3>
              </div></a></div>
        </div>
      </section>
      <!-- Mobile app CTA-->
      <section className="bg-primary bg-size-cover bg-position-center pt-5" style="background-image: url(img/food-delivery/mobile-app-bg.jpg);">
        <div className="container pt-2 pt-sm-0">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-sm-6 offset-xl-2 offset-lg-1 mt-md-n5 text-center text-sm-start">
              <h2 className="text-light mb-3">Order food on the go with Cartzilla App</h2>
              <p className="text-light opacity-70 mb-0 d-block d-sm-none d-md-block">Pay with in app wallet, collect loyalty points, track your orders in real time and much more.</p>
              <div className="mt-4 pt-2"><a className="btn-market btn-apple me-3 mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a><a className="btn-market btn-google mb-2" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
            </div>
            <div className="col-lg-5 col-sm-6 offset-lg-1 pt-5 pt-sm-3"><img className="d-block mx-auto mx-sm-0" src="/img/food-delivery/phone.png" width="331" alt="Mobile App Screen"></div>
          </div>
        </div>
      </section>
      <!-- Become Courier / Partner CTA-->
      <section className="container pb-4 pt-lg-5 pb-sm-5">
        <div className="row pt-4 mt-2 mt-lg-3 mb-md-2">
          <div className="col-lg-6 mb-grid-gutter">
            <div className="d-block d-sm-flex justify-content-between align-items-center bg-faded-info rounded-3">
              <div className="pt-5 py-sm-5 px-4 ps-md-5 pe-md-0 text-center text-sm-start">
                <h2>Become a Courier</h2>
                <p className="text-muted pb-2">Earn competitive salary as delivery courier working flexible schedule.</p><a className="btn btn-primary" href="#">Start earning</a>
              </div><img className="d-block mx-auto mx-sm-0" src="/img/food-delivery/courier.png" width="272" alt="Become a Courier">
            </div>
          </div>
          <div className="col-lg-6 mb-grid-gutter">
            <div className="d-block d-sm-flex justify-content-between align-items-center bg-faded-warning rounded-3">
              <div className="pt-5 py-sm-5 px-4 ps-md-5 pe-md-0 text-center text-sm-start">
                <h2>Become a Partner</h2>
                <p className="text-muted pb-2">Grow your business by reaching new customers.</p><a className="btn btn-primary" href="#">Partner with us</a>
              </div><img className="d-block mx-auto mx-sm-0" src="/img/food-delivery/chef.png" width="269" alt="Become a Partner">
            </div>
          </div>
        </div>
      </section>
      <!-- Popular restaurants logo grid-->
      <section className="container pb-4 pt-2 pt-sm-0 pt-md-2 pb-sm-5">
        <h2 className="text-center">Popular restaurants in your city</h2>
        <p className="text-muted pb-4 text-center">Check the best restaurants near you</p>
        <div className="row pb-2 pb-sm-0 pb-md-3">
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/01.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/02.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/03.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/04.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/05.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/06.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/07.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/08.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/09.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/10.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/11.png" style="width: 150px;" alt="Brand"></a></div>
          <div className="col-md-3 col-sm-4 col-6"><a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter" href="food-delivery-single.html"><img className="d-block mx-auto" src="/img/food-delivery/restaurants/logos/12.png" style="width: 150px;" alt="Brand"></a></div>
        </div>
      </section>
      <!-- Reviews-->
      <section className="bg-secondary py-5">
        <div className="container py-md-4 pt-3 pb-0 py-sm-3">
          <h2 className="text-center mb-4 mb-md-5">Customer reviews</h2>
          <div className="tns-carousel mb-3">
            <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;controls&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1, &quot;gutter&quot;:20}, &quot;576&quot;:{&quot;items&quot;:2, &quot;gutter&quot;:20},&quot;850&quot;:{&quot;items&quot;:3, &quot;gutter&quot;:20},&quot;1080&quot;:{&quot;items&quot;:4, &quot;gutter&quot;:25}}}">
              <blockquote className="mb-2">
                <div className="card card-body fs-md text-muted border-0 shadow-sm">
                  <div className="mb-2">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/03.jpg" width="50" alt="Richard Davis">
                  <div className="ps-3">
                    <h6 className="fs-sm mb-n1">Richard Davis</h6><span className="fs-ms text-muted opacity-75">Feb 14, 2020</span>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card card-body fs-md text-muted border-0 shadow-sm">
                  <div className="mb-2">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/04.jpg" width="50" alt="Laura Willson">
                  <div className="ps-3">
                    <h6 className="fs-sm mb-n1">Laura Willson</h6><span className="fs-ms text-muted opacity-75">Feb 05, 2020</span>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card card-body fs-md text-muted border-0 shadow-sm">
                  <div className="mb-2">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/01.jpg" width="50" alt="Mary Grant">
                  <div className="ps-3">
                    <h6 className="fs-sm mb-n1">Mary Alice Grant</h6><span className="fs-ms text-muted opacity-75">Jan 27, 2020</span>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card card-body fs-md text-muted border-0 shadow-sm">
                  <div className="mb-2">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/shop/reviews/01.jpg" width="50" alt="Rafael Marquez">
                  <div className="ps-3">
                    <h6 className="fs-sm mb-n1">Rafael Marquez</h6><span className="fs-ms text-muted opacity-75">Dec 19, 2020</span>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card card-body fs-md text-muted border-0 shadow-sm">
                  <div className="mb-2">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                    </div>
                  </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/testimonials/02.jpg" width="50" alt="Adrian Lewis">
                  <div className="ps-3">
                    <h6 className="fs-sm mb-n1">Adrian Lewis</h6><span className="fs-ms text-muted opacity-75">Dec 13, 2020</span>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="mb-2">
                <div className="card card-body fs-md text-muted border-0 shadow-sm">
                  <div className="mb-2">
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                    </div>
                  </div>Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <footer className="d-flex justify-content-center align-items-center pt-4"><img className="rounded-circle" src="/img/shop/reviews/03.jpg" width="50" alt="Daniel Adams">
                  <div className="ps-3">
                    <h6 className="fs-sm mb-n1">Daniel Adams</h6><span className="fs-ms text-muted opacity-75">Dec 04, 2020</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
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