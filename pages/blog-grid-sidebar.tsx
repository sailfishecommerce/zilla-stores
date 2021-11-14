/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dyanmic from "next/dynamic";

import FashionLayout from "../layout/FashionLayout";

const BlogSlider = dyanmic(
  () => import("../component/Carousel/BlogGridCarousel"),
  {
    ssr: false,
  }
);

export default function BlogGridWithSidebar() {
  return (
    <FashionLayout title="Blog Grid Sidebar">
      <>
        <div className="bg-secondary py-4">
          <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
            <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                  <li className="breadcrumb-item">
                    <Link href="/" passHref>
                      <a className="text-nowrap">
                        <i className="ci-home"></i>Home
                      </a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item text-nowrap">
                    <a href="#">Blog</a>
                  </li>
                  <li
                    className="breadcrumb-item text-nowrap active"
                    aria-current="page"
                  >
                    Grid with sidebar
                  </li>
                </ol>
              </nav>
            </div>
            <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
              <h1 className="h3 mb-0">Blog grid with sidebar</h1>
            </div>
          </div>
        </div>
        <div className="container pb-5 mb-2 mb-md-4">
          {/*<!-- Featured posts carousel-->*/}
          <>
            {/* <div className="featured-posts-carousel tns-carousel pt-5">
            <div
              className="tns-carousel-inner"
              data-carousel-options='{"items": 2, "nav": false, "autoHeight": true, "responsive": {"0":{"items":1},"700":{"items":2, "gutter": 20},"991":{"items":2, "gutter": 30}}}'
            >
              <article>
                <Link href="/blog-single-sidebar" passHref>
                  <a className="blog-entry-thumb mb-3">
                    <span className="blog-entry-meta-label fs-sm">
                      <i className="ci-time"></i>Sep 10
                    </span>
                    <img src="/img/blog/featured/01.jpg" alt="Featured post" />
                  </a>
                </Link>
                <div className="d-flex justify-content-between mb-2 pt-1">
                  <h2 className="h5 blog-entry-title mb-0">
                    <Link href="/blog-single-sidebar" passHref>
                      <a>Healthy Food - New Way of Living</a>
                    </Link>
                  </h2>
                  <Link href="/blog-single-sidebar#comments" passHref>
                    <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                      <i className="ci-message"></i>13
                    </a>
                  </Link>
                </div>
                <div className="d-flex align-items-center fs-sm">
                  <a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava">
                      <img src="/img/blog/meta/04.jpg" alt="Olivia Reyes" />
                    </div>
                    Olivia Reyes
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <div className="fs-sm text-muted">
                    in{" "}
                    <a href="#" className="blog-entry-meta-link">
                      Lifestyle
                    </a>
                    ,{" "}
                    <a href="#" className="blog-entry-meta-link">
                      Nutrition
                    </a>
                  </div>
                </div>
              </article>
              <article>
                <Link href="/blog-single-sidebar" passHref>
                  <a className="blog-entry-thumb mb-3">
                    <span className="blog-entry-meta-label fs-sm">
                      <i className="ci-time"></i>Aug 27
                    </span>
                    <img src="/img/blog/featured/02.jpg" alt="Featured post" />
                  </a>
                </Link>
                <div className="d-flex justify-content-between mb-2 pt-1">
                  <h2 className="h5 blog-entry-title mb-0">
                    <Link href="/blog-single-sidebar" passHref>
                      <a>Online Payment Security Tips for Shoppers</a>
                    </Link>
                  </h2>
                  <Link href="/blog-single-sidebar#comments" passHref>
                    <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                      <i className="ci-message"></i>9
                    </a>
                  </Link>
                </div>
                <div className="d-flex align-items-center fs-sm">
                  <a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava">
                      <img src="/img/blog/meta/05.jpg" alt="Rafael Marquez" />
                    </div>
                    Rafael Marquez
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <div className="fs-sm text-muted">
                    in{" "}
                    <a href="#" className="blog-entry-meta-link">
                      Online shpopping
                    </a>
                  </div>
                </div>
              </article>
              <article>
                <Link href="/blog-single-sidebar" passHref>
                  <a className="blog-entry-thumb mb-3">
                    <span className="blog-entry-meta-label fs-sm">
                      <i className="ci-time"></i>Aug 16
                    </span>
                    <img src="/img/blog/featured/03.jpg" alt="Featured post" />
                  </a>
                </Link>
                <div className="d-flex justify-content-between mb-2 pt-1">
                  <h2 className="h5 blog-entry-title mb-0">
                    <Link href="/blog-single-sidebar" passHref>
                      <a>We Launched New Store in San Francisco!</a>
                    </Link>
                  </h2>
                  <Link href="/blog-single-sidebar#comments" passHref>
                    <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                      <i className="ci-message"></i>23
                    </a>
                  </Link>
                </div>
                <div className="d-flex align-items-center fs-sm">
                  <a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava">
                      <img src="/img/blog/meta/03.jpg" alt="Paul Woodred" />
                    </div>
                    Paul Woodred
                  </a>
                  <span className="blog-entry-meta-divider"></span>
                  <div className="fs-sm text-muted">
                    in{" "}
                    <a href="#" className="blog-entry-meta-link">
                      Bandicoot news
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div> */}
          </>
          <BlogSlider />
          <hr className="mt-5" />
          <div className="row pt-5 mt-md-2">
            {/*<!-- Entries grid->*/}
            <section className="col-lg-8">
              <div className="masonry-grid" data-columns="2">
                {/*<!-- Entry-->*/}
                <article className="masonry-grid-item">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="h6 blog-entry-title">
                        <Link href="/blog-single-sidebar" passHref>
                          <a>Global Travel and Vacations on a Tight Budget</a>
                        </Link>
                      </h2>
                      <p className="fs-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua enim ad minim...
                      </p>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Travel
                      </a>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Personal finance
                      </a>
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                      <a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava">
                          <img
                            src="/img/blog/meta/01.jpg"
                            alt="Emma Gallaher"
                          />
                        </div>
                        Emma Gallaher
                      </a>
                      <div className="ms-auto text-nowrap">
                        <a
                          className="blog-entry-meta-link text-nowrap"
                          href="#"
                        >
                          Aug 15
                        </a>
                        <span className="blog-entry-meta-divider mx-2"></span>
                        <Link href="/blog-single-sidebar#comments" passHref>
                          <a className="blog-entry-meta-link text-nowrap">
                            <i className="ci-message"></i>8
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                {/*<!-- Entry-->*/}
                <article className="masonry-grid-item">
                  <div className="card">
                    <Link href="/blog-single-sidebar" passHref>
                      <a className="blog-entry-thumb">
                        <img
                          className="card-img-top"
                          src="/img/blog/01.jpg"
                          alt="Post"
                        />
                      </a>
                    </Link>
                    <div className="card-body">
                      <h2 className="h6 blog-entry-title">
                        <Link href="/blog-single-sidebar" passHref>
                          <a>Top New Trends in Suburban High Fashion</a>
                        </Link>
                      </h2>
                      <p className="fs-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt...
                      </p>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Shopping
                      </a>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Fashion
                      </a>
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                      <a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava">
                          <img
                            src="/img/blog/meta/02.jpg"
                            alt="Cynthia Gomez"
                          />
                        </div>
                        Cynthia Gomez
                      </a>
                      <div className="ms-auto text-nowrap">
                        <a
                          className="blog-entry-meta-link text-nowrap"
                          href="#"
                        >
                          Jul 23
                        </a>
                        <span className="blog-entry-meta-divider mx-2"></span>
                        <Link href="/blog-single-sidebar#comments" passHref>
                          <a className="blog-entry-meta-link text-nowrap">
                            <i className="ci-message"></i>
                            19
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                {/*<!-- Entry-->*/}
                <article className="masonry-grid-item">
                  <div className="card">
                    <Link href="/blog-single-sidebar" passHref>
                      <a className="blog-entry-thumb">
                        <img
                          className="card-img-top"
                          src="/img/blog/02.jpg"
                          alt="Post"
                        />
                      </a>
                    </Link>
                    <div className="card-body">
                      <h2 className="h6 blog-entry-title">
                        <Link href="/blog-single-sidebar" passHref>
                          <a>Shopping Tips. Places Where to Buy Cheap</a>
                        </Link>
                      </h2>
                      <p className="fs-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua enim ad minim...
                      </p>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Shopping
                      </a>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Personal finance
                      </a>
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                      <a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava">
                          <img src="/img/blog/meta/03.jpg" alt="Paul Woodred" />
                        </div>
                        Paul Woodred
                      </a>
                      <div className="ms-auto text-nowrap">
                        <a
                          className="blog-entry-meta-link text-nowrap"
                          href="#"
                        >
                          Jul 6
                        </a>
                        <span className="blog-entry-meta-divider mx-2"></span>
                        <Link href="/blog-single-sidebar#comments" passHref>
                          <a className="blog-entry-meta-link text-nowrap">
                            <i className="ci-message"></i>
                            15
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                {/*<!-- Entry-->*/}
                <article className="masonry-grid-item">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="h6 blog-entry-title">
                        <Link href="/blog-single-sidebar" passHref>
                          <a>Google Pay is Now Available in All Outlets</a>
                        </Link>
                      </h2>
                      <p className="fs-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua enim ad minim...
                      </p>
                      <a className="btn-tag me-2 mb-2" href="#"></a>B news
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                      <a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava">
                          <img src="/img/blog/meta/04.jpg" alt="Olivia Reyes" />
                        </div>
                        Olivia Reyes
                      </a>
                      <div className="ms-auto text-nowrap">
                        <a
                          className="blog-entry-meta-link text-nowrap"
                          href="#"
                        >
                          Jun 12
                        </a>
                        <span className="blog-entry-meta-divider mx-2"></span>
                        <Link href="/blog-single-sidebar#comments" passHref>
                          <a className="blog-entry-meta-link text-nowrap">
                            <i className="ci-message"></i>7
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                {/*<!-- Entry-->*/}
                <article className="masonry-grid-item">
                  <div className="card gallery">
                    <a
                      className="blog-entry-thumb gallery-item video-item"
                      href="/https://www.youtube.com/watch?v=TedKIlo0c04"
                    >
                      <span className="blog-entry-meta-label fs-sm">
                        <i className="ci-video"></i>
                        <span className="fs-ms">Watch video</span>
                      </span>
                      <img
                        className="card-img-top"
                        src="/img/blog/03.jpg"
                        alt="Post"
                      />
                    </a>
                    <div className="card-body">
                      <h2 className="h6 blog-entry-title">
                        <Link href="/blog-single-sidebar" passHref>
                          <a>
                            We Launched Regular Drone Delivery in California.
                            Watch Demo Video
                          </a>
                        </Link>
                      </h2>
                      <p className="fs-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt...
                      </p>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Bandicoot news
                      </a>
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                      <a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava">
                          <img
                            src="/img/blog/meta/05.jpg"
                            alt="Rafael Marquez"
                          />
                        </div>
                        Rafael Marquez
                      </a>
                      <div className="ms-auto text-nowrap">
                        <a
                          className="blog-entry-meta-link text-nowrap"
                          href="#"
                        >
                          May 29
                        </a>
                        <span className="blog-entry-meta-divider mx-2"></span>
                        <Link href="/blog-single-sidebar#comments" passHref>
                          <a className="blog-entry-meta-link text-nowrap">
                            <i className="ci-message"></i>
                            31
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                {/*<!-- Entry-->*/}
                <article className="masonry-grid-item">
                  <div className="card">
                    <Link href="/blog-single-sidebar" passHref>
                      <a className="blog-entry-thumb">
                        <img
                          className="card-img-top"
                          src="/img/blog/04.jpg"
                          alt="Post"
                        />
                      </a>
                    </Link>
                    <div className="card-body">
                      <h2 className="h6 blog-entry-title">
                        <Link href="/blog-single-sidebar" passHref>
                          <a>
                            Payments Made Easy. How New Technology will Affect
                            E-Commerce Industry Worldwide?
                          </a>
                        </Link>
                      </h2>
                      <p className="fs-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua enim ad minim...
                      </p>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Shopping
                      </a>
                      <a className="btn-tag me-2 mb-2" href="#">
                        Technology
                      </a>
                    </div>
                    <div className="card-footer d-flex align-items-center fs-xs">
                      <a className="blog-entry-meta-link" href="#">
                        <div className="blog-entry-author-ava">
                          <img
                            src="/img/blog/meta/01.jpg"
                            alt="Emma Gallaher"
                          />
                        </div>
                        Emma Gallaher
                      </a>
                      <div className="ms-auto text-nowrap">
                        <a
                          className="blog-entry-meta-link text-nowrap"
                          href="#"
                        >
                          May 13
                        </a>
                        <span className="blog-entry-meta-divider mx-2"></span>
                        <Link href="/blog-single-sidebar#comments" passHref>
                          <a className="blog-entry-meta-link text-nowrap">
                            <i className="ci-message"></i>
                            28
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <hr className="mb-4" />
              {/*<!-- Pagination-->*/}
              <nav
                className="d-flex justify-content-between pt-2"
                aria-label="Page navigation"
              >
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="ci-arrow-left me-2"></i>
                      Prev
                    </a>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className="page-item d-sm-none">
                    <span className="page-link page-link-static">1 / 5</span>
                  </li>
                  <li
                    className="page-item active d-none d-sm-block"
                    aria-current="page"
                  >
                    <span className="page-link">
                      1<span className="visually-hidden">(current)</span>
                    </span>
                  </li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                </ul>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      Next
                      <i className="ci-arrow-right ms-2"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <aside className="col-lg-4">
              {/*<!-- Sidebar-->*/}
              <div
                className="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto"
                id="blog-sidebar"
                style={{ maxWidth: "22rem" }}
              >
                <div className="offcanvas-header align-items-center shadow-sm">
                  <h2 className="h5 mb-0">Sidebar</h2>
                  <button
                    className="btn-close ms-auto"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  className="offcanvas-body py-grid-gutter py-lg-1 px-lg-4"
                  data-simplebar
                  data-simplebar-auto-hide="true"
                >
                  {/*<!-- Categories-->*/}
                  <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                    <h3 className="widget-title">Blog categories</h3>
                    <ul className="widget-list">
                      <li className="widget-list-item">
                        <a
                          className="widget-list-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          <span>Online shopping</span>
                          <span className="fs-xs text-muted ms-3">18</span>
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a
                          className="widget-list-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          <span>Fashion</span>
                          <span className="fs-xs text-muted ms-3">25</span>
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a
                          className="widget-list-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          <span>Personal finance</span>
                          <span className="fs-xs text-muted ms-3">13</span>
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a
                          className="widget-list-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          <span>Travel &amp; vacation</span>
                          <span className="fs-xs text-muted ms-3">7</span>
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a
                          className="widget-list-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          <span>Lifestyle</span>
                          <span className="fs-xs text-muted ms-3">34</span>
                        </a>
                      </li>
                      <li className="widget-list-item">
                        <a
                          className="widget-list-link d-flex justify-content-between align-items-center"
                          href="#"
                        >
                          <span>Technology</span>
                          <span className="fs-xs text-muted ms-3">6</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- Trending posts-->*/}
                  <div className="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                    <h3 className="widget-title">Trending posts</h3>
                    <div className="d-flex align-items-center mb-3">
                      <Link href="/blog-single" passHref>
                        <a className="flex-shrink-0">
                          <img
                            className="rounded"
                            src="/img/blog/widget/01.jpg"
                            width="64"
                            alt="Post image"
                          />
                        </a>
                      </Link>
                      <div className="ps-3">
                        <h6 className="blog-entry-title fs-sm mb-0">
                          <Link href="/blog-single" passHref>
                            <a>Retro Cameras are Trending. Why so Popular?</a>
                          </Link>
                        </h6>
                        <span className="fs-ms text-muted">
                          by{" "}
                          <a href="#" className="blog-entry-meta-link">
                            Andy Williams
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <Link href="/blog-single" passHref>
                        <a className="flex-shrink-0">
                          <img
                            className="rounded"
                            src="/img/blog/widget/02.jpg"
                            width="64"
                            alt="Post image"
                          />
                        </a>
                      </Link>
                      <div className="ps-3">
                        <h6 className="blog-entry-title fs-sm mb-0">
                          <Link href="/blog-single" passHref>
                            <a>New Trends in Suburban Fashion</a>
                          </Link>
                        </h6>
                        <span className="fs-ms text-muted">
                          by{" "}
                          <a href="#" className="blog-entry-meta-link">
                            Susan Mayer
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link href="/blog-single" passHref>
                        <a className="flex-shrink-0">
                          <img
                            className="rounded"
                            src="/img/blog/widget/03.jpg"
                            width="64"
                            alt="Post image"
                          />
                        </a>
                      </Link>
                      <div className="ps-3">
                        <h6 className="blog-entry-title fs-sm mb-0">
                          <Link href="/blog-single" passHref>
                            <a>Augmented Reality - Game Changing Technology</a>
                          </Link>
                        </h6>
                        <span className="fs-ms text-muted">
                          by{" "}
                          <a href="#" className="blog-entry-meta-link">
                            John Doe
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*<!-- Popular tags-->*/}
                  <div className="widget pb-grid-gutter mx-lg-2">
                    <h3 className="widget-title">Popular tags</h3>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #fashion
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #gadgets
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #online shopping
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #top brands
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #travel
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #cartzilla news
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #personal finance
                    </a>
                    <a className="btn-tag me-2 mb-2" href="#">
                      #tips &amp; tricks
                    </a>
                  </div>
                  {/*<!-- Promo banner-->*/}
                  <div
                    className="bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2"
                    style={{
                      backgroundImage: "url(img/blog/banner-bg.jpg)",
                    }}
                  >
                    <div className="py-5 px-4 text-center">
                      <h5 className="mb-2">Your Add Banner Here</h5>
                      <p className="fs-sm text-muted">
                        Hurry up to reserve your spot
                      </p>
                      <a className="btn btn-primary btn-shadow btn-sm" href="#">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </>
    </FashionLayout>
  );
}
