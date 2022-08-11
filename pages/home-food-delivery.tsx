/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

import FoodDeliveryLayout from "../layout/FoodDeliveryLayout";

export default function HomefoodDelivery() {
  const CustomerReviewCarousel = dynamic(
    () => import("@/components/Carousel/CustomerReviewCarousel"),
    {
      ssr: false,
    }
  );
  return (
    <FoodDeliveryLayout title="Home food delivery">
      <>
        <section
          className="bg-darker bg-size-cover bg-position-center py-5 py-lg-10"
          style={{
            backgroundImage: "url(img/food-delivery/hero-bg.jpg)",
          }}
        >
          <div className="container pb-5">
            <div className="row justify-content-center pb-5">
              <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
                <h5 className="text-light fw-light">
                  #1 Food Delivery Service since 2010
                </h5>
                <div className="h1 text-light mb-3 pb-4">
                  We deliver your favorite food fresh &amp; fast in
                  <div className="dropdown d-inline-block ms-1">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      New York
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item fs-base" href="#">
                        Los Angeles
                      </a>
                      <a className="dropdown-item fs-base" href="#">
                        Chicago
                      </a>
                      <a className="dropdown-item fs-base" href="#">
                        Houston
                      </a>
                      <a className="dropdown-item fs-base" href="#">
                        Philadelphia
                      </a>
                      <a className="dropdown-item fs-base" href="#">
                        San Diego
                      </a>
                      <a className="dropdown-item fs-base" href="#">
                        Miami
                      </a>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary" href="#cuisine" data-scroll>
                  What do you want to eat?
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Categories (cuisine) grid-->*/}
        <section className="container py-4 my-lg-3 py-sm-5" id="cuisine">
          <h2 className="text-center pt-4 pt-sm-3">
            Trending food in your city
          </h2>
          <p className="text-muted text-center mb-5">
            Choose what you want and we dilever it to you
          </p>
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <Link href="/food-delivery-category" passHref>
                <a className="card border-0 shadow">
                  <img
                    className="card-img-top"
                    src="/img/food-delivery/category/01.jpg"
                    alt="Burgers &amp; Fries"
                  />
                  <div className="card-body py-4 text-center">
                    <h3 className="h5 mt-1">Burgers &amp; Fries</h3>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <Link href="/food-delivery-category" passHref>
                <a className="card border-0 shadow">
                  <img
                    className="card-img-top"
                    src="/img/food-delivery/category/02.jpg"
                    alt="Noodles"
                  />
                  <div className="card-body py-4 text-center">
                    <h3 className="h5 mt-1">Noodles</h3>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <Link href="/food-delivery-category" passHref>
                <a className="card border-0 shadow">
                  <img
                    className="card-img-top"
                    src="/img/food-delivery/category/03.jpg"
                    alt="Sushi &amp; Rolls"
                  />
                  <div className="card-body py-4 text-center">
                    <h3 className="h5 mt-1">Sushi &amp; Rolls</h3>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <Link href="/food-delivery-category" passHref>
                <a className="card border-0 shadow">
                  <img
                    className="card-img-top"
                    src="/img/food-delivery/category/04.jpg"
                    alt="Pizza &amp; Pasta"
                  />
                  <div className="card-body py-4 text-center">
                    <h3 className="h5 mt-1">Pizza &amp; Pasta</h3>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <Link href="/food-delivery-category" passHref>
                <a className="card border-0 shadow">
                  <img
                    className="card-img-top"
                    src="/img/food-delivery/category/05.jpg"
                    alt="Coffee &amp; Desserts"
                  />
                  <div className="card-body py-4 text-center">
                    <h3 className="h5 mt-1">Coffee &amp; Desserts</h3>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 mb-grid-gutter">
              <Link href="/food-delivery-category" passHref>
                <a className="card border-0 shadow">
                  <img
                    className="card-img-top"
                    src="/img/food-delivery/category/06.jpg"
                    alt="Healthy &amp; Food"
                  />
                  <div className="card-body py-4 text-center">
                    <h3 className="h5 mt-1">Healthy &amp; Food</h3>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/*<!-- Mobile app CTA-->*/}
        <section
          className="bg-primary bg-size-cover bg-position-center pt-5"
          style={{
            backgroundImage: "url(img/food-delivery/mobile-app-bg.jpg)",
          }}
        >
          <div className="container pt-2 pt-sm-0">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-5 col-sm-6 offset-xl-2 offset-lg-1 mt-md-n5 text-center text-sm-start">
                <h2 className="text-light mb-3">
                  Order food on the go with Bandicoot App
                </h2>
                <p className="text-light opacity-70 mb-0 d-block d-sm-none d-md-block">
                  Pay with in app wallet, collect loyalty points, track your
                  orders in real time and much more.
                </p>
                <div className="mt-4 pt-2">
                  <a
                    className="btn-market btn-apple me-3 mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">App Store</span>
                  </a>
                  <a
                    className="btn-market btn-google mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 offset-lg-1 pt-5 pt-sm-3">
                <img
                  className="d-block mx-auto mx-sm-0"
                  src="/img/food-delivery/phone.png"
                  width="331"
                  alt="Mobile App Screen"
                />
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Become Courier / Partner CTA-->*/}
        <section className="container pb-4 pt-lg-5 pb-sm-5">
          <div className="row pt-4 mt-2 mt-lg-3 mb-md-2">
            <div className="col-lg-6 mb-grid-gutter">
              <div className="d-block d-sm-flex justify-content-between align-items-center bg-faded-info rounded-3">
                <div className="pt-5 py-sm-5 px-4 ps-md-5 pe-md-0 text-center text-sm-start">
                  <h2>Become a Courier</h2>
                  <p className="text-muted pb-2">
                    Earn competitive salary as delivery courier working flexible
                    schedule.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Start earning
                  </a>
                </div>
                <img
                  className="d-block mx-auto mx-sm-0"
                  src="/img/food-delivery/courier.png"
                  width="272"
                  alt="Become a Courier"
                />
              </div>
            </div>
            <div className="col-lg-6 mb-grid-gutter">
              <div className="d-block d-sm-flex justify-content-between align-items-center bg-faded-warning rounded-3">
                <div className="pt-5 py-sm-5 px-4 ps-md-5 pe-md-0 text-center text-sm-start">
                  <h2>Become a Partner</h2>
                  <p className="text-muted pb-2">
                    Grow your business by reaching new customers.
                  </p>
                  <a className="btn btn-primary" href="#">
                    Partner with us
                  </a>
                </div>
                <img
                  className="d-block mx-auto mx-sm-0"
                  src="/img/food-delivery/chef.png"
                  width="269"
                  alt="Become a Partner"
                />
              </div>
            </div>
          </div>
        </section>
        {/*<!-- Popular restaurants logo grid-->*/}
        <section className="container pb-4 pt-2 pt-sm-0 pt-md-2 pb-sm-5">
          <h2 className="text-center">Popular restaurants in your city</h2>
          <p className="text-muted pb-4 text-center">
            Check the best restaurants near you
          </p>
          <div className="row pb-2 pb-sm-0 pb-md-3">
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/01.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/02.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/03.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/04.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/05.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/06.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/07.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/08.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/09.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/10.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/11.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4 col-6">
              <Link href="/food-delivery-single" passHref>
                <a className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter">
                  <img
                    className="d-block mx-auto"
                    src="/img/food-delivery/restaurants/logos/12.png"
                    style={{ width: "150px" }}
                    alt="Brand"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/*<!-- Reviews-->*/}
        <section className="bg-secondary py-5">
          <div className="container py-md-4 pt-3 pb-0 py-sm-3">
            <h2 className="text-center mb-4 mb-md-5">Customer reviews</h2>
            <CustomerReviewCarousel />
          </div>
        </section>
      </>
    </FoodDeliveryLayout>
  );
}
