/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import FashionLayout from "../layout/FashionLayout";

export default function ShopCategories() {
    return (
        <FashionLayout title="Shop Categories">
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
                                        <a href="#">Shop</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Categories
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Shop categories</h1>
                        </div>
                    </div>
                </div>
                <div className="container pb-4 pb-sm-5">
                    {/*<!-- Categories grid-->*/}
                    <div className="row pt-5">
                        {/*<!-- Catogory-->*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card border-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-block overflow-hidden rounded-3">
                                        <img
                                            className="d-block w-100"
                                            src="/img/shop/categories/01.jpg"
                                            alt="Clothing"
                                        />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <h2 className="h5">Clothing</h2>
                                    <ul className="list-unstyled fs-sm mb-0">
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Blazers &amp; Suits
                                            </a>
                                            <span className="fs-ms text-muted">
                                                235
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Blouse
                                            </a>
                                            <span className="fs-ms text-muted">
                                                410
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Cardigans &amp; Jumpers
                                            </a>
                                            <span className="fs-ms text-muted">
                                                107
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Dresses
                                            </a>
                                            <span className="fs-ms text-muted">
                                                93
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Hoodie &amp; Sweatshirts
                                            </a>
                                            <span className="fs-ms text-muted">
                                                93
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Sportswear
                                            </a>
                                            <span className="fs-ms text-muted">
                                                65
                                            </span>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                View all
                                            </a>
                                            <span className="fs-ms text-muted">
                                                2,548
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Catogory-->*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card border-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-block overflow-hidden rounded-3">
                                        <img
                                            className="d-block w-100"
                                            src="/img/shop/categories/02.jpg"
                                            alt="Shoes"
                                        />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <h2 className="h5">Shoes</h2>
                                    <ul className="list-unstyled fs-sm mb-0">
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Pumps &amp; High Heels
                                            </a>
                                            <span className="fs-ms text-muted">
                                                247
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Ballerinas &amp; Flats
                                            </a>
                                            <span className="fs-ms text-muted">
                                                156
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Sandals
                                            </a>
                                            <span className="fs-ms text-muted">
                                                310
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Sneakers
                                            </a>
                                            <span className="fs-ms text-muted">
                                                402
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Boots
                                            </a>
                                            <span className="fs-ms text-muted">
                                                393
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Flip Flops
                                            </a>
                                            <span className="fs-ms text-muted">
                                                116
                                            </span>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                View all
                                            </a>
                                            <span className="fs-ms text-muted">
                                                1,953
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Catogory-->*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card border-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-block overflow-hidden rounded-3">
                                        <img
                                            className="d-block w-100"
                                            src="/img/shop/categories/03.jpg"
                                            alt="Gadgets"
                                        />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <h2 className="h5">Gadgets</h2>
                                    <ul className="list-unstyled fs-sm mb-0">
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Smartphones &amp; Tablets
                                            </a>
                                            <span className="fs-ms text-muted">
                                                436
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Headphones
                                            </a>
                                            <span className="fs-ms text-muted">
                                                308
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Wearable Electronics
                                            </a>
                                            <span className="fs-ms text-muted">
                                                195
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Home IoT Gadgets
                                            </a>
                                            <span className="fs-ms text-muted">
                                                82
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Computers &amp; Accessories
                                            </a>
                                            <span className="fs-ms text-muted">
                                                264
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Cameras, Photo &amp; Video
                                            </a>
                                            <span className="fs-ms text-muted">
                                                57
                                            </span>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                View all
                                            </a>
                                            <span className="fs-ms text-muted">
                                                1,240
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Catogory-->*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card border-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-block overflow-hidden rounded-3">
                                        <img
                                            className="d-block w-100"
                                            src="/img/shop/categories/04.jpg"
                                            alt="Furniture"
                                        />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <h2 className="h5">
                                        Furniture &amp; Decor
                                    </h2>
                                    <ul className="list-unstyled fs-sm mb-0">
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Lounge Seating
                                            </a>
                                            <span className="fs-ms text-muted">
                                                374
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                File Cabinets
                                            </a>
                                            <span className="fs-ms text-muted">
                                                83
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Tables
                                            </a>
                                            <span className="fs-ms text-muted">
                                                125
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Indoor Lighting
                                            </a>
                                            <span className="fs-ms text-muted">
                                                291
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Office Chairs
                                            </a>
                                            <span className="fs-ms text-muted">
                                                118
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Adjustable Height Desks
                                            </a>
                                            <span className="fs-ms text-muted">
                                                46
                                            </span>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                View all
                                            </a>
                                            <span className="fs-ms text-muted">
                                                960
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Catogory-->*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card border-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-block overflow-hidden rounded-3">
                                        <img
                                            className="d-block w-100"
                                            src="/img/shop/categories/05.jpg"
                                            alt="Accessories"
                                        />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <h2 className="h5">Accessories</h2>
                                    <ul className="list-unstyled fs-sm mb-0">
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Bags
                                            </a>
                                            <span className="fs-ms text-muted">
                                                417
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Sunglasses
                                            </a>
                                            <span className="fs-ms text-muted">
                                                382
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Watches
                                            </a>
                                            <span className="fs-ms text-muted">
                                                122
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Hats
                                            </a>
                                            <span className="fs-ms text-muted">
                                                204
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Jewelry
                                            </a>
                                            <span className="fs-ms text-muted">
                                                149
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Cosmetics
                                            </a>
                                            <span className="fs-ms text-muted">
                                                90
                                            </span>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                View all
                                            </a>
                                            <span className="fs-ms text-muted">
                                                1,532
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Catogory-->*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="card border-0">
                                <Link href="/shop-grid-ls" passHref>
                                    <a className="d-block overflow-hidden rounded-3">
                                        <img
                                            className="d-block w-100"
                                            src="/img/shop/categories/06.jpg"
                                            alt="Entertainment"
                                        />
                                    </a>
                                </Link>
                                <div className="card-body">
                                    <h2 className="h5">Entertainment</h2>
                                    <ul className="list-unstyled fs-sm mb-0">
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Video Games, VR
                                            </a>
                                            <span className="fs-ms text-muted">
                                                306
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Kid&#39;s Toys
                                            </a>
                                            <span className="fs-ms text-muted">
                                                231
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Table Games
                                            </a>
                                            <span className="fs-ms text-muted">
                                                114
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Outdoor / Camping
                                            </a>
                                            <span className="fs-ms text-muted">
                                                92
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Gifts
                                            </a>
                                            <span className="fs-ms text-muted">
                                                27
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                Music, CDs &amp; Vinyl
                                            </a>
                                            <span className="fs-ms text-muted">
                                                41
                                            </span>
                                        </li>
                                        <li>...</li>
                                        <li>
                                            <hr />
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between">
                                            <a
                                                className="nav-link-style"
                                                href="#"
                                            >
                                                <i className="ci-arrow-right-circle me-2"></i>
                                                View all
                                            </a>
                                            <span className="fs-ms text-muted">
                                                879
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Popular brands-->*/}
                    <h2 className="h3 text-center py-4 mt-md-3">
                        Popular brands
                    </h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/01.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/02.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/03.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/04.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/05.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/06.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/07.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/08.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/09.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/10.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/11.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-4 col-6">
                            <a
                                className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    className="d-block mx-auto"
                                    src="/img/shop/brands/12.png"
                                    width="150"
                                    alt="Brand"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        </FashionLayout>
    );
}
