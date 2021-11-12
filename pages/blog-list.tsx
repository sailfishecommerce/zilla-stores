/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FashionLayout from "../layout/FashionLayout"

export default function BlogList() {
    return (
        <FashionLayout title="Blog list">
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
                                        List no sidebar
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Blog list no sidebar</h1>
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
                                <Link href="/blog-single-sidebar" passHref>
                                    <a className="blog-entry-thumb mb-3">
                                        <span className="blog-entry-meta-label fs-sm">
                                            <i className="ci-time"></i>Sep 10
                                        </span>
                                        <img
                                            src="/img/blog/featured/01.jpg"
                                            alt="Featured post"
                                        />
                                    </a>
                                </Link>
                                <div className="d-flex justify-content-between mb-2 pt-1">
                                    <h2 className="h5 blog-entry-title mb-0">
                                        <Link
                                            href="/blog-single-sidebar"
                                            passHref
                                        >
                                            <a>
                                                Healthy Food - New Way of Living
                                            </a>
                                        </Link>
                                    </h2>
                                    <Link
                                        href="/blog-single-sidebar#comments"
                                        passHref
                                    >
                                        <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                                            <i className="ci-message"></i>13
                                        </a>
                                    </Link>
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
                                <Link href="/blog-single-sidebar" passHref>
                                    <a className="blog-entry-thumb mb-3">
                                        <span className="blog-entry-meta-label fs-sm">
                                            <i className="ci-time"></i>Aug 27
                                        </span>
                                        <img
                                            src="/img/blog/featured/02.jpg"
                                            alt="Featured post"
                                        />
                                    </a>
                                </Link>
                                <div className="d-flex justify-content-between mb-2 pt-1">
                                    <h2 className="h5 blog-entry-title mb-0">
                                        <Link
                                            href="/blog-single-sidebar"
                                            passHref
                                        >
                                            <a>
                                                Online Payment Security Tips for
                                                Shoppers
                                            </a>
                                        </Link>
                                    </h2>
                                    <Link
                                        href="/blog-single-sidebar#comments"
                                        passHref
                                    >
                                        <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                                            <i className="ci-message"></i>9
                                        </a>
                                    </Link>
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
                                <Link href="/blog-single-sidebar" passHref>
                                    <a className="blog-entry-thumb mb-3">
                                        <span className="blog-entry-meta-label fs-sm">
                                            <i className="ci-time"></i>Aug 16
                                        </span>
                                        <img
                                            src="/img/blog/featured/03.jpg"
                                            alt="Featured post"
                                        />
                                    </a>
                                </Link>
                                <div className="d-flex justify-content-between mb-2 pt-1">
                                    <h2 className="h5 blog-entry-title mb-0">
                                        <Link
                                            href="/blog-single-sidebar"
                                            passHref
                                        >
                                            <a>
                                                We Launched New Store in San
                                                Francisco!
                                            </a>
                                        </Link>
                                    </h2>
                                    <Link
                                        href="/blog-single-sidebar#comments"
                                        passHref
                                    >
                                        <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                                            <i className="ci-message"></i>23
                                        </a>
                                    </Link>
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
                    <div className="row justify-content-center pt-5 mt-2">
                        {/*<!-- Entries list-->*/}
                        <section className="col-lg-9">
                            {/*<!-- Entry-->*/}
                            <article className="blog-list border-bottom pb-4 mb-5">
                                <div className="blog-start-column">
                                    <div className="d-flex align-items-center fs-sm pb-2 mb-1">
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
                                        <span className="blog-entry-meta-divider"></span>
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Aug 15
                                        </a>
                                    </div>
                                    <h2 className="h5 blog-entry-title">
                                        <Link href="/blog-single" passHref>
                                            <a>
                                                Global Travel and Vacations on a
                                                Tight Budget
                                            </a>
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-end-column">
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="fs-sm text-muted pe-2 mb-2">
                                            in{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Travel
                                            </a>
                                            ,{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Personal finance
                                            </a>
                                        </div>
                                        <div className="fs-sm mb-2">
                                            <Link
                                                href="/blog-single#comments"
                                                passHref
                                            >
                                                <a className="blog-entry-meta-link text-nowrap">
                                                    <i className="ci-message"></i>
                                                    8
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="fs-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea com consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt…{" "}
                                        <Link href="/blog-single" passHref>
                                            <a className="blog-entry-meta-link fw-medium">
                                                [Read more]
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="blog-list border-bottom pb-4 mb-5">
                                <div className="blog-start-column">
                                    <div className="d-flex align-items-center fs-sm pb-2 mb-1">
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
                                            Jul 23
                                        </a>
                                    </div>
                                    <h2 className="h5 blog-entry-title">
                                        <Link href="/blog-single" passHref>
                                            <a>
                                                Top New Trends in Suburban High
                                                Fashion
                                            </a>
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-end-column">
                                    <Link href="/blog-single" passHref>
                                        <a className="blog-entry-thumb mb-3">
                                            <img
                                                src="/img/blog/01.jpg"
                                                alt="Post"
                                            />
                                        </a>
                                    </Link>
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="fs-sm text-muted pe-2 mb-2">
                                            in{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Shopping
                                            </a>
                                            ,{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Fashion
                                            </a>
                                        </div>
                                        <div className="fs-sm mb-2">
                                            <Link
                                                href="/blog-single#comments"
                                                passHref
                                            >
                                                <a className="blog-entry-meta-link text-nowrap">
                                                    <i className="ci-message"></i>
                                                    19
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="fs-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation…{" "}
                                        <Link href="/blog-single" passHref>
                                            <a className="blog-entry-meta-link fw-medium">
                                                [Read more]
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="blog-list border-bottom pb-4 mb-5">
                                <div className="blog-start-column">
                                    <div className="d-flex align-items-center fs-sm pb-2 mb-1">
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
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Jul 6
                                        </a>
                                    </div>
                                    <h2 className="h5 blog-entry-title">
                                        <Link href="/blog-single" passHref>
                                            <a>
                                                Shopping Tips. Places Where to
                                                Buy Cheap
                                            </a>
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-end-column">
                                    <Link href="/blog-single" passHref>
                                        <a className="blog-entry-thumb mb-3">
                                            <img
                                                src="/img/blog/02.jpg"
                                                alt="Post"
                                            />
                                        </a>
                                    </Link>
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="fs-sm text-muted pe-2 mb-2">
                                            in{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Shopping
                                            </a>
                                            ,{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Personal finance
                                            </a>
                                        </div>
                                        <div className="fs-sm mb-2">
                                            <Link
                                                href="/blog-single#comments"
                                                passHref
                                            >
                                                <a className="blog-entry-meta-link text-nowrap">
                                                    <i className="ci-message"></i>
                                                    15
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="fs-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation…{" "}
                                        <Link href="/blog-single" passHref>
                                            <a className="blog-entry-meta-link fw-medium">
                                                [Read more]
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="blog-list border-bottom pb-4 mb-4">
                                <div className="blog-start-column">
                                    <div className="d-flex align-items-center fs-sm pb-2 mb-1">
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
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            Jun 12
                                        </a>
                                    </div>
                                    <h2 className="h5 blog-entry-title">
                                        <Link href="/blog-single" passHref>
                                            <a>
                                                Google Pay is Now Available in
                                                All O
                                            </a>
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-end-column">
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="fs-sm text-muted pe-2 mb-2">
                                            in{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Bandicoot news
                                            </a>
                                        </div>
                                        <div className="fs-sm mb-2">
                                            <Link
                                                href="/blog-single#comments"
                                                passHref
                                            >
                                                <a className="blog-entry-meta-link text-nowrap">
                                                    <i className="ci-message"></i>
                                                    7
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="fs-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea com consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt…{" "}
                                        <Link href="/blog-single" passHref>
                                            <a className="blog-entry-meta-link fw-medium">
                                                [Read more]
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </article>
                            {/*<!-- Entry-->*/}
                            <article className="blog-list border-bottom pb-4 mb-5">
                                <div className="blog-start-column">
                                    <div className="d-flex align-items-center fs-sm pb-2 mb-1">
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
                                        <a
                                            className="blog-entry-meta-link"
                                            href="#"
                                        >
                                            May 29
                                        </a>
                                    </div>
                                    <h2 className="h5 blog-entry-title">
                                        <Link href="/blog-single" passHref>
                                            <a>
                                                We Launched Regular Drone
                                                Delivery in California. Watch
                                                Demo Video
                                            </a>
                                        </Link>
                                    </h2>
                                </div>
                                <div className="blog-end-column gallery">
                                    <a
                                        className="blog-entry-thumb gallery-item video-item mb-3"
                                        href="/https://www.youtube.com/watch?v=TedKIlo0c04"
                                    >
                                        <span className="blog-entry-meta-label fs-sm">
                                            <i className="ci-video"></i>
                                            <span className="fs-ms">
                                                Watch video
                                            </span>
                                        </span>
                                        <img
                                            src="/img/blog/03.jpg"
                                            alt="Post"
                                        />
                                    </a>
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="fs-sm text-muted pe-2 mb-2">
                                            in{" "}
                                            <a
                                                href="#"
                                                className="blog-entry-meta-link"
                                            >
                                                Bandicoot news
                                            </a>
                                        </div>
                                        <div className="fs-sm mb-2">
                                            <Link
                                                href="/blog-single#comments"
                                                passHref
                                            >
                                                <a className="blog-entry-meta-link text-nowrap">
                                                    <i className="ci-message"></i>
                                                    31
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="fs-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation…{" "}
                                        <Link href="/blog-single" passHref>
                                            <a className="blog-entry-meta-link fw-medium">
                                                [Read more]
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </article>
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
                        </section>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
