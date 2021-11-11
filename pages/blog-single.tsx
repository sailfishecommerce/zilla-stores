/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FashionLayout from "../layout/FashionLayout";

export default function BlogSingle() {
    return (
        <FashionLayout title="Blog Single">
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
                                        Single post
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Single post no sidebar</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <div className="row justify-content-center pt-5 mt-md-2">
                        <div className="col-lg-9">
                            {/*<!-- Post meta-->*/}
                            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4 mt-n1">
                                <div className="d-flex align-items-center fs-sm mb-2">
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
                                    <span className="blog-entry-meta-divider"></span>
                                    <a
                                        className="blog-entry-meta-link"
                                        href="#"
                                    >
                                        Jul 17
                                    </a>
                                </div>
                                <div className="fs-sm mb-2">
                                    <a
                                        className="blog-entry-meta-link text-nowrap"
                                        href="#comments"
                                        data-scroll
                                    >
                                        <i className="ci-message"></i>3
                                    </a>
                                </div>
                            </div>
                            {/*<!-- Gallery-->*/}
                            <div className="gallery row pb-2">
                                <div className="col-sm-8">
                                    <a
                                        className="gallery-item rounded-3 mb-grid-gutter"
                                        href="/img/blog/single/01.jpg"
                                        data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption #1&lt;/h6&gt;'
                                    >
                                        <img
                                            src="/img/blog/single/th01.jpg"
                                            alt="Gallery image"
                                        />
                                        <span className="gallery-item-caption">
                                            Gallery image caption #1
                                        </span>
                                    </a>
                                </div>
                                <div className="col-sm-4">
                                    <a
                                        className="gallery-item rounded-3 mb-grid-gutter"
                                        href="/img/blog/single/02.jpg"
                                        data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption #2&lt;/h6&gt;'
                                    >
                                        <img
                                            src="/img/blog/single/th02.jpg"
                                            alt="Gallery image"
                                        />
                                        <span className="gallery-item-caption">
                                            Gallery image caption #2
                                        </span>
                                    </a>
                                    <a
                                        className="gallery-item rounded-3 mb-grid-gutter"
                                        href="/img/blog/single/03.jpg"
                                        data-bs-sub-html='&lt;h6 class="fs-sm text-light"&gt;Gallery image caption #3&lt;/h6&gt;'
                                    >
                                        <img
                                            src="/img/blog/single/th03.jpg"
                                            alt="Gallery image"
                                        />
                                        <span className="gallery-item-caption">
                                            Gallery image caption #3
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/*<!-- Post content-->*/}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem occaecat cupidatat non proident.
                            </p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                            <blockquote className="testimonial my-4 pt-4 pb-2">
                                <div className="card border-0 shadow-sm">
                                    <span className="testimonial-mark"></span>
                                    <div className="card-body fs-md">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum.
                                    </div>
                                </div>
                                <footer className="d-flex align-items-center justify-content-center pt-4">
                                    <img
                                        className="rounded"
                                        src="/img/testimonials/01.jpg"
                                        width="50"
                                        alt="Mary Grant"
                                    />
                                    <div className="ps-3">
                                        <h6 className="fs-sm mb-n1">
                                            Mary Alice Grant
                                        </h6>
                                        <span className="fs-ms text-muted">
                                            Shopoholic
                                        </span>
                                    </div>
                                </footer>
                            </blockquote>
                            <p>
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in
                                culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem
                                rerum facilis est et expedita distinctio. Nam
                                libero tempore, cum soluta nobis est eligendi
                                optio cumque nihil impedit quo minus id quod
                                maxime placeat facere possimus, omnis voluptas
                                assumenda est.
                            </p>
                            {/*<!-- Post tags + sharing-->*/}
                            <div className="d-flex flex-wrap justify-content-between pt-2 pb-4 mb-1">
                                <div className="mt-3 me-3">
                                    <a className="btn-tag me-2 mb-2" href="#">
                                        #merchandise
                                    </a>
                                    <a className="btn-tag mb-2" href="#">
                                        #printed tshirts
                                    </a>
                                </div>
                                <div className="mt-3">
                                    <span className="d-inline-block align-middle text-muted fs-sm me-3 mt-1 mb-2">
                                        Share post:
                                    </span>
                                    <a
                                        className="btn-social bs-facebook me-2 mb-2"
                                        href="#"
                                    >
                                        <i className="ci-facebook"></i>
                                    </a>
                                    <a
                                        className="btn-social bs-twitter me-2 mb-2"
                                        href="#"
                                    >
                                        <i className="ci-twitter"></i>
                                    </a>
                                    <a
                                        className="btn-social bs-pinterest me-2 mb-2"
                                        href="#"
                                    >
                                        <i className="ci-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                            {/*<!-- Post navigation-->*/}
                            <nav
                                className="entry-navigation"
                                aria-label="Post navigation"
                            >
                                <a
                                    className="entry-navigation-link"
                                    href="#"
                                    data-bs-toggle="popover"
                                    data-bs-placement="top"
                                    data-bs-trigger="hover"
                                    data-bs-html="true"
                                    data-bs-content='&lt;div class="d-flex align-items-center"&gt;&lt;img src="img/blog/navigation/01.jpg" width="60" class="rounded" alt="Post thumb"&gt;&lt;div class="ps-3"&gt;&lt;h6 class="fs-sm fw-semibold mb-0"&gt;How to choose perfect shoes for running&lt;/h6&gt;&lt;span class="d-block fs-xs text-muted"&gt;by Susan Mayer&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;'
                                >
                                    <i className="ci-arrow-left me-2"></i>
                                    <span className="d-none d-sm-inline">
                                        Prev post
                                    </span>
                                </a>
                                <Link href="/blog-list" passHref>
                                    <a className="entry-navigation-link">
                                        <i className="ci-view-list me-2"></i>
                                        <span className="d-none d-sm-inline">
                                            All posts
                                        </span>
                                    </a>
                                </Link>
                                <a
                                    className="entry-navigation-link"
                                    href="#"
                                    data-bs-toggle="popover"
                                    data-bs-placement="top"
                                    data-bs-trigger="hover"
                                    data-bs-html="true"
                                    data-bs-content='&lt;div class="d-flex align-items-center"&gt;&lt;img src="img/blog/navigation/02.jpg" width="60" class="rounded" alt="Post thumb"&gt;&lt;div class="ps-3"&gt;&lt;h6  class="fs-sm fw-semibold mb-0"&gt;Factors behind smart watches popularity&lt;/h6&gt;&lt;span class="d-block fs-xs text-muted"&gt;by Logan Coleman&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;'
                                >
                                    <span className="d-none d-sm-inline">
                                        Next post
                                    </span>
                                    <i className="ci-arrow-right ms-2"></i>
                                </a>
                            </nav>
                            {/*<!-- Comments-->*/}
                            <div className="pt-2 mt-5" id="comments">
                                <h2 className="h4">
                                    Comments
                                    <span className="badge bg-secondary fs-sm text-body align-middle ms-2">
                                        3
                                    </span>
                                </h2>
                                {/*<!-- comment-->*/}
                                <div className="d-flex align-items-start py-4 border-bottom">
                                    <img
                                        className="rounded-circle"
                                        src="/img/testimonials/04.jpg"
                                        width="50"
                                        alt="Laura Willson"
                                    />
                                    <div className="ps-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h6 className="fs-md mb-0">
                                                Laura Willson
                                            </h6>
                                            <a
                                                className="nav-link-style fs-sm fw-medium"
                                                href="#"
                                            >
                                                <i className="ci-reply me-2"></i>
                                                Reply
                                            </a>
                                        </div>
                                        <p className="fs-md mb-1">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat
                                            cupidatat non proident, sunt in
                                            culpa qui.
                                        </p>
                                        <span className="fs-ms text-muted">
                                            <i className="ci-time align-middle me-2"></i>
                                            Sep 7, 2019
                                        </span>
                                        {/*<!-- comment reply-->*/}
                                        <div className="d-flex align-items-start border-top pt-4 mt-4">
                                            <img
                                                className="rounded-circle"
                                                src="/img/testimonials/03.jpg"
                                                width="50"
                                                alt="Michael Davis"
                                            />
                                            <div className="ps-3">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <h6 className="fs-md mb-0">
                                                        Michael Davis
                                                    </h6>
                                                </div>
                                                <p className="fs-md mb-1">
                                                    Egestas sed sed risus
                                                    pretium quam vulputate
                                                    dignissim. A diam
                                                    sollicitudin tempor id eu
                                                    nisl. Ut porttitor leo a
                                                    diam. Bibendum at varius vel
                                                    pharetra vel turpis nunc.
                                                </p>
                                                <span className="fs-ms text-muted">
                                                    <i className="ci-time align-middle me-2"></i>
                                                    Sep 13, 2019
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- comment-->*/}
                                <div className="d-flex align-items-start py-4">
                                    <img
                                        className="rounded-circle"
                                        src="/img/testimonials/02.jpg"
                                        width="50"
                                        alt="Benjamin Miller"
                                    />
                                    <div className="ps-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h6 className="fs-md mb-0">
                                                Benjamin Miller
                                            </h6>
                                            <a
                                                className="nav-link-style fs-sm fw-medium"
                                                href="#"
                                            >
                                                <i className="ci-reply me-2"></i>
                                                Reply
                                            </a>
                                        </div>
                                        <p className="fs-md mb-1">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat
                                            cupidatat non proident, sunt in
                                            culpa qui.
                                        </p>
                                        <span className="fs-ms text-muted">
                                            <i className="ci-time align-middle me-2"></i>
                                            Aug 15, 2019
                                        </span>
                                    </div>
                                </div>
                                {/*<!-- Post comment form-->*/}
                                <div className="card border-0 shadow mt-2 mb-4">
                                    <div className="card-body">
                                        <div className="d-flex align-items-start">
                                            <img
                                                className="rounded-circle"
                                                src="/img/testimonials/01.jpg"
                                                width="50"
                                                alt="Mary Alice"
                                            />
                                            <form
                                                className="w-100 needs-validation ms-3"
                                                noValidate
                                            >
                                                <div className="mb-3">
                                                    <textarea
                                                        className="form-control"
                                                        rows={4}
                                                        placeholder="Write comment..."
                                                        required
                                                    ></textarea>
                                                    <div className="invalid-feedback">
                                                        Please write your
                                                        comment.
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    type="submit"
                                                >
                                                    Post comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Related posts-->*/}
                <div className="bg-secondary py-5">
                    <div className="container py-3">
                        <h2 className="h4 text-center pb-4">
                            You may also like
                        </h2>
                        <div className="tns-carousel">
                            <div
                                className="tns-carousel-inner"
                                data-carousel-options='{"items": 2, "controls": false, "autoHeight": true, "responsive": {"0":{"items":1},"500":{"items":2, "gutter": 20},"900":{"items":3, "gutter": 20}, "1100":{"items":3, "gutter": 30}}}'
                            >
                                {/*<!-- article-->*/}
                                <article>
                                    <a
                                        className="blog-entry-thumb mb-3"
                                        href="#"
                                    >
                                        <img
                                            src="/img/blog/03.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="d-flex align-items-center fs-sm mb-2">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            by Rafael Marquez
                                        </a>
                                        <span className="blog-entry-meta-divider"></span>
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Sep 16
                                        </a>
                                    </div>
                                    <h3 className="h6 blog-entry-title">
                                        <a href="#">
                                            We Launched Regular Drone Delivery
                                            in California. Watch Demo Video
                                        </a>
                                    </h3>
                                </article>
                                {/*<!-- article-->*/}
                                <article>
                                    <a
                                        className="blog-entry-thumb mb-3"
                                        href="#"
                                    >
                                        <img
                                            src="/img/blog/04.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="d-flex align-items-center fs-sm mb-2">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            by Emma Gallaher
                                        </a>
                                        <span className="blog-entry-meta-divider"></span>
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Sep 5
                                        </a>
                                    </div>
                                    <h3 className="h6 blog-entry-title">
                                        <a href="#">
                                            Payments Made Easy. How New
                                            Technology will Affect E-Commerce
                                            Industry Worldwide?
                                        </a>
                                    </h3>
                                </article>
                                {/*<!-- article-->*/}
                                <article>
                                    <a
                                        className="blog-entry-thumb mb-3"
                                        href="#"
                                    >
                                        <img
                                            src="/img/blog/02.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="d-flex align-items-center fs-sm mb-2">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            by Emma Gallaher
                                        </a>
                                        <span className="blog-entry-meta-divider"></span>
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Aug 28
                                        </a>
                                    </div>
                                    <h3 className="h6 blog-entry-title">
                                        <a href="#">
                                            Shopping Tips. Complete Guide of
                                            Places Where to Buy Cheap and Get
                                            Cashback
                                        </a>
                                    </h3>
                                </article>
                                {/*<!-- article-->*/}
                                <article>
                                    <a
                                        className="blog-entry-thumb mb-3"
                                        href="#"
                                    >
                                        <img
                                            src="/img/blog/01.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="d-flex align-items-center fs-sm mb-2">
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            by Emma Gallaher
                                        </a>
                                        <span className="blog-entry-meta-divider"></span>
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Aug 28
                                        </a>
                                    </div>
                                    <h3 className="h6 blog-entry-title">
                                        <a href="#">
                                            Top 10 New Trends in Suburban High
                                            Fashion
                                        </a>
                                    </h3>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
