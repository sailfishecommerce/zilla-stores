/* eslint-disable @next/next/no-img-element */
import FashionLayout from "../layout/FashionLayout";

export default function BlogListGrid() {
    return (
        <FashionLayout title="Blog Grid">
            <>
      <div className="bg-secondary py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="ci-home"></i>Home</a></li>
                <li className="breadcrumb-item text-nowrap"><a href="#">Blog</a>
                </li>
                <li className="breadcrumb-item text-nowrap active" aria-current="page">List with sidebar</li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 mb-0">Blog list with sidebar</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="featured-posts-carousel tns-carousel pt-5">
          <div className="tns-carousel-inner" data-carousel-options="{&quot;items&quot;: 2, &quot;nav&quot;: false, &quot;autoHeight&quot;: true, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;700&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 20},&quot;991&quot;:{&quot;items&quot;:2, &quot;gutter&quot;: 30}}}">
            <article><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><span className="blog-entry-meta-label fs-sm"><i className="ci-time"></i>Sep 10</span><img src="/img/blog/featured/01.jpg" alt="Featured post" /></a>
              <div className="d-flex justify-content-between mb-2 pt-1">
                <h2 className="h5 blog-entry-title mb-0"><a href="blog-single-sidebar.html">Healthy Food - New Way of Living</a></h2><a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>13</a>
              </div>
              <div className="d-flex align-items-center fs-sm"><a className="blog-entry-meta-link" href="#">
                  <div className="blog-entry-author-ava"><img src="/img/blog/meta/04.jpg" alt="Olivia Reyes" /></div>Olivia Reyes</a><span className="blog-entry-meta-divider"></span>
                <div className="fs-sm text-muted">in <a href='#' className='blog-entry-meta-link'>Lifestyle</a>, <a href='#' className='blog-entry-meta-link'>Nutrition</a></div>
              </div>
            </article>
            <article><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><span className="blog-entry-meta-label fs-sm"><i className="ci-time"></i>Aug 27</span><img src="/img/blog/featured/02.jpg" alt="Featured post" /></a>
              <div className="d-flex justify-content-between mb-2 pt-1">
                <h2 className="h5 blog-entry-title mb-0"><a href="blog-single-sidebar.html">Online Payment Security Tips for Shoppers</a></h2><a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>9</a>
              </div>
              <div className="d-flex align-items-center fs-sm"><a className="blog-entry-meta-link" href="#">
                  <div className="blog-entry-author-ava"><img src="/img/blog/meta/05.jpg" alt="Rafael Marquez" /></div>Rafael Marquez</a><span className="blog-entry-meta-divider"></span>
                <div className="fs-sm text-muted">in <a href='#' className='blog-entry-meta-link'>Online shpopping</a></div>
              </div>
            </article>
            <article><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><span className="blog-entry-meta-label fs-sm"><i className="ci-time"></i>Aug 16</span><img src="/img/blog/featured/03.jpg" alt="Featured post" /></a>
              <div className="d-flex justify-content-between mb-2 pt-1">
                <h2 className="h5 blog-entry-title mb-0"><a href="blog-single-sidebar.html">We Launched New Store in San Francisco!</a></h2><a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>23</a>
              </div>
              <div className="d-flex align-items-center fs-sm"><a className="blog-entry-meta-link" href="#">
                  <div className="blog-entry-author-ava"><img src="/img/blog/meta/03.jpg" alt="Paul Woodred" /></div>Paul Woodred</a><span className="blog-entry-meta-divider"></span>
                <div className="fs-sm text-muted">in <a href='#' className='blog-entry-meta-link'>Cartzilla news</a></div>
              </div>
            </article>
          </div>
        </div>
        <hr className="mt-5"/>
        <div className="row pt-5 mt-2">
          <section className="col-lg-8">
            <article className="blog-list border-bottom pb-4 mb-5">
              <div className="blog-start-column">
                <div className="d-flex align-items-center fs-sm pb-2 mb-1"><a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava"><img src="/img/blog/meta/01.jpg" alt="Emma Gallaher" /></div>Emma Gallaher</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Aug 15</a></div>
                <h2 className="h5 blog-entry-title"><a href="blog-single-sidebar.html">Global Travel and Vacations on a Tight Budget</a></h2>
              </div>
              <div className="blog-end-column">
                <div className="d-flex justify-content-between mb-1">
                  <div className="fs-sm text-muted pe-2 mb-2">in <a href='#' className='blog-entry-meta-link'>Travel</a>, <a href='#' className='blog-entry-meta-link'>Personal finance</a></div>
                  <div className="fs-sm mb-2"><a className="blog-entry-meta-link text-nowrap" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>8</a></div>
                </div>
                <p className="fs-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt… <a href='blog-single-sidebar.html' className='blog-entry-meta-link fw-medium'>[Read more]</a></p>
              </div>
            </article>
            <article className="blog-list border-bottom pb-4 mb-5">
              <div className="blog-start-column">
                <div className="d-flex align-items-center fs-sm pb-2 mb-1"><a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava"><img src="/img/blog/meta/02.jpg" alt="Cynthia Gomez" /></div>Cynthia Gomez</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Jul 23</a></div>
                <h2 className="h5 blog-entry-title"><a href="blog-single-sidebar.html">Top New Trends in Suburban High Fashion</a></h2>
              </div>
              <div className="blog-end-column"><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><img src="/img/blog/01.jpg" alt="Post" /></a>
                <div className="d-flex justify-content-between mb-1">
                  <div className="fs-sm text-muted pe-2 mb-2">in <a href='#' className='blog-entry-meta-link'>Shopping</a>, <a href='#' className='blog-entry-meta-link'>Fashion</a></div>
                  <div className="fs-sm mb-2"><a className="blog-entry-meta-link text-nowrap" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>19</a></div>
                </div>
                <p className="fs-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation… <a href='blog-single-sidebar.html' className='blog-entry-meta-link fw-medium'>[Read more]</a></p>
              </div>
            </article>
            <article className="blog-list border-bottom pb-4 mb-5">
              <div className="blog-start-column">
                <div className="d-flex align-items-center fs-sm pb-2 mb-1"><a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava"><img src="/img/blog/meta/03.jpg" alt="Paul Woodred" /></div>Paul Woodred</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Jul 6</a></div>
                <h2 className="h5 blog-entry-title"><a href="blog-single-sidebar.html">Shopping Tips. Places Where to Buy Cheap</a></h2>
              </div>
              <div className="blog-end-column"><a className="blog-entry-thumb mb-3" href="blog-single-sidebar.html"><img src="/img/blog/02.jpg" alt="Post" /></a>
                <div className="d-flex justify-content-between mb-1">
                  <div className="fs-sm text-muted pe-2 mb-2">in <a href='#' className='blog-entry-meta-link'>Shopping</a>, <a href='#' className='blog-entry-meta-link'>Personal finance</a></div>
                  <div className="fs-sm mb-2"><a className="blog-entry-meta-link text-nowrap" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>15</a></div>
                </div>
                <p className="fs-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation… <a href='blog-single-sidebar.html' className='blog-entry-meta-link fw-medium'>[Read more]</a></p>
              </div>
            </article>
            <article className="blog-list border-bottom pb-4 mb-4">
              <div className="blog-start-column">
                <div className="d-flex align-items-center fs-sm pb-2 mb-1"><a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava"><img src="/img/blog/meta/04.jpg" alt="Olivia Reyes" /></div>Olivia Reyes</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">Jun 12</a></div>
                <h2 className="h5 blog-entry-title"><a href="blog-single-sidebar.html">Google Pay is Now Available in All Outlets</a></h2>
              </div>
              <div className="blog-end-column">
                <div className="d-flex justify-content-between mb-1">
                  <div className="fs-sm text-muted pe-2 mb-2">in <a href='#' className='blog-entry-meta-link'>Cartzilla news</a></div>
                  <div className="fs-sm mb-2"><a className="blog-entry-meta-link text-nowrap" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>7</a></div>
                </div>
                <p className="fs-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt… <a href='blog-single-sidebar.html' className='blog-entry-meta-link fw-medium'>[Read more]</a></p>
              </div>
            </article>
            <article className="blog-list border-bottom pb-4 mb-5">
              <div className="blog-start-column">
                <div className="d-flex align-items-center fs-sm pb-2 mb-1"><a className="blog-entry-meta-link" href="#">
                    <div className="blog-entry-author-ava"><img src="/img/blog/meta/05.jpg" alt="Rafael Marquez" /></div>Rafael Marquez</a><span className="blog-entry-meta-divider"></span><a className="blog-entry-meta-link" href="#">May 29</a></div>
                <h2 className="h5 blog-entry-title"><a href="blog-single-sidebar.html">We Launched Regular Drone Delivery in California. Watch Demo Video</a></h2>
              </div>
              <div className="blog-end-column gallery"><a className="blog-entry-thumb gallery-item video-item mb-3" href="https://www.youtube.com/watch?v=TedKIlo0c04"><span className="blog-entry-meta-label fs-sm"><i className="ci-video"></i><span className="fs-ms">Watch video</span></span><img src="/img/blog/03.jpg" alt="Post" /></a>
                <div className="d-flex justify-content-between mb-1">
                  <div className="fs-sm text-muted pe-2 mb-2">in <a href='#' className='blog-entry-meta-link'>Cartzilla news</a></div>
                  <div className="fs-sm mb-2"><a className="blog-entry-meta-link text-nowrap" href="blog-single-sidebar.html#comments"><i className="ci-message"></i>31</a></div>
                </div>
                <p className="fs-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation… <a href='blog-single-sidebar.html' className='blog-entry-meta-link fw-medium'>[Read more]</a></p>
              </div>
            </article>
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
          <aside className="col-lg-4">
            <div className="offcanvas offcanvas-collapse offcanvas-end border-start ms-lg-auto" id="blog-sidebar" style="max-width: 22rem;">
              <div className="offcanvas-header align-items-center shadow-sm">
                <h2 className="h5 mb-0">Sidebar</h2>
                <button className="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body py-grid-gutter py-lg-1 px-lg-4" data-simplebar data-simplebar-auto-hide="true">
                <div className="widget widget-links mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                  <h3 className="widget-title">Blog categories</h3>
                  <ul className="widget-list">
                    <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Online shopping</span><span className="fs-xs text-muted ms-3">18</span></a></li>
                    <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Fashion</span><span className="fs-xs text-muted ms-3">25</span></a></li>
                    <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Personal finance</span><span className="fs-xs text-muted ms-3">13</span></a></li>
                    <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Travel &amp; vacation</span><span className="fs-xs text-muted ms-3">7</span></a></li>
                    <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Lifestyle</span><span className="fs-xs text-muted ms-3">34</span></a></li>
                    <li className="widget-list-item"><a className="widget-list-link d-flex justify-content-between align-items-center" href="#"><span>Technology</span><span className="fs-xs text-muted ms-3">6</span></a></li>
                  </ul>
                </div>
                <div className="widget mb-grid-gutter pb-grid-gutter border-bottom mx-lg-2">
                  <h3 className="widget-title">Trending posts</h3>
                  <div className="d-flex align-items-center mb-3"><a className="flex-shrink-0" href="blog-single.html"><img className="rounded" src="/img/blog/widget/01.jpg" width="64" alt="Post image" /></a>
                    <div className="ps-3">
                      <h6 className="blog-entry-title fs-sm mb-0"><a href="blog-single.html">Retro Cameras are Trending. Why so Popular?</a></h6><span className="fs-ms text-muted">by <a href='#' className='blog-entry-meta-link'>Andy Williams</a></span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3"><a className="flex-shrink-0" href="blog-single.html"><img className="rounded" src="/img/blog/widget/02.jpg" width="64" alt="Post image" /></a>
                    <div className="ps-3">
                      <h6 className="blog-entry-title fs-sm mb-0"><a href="blog-single.html">New Trends in Suburban Fashion</a></h6><span className="fs-ms text-muted">by <a href='#' className='blog-entry-meta-link'>Susan Mayer</a></span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center"><a className="flex-shrink-0" href="blog-single.html"><img className="rounded" src="/img/blog/widget/03.jpg" width="64" alt="Post image" /></a>
                    <div className="ps-3">
                      <h6 className="blog-entry-title fs-sm mb-0"><a href="blog-single.html">Augmented Reality - Game Changing Technology</a></h6><span className="fs-ms text-muted">by <a href='#' className='blog-entry-meta-link'>John Doe</a></span>
                    </div>
                  </div>
                </div>
                <div className="widget pb-grid-gutter mx-lg-2">
                  <h3 className="widget-title">Popular tags</h3><a className="btn-tag me-2 mb-2" href="#">#fashion</a><a className="btn-tag me-2 mb-2" href="#">#gadgets</a><a className="btn-tag me-2 mb-2" href="#">#online shopping</a><a className="btn-tag me-2 mb-2" href="#">#top brands</a><a className="btn-tag me-2 mb-2" href="#">#travel</a><a className="btn-tag me-2 mb-2" href="#">#cartzilla news</a><a className="btn-tag me-2 mb-2" href="#">#personal finance</a><a className="btn-tag me-2 mb-2" href="#">#tips &amp; tricks</a>
                </div>
                <div className="bg-size-cover bg-position-center rounded-3 py-5 mx-lg-2" style="background-image: url(img/blog/banner-bg.jpg);">
                  <div className="py-5 px-4 text-center">
                    <h5 className="mb-2">Your Add Banner Here</h5>
                    <p className="fs-sm text-muted">Hurry up to reserve your spot</p><a className="btn btn-primary btn-shadow btn-sm" href="#">Contact us</a>
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

