/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import GroceryLayout from "../layout/GroceryLayout";

export default function GroceryCatalog() {
    return (
        <GroceryLayout title="Grocery Catalog">
            <>
                <section className="ps-lg-4 pe-lg-3 pt-4">
                    <div className="px-3 pt-2">
                        {/*<!-- Page title + breadcrumb-->*/}
                        <nav className="mb-4" aria-label="breadcrumb">
                            <ol className="breadcrumb flex-lg-nowrap">
                                <li className="breadcrumb-item">
                                    <Link href="/home-grocery-store" passHref>
                                        <a className="text-nowrap">
                                            <i className="ci-home"></i>Home
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item text-nowrap active"
                                    aria-current="page"
                                >
                                    Product catalog
                                </li>
                            </ol>
                        </nav>
                        {/*<!-- Content-->*/}
                        {/*<!-- Sorting-->*/}
                        <section className="d-md-flex justify-content-between align-items-center mb-4 pb-2">
                            <h1 className="h2 mb-3 mb-md-0 me-3">
                                Product catalog
                            </h1>
                            <div className="d-flex align-items-center">
                                <div className="d-none d-sm-block py-2 fs-sm text-muted text-nowrap me-2">
                                    Sort by:
                                </div>
                                <ul className="nav nav-tabs fs-sm mb-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            Popular
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Cheap
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Expensive
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/*<!-- Product grid-->*/}
                        <div className="row g-0 mx-n2">
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/01.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Fruits and Vegetables
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>
                                                    Coconut, Indonesia (piece)
                                                </a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $2.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/02.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Dairy and Eggs
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Soft Creme Cheese (200g)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $3.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <span className="badge bg-danger badge-shadow">
                                        Sale
                                    </span>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/03.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Soft Drinks and Juice
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Pepsi Soda Can (.33ml)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $1.<small>00</small>
                                            </span>
                                            <del className="fs-sm text-muted">
                                                $1.<small>25</small>
                                            </del>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/04.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Fruits and Vegetables
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Fresh Orange, Spain (1kg)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $1.<small>75</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/05.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Personal hygiene
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>
                                                    Moisture Body Lotion (250ml)
                                                </a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $5.<small>20</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <span className="badge bg-info badge-shadow">
                                        New
                                    </span>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/06.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Snacks, Sweets and Chips
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>
                                                    Nut Chocolate Paste (750g)
                                                </a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $7.<small>50</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/07.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Dairy and Eggs
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Mozzarella Mini Cheese</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $4.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/08.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Dairy and Eggs
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Mozzarella Cheese (125g)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $4.<small>30</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/09.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Personal hygiene
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Men’s Shampoo (400ml)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $5.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/10.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Meat and Poultry
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Frozen Oven-ready Poultry</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $12.<small>00</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <span className="badge bg-warning badge-shadow">
                                        Popular
                                    </span>
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/11.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Snacks, Sweets and Chips
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Dark Chocolate with Nuts</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $2.<small>50</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/12.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Canned Food and Oil
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Corn Oil Bottle (500ml)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $3.<small>10</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/13.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Fish and Seafood
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Steak Salmon Fillet (1kg)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $17.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/14.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Canned Food and Oil
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>
                                                    Sardine in Tomato Sauce
                                                    (105g)
                                                </a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $3.<small>25</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/15.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Packets, Cereals
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>Italian Pasta (500g)</a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $2.<small>99</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product-->*/}
                            <div className="col-xl-3 col-lg-6 col-md-4 col-sm-6 px-2 mb-3">
                                <div className="card product-card card-static pb-3">
                                    <button
                                        className="btn-wishlist btn-sm"
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title="Add to wishlist"
                                    >
                                        <i className="ci-heart"></i>
                                    </button>
                                    <Link href="/grocery-single" passHref>
                                        <a className="card-img-top d-block overflow-hidden">
                                            <img
                                                src="/img/grocery/catalog/16.jpg"
                                                alt="Product"
                                            />
                                        </a>
                                    </Link>
                                    <div className="card-body py-2">
                                        <a
                                            className="product-meta d-block fs-xs pb-1"
                                            href="#"
                                        >
                                            Packets, Cereals
                                        </a>
                                        <h3 className="product-title fs-sm text-truncate">
                                            <Link
                                                href="/grocery-single"
                                                passHref
                                            >
                                                <a>
                                                    Rice Cakes with Chia Seeds
                                                </a>
                                            </Link>
                                        </h3>
                                        <div className="product-price">
                                            <span className="text-accent">
                                                $1.<small>40</small>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-floating-btn">
                                        <button
                                            className="btn btn-primary btn-shadow btn-sm"
                                            type="button"
                                        >
                                            +
                                            <i className="ci-cart fs-base ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 pb-md-5 mb-4">
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
                </section>
            </>
        </GroceryLayout>
    );
}
