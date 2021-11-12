/* eslint-disable @next/next/no-img-element */
import FashionLayout from "../layout/FashionLayout";

export default function BlogGrid() {
    return (
        <FashionLayout title="Blog Grid">
            <>
                <div className="bg-secondary py-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <a
                                            className="text-nowrap"
                                            href="index.html"
                                        >
                                            <i className="ci-home"></i>Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item text-nowrap">
                                        <a href="#">Blog</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Grid no sidebar
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Blog grid no sidebar</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5 mb-2 mb-md-4">
                    {/*<!-- Featured posts carousel-->*/}
                    <div className="featured-posts-carousel tns-carousel pt-5">
                        <div
                            className="tns-carousel-inner"
                            data-carousel-options='{"items": 2, "nav": false, "autoHeight": true, "responsive": {"0":{"items":1},"700":{"items":2, "gutter": 20},"991":{"items":2, "gutter": 30}}}'
                        >
                            <article>
                                <a
                                    className="blog-entry-thumb mb-3"
                                    href="blog-single-sidebar.html"
                                >
                                    <span className="blog-entry-meta-label fs-sm">
                                        <i className="ci-time"></i>Sep 10
                                    </span>
                                    <img
                                        src="/img/blog/featured/01.jpg"
                                        alt="Featured post"
                                    />
                                </a>
                                <div className="d-flex justify-content-between mb-2 pt-1">
                                    <h2 className="h5 blog-entry-title mb-0">
                                        <a href="blog-single-sidebar.html">
                                            Healthy Food - New Way of Living
                                        </a>
                                    </h2>
                                    <a
                                        className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1"
                                        href="blog-single-sidebar.html#comments"
                                    >
                                        <i className="ci-message"></i>13
                                    </a>
                                </div>
                                <div className="d-flex align-items-center fs-sm">
                                    <a
                                        className="blog-entry-meta-link"
                                        href="#"
                                    >
                                        <div className="blog-entry-author-ava">
                                            <img
                                                src="/img/blog/meta/04.jpg"
                                                alt="Olivia Reyes"
                                            />
                                        </div>
                                        Olivia Reyes
                                    </a>
                                    <span className="blog-entry-meta-divider"></span>
                                    <div className="fs-sm text-muted">
                                        in{" "}
                                        <a
                                            href="#"
                                            className="blog-entry-meta-link"
                                        >
                                            Lifestyle
                                        </a>
                                        ,{" "}
                                        <a
                                            href="#"
                                            className="blog-entry-meta-link"
                                        >
                                            Nutrition
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <a
                                    className="blog-entry-thumb mb-3"
                                    href="blog-single-sidebar.html"
                                >
                                    <span className="blog-entry-meta-label fs-sm">
                                        <i className="ci-time"></i>Aug 27
                                    </span>
                                    <img
                                        src="/img/blog/featured/02.jpg"
                                        alt="Featured post"
                                    />
                                </a>
                                <div className="d-flex justify-content-between mb-2 pt-1">
                                    <h2 className="h5 blog-entry-title mb-0">
                                        <a href="blog-single-sidebar.html">
                                            Online Payment Security Tips for
                                            Shoppers
                                        </a>
                                    </h2>
                                    <a
                                        className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1"
                                        href="blog-single-sidebar.html#comments"
                                    >
                                        <i className="ci-message"></i>9
                                    </a>
                                </div>
                                <div className="d-flex align-items-center fs-sm">
                                    <a
                                        className="blog-entry-meta-link"
                                        href="#"
                                    >
                                        <div className="blog-entry-author-ava">
                                            <img
                                                src="/img/blog/meta/05.jpg"
                                                alt="Rafael Marquez"
                                            />
                                        </div>
                                        Rafael Marquez
                                    </a>
                                    <span className="blog-entry-meta-divider"></span>
                                    <div className="fs-sm text-muted">
                                        in{" "}
                                        <a
                                            href="#"
                                            className="blog-entry-meta-link"
                                        >
                                            Online shpopping
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article>
                                <a
                                    className="blog-entry-thumb mb-3"
                                    href="blog-single-sidebar.html"
                                >
                                    <span className="blog-entry-meta-label fs-sm">
                                        <i className="ci-time"></i>Aug 16
                                    </span>
                                    <img
                                        src="/img/blog/featured/03.jpg"
                                        alt="Featured post"
                                    />
                                </a>
                                <div className="d-flex justify-content-between mb-2 pt-1">
                                    <h2 className="h5 blog-entry-title mb-0">
                                        <a href="blog-single-sidebar.html">
                                            We Launched New Store in San
                                            Francisco!
                                        </a>
                                    </h2>
                                    <a
                                        className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1"
                                        href="blog-single-sidebar.html#comments"
                                    >
                                        <i className="ci-message"></i>23
                                    </a>
                                </div>
                                <div className="d-flex align-items-center fs-sm">
                                    <a
                                        className="blog-entry-meta-link"
                                        href="#"
                                    >
                                        <div className="blog-entry-author-ava">
                                            <img
                                                src="/img/blog/meta/03.jpg"
                                                alt="Paul Woodred"
                                            />
                                        </div>
                                        Paul Woodred
                                    </a>
                                    <span className="blog-entry-meta-divider"></span>
                                    <div className="fs-sm text-muted">
                                        in{" "}
                                        <a
                                            href="#"
                                            className="blog-entry-meta-link"
                                        >
                                            Bandicoot news
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <hr className="mt-5" />
                    <div className="pt-5 mt-md-2">
                        {/*<!-- Entries grid-->*/}
                        <div className="masonry-grid" data-columns="3">
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Global Travel and Vacations on a
                                                Tight Budget
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua enim ad
                                            minim...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Travel
                                        </a>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Personal finance
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
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
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>8
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <a
                                        className="blog-entry-thumb"
                                        href="blog-single.html"
                                    >
                                        <img
                                            className="card-img-top"
                                            src="/img/blog/01.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Top New Trends in Suburban High
                                                Fashion
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Shopping
                                        </a>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Fashion
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
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
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>19
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Google Pay is Now Available in
                                                All Outlets
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua enim ad
                                            minim...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Bandicoot news
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            <div className="blog-entry-author-ava">
                                                <img
                                                    src="/img/blog/meta/04.jpg"
                                                    alt="Olivia Reyes"
                                                />
                                            </div>
                                            Olivia Reyes
                                        </a>
                                        <div className="ms-auto text-nowrap">
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="#"
                                            >
                                                Jul 6
                                            </a>
                                            <span className="blog-entry-meta-divider mx-2"></span>
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>7
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card gallery">
                                    <a
                                        className="blog-entry-thumb gallery-item video-item"
                                        href="https://www.youtube.com/watch?v=TedKIlo0c04"
                                    >
                                        <span className="blog-entry-meta-label fs-sm">
                                            <i className="ci-video"></i>
                                            <span className="fs-ms">
                                                Watch video
                                            </span>
                                        </span>
                                        <img
                                            className="card-img-top"
                                            src="/img/blog/03.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                We Launched Regular Drone
                                                Delivery in California. Watch
                                                Demo Video
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Bandicoot news
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
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
                                                Jun 12
                                            </a>
                                            <span className="blog-entry-meta-divider mx-2"></span>
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>31
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <a
                                        className="blog-entry-thumb"
                                        href="blog-single.html"
                                    >
                                        <img
                                            className="card-img-top"
                                            src="/img/blog/02.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Shopping Tips. Places Where to
                                                Buy Cheap
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Shopping
                                        </a>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Personal finance
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            <div className="blog-entry-author-ava">
                                                <img
                                                    src="/img/blog/meta/03.jpg"
                                                    alt="Paul Woodred"
                                                />
                                            </div>
                                            Paul Woodred
                                        </a>
                                        <div className="ms-auto text-nowrap">
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="#"
                                            >
                                                May 29
                                            </a>
                                            <span className="blog-entry-meta-divider mx-2"></span>
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>15
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <a
                                        className="blog-entry-thumb"
                                        href="blog-single.html"
                                    >
                                        <img
                                            className="card-img-top"
                                            src="/img/blog/04.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Payments Made Easy. How New
                                                Technology will Affect
                                                E-Commerce Industry Worldwide?
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua enim ad
                                            minim...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Shopping
                                        </a>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Technology
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
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
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>28
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Different Ways E-commerce
                                                Companies Can Capitalize on Apps
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            E-commerce
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            <div className="blog-entry-author-ava">
                                                <img
                                                    src="/img/blog/meta/03.jpg"
                                                    alt="Paul Woodred"
                                                />
                                            </div>
                                            Paul Woodred
                                        </a>
                                        <div className="ms-auto text-nowrap">
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="#"
                                            >
                                                Apr 15
                                            </a>
                                            <span className="blog-entry-meta-divider mx-2"></span>
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>22
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="masonry-grid-item">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="h6 blog-entry-title">
                                            <a href="blog-single.html">
                                                Must Have Clothing On Your Next
                                                Trip
                                            </a>
                                        </h2>
                                        <p className="fs-sm">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt...
                                        </p>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Travel
                                        </a>
                                        <a
                                            className="btn-tag me-2 mb-2"
                                            href="#"
                                        >
                                            Fashion
                                        </a>
                                    </div>
                                    <div className="card-footer d-flex align-items-center fs-xs">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            <div className="blog-entry-author-ava">
                                                <img
                                                    src="/img/blog/meta/04.jpg"
                                                    alt="Olivia Reyes"
                                                />
                                            </div>
                                            Olivia Reyes
                                        </a>
                                        <div className="ms-auto text-nowrap">
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="#"
                                            >
                                                Apr 10
                                            </a>
                                            <span className="blog-entry-meta-divider mx-2"></span>
                                            <a
                                                className="blog-entry-meta-link text-nowrap"
                                                href="blog-single.html#comments"
                                            >
                                                <i className="ci-message"></i>7
                                            </a>
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
                                    <span className="page-link page-link-static">
                                        1 / 5
                                    </span>
                                </li>
                                <li
                                    className="page-item active d-none d-sm-block"
                                    aria-current="page"
                                >
                                    <span className="page-link">
                                        1
                                        <span className="visually-hidden">
                                            (current)
                                        </span>
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
                                    <a
                                        className="page-link"
                                        href="#"
                                        aria-label="Next"
                                    >
                                        Next
                                        <i className="ci-arrow-right ms-2"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
